import React, { useRef, useEffect, useState } from 'react';
import GamePointer from '../GamePointer';
import { styled } from 'styled-components';
import html2canvas from 'html2canvas';
import axios from 'axios';
type Props = {
  setCurrentFocus: React.Dispatch<React.SetStateAction<string>>;
};

const CanvasDrawingApp = ({ setCurrentFocus }: Props) => {
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

  const [screenshotBlob, setScreenshotBlob] = useState<Blob | null>(null);

  const handleScreenshot = () => {
    const options = {
      backgroundColor: 'lightblue', // Set the desired background color for the screenshot
    };

    if (screenShotRef.current) {
      html2canvas(screenShotRef.current, options)
        .then((canvas) => {
          // Convert canvas to Blob as PNG image
          canvas.toBlob((blob) => {
            if (blob) {
              setScreenshotBlob(blob); // Store the Blob in state
            }
          }, 'image/png');
          if (screenshotBlob) {
            console.log(screenshotBlob);
            const formData = new FormData();
            formData.append('screenshot', screenshotBlob, 'screenshot.png'); // Append the Blob to FormData

            for (const pair of formData.entries()) {
              console.log(pair[0] + ', ' + pair[1]);
            }
            axios
              .post(
                'http://localhost:8080/api/v1/rooms/b5ab2/picture/rounds',
                formData,
              )
              .then((response) => {
                console.log(response);
                // Handle the response from the server
              })
              .catch((error) => {
                console.log(error);
                // Handle errors
              });
          }
        })
        .catch((error) => {
          console.error('스크린샷 찍기 오류:', error);
        });
    }
  };

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
        setCurrentFocus={setCurrentFocus}
        handleImageClick={handleImageClick}
        setLineColor={setLineColor}
        clearCanvas={clearCanvas}
        setIsErasing={setIsErasing}
      />
      <button onClick={handleScreenshot}>Take Screenshot</button>
      {screenshotBlob && (
        <div>
          <Image src={URL.createObjectURL(screenshotBlob)} alt="Screenshot" />
        </div>
      )}
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
