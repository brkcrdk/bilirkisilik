import { useContext, useEffect } from 'react';
import { SidebarContext } from 'context';

const useSidebar = (ref) => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    if (isSidebarOpen) {
      return (document.body.style.overflow = 'hidden');
    }
    return (document.body.style = 'initial');
  }, [isSidebarOpen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        ref?.current &&
        !ref?.current.contains(event.target) &&
        isSidebarOpen
      ) {
        return setIsSidebarOpen((prev) => !prev);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, setIsSidebarOpen, isSidebarOpen]);

  return { isSidebarOpen, toggleSidebar };
};

export default useSidebar;
