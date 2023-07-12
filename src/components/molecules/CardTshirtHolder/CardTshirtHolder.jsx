import React, { useState, useEffect } from "react";
import "./CardTshirtHolders.scss";
import { useNavigate } from "react-router-dom";

const CardTshirtHolder = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeColor, setActiveColor] = useState("black");
  const [activeImage, setActiveImage] = useState(data.frame_path);
  const navigate = useNavigate();

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

  const handleClickColor = (color, imagePath) => {
    setActiveColor(color);
    setActiveImage(imagePath);
  };

  const handleClickFrame = () => {
    navigate(`/details/${data.category}/${data.id}`);
  };

  return (
    <div
      className={`frameWrapper ${isMobile ? "mobile" : ""}`}
      onClick={isMobile ? undefined : handleClickFrame}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`frame ${isHovered && !isMobile ? "hovered" : ""}`}
        onClick={isMobile ? handleClickFrame : undefined}
      >
        <img
          src={isHovered && !isMobile ? data.frame_gif : activeImage}
          alt=""
        />
        <h2>{`${data.category} ${data.name}`}</h2>
      </div>
      <div className="ColorBox">
        <span
          className={`white ${
            isMobile && activeColor === "white" ? "active" : ""
          }`}
          onClick={() =>
            handleClickColor(
              "white",
              data.attributes.shirt_image.color.white_image_path[1]
            )
          }
        ></span>
        <span
          className={`black ${
            isMobile && activeColor === "black" ? "active" : ""
          }`}
          onClick={() => handleClickColor("black", data.frame_path)}
        ></span>
      </div>
      <div className="Price">{data.price}</div>
      <div className="Sizes">
        {data.attributes.sizes.map((size, index) => (
          <p key={index}> {size}</p>
        ))}
      </div>
    </div>
  );
};

export default CardTshirtHolder;
