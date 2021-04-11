import { useState, createContext } from 'react';

const PageSettings = createContext();

const PageSettingsProvider = ({ children }) => {
  const [navigation, setNavigation] = useState({});

  const values = { setNavigation, navigation };
  return (
    <PageSettings.Provider value={values}>{children}</PageSettings.Provider>
  );
};

export { PageSettings, PageSettingsProvider };
