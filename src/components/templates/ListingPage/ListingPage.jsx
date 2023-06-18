import React from "react";
import ListingSection from "../../organisms/ListingSection/ListingSection";
import "./ListingPage.scss";

const ListingPage = ({data}) => {

  if (!data || data.length === 0) {
    // Handle the case where data is not available or empty
    return <div>No data available</div>;
  }

  return (
    <div className="ListingPageWrapper">
      <ListingSection data={data}/>
    </div>
  );  
};

export default ListingPage;
