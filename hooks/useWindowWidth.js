import { useEffect, useState } from 'react';
const useWindowWidth = () => {
  const [windowWidth, setWidth] = useState(0);

  useEffect(() => {
    const handleWindowWidth = () => {
      setWidth(window.outerWidth);
    };
    window.addEventListener('resize', handleWindowWidth);
    return () => {
      window.removeEventListener('resize', handleWindowWidth);
    };
  }, []);

  return { windowWidth };
};
export default useWindowWidth;
