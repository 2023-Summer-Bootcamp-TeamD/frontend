import React, {
  useRef,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import GamePointer from '../GamePointer';
import { styled } from 'styled-components';
import { useSocketContext } from '@/context/SocketContext';
import { DrawData, HandType, SelectedColorType } from '@/types/canvas';
import { useRecoilValue } from 'recoil';
import {
  currentRoundState,
  nicknameState,
  playerMaxCountState,
  roundGameState,
  userListState,
  uuidState,
} from '@/atom/game';
import useDidMountEffect from '@/hooks/useDidMountEffect';
import html2canvas from 'html2canvas';
import { restFetcher } from '@/queryClient';
import debounce from 'lodash.debounce';

type Props = {
  setCurrentFocus: React.Dispatch<React.SetStateAction<string>>;
};

export type ClearCanvasHandle = {
  clearCanvas: () => void;
};

const CanvasDrawingApp = forwardRef<ClearCanvasHandle, Props>((props, ref) => {
  const { setCurrentFocus } = props;
  useImperativeHandle(ref, () => ({
    clearCanvas,
  }));

  const { socketState } = useSocketContext();
  const { socket, isConnected } = socketState;
  const screenShotRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [lastX, setLastX] = useState<number>(0);
  const [lastY, setLastY] = useState<number>(0);
  const [isErasing, setIsErasing] = useState<boolean>(false);
  const [lineColor, setLineColor] = useState<string>('#ffffff');
  const [lineWidth, setLineWidth] = useState<number>(4);
  const playerMaxCount = useRecoilValue(playerMaxCountState);
  const [isImageClicked, setIsImageClicked] = useState<boolean>(false);
  const uuid = useRecoilValue(uuidState);
  const currentRound = useRecoilValue(currentRoundState);
  const userList = useRecoilValue(userListState);
  const roundGameInfo = useRecoilValue(roundGameState);
  const nickname = useRecoilValue(nicknameState);

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // 창 크기 변화 이벤트 핸들러
  const handleWindowResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  //그리기 시작
  const startDrawing = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = event.nativeEvent;
    setIsDrawing(true);
    setLastX(offsetX);
    setLastY(offsetY);
  };

  //그리기 기능
  const draw = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !context) return;

    //그리는 사람이 아니라면 그리기 제한하기
    if (roundGameInfo.drawer !== nickname) return;

    const { offsetX, offsetY } = event.nativeEvent;
    context.lineJoin = 'round';
    context.lineCap = 'round';
    context.lineWidth = isErasing ? lineWidth + 5 : lineWidth;
    context.globalCompositeOperation = isErasing
      ? 'destination-out'
      : 'source-over';
    context.strokeStyle = lineColor;
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(offsetX, offsetY);
    context.stroke();
    setLastX(offsetX);
    setLastY(offsetY);
    const drawData = {
      lastX,
      lastY,
      offsetX,
      offsetY,
      isDrawing,
    };
    socket?.emit('canvasDraw', { roomId: uuid, drawData });
  };

  //그리기 멈추기
  const stopDrawing = () => {
    setIsDrawing(false);
  };

  //지우개 / 연필타입 전환
  const handleImageClick = () => {
    setIsImageClicked(true);
  };

  //전체 지우기
  const clearCanvas = () => {
    if (roundGameInfo.drawer !== nickname) return;

    if (context) {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      socket?.emit('canvasEraseAll', uuid);
    }
  };

  //서버에서 전체 지우기 가져오기
  useEffect(() => {
    const handleCanvasEraseAll = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        const context = canvas.getContext('2d');
        if (context) {
          context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        }
      }
    };

    socket?.on('canvasEraseAll', handleCanvasEraseAll);

    return () => {
      socket?.off('canvasEraseAll', handleCanvasEraseAll);
    };
  }, [socket, currentRound]);

  //서버에서 그리기 가져오기
  useEffect(() => {
    const DrawHandler = ({ drawData }: { drawData: DrawData }) => {
      if (!drawData.isDrawing || !context) return;

      context.lineJoin = 'round';
      context.lineCap = 'round';
      context.lineWidth = isErasing ? lineWidth + 5 : lineWidth;
      context.globalCompositeOperation = isErasing
        ? 'destination-out'
        : 'source-over';
      context.strokeStyle = lineColor;
      context.beginPath();
      context.moveTo(drawData.lastX, drawData.lastY);
      context.lineTo(drawData.offsetX, drawData.offsetY);
      context.stroke();
      setLastX(drawData.offsetX);
      setLastY(drawData.offsetY);
    };

    socket?.on('canvasDraw', DrawHandler);
    return () => {
      socket?.off('canvasDraw', DrawHandler);
    };
  }, [socket, context, isErasing, lineWidth, lineColor]);

  //서버에서 색깔변경 가져오기
  useEffect(() => {
    const handleCanvasChangeColor = ({ selectedColor }: SelectedColorType) => {
      setLineColor(selectedColor);
    };

    socket?.on('canvasChangeColor', handleCanvasChangeColor);

    return () => {
      socket?.off('canvasChangeColor', handleCanvasChangeColor);
    };
  }, [socket, isConnected]);

  //서버에서 연필/지우개 타입 가져오기
  useEffect(() => {
    const handleCanvasChangeHandType = ({ eraseData }: HandType) => {
      setIsErasing(eraseData);
    };

    socket?.on('canvasErase', handleCanvasChangeHandType);

    return () => {
      socket?.off('canvasErase', handleCanvasChangeHandType);
    };
  }, [socket, isConnected]);

  //캔버스 생성
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        setContext(ctx);
      }
    }
  }, []);

  const canvasToBlob = (canvas: HTMLCanvasElement): Promise<Blob> => {
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        } else {
          throw new Error('Failed to convert canvas to Blob');
        }
      }, 'image/png');
    });
  };

  useDidMountEffect(() => {
    if (screenShotRef.current && roundGameInfo.word_id) {
      html2canvas(screenShotRef.current).then(async (canvas) => {
        try {
          // 캔버스 이미지를 Blob 객체로 변환
          const blob = await canvasToBlob(canvas);

          // Blob 객체로 변환된 이미지 데이터를 서버로 전송합니다.
          const formData = new FormData();
          formData.append('image', blob);

          // FormData 객체에 있는 데이터를 콘솔에 출력
          for (const [key, value] of formData) {
            console.log(`${key}: ${value}`);
          }

          // 서버로 이미지를 전송합니다.
          const result = await restFetcher({
            method: 'POST',
            path: `/rooms/${uuid}/words/${roundGameInfo.word_id}/rounds`,
            body: formData,
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });

          console.log(result);
        } catch (error) {
          console.error(error);
        }
      });
    }
  }, [currentRound]);

  return (
    <Board ref={screenShotRef}>
      <Stage>
        {currentRound}/{playerMaxCount} Round
      </Stage>
      <Result>{roundGameInfo.word && `정답 : ${roundGameInfo.word}`}</Result>
      <canvas
        ref={canvasRef}
        width={500}
        height={275}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
      />
      <GamePointer
        setCurrentFocus={setCurrentFocus}
        handleImageClick={handleImageClick}
        setLineColor={setLineColor}
        clearCanvas={clearCanvas}
        setIsErasing={setIsErasing}
      />
    </Board>
  );
});

CanvasDrawingApp.displayName = 'CanvasDrawingApp';

export default CanvasDrawingApp;

const Board = styled.div`
  & > canvas {
    position: relative;
  }
`;
const Stage = styled.div`
  position: absolute;
  right: 2rem;
  font-size: 3rem;
`;

const Result = styled.div`
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  color: white;
`;
