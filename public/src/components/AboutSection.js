import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h1>We are</h1>
        <p className="highlighted-text">
          Creative Designers, Insightful Strategists, and Exceptional Engineers
        </p>
        <p className="about-description">
          The organization is focused on foregrounding expertise in its services, staying updated on global trends, refining domain knowledge, and adapting to evolving content creation arenas to effectively serve client brands.
        </p>
      </div>
      <div className="about-image">
        <img
          src="/about-image.png" 
          alt="About Visual"
        />
      </div>
    </section>
  );
};

export default AboutSection;
