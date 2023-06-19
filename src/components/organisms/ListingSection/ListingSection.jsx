import React from "react";
import CardPlaceHolder from "../../molecules/CardPlaceholder/CardPlaceHolder";
import "./ListingSection.scss";

const ListingSection = ({data}) => {

  return (

    <section className="LacListContainer">
      <div className="LacListWrapper">
        {data.map((data) => (
          <CardPlaceHolder
            link={`/details/${data.id}`}
            className="LacCard"
            src={data.main_image_path}
            alt={data.name}
            label={data.category}
            nftName={data.name}
            key={data.id}
          />
        ))}</div>

    </section>
  );
};

export default ListingSection; 
