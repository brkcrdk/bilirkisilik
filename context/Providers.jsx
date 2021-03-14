import { SidebarProvider } from './sidebarStore';

const Providers = ({ children }) => (
  <>
    <SidebarProvider>{children}</SidebarProvider>
  </>
);

export default Providers;
