import styled from 'styled-components';
import { color, device, theme } from 'theme';

const WorkWithUsCard = ({ title, description }) => (
  <StyledWorkWithUsCard>
    <Icon
      src="https://cdn.onlinewebfonts.com/svg/img_447865.png"
      alt={title}
      title={title}
    />
    <Content>
      <h3>Lorem Ipsum Dolor</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the is simply dummy text of the printing.
      </p>
    </Content>
  </StyledWorkWithUsCard>
);
export default WorkWithUsCard;

const StyledWorkWithUsCard = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Icon = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 24px;
  object-fit: contain;
  @media ${device.tablet} {
    width: 56px;
    height: 56px;
    margin-right: 20px;
  }
  @media ${device.phone} {
    width: 48px;
    height: 48px;
    margin-right: 12px;
  }
`;
const Content = styled.header`
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