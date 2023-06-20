import React, { useState } from 'react';
import ButtonImage from '../../atoms/Button/ButtonImage/ButtonImage';
import LangIcon from "../../../assets/img/lang-icon.png";

import './LanguageSwitcher.scss';
import Button from '../../atoms/Button/Button/Button';

const LanguageSwitcher = () => {

    const [dpActive,setDpActive] = useState(false);

    const handleClick = () => {
        setDpActive(!dpActive);
      };

  return (
    <div className={`LanguageSwitchWrapper ${dpActive ? "active":""}`}> 
        <ButtonImage src={LangIcon} className='LanguageButton' onClick={handleClick} />
        <div className='langDp'>
            <Button content={"KR"}/>
            <Button content={"EN"}/>
            <Button content={"JP"}/>
        </div>

    </div>
  )
}

export default LanguageSwitcher