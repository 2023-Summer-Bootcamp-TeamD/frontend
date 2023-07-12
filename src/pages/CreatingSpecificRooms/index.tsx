import React from 'react';
import { styled } from 'styled-components';
import Teaching from '@/assets/Teaching.png';
import FireExtinguisher from '@/assets/FireExtinguisher.png';
import DoodleFunctionMath from '@/assets/DoodleFunctionMath.png';
import DoodleCompass from '@/assets/DoodleCompass.png';
import Chatter from '@/assets/Chatter.png';
import Food from '@/assets/Food.png';
import Random from '@/assets/Random.png';
import Animal from '@/assets/Animal.png';
import Person from '@/assets/Person.png';
import Header from '../Header';
const index = () => {
  return (
    <Admissions>
      <Header />
      <DoodleContainer>
        <DoodleFunctionMathImg src={DoodleFunctionMath} alt="함수낙서" />
        <DoodleCompassImg src={DoodleCompass} alt="컴퍼스낙서" />
      </DoodleContainer>
      <ButtonContainer>
        <Buttons src={Food} />
        <Buttons src={Animal} />
        <Buttons src={Random} />
        <Buttons src={Person} />
      </ButtonContainer>
      <Blackboard />
      <UIContainerRow>
        <UIContainerColumn>
          <NumberOfAdmissions>입장 인원</NumberOfAdmissions>
          <Arrow>&lt;2&gt;</Arrow>
        </UIContainerColumn>
        <UIContainerColumn>
          <NickName>닉네임</NickName>
          <InputNickName type="text" placeholder="닉네임을 입력하세요!" />
        </UIContainerColumn>
        <UIContainerColumn>
          <TimeLimitPerRound>라운드 당 제한시간</TimeLimitPerRound>
          <Arrow>&lt;20s&gt;</Arrow>
        </UIContainerColumn>
      </UIContainerRow>
      <ChatterImg src={Chatter} alt="떠든사람" />
      <TeachingImg src={Teaching} alt="교탁" />
      <FireExtinguisherImg src={FireExtinguisher} alt="소화기" />
    </Admissions>
  );
};

export default index;

const Admissions = styled.div`
  font-size: 4rem;
  background-color: #faf1e5;
  background-image: linear-gradient(to bottom, #faf1e5 70vh, #c9cb81 40vh);
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  position: relative;
`;
const Blackboard = styled.div`
  border-box;
  width: 70vw;
  height: 65vh;
  background: #1C3B3E;
  border: 15px solid #8E5501;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  position: absolute;
  top: 20%;
  right: 50%;
  transform: translateX(50%);
  zIndex: 2;
`;
const TeachingImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 31%;
`;
const ChatterImg = styled.img`
  position: absolute;
  top: 66%;
  right: 17%;
  z-index: 1;
`;
const DoodleFunctionMathImg = styled.img`
  position: absolute;
  left: 17%;
`;
const DoodleCompassImg = styled.img`
  position: absolute;
  left: 28%;
`;
const DoodleContainer = styled.div`
  position: relative;
  z-index: 1;
`;
const FireExtinguisherImg = styled.img`
  width: 20%;
  height: 20%;
  position: absolute;
  bottom: 0;
  right: 2em;
`;
const Buttons = styled.img`
  width: 6vw;
  height: 12vh;
  border: 0.3rem solid #ffffff;
  border-radius: 1rem;
  margin: 2rem;
  background-color: rgba(255, 255, 255, 0);
  display: flex;
  z-index: 1;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  text-align: center;
  position: relative;
  top: 9%;
  right: 1%;
  justify-content: center;
`;
const UIContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  top: 10%;
  left: 2%;
  justify-content: center;
  align-items: center;
`;
const UIContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  text-align: center;
`;
const NumberOfAdmissions = styled.div`
  font-family: Uhbee mysen;
  color: white;
  font-size: 3em;
`;
const Arrow = styled.span`
  font-size: 3em;
  display: inline-block;
  color: white;
  text-align: center;
`;
const NickName = styled.span`
  font-size: 3em;
  color: white;
  margin-bottom: 2rem;
`;
const InputNickName = styled.input`
  margin-left: 7rem;
  margin-right: 7rem;
  border-radius: 2em;
  background-color: rgba(255, 255, 255, 0.3);
  font-size: 1.5em;
  text-align: center;
  color: white;
  outline: 0.1em solid white;
  ::placeholder: {
    color: white;
  }
`;
const TimeLimitPerRound = styled.span`
  font-size: 3em;
  color: white;
`;
