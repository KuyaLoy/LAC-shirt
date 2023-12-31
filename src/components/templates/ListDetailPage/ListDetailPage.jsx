import React, { useState, useLayoutEffect, useEffect } from "react";
import HeroSection from "../../organisms/ListDetailSection/HeroSection/HeroSection";
import "./ListDetailPage.scss";
import { useParams } from "react-router-dom";
import SpotlightSection from "../../organisms/ListDetailSection/SpotlightSection/SpotlightSection";
import TshirtSectionWeb from "../../organisms/ListDetailSection/TshirtSectionWeb/TshirtSectionWeb";
import TshirtSectionMobile from "../../organisms/ListDetailSection/TshirtSectionMobile/TshirtSectionMobile";
import PackageSection from "../../organisms/ListDetailSection/PackageSection/PackageSection";
import SizeSection from "../../organisms/ListDetailSection/SizeSection/SizeSection";
import TableChart1 from "../../molecules/TableChart1/TableChart1";

//import TableChart1 from "../../../assets/img/detailPage/TableChart-1.png";
//import TableChart2 from "../../../assets/img/detailPage/TableChart-2.png";
import ClothingSpecs from "../../organisms/ListDetailSection/ClothingSpecs/ClothingSpecs";
import LacSlider from "../../organisms/ListDetailSection/LacSlider/LacSlider";
import Footer from "../../organisms/Footer/Footer";
import ExtraButton from "../../molecules/ExtraButton/ExtraButton";
import TableChart2 from "../../molecules/TableChart2/TableChart2";

const ListDetailPage = ({ data }) => {
  // console.log({ data });

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

  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
        <PackageSection data={item} />
      </div>
      <div className="CommonContainer">
        <SizeSection data={item} />
      </div>
      <div className="CommonContainer">
        <ClothingSpecs data={item} />
      </div>
      <div className="CommonContainer">
        <TableChart1 TableChart={item} />
      </div>
      <div className="CommonContainer">
        <TableChart2 TableChart={item} />
      </div>
      <div className="FullwidthContainer">
        <LacSlider data={item} />
      </div>
      {showTopBtn && <ExtraButton data={item} onClick={goToTop} />}

      <Footer />
    </div>
  );
};

export default ListDetailPage;
