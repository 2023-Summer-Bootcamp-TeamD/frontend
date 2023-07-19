import React, { ChangeEventHandler, useState } from 'react';
import { styled } from 'styled-components';
import { roomElement } from '@/constants/roomElement';
import Teaching from '@/assets/Teaching.png';
import FireExtinguisher from '@/assets/FireExtinguisher.png';
import DoodleFunctionMath from '@/assets/DoodleFunctionMath.png';
import DoodleCompass from '@/assets/DoodleCompass.png';
import Chatter from '@/assets/Chatter.png';
import Header from '@/common/Header';
import HandlingData from '@/common/Handlingdata';

const CreatingRooms = () => {
  const [personnel, setPersonnel] = useState(2);
  const [seconds, setSeconds] = useState(10);
  const [name, setName] = useState('');
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
  const inputNickNames = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
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
            <img src={item.image} alt={item.id} />
            <div>{item.id}</div>
          </div>
        ))}
      </ButtonContainer>
      <Blackboard />
      <UIContainer>
        <div>
          <div className="NumberOfAdmissions">입장 인원</div>
          <div className="NumberOfAdmissionsRow">
            {/* <button className="IncreaseButton" onClick={decreasePersonnel}>
              &lt;
            </button>
            <div className="Personnels">{personnel}명</div>
            <button className="DecreaseButton" onClick={increasePersonnel}>
              &gt;
            </button> */}
            <HandlingData values={2} />
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
            onChange={inputNickNames}
          />
          <button className="CreatingRoomButton">방 만들기</button>
        </div>
        <div>
          <div className="TimeLimitPerRound">라운드 당 제한시간</div>
          <div className="TimeLimitPerRoundRow">
            {/* <button className="IncreaseSeconds" onClick={decreaseSeconds}>
              &lt;
            </button>
            <div className="Seconds">{seconds}s</div>
            <button className="DecreaseSeconds" onClick={increaseSeconds}>
              &gt;
            </button> */}
            <HandlingData values={10} />
          </div>
        </div>
      </UIContainer>
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
const DoodleContainer = styled.div`
  z-index: 2;
  top: 10em;
  > img {
    position: absolute;
  }
  > .FunctionMathImg {
    left: 16em;
    top: 12em;
  }
  > .CompassImg {
    left: 25em;
    top: 12em;
  }
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
const UIContainer = styled.div`
  position: absolute;
  top: 14.5em;
  left: 18.3em;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
    text-align: center;
    z-index: 1;
    align-items: center;
    position: relative;
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
  }
  > div:nth-child(2) > .NickName {
    font-size: 2em;
    color: white;
    margin-top: 3rem;
    margin-bottom: 2rem;
  }
  > div:nth-child(2) > .InputNickName {
    width: 20vw;
    font-family: 'Uhbee mysen';
    border-radius: 2em;
    background-color: rgba(255, 255, 255, 0.3);
    font-size: 2em;
    text-align: center;
    color: white;
    border: 0.2rem solid white;
    &::placeholder {
      color: white;
      font-size: 0.9em;
    }
    &:focus {
      background-color: rgba(255, 255, 255, 0);
    }
  }
  > div:nth-child(2) > .CreatingRoomButton {
    width: 10vw;
    font-family: 'Uhbee mysen';
    border-radius: 2em;
    background-color: rgba(255, 255, 255, 0);
    font-size: 2.5em;
    text-align: center;
    color: white;
    border: 0.2rem solid white;
    margin-top: 1.5rem;
    margin-bottom: auto;
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
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
    }
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
  position: relative;
  bottom: 2rem;
`;
const ChatterImg = styled.img`
  position: absolute;
  top: 21em;
  right: 10em;
  z-index: 1;
`;
const TeachingImg = styled.img`
  position: absolute;
  width: 30vw;
  bottom: 0;
`;
const FireExtinguisherImg = styled.img`
  width: 10wh;
  height: 15vh;
  position: absolute;
  bottom: 0;
  right: 2em;
`;
