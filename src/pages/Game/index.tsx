import React, { useEffect, useState } from 'react';
import GameBoard from '@/components/Game/GameBoard';
import GameNav from '@/components/Game/GameNav';
import UsersChat from '@/components/Game/UsersChat';
import { styled } from 'styled-components';
import pencil from '@/assets/pencil.png';
import { useLocation, useParams } from 'react-router-dom';
import { useSocketContext } from '@/context/SocketContext';

const Game = () => {
  const hostData = useLocation().state;
  const { UUID } = useParams();
  const { socketState } = useSocketContext();
  const { socket, isConnected } = socketState;

  const [xy, setXY] = useState({ x: 0, y: 0 });
  const [currentFocus, setCurrentFocus] = useState(pencil);

  const xyHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    setXY({ x: mouseX, y: mouseY });
  };
  useEffect(() => {
    console.log(hostData);
  }, []);

  useEffect(() => {
    if (socket && isConnected) {
      if (hostData.entry_code) {
        console.log('hi');
        socket.emit('createRoom', UUID);
      }
      socket.emit('createUser', { nickname: hostData.nickname, roomId: UUID });
    }

    return () => {
      socket?.off('createRoom');
      socket?.off('createUser');
    };
  }, [socket, isConnected, hostData.nickname, UUID]);

  return (
    <GamePage onMouseMove={xyHandler}>
      <Nav>
        <GameNav />
      </Nav>
      <Section>
        <div>
          <GameBoard setCurrentFocus={setCurrentFocus} />
          <UsersChat UUID={UUID} {...hostData} />
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

/**
 * 
 * 
 * 유저
 category_id
: 
1
nickname
: 
"10000"
player_num
: 
2
score
: 
0
time
: 
10
 */
