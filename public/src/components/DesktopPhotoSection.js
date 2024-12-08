import React from "react";
import "./DesktopPhotoSection.css";

const DesktopPhotoSection = () => {
  return (
    <section className="desktop-photo-section">
      <div className="desktop-photo-container">
        <img
          src="/desktop.png" 
          alt="Desktop Feature"
          className="desktop-photo"
        />
      </div>
    </section>
  );
};

export default DesktopPhotoSection;
