import React from "react";
import HeroSection from "../../organisms/ListDetailSection/HeroSection/HeroSection";
import './ListDetailPage.scss'

const ListDetailPage = () => {
  return (
    <div className="ListDetailPageWrapper">
      <div className="CommonContainer">
      <HeroSection />
      </div>
    </div>
  );
};

export default ListDetailPage;
