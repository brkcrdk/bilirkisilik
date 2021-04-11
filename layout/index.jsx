import Header from './Header';
import Footer from './Footer';
const Layout = ({ children, navigation }) => (
  <>
    <Header navigation={navigation} />
    {children}
    <Footer />
  </>
);
export default Layout;
