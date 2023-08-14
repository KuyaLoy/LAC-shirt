//import React, { useState } from "react";
import custom from "../../../assets/img/custom.gif";

import "./CustomTshirt.scss";

const CustomTshirt = ({ data }) => {
  //const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    //setIsVisible(!isVisible);
    window.open("https://ladyapeshop.com/", "_blank");
  };
  return (
    <div className="CustomWrapper">
      <h2>{data.attributes.lac_home.title}</h2>
      <p className="Desc">{data.attributes.lac_home.description}</p>

      {/* <video autoPlay mute loop playsInline>
        <source src={custom} type="video/mp4" />
      </video> */}

      <img src={custom} alt="Special LAC Custom" />
      <p className="Price">{data.attributes.lac_home.price}</p>
      <button className="but-shop" onClick={toggleVisibility}>
        {data.attributes.lac_home.button_text}
      </button>

      {/* <div className={isVisible ? "coming-soon show" : "coming-soon"}>
        <div className="text-wrapper">
          <button onClick={toggleVisibility}>X</button>
          <h2>Coming Soon</h2>
        </div>
      </div> */}
    </div>
  );
};

export default CustomTshirt;
