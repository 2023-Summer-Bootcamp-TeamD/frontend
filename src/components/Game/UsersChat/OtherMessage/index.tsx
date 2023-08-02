import React from 'react';
import { styled } from 'styled-components';
import { IMAGES } from '@/constants/profile';

type Props = {
  flag: number;
  nickname: string;
  message: string;
  date: string;
  img: string;
};

const OtherMessage = ({ flag, nickname, message, date, img }: Props) => {
  return (
    <OtherChat>
      <Profile>
        {!flag && (
          <div>
            <img src={img} alt="상대방 프로필" />
            <p>{nickname}</p>
          </div>
        )}
      </Profile>
      <Content>
        <div>
          <ChatBox>{message}</ChatBox>
          <span>{date}</span>
        </div>
      </Content>
    </OtherChat>
  );
};

export default React.memo(OtherMessage);

const OtherChat = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 2rem;
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
  height: 5.5rem;
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

  & > div {
    display: flex;
    align-items: end;
  }
  & > div > span {
    text-align: end;
    font-size: 1.5rem;
    opacity: 0.8;
    margin-left: 0.5rem;
  }
`;
