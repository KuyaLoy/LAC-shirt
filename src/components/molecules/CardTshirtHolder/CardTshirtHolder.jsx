import React, { useState, useRef } from "react";
import Lottie from "lottie-react";
import "./CardTshirtHolders.scss";

const CardTshirtHolder = ({ data }) => {
  const animationRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (animationRef.current) {
      animationRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (animationRef.current) {
      animationRef.current.stop();
    }
  };

  return (
    <a href={`/details/${data.category}/${data.id}`} className="frameWrapper">
      <div
        className="frame"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered ? (
          <Lottie
            animationData={data.frame_lottie}
            loop={false}
            autoplay={false}
            className="testClass"
            lottieRef={animationRef}
          />
        ) : (
          <>
            <img src={data.frame_path} alt="" />
            <h2>{`${data.category} ${data.name}`}</h2>
          </>
        )}
      </div>
    </a>
  );
};

export default CardTshirtHolder;
