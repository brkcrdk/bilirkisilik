import styled from 'styled-components';
import { Container } from 'components';
import { color } from 'theme';

const CustomSlide = () => (
  <StyledCustomHero>
    <HeroImage src="/images/slider-placeholder/1.png" />
    <Container>
      <HeroContent>
        <p>123123</p>
      </HeroContent>
    </Container>
  </StyledCustomHero>
);
export default CustomSlide;

const StyledCustomHero = styled.div`
  position: relative;
`;

const HeroContent = styled.div`
  position: absolute;
  z-index: 999999;
  bottom: 50vh;
  color: #fff;
`;

const HeroImage = styled.img`
  height: 100vh;
  width: 100vw;
  object-fit: cover;
`;
