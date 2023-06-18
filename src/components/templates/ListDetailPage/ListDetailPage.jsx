import React from "react";
import HeroSection from "../../organisms/ListDetailSection/HeroSection/HeroSection";
import './ListDetailPage.scss'
import { useParams } from 'react-router-dom';

const ListDetailPage = ({data}) => {
  const { id } = useParams();
  
  const item = data.find((item) => item.id === parseInt(id));

  return (
    <div className="ListDetailPageWrapper">
      <div className="CommonContainer">
        <HeroSection data={item}/>
      </div>
    </div>
  );
};

export default ListDetailPage;
