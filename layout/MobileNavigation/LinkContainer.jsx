import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CustomLink } from 'components';
import LinkItem from './LinkItem';
import ExpandableItem from './ExpandableItem';
import navigationData from 'data/navigation.json';

const LinkContainer = ({
  isSidebarOpen,
  closeSidebar,
  parentRoute,
  asPath,
}) => {
  const containerAnimations = {
    hidden: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    show: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1,
        delayChildren: 0.4,
      },
    },
  };
  return (
    <StyledLinkContainer
      variants={containerAnimations}
      initial="hidden"
      animate={isSidebarOpen ? 'show' : 'hidden'}
    >
      {navigationData.map((link) =>
        link.sublinks ? (
          <ExpandableItem
            key={link.label}
            title={link.label}
            active={parentRoute === link.label.toLowerCase()}
          >
            {link.sublinks.map((sublink) => (
              <LinkItem key={sublink.label} onClick={closeSidebar}>
                <CustomLink route={sublink.route}>{sublink.label}</CustomLink>
              </LinkItem>
            ))}
          </ExpandableItem>
        ) : (
          <LinkItem
            key={link.label}
            onClick={closeSidebar}
            active={asPath === link.route}
          >
            <CustomLink route={link.route}>{link.label}</CustomLink>
          </LinkItem>
        )
      )}
    </StyledLinkContainer>
  );
};
export default LinkContainer;

const StyledLinkContainer = styled(motion.ul)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  span {
    display: flex;
    justify-content: center;
  }
`;
