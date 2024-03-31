import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import Banner from "../Pages/Home/Banner";

const Layout = () => {
  return (
    <>
      <div>
        <div>
          <Header />
          <Banner />
        </div>
        <div className="w-11/12 mx-auto min-h-screen">
          <Outlet />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
