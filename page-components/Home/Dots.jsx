import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container } from 'components';
import { color } from 'theme';

const Dots = ({ slides, active }) => (
  <Container>
    <StyledDots>
      {slides.map((slide, index) => (
        <DotContainer key={slide.title} activeSlide={active === index}>
          <Dot activeSlide={active === index} />
        </DotContainer>
      ))}
    </StyledDots>
  </Container>
);
export default Dots;

const StyledDots = styled.div`
  position: absolute;
  bottom: 16vh;
  z-index: 99;
  display: flex;
`;

const DotContainer = styled.div`
  width: ${(p) => (p.activeSlide ? '200px' : '10px')};
  height: 10px;
  position: relative;
  background: ${(p) => (p.activeSlide ? color.text600 : color.backgroundColor)};
  margin: 0 20px;
  border-radius: 50px;

  &:first-of-type {
    margin-left: 0;
  }
`;

const Dot = styled(motion.span)`
  position: absolute;
  top: 0;
  left: 0;
  width: 20%;
  height: 100%;
  background: red;
  border-radius: 50px;
`;
