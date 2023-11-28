import React from "react";
import Nav from "../components/Nav";
import HeroSection from "../components/HomeLayout/HeroSection";
import AboutSection from "../components/HomeLayout/AboutSection";
import ExpertiseSection from "../components/HomeLayout/ExpertiseSection";
import ProjectSection from "../components/HomeLayout/ProjectSection";
import HowItWorks from "../components/HomeLayout/HowItWorks";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <>
      <Nav />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <ProjectSection />
      <HowItWorks />
      <Footer />
    </>
  );
}

export default LandingPage;
