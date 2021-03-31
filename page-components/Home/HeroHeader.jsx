import styled from 'styled-components';
import { Container, CustomLink } from 'components';
import { motion } from 'framer-motion';
import { animationVariants, itemAnimations } from './heroAnimations';
import { color, theme } from 'theme';

const HeroHeader = ({ animationName, activeSlide }) => (
  <Container>
    <StyledHeroHeader
      variants={animationVariants}
      initial="hide"
      animate={animationName}
    >
      <HeroTitle variants={itemAnimations}>{activeSlide.title}</HeroTitle>
      <HeroDescription variants={itemAnimations}>
        {activeSlide.description}
      </HeroDescription>
      <AnimatedButton variants={itemAnimations}>
        <HeroButton route={activeSlide.route}>DEVAMINI OKU</HeroButton>
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
