import {
  currentRoundState,
  remainTimeState,
  userListState,
  roundGameState,
  nicknameState,
  uuidState,
  waveTextState,
  timeState,
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
  const [time, setTime] = useRecoilState(timeState);
  const uuid = useRecoilValue(uuidState);
  const [waveText, setWaveText] = useRecoilState(waveTextState);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (start) {
      intervalId = setInterval(() => {
        if (remainTime > 0) {
          setRemainTime((prevTime) => prevTime - 1);
        }
      }, 1000);
    }

    if (remainTime === 0 && socket && isConnected && start) {
      socket?.emit('canvasEraseAll', uuid);

      setWaveText(`${currentRound + 1} 라운드 대기중 ∙ ∙ ∙`);
      if (userList.length === currentRound) {
        setWaveText('게임 결과 로딩중');
      }
      setTimeout(() => {
        setCurrentRound((pre) => pre + 1);
      }, 6000);
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

  @media (max-width: 768px) {
    justify-content: center;
  }
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
  margin-right: 2.5rem;

  & > span:nth-child(1) {
    font-size: 3rem;
  }

  & > span:nth-child(2) {
    font-size: 3.8rem;
  }

  @media (max-width: 768px) {
    min-width: 20rem;
    height: 10rem;
    & > span:nth-child(1) {
      font-size: 3rem;
    }
    & > span:nth-child(2) {
      font-size: 4rem;
    }
  }
`;

const Users = styled.div`
  display: flex;
  background-color: white;
  border: 7px solid #f9de79;
  height: 10rem;
  box-shadow: 5px 7px 12px -9px #000000;
  border-radius: 10px;
  min-width: 47.5rem;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    min-width: 35rem;
    height: 10rem;
    margin-left: 0;
    & > span:nth-child(1) {
      font-size: 0.1rem;
    }
    & > span:nth-child(2) {
      font-size: 1.9rem;
    }
  }
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

  /* @media (max-width: 768px) {
    min-width: 30rem;
    height: 10rem;
    margin-right: 5rem;
    & > span:nth-child(1) {
      font-size: 0.1rem;
    }
    & > span:nth-child(2) {
      font-size: 1.9rem;
    } */
  /* } */
`;
