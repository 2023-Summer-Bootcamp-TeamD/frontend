import React, { useState } from 'react';
import { styled } from 'styled-components';
import Teaching from '@/assets/Teaching.png';
import FireExtinguisher from '@/assets/FireExtinguisher.png';
import DoodleFunctionMath from '@/assets/DoodleFunctionMath.png';
import DoodleCompass from '@/assets/DoodleCompass.png';
import Chatter from '@/assets/Chatter.png';
import { roomElement } from '@/constants/roomElement';
import Header from '@/common/Header';
import Label from '@/components/Entrance/EntranceLabel';
import { motion } from 'framer-motion';
const CreatingRooms = () => {
  const [personnel, setPersonnel] = useState(2);
  const [seconds, setSeconds] = useState(10);
  const increasePersonnel = () => {
    if (personnel < 8) {
      setPersonnel(personnel + 1);
    }
  };
  const decreasePersonnel = () => {
    if (personnel > 2) {
      setPersonnel(personnel - 1);
    }
  };
  const increaseSeconds = () => {
    if (seconds < 60) {
      setSeconds(seconds + 10);
    }
  };
  const decreaseSeconds = () => {
    if (seconds > 10) {
      setSeconds(seconds - 10);
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
        {roomElement.map((item, index) => (
          <div key={index}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src={item.image}
              alt={item.id}
            />
            <div>{item.id}</div>
          </div>
          <div>
            <Label name="닉네임" />
            <NickNameInput
              placeholder="닉네임을 입력해주세요"
              required
              maxLength={5}
            />
          </div>
        </div>
        <div>
          <div className="NickName">닉네임</div>
          <input
            className="InputNickName"
            type="text"
            placeholder="닉네임을 입력해주세요"
            required
            maxLength={5}
          />
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="CreatingRoomButton"
          >
            방 만들기
          </motion.button>
        </div>
        <div>
          <div className="TimeLimitPerRound">라운드 당 제한시간</div>
          <div className="TimeLimitPerRoundRow">
            <button className="IncreaseSeconds" onClick={decreaseSeconds}>
              &lt;
            </button>
            <div className="Seconds">{seconds}s</div>
            <button className="DecreaseSeconds" onClick={increaseSeconds}>
              &gt;
            </button>
          </div>
        </UIContainer>
        <button className="CreatingRoomButton">방 만들기</button>
        <ChatterImg src={Chatter} alt="떠든사람" />
      </Blackboard>
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
const DoodleContainer = styled.div`
  z-index: 2;
  top: 10em;
  > img {
    position: absolute;
  }
  > .FunctionMathImg {
    left: 1rem;
    top: 0.7rem;
    width: 10rem;
  }
  > .CompassImg {
    left: 12rem;
    top: 2rem;
    width: 6rem;
  }
`;
const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 6rem;

  > div {
    margin: 2rem;
    width: 12rem;
    height: 12rem;
    border-radius: 20px;
    border: 0.15rem solid #fff;
    background-color: transparent;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 255, 255, 0.18);
    }
  }
  > div > img {
    height: 12rem;
    width: 12rem;
  }
  > div > label {
    font-size: 2.5rem;
    color: #fff;
    position: absolute;
    bottom: 2rem;
  }
  > div:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
const UIContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 12rem;

  > div {
    display: flex;
    flex-direction: column;
    text-align: center;
    z-index: 1;
    align-items: center;
    position: relative;
    width: 25rem;
    .NumberOfAdmissions {
      text-align: center;
      color: white;
      font-size: 2em;
      position: relative;
      top: -0.4em;
    }
  }
  > div:nth-child(1) {
    position: relative;
    right: 7em;
  }
  .NumberOfAdmissionsRow {
    display: flex;
    flex-direction: row;
    justify-content: center;

    > .Personnels {
      width: 4vw;
      font-size: 5rem;
      display: inline-block;
      position: relative;
      bottom: 0.1em;
      color: white;
      text-align: center;
    }
  }
  > div:nth-child(2) > .NickName {
    font-size: 2em;
    color: white;
    margin-top: 3rem;
    margin-bottom: 2rem;
  }

  > div:nth-child(3) {
    position: relative;
    left: 7em;
    > .TimeLimitPerRound {
      text-align: center;
      font-family: Uhbee mysen;
      color: white;
      font-size: 2em;
      position: relative;
      top: -0.4em;
    }
    .TimeLimitPerRoundRow {
      display: flex;
      flex-direction: row;
      justify-content: center;

      .Seconds {
        width: 4vw;
        font-size: 5rem;
        display: inline-block;
        position: relative;
        bottom: 0.7rem;
        color: white;
        text-align: center;
      }
    }
  }
  .IncreaseAndDecreaseButtons {
    display: flex;
    align-items: center;
    font-size: 2.5rem;
    border: 2px solid white;
    height: 1.5em;
    color: white;
    position: relative;
    top: 1rem;
    background-color: transparent;
    border-radius: 50%;
    padding: 0.1rem 1rem;
    margin-right: 1rem;
    margin-left: 1rem;
    cursor: pointer;
    &:hover {
      scale: 1.1;
      opacity: 0.8;
    }
  }
  .IncreaseAndDecreaseButtons :hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.3);
  }
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .CreatingRoomButton {
    width: 13rem;
    height: 5rem;
    margin-top: 5rem;
    border-radius: 20rem;
    border: 0.05rem solid #fff;
    background-color: transparent;
    color: #fff;
    font-size: 3rem;
    &::placeholder {
      color: #fff;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.18);
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`;

const NickNameInput = styled.input`
  text-align: center;
  border: 0.05rem solid #fff;
  background-color: rgba(255, 255, 255, 0.18);
  border-radius: 20rem;
  width: 23rem;
  height: 4rem;
  font-size: 2.5rem;
  color: #fff;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 1px 1px #fff;
  }
  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const ChatterImg = styled.img`
  position: absolute;
  right: 2rem;
  bottom: 3rem;
  width: 10rem;
`;
const TeachingImg = styled.img`
  position: absolute;
  bottom: 0;
  width: 45rem;
  z-index: 1;
`;
const FireExtinguisherImg = styled.img`
  position: absolute;
  right: 2rem;
  bottom: 0;
  width: 30rem;
`;
