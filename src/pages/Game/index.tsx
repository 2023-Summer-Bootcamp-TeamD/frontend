import React from 'react';
import GameBoard from '@/components/Game/GameBoard';
import GameNav from '@/components/Game/GameNav';
import UsersChat from '@/components/Game/UsersChat';
import { styled } from 'styled-components';
const Game = () => {
  return (
    <GamePage>
      <Nav>
        <GameNav />
      </Nav>
      <Section>
        <div>
          <GameBoard />
          <UsersChat />
        </div>
      </Section>
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
