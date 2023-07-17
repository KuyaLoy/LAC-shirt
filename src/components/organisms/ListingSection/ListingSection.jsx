import React, { useState } from "react";
// import CardPlaceHolder from "../../molecules/CardPlaceholder/CardPlaceHolder";
import "./ListingSection.scss";
import CardTshirtHolder from "../../molecules/CardTshirtHolder/CardTshirtHolder";
import CustomTshirt from "../../molecules/CustomTshirt/CustomTshirt";

const ListingSection = ({ data }) => {
  const [activeButton, setActiveButton] = useState(1);
  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(false);
  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);

    if (buttonNumber === 1) {
      setShowDiv1(true);
      setShowDiv2(false);
    } else if (buttonNumber === 2) {
      setShowDiv1(false);
      setShowDiv2(true);
    }
  };

  // Access only the first object from the data array
  const firstObject = data.length > 0 ? data[0] : null;

  const emailUs = firstObject.attributes.email_us;

  return (
    <section className="LacListContainer">
      <div
        className={
          activeButton === 2 ? "LacListWrapper active" : "LacListWrapper"
        }
      >
        <div className="GroupButton">
          <button
            className={activeButton === 1 ? "active" : ""}
            onClick={() => handleButtonClick(1)}
          >
            {firstObject.attributes.lac_home.tab[0]}
          </button>
          <button
            className={activeButton === 2 ? "active" : ""}
            onClick={() => handleButtonClick(2)}
          >
            {firstObject.attributes.lac_home.tab[1]}
          </button>
        </div>
        {showDiv1 && (
          <>
            {emailUs}
            {data.map((data, index) => (
              <CardTshirtHolder data={data} key={data.id} index={index} />
            ))}
          </>
        )}
        {showDiv2 && (
          <div>
            <>
              <CustomTshirt data={firstObject} key={firstObject.id} />
            </>
          </div>
        )}
      </div>
    </section>
  );
};

export default ListingSection;
