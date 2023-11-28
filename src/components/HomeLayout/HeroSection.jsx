import HeroImage from "../../assets/images/hero-img.png";

function HeroSection() {
  return (
    <section className="hero-section max-width section-flex">
      <article className="text-description">
        <h1>
          Your professional service partner for Design, Interaction &
          Development
        </h1>
        <div className="btn-group">
          <button className="btn">
            <a href="">Let's Talk</a>
          </button>
          <button className="btn secondary-btn">
            <a href="">See our work</a>
          </button>
        </div>
      </article>

      <article className="img-container">
        <img
          src={HeroImage}
          alt="Hero section image representing diverse skill-sets in Taz creative"
        />
      </article>
    </section>
  );
}

export default HeroSection;
