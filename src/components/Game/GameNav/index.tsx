import {
  currentRoundState,
  remainTimeState,
  timeState,
  userListState,
} from '@/atom/game';
import { useSocketContext } from '@/context/SocketContext';
import { UserListType } from '@/types/gameInfo';
import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

type Props = {
  start: boolean;
};

const GameNav = ({ start }: Props) => {
  const { socketState } = useSocketContext();
  const { socket, isConnected } = socketState;
  const time = useRecoilValue(timeState);
  const userList = useRecoilValue(userListState);
  const [remainTime, setRemainTime] = useRecoilState(remainTimeState);
  const [currentRound, setCurrentRound] = useRecoilState(currentRoundState);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (start) {
      intervalId = setInterval(() => {
        if (remainTime > 0) {
          setRemainTime((prevTime) => prevTime - 1);
        }
      }, 1000);
    }

    if (remainTime === 0 && socket && isConnected) {
      socket.on('announceResult', (data) => {
        console.log(data);
      });
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [start, remainTime]);

  return (
    <Nav>
      <Clock>
        <span>남은 시간</span>
        <span>{remainTime}</span>
      </Clock>
      <Users>
        {userList.map((user: UserListType, index) => {
          return (
            <User key={index}>
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

const User = styled.div`
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
