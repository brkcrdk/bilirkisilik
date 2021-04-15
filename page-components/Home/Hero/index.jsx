import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSwiper } from 'hooks';
import { Slider } from 'components';
import heroData from 'data/hero.json';
import HeroHeader from './HeroHeader';
import Dots from './Dots';

const Hero = ({ data }) => {
  const [slider, setSlider] = useState();
  const { active, slideChange, slideTo } = useSwiper(slider);
  const [animationName, setAnimationName] = useState('show');
  const [activeSlide, setActiveSlide] = useState(0);

  const handleAnimation = () => {
    setAnimationName('hide');
    return setTimeout(() => {
      setAnimationName('show');
    }, 1200);
  };

  useEffect(() => {
    const activeTimer = setTimeout(() => setActiveSlide(active), 1200);
    return () => {
      clearTimeout(activeTimer);
    };
  }, [active]);

  slideChange(handleAnimation);

  const settings = {
    loop: true,
    autoplay: {
      delay: 7000,
    },
  };
  return (
    <StyledHero>
      <Slider settings={settings} setSlider={setSlider}>
        {data.map((slide) => (
          <HeroImage key={slide} src={slide.slideBackground.url} />
        ))}
      </Slider>
      <HeroHeader
        activeSlide={data[activeSlide]}
        animationName={animationName}
      />
      <Dots slides={data} active={active} slideTo={slideTo} />
      <HeroShadow />
    </StyledHero>
  );
};
export default Hero;

const StyledHero = styled.section`
  overflow: hidden;
`;

const HeroImage = styled.img`
  height: 100vh;
  width: 100vw;
  object-fit: cover;
`;

const HeroShadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 2;
  top: 0;
  left: 0;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.4);
`;
