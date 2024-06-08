import React from "react";
import "./Line.css";
import Common from "./Line";
import one from "../../assets/one.svg";
import two from "../../assets/two.svg";
import three from "../../assets/three.svg";
import four from "../../assets/four.svg";
import five from "../../assets/five.svg";
import six from "../../assets/six.svg";
import seven from "../../assets/seven.svg";
import eight from "../../assets/eight.svg";
import nine from "../../assets/nine.svg";
import ten from "../../assets/ten.svg";
import eleven from "../../assets/eleven.svg";
import { Link } from "react-router-dom";

function Line() {
  return (
    <>
      <div className="line-container">
        <div>
          <Link to="/">
            <img src={one} alt="img" className="mb-10"/>
          </Link>

          <Link to="/">
            <img src={two} alt="img" className="mb-10"/>
          </Link>
          <Link to="/">
            <img src={three} alt="img" className="mb-10"/>
          </Link>
          <Link to="/">
            <img src={four} alt="img" className="mb-10"/>
          </Link>

          <Link to="/">
            <img src={five} alt="img" className="mb-10"/>
          </Link>
          <Link to="/">
            <img src={six} alt="img" className="mb-10"/>
          </Link>
          <Link to="/">
            <img src={seven} alt="img" className="mb-10"/>
          </Link>
          <Link to="/">
            <img src={eight} alt="img" className="mb-10"/>
          </Link>
          <Link to="/">
            <img src={nine} alt="img" className="mb-10"/>
          </Link>
        </div>

        <div>
          <Link to="/">
            <img src={ten} alt="img" className="mb-10"/>
          </Link>
          <Link to="/">
            <img src={eleven} alt="img" className="mb-10"/>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Line;
