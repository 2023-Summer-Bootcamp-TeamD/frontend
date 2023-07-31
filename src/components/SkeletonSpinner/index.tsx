import React from 'react';
import { keyframes, styled } from 'styled-components';

const SpinnerBox = () => {
  return <Spinner />;
};

export default SpinnerBox;

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg); 
  }
  to {
    transform: rotate(360deg); 
  }
`;

const Spinner = styled.div`
  position: absolute;
  top: calc(50% - 100px);
  left: calc(50% - 100px);
  border: 8px solid rgba(0, 0, 0, 0.3);
  border-top: 8px solid #fff;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  transform: translate(-50%, -50%);
  animation: ${spinAnimation} 1s linear infinite;
`;
