import React, { useState } from 'react';
import { styled } from 'styled-components';
import StartButton from '../StartButton';
import GameContent from '../GameContent';

type Props = {
  setCurrentFocus: React.Dispatch<React.SetStateAction<string>>;
  start: boolean;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
};
const GameBoard = ({ start, setStart, setCurrentFocus }: Props) => {
  return (
    <Board>
      {!start && <StartButton setStart={setStart} />}
      {start && <GameContent setCurrentFocus={setCurrentFocus}></GameContent>}
    </Board>
  );
};

export default GameBoard;

const Board = styled.div`
  box-shadow: 5px 7px 12px -9px #000000;
  position: relative;
  width: 700px;
  height: 500px;
  background-color: #1c3b3e;
  border: 5px solid #8e5501;
  border-radius: 10px;
  padding: 1rem;

  @media (max-width: 768px) {
    margin: 0 auto;
    width: 85%;
    height: 275px;
  }
`;
