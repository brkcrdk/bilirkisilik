import styled from 'styled-components';
import { color, theme } from 'theme';

function InnerPages({ data }) {
  const { headerImage, headerTitle, headerDescription } = data;
  return (
    <StyledInnerPages>
      <Header>
        <img src={headerImage.url} />
        <HeaderContent>
          <h1>{headerTitle}</h1>
          <span>{headerDescription}</span>
        </HeaderContent>
      </Header>
    </StyledInnerPages>
  );
}
export default InnerPages;

const StyledInnerPages = styled.div``;

const Header = styled.header`
  position: relative;
  img {
    height: 60vh;
    width: 100%;
    object-fit: cover;
  }
`;

const HeaderContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${color.backgroundColor};
  text-align: center;
  font-family: Work Sans;

  h1 {
    font-size: ${theme.font48};
    font-weight: 400;
  }
  span {
    font-size: ${theme.font16};
    font-weight: 100;
  }
`;
