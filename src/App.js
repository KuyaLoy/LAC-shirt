import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/organisms/Header/Header";
import ListingPage from "./components/templates/ListingPage/ListingPage";
import ListDetailPage from "./components/templates/ListDetailPage/ListDetailPage";
//import meta from "./assets/json/meta.json";

import enTranslations from "./assets/translations/en.json";
import koTranslations from "./assets/translations/ko.json";
import jpTranslations from "./assets/translations/jp.json";

import "./App.css";

const App = () => {
  //const history = useNavigate();
  const defaultLanguage = "ko";
  const storedLanguage = localStorage.getItem("selectedLanguage");
  const [currentLanguage, setCurrentLanguage] = useState(
    storedLanguage || defaultLanguage
  );
  const [translations, setTranslations] = useState(koTranslations);
  useEffect(() => {
    localStorage.setItem("selectedLanguage", currentLanguage);

    let selectedTranslations;
    switch (currentLanguage) {
      case "en":
        selectedTranslations = enTranslations;
        break;
      case "ko":
        selectedTranslations = koTranslations;
        break;
      case "jp":
        selectedTranslations = jpTranslations;
        break;
      default:
        selectedTranslations = koTranslations;
    }
    setTranslations(selectedTranslations);
  }, [currentLanguage]);

  const changeLanguage = (language) => {
    setCurrentLanguage(language);
    //history.push("/");
  };
  return (
    <BrowserRouter basename="/">
      <Header changeLanguage={changeLanguage} />
      <Routes>
        <Route path="/" element={<ListingPage data={translations} />} />
        <Route
          path="/details/special/:id"
          element={<ListDetailPage data={translations} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
