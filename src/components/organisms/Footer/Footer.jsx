import React from "react";
import LinkImage from "../../atoms/Link/LinkImage/LinkImage";
import logo from "../../../assets/img/logo.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <LinkImage link="/" src={logo} />
      </footer>
    </>
  );
};

export default Footer;
