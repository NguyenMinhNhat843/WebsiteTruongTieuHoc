import SchoolFooter from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const ClientLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <SchoolFooter />
    </div>
  );
};

export default ClientLayout;
