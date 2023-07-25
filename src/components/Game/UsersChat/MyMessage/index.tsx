import React from 'react';
import { styled } from 'styled-components';

type Props = {
  message: string;
  date: string;
};

const MyMessage = ({ message, date }: Props) => {
  return (
    <MyMessageBox>
      <div>
        <span>{date}</span>
        <ChatBox>{message}</ChatBox>
      </div>
    </MyMessageBox>
  );
};

export default MyMessage;

const MyMessageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-radius: 4px;
  padding: 1rem;
  & > div {
    display: flex;
    justify-content: flex-end;
  }
  & > div > span {
    display: flex;
    justify-content: flex-start;
    font-size: 1.5rem;
    opacity: 0.8;
    align-items: end;
    margin-right: 0.5rem;
  }
`;

const ChatBox = styled.div`
  max-width: 30rem;
  min-height: 3.5rem;
  word-break: break-all;
  background-color: #f9de79;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-size: 1.6rem;
  padding: 0 1rem;
`;
