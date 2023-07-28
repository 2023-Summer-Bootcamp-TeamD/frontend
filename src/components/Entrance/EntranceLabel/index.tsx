import React from 'react';
import { styled } from 'styled-components';

type MyComponentProps = {
  name: string;
  htmlFor: string;
};

const Label = ({ name, htmlFor }: MyComponentProps) => {
  return <LabelName htmlFor={htmlFor}>{name}</LabelName>;
};

export default Label;

const LabelName = styled.label`
  font-size: 4rem;
  margin: 3rem 0 1.5rem 0;
  color: #fff;
`;
