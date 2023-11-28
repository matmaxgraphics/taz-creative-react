import React from "react";
import DemoImage from '../../assets/images/demo-img.png';

function ProjectSection() {
  return (
    <section className="project--section">
      <div className="project--section_wrapper max-width">
        <header>
          <h2>Projects</h2>
          <p className="large--text">
            Over the years, we have worked on numerous projects for various
            brands, events and personalities. Below is an enumeration of some of
            our projects and clients
          </p>
        </header>

        <div className="projects--container">
          <article className="project--item">
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
          </article>

          <article className="project--item">
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
          </article>

          <article className="project--item">
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
          </article>

          <article className="project--item">
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
          </article>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
