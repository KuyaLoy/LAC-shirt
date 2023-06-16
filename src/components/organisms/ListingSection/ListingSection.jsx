import React from "react";
//import CardPlaceHolder from '../../molecules/CardPlaceholder/CardPlaceHolder'

import "./ListingSection.scss";
import CardPlaceHolder from "../../molecules/CardPlaceholder/CardPlaceHolder";

const ListingSection = () => {
  const imgData = [
    {
      id: 1,
      src: "https://strmnft.com/uploads/v2/20220806/62ee38e12d7ef/resize/62ee38e13069a.png",
      category: "Special",
      name: "#0",
    },
    {
      id: 2,
      src: "https://strmnft.com/uploads/v2/20220703/62c0f65b06c04/resize/62c0f65b0bdb7.png",
      category: "Special",
      name: "#100",
    },
    {
      id: 3,
      src: "https://strmnft.com/uploads/v2/20220701/62bf5a30d8709/resize/62bf5a30dc7f6.png",
      category: "Special",
      name: "#200",
    },
    {
      id: 4,
      src: "https://strmnft.com/uploads/v2/20220701/62befa75e6f5b/resize/62befa75eb6b0.png",
      category: "Special",
      name: "#300",
    },
    {
      id: 5,
      src: "https://strmnft.com/uploads/v2/20220702/62c07c151497a/resize/62c07c1518da2.png",
      category: "Special",
      name: "#9994",
    },
    {
      id: 6,
      src: "https://strmnft.com/uploads/v2/20220913/63204202af17f/resize/63204202b3510.png",
      category: "Special",
      name: "#9995",
    },
    {
      id: 7,
      src: "https://strmnft.com/uploads/v2/20220702/62c015d80942d/resize/62c015d80db3b.png",
      category: "Special",
      name: "#9996",
    },
    {
      id: 8,
      src: "https://strmnft.com/uploads/v2/20220702/62c00c887e094/resize/62c00c8881fef.png",
      category: "Special",
      name: "#9997",
    },
    {
      id: 9,
      src: "https://strmnft.com/uploads/v2/20220701/62befdbf88339/resize/62befdbf8f533.png",
      category: "Special",
      name: "#9998",
    },
    {
      id: 10,
      src: "https://strmnft.com/uploads/v2/20220703/62c0f6673886c/resize/62c0f6673ca71.png",
      category: "Special",
      name: "#9999",
    },
  ];

  const renderData = imgData.map((item) => (
    <CardPlaceHolder
      className="LacCard"
      src={item.src}
      alt={item.name}
      label={item.category}
      nftName={item.name}
    />
  ));

  return (
    <section className="LacListContainer">
      <div className="LacListWrapper">{renderData}</div>
    </section>
  );
};

export default ListingSection;
