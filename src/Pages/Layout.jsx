import React from "react";
import Line from "../Component/Line/Line";
import Navbar from "../Component/Navbar/Navbar";
import Section from "../Component/Main/Section";

function Layout({ children }) {
  return (
    <>
      <Line />
      <Section />
      {/* <Navbar /> */}
    </>
  );
}

export default Layout;
