import CustomNavbar from './CustomNavbar';

const Layout = ({ children }) => (
  <>
    <CustomNavbar />
    {children}
  </>
);

export default Layout;