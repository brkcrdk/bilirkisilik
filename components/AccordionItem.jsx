import { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { color } from 'theme';
const AccordionItem = ({ children, ...props }) => {
  const [active, setActive] = useState(false);
  const [scrollHeight, setHeight] = useState(0);
  const contentRef = useRef();

  useEffect(() => {
    if (active && contentRef?.current) {
      return setHeight(contentRef.current.scrollHeight);
    } else {
      return setHeight(0);
    }
  }, [active]);

  return (
    <StyledAccordionItem {...props}>
      <AccordionHeader onClick={() => setActive(!active)}>
        Title
        <AnimatedIcon
          className="icon-chevron-down"
          animate={active ? { rotate: -180 } : { rotate: 0 }}
          transition={{ duration: 0.3, type: 'tween' }}
        />
      </AccordionHeader>
      <AccordionContent
        ref={contentRef}
        animate={active ? { height: scrollHeight } : { height: 0 }}
        transition={{ duration: 0.3, type: 'tween' }}
      >
        {children}
      </AccordionContent>
    </StyledAccordionItem>
  );
};
export default AccordionItem;

const StyledAccordionItem = styled(motion.div)``;

const AccordionHeader = styled.span`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: ${color.primary};
  margin: 0;
  padding: 0;
  i {
    font-size: 25px;
  }
`;
const AccordionContent = styled(motion.div)`
  overflow: hidden;
`;

const AnimatedIcon = styled(motion.i)``;
