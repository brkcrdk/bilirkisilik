import styled from 'styled-components';
import { device } from 'theme';
const Container = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Container;

const StyledContainer = styled.section`
  max-width: 1279px;
  display: grid;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  @media ${device.desktop} {
    padding: 0 30px;
    margin: 0;
  }
`;
