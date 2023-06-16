import React from "react";
import H1 from "../../atoms/H1/H1";
import Image from "../../atoms/Image/Image";

import "./Header.scss";

import logo from "../../../assets/img/lac-special-logo.png";
import ButtonImage from "../../atoms/Button/ButtonImage/ButtonImage";

const Header = () => {
  const buttonImg =
    "https://shop.ladyapeclub.com/static/media/language.953b40c690b46e7a61e0fe2396d5edf2.svg";
  return (
    <div className="headerWrapper">
      <div>
        <Image className="logo" src={logo} alt="lac special logo" />
      </div>
      <div>
        <H1 className="MainTitle" content="LAC Special" />
      </div>
      <div>
        <ButtonImage className="LanguageButton" src={buttonImg} />
      </div>
    </div>
  );
};

export default Header;
