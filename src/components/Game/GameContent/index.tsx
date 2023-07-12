import { opacityVariants } from '@/constants/variants';
import { motion } from 'framer-motion';
import React from 'react';
import { styled } from 'styled-components';
import CanvasDrawingApp from '../GameBoard/CanvasDrawingApp';

const GameContent = () => {
  return (
    <Content variants={opacityVariants} initial="initial" animate="mount">
      <CanvasDrawingApp />
    </Content>
  );
};

export default GameContent;

const Content = styled(motion.div)``;
