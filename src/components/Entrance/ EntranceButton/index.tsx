import React from 'react';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

type MyComponentProps = {
  title: string;
};

const Button = ({ title }: MyComponentProps) => {
  return <EntryButton whileTap={{ scale: 0.9 }}>{title}</EntryButton>;
};

export default Button;
const EntryButton = styled(motion.button)`
  width: 13rem;
  height: 5rem;
  margin-top: 3rem;
  margin-bottom: 5rem;
  border-radius: 20rem;
  border: 0.05rem solid #fff;
  background-color: transparent;
  color: #fff;
  font-size: 3rem;
  &::placeholder {
    color: #fff;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.18);
    cursor: pointer;
    transform: scale(1.1);
  }
`;
