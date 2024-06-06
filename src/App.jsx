import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import { Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import Serkan from "./Pages/Serkan";
import Matches from "./Component/Matches";
import { Tabs } from "@mui/material";
import LabTabs from "./Component/LabTabs";
import Flags from "./Component/Flags";

function App() {
  return (
    <div className="app">
      
      <Layout></Layout>
    </div>
  );
}

export default App;
