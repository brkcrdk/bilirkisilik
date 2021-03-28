import { useState } from 'react';
import styled from 'styled-components';
import { useSwiper } from 'hooks';
import { Slider } from 'components';
import CustomSlide from './CustomSlide';
import { motion } from 'framer-motion';
const Hero = () => {
  const [animationName, setAnimationName] = useState('show');
  const settings = {
    loop: true,
  };
  const [slider, setSlider] = useState();
  const { active } = useSwiper(slider);
  console.log(active);

  const handleAnimation = () => {
    setAnimationName('hide');
    return setTimeout(() => setAnimationName('show'), 1000);
  };

  const animationVariants = {
    hide: {
      transition: {
        staggerChildren: 0.4,
        staggerDirection: -1,
      },
    },
    show: {
      transition: {
        staggerChildren: 0.4,
        staggerDirection: 1,
      },
    },
  };

  const itemAnimations = {
    hide: {
      opacity: 0,
      x: -200,
      transition: {
        duration: 0.7,
      },
    },
    show: {
      opacity: 0.7,
      x: 0,
      transition: {
        duration: 0.7,
      },
    },
  };
  return (
    <StyledHero>
      <Slider settings={settings} setSlider={setSlider}>
        {[0, 1, 2].map((slide) => (
          <CustomSlide active={active === slide} key={slide} />
        ))}
      </Slider>
      <HeroHeader
        variants={animationVariants}
        initial="hide"
        animate={animationName}
      >
        <HeroTitle variants={itemAnimations}>Hero Title</HeroTitle>
        <HeroDescription variants={itemAnimations}>
          Hero Description
        </HeroDescription>
        <button onClick={handleAnimation}>Test</button>
      </HeroHeader>
    </StyledHero>
  );
};
export default Hero;

const StyledHero = styled.section`
  overflow: hidden;
`;

const HeroHeader = styled(motion.header)`
  position: absolute;
  bottom: 500px;
  z-index: 99;
  left: 100px;
`;
const HeroTitle = styled(motion.h1)``;
const HeroDescription = styled(motion.h4)``;
