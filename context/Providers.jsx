import { SidebarProvider } from './sidebarStore';
import { PageSettingsProvider } from './pageSettings';
const Providers = ({ children }) => (
  <>
    <PageSettingsProvider>
      <SidebarProvider>{children}</SidebarProvider>
    </PageSettingsProvider>
  </>
);

export default Providers;
