import { useState, useEffect } from 'react';
const useHeaderScroll = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [currentY, setCurrentY] = useState(0);

  useEffect(() => {
    const scrollPosition = () => {
      if (window.pageYOffset > 70) return setScrolled(true);
      return setScrolled(false);
    };
    window.addEventListener('scroll', scrollPosition);
    return () => {
      window.removeEventListener('scroll', scrollPosition);
    };
  }, [scrolled]);

  useEffect(() => {
    const handleScroll = () => {
      const { pageYOffset } = window;
      if (pageYOffset - currentY < 0 || currentY < 250) {
        setHideHeader(false);
      } else {
        setHideHeader(true);
      }
      return setCurrentY(pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentY]);

  return { hideHeader, scrolled, currentY };
};

export default useHeaderScroll;
