import styled from 'styled-components';
import { Container, CustomLink } from 'components';
import { motion } from 'framer-motion';
import { animationVariants, itemAnimations } from './heroAnimations';
import { color, theme, device } from 'theme';

const HeroHeader = ({ animationName, activeSlide }) => (
  <Container>
    <StyledHeroHeader
      variants={animationVariants}
      initial="hide"
      animate={animationName}
    >
      <HeroTitle variants={itemAnimations}>{activeSlide.slideTitle}</HeroTitle>
      <HeroDescription variants={itemAnimations}>
        {activeSlide.slideDescription}
      </HeroDescription>
      <AnimatedButton variants={itemAnimations}>
        <HeroButton route={activeSlide.linkRoute}>DEVAMINI OKU</HeroButton>
      </AnimatedButton>
    </StyledHeroHeader>
  </Container>
);
export default HeroHeader;

const StyledHeroHeader = styled(motion.header)`
  max-width: 50%;
  position: absolute;
  bottom: 25vh;
  z-index: 99;
  color: ${color.backgroundColor};
  @media ${device.laptop} {
    max-width: 70%;
    bottom: 30vh;
  }
  @media ${device.phone} {
    max-width: 90%;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: ${theme.font64};
  font-family: Work Sans;
  font-weight: 600;
  @media ${device.phone} {
    font-size: ${theme.font32};
  }
`;

const HeroDescription = styled(motion.h2)`
  font-size: ${theme.font32};
  font-family: Work Sans;
  margin: 24px 0;
  font-weight: 400;
  letter-spacing: -0.15px;

  @media ${device.phone} {
    font-size: ${theme.font18};
  }
`;

const AnimatedButton = styled(motion.div)``;
const HeroButton = styled(CustomLink)`
  font-size: ${theme.font14};
  font-weight: 600;
  transition: ${theme.transition};
  border-radius: ${theme.borderRadius};
  padding: 10px;
  margin-left: -10px;
  &:hover {
    background: ${color.backgroundColor};
    color: ${color.primary};
  }
  @media ${device.laptop} {
    background: ${color.backgroundColor};
    color: ${color.primary};
    margin-left: 0;
    padding: 8px;
  }
`;
