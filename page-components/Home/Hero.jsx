import styled from 'styled-components';
import { Slider } from 'components';
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
    </StyledHero>
  );
};
export default Hero;

const StyledHero = styled.section`
  overflow: hidden;
`;
