import { opacityVariants } from '@/constants/variants';
import { motion } from 'framer-motion';
import React from 'react';
import { styled } from 'styled-components';
import CanvasDrawingApp from '../GameBoard/CanvasDrawingApp';

type Props = {
  setCurrentFocus: React.Dispatch<React.SetStateAction<string>>;
  UUID?: string;
};

const GameContent = ({ setCurrentFocus, UUID }: Props) => {
  return (
    <Content variants={opacityVariants} initial="initial" animate="mount">
      <CanvasDrawingApp UUID={UUID} setCurrentFocus={setCurrentFocus} />
    </Content>
  );
};

export default GameContent;

const Content = styled(motion.div)``;
