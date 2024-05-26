import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import { Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import Serkan from "./Pages/Serkan";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

    </>
  );
}

export default App;
