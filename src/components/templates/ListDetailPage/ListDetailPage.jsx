import React, { useState, useLayoutEffect } from "react";
import HeroSection from "../../organisms/ListDetailSection/HeroSection/HeroSection";
import "./ListDetailPage.scss";
import { useParams } from "react-router-dom";
import SpotlightSection from "../../organisms/ListDetailSection/SpotlightSection/SpotlightSection";
import TshirtSectionWeb from "../../organisms/ListDetailSection/TshirtSectionWeb/TshirtSectionWeb";
import TshirtSectionMobile from "../../organisms/ListDetailSection/TshirtSectionMobile/TshirtSectionMobile";
import UnknownSection from "../../organisms/ListDetailSection/UnknownSection/UnknownSection";
import SizeSection from "../../organisms/ListDetailSection/SizeSection/SizeSection";
import TableChart from "../../molecules/TableChart/TableChart";

import TableChart1 from "../../../assets/img/detailPage/TableChart-1.png";
import TableChart2 from "../../../assets/img/detailPage/TableChart-2.png";
import ClothingSpecs from "../../organisms/ListDetailSection/ClothingSpecs/ClothingSpecs";
import LacSlider from "../../organisms/ListDetailSection/LacSlider/LacSlider";
import Footer from "../../organisms/Footer/Footer";

const ListDetailPage = ({ data }) => {
  const { id } = useParams();
  const item = data.find((item) => item.id === parseInt(id));

  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the threshold as needed
    };

    handleResize(); // Initial check on component mount

    // Add event listener on component mount
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
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
      <div className="CommonContainer">
        {!isMobile ? (
          <TshirtSectionWeb data={item} />
        ) : (
          <TshirtSectionMobile data={item} />
        )}
      </div>

      <div className="CommonContainer">
        <UnknownSection />
      </div>
      <div className="CommonContainer">
        <SizeSection />
      </div>
      <div className="CommonContainer">
        <ClothingSpecs />
      </div>
      <div className="CommonContainer">
        <TableChart TableChart={TableChart1} Title="패브릭 정보" />
      </div>
      <div className="CommonContainer">
        <TableChart TableChart={TableChart2} Title="제품 상세 정보" />
      </div>
      <div className="FullwidthContainer">
        <LacSlider />
      </div>

      <Footer />
    </div>
  );
};

export default ListDetailPage;
