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
  const rommElement = [
    { image: Food, id: '음식' },
    { image: Animal, id: '동물' },
    { image: Person, id: '인물' },
    { image: Random, id: '랜덤' },
  ];
  const [personnel, setPersonnel] = useState(2);
  const [seconds, setSeconds] = useState(10);
  const increaseAdmission = () => {
    if (personnel < 2) {
      setPersonnel(2);
    } else if (personnel >= 2 && personnel < 8) {
      setPersonnel(personnel + 1);
    } else if (personnel > 8) {
      setPersonnel(8);
    }
  };
  const decreaseAdmission = () => {
    if (personnel <= 2) {
      setPersonnel(2);
    } else if (personnel > 2 && personnel <= 8) {
      setPersonnel(personnel - 1);
    } else if (personnel > 8) {
      setPersonnel(8);
    }
  };
  const increaseSeconds = () => {
    if (seconds < 10) {
      setSeconds(10);
    } else if (seconds >= 10 && seconds < 60) {
      setSeconds(seconds + 10);
    } else if (seconds > 60) {
      setSeconds(60);
    }
  };
  const decreaseSeconds = () => {
    if (seconds <= 10) {
      setSeconds(0);
    } else if (seconds > 10 && seconds <= 60) {
      setSeconds(seconds - 10);
    } else if (seconds > 60) {
      setSeconds(60);
    }
  };
  return (
    <Admissions>
      <Header />
      <DoodleContainer>
        <img
          className="FunctionMathImg"
          src={DoodleFunctionMath}
          alt="함수낙서"
        />
        <img className="CompassImg" src={DoodleCompass} alt="컴퍼스낙서" />
      </DoodleContainer>
      <ButtonContainer>
        {rommElement.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.id} />
            <div>{item.id}</div>
          </div>
        ))}
      </ButtonContainer>
      <Blackboard />
      <UIContainerRow>
        <UIContainerColumn>
          <NumberOfAdmissions>입장 인원</NumberOfAdmissions>
          <NumberOfAdmissionsRow>
            <UpButton onClick={increaseAdmission}>&lt;</UpButton>
            <Personnels>{personnel}명</Personnels>
            <DownButton onClick={decreaseAdmission}>&gt;</DownButton>
          </NumberOfAdmissionsRow>
        </UIContainerColumn>
        <UIContainerColumn>
          <NickName>닉네임</NickName>
          <InputNickName
            type="text"
            placeholder="닉네임을 입력해주세요"
            required
            maxLength={5}
          />
          <CreatingRoomButton>방 만들기</CreatingRoomButton>
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
  position: relative;
  bottom: 2rem;
`;
const TeachingImg = styled.img`
  position: absolute;
  width: 30vw;
  bottom: 0;
`;
const ChatterImg = styled.img`
  position: absolute;
  top: 21em;
  right: 10em;
  z-index: 1;
`;
const DoodleContainer = styled.div`
  z-index: 2;
  top: 10em;
  > img {
    position: absolute;
  }
  > .FunctionMathImg {
    left: 17%;
    top: 12em;
  }
  > .CompassImg {
    left: 28%;
    top: 12em;
  }
`;
const FireExtinguisherImg = styled.img`
  width: 10wh;
  height: 15vh;
  position: absolute;
  bottom: 0;
  right: 2em;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 9.8em;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  > div > img {
    width: 6vw;
    height: 12vh;
    border: 0.3rem solid #ffffff;
    border-radius: 2rem;
    margin: 2rem;
    background-color: rgba(255, 255, 255, 0);
    display: flex;
    z-index: 1;
  }

  > div > div {
    font-size: 1.5em;
    font-weight: bold;
    color: #ffffff;
    position: relative;
    bottom: 2.2em;
    left: 2.4em;
    z-index: 1;
  }

  > div > img:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
const UIContainerRow = styled.div`
  position: absolute;
  top: 14.5em;
  left: 18.8em;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-right: 3em;
    z-index: 1;
  }

  > div:nth-child(1) {
    position: relative;
    right: 7em;
  }

  > div:nth-child(3) {
    position: relative;
    left: 5em;
  }
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
  font-size: 2em;
`;
const NumberOfAdmissionsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const UpButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 2em;
  border: 2px solid white;
  height: 1.5em;
  color: white;
  position: relative;
  top: 1.5rem;
  background-color: transparent;
  border-radius: 50%;
  padding: 0.3em;
  margin-right: 1rem;
`;
const DownButton = styled.button`
  display: flex; /* 요소를 수직으로 가운데 정렬 */
  align-items: center;
  font-size: 2em;
  border: 2px solid white;
  height: 1.5em;
  color: white;
  position: relative;
  top: 1.5rem;
  background-color: transparent;
  border-radius: 50%;
  padding: 0.3em;
  margin-left: 1rem;
`;
const Personnels = styled.span`
  font-size: 6em;
  display: inline-block;
  position: relative;
  bottom: 0.7rem;
  color: white;
  text-align: center;
`;
const NickName = styled.span`
  font-size: 2em;
  color: white;
  margin-bottom: 2rem;
`;
const InputNickName = styled.input`
  font-family: 'Uhbee mysen';
  border-radius: 2em;
  background-color: rgba(255, 255, 255, 0.3);
  font-size: 2em;
  text-align: center;
  color: white;
  border: 0.2rem solid white;
  &::placeholder {
    color: white;
    font-size: 1em;
  }
  &:focus {
    background-color: rgba(255, 255, 255, 0);
  }
`;
const CreatingRoomButton = styled.button`
  font-family: 'Uhbee mysen';
  border-radius: 2em;
  background-color: rgba(255, 255, 255, 0);
  font-size: 2em;
  text-align: center;
  color: white;
  border: 0.2rem solid white;
  margin-top: 2rem;
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
const TimeLimitPerRound = styled.span`
  text-align: center;
  font-size: 2em;
  color: white;
`;
const Seconds = styled.span`
  font-size: 6em;
  display: inline-block;
  position: relative;
  bottom: 0.7rem;
  color: white;
  text-align: center;
`;
