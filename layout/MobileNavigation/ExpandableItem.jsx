import styled from 'styled-components';

import { AccordionItem } from 'components';
const ExpandableItem = ({ children, active, ...props }) => {
  const itemAnimations = {
    hidden: {
      x: 50,
      opacity: 0,
      transition: {
        type: 'tween',
      },
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
      },
    },
  };

  return (
    <CustomAccordion variants={itemAnimations} active={active} {...props}>
      {children}
    </CustomAccordion>
  );
};
export default ExpandableItem;

const CustomAccordion = styled(AccordionItem)`
  margin: 10px 0;
  span {
    font-weight: ${(p) => p.active && 800};
  }
`;
