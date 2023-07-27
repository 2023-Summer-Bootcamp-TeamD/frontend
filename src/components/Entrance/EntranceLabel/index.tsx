import React from 'react';
import { styled } from 'styled-components';

type MyComponentProps = {
  name: string;
};

const Label = ({ name }: MyComponentProps) => {
  return <LabelName>{name}</LabelName>;
};

export default Label;

const LabelName = styled.label`
  font-size: 4rem;
  margin: 3rem 0 1.5rem 0;
  color: #fff;
  @media screen and (min-width: 1200px) and (max-width: 1350px) {
    font-size: 3.5rem;
  }
  @media screen and (min-width: 1000px) and (max-width: 1200px) {
    font-size: 3rem;
  }
  @media screen and (min-width: 850px) and (max-width: 1000px) {
    font-size: 2.6rem;
  }
  @media screen and (min-width: 768px) and (max-width: 850px) {
    font-size: 2.2rem;
  }
`;
