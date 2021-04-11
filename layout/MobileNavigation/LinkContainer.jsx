import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CustomLink } from 'components';
import LinkItem from './LinkItem';
import ExpandableItem from './ExpandableItem';

const LinkContainer = ({
  isSidebarOpen,
  closeSidebar,
  parentRoute,
  asPath,
  navigation,
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
      {navigation.map((link) =>
        link.subLinks ? (
          <ExpandableItem
            key={link.linkLabel}
            title={link.linkLabel}
            active={parentRoute === link.linkLabel.toLowerCase()}
          >
            {link.subLinks.map((sublink) => (
              <LinkItem key={sublink.linkLabel} onClick={closeSidebar}>
                <CustomLink
                  route={sublink.linkRoute}
                  alt={link.linkLabel}
                  title={link.linkLabel}
                >
                  {sublink.linkLabel}
                </CustomLink>
              </LinkItem>
            ))}
          </ExpandableItem>
        ) : (
          <LinkItem
            key={link.linkLabel}
            onClick={closeSidebar}
            active={asPath === link.linkRoute}
          >
            <CustomLink
              route={link.linkRoute}
              alt={link.linkLabel}
              title={link.linkLabel}
            >
              {link.linkLabel}
            </CustomLink>
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
