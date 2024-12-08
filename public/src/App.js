import React from "react";
import Header from "./components/Header";
import CreatingSection from "./components/CreatingSection"
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import ThrivingSection from "./components/ThrivingSection";
import DesktopPhotoSection from "./components/DesktopPhotoSection";
import HeroSection from "./components/HeroSection";
import AllLogo from "./components/AllLogo";
import FooterLinks from "./components/FooterLinks";
import Footer from "./components/Footer";

//import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <CreatingSection />
      <AboutSection />
      <FeaturesSection />
      <ThrivingSection/>
      <DesktopPhotoSection/>
      <HeroSection/>
      <AllLogo/>
      <FooterLinks/>
      <Footer />
    </div>
  );
}

export default App;
