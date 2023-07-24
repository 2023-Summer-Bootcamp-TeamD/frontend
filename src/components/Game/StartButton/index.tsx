import { opacityVariants } from '@/constants/variants';
import { motion } from 'framer-motion';
import React from 'react';
import { styled } from 'styled-components';

type Props = {
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
};

const StartButton = ({ setStart }: Props) => {
  //제한인원과 현재인원이 같을때만 startButton 활성화
  //제한인원은 state로 가져오고 현재인원은 recoil로 관리

  return (
    <Content variants={opacityVariants} initial="initial" animate="mount">
      <StartGame onClick={() => setStart(true)}>게임 시작</StartGame>
    </Content>
  );
};

export default StartButton;

const Content = styled(motion.div)``;

const StartGame = styled.div`
  position: absolute;
  left: calc(50% - 10rem);
  top: calc(50% - 4.5rem);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 7rem;
  border: 1px solid #ffffff;
  background-color: rgb(255, 255, 255, 0.18);
  border-radius: 10px;
  font-size: 4rem;
  cursor: pointer;

  &:hover {
    background-color: rgb(255, 255, 255, 0.3);
  }
`;
