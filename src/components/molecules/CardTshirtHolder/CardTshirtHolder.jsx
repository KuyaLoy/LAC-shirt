import React, { useState } from "react";
import "./CardTshirtHolders.scss";

const CardTshirtHolder = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <a
      href={`/details/${data.category}/${data.id}`}
      className="frameWrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="frame">
        {isHovered ? (
          <img src={data.frame_gif} alt="" />
        ) : (
          <>
            <img src={data.frame_path} alt="" />
          </>
        )}

        <h2>{`${data.category} ${data.name}`}</h2>
      </div>
      <div className="ColorBox">
        <span></span>
        <span></span>
      </div>
      <div className="Price">{data.price}</div>
      <div className="Sizes">
        {data.attributes.sizes.map((size, index) => (
          <p key={index}> {size}</p>
        ))}
      </div>
    </a>
  );
};

export default CardTshirtHolder;
