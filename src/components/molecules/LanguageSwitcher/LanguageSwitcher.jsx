import React, { useState } from "react";
import ButtonImage from "../../atoms/Button/ButtonImage/ButtonImage";
import LangIcon from "../../../assets/img/lang-icon.png";

import "./LanguageSwitcher.scss";
import Button from "../../atoms/Button/Button/Button";

const LanguageSwitcher = ({ changeLanguage }) => {
  const [dpActive, setDpActive] = useState(false);

  const handleLanguageChange = (language) => {
    changeLanguage(language);
  };
  return (
    <div className={`LanguageSwitchWrapper ${dpActive ? "active" : ""}`}>
      <ButtonImage
        src={LangIcon}
        className="LanguageButton"
        onClick={() => setDpActive(!dpActive)}
      />
      <div className="langDp">
        <Button content={"KR"} onclick={() => handleLanguageChange("ko")} />
        <Button content={"EN"} onclick={() => handleLanguageChange("en")} />
        <Button content={"JP"} onclick={() => handleLanguageChange("jp")} />
      </div>
    </div>
  );
};

export default LanguageSwitcher;
