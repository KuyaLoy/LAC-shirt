import React from "react";
import H2 from "../../../atoms/H2/H2";
import LinkImage from "../../../atoms/Link/LinkImage/LinkImage";
import List from "../../../atoms/List/List/List";
import P from "../../../atoms/P/P";
import ButtonTooltipImage from "../../../atoms/Button/ButtonTooltipImage/ButtonTooltipImage";
import SliderThumbnail from "../../../molecules/SliderThumbnail/SliderThumbnail";

import "./HeroSection.scss";

const HeroSection = ({ data }) => {
  let canShow = true;
  const firstOnClick = () => {
    // Handle click event for the fifth anchor separately
    window.$zoho.salesiq.floatwindow?.visible(
      canShow === true ? "show" : "hide"
    );
    canShow = !canShow;
  };
  return (
    <div className="HeroWrapper">
      <div className="ContentHero Content-1">
        <SliderThumbnail
          images={data.attributes.galery_image_path}
          alt={data.category + " " + data.name}
        />
      </div>
      <div className="ContentHero Content-2">
        <H2 content={data.category + " " + data.name} />
        <P
          className="Description"
          content={data.attributes.short_description}
        />
        <List
          className="HeroList"
          listStyle="disc"
          list={data.attributes.hero_list}
        />

        {data.attributes.email_us}

        <P
          className="ListDescription"
          content={data.attributes.list_description}
        />

        <div className="SizeWrapper">
          <P content={data.attributes.sizes_label} />

          <div className="SelectionSize">
            {data.attributes.sizes.map((size, index) => (
              <ButtonTooltipImage
                content={size}
                key={index}
                image={`/assets//images/sizes/${size}.png`}
              />
            ))}
          </div>
        </div>
        <hr />
        <P className="BuyTitle" content={data.attributes.buy_label} />

        <div className="BuyLink">
          {Object.keys(data.attributes.buy_link).map((key, index) => (
            <LinkImage
              key={index}
              link={data.attributes.buy_link[key][0]}
              src={data.attributes.buy_link[key][1]}
              target={index === 0 || index === 4 ? "" : "_blank"}
              onclick={index === 0 || index === 4 ? firstOnClick : null}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
