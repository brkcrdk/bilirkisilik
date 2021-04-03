import styled from 'styled-components';
import { theme, color, device } from 'theme';
const SectionTitle = ({ title = 'Title', description, ...props }) => (
  <StyledSectionTitle {...props}>
    <Header>
      <h1>{title}</h1>
      <h3>{title}</h3>
    </Header>
    {description && <span>{description}</span>}
  </StyledSectionTitle>
);
export default SectionTitle;

const StyledSectionTitle = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    margin-top: 24px;
    text-align: center;
  }
`;

const Header = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: ${theme.font64};
    color: ${color.text200};
    @media ${device.phone} {
      font-size: ${theme.font48};
    }
  }
  h3 {
    font-size: ${theme.font32};
    position: absolute;
    bottom: 0;
    color: ${color.primary};
  }
`;
