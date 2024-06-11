import React from "react";
import "./target.css";

const StatSection = ({ title, stats }) => (
  <div className="stat-section">
    <h1>{title}</h1>
    <div className="stat-details">
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <h1>{stat.value}</h1>
          <img src={stat.imgSrc} alt={stat.value} />
        </div>
      ))}
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      <div className="live-match-container">
        <img src="img.png" alt="Team 1" className="team-logo" />
        <div className="right-content">
          <div className="live-match">
            <h1>Live Match</h1>
            <p>62 : 24</p>
          </div>
          <div className="score">
            <img src="Image.png" alt="Team 1" className="team-logo" />
            <h1>2-2</h1>
            <img src="src/Image (1).png" alt="Team 2" className="team-logo" />
          </div>
          <StatSection
            title="Shots on Target"
            stats={[
              { value: 7, imgSrc: "7.png" },
              { value: 3, imgSrc: "3.png" },
            ]}
          />
          <StatSection
            title="Shots"
            stats={[
              { value: 12, imgSrc: "12.png" },
              { value: 7, imgSrc: "72.png" },
            ]}
          />
          <StatSection
            title="Fouls"
            stats={[
              { value: 7, imgSrc: "7.png" },
              { value: 3, imgSrc: "3.png" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
