import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/organisms/Header/Header";
import ListingPage from "./components/templates/ListingPage/ListingPage";
import ListingDetailsPage from "./components/templates/ListingDetailsPage/ListingDetailsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={ListingPage} />
        <Route path="/list-details" Component={ListingDetailsPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
