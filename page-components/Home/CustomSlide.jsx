import styled from 'styled-components';
import { Container, CustomLink } from 'components';
import { color, theme, device } from 'theme';
import { motion, AnimatePresence } from 'framer-motion';

const CustomSlide = ({ active }) => {
  const animationVariants = {
    hide: {
      opacity: 0,
      x: -200,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.7,
        delayChildren: 0.5,
      },
    },
  };
  return (
    <StyledCustomHero>
      <HeroImage src="/images/slider-placeholder/1.png" />
      {/* <Container>
        <AnimatePresence exitBeforeEnter>
          <HeroContent
            initial="hide"
            animate={active ? 'show' : 'hide'}
            exit="hide"
            variants={animationVariants}
          >
            <HeroTitle variants={animationVariants}>
              Lorem Ipsum Dolor Sit Amet!
            </HeroTitle>
            <HeroDescription variants={animationVariants}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </HeroDescription>
            <AnimatedButton variants={animationVariants}>
              <HeroButton route="/">DEVAMINI OKU</HeroButton>
            </AnimatedButton>
          </HeroContent>
        </AnimatePresence>
      </Container> */}
      <HeroShadow />
    </StyledCustomHero>
  );
};
export default CustomSlide;

const StyledCustomHero = styled.div`
  position: relative;
`;

const HeroContent = styled(motion.div)`
  position: absolute;
  z-index: 999999;
  bottom: 25vh;
  color: #fff;
  max-width: 50%;
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
  font-size: 20px;
  font-family: Work Sans;
  margin-top: 36px;
  margin-bottom: 24px;
  font-weight: 400;
  user-select: auto;
  letter-spacing: -0.15px;
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
