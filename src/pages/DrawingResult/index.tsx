import { styled } from 'styled-components';
import FireExtinguisherImg from '@/assets/FireExtinguisher.png';
import DrawingHeader from '@/common/DrawingHeader ';
import chattingImg from '@/assets/Chatter.png';
import CompassImg from '@/assets/DoodleCompass.png';
import FunctionMathImg from '@/assets/DoodleFunctionMath.png';
import { ResultCategory, ResultCategoryType } from '@/constants/resultCategory';
import { motion } from 'framer-motion';
const CategoryItemList = ({ img, title }: ResultCategoryType) => (
  <Category whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
    <img src={img} />
    <label>{title}</label>
  </Category>
);

const DrawingResult = () => {
  return (
    <Wrap>
      <DrawingHeader />
      <FireExtinguisher />
      <Blackboard>
        <DoodleCompass />
        <DoodleMath />
        <DoodleChatting />
        <CategoryWrap>
          {ResultCategory.map((item) => (
            <CategoryItemList
              key={item.title}
              img={item.img}
              title={item.title}
            />
          ))}
        </CategoryWrap>
      </Blackboard>
    </Wrap>
  );
};

export default DrawingResult;

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
  position: relative;
  justify-content: center;
  @media (max-width: 480px) {
    border: 5px solid #8e5501;
    border-radius: 10px;
  }
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
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 480px) {
    flex-direction: column;
    width: auto;
    height: auto;
  }
`;

const Category = styled(motion.button)`
  width: 17rem;
  height: 17rem;
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
  & > img {
    height: 14rem;
    width: 14rem;
  }
  & > label {
    font-size: 3.5rem;
    color: #fff;
    position: absolute;
    bottom: 2rem;
  }

  @media (max-width: 992px) {
    width: 13.8rem;
    height: 13.8rem;
  }
  @media (max-width: 768px) {
    width: 11rem;
    height: 11rem;
    & > img {
      height: 10rem;
      width: 10rem;
    }
    & > label {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 480px) {
    width: 17rem;
    height: 17rem;
    border-radius: 20px;
    margin-top: 5rem;
    & > img {
      height: 17rem;
      width: 17rem;
    }
    & > label {
      font-size: 4rem;
    }
  }
`;

const FireExtinguisher = styled.img.attrs({
  src: `${FireExtinguisherImg}`,
})`
  position: absolute;
  right: 2rem;
  bottom: 0;
  width: 30rem;
`;

// @media (max-width: 768px) {
//   // 태블릿
//   font-size: 50%; // 8px
// }
