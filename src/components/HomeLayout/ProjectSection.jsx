import React from "react";
import FadeUpAnimation from "../../Animation/FadeUpAnimation";

import DemoImage from "../../assets/images/demo-img.png";
import AnyworkImage from "../../assets/images/anyworkx-img.webp";
import Anyworkx from "../../assets/images/anyworkx-project_cover.png";
import ecitibizCover from "../../assets/images/ecitibiz-website-cover.png";

function ProjectSection() {
  return (
    <section className="project--section">
      <div className="project--section_wrapper max-width">
        <FadeUpAnimation>
          <header>
            <h2>Projects</h2>
            <p className="large--text">
              Over the years, we have worked on numerous projects for various
              brands, events and personalities. Below is an enumeration of some
              of our projects and clients
            </p>
          </header>
        </FadeUpAnimation>

        <div className="projects--container">
          <article className="project--item">
            <FadeUpAnimation>
              <img src={AnyworkImage} alt="" />
              <h4>Anyworkx Africa</h4>
              <p>Brand Identity and web app development for AnyWorkX App </p>
              <div className="project-tag">
                <ul>
                  <li>Branding</li>
                  <span className="circle"></span>
                  <li>UX Writing</li>
                  <span className="circle"></span>
                  <li>Web design</li>
                  <span className="circle"></span>
                  <li>Development</li>
                </ul>
              </div>
            </FadeUpAnimation>
          </article>

          <article className="project--item">
            <FadeUpAnimation>
              <img src={ecitibizCover} alt="" />
              <h4>eCitiBiz Website Redesign</h4>
              <p>UI design and Website Redesign </p>
              <div className="project-tag">
                <ul>
                  <li>Branding</li>
                  <span className="circle"></span>
                  <li>UX Writing</li>
                  <span className="circle"></span>
                  <li>Web design</li>
                  <span className="circle"></span>
                  <li>Development</li>
                </ul>
              </div>
            </FadeUpAnimation>
          </article>

          <article className="project--item">
            <FadeUpAnimation>
              <img src={DemoImage} alt="" />
              <h4>Anyworkx Africa</h4>
              <p>Brand Identity and website development for anyworkx app </p>
              <div className="project-tag">
                <ul>
                  <li>Branding</li>
                  <span className="circle"></span>
                  <li>UX Writing</li>
                  <span className="circle"></span>
                  <li>Web design</li>
                  <span className="circle"></span>
                  <li>Development</li>
                </ul>
              </div>
            </FadeUpAnimation>
          </article>

          <article className="project--item">
            <FadeUpAnimation>
              <img src={DemoImage} alt="" />
              <h4>Anyworkx Africa</h4>
              <p>Brand Identity and website development for anyworkx app </p>
              <div className="project-tag">
                <ul>
                  <li>Branding</li>
                  <span className="circle"></span>
                  <li>UX Writing</li>
                  <span className="circle"></span>
                  <li>Web design</li>
                  <span className="circle"></span>
                  <li>Development</li>
                </ul>
              </div>
            </FadeUpAnimation>
          </article>
        </div>

        <div className="cta-btn">
          <FadeUpAnimation>
            <button className="btn">
              <a href="">
                <span>See more projects</span>{" "}
                <i className="ri-arrow-right-line"></i>
              </a>
            </button>
          </FadeUpAnimation>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
