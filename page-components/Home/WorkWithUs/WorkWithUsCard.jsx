import styled from 'styled-components';
import { color, device, theme } from 'theme';

const WorkWithUsCard = ({ title, description, icon }) => (
  <StyledWorkWithUsCard>
    <Icon src={icon} alt={title} title={title} />
    <Content>
      {title && <h3>{title}</h3>}
      <p>{description}</p>
    </Content>
  </StyledWorkWithUsCard>
);
export default WorkWithUsCard;

const StyledWorkWithUsCard = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Icon = styled.img`
  width: 54px;
  height: 54px;
  margin-right: 24px;
  object-fit: contain;
  @media ${device.tablet} {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }
  @media ${device.phone} {
    display: none;
    width: 36px;
    height: 36px;
    margin-right: 12px;
  }
`;
const Content = styled.article`
  font-family: Work Sans;
  h3 {
    margin-bottom: 12px;
    font-size: ${theme.font18};
    font-weight: 500;
    color: ${color.primary};
  }
  p {
    color: ${color.text600};
    font-size: ${theme.font14};
  }
`;
