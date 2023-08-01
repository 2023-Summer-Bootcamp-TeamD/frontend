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
`;
