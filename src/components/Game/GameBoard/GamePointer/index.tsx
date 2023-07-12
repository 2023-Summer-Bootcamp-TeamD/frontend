import React from 'react';
import { styled } from 'styled-components';
import Trash from '@/assets/trashcan.png';
import eraser from '@/assets/eraser.png';
import pencil from '@/assets/pencil.png';
import chatter from '@/assets/chatter.png';
const GamePointer = () => {
  return (
    <PointerBox>
      <img src={Trash} />
      <img src={eraser} />
      <img src={pencil} />
      <img src={chatter} />
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
