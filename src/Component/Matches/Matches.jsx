import axios from "axios";
import React from "react";
import LabTabs from '../Matches/LabTabs'

function Matches() {

  return (
    <section className="max-w-[1456px] w-[100%] mx-auto">
      <div className="match">
        <p className="text-[20px] font-semibold w-[210px] text-center mt-[32px]">
          ⚽ Football Match
        </p>

        <LabTabs />
      </div>
    </section>
  );
}

export default Matches;
