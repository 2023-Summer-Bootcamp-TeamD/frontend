import React, { useRef, useEffect, useState } from 'react';
import GamePointer from '../GamePointer';

const CanvasDrawingApp = () => {
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

  const toggleEraser = () => {
    setIsErasing(!isErasing);
  };

  const changeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLineColor(event.target.value);
  };

  const changeLineWidth = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLineWidth(Number(event.target.value));
  };

  const clearCanvas = () => {
    if (context) {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    }
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
      />
      <div>
        <label>
          선의 색상:
          <input type="color" value={lineColor} onChange={changeColor} />
        </label>
        <label>
          선의 굵기:
          <input
            type="number"
            value={lineWidth}
            min="1"
            max="10"
            step="1"
            onChange={changeLineWidth}
          />
        </label>
        <button onClick={toggleEraser}>
          {isErasing ? '그리기 모드' : '지우기 모드'}
        </button>
        <button onClick={clearCanvas}>모두 지우기</button>
      </div>
      <GamePointer clearCanvas={clearCanvas} setIsErasing={setIsErasing} />
    </div>
  );
};

export default CanvasDrawingApp;
