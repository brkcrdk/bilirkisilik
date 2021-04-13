import { SidebarProvider } from './sidebarStore';
import { SettingsProvider } from './settingsStore';
const Providers = ({ children }) => (
  <>
    <SettingsProvider>
      <SidebarProvider>{children}</SidebarProvider>
    </SettingsProvider>
  </>
);

export default Providers;
