import styled from 'styled-components';

const Container = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Container;

const StyledContainer = styled.section`
  max-width: 1400px;
  display: grid;
  margin: 0 auto;
  width: 100%;
  @media (max-width: 1450px) {
    width: 95%;
  }
`;
