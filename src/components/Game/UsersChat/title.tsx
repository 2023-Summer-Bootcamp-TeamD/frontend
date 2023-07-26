import { copyAndPaste } from '@/apis/game';
import { playerCountState, playerNumState, uuidState } from '@/atom/game';
import { useSocketContext } from '@/context/SocketContext';
import React, { useEffect, useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { styled } from 'styled-components';

const Title = () => {
  const { socketState } = useSocketContext();
  const { socket, isConnected } = socketState;
  const uuid = useRecoilValue(uuidState);
  const [playerCount, setPlayerCount] = useState(0);
  //내가 최대인원
  const [player_num, setPlayer_num] = useRecoilState(playerCountState);
  useEffect(() => {
    if (socket && isConnected) {
      socket.on('updateChatNum', (count) => {
        setPlayerCount(() => count.playerCount);
      });
    }
  }, [socket, isConnected, playerCount]);

  return (
    <TitleBox>
      <div>
        참여 인원 {playerCount}/{player_num}
      </div>
      <div onClick={() => copyAndPaste(uuid)}>
        <div>입장코드</div>
        <div>{uuid}</div>
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
