// import styles from "./index.module.scss";
import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";

// using style component
const Wrapper = styled.div``;
const Main = styled.div``;

function AuthLayout() {
  return (
    <Wrapper className="wrapper">
      {/* <Header /> */}
      <Main>
        <Outlet />
      </Main>
    </Wrapper>
  );
}
export default AuthLayout;
