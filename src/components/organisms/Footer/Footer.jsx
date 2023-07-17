/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import LinkImage from "../../atoms/Link/LinkImage/LinkImage";
import logo from "../../../assets/img/logo.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <picture>
          <LinkImage link="/" src={logo} />
        </picture>
        <div className="social-media">
          <a
            href="https://twitter.com/ladyapeclub"
            rel="noopener noreferrer"
            target="_blank"
            className="twitter"
          ></a>{" "}
          <a
            href="https://discord.gg/Ban6ZBy5V2"
            rel="noopener noreferrer"
            target="_blank"
            className="discord"
          ></a>{" "}
          <a
            href="https://t.me/ladyapeclub"
            rel="noopener noreferrer"
            target="_blank"
            className="telegram"
          ></a>{" "}
          <a
            href="https://www.facebook.com/ladyapeclub/"
            rel="noopener noreferrer"
            target="_blank"
            className="facebook"
          ></a>{" "}
          <a
            href="https://www.instagram.com/ladyapeclublac/"
            rel="noopener noreferrer"
            target="_blank"
            className="instagram"
          ></a>{" "}
        </div>
        <p className="copyright text-center">
          Contact us:{" "}
          <a href="mailto:support@ladyapeclub.com">support@ladyapeclub.com</a>
          <br />
          &copy;{" "}
          <a
            href="https://tnc-art.com/"
            rel="noopener noreferrer"
            target="_blank"
            style={{ color: "white" }}
          >
            TNC ART
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
