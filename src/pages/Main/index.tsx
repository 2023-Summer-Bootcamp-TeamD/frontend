import React from 'react';
import { styled } from 'styled-components';
import Header from '@/common/Header';
import BlackboardDecoInMainPage from '@/assets/BlackboardDecoInMainPage.png';
import BlackBoadrdBottomLeftImg from '@/assets/BottomLeftImg.png';
import BlackBoadrdBottomRightImg from '@/assets/BottomRightImg.png';
import BlackBoadrdTopLeftImg from '@/assets/TopLeftImg.png';
import BlackBoadrdTopRightImg from '@/assets/TopRightImg.png';
import FireExtinguisher from '@/assets/FireExtinguisher.png';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Theme from '@/constants/MainResponsive';
const Main = () => {
  const navigate = useNavigate();
  const goToEntryRoom = () => navigate('/entryRoom');
  const goToCreatRoom = () => navigate('/creatingSpecificRooms');

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const transition = {
    duration: 3, // 애니메이션의 지속 시간 (초 단위)
  };
  return (
    <Mains>
      <Header />
      <Blackboard>
        <BlackboardGrid
          className="Container"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={transition}
        >
          <img
            className="LeftTop"
            src={BlackBoadrdTopLeftImg}
            alt="칠판 왼쪽 상단이미지"
          />
          <img
            className="RightTop"
            src={BlackBoadrdTopRightImg}
            alt="칠판 오른쪽 상단이미지"
          />
          <img
            className="LeftBottom"
            src={BlackBoadrdBottomLeftImg}
            alt="칠판 왼쪽 하단이미지"
          />
          <img
            className="RightBottom"
            src={BlackBoadrdBottomRightImg}
            alt="칠판 오른쪽 하단이미지"
          />
        </BlackboardGrid>
        <div className="itemInBlackBoard">
          <AppName
            transition={{ duration: 1, times: [0.1] }}
            animate={{ scale: [1, 1.3, 1.1, 1.2, 1.1] }}
          >
            핑고빙고
          </AppName>
        </div>
        <div className="itemInBlackBoard">
          <Buttons whileTap={{ scale: 0.9 }} onClick={goToCreatRoom}>
            방 만들기
          </Buttons>
          <Buttons whileTap={{ scale: 0.9 }} onClick={goToEntryRoom}>
            입장하기
          </Buttons>
        </div>
      </Blackboard>
      <img className="FireExtinguisherImg" src={FireExtinguisher} />
    </Mains>
  );
};

export default Main;

const Mains = styled.div`
  font-size: 3rem;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(to bottom, #faf1e5 70vh, #c9cb81 40vh);
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .FireExtinguisherImg {
    position: absolute;
    right: 2rem;
    bottom: 0;
    width: 30rem;
    @media ${Theme.MainPageTheme.SemiSmallSemiMedium} {
      width: 23rem;
    }
    @media ${Theme.MainPageTheme.TabletSemiSmall} {
      width: 20rem;
    }
  }
`;

const AppName = styled(motion.span)`
  font-size: 13rem;
  @media ${Theme.MainPageTheme.SemiSmallSemiMedium} {
    font-size: 10rem;
  }
  @media ${Theme.MainPageTheme.TabletSemiSmall} {
    font-size: 7rem;
  }
`;
const BlackboardGrid = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 6rem;

  @media screen and (min-width: 768px) and (max-width: 1530px) {
    row-gap: calc(2rem + ((100vw - 768px) / 170) * 10);
  }
  /* @media screen and (min-width: 1300px) and (max-width: 1400px) {
    row-gap: 7rem;
  }
  @media screen and (min-width: 1200px) and (max-width: 1300px) {
    row-gap: 10rem;
  }
  @media screen and (min-width: 1100px) and (max-width: 1200px) {
    row-gap: 13rem;
  }
  @media screen and (min-width: 1000px) and (max-width: 1100px) {
    row-gap: 16rem;
  }
  @media screen and (min-width: 900px) and (max-width: 1000px) {
    row-gap: 19rem;
  }
  @media screen and (min-width: 800px) and (max-width: 900px) {
    row-gap: 22rem;
  }
  @media screen and (min-width: 768px) and (max-width: 800px) {
    row-gap: 25rem;
  } */
  > .LeftTop {
    width: 20%;
  }
  > .LeftBottom {
    width: 40%;
  }
  > .RightTop {
    width: 30%;
    justify-self: end;
  }
  > .RightBottom {
    justify-self: end;
    width: 35%;
  }
`;

const Blackboard = styled.div`
  position: relative;
  background-size: 70vw 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: 65vh;
  background-color: #1c3b3e;
  border: 15px solid #8e5501;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2rem;
  color: white;
  font-size: 32rem;
  .itemInBlackBoard {
    display: flex;
  }
`;

const Buttons = styled(motion.button)`
  width: 16rem;
  height: 5rem;
  font-family: 'Uhbee mysen';
  font-size: 3.5rem;
  color: white;
  background-color: #1c3b3e;
  border: 0.2rem solid #ffffff;
  border-radius: 3rem;
  margin: 3rem 5rem;
  position: relative;
  z-index: 1;
  &:hover {
    background-color: #455e61;
    transform: scale(1.1);
    cursor: pointer;
  }
  @media ${Theme.MainPageTheme.SemiSmallSmall} {
    width: 13rem;
    height: 4rem;
    font-size: 3rem;
  }
  @media ${Theme.MainPageTheme.TabletSemiSmall} {
    width: 10rem;
    height: 3rem;
    font-size: 2.8rem;
  }
`;
