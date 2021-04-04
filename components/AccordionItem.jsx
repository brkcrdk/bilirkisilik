import { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { color, theme } from 'theme';
const AccordionItem = ({ children, title, active, ...props }) => {
  const [open, setOpen] = useState(false);
  const [scrollHeight, setHeight] = useState(0);
  const contentRef = useRef();

  useEffect(() => {
    if (open && contentRef?.current) {
      return setHeight(contentRef.current.scrollHeight);
    } else {
      return setHeight(0);
    }
  }, [open]);

  return (
    <StyledAccordionItem {...props}>
      <AccordionHeader
        onClick={() => setOpen(!open)}
        isOpen={open}
        active={active}
        className="accordion-header"
      >
        {title}
        <AnimatedIcon
          className="icon-chevron-down"
          animate={open ? { rotate: -180 } : { rotate: 0 }}
          transition={{ duration: 0.3, type: 'tween' }}
        />
      </AccordionHeader>
      <AccordionContent
        className="accordion-content"
        ref={contentRef}
        initial={{ height: 0 }}
        animate={open ? { height: scrollHeight } : { height: 0 }}
        transition={{ duration: 0.3, type: 'tween' }}
      >
        {children}
      </AccordionContent>
    </StyledAccordionItem>
  );
};
export default AccordionItem;

const StyledAccordionItem = styled(motion.div)`
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

const AccordionHeader = styled.span`
  display: flex;
  align-items: center;
  font-size: ${theme.font20};
  color: ${color.primary};
  margin: 0;
  padding: 0;
  padding-bottom: ${(p) => p.isOpen && '10px'};
  transition: ${theme.transition};
  i {
    font-size: 25px;
  }
`;
const AccordionContent = styled(motion.div)`
  overflow: hidden;
  background: #e8e8e8;
  padding: 0 10px;
  border-radius: ${theme.borderRadius};
  li {
    font-size: ${theme.font18};
  }
`;

const AnimatedIcon = styled(motion.i)``;
