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
        <div className="image">
          <Link to="/">
            <img src={one} alt="img" className="images1 mb-10" />
          </Link>

          <Link to="/">
            <img src={two} alt="img" className="images2 mb-10" />
          </Link>
          <Link to="/">
            <img src={three} alt="img" className="images3 mb-10" />
          </Link>
          <Link to="/">
            <img src={four} alt="img" className="images4 mb-10" />
          </Link>

          <Link to="/">
            <img src={five} alt="img" className="images5 mb-10" />
          </Link>
          <Link to="/">
            <img src={six} alt="img" className="images6 mb-10" />
          </Link>
          <Link to="/">
            <img src={seven} alt="img" className="images7 mb-10" />
          </Link>
          <Link to="/">
            <img src={eight} alt="img" className="images8 mb-10" />
          </Link>
          <Link to="/">
            <img src={nine} alt="img" className="images9 mb-10" />
          </Link>
          <Link to="/">
            <img src={ten} alt="img" className="images10 mb-10" />
          </Link>
          <Link to="/">
            <img src={eleven} alt="img" className="images11 mb-10" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Line;
