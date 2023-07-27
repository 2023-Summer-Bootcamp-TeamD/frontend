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
  nicknameState,
  playerMaxCountState,
  timeState,
  uuidState,
} from '@/atom/game';

const Game = () => {
  const { socketState } = useSocketContext();
  const { socket, isConnected } = socketState;
  const hostData = useLocation().state;
  const { UUID } = useParams();
  const [xy, setXY] = useState({ x: 0, y: 0 });
  const [currentFocus, setCurrentFocus] = useState(pencil);
  const setUUID = useSetRecoilState(uuidState);
  const setNickname = useSetRecoilState(nicknameState);
  const [max_Player_num, setMax_Player_num] =
    useRecoilState(playerMaxCountState);
  const [category_id, setCategory_id] = useRecoilState(categoryIdState);
  const [time, setTime] = useRecoilState(timeState);

  const xyHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    setXY({ x: mouseX, y: mouseY });
  };

  useEffect(() => {
    if (socket && isConnected) {
      //방장만 호출
      if (hostData.entry_code) {
        socket.emit('createRoom', UUID);
      }
      socket.emit('createUser', { nickname: hostData.nickname, roomId: UUID });
    }

    return () => {
      socket?.off('createRoom');
      socket?.off('createUser');
    };
  }, [socket, isConnected, hostData.nickname, UUID]);

  useEffect(() => {
    if (UUID) setUUID(UUID);
    setNickname(hostData.nickname);
    setMax_Player_num(hostData.player_num);
    setCategory_id(hostData.category_id);
    setTime(hostData.time);
  }, []);

  return (
    <GamePage onMouseMove={xyHandler}>
      <Nav>
        <GameNav />
      </Nav>
      <Section>
        <div>
          <GameBoard setCurrentFocus={setCurrentFocus} />
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
