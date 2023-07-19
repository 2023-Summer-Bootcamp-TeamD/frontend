import React, { FunctionComponent, useState } from 'react';
import { styled } from 'styled-components';
import { Swiper, SwiperClass, SwiperProps, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
type Props = {
  values: number;
};
const HandlingData = ({ values }: Props) => {
  const [value, setValue] = useState<number>(values === 2 ? 2 : 10);
  const handleSlideChange = (swiper: SwiperClass) => {
    const currentSlideIndex = swiper.realIndex;
    if (currentSlideIndex < 0 || currentSlideIndex > 7) {
      swiper.slideTo(value - 1); // 현재 슬라이드로 이동하지 않도록 취소
    }
  };
  const handleSeconds = (swiper: SwiperClass) => {
    const currentSeconds = swiper.realIndex;
    if (currentSeconds < 0 || currentSeconds > 6) {
      swiper.slideTo(value - 1);
    }
  };
  return (
    <>
      {value === 2 ? (
        <StyledSwiper
          navigation={true}
          modules={[Navigation]}
          onSlideChange={handleSlideChange}
        >
          {Array.from({ length: 7 }, (_, i) => i + 2).map((num) => (
            <StyledSwiperSlider key={num}>{num}명</StyledSwiperSlider>
          ))}
        </StyledSwiper>
      ) : (
        <StyledSwiper
          navigation={true}
          modules={[Navigation]}
          onSlideChange={handleSeconds}
        >
          {Array.from({ length: 6 }, (_, i) => (i + 1) * 10).map((num) => (
            <StyledSwiperSlider key={num}>{num}s</StyledSwiperSlider>
          ))}
        </StyledSwiper>
      )}
    </>
  );
};

export default HandlingData;

const StyledSwiper = styled(Swiper)`
  width: 10vw;
  height: 6vh;

  > .swiper-button-next {
    color: white;
    position: relative;
    top: -5em;
    left: 24em;
    height: 4vh;
    font-size: 0.5rem;
    border: 0.1rem solid white;
    border-radius: 50%;
    &::after {
      font-size: 2rem;
    }
  }
  > .swiper-button-prev {
    color: white;
    position: relative;
    top: -2.7em;
    height: 4vh;
    font-size: 1em;
    border: 0.1rem solid white;
    border-radius: 50%;
    &::after {
      font-size: 2rem;
    }
  }
`;

const StyledSwiperSlider = styled(SwiperSlide)`
  text-align: center;
  font-size: 13em;
  color: white;
  position: relative;
  bottom: 0.2em;

  display: flex;
  justify-content: center;
  align-items: center;
`;
