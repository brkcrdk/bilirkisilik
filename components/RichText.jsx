import styled from 'styled-components';
import { color, device, theme } from 'theme';

function RichText({ content = 'İçerik girilmedi', ...props }) {
  return (
    <StyledRichText dangerouslySetInnerHTML={{ __html: content }} {...props} />
  );
}
export default RichText;

const StyledRichText = styled.div`
  white-space: pre-wrap;
  font-size: ${theme.font16};
  color: ${color.secondary};

  ol,
  ul {
    padding: 0;
    margin: 0;
    margin-inline-start: 12px;
  }
  h1 {
    font-size: ${theme.font32};
  }
  h2 {
    font-size: ${theme.font24};
  }
  h3 {
    font-size: ${theme.font20};
  }
  h4 {
    font-size: ${theme.font18};
  }
  h5 {
    font-size: ${theme.font16};
  }
  h6 {
    font-size: ${theme.font14};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    line-height: 24px;
    margin-bottom: 24px;
  }
  a {
    text-decoration: underline;
    color: ${color.primary};
    &:hover {
      color: ${color.text400};
    }
  }

  @media ${device.phone} {
    font-size: ${theme.font14};
    img {
      width: 100%;
    }
  }
`;
