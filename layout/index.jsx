import Header from './Header';
import Footer from './Footer';
const Layout = ({ children, navigation, footerNav }) => (
  <>
    <Header navigation={navigation} />
    {children}
    <Footer navigation={footerNav} />
  </>
);
export default Layout;
