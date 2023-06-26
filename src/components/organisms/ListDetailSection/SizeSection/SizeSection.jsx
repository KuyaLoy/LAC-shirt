import React from "react";
import Image from "../../../atoms/Image/Image";
import H2 from "../../../atoms/H2/H2";

import Size from "../../../../assets/img/detailPage/size.png";

//import SizeChart from "../../../../assets/img/detailPage/SizeChart.png";

import "./SizeSection.scss";
import SizeChart from "../../../molecules/SizeChart/SizeChart";

const SizeSection = ({ data }) => {
  return (
    <div className="SizeSectionWrapper">
      <H2 content="Size" />
      <Image src={Size} className="SizeGuide" />
      {/* <Image src={SizeChart} className="SizeChart" /> */}
      <SizeChart data={data} />
    </div>
  );
};

export default SizeSection;
