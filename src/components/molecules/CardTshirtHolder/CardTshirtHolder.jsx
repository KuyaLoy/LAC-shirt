import React, { useState, useEffect } from "react";
import "./CardTshirtHolders.scss";

const CardTshirtHolder = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check on initial render

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
    }
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
