import React from "react";
import H1 from "../../atoms/H1/H1";
import Image from "../../atoms/Image/Image";

import { useLocation } from "react-router-dom";

import "./Header.scss";

import logo from "../../../assets/img/lac-special-logo.png";
//import ButtonImage from "../../atoms/Button/ButtonImage/ButtonImage";
import LinkImage from "../../atoms/Link/LinkImage/LinkImage";
//import LangIcon from "../../../assets/img/lang-icon.png";
import LanguageSwitcher from "../../molecules/LanguageSwitcher/LanguageSwitcher";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div className="headerWrapper">
      <div>
        {isHomePage ? (
          <Image className="logo" src={logo} alt="lac special logo" />
        ) : (
          <LinkImage
            src={logo}
            className="logo"
            link="/"
            alt="lac special logo"
          />
        )}
      </div>
      <div>
        <H1 className="MainTitle" content="LAC Special" />
      </div>
      <div>
        {/* <ButtonImage className="LanguageButton" src={LangIcon} /> */}
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Header;
