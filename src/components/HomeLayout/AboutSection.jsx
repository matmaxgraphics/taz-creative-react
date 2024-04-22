import React from "react";
import FadeUpAnimation from "../../Animation/FadeUpAnimation";

function AboutSection() {
  return (
    <section className="intro--section">
      <div className="intro--section_wrapper max-width">
        <FadeUpAnimation>
          <header>
            <small className="heading-tag">/MEET TAZ</small>
            <h2>Where creativity meets innovation</h2>
          </header>
        </FadeUpAnimation>

        <article className="intro--wrapper">
          <FadeUpAnimation>
            <p className="large--text">
            We drive global innovation by collaborating with People, Start-ups, Scale-ups and government MDAs worldwide to research, design, and deploy advanced e-services, SaaS, IaaS, and PaaS platforms.
            </p>
          </FadeUpAnimation>

          <FadeUpAnimation>
            <p className="large--text">
              What drives us is the desire to introduce creativity and
              innovation into teams and their products, consequently amplifying
              their intended impacts, and accelerating attainment of their
              goals.
            </p>
          </FadeUpAnimation>
        </article>
      </div>
    </section>
  );
}

export default AboutSection;
