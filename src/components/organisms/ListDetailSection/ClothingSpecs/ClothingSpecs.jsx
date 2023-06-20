import React from "react";
import "./ClothingSpecs.scss";
import H2 from "../../../atoms/H2/H2";
import Image from "../../../atoms/Image/Image";
import P from "../../../atoms/P/P";
import Cotton1 from "../../../../assets/img/detailPage/cotton-1.png";
import Cotton2 from "../../../../assets/img/detailPage/cotton-2.png";
import Warn1 from "../../../../assets/img/detailPage/warn-1.png";
import Warn2 from "../../../../assets/img/detailPage/warn-2.png";
import Warn3 from "../../../../assets/img/detailPage/warn-3.png";
import Warn4 from "../../../../assets/img/detailPage/warn-4.png";

const ClothingSpecs = () => {
  return (
    <div className="ClothingSpecsWrapper">
      <H2 content="재원" />

      <div className="ClothContent">
        <div className="CCinside">
          <Image src={Cotton1} />
          <P content="TENCEL 70%" />
        </div>
        <div className="CCinside">
          <Image src={Cotton2} />
          <P content="COTTON 30%" />
        </div>
      </div>

      <div class="ClothWarning">
        <Image src={Warn1} />
        <Image src={Warn2} />
        <Image src={Warn3} />
        <Image src={Warn4} />
      </div>
    </div>
  );
};

export default ClothingSpecs;
