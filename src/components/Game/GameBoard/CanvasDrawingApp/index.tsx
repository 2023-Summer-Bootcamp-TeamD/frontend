import React, { useRef, useEffect, useState } from 'react';
import GamePointer from '../GamePointer';
import { styled } from 'styled-components';
import html2canvas from 'html2canvas';
import axios from 'axios';
import { useSocketContext } from '@/context/SocketContext';
import { Socket } from 'socket.io-client';
type Props = {
  setCurrentFocus: React.Dispatch<React.SetStateAction<string>>;
  UUID?: string;
};

const CanvasDrawingApp = ({ setCurrentFocus, UUID }: Props) => {
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
  const [isImageClicked, setIsImageClicked] = useState<boolean>(false);

  const startDrawing = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = event.nativeEvent;
    setIsDrawing(true);
    setLastX(offsetX);
    setLastY(offsetY);
  };

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
    socket?.emit('canvasDraw', { roomId: UUID, drawData });
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    if (context) {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      socket?.emit('canvasEraseAll', UUID);
    }
  };

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

  const handleImageClick = () => {
    setIsImageClicked(true);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        setContext(ctx);
      }
    }
  }, []);

  useEffect(() => {
    const DrawHandler = ({ drawData }: any) => {
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

  useEffect(() => {
    const handleCanvasChangeColor = ({ selectedColor }: any) => {
      setLineColor(selectedColor);
    };

    socket?.on('canvasChangeColor', handleCanvasChangeColor);

    return () => {
      socket?.off('canvasChangeColor', handleCanvasChangeColor);
    };
  }, [socket, isConnected]);

  useEffect(() => {
    const handleCanvasChangeHandType = ({ handType }: any) => {
      setIsErasing(handType);
    };

    socket?.on('canvasChangeType', handleCanvasChangeHandType);

    return () => {
      socket?.off('canvasChangeType', handleCanvasChangeHandType);
    };
  }, [socket, isConnected]);

  return (
    <Board ref={screenShotRef}>
      <Stage>1/5 Round</Stage>
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
        UUID={UUID}
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
  position: relative;
`;
const Stage = styled.div`
  position: absolute;
  right: 2rem;
  font-size: 3rem;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;
