import React from "react";
import "./Component/Line/Line.css";
import "./Component/Clubs/Clubs.css";
import "./Component/Target/target.css";
import Layout from "./Pages/Layout";


function App() {
  return (
    <div className="flex ">
      <Layout />
      {/* <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ru')}>Russian</button>
      <h2>{t('welcome')}</h2> */}
    </div>
  );
}

export default App;
