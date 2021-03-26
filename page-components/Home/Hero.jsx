import styled from 'styled-components';
import { Slider, Container } from 'components';
import { color } from 'theme';
import CustomSlide from './CustomSlide';

const Hero = () => {
  const settings = {
    loop: true,
  };
  return (
    <StyledHero>
      <Slider settings={settings}>
        <CustomSlide />
        <CustomSlide />
        <CustomSlide />
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

const CustumHero = styled.div`
  border: 1px solid red;
  position: relative;
  p,
  button {
    position: absolute;
    z-index: 999999;
    bottom: 50vh;
    color: #fff;
  }
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
