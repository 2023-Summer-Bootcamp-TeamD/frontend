import React from 'react';
import { styled } from 'styled-components';
import FireExtinguisherImg from '@/assets/FireExtinguisher.png';
import DrawingHeader from '@/common/DrawingHeader ';
const DrawingREsult = () => {
  return (
    <Wrap>
      <DrawingHeader />
      <FireExtinguisher />
      <Blackboard></Blackboard>
    </Wrap>
  );
};

export default DrawingREsult;
const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  position: relative;
  display: flex;
  background-image: linear-gradient(to bottom, #faf1e5 70vh, #c9cb81 40vh);
`;

const Blackboard = styled.div`
  box-sizing: border-box;
  width: 70vw;
  height: 65vh;
  background: #1c3b3e;
  border: 15px solid #8e5501;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const FireExtinguisher = styled.img.attrs({
  src: `${FireExtinguisherImg}`,
})`
  position: absolute;
  right: 2rem;
  bottom: 0;
  width: 30rem;
`;
