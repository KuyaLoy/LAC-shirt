import React, { useState } from "react";
import H2 from "../../../atoms/H2/H2";
import Image from "../../../atoms/Image/Image";
import Button from "../../../atoms/Button/Button/Button";
import P from "../../../atoms/P/P";

import "./TshirtSectionMobile.scss";

const TshirtSectionMobile = ({ data }) => {
  const [selectedColor, setSelectedColor] = useState("white");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="TshirtSectionWebWrapper">
      <H2 content="Color" className="title" />
      <Image
        className="circleImg"
        src={
          selectedColor === "white"
            ? data.attributes.shirt_image.color.white_image_path[0]
            : "https:via.placeholder.com/300"
        }
        alt={data.name}
      />

      <div className="ButtonCont">
        <Button
          className={selectedColor === "white" ? "selected" : ""}
          onclick={() => handleColorChange("white")}
        />
        <Button
          className={selectedColor === "black" ? "selected" : ""}
          onclick={() => handleColorChange("black")}
        />
      </div>
      <Image
        src={
          selectedColor === "white"
            ? data.attributes.shirt_image.color.white_image_path[1]
            : "https:via.placeholder.com/300"
        }
        alt={data.name}
      />
      <Image
        src={
          selectedColor === "white"
            ? data.attributes.shirt_image.color.white_image_path[2]
            : "https:via.placeholder.com/300"
        }
        alt={data.name}
      />
      <Image
        src={
          selectedColor === "white"
            ? data.attributes.shirt_image.color.white_image_path[3]
            : "https:via.placeholder.com/300"
        }
        alt={data.name}
      />
      <P content="Daily" />

      <Image
        src={
          selectedColor === "white"
            ? data.attributes.shirt_image.color.white_image_path[4]
            : "https:via.placeholder.com/300"
        }
        alt={data.name}
      />
      <Image
        src={
          selectedColor === "white"
            ? data.attributes.shirt_image.color.white_image_path[5]
            : "https:via.placeholder.com/300"
        }
        alt={data.name}
      />
      <Image
        src={
          selectedColor === "white"
            ? data.attributes.shirt_image.color.white_image_path[6]
            : "https:via.placeholder.com/300"
        }
        alt={data.name}
      />
    </div>
  );
};

export default TshirtSectionMobile;
