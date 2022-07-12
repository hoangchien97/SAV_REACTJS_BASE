import Header from "@/components/Layout/Common/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Common/Footer";
import { Layout } from "antd";
import styles from "./index.module.scss";
// export const Main = styled.div``;

const { Content } = Layout;

function MainLayout() {
  return (
    <Layout>
      <Header />
      {/* <div className="main"> */}
      <Content className={styles.main}>
        <Outlet />
      </Content>
      {/* </div> */}
      <Footer />
    </Layout>
  );
}
export default MainLayout;
