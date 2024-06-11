
import React from "react";
import Layout from "./Pages/Layout";

function App() {
  return (
    <div className="w">
      <div>
        <Clubs />
        <Menu />
        <Section />
        <SectionTwo />
        <Matches />
        <Shopping />
        <Standings />
        <Target />
      </div>
      <Layout>
        <LabTabs />
        <Banner />
        <Line />
        <Navbar />
      </Layout>
    </div>
  );
}

export default App;
