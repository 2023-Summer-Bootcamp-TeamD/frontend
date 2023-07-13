import { opacityVariants } from '@/constants/variants';
import { motion } from 'framer-motion';
import React from 'react';
import { styled } from 'styled-components';
import CanvasDrawingApp from '../GameBoard/CanvasDrawingApp';

type Props = {
  setCurrentFoucs: React.Dispatch<React.SetStateAction<string>>;
};
const GameContent = ({ setCurrentFoucs }: Props) => {
  return (
    <Content variants={opacityVariants} initial="initial" animate="mount">
      <CanvasDrawingApp setCurrentFoucs={setCurrentFoucs} />
    </Content>
  );
};

export default GameContent;

const Content = styled(motion.div)``;
