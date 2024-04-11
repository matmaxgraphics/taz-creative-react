import CircleShape from "../../assets/images/circle.svg";
import MultiplyShape from "../../assets/images/multiply.svg";
import SquareShape from "../../assets/images/square.svg";

import FadeUpAnimation from "../../Animation/FadeUpAnimation";

function HowItWorks() {
  return (
    <section className="how-we-works--section">
      <div className="how-we-works--wrapper max-width">
        <FadeUpAnimation>
          <header>
            <h2>How we work</h2>
            <p className="large--text">
              We offer services to our clients in three ways:
            </p>
          </header>
        </FadeUpAnimation>
        <div className="flex-responsive">

          <article className="how-we-work--item">
          <FadeUpAnimation>
            <h5>
              <span>
                <img src={SquareShape} alt="" />
              </span>
              Contract/Hires
            </h5>
            <p>
              You can easily engage our service providers or talents for
              specific services (e.g., Logo Design, Web Design) and collaborate
              within a defined timeframe, all within our creative network.
            </p>
            </FadeUpAnimation>
          </article>

          <article className="how-we-work--item">
            <FadeUpAnimation>
            <h5>
              <span>
                <img src={CircleShape} alt="" />
              </span>
              Service Partnership
            </h5>
            <p>
              With our service partnerships, there's no need for additional
              hiring of designers, writers, developers, or managers for your
              business, event, or startup. TAZ offers comprehensive, one-stop
              solutions for your media needs, servicing a maximum of five
              clients.
            </p>
            </FadeUpAnimation>
          </article>

          <article className="how-we-work--item">
            <FadeUpAnimation>
            <h5>
              <span>
                <img src={MultiplyShape} alt="" />
              </span>
              Collaboration for Creative Agencies
            </h5>
            <p>
              TAZ offers discreet support to creative agencies for complex
              client projects under non-disclosure agreements.
            </p>
            </FadeUpAnimation>
          </article>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
