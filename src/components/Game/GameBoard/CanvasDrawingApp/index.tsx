import React, { useRef, useEffect, useState } from 'react';
import GamePointer from '../GamePointer';
import { styled } from 'styled-components';
import { useSocketContext } from '@/context/SocketContext';
import { DrawData, HandType, SelectedColorType } from '@/types/canvas';
import { useRecoilValue } from 'recoil';
import { playerMaxCountState, uuidState } from '@/atom/game';

type Props = {
  setCurrentFocus: React.Dispatch<React.SetStateAction<string>>;
};

const CanvasDrawingApp = ({ setCurrentFocus }: Props) => {
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
  }, [socket]);

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

  return (
    <Board ref={screenShotRef}>
      <Stage>1/{playerMaxCount} Round</Stage>
      <canvas
        ref={canvasRef}
        width={675}
        height={475}
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
};

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
