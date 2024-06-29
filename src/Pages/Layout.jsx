import React from "react";
import Line from "../Component/Line/Line";
import Navbar from "../Component/Navbar/Navbar";
import Section from "../Component/Main/Section";
// import Counter from "../Counter/Counter";
// import Swithcer from "../Switcher/Swithcer";
// import Field from "../Fields/Field";
import Banner from "../Component/Banner/Banner";
import Matches from "../Component/Matches";
import LabTabs from "../Component/Matches/LabTabs";
import Standings from "../Component/Standings/BasicSelect";
import Shopping from "../Component/Shopping/Shopping";
import Clubs from "../Component/Clubs/Clubs";

function Layout() {
  return (
    <>
      <div className="flex">
        <Line />
        <Section />
      </div>
      <div className="flex flex-col w-[100%]">
        <Navbar />
        <Banner />
        <Matches />
        <LabTabs />
        <Standings />
        <div className="w-full h-[2px] bg-slate-200 my-12"></div>

        <Clubs />
        <div className="w-full h-[2px] bg-slate-200 my-12"></div>
        <Shopping />
        <div className="w-full h-[2px] bg-slate-200 my-12"></div>

        <div className="">
          {/* <Counter />
          <Swithcer />
          <Field /> */}
        </div>
      </div>
    </>
  );
}

export default Layout;
