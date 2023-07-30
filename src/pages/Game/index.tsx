import React, { useEffect, useState } from 'react';
import GameBoard from '@/components/Game/GameBoard';
import GameNav from '@/components/Game/GameNav';
import UsersChat from '@/components/Game/UsersChat';
import { styled } from 'styled-components';
import pencil from '@/assets/pencil.png';
import { useLocation, useParams } from 'react-router-dom';
import { useSocketContext } from '@/context/SocketContext';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  categoryIdState,
  currentRoundState,
  nicknameState,
  playerMaxCountState,
  remainTimeState,
  timeState,
  userListState,
  uuidState,
} from '@/atom/game';
import { UserListType } from '@/types/gameInfo';
import useDidMountEffect from '@/hooks/useDidMountEffect';

const Game = () => {
  const { socketState } = useSocketContext();
  const { socket, isConnected } = socketState;
  const hostData = useLocation().state;
  const { UUID } = useParams();
  const [xy, setXY] = useState({ x: 0, y: 0 });
  const [currentFocus, setCurrentFocus] = useState(pencil);
  const [start, setStart] = useState(false);
  const setUUID = useSetRecoilState(uuidState);
  const setNickname = useSetRecoilState(nicknameState);
  const [max_Player_num, setMax_Player_num] =
    useRecoilState(playerMaxCountState);
  const [category_id, setCategory_id] = useRecoilState(categoryIdState);
  const [time, setTime] = useRecoilState(timeState);
  const [userList, setUserList] = useRecoilState(userListState);
  const [currentRound, setCurrentRound] = useRecoilState(currentRoundState);
  const [remainTime, setRemainTime] = useRecoilState(remainTimeState);
  const [socketInitialized, setSocketInitialized] = useState(false);
  const xyHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    setXY({ x: mouseX, y: mouseY });
  };
  console.log(hostData);

  useEffect(() => {
    if (socket && isConnected && hostData.entry_code) {
      socket.emit('createRoom', UUID);
    }
  }, []);

  //방 생성하기
  useEffect(() => {
    if (socket && isConnected && !socketInitialized) {
      //방장만 호출
      socket.emit('createUser', { nickname: hostData.nickname, roomId: UUID });
      socket.on('updateUserInfo', (data: UserListType) => {
        setUserList((prevArray) => [...prevArray, data]);
      });
    }
    setSocketInitialized(true);
    return () => {
      socket?.off('createRoom');
      socket?.off('createUser');
      socket?.off('updateUserInfo');
    };
  }, []);

  //game 정보 가져오기
  useEffect(() => {
    if (UUID) setUUID(UUID);
    setNickname(hostData.nickname);
    setMax_Player_num(hostData.player_num);
    setCategory_id(hostData.category_id);
    setTime(hostData.time);
    setRemainTime(hostData.time);
  }, []);

  //라운드 시작 시
  useDidMountEffect(() => {
    if (socket && isConnected && start) {
      socket?.emit('startRound', {
        roomId: UUID,
        limitedTime: time,
        category_id: hostData.category_id,
      });
      socket.on('startRoundTimer', (data) => {
        console.log(data);
      });
      socket.on('updateScores', (data) => {
        console.log(data);
      });
      socket.on('announceRoundInfo', (data) => {
        console.log('x');
        console.log(data);
      });
      socket.on('announceResult', (data) => {
        console.log('result');
        console.log(data);
      });
      console.log('실행');
      return () => {
        if (socket && isConnected) {
          socket.off('startRound');
          socket.off('startRoundTimer');
          socket.off('updateScores');
          socket.off('announceRoundInfo');
          socket.off('announceResult');
        }
      };
    }
  }, [socket, isConnected, start]);

  //게임이 끝났을 떄
  useEffect(() => {
    if (currentRound > max_Player_num) {
      socket?.on('endGame', (data) => {
        console.log(data);
      });
    }
  }, [socket, isConnected]);

  return (
    <GamePage onMouseMove={xyHandler}>
      <Nav>
        <GameNav start={start} />
      </Nav>
      <Section>
        <div>
          <GameBoard
            start={start}
            setStart={setStart}
            setCurrentFocus={setCurrentFocus}
          />
          <UsersChat {...hostData} />
        </div>
      </Section>
      <Cursor
        style={{
          transform: `translate(${xy.x}px, ${xy.y}px)`,
        }}
        src={currentFocus}
        xy={xy}
      />
    </GamePage>
  );
};

export default Game;

const GamePage = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to bottom, #faf1e5 60vh, #c9cb81 40vh);
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  & > div {
    width: 100%;
    max-width: 120rem;
    height: calc(100vh - 120px);
    color: white;
    display: flex;
    justify-content: space-around;
    padding-top: 3rem;
    z-index: 2;
  }
`;

const Cursor = styled.img<{ xy: { x: number; y: number } }>`
  position: absolute;
  width: 30px;
  height: 30px;
  left: -15px;
  top: -15px;
  z-index: 2;
  pointer-events: none;
`;
