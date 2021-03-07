import styled from 'styled-components';

const Container = ({ children, className }) => {
  return (
    <StyledContainer className={`container ${className}`}>
      {children}
    </StyledContainer>
  );
};

export default Container;

const StyledContainer = styled.section`
  display: grid;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
`;
