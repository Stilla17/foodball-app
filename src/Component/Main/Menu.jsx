import React from "react";
import chelsea from "../../assets/images/chelsea.png";
import star from "../../assets/images/star.png";
import City from "../../assets/images/City.png";
import Bayern from "../../assets/images/Bayern.png";
import LanguageSwitch from "/src/Component/Navbar/LanguageSwitch.jsx";
import { useTranslation } from 'react-i18next';


function Menu() {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <h2 className="text-gray-300">{t('league')}</h2>
        <div className="flex justify-between w-48 my-6">
          <div className="cursor-pointer flex gap-3">
            <img src={chelsea} alt="chelsealogo" />
            <p>Chelsea FC</p>
          </div>
          <div className=" flex">
            <img src={star} alt="" />
            <p></p>
          </div>
        </div>
        <div className="flex justify-between w-48 my-6">
          <div className="cursor-pointer flex gap-3">
            <img src={City} alt="chelsealogo" />
            <p>Manchester City</p>
          </div>
          <div className=" flex">
            <img src={star} alt="" />
          </div>
        </div>
        <div className="flex justify-between w-48 my-6">
          <div className="cursor-pointer flex gap-3">
            <img src={Bayern} alt="" />
            <p>Bayern Munchen</p>
          </div>
          <div className=" flex">
            <img src={star} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
