import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "components/Layout/Header/Header";
import { useTranslation } from "react-i18next";
import "i18n/config";
// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <div>loading...</div>
  </div>
);

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Suspense fallback={<Loader />}>
      <div className="App">
        <Header />
        <div>{t("title", { framework: "React" })}</div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button type="button" onClick={() => changeLanguage("de")}>
            de
          </button>
          <button type="button" onClick={() => changeLanguage("en")}>
            en
          </button>
        </header>
      </div>
    </Suspense>
  );
}

export default App;
