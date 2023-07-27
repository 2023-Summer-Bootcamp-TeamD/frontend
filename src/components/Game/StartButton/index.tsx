import { playerMaxCountState, playerNumState, uuidState } from '@/atom/game';
import { opacityVariants } from '@/constants/variants';
import { useSocketContext } from '@/context/SocketContext';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { styled } from 'styled-components';

type Props = {
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
};

const StartButton = ({ setStart }: Props) => {
  const { socketState } = useSocketContext();
  const { socket, isConnected } = socketState;
  //제한인원과 현재인원이 같을때만 startButton 활성화
  //제한인원은 state로 가져오고 현재인원은 recoil로 관리
  const maxPlayerNum = useRecoilValue(playerMaxCountState);
  const uuid = useRecoilValue(uuidState);
  const [playerCount, setplayerCount] = useRecoilState(playerNumState);

  const gameStartHandler = () => {
    if (playerCount === maxPlayerNum) {
      setStart(true);
    }
  };

  useEffect(() => {
    const handleStart = ({ pressButton }: { pressButton: boolean }) => {
      setStart(pressButton);
    };
    socket?.on('pressGameStartButton', handleStart);
    return () => {
      socket?.off('pressGameStartButton', handleStart);
    };
  }, [socket, isConnected]);

  return (
    <Content variants={opacityVariants} initial="initial" animate="mount">
      <StartGame
        playercount={playerCount}
        maxplayernum={maxPlayerNum}
        onClick={() => {
          gameStartHandler();
          socket?.emit('pressGameStartButton', {
            roomId: uuid,
            pressButton: true,
          });
        }}
      >
        게임 시작
      </StartGame>
    </Content>
  );
};

export default StartButton;

const Content = styled(motion.div)``;

const StartGame = styled.button<{ playercount: number; maxplayernum: number }>`
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
  box-shadow: 5px 7px 12px -9px #000000;

  cursor: ${(props) =>
    props.playercount === props.maxplayernum ? 'pointer' : 'not-allowed'};
  background-color: ${(props) =>
    props.playercount === props.maxplayernum ? '#007bff' : '#ccc'};
  color: ${(props) =>
    props.playercount === props.maxplayernum ? '#fff' : 'black'};
`;
