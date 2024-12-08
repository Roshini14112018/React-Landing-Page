import React from "react";
// import FooterLinks from "./FooterLinks";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <div className="footer-left">
          <a href="#privacy">Privacy Policy</a>
          <span></span>
          <a href="#terms">Terms of Service</a>
          <span></span>
        </div>
        <div className="footer-right">
        <p>&copy; 2024, Designed by K&A</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
