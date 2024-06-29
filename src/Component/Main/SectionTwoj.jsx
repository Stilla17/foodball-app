import React from "react";
import LanguageSwitch from "/src/Component/Navbar/LanguageSwitch.jsx";
import { useTranslation } from "react-i18next";

function SectionTwoj() {
  const { t } = useTranslation();

  return (
    <>
      <div className="text-black flex items-center mt-10">
        <p>Football League</p>
      </div>
      <div className="mt-6 ">
        <div className="flex gap-3">
          <p>Worldcup Qatar 2022</p>
        </div>
        <div className="my-5 flex gap-3">
          <p>Champions League</p>
        </div>
        <div className="my-5 flex gap-3">
          <p>Premier League</p>
        </div>
        <div className="flex gap-3">
          <p>La Liga</p>
        </div>
        <div className="flex gap-3 my-5">
          <p>Ligue 1</p>
        </div>
      </div>
    </>
  );
}
<LanguageSwitch />;

export default SectionTwoj;
