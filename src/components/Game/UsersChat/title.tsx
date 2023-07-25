import { copyAndPaste } from '@/apis/game';
import { playerCountState } from '@/atom/game';
import { useSocketContext } from '@/context/SocketContext';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

type TitleProps = {
  UUID: string;
};

const Title = ({ UUID }: TitleProps) => {
  const { socketState } = useSocketContext();
  const { socket, isConnected } = socketState;

  const [playerCount, setPlayerCount] = useRecoilState(playerCountState);

  useEffect(() => {
    if (socket && isConnected) {
      socket.on('updateChatNum', (count) => {
        console.log(count);
        setPlayerCount(() => count.playerCount);
      });
    }
  }, [socket, isConnected, playerCount]);

  return (
    <TitleBox>
      <div>참여 인원 {playerCount}/6</div>
      <div onClick={() => copyAndPaste(UUID)}>
        <div>입장코드</div>
        <div>{UUID}</div>
      </div>
    </TitleBox>
  );
};

export default Title;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  font-size: 3.5rem;
  width: 100%;
  height: 5rem;
  background-color: #f9de79;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  & > div:nth-child(2) {
    font-size: 3.8rem;
    cursor: pointer;
    &:hover {
      scale: 1.05;
    }
  }
`;
