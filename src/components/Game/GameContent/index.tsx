import { opacityVariants } from '@/constants/variants';
import { motion } from 'framer-motion';
import React from 'react';
import { styled } from 'styled-components';
import GamePointer from '../GameBoard/GamePointer';

type Props = {
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
};

const GameContent = ({ setStart }: Props) => {
  return (
    <Content
      onClick={() => setStart(false)}
      variants={opacityVariants}
      initial="initial"
      animate="mount"
    >
      <GamePointer />
    </Content>
  );
};

export default GameContent;

const Content = styled(motion.div)``;
