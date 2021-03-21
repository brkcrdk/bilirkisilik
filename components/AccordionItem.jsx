import { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { color } from 'theme';
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
      <AccordionHeader onClick={() => setOpen(!open)} active={active}>
        {title}
        <AnimatedIcon
          className="icon-chevron-down"
          animate={open ? { rotate: -180 } : { rotate: 0 }}
          transition={{ duration: 0.3, type: 'tween' }}
        />
      </AccordionHeader>
      <AccordionContent
        ref={contentRef}
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
  font-size: 20px;
  color: ${color.primary};
  margin: 0;
  padding: 0;
  font-weight: ${(p) => p.active && 800};
  i {
    font-size: 25px;
  }
`;
const AccordionContent = styled(motion.div)`
  overflow: hidden;
  background: #e8e8e8;
  padding: 0 10px;
  border-radius: 6px;
  li {
    font-size: 18px;
  }
`;

const AnimatedIcon = styled(motion.i)``;
