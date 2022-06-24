import "./AuthLayout.scss";
import { Outlet } from "react-router-dom";
import Header from "@/components/Layout/Common/Header";
// export const Main = styled.div``;

function AuthLayout() {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
}
export default AuthLayout;
