import React from "react";
import { Link } from "react-router-dom";
import Matches from "../Component/Matches";
import LabTabs from "../Component/LabTabs";
import BasicSelect from "../Component/BasicSelect";
import Navbar from "../Component/Navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Matches />
      <LabTabs />
      <BasicSelect />
    </div>
  );
}

export default Layout;
