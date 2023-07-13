import React, { useState } from 'react';
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
const CreatingRooms = () => {
  const [personnel, setPersonel] = useState(2);
  const [seconds, setSeconds] = useState(10);
  const [username, setUsername] = useState('');
  const increaseAdmission = () => {
    setPersonel(personnel + 1);
  };
  const decreaseAdmission = () => {
    setPersonel(personnel - 1);
  };
  const increaseSeconds = () => {
    setSeconds(seconds + 10);
  };
  const decreaseSeconds = () => {
    setSeconds(seconds - 10);
  };
  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  return (
    <Admissions>
      <Header />
      <DoodleContainer>
        <DoodleFunctionMathImg src={DoodleFunctionMath} alt="함수낙서" />
        <DoodleCompassImg src={DoodleCompass} alt="컴퍼스낙서" />
      </DoodleContainer>
      <ButtonContainer>
        <ButtonContainerRow>
          <Buttons src={Food} />
          <ButtonName>음식</ButtonName>
        </ButtonContainerRow>
        <ButtonContainerRow>
          <Buttons src={Animal} />
          <ButtonName>동물</ButtonName>
        </ButtonContainerRow>
        <ButtonContainerRow>
          <Buttons src={Person} />
          <ButtonName>인물</ButtonName>
        </ButtonContainerRow>
        <ButtonContainerRow>
          <Buttons src={Random} />
          <ButtonName>랜덤</ButtonName>
        </ButtonContainerRow>
      </ButtonContainer>
      <Blackboard />
      <UIContainerRow>
        <UIContainerColumn>
          <NumberOfAdmissions>입장 인원</NumberOfAdmissions>
          <NumberOfAdmissionsRow>
            <UpButton onClick={increaseAdmission}>&lt;</UpButton>
            <Personnels>{personnel}</Personnels>
            <DownButton onClick={decreaseAdmission}>&gt;</DownButton>
          </NumberOfAdmissionsRow>
        </UIContainerColumn>
        <UIContainerColumn>
          <NickName>닉네임</NickName>
          <InputNickName type="text" onChange={handleUserName} />
        </UIContainerColumn>
        <UIContainerColumn>
          <TimeLimitPerRound>라운드 당 제한시간</TimeLimitPerRound>
          <NumberOfAdmissionsRow>
            <UpButton onClick={increaseSeconds}>&lt;</UpButton>
            <Seconds>{seconds}s</Seconds>
            <DownButton onClick={decreaseSeconds}>&gt;</DownButton>
          </NumberOfAdmissionsRow>
        </UIContainerColumn>
      </UIContainerRow>
      <ChatterImg src={Chatter} alt="떠든사람" />
      <TeachingImg src={Teaching} alt="교탁" />
      <FireExtinguisherImg src={FireExtinguisher} alt="소화기" />
    </Admissions>
  );
};

export default CreatingRooms;

const Admissions = styled.div`
  font-size: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  zIndex: 2;
`;
const TeachingImg = styled.img`
  position: absolute;
  bottom: 0;
`;
const ChatterImg = styled.img`
  position: absolute;
  top: 21em;
  right: 10em;
  z-index: 1;
`;
const DoodleFunctionMathImg = styled.img`
  position: absolute;
  left: 17%;
  top: 13em;
`;
const DoodleCompassImg = styled.img`
  position: absolute;
  left: 28%;
  top: 13em;
`;
const DoodleContainer = styled.div`
  z-index: 2;
  top: 10em;
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
const ButtonName = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: #ffffff;
  position: relative;
  bottom: 2.2em;
  left: 2.4em;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 9.8em;
`;
const ButtonContainerRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const UIContainerRow = styled.div`
  position: absolute;
  top: 15.5em;
  left: 18em;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
const UIContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right: 3em;
  z-index: 1;
`;
const NumberOfAdmissions = styled.div`
  text-align: center;
  font-family: Uhbee mysen;
  color: white;
  font-size: 3em;
`;
const NumberOfAdmissionsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const UpButton = styled.button`
  font-size: 3em;
  hight: 50%;
  color: white;
  background-color: transparent;
  border-radius: 50%;
  border: none;
`;
const DownButton = styled.button`
  font-size: 3em;
  hight: 0.5em;
  color: white;
  background-color: transparent;
  border-radius: 50%;
  border: none;
`;
const Personnels = styled.span`
  font-size: 5em;
  display: inline-block;
  position: relative;
  bottom: 0.7rem;
  color: white;
  text-align: center;
`;
const NickName = styled.span`
  font-size: 3em;
  color: white;
  margin-bottom: 2rem;
`;
const InputNickName = styled.input`
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
  text-align: center;
  font-size: 3em;
  color: white;
`;
const Seconds = styled.span`
  font-size: 5em;
  display: inline-block;
  position: relative;
  bottom: 0.7rem;
  color: white;
  text-align: center;
`;
