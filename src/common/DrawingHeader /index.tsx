import { styled } from 'styled-components';
import Exit from '@/assets/Exit.png';
import { CircleText } from '@/constants/CircleText';
import { motion } from 'framer-motion';
const DrawingHeader = () => {
  return (
    <PageHeader>
      <WrapBtn>
        <ExitBtn whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
          <ExitImg src={Exit} alt="돌아가기" />
          <Text>돌아가기</Text>
        </ExitBtn>
      </WrapBtn>
      {CircleText.map((text) => (
        <CircleWrap key={text}>{text}</CircleWrap>
      ))}
    </PageHeader>
  );
};

export default DrawingHeader;

const WrapBtn = styled.div`
  position: absolute;
  left: 5rem;
  top: 4rem;
`;
const ExitBtn = styled(motion.button)`
  position: relative;
  cursor: pointer;
  background-color: transparent;
`;

const ExitImg = styled.img`
  width: 14rem;
  height: 9rem;
`;
const Text = styled.span`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  font-weight: bold;
  color: #000000;
`;
const PageHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;
  width: 100%;
`;
const CircleWrap = styled.div`
  width: 8rem;
  height: 8rem;
  margin-left: 3rem;
  background-color: #fff;
  border: 0 solid;
  border-radius: 50%;
  text-align: center;
  line-height: 8.5rem;
  font-size: 5rem;
  text-shadow: 1px 1px 2px #b8b8b8;
  box-shadow: 4px 4px 3px -1px #a6a6a6;
`;
