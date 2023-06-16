import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/organisms/Header/Header";
import ListingPage from "./components/templates/ListingPage/ListingPage";
import ListDetailPage from "./components/templates/ListDetailPage/ListDetailPage";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Header />
      <Routes>
        <Route path="/a" Component={ListingPage} />
        <Route path="/" Component={ListDetailPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
