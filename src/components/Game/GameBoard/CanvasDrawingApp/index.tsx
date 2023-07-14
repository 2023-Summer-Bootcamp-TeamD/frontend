import React, { useRef, useEffect, useState } from 'react';
import GamePointer from '../GamePointer';

type Props = {
  setCurrentFoucs: React.Dispatch<React.SetStateAction<string>>;
};

const CanvasDrawingApp = ({ setCurrentFoucs }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [lastX, setLastX] = useState<number>(0);
  const [lastY, setLastY] = useState<number>(0);
  const [isErasing, setIsErasing] = useState<boolean>(false);
  const [lineColor, setLineColor] = useState<string>('#ffffff');
  const [lineWidth, setLineWidth] = useState<number>(4);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        setContext(ctx);
      }
    }
  }, []);

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
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    if (context) {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    }
  };

  const [isImageClicked, setIsImageClicked] = useState<boolean>(false);

  const handleImageClick = () => {
    setIsImageClicked(true);
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={575}
        height={450}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
      />
      <GamePointer
        setCurrentFoucs={setCurrentFoucs}
        handleImageClick={handleImageClick}
        setLineColor={setLineColor}
        clearCanvas={clearCanvas}
        setIsErasing={setIsErasing}
      />
    </div>
  );
};

export default CanvasDrawingApp;
