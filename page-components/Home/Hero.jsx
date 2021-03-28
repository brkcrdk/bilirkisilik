import { useState } from 'react';
import styled from 'styled-components';
import { useSwiper } from 'hooks';
import { Slider } from 'components';
import CustomSlide from './CustomSlide';
const Hero = () => {
  const settings = {
    loop: true,
  };
  const [slider, setSlider] = useState();
  const { active } = useSwiper(slider);
  console.log(active);
  return (
    <StyledHero>
      <Slider settings={settings} setSlider={setSlider}>
        {[0, 1, 2].map((slide) => (
          <CustomSlide active={active === slide} key={slide} />
        ))}
      </Slider>
    </StyledHero>
  );
};
export default Hero;

const StyledHero = styled.section`
  overflow: hidden;
`;
