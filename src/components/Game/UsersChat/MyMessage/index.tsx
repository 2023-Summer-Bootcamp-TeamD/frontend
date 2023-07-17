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
        <ChatBox>{message}</ChatBox>
        <span>{date}</span>
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
  margin-right: 3.8rem;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  & > div > span {
    display: flex;
    justify-content: flex-start;
    font-size: 1.8rem;
    opacity: 0.8;
  }
`;

const ChatBox = styled.div`
  max-width: 30rem;
  width: 10rem;
  min-height: 4.5rem;
  word-break: break-all;
  background-color: #f9de79;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 1rem;
  font-size: 1.6rem;
`;
