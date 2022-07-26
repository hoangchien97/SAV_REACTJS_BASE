import Header from '@/components/Layout/Common/Header';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Footer from '../Common/Footer';
import { Layout } from 'antd';
import styles from './index.module.scss';
import { useAppSelector } from '@store/hooks';
import { selectIsLoggedIn } from '@store/slices/auth';
import { colors } from '@data/styles';
import styled from '@emotion/styled';
// export const Main = styled.div``;

const { Content } = Layout;

const LayoutMain = styled(Content)`
  margin-top: 4rem;
  padding: 1rem;
  display: table;

  // background-color: #151719;
  // background-color: #c5c2c2;
  // height: calc(100vh - 56px);
  // overflow: auto;
  // &::-webkit-scrollbar {
  //   margin-bottom: 8px;
  //   width: 4px;
  // }
  // &::-webkit-scrollbar-track {
  //   transform: matrix(-1, 0, 0, 1, 0, 0);
  // }
  // &::-webkit-scrollbar-thumb {
  //   border-radius: 12px;
  //   transform: matrix(-1, 0, 0, 1, 0, 0);
  //   background-color: ${colors.red};
  // }
  // transition: max-height 0.6s;
`;

const Container = styled.div`
  max-width: 1024px;
  margin: 4rem auto 0;
`;

function MainLayout() {
  const location = useLocation();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <Layout style={{ height: '100vh' }}>
      <Header />
      {/* <Content style={{ marginTop: '64px', padding: '1rem' }}> */}
      <LayoutMain>
        <Container>
          <Outlet />
        </Container>
      </LayoutMain>
      {/* </Content> */}
      <Footer />
    </Layout>
  );
}
export default MainLayout;
