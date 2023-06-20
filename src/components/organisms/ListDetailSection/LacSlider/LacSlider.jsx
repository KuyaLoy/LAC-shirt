import React from "react";
import SliderLink from "../../../molecules/SliderLac/SliderLink";
import H2 from "../../../atoms/H2/H2";

import SlideData from "../../../../assets/json/meta.json";

import "./LacSlider.scss";

const LacSlider = () => {
  return (
    <div className="LacSliderWrapper">
      <div className="LacHeading">
        <H2 content="더 둘러보기" />
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
