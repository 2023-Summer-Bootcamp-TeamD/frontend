import {
  currentRoundState,
  remainTimeState,
  userListState,
  runStopTimerState,
  roundGameState,
  nicknameState,
  uuidState,
} from '@/atom/game';
import { useSocketContext } from '@/context/SocketContext';
import { UserListType } from '@/types/gameInfo';
import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

type Props = {
  start: boolean;
};

const GameNav = ({ start }: Props) => {
  const { socketState } = useSocketContext();
  const { socket, isConnected } = socketState;
  const userList = useRecoilValue(userListState);
  const [remainTime, setRemainTime] = useRecoilState(remainTimeState);
  const [currentRound, setCurrentRound] = useRecoilState(currentRoundState);
  const roundGameInfo = useRecoilValue(roundGameState);
  const nickname = useRecoilValue(nicknameState);
  const uuid = useRecoilValue(uuidState);

  useEffect(() => {
    console.log(userList);
  }, [start, currentRound]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (start) {
      intervalId = setInterval(() => {
        if (remainTime >= 0) {
          setRemainTime((prevTime) => prevTime - 1);
        }
      }, 1000);
    }

    if (remainTime === -1 && socket && isConnected) {
      socket?.emit('canvasEraseAll', uuid);
      setCurrentRound((pre) => pre + 1);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [socket, isConnected, start, remainTime]);

  return (
    <Nav>
      <Clock>
        <span>남은 시간</span>
        <span>{remainTime > 60 ? '' : remainTime}</span>
      </Clock>
      <Users>
        {start &&
          userList?.map((user: UserListType, index) => {
            return (
              <User
                nickname={nickname}
                drawer={roundGameInfo.drawer}
                key={index}
              >
                <div>{user.nickname}</div>
                <div>{user.score}</div>
              </User>
            );
          })}
      </Users>
    </Nav>
  );
};

export default GameNav;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 120rem;
  height: 120px;
  color: black;
  font-size: 3rem;
  padding-top: 3rem;
  margin-left: 5rem;
`;

const Clock = styled.div`
  width: 20rem;
  height: 10rem;
  border: 7px solid #f9de79;
  text-align: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 5px 7px 12px -9px #000000;

  & > span:nth-child(1) {
    font-size: 3rem;
  }

  & > span:nth-child(2) {
    font-size: 3.8rem;
  }
`;

const Users = styled.div`
  display: flex;
  background-color: white;
  border: 7px solid #f9de79;
  height: 10rem;
  box-shadow: 5px 7px 12px -9px #000000;
  border-radius: 10px;
  min-width: 475px;
`;

const User = styled.div<{ nickname: string; drawer: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  min-width: 60px;

  & > div:nth-child(1) {
    font-size: 2rem;
  }
  & > div:nth-child(2) {
    font-size: 5rem;
  }
`;
