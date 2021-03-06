import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, A11y, EffectCoverflow } from 'swiper';

const Slider = ({
  settings,
  setSlider,
  interleaveEffect = false,
  children = [],
}) => {
  SwiperCore.use([Autoplay, A11y, EffectCoverflow]);
  const params = {
    slidesPerView: 1,
    speed: 750,
    watchSlidesVisibility: interleaveEffect,
    watchSlidesProgress: interleaveEffect,
    mousewheel: interleaveEffect,
    keyboard: interleaveEffect,
    ...settings,
  };

  const handleSlider = (swiper) => {
    if (setSlider) return setSlider(swiper);
  };

  return (
    <Swiper
      {...params}
      onSwiper={(swiper) => {
        handleSlider(swiper);
      }}
      className={interleaveEffect && 'interleaveEffect'}
      onSetTransition={(swiper, speed) => {
        if (interleaveEffect) {
          return swiper.slides?.map((slide) => {
            slide.style.transition = `${speed}ms ease`;
            slide.querySelector(
              '.interleave'
            ).style.transition = `${speed}ms ease`;
          });
        }
      }}
      onTouchStart={(swiper) => {
        if (interleaveEffect) {
          return swiper.slides?.map((slide) => {
            slide.style.transition = '';
          });
        }
      }}
      onProgress={(swiper) => {
        if (interleaveEffect) {
          return swiper.slides?.map((slide) => {
            const innerTranslate = slide.progress * swiper.width * 0.6;
            slide.querySelector(
              '.interleave'
            ).style.transform = `translate3d(${innerTranslate}px,0,0)`;
          });
        }
      }}
    >
      {children?.map((child, index) => (
        <SwiperSlide key={`slide-${index}`}>
          {interleaveEffect ? (
            <InterleaveItem>
              <div className="interleave">{child}</div>
            </InterleaveItem>
          ) : (
            child
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;

const InterleaveItem = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  .interleave {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
