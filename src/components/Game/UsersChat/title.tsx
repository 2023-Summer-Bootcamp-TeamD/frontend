import { copyAndPaste } from '@/apis/game';
import React from 'react';
import { styled } from 'styled-components';

const Title = () => {
  return (
    <TitleBox>
      <div>참여 인원 6/6</div>
      <div onClick={() => copyAndPaste('X59C6')}>
        <div>입장코드</div>
        <div>X59C6</div>
      </div>
    </TitleBox>
  );
};

export default Title;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  font-size: 3.5rem;
  width: 100%;
  height: 5rem;
  background-color: #f9de79;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  & > div:nth-child(2) {
    font-size: 3.8rem;
    cursor: pointer;
    &:hover {
      scale: 1.05;
    }
  }
`;
