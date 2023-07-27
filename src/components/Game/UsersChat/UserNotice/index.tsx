import React from 'react';
import { styled } from 'styled-components';

type Props = {
  message: string;
};

const UserNotice = ({ message }: Props) => {
  return <NoticeBox>{message}</NoticeBox>;
};

export default UserNotice;

const NoticeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  height: 80px;
  font-size: 2rem;
`;
