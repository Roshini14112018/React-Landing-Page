import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="k&a logo" className="logo-image" />
        
      </div>
      <nav className="nav-links">
        <a href="#work">WORK</a>
        <a href="#expertise">EXPERTISE</a>
        <a href="#about">ABOUT</a>
        <a href="#insight">INSIGHT</a>
      </nav>
      <div className="cta">
        <button className="start-project-btn">
          <span>📧 </span> START A PROJECT
        </button>
      </div>
    </header>
  );
};

export default Header;
