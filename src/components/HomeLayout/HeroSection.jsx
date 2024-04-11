import HeroImage from "../../assets/images/hero-img.png";
import FadeUpAnimation from "../../Animation/FadeUpAnimation";

function HeroSection() {
  return (
    <section className="hero-section max-width section-flex">
      <article className="text-description">
        <FadeUpAnimation>
        <h1>
          Your professional service partner for Design, Interaction &
          Development
        </h1>
        </FadeUpAnimation>
        <div className="btn-group">
          <FadeUpAnimation>
          <button className="btn">
            <a href=""><span>Let's Talk</span> <i className="ri-arrow-right-up-line"></i></a>
          </button>
          <button className="btn secondary-btn">
            <a href="">See our work</a>
          </button>
          </FadeUpAnimation>
        </div>
      </article>

      <article className="img-container">
        <FadeUpAnimation>
        <img
          src={HeroImage}
          alt="Hero section image representing diverse skill-sets in Taz creative"
        />
        </FadeUpAnimation>
      </article>
    </section>
  );
}

export default HeroSection;
