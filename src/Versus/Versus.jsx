import React from "react";
import Portugal from "../Versus/Portugal.png";
import Belgium from "../Versus/Belgium.png";
import Bg1 from "../Versus/bg1.png";
import Bg2 from "../Versus/bg2.png";
import Back1 from "../Versus/back1.png";
import Back2 from "../Versus/back2.png";
import Back3 from "../Versus/back3.png";
import Hazard from "../Versus/hazard.png";
import The from "../Versus/the.png";
import "./Versus.css";

function Versus() {
  return (
    <div className="versus-container">
      <div className="stadium">
        <h3>Lusail Stadium</h3>
      </div>
      <div className="teams">
        <div className="team">
          <div
            className="team-bg"
            style={{ backgroundImage: `url(${Bg1})` }}
          ></div>
          <img src={Portugal} alt="Portugal" className="team-logo" />
          <h1>Portugal</h1>
          <div className="goals">
            <p>C. Ronaldo 15'</p>
            <p>C. Ronaldo 68'</p>
          </div>
        </div>
        <div className="score">
          <h1>
            2 <span className="ft">FT</span> 3
          </h1>
        </div>
        <div className="team">
          <div
            className="team-bg"
            style={{ backgroundImage: `url(${Bg2})` }}
          ></div>
          <img src={Belgium} alt="Belgium" className="team-logo" />
          <h1>Belgium</h1>
          <div className="goals">
            <p>R. Lukaku 42'</p>
            <p>E. Hazard 58'</p>
            <p>E. Hazard 90' +3</p>
          </div>
        </div>
      </div>
      <div className="extra-images">
        <img src={Hazard} alt="Hazard" className="extra-image" />
        <img src={The} alt="The" className="extra-image" />
        <img src={Back1} alt="Back1" className="extra-image" />
        <img src={Back2} alt="Back2" className="extra-image" />
        <img src={Back3} alt="Back3" className="extra-image" />
      </div>
    </div>
  );
}

export default Versus;
