import { playerMaxCountState, playerNumState } from '@/atom/game';
import { opacityVariants } from '@/constants/variants';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { styled } from 'styled-components';

type Props = {
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
};

const StartButton = ({ setStart }: Props) => {
  //제한인원과 현재인원이 같을때만 startButton 활성화
  //제한인원은 state로 가져오고 현재인원은 recoil로 관리
  const maxPlayerNum = useRecoilValue(playerMaxCountState);
  const [playerCount, setplayerCount] = useRecoilState(playerNumState);

  const gameStartHandler = () => {
    console.log('hi');
    if (playerCount === maxPlayerNum) {
      setStart(true);
    }
  };

  useEffect(() => {
    console.log(maxPlayerNum);
    console.log(playerCount);
  }, []);

  return (
    <Content variants={opacityVariants} initial="initial" animate="mount">
      <StartGame
        playercount={playerCount}
        maxplayernum={maxPlayerNum}
        onClick={() => {
          gameStartHandler();
        }}
      >
        게임 시작
      </StartGame>
    </Content>
  );
};

export default StartButton;

const Content = styled(motion.div)``;

const StartGame = styled.div<{ playercount: number; maxplayernum: number }>`
  position: absolute;
  left: calc(50% - 10rem);
  top: calc(50% - 4.5rem);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 7rem;
  border: 1px solid #ffffff;
  border-radius: 10px;
  font-size: 4rem;
  cursor: pointer;
  background-color: ${(props) =>
    props.playercount === props.maxplayernum ? 'red' : 'blue'};
  &:hover {
    background-color: rgb(255, 255, 255, 0.3);
  }
`;
