import React from "react";
import ButtonImage from "../../atoms/Button/ButtonImage/ButtonImage";
import "./ExtraButton.scss";
import LinkImage from "../../atoms/Link/LinkImage/LinkImage";
import arrow from "../../../assets/img/arrowup.png";

const ExtraButton = ({ data, onClick }) => {
  return (
    <div className="extraButtonWrapper">
      <ButtonImage src={arrow} onClick={onClick} />

      {Object.keys(data.attributes.buy_link).map((key, index) => {
        if (index === 0 || index === 4) {
          return null; // Hide the first and fifth elements
        }

        return (
          <LinkImage
            key={index}
            link={data.attributes.buy_link[key][0]}
            src={data.attributes.buy_link[key][1]}
            target="_blank"
          />
        );
      })}
    </div>
  );
};

export default ExtraButton;
