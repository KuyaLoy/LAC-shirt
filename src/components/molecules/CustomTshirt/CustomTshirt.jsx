import React from "react";
import custom from "../../../assets/img/custom.mp4";

import "./CustomTshirt.scss";

const CustomTshirt = ({ data }) => {
  return (
    <div className="CustomWrapper">
      <h2>{data.attributes.lac_home.title}</h2>
      <p className="Desc">{data.attributes.lac_home.description}</p>

      <video autoPlay mute loop playsInline>
        <source src={custom} type="video/mp4" />
      </video>
      <p className="Price">{data.attributes.lac_home.price}</p>
      <a href="/">{data.attributes.lac_home.button_text}</a>
    </div>
  );
};

export default CustomTshirt;
