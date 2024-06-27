import React from "react";
import Line from "../Component/Line/Line";
import Navbar from "../Component/Navbar/Navbar";
import Section from "../Component/Main/Section";
import { Switch } from "antd";
import Banner from "../Component/Banner/Banner"
import Matches from "../Component/Matches"
import LabTabs from "../Component/Matches/LabTabs";
import Standings from "../Component/Standings/BasicSelect"
import Shopping from "../Component/Shopping/Shopping"

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
        {/* <Shopping /> */}
      </div>
    </>
  );
}

export default Layout;
