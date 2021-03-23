import styled from 'styled-components';
import { motion } from 'framer-motion';
import { color, theme } from 'theme';

const LinkItem = ({ children, active, ...props }) => {
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
    <StyledLinkItem active={active} variants={itemAnimations} {...props}>
      {children}
    </StyledLinkItem>
  );
};
export default LinkItem;

const StyledLinkItem = styled(motion.li)`
  cursor: pointer;
  font-size: ${theme.font20};
  color: ${color.primary};
  margin: 10px 0;
  -webkit-tap-highlight-color: transparent;
  font-weight: ${(p) => p.active && 800};
`;
