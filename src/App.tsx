/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Suspense, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import "./i18n/config";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/routes";
import { LANGUAGES } from "./constants";
import "antd/dist/antd.min.css";
import { useAppDispatch } from "@store/hooks";
import { commonActions } from "@store/slices/common";
import styled from "@emotion/styled";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Lazy load - Code splitting
// const Login = React.lazy(() => import("pages/Login"));

const ToastStyled = styled(ToastContainer)``;

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <div>loading...</div>
  </div>
);

function App() {
  const { t, i18n } = useTranslation();
  const languages = LANGUAGES;
  const currentLanguageCode = localStorage.getItem("i18nextLng") || "en";

  const currentLanguage = languages.find(
    (language: any) => language.code === currentLanguageCode
  );
  console.log("currentLanguage :>> ", currentLanguage);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log("innerWidth", window.innerWidth + "px");
    dispatch(commonActions.setViewPort(window.innerWidth));
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <div className="App">
        {/* <Header /> */}
        {/* <div>{t("title", { framework: "React" })}</div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <span className="dropdown-item-text">{t("language")}</span>
            </li>
            {languages.map(({ code, name, country_code }: any) => (
              <li key={country_code}>
                <a
                  href="#"
                  // className={classNames("dropdown-item", {
                  //   disabled: currentLanguageCode === code,
                  // })}
                  onClick={() => {
                    changeLanguage(code);
                  }}
                >
                  <span
                    className={`flag-icon flag-icon-${country_code} mx-2`}
                    style={{
                      opacity: currentLanguageCode === code ? 0.5 : 1,
                    }}
                  ></span>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </header> */}
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <ToastStyled
          position="top-right"
          hideProgressBar
          closeOnClick={false}
          closeButton={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover
        />
      </div>
    </Suspense>
  );
}

export default App;
