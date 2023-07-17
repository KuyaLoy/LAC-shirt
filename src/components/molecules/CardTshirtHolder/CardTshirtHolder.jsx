import React, { useState, useEffect } from "react";
import "./CardTshirtHolders.scss";
import { useNavigate } from "react-router-dom";

const CardTshirtHolder = ({ data, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeColor, setActiveColor] = useState("");
  const [activeImage, setActiveImage] = useState("");
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check on initial render

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const preloadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;
        img.onerror = reject;
      });
    };

    const getActiveImagePath = (cardIndex) => {
      if (isMobile) {
        if (
          cardIndex === 2 ||
          cardIndex === 3 ||
          cardIndex === 6 ||
          cardIndex === 7
        ) {
          setActiveColor("white");
          return data.frame_path_2;
        } else {
          setActiveColor("black");
          return data.frame_path;
        }
      } else {
        setActiveColor("black");
        if (cardIndex === 0) {
          return data.frame_path;
        } else {
          return cardIndex % 2 === 0 ? data.frame_path : data.frame_path_2;
        }
      }
    };

    const activeImagePath = getActiveImagePath(index);

    const loadImages = async () => {
      try {
        setIsImageLoaded(false);
        await Promise.all([
          preloadImage(activeImagePath),
          preloadImage(data.frame_path),
          preloadImage(data.frame_path_2),
        ]);
        setIsImageLoaded(true);
      } catch (error) {
        console.error("Failed to load image:", error);
      }
    };

    loadImages();
    setActiveImage(activeImagePath);
  }, [data.frame_path, data.frame_path_2, isMobile, index]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClickColor = (color, imagePath) => {
    setActiveColor(color);
    setActiveImage(color === "white" ? data.frame_path_2 : data.frame_path);
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
        {isImageLoaded ? (
          <img
            src={isHovered && !isMobile ? data.frame_gif : activeImage}
            alt=""
          />
        ) : null}
        <h2>{`${data.category} ${data.name}`}</h2>
      </div>
      <div className="ColorBox">
        {isMobile ? (
          <>
            {index === 2 || index === 3 || index === 6 || index === 7 ? (
              <>
                <span
                  className={`white ${activeColor === "white" ? "active" : ""}`}
                  onClick={() => handleClickColor("white", data.frame_path_2)}
                ></span>
                <span
                  className={`black ${activeColor === "black" ? "active" : ""}`}
                  onClick={() => handleClickColor("black", data.frame_path)}
                ></span>
              </>
            ) : (
              <>
                <span
                  className={`black ${activeColor === "black" ? "active" : ""}`}
                  onClick={() => handleClickColor("black", data.frame_path)}
                ></span>
                <span
                  className={`white ${activeColor === "white" ? "active" : ""}`}
                  onClick={() => handleClickColor("white", data.frame_path_2)}
                ></span>
              </>
            )}
          </>
        ) : (
          <>
            <span
              className={`black ${
                isMobile && activeColor === "black" ? "active" : ""
              }`}
              onClick={() => handleClickColor("black", data.frame_path)}
            ></span>
            <span
              className={`white ${
                isMobile && activeColor === "white" ? "active" : ""
              }`}
              onClick={() => handleClickColor("white", data.frame_path_2)}
            ></span>
          </>
        )}
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
