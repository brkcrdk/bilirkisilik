import styled from 'styled-components';
import { SectionContainer, AccordionItem } from 'components';
import { color, theme, device } from 'theme';

function Faq({ data }) {
  console.log(data);
  const title = data[0]?.sectionTitle;
  const description = data[0]?.sectionDescription;
  return (
    <CustomSection title={title} description={description}>
      {data?.map((faq, index) => (
        <CustomAccordion title={faq.title} key={`${faq.title}-${index}`}>
          <Content dangerouslySetInnerHTML={{ __html: faq.content.html }} />
        </CustomAccordion>
      ))}
    </CustomSection>
  );
}
export default Faq;

const CustomSection = styled(SectionContainer)`
  .section-title {
    margin-bottom: 50px;
  }
`;

const CustomAccordion = styled(AccordionItem)`
  margin: 6px auto;
  width: 100%;
  max-width: 1000px;
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
    font-size: ${theme.font24};
    @media ${device.phone} {
      font-size: ${theme.font18};
    }
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
  font-size: ${theme.font18};
  @media ${device.phone} {
    font-size: ${theme.font14};
  }
  ol {
    padding: 0;
    margin: 0;
    margin-inline-start: 12px;
  }
`;
