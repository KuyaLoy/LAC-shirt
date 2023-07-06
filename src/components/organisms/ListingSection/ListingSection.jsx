import React from "react";
// import CardPlaceHolder from "../../molecules/CardPlaceholder/CardPlaceHolder";
import "./ListingSection.scss";
import CardTshirtHolder from "../../molecules/CardTshirtHolder/CardTshirtHolder";
const ListingSection = ({ data }) => {
  return (
    <section className="LacListContainer">
      <div className="LacListWrapper">
        {data.map((data) => (
          <CardTshirtHolder data={data} key={data.id} />
        ))}
      </div>
    </section>
  );
};

export default ListingSection;
