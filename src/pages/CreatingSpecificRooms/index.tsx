import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Teaching from '@/assets/Teaching.png';
import FireExtinguisher from '@/assets/FireExtinguisher.png';
import DoodleFunctionMath from '@/assets/DoodleFunctionMath.png';
import DoodleCompass from '@/assets/DoodleCompass.png';
import Chatter from '@/assets/Chatter.png';
import { roomElement } from '@/constants/roomElement';
import Header from '@/common/Header';
import Label from '@/components/Entrance/EntranceLabel';
import { MakeRoomType } from '@/types/creatingSpecificRooms';
import { makeRoomAPI } from '@/apis/creatingSpecificRooms';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const CreatingRooms = () => {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState(1);
  const [nickname, setNickname] = useState('');
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

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const clickCategory = (categoryId: number) => {
    setSelectedCategory(categoryId);
  };

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    mutate({
      nickname,
      selectedCategory,
      seconds,
      personnel,
    });
  };

  const postGameInfo = async (data: MakeRoomType) => {
    return await makeRoomAPI(data);
  };

  const { mutate } = useMutation(postGameInfo, {
    onSuccess: (data) => {
      navigate(`/game/${data?.entry_code}`, { state: data });
    },
    onError: (error: AxiosError) => {
      console.log(error.response?.data);
    },
  });

  return (
    <Admissions>
      <Header />
      <TeachingImg src={Teaching} alt="교탁" />
      <FireExtinguisherImg src={FireExtinguisher} alt="소화기" />
      <Blackboard>
        <DoodleContainer>
          <img
            className="FunctionMathImg"
            src={DoodleFunctionMath}
            alt="함수낙서"
          />
          <img className="CompassImg" src={DoodleCompass} alt="컴퍼스낙서" />
        </DoodleContainer>
        <CategoryContainer>
          {roomElement.map((item, index) => (
            <div
              key={index + 1}
              onClick={() => clickCategory(index + 1)}
              style={{
                backgroundColor:
                  index + 1 === selectedCategory
                    ? 'rgba(255, 255, 255, 0.18)'
                    : '',
              }}
            >
              <img src={item.image} alt={item.id} />
              <label>{item.id}</label>
            </div>
          ))}
        </CategoryContainer>
        <UIContainer>
          <div>
            <Label name="입장 인원" />
            <div className="NumberOfAdmissionsRow">
              <button className="IncreaseButton" onClick={decreasePersonnel}>
                &lt;
              </button>
              <div className="Personnels">{personnel}명</div>
              <button className="DecreaseButton" onClick={increasePersonnel}>
                &gt;
              </button>
            </div>
          </div>
          <div>
            <Label name="닉네임" />
            <NickNameInput
              placeholder="닉네임을 입력해주세요"
              value={nickname}
              onChange={handleNicknameChange}
              required
              maxLength={5}
            />
          </div>
          <div>
            <Label name="라운드 당 제한 시간" />
            <div className="TimeLimitPerRoundRow">
              <button className="IncreaseSeconds" onClick={decreaseSeconds}>
                &lt;
              </button>
              <div className="Seconds">{seconds}s</div>
              <button className="DecreaseSeconds" onClick={increaseSeconds}>
                &gt;
              </button>
            </div>
          </div>
        </UIContainer>
        <button className="CreatingRoomButton" onClick={onClickHandler}>
          방 만들기
        </button>
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
      transform: scale(1.1);
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
    > .IncreaseButton,
    .DecreaseButton {
      display: flex;
      align-items: center;
      font-size: 2rem;
      border: 2px solid white;
      height: 1.5em;
      color: white;
      position: relative;
      top: 1.5rem;
      background-color: transparent;
      border-radius: 50%;
      padding: 0.3em;
      margin-right: 2rem;
      margin-left: 2rem;
    }
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
      > .IncreaseSeconds,
      .DecreaseSeconds {
        display: flex;
        align-items: center;
        font-size: 2rem;
        border: 2px solid white;
        height: 1.5em;
        color: white;
        position: relative;
        top: 1.5rem;
        background-color: transparent;
        border-radius: 50%;
        padding: 0.3em;
        margin-right: 1rem;
        margin-left: 1rem;
      }
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
