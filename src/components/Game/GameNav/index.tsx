import { timeState } from '@/atom/game';
import { userType, users } from '@/constants/users';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

const GameNav = () => {
  const time = useRecoilValue(timeState);

  return (
    <Nav>
      <Clock>
        <span>남은 시간</span>
        <span>{time}</span>
      </Clock>
      <Users>
        {users.map((user: userType, index) => {
          return (
            <User key={index}>
              <div>{user.name}</div>
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
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  & > div:nth-child(1) {
    font-size: 2rem;
  }
  & > div:nth-child(2) {
    font-size: 5rem;
  }
`;
