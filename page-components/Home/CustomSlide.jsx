import styled from 'styled-components';
import { Container, CustomLink } from 'components';
import { color } from 'theme';

const CustomSlide = () => (
  <StyledCustomHero>
    <HeroImage src="/images/slider-placeholder/1.png" />
    <Container>
      <HeroContent>
        <HeroTitle>Lorem Ipsum</HeroTitle>
        <HeroDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </HeroDescription>
        <HeroButton route="/">Daha Fazla</HeroButton>
      </HeroContent>
    </Container>
    <HeroShadow />
  </StyledCustomHero>
);
export default CustomSlide;

const StyledCustomHero = styled.div`
  position: relative;
`;

const HeroContent = styled.div`
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

const HeroTitle = styled.h1`
  font-size: 48px;
  font-family: Work Sans;
`;
const HeroDescription = styled.h4`
  font-size: 24px;
  font-family: Work Sans;
  margin: 24px 0;
`;

const HeroButton = styled(CustomLink)`
  font-family: Work Sans;
  font-weight: 600;

  &:before {
    transition: all 0.3s ease-in-out;
    content: '';
    width: 0;
    height: 2px;
    position: absolute;
    background: red;
    bottom: -5px;
    left: -5px;
  }
  &:hover {
    &:before {
      width: 90px;
    }
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
