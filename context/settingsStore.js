import { useState, createContext } from 'react';

const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(false);
  const values = { settings, setSettings };

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext, SettingsProvider };
