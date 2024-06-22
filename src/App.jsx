import React from "react";
import Layout from "./Pages/Layout";
import Counter from "./Counter/Counter";

function App() {

  return (
    <div className="flex">
      <Layout />
      {/* <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ru')}>Russian</button>
      <h2>{t('welcome')}</h2> */}
    </div>
  );
}

export default App;
