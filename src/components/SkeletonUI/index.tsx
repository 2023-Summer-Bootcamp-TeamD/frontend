import React from 'react';
import { styled } from 'styled-components';
import LoadingGIF from '@/assets/Loading.gif';

const SkeletonUI = () => {
  return (
    <>
      <Loading />
    </>
  );
};

export default SkeletonUI;

const Loading = styled.img.attrs({
  src: `${LoadingGIF}`,
})`
  width: 100vw;
  height: 100vh;
`;
