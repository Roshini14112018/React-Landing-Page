import React from "react";
import "./ThrivingSection.css";

const ThrivingSection = () => {
  return (
    <section className="thriving-section">
      <div className="thriving-container">
        {/* Left Portion */}
        <div className="thriving-left">
          <h1>35,000</h1>
          <p>Websites Already Thriving with Us!</p>
        </div>

        {/* Right Portion */}
        <div className="thriving-right">
          <p>
            Experience  <span id="change">the power of speed</span> with our cutting-edge{" "}
            <span>hosting infrastructure</span>.
          </p>
          <button className="story-button">Read our story</button>
        </div>
      </div>
    </section>
  );
};

export default ThrivingSection;
