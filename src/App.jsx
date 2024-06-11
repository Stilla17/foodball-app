import React from "react";
import Line from "../Component/Line/Line.jsx";
import "../Component/Line/Line.css";
import Banner from "../Component/Banner/Banner";
import Clubs from "../Component/Clubs/Clubs.jsx";
import "../Component/Clubs/Clubs.css";
import Menu from "../Component/Main/Menu.jsx";
import Section from "../Component/Main/Section.jsx";
import SectionTwo from "../Component/Main/SectionTwo.jsx";
import LabTabs from "../Component/Matches/LabTabs.jsx";
import Matches from "../Component/Matches/Matches.jsx";
import Navbar from "../Component/Navbar/Navbar.jsx";
import Shopping from "../Component/Shopping/Shopping.jsx";
import Standings from "../Component/Standigs/Standigs.jsx";
import Target from "../Component/target/target.jsx";
import "../Component/target/target.css";

function Layout({ children }) {
  return (
    <div>
      <Clubs />
      <Menu />
      <Section />
      <SectionTwo />
      <Matches />
      <Shopping />
      <Standings />
      <Target />
      <LabTabs />
      <Line />
      <Banner />
      <Navbar />
    </div>
  );
}

export default Layout;
