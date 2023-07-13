import React, { useState } from 'react';
import { styled } from 'styled-components';
import GameContent from '../GameContent';
import StartButton from '../StartButton';

type Props = {
  setCurrentFoucs: React.Dispatch<React.SetStateAction<string>>;
};
const GameBoard = ({ setCurrentFoucs }: Props) => {
  const [start, setStart] = useState(false);

  return (
    <Board>
      {!start && <StartButton setStart={setStart} />}
      {start && <GameContent setCurrentFoucs={setCurrentFoucs}></GameContent>}
    </Board>
  );
};

export default GameBoard;

const Board = styled.div`
  box-shadow: 5px 7px 12px -9px #000000;
  position: relative;
  width: 60rem;
  height: 50rem;
  background-color: #1c3b3e;
  border: 5px solid #8e5501;
  border-radius: 10px;
  padding: 1rem;
`;
