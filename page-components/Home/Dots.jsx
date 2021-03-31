import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container } from 'components';
import { color, theme } from 'theme';

const Dots = ({ slides, active }) => (
  <Container>
    <StyledDots>
      {slides.map((slide, index) => (
        <DotContainer key={slide.title} activeSlide={active === index}>
          {active === index && (
            <span className="dot-number">
              {`${index + 1}`.padStart(2, '0')}
            </span>
          )}
          <Dot
            initial={{ width: '10%' }}
            animate={active === index ? { width: '100%' } : { width: '10%' }}
            transition={{ duration: 7.5 }}
            activeSlide={active === index}
          />
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
  background: ${(p) => (p.activeSlide ? color.primary : color.backgroundColor)};
  margin: 0 20px;
  border-radius: 50px;
  transition: ${theme.transition};
  &:first-of-type {
    margin-left: 0;
  }
  .dot-number {
    background-color: ${color.backgroundColor};
    color: ${color.primary};
    position: absolute;
    top: -32px;
    padding: 4px;
    border-radius: ${theme.borderRadius};
    font-weight: 600;
    transition: ${theme.transition};
    font-size: ${theme.font14};
  }
`;

const Dot = styled(motion.span)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: ${(p) => p.activeSlide && color.backgroundColor};
  border-radius: 50px;
`;
