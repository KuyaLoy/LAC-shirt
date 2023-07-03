import React from "react";
import H2 from "../../../atoms/H2/H2";
import Image from "../../../atoms/Image/Image";

import LacArt from "../../../../assets/img/detailPage/lac-art.png";
import "./TshirtSectionWeb.scss";

const TshirtSectionWeb = ({ data }) => {
  return (
    <div className="TshirtSectionWebWrapper">
      <H2 content="Color" className="title" />
      <div className="ImageColorContainer">
        <div className="ICContent">
          <div className="CircleContent">
            <Image
              src={data.attributes.shirt_image.color.white_image_path[0]}
            />
          </div>
          <div className="ColorText">
            <Image src={LacArt} />
            <H2 content="WHITE" />
          </div>
          <div className="SquareContent right">
            <Image
              src={data.attributes.shirt_image.color.white_image_path[1]}
            />
            <Image
              src={data.attributes.shirt_image.color.white_image_path[2]}
            />
            {/* <Image
              src={data.attributes.shirt_image.color.white_image_path[3]}
            /> */}
          </div>
        </div>
        <div className="ICContent">
          <div className="CircleContent">
            <Image
              src={data.attributes.shirt_image.color.black_image_path[0]}
            />
          </div>
          <div className="ColorText">
            <Image src={LacArt} />
            <H2 content="BLACK" />
          </div>
          <div className="SquareContent">
            <Image
              src={data.attributes.shirt_image.color.black_image_path[1]}
            />
            <Image
              src={data.attributes.shirt_image.color.black_image_path[2]}
            />
            {/* <Image
              src={data.attributes.shirt_image.color.black_image_path[3]}
            /> */}
          </div>
        </div>
      </div>
      <H2 content="Daily" className="title" />

      <div className="ImageColorContainer">
        <div className="ICContent">
          <div className="SquareContent right">
            <Image
              src={data.attributes.shirt_image.color.white_image_path[3]}
            />
            <Image
              src={data.attributes.shirt_image.color.white_image_path[4]}
            />
            <Image
              src={data.attributes.shirt_image.color.white_image_path[5]}
            />
            <Image
              src={data.attributes.shirt_image.color.white_image_path[6]}
            />
          </div>
        </div>
        <div className="ICContent">
          <div className="SquareContent">
            <Image
              src={data.attributes.shirt_image.color.black_image_path[3]}
            />
            <Image
              src={data.attributes.shirt_image.color.black_image_path[4]}
            />
            <Image
              src={data.attributes.shirt_image.color.black_image_path[5]}
            />
            <Image
              src={data.attributes.shirt_image.color.black_image_path[6]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TshirtSectionWeb;
