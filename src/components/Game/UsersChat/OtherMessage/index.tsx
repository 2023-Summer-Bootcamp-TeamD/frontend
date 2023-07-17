import React from 'react';
import { styled } from 'styled-components';
import user from '@/assets/blue.png';
type Props = {
  flag: number;
  nickname: string;
  message: string;
  date: string;
};

// eslint-disable-next-line react/prop-types
const OtherMessage = ({ flag, nickname, message, date }: Props) => {
  return (
    <OtherChat>
      <Profile>
        {flag && (
          <div>
            <img src={user} alt="상대방 프로필" />
            <p>{nickname}</p>
          </div>
        )}
      </Profile>
      <Content>
        <div>
          <ChatBox>{message}</ChatBox>
        </div>
        <span>{date}</span>
      </Content>
    </OtherChat>
  );
};

export default OtherMessage;

const OtherChat = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 2rem;
  margin-bottom: 1.5rem;
  & > div > p {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  & > span {
    display: flex;
    align-items: flex-end;
    margin-left: 0.5rem;
  }
`;

const Profile = styled.div`
  position: relative;
  width: 6rem;
  height: 5.2rem;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & > div > p {
    font-size: 1.4rem;
  }
  & > div > img {
    width: 4rem;
    height: 4rem;
    background-size: contain;
    border-radius: 50%;
  }
`;

const ChatBox = styled.div`
  max-width: 30rem;
  min-height: 3.5rem;
  word-break: break-all;
  background-color: #f3f3f3;
  border-radius: 5px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-size: 1.6rem;
  padding: 0 1rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    text-align: end;
    font-size: 1.8rem;
    opacity: 0.8;
  }
`;
