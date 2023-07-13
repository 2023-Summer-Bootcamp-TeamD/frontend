import React from 'react';
import { styled } from 'styled-components';

const DrawingResultCircle = () => {
  const CircleText = ['우', '리', '의', '작', '품'];
  const CircleTextList = CircleText.map((text, index) => (
    <CircleWrap key={index}>{text}</CircleWrap>
  ));
  return <>{CircleTextList}</>;
};

export default DrawingResultCircle;
const CircleWrap = styled.div`
  width: 8rem;
  height: 8rem;
  margin-left: 3rem;
  background-color: #fff;
  border: 0 solid;
  border-radius: 50%;
  text-align: center;
  line-height: 8.5rem;
  font-size: 5rem;
  text-shadow: 1px 1px 2px #b8b8b8;
  box-shadow: 4px 4px 3px -1px #a6a6a6;
`;
