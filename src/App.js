import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/organisms/Header/Header";
import ListingPage from "./components/templates/ListingPage/ListingPage";
import ListDetailPage from "./components/templates/ListDetailPage/ListDetailPage";

import meta from "./assets/json/meta.json";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<ListingPage data={meta} />} />
        <Route
          path="/details/special/:id"
          element={<ListDetailPage data={meta} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
