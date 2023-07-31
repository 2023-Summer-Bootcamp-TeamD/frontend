import React, { ChangeEvent, useState } from 'react';
import { styled } from 'styled-components';
import chattingImg from '@/assets/Chatter.png';
import CompassImg from '@/assets/DoodleCompass.png';
import FunctionMathImg from '@/assets/DoodleFunctionMath.png';
import FireExtinguisherImg from '@/assets/FireExtinguisher.png';
import TeachingImg from '@/assets/Teaching.png';
import Label from '@/components/Entrance/EntranceLabel';
import Button from '@/components/Entrance/ EntranceButton';
import Header from '@/common/Header';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { CircleInputType, NickNameType } from '@/types/entryRoom';
import { entryAPI } from '@/apis/entryRoom';
import Theme from '@/constants/entryRoomResponsive';
import SpinnerBox from '@/components/SkeletonSpinner';

const EntryRoom = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [circleInput, setCircleInput] = useState<CircleInputType>({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
  });
  const [nickname, setNickName] = useState<string>('');
  const [uuid, setUUID] = useState('');
  const [apiRestrict, setApiRestrict] = useState(false);

  const onCodehandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCircleInput({
      ...circleInput,
      [e.target.name]: e.target.value,
    });
  };

  const onNickNamehandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({
      nickname: nickname,
    });
  };
  const postNickName = async (nickNameData: NickNameType) => {
    setIsLoading(true);
    const uuid: string = Object.values(circleInput).join('');
    setUUID(uuid);
    const res = await entryAPI(uuid, nickNameData);
    setIsLoading(false);
    return res;
  };

  const { mutate } = useMutation(postNickName, {
    onSuccess: (data) => {
      navigate(`/game/${uuid}`, {
        state: { ...data, nickname },
      });
    },
    onError: (error: AxiosError) => {
      console.log(error.response?.data);
    },
  });

  return (
    <Wrap>
      <Header />
      <FireExtinguisher />
      <Teaching />
      <Blackboard>
        {isLoading && <SpinnerBox />}
        <DoodleCompass />
        <DoodleMath />
        <DoodleChatting />
        <EntryForm onSubmit={onSubmitHandler}>
          <Label name="입장코드" />
          <CodeWrap>
            {Object.values(circleInput).map((value, index) => (
              <CodeInput
                key={index}
                name={`input${index + 1}`}
                onChange={onCodehandler}
                value={value}
                required
                maxLength={1}
              />
            ))}
          </CodeWrap>
          <Label name="닉네임" />
          <NickNameInput
            placeholder="닉네임을 입력해주세요"
            required
            onChange={onNickNamehandler}
            value={nickname}
          />
          <Button title="입장하기" />
        </EntryForm>
      </Blackboard>
    </Wrap>
  );
};

export default EntryRoom;
const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  position: relative;
  display: flex;
  background-image: linear-gradient(to bottom, #faf1e5 70vh, #c9cb81 40vh);
`;

const FireExtinguisher = styled.img.attrs({
  src: `${FireExtinguisherImg}`,
})`
  position: absolute;
  right: 2rem;
  bottom: 0;
  width: 30rem;
  @media ${Theme.EntryRoomPageTheme.SemiSmallSemiMedium} {
    width: 23rem;
  }
  @media ${Theme.EntryRoomPageTheme.TabletSemiSmall} {
    width: 20rem;
  }
`;
const Teaching = styled.img.attrs({
  src: `${TeachingImg}`,
})`
  position: absolute;
  bottom: 0;
  width: 45rem;
  z-index: 1;

  @media ${Theme.EntryRoomPageTheme.SemiSmallSemiMedium} {
    display: none;
  }
  @media ${Theme.EntryRoomPageTheme.TabletSemiSmall} {
    display: none;
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
  @media ${Theme.EntryRoomPageTheme.SemiSmallSemiMedium} {
    left: 10rem;
    width: 5rem;
  }
  @media ${Theme.EntryRoomPageTheme.TabletSemiSmall} {
    left: 7rem;
    width: 4rem;
  }
`;

const DoodleMath = styled.img.attrs({
  src: `${FunctionMathImg}`,
})`
  position: absolute;
  left: 1rem;
  top: 0.7rem;
  width: 10rem;
  @media ${Theme.EntryRoomPageTheme.SemiSmallSemiMedium} {
    width: 9rem;
  }
  @media ${Theme.EntryRoomPageTheme.TabletSemiSmall} {
    width: 8rem;
  }
`;

const DoodleChatting = styled.img.attrs({
  src: `${chattingImg}`,
})`
  position: absolute;
  right: 2rem;
  bottom: 3rem;
  width: 10rem;
  @media ${Theme.EntryRoomPageTheme.SemiSmallSemiMedium} {
    width: 8rem;
  }
  @media ${Theme.EntryRoomPageTheme.TabletSemiSmall} {
    width: 6rem;
  }
`;

const EntryForm = styled.form`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CodeWrap = styled.div`
  height: 7rem;
  display: flex;
  justify-content: space-evenly;
  margin-right: 2.5rem;
  @media ${Theme.EntryRoomPageTheme.SemiSmallSemiMedium} {
    height: 6.5rem;
  }
  @media ${Theme.EntryRoomPageTheme.TabletSemiSmall} {
    height: 6rem;
  }
`;
const CodeInput = styled.input`
  margin-left: 2.5rem;
  width: 7rem;
  border: 0 solid;
  border-radius: 50%;
  text-align: center;
  font-size: 5rem;
  font-weight: bold;
  color: #1c3b3e;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 6px 2px #fff;
  }

  @media ${Theme.EntryRoomPageTheme.SemiSmallSemiMedium} {
    width: 6.5rem;
    margin-left: 2rem;
    font-size: 4.5;
  }
  @media ${Theme.EntryRoomPageTheme.TabletSemiSmall} {
    width: 6rem;
    margin-left: 1.5rem;
    font-size: 4rem;
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

  @media ${Theme.EntryRoomPageTheme.SemiSmallSemiMedium} {
    width: 21rem;
    height: 3.5rem;
    font-size: 2.3rem;
  }
  @media ${Theme.EntryRoomPageTheme.TabletSemiSmall} {
    width: 18rem;
    height: 3rem;
    font-size: 2rem;
  }
`;
