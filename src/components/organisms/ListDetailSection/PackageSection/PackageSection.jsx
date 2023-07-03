import React from "react";

import "./PackageSection.scss";
import H2 from "../../../atoms/H2/H2";
import Image from "../../../atoms/Image/Image";

const PackageWrapper = ({ data }) => {
  return (
    <div className="PackageWrapper">
      <H2 content={data.attributes.packages.title} />

      <div className="ImageContainer">
        {data.attributes.packages.images.map((data, index) => (
          <Image src={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PackageWrapper;
