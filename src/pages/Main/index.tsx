import React from 'react';
import { styled } from 'styled-components';
import Header from '@/common/Header';

const Main = () => {
  return (
    <Mains>
      <Header />
      <BackBoard />
    </Mains>
  )
};

export default Main;

const Mains = styled.div`
  font-size: 3rem;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(to bottom, #FAF1E5 70vh, #C9CB81 40vh);
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const BackBoard = styled.div`
  box-sizing: border-box;
  width: 70vw;
  height: 65vh;
  background: #1C3B3E;
  border: 15px solid #8E5501;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`
