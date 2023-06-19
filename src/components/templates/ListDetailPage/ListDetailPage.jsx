import React, { useState, useEffect } from "react";
import HeroSection from "../../organisms/ListDetailSection/HeroSection/HeroSection";
import "./ListDetailPage.scss";
import { useParams } from "react-router-dom";
import SpotlightSection from "../../organisms/ListDetailSection/SpotlightSection/SpotlightSection";
import TshirtSectionWeb from "../../organisms/ListDetailSection/TshirtSectionWeb/TshirtSectionWeb";
import TshirtSectionMobile from "../../organisms/ListDetailSection/TshirtSectionMobile/TshirtSectionMobile";

const ListDetailPage = ({ data }) => {
  const { id } = useParams();
  const item = data.find((item) => item.id === parseInt(id));

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="ListDetailPageWrapper">
      <div className="CommonContainer HeroContainer">
        <HeroSection data={item} />
      </div>
      <div className="FullwidthContainer">
        <SpotlightSection data={item} />
      </div>
      <div className="CommonContainer HeroContainer">
        {!isMobile ? (
          <TshirtSectionWeb data={item} />
        ) : (
          <TshirtSectionMobile data={item} />
        )}
      </div>
    </div>
  );
};

export default ListDetailPage;
