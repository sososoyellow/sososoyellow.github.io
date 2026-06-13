import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div key={location.pathname} className="page-fade flex-1 flex flex-col">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
