import React from "react";
import FadeUpAnimation from "../../Animation/FadeUpAnimation";

function ExpertiseSection() {
  return (
    <section className="expertise--section">
      <div className="expertise--section_wrapper max-width">
        <header>
          <FadeUpAnimation>
            <h2>Expertise</h2>
            <p className="large--text">
              Our dedicated team excels in a specialized range of services
              encompassing research, visuals, writing, and programming, all executed by
              certified professionals with passion and expertise.
            </p>
          </FadeUpAnimation>
        </header>

        <div className="expertise--container">
          <article className="expertise">
            <FadeUpAnimation>
              <h3>
                Visuals <small className="badge">10</small>
              </h3>
            </FadeUpAnimation>
            <FadeUpAnimation>
              <div className="stroke"></div>
              <ul className="services--list">
                <li className="service-item">UI Design</li>
                <li className="service-item">UX & Interaction</li>
                <li className="service-item">Logo & Brand Design</li>
                <li className="service-item">Event Branding for Promotion</li>
                <li className="service-item">Motion Graphics</li>
                <li className="service-item">Adverts & Display</li>
                <li className="service-item">Data Presentation</li>
                <li className="service-item">Product Photography</li>
                <li className="service-item">Custom ‘Stock’ Photos</li>
                <li className="service-item">
                  Photo & Video Production for Ads/Campaigns
                </li>
              </ul>
            </FadeUpAnimation>
          </article>

          <article className="expertise">
            <FadeUpAnimation>
              <h3>
                Writing <small className="badge">08</small>
              </h3>
            </FadeUpAnimation>
            <FadeUpAnimation>
              <div className="stroke"></div>
              <ul className="services--list">
                <li className="service-item">Technical Writing</li>
                <li className="service-item">UX Writing</li>
                <li className="service-item">Product Blogs</li>
                <li className="service-item">Brand Profile</li>
                <li className="service-item">Writing for Ads</li>
                <li className="service-item">Blockchain-based Content</li>
                <li className="service-item">Scripts for Ads Direction</li>
                <li className="service-item">Reports & Presentation</li>
              </ul>
            </FadeUpAnimation>
          </article>

          <article className="expertise">
            <FadeUpAnimation>
              <h3>
                Programming and Development <small className="badge">07</small>
              </h3>
            </FadeUpAnimation>
            <FadeUpAnimation>
              <div className="stroke"></div>
              <ul className="services--list">
                <li className="service-item">Brand Websites</li>
                <li className="service-item">Online Portfolios</li>
                <li className="service-item">Web Apps</li>
                <li className="service-item">e-stores & e-commerce websites</li>
                <li className="service-item">Specific-function applications</li>
                <li className="service-item">
                  Automation with Python Scritpts
                </li>
                <li className="service-item">Data Analysis</li>
              </ul>
            </FadeUpAnimation>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ExpertiseSection;
