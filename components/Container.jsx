import styled from 'styled-components';

import { device } from 'theme';

const Container = ({ children }) => {
  return <StyledContainer className="container">{children}</StyledContainer>;
};

export default Container;

const StyledContainer = styled.section`
  display: grid;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  z-index: 9;
  @media ${device.desktop} {
    padding: 20px;
  }
`;
