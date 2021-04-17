import styled from 'styled-components';
import { color, device, theme } from 'theme';
import { RichText, Container } from 'components';

function InnerPages({ data }) {
  const { headerImage, headerTitle, headerDescription, content } = data;
  return (
    <StyledInnerPages>
      <Header>
        <img src={headerImage.url} />
        <HeaderContent>
          <h1>{headerTitle}</h1>
          <span>{headerDescription}</span>
        </HeaderContent>
      </Header>
      <Content>
        <RichText content={content.html} />
      </Content>
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

  @media ${device.laptop} {
    width: 80%;
  }

  h1 {
    font-size: ${theme.font48};
    font-weight: 400;
    margin-bottom: 24px;
  }
  span {
    font-size: ${theme.font16};
    font-weight: 200;
  }
`;

const Content = styled(Container)`
  margin-top: 50px;
  padding: 0 10%;
  @media ${device.phone} {
    padding: 0;
  }
`;
