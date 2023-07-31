import React from 'react';
import { styled } from 'styled-components';
import Theme from '@/constants/entryRoomResponsive';

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

  @media ${Theme.EntryRoomPageTheme.SemiSmallSemiMedium} {
    font-size: 3.5rem;
  }
  @media ${Theme.EntryRoomPageTheme.TabletSemiSmall} {
    font-size: 3rem;
  }
`;
