import styled from 'styled-components';
import { SectionContainer, AccordionItem } from 'components';
import { color, theme } from 'theme';

const Faq = () => (
  <CustomSection
    title="S.S.S"
    description="Sıkça sorulan sorularınızın cevapları."
  >
    <CustomAccordion title="Test">
      <Content>Content</Content>
    </CustomAccordion>
    <CustomAccordion title="Test">
      <Content>Content</Content>
    </CustomAccordion>
    <CustomAccordion title="Test">
      <Content>Content</Content>
    </CustomAccordion>
    <CustomAccordion title="Test">
      <Content>Content</Content>
    </CustomAccordion>
    <CustomAccordion title="Test">
      <Content>Content</Content>
    </CustomAccordion>
  </CustomSection>
);
export default Faq;

const CustomSection = styled(SectionContainer)`
  .section-title {
    margin-bottom: 50px;
  }
`;

const CustomAccordion = styled(AccordionItem)`
  margin: 6px 0;
  border: 1px solid ${color.primary100};
  padding: 12px;
  border-radius: ${theme.borderRadius};
  &:first-of-type {
    margin-top: 0;
  }
  .accordion-content {
    padding: 0;
    margin: 0;
    background: transparent;
  }
  .accordion-header {
    font-weight: 700;
    i {
      font-size: 20px;
      margin-left: 8px;
    }
  }
`;

const Content = styled.div`
  padding: 12px;
  cursor: auto;
  color: ${color.secondary};
  background: ${color.primary50};
`;
