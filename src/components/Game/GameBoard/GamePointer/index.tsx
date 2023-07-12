import React from 'react';
import { styled } from 'styled-components';
import Trash from '@/assets/trashcan.png';
import eraser from '@/assets/eraser.png';
import pencil from '@/assets/pencil.png';
import chatter from '@/assets/chatter.png';
type Props = {
  clearCanvas: () => void;
  setIsErasing: React.Dispatch<React.SetStateAction<boolean>>;
  setLineColor: React.Dispatch<React.SetStateAction<string>>;
  setCurrentFoucs: React.Dispatch<React.SetStateAction<string>>;
  handleImageClick: () => void;
};
//빨 주 노 초 파 남 보 검 흰
const GamePointer = ({
  clearCanvas,
  setIsErasing,
  setLineColor,
  handleImageClick,
  setCurrentFoucs,
}: Props) => {
  return (
    <PointerBox>
      <img src={Trash} onClick={clearCanvas} />
      <img
        src={eraser}
        onClick={() => {
          setIsErasing(true);
          handleImageClick();
          setCurrentFoucs(eraser);
        }}
      />
      <img
        src={pencil}
        onClick={() => {
          setIsErasing(false);
          handleImageClick();
          setCurrentFoucs(pencil);
        }}
      />
      <img src={chatter} />
      <Colors>
        <div
          onClick={() => {
            setLineColor('#ff0000');
            setIsErasing(false);
            handleImageClick();
            setCurrentFoucs(pencil);
          }}
        ></div>
        <div
          onClick={() => {
            setLineColor('#ff8c00');
            setIsErasing(false);
            handleImageClick();
            setCurrentFoucs(pencil);
          }}
        ></div>
        <div
          onClick={() => {
            setLineColor('#ffff00');
            setIsErasing(false);
            handleImageClick();
            setCurrentFoucs(pencil);
          }}
        ></div>
        <div
          onClick={() => {
            setLineColor('#008000');
            setIsErasing(false);
            handleImageClick();
            setCurrentFoucs(pencil);
          }}
        ></div>
        <div
          onClick={() => {
            setLineColor('#0000ff');
            setIsErasing(false);
            handleImageClick();
            setCurrentFoucs(pencil);
          }}
        ></div>
        <div
          onClick={() => {
            setLineColor('#4b0082');
            setIsErasing(false);
            handleImageClick();
            setCurrentFoucs(pencil);
          }}
        ></div>
        <div
          onClick={() => {
            setLineColor('#800080');
            setIsErasing(false);
            handleImageClick();
            setCurrentFoucs(pencil);
          }}
        ></div>
      </Colors>
    </PointerBox>
  );
};

export default GamePointer;

const PointerBox = styled.div`
  & > img {
    position: absolute;
    width: 30px;
    height: 30px;
  }

  & > img:nth-child(1) {
    bottom: 25px;
    left: 25px;
    cursor: pointer;
    &:hover {
      scale: 1.1;
    }
  }
  & > img:nth-child(2) {
    width: 4.5rem;
    height: 4.5rem;
    bottom: 15px;
    right: 15px;
    cursor: pointer;
    &:hover {
      scale: 1.1;
    }
  }
  & > img:nth-child(3) {
    bottom: 25px;
    right: 65px;
    cursor: pointer;
    &:hover {
      scale: 1.1;
    }
  }
  & > img:nth-child(4) {
    width: 6.5rem;
    height: 5.5rem;
    bottom: 75px;
    right: 25px;
  }
`;

const Colors = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  & > div {
    width: 30px;
    height: 30px;
    margin-right: 5px;
    border-radius: 50%;
    cursor: pointer;
  }
  & > div:nth-child(1) {
    background-color: #ff0000;
  }
  & > div:nth-child(2) {
    background-color: #ff8c00;
  }
  & > div:nth-child(3) {
    background-color: #ffff00;
  }
  & > div:nth-child(4) {
    background-color: #008000;
  }
  & > div:nth-child(5) {
    background-color: #0000ff;
  }
  & > div:nth-child(6) {
    background-color: #4b0082;
  }
  & > div:nth-child(7) {
    background-color: #800080;
  }
`;
