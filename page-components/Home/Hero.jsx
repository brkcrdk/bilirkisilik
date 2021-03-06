import { Slider } from 'components';
import styled from 'styled-components';

const Hero = () => (
  <StyledHero>
    <Slider>
      <HeroImage src="/images/slider-placeholder/1.png" />
      <HeroImage src="/images/slider-placeholder/2.jpg" />
      <HeroImage src="/images/slider-placeholder/3.jpg" />
    </Slider>
  </StyledHero>
);
export default Hero;

const StyledHero = styled.section`
  overflow: hidden;
`;

const HeroImage = styled.img`
  height: 100vh;
  width: 100vw;
  object-fit: cover;
`;
