/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import "i18n/config";
import { LANGUAGES } from "constants/index";
import { Header } from "components/Layout/Header";

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

  return (
    <Suspense fallback={<Loader />}>
      <div className="App">
        <Header />
        <div>{t("title", { framework: "React" })}</div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <button type="button" onClick={() => changeLanguage("de")}>
            de
          </button>
          <button type="button" onClick={() => changeLanguage("en")}>
            en
          </button> */}

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
        </header>
      </div>
    </Suspense>
  );
}

export default App;
