import Header from "@/components/Layout/Common/Header";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Footer from "../Common/Footer";
import { Layout } from "antd";
import styles from "./index.module.scss";
import { useAppSelector } from "@store/hooks";
import { selectIsLoggedIn } from "@store/slices/auth";
// export const Main = styled.div``;

const { Content } = Layout;

function MainLayout() {
  const location = useLocation();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <Layout>
      <Header />
      <Content className={styles.main}>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
}
export default MainLayout;
