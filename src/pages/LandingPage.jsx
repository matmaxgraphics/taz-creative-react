import React from "react";
import Nav from "../components/Nav";
import HeroSection from "../components/HomeLayout/HeroSection";
import AboutSection from "../components/HomeLayout/AboutSection";
import ExpertiseSection from "../components/HomeLayout/ExpertiseSection";
import ProjectSection from "../components/HomeLayout/ProjectSection";

function LandingPage() {
  return (
    <>
      <Nav />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <ProjectSection />
    </>
  );
}

export default LandingPage;
