import React from 'react';
import { styled } from 'styled-components';
import FireExtinguisherImg from '@/assets/FireExtinguisher.png';
import DrawingHeader from '@/common/DrawingHeader ';
import chattingImg from '@/assets/Chatter.png';
import CompassImg from '@/assets/DoodleCompass.png';
import FunctionMathImg from '@/assets/DoodleFunctionMath.png';
import FoodImg from '@/assets/Food.png';
import PersonImg from '@/assets/Person.png';
import AnimalImg from '@/assets/Animal.png';
const DrawingREsult = () => {
  return (
    <Wrap>
      <DrawingHeader />
      <FireExtinguisher />
      <Blackboard>
        <DoodleCompass />
        <DoodleMath />
        <DoodleChatting />
        <CategoryWrap>
          <Category>
            <CategoryImg src={FoodImg} />
            <CategoryTitle>음식</CategoryTitle>
          </Category>
          <Category>
            <CategoryImg src={AnimalImg} />
            <CategoryTitle>동물</CategoryTitle>
          </Category>
          <Category>
            <CategoryImg src={PersonImg} />
            <CategoryTitle>인물</CategoryTitle>
          </Category>
        </CategoryWrap>
      </Blackboard>
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

const DoodleCompass = styled.img.attrs({
  src: `${CompassImg}`,
})`
  position: absolute;
  left: 12rem;
  top: 2rem;
  width: 6rem;
`;

const DoodleMath = styled.img.attrs({
  src: `${FunctionMathImg}`,
})`
  position: absolute;
  left: 1rem;
  top: 0.7rem;
  width: 10rem;
`;

const DoodleChatting = styled.img.attrs({
  src: `${chattingImg}`,
})`
  position: absolute;
  right: 2rem;
  bottom: 3rem;
  width: 10rem;
`;
const CategoryWrap = styled.div`
  width: 100%;
  height: 17rem;
  //background: #41d319;
  display: flex;
  justify-content: space-evenly;
`;

const Category = styled.button`
  width: 17rem;
  height: 17rem;
  border-radius: 20px;
  border: 0.15rem solid #fff;
  background-color: transparent;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: rgba(255, 255, 255, 0.18);
    cursor: pointer;
  }
`;
const CategoryImg = styled.img`
  height: 15rem;
  width: 15rem;
  //background-color: #0088ff;
`;
const CategoryTitle = styled.label`
  font-size: 4rem;
  color: #fff;
  // background-color: aliceblue;
  position: absolute;
  bottom: 2rem;
`;

const FireExtinguisher = styled.img.attrs({
  src: `${FireExtinguisherImg}`,
})`
  position: absolute;
  right: 2rem;
  bottom: 0;
  width: 30rem;
`;
