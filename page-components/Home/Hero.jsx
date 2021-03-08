import styled from 'styled-components';
import { Slider } from 'components';

const Hero = () => {
  const settings = {
    loop: true,
  };
  return (
    <StyledHero>
      <Slider settings={settings}>
        <HeroImage src="/images/slider-placeholder/1.png" />
        <HeroImage src="/images/slider-placeholder/2.jpg" />
        <HeroImage src="/images/slider-placeholder/3.jpg" />
      </Slider>
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
  height: 100%;
  z-index: 2;
  top: 0;
  left: 0;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.4);
`;
