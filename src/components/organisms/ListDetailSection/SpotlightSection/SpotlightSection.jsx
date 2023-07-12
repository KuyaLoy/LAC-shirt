import React from "react";

import "./SpotlightSection.scss";
import Image from "../../../atoms/Image/Image";
import src from "../../../../assets/img/detailPage/lady-ape-club.png";
import P from "../../../atoms/P/P";
import H2 from "../../../atoms/H2/H2";

const SpotlightSection = ({ data }) => {
  return (
    <div className="SpotlightWrapper">
      <Image src={src} alt="Lady Ape Club" className="LacImageHeader" />
      <div className="SpotlightContent">
        <Image src={data.main_image_path} className="SpotlightImage" />
        <H2 content={data.category + " " + data.name} />
        {data.attributes.long_description.map((data, index) => (
          <>
            <P content={data} key={index} />
            <br />
          </>
        ))}
      </div>
    </div>
  );
};

export default SpotlightSection;
