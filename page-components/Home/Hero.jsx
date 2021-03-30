import { useState } from 'react';
import styled from 'styled-components';
import { useSwiper } from 'hooks';
import { Slider, CustomLink, Container } from 'components';
import { motion } from 'framer-motion';
import { color, theme } from 'theme';
import { animationVariants, itemAnimations } from './heroAnimations';
const Hero = () => {
  const [animationName, setAnimationName] = useState('show');
  const settings = {
    loop: true,
  };
  const [slider, setSlider] = useState();
  const { active, slideChange } = useSwiper(slider);

  const handleAnimation = () => {
    setAnimationName('hide');
    return setTimeout(() => setAnimationName('show'), 1600);
  };

  slideChange(handleAnimation);
  return (
    <StyledHero>
      <Slider settings={settings} setSlider={setSlider}>
        {[0, 1, 2].map((slide) => (
          <HeroImage key={slide} src="/images/slider-placeholder/1.png" />
        ))}
      </Slider>
      <Container>
        <HeroHeader
          variants={animationVariants}
          initial="hide"
          animate={animationName}
        >
          <HeroTitle variants={itemAnimations}>Hero Title</HeroTitle>
          <HeroDescription variants={itemAnimations}>
            Hero Description Hero Description Hero Description Hero
            DescriptionHero DescriptionHero DescriptionHero DescriptionHero
            Description
          </HeroDescription>
          <AnimatedButton variants={itemAnimations} onClick={handleAnimation}>
            <HeroButton route="/">DEVAMINI OKU</HeroButton>
          </AnimatedButton>
        </HeroHeader>
      </Container>
      <HeroShadow />
    </StyledHero>
  );
};
export default Hero;

const StyledHero = styled.section`
  overflow: hidden;
`;

const HeroHeader = styled(motion.header)`
  max-width: 50%;
  position: absolute;
  bottom: 25vh;
  z-index: 99;
  color: ${color.backgroundColor};
`;

const HeroImage = styled.img`
  height: 100vh;
  width: 100vw;
  object-fit: cover;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 64px;
  font-family: Work Sans;
  font-weight: 600;
`;
const HeroDescription = styled(motion.h4)`
  font-size: 32px;
  font-family: Work Sans;
  margin: 24px 0;
  font-weight: 400;
  letter-spacing: -0.15px;
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

const AnimatedButton = styled(motion.div)``;

const HeroButton = styled(CustomLink)`
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  border-radius: ${theme.borderRadius};
  padding: 10px;
  margin-left: -10px;
  &:hover {
    background: ${color.backgroundColor};
    color: ${color.primary};
  }
`;
