import React from "react";
import Banner from '../Component/Banner/Banner'
import Navbar from '../Component/Navbar/Navbar'
import BasicSelect from '../Component/Standings/BasicSelect'
import Matches from "../Component/Matches/Matches";


function Layout({ children }) {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <Matches />
      <BasicSelect />
    </div>
  );
}

export default Layout;