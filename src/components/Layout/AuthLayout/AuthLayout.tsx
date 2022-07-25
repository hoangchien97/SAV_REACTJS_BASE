// import styles from "./index.module.scss";
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { useAppSelector } from '@store/hooks';
import { selectIsLoggedIn } from '@store/slices/auth';

// using style component
const Wrapper = styled.div``;
const Main = styled.div``;

function AuthLayout() {
  const location = useLocation();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return (
    <Wrapper className="wrapper">
      <Main>
        <Outlet />
      </Main>
    </Wrapper>
  );
}
export default AuthLayout;
