import React from 'react';
import { styled } from 'styled-components';
import chattingImg from '@/assets/Chatter.png';
import CompassImg from '@/assets/DoodleCompass.png';
import FunctionMathImg from '@/assets/DoodleFunctionMath.png';
import FireExtinguisherImg from '@/assets/FireExtinguisher.png';
import TeachingImg from '@/assets/Teaching.png';
import Label from '@/components/Label';
const EntryRoom = () => {
  return (
    <Wrap>
      <FireExtinguisher />
      <Teaching />
      <ChalkBoard>
        {' '}
        <DoodleCompass />
        <DoodleMath />
        <DoodleChatting />
        <EntryForm>
          {' '}
          <Label name="입장코드" />
          <CodeWrap>
            {' '}
            <CodeInput />
            <CodeInput />
            <CodeInput />
            <CodeInput />
            <CodeInput />
          </CodeWrap>
        </EntryForm>
      </ChalkBoard>
    </Wrap>
  );
};

export default EntryRoom;
const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    to bottom,
    #faf1e5 0%,
    #faf1e5 70%,
    #c9cb81 70%,
    #c9cb81 100%
  );
`;

const FireExtinguisher = styled.img.attrs({
  src: `${FireExtinguisherImg}`,
})`
  position: absolute;
  right: 2rem;
  bottom: 0;
  width: 30rem;
`;
const Teaching = styled.img.attrs({
  src: `${TeachingImg}`,
})`
  position: absolute;
  bottom: 0;
  width: 50rem;
`;

const ChalkBoard = styled.div`
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
  width: 5%;
`;

const DoodleMath = styled.img.attrs({
  src: `${FunctionMathImg}`,
})`
  position: absolute;
  left: 1rem;
  top: 0.7rem;
  width: 10%;
`;

const DoodleChatting = styled.img.attrs({
  src: `${chattingImg}`,
})`
  position: absolute;
  right: 2rem;
  bottom: 3rem;
  width: 10%;
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
`;
const CodeInput = styled.input.attrs({ required: true, maxLength: 1 })`
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
`;
