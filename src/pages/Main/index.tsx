import React from 'react';
import { styled } from 'styled-components';
import Header from '@/common/Header';
import BackBoardDecoInMainPage from '@/assets/BackBoardDecoInMainPage.png';
import Chalk from '@/assets/Chalk.png';

const Main = () => {
  return (
    <Mains>
      <Header />
      <BackBoard>
        <div className='itemInBackBoard'>
          <span>핑고빙고</span>
        </div>
        <div className='itemInBackBoard'>
          <Buttons>방 만들기</Buttons>
          <Buttons>입장하기</Buttons>
        </div>
      </BackBoard>
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
  background-image: url(${BackBoardDecoInMainPage});
  background-size: 70vw 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: 65vh;
  background-color: #1C3B3E;
  border: 15px solid #8E5501;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2rem;
  color: white;
  font-size: 32rem;
  cursor: url(${Chalk}) 2 2, auto;
  .itemInBackBoard {
    display: flex;
  }
`

const Buttons = styled.button`
  width: 16rem;
  height: 5rem;
  font-family: "Uhbee mysen";
  font-size: 3.5rem;
  color: white;
  background-color: #1C3B3E;
  border: 0.2rem solid #FFFFFF;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 3rem;
  margin: 3rem 5rem;
  &:hover {
    background-color:#455E61;
  }
`