import React, { useState } from 'react';
import GameBoard from '@/components/Game/GameBoard';
import GameNav from '@/components/Game/GameNav';
import UsersChat from '@/components/Game/UsersChat';
import { styled } from 'styled-components';
const Game = () => {
  const [xy, setXY] = useState({ x: 0, y: 0 });

  const xyHandler = (e: any) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    setXY({ x: mouseX, y: mouseY });
    console.log(xy);
  };
  return (
    <GamePage onMouseMove={xyHandler}>
      <Nav>
        <GameNav />
      </Nav>
      <Section>
        <div>
          <GameBoard />
          <UsersChat />
        </div>
      </Section>
      <Cursor
        className="pointer"
        style={{
          transform: `translate(${xy.x}px, ${xy.y}px)`,
        }}
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
    max-width: 100rem;
    height: calc(100vh - 120px);
    color: white;
    display: flex;
    justify-content: space-around;
    padding-top: 3rem;
    z-index: 2;
  }
`;

const Cursor = styled.div`
  position: absolute;
  background-color: rgb(108, 12, 31);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  left: -15px;
  top: -15px;
  z-index: 2;
  pointer-events: none;
`;
