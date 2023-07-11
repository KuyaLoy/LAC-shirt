import React from "react";
import SliderLink from "../../../molecules/SliderLac/SliderLink";
import H2 from "../../../atoms/H2/H2";

import SlideData from "../../../../assets/translations/en.js";

import "./LacSlider.scss";

const LacSlider = ({ data }) => {
  return (
    <div className="LacSliderWrapper">
      <div className="LacHeading">
        <H2 content={data.attributes.look_more.title} />
        <hr />
      </div>
      <SliderLink
        slidesPerView={5}
        spaceBetween={"7.5%"}
        data={SlideData}
        className={"LacSliderCont"}
      />
    </div>
  );
};

export default LacSlider;
