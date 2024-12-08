import React from "react";
import "./FooterLinks.css";

const FooterLinks = () => {
  return (
    <div className="footer-links-section">
      <div className="footer-column">
        <h3>Product</h3>
        <ul>
          <li>Use Cases</li>
          <li>For Business</li>
          <li>Resources</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Downloads</h3>
        <ul>
          <li>Desktop App</li>
          <li>Chrome Extension</li>
          <li>Safari Extension</li>
          <li>iOS App</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Resources</h3>
        <ul>
          <li>Blog</li>
          <li>Help & Support</li>
          <li>Community</li>
          <li>Status</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Company</h3>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Media Kit</li>
          <li>Sitemap</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;
