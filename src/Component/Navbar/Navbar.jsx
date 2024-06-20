import React from "react";
import LanguageSwitch from "./LanguageSwitch";
import { useTranslation } from 'react-i18next';
import useDarkMode from '../others/useDarkMode';

const Navbar = () => {

  const { t } = useTranslation();
  const [darkMode, toggleTheme] = useDarkMode();

  return (
    <header className={`w-[100%] ${darkMode ? "text-white bg-[#212227]" : "bg-[#E6E6E6] text-black"} transition duration-300 ease-in-out`}>
      <nav className={`flex sticky py-[16px] px-[24px] mx-auto items-center border-2  justify-between ${darkMode ? "text-white bg-[#1B1C21] border-[#313131]" : "bg-[#E6E6E6] border-[#D3D3D3] text-black"}`}>
        <div className="relative flex items-center">
          <input
            className={`inputs outline-none rounded-[6px] py-[10px] px-[32px] w-[548px] ${darkMode ? "text-white bg-[#2E3034]" : "bg-[#F6F6F4] text-black"} transition duration-300 ease-in-out`}
            type="text"
            placeholder={t('welcome')}
          />
        </div>
        <div className="nav-left">
          <div className="flex gap-[24px] items-center">

            <LanguageSwitch />

            <button className={`w-[114px] h-[33px] text-white rounded-[6px] font-semibold ${darkMode ? "bg-[#F5C451]" : "bg-[#5742A9]"} transition duration-300 ease-in-out`}>
              Go premium
            </button>
            <img
              className="cursor-pointer"
              src="src/assets/icons/shop.svg"
              alt="Shop Icon"
            />
            <img
              className="cursor-pointer"
              src="src/assets/icons/zil.svg"
              alt="Zil Icon"
            />
            <div className="relative cursor-pointer transition-[0.8s]" onClick={toggleTheme}>
              {darkMode ? (
                <img
                  className="w-[30px] h-[44px]"
                  src="src/assets/icons/dark.png"
                  alt="Dark Mode Icon"
                />
              ) : (
                <img
                  className="w-[30px] h-[44px]"
                  src="src/assets/icons/light.png"
                  alt="Light Mode Icon"
                />
              )}
            </div>
            <div className="relative">
              <img
                className="cursor-pointer"
                src="src/assets/icons/avatar-girl.svg"
                alt="Avatar"
              />
            </div>
          </div>
        </div>
      </nav>
    </header >
  );
};

export default Navbar;
