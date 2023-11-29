import TazPattern from "../assets/images/taz-pattern.png";
function Footer() {
  return (
    <footer>
      <main className="footer-content max-width">
        <h2>
          Let's <span>work</span>
        </h2>
        <div className="footer-flex">
          <article className="contact--info">
            <p>
              You're here because you're seeking our expertise for a project or
              considering integrating our team into your brand/business.
            </p>

            <div className="external--links">
              <ul>
                <li>
                  <a href="mailto:hello@tazcreative.io">hello@tazcreative.io</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="tel:+2347014869726">Book a Call</a>
                </li>
              </ul>
            </div>
          </article>
          <article className="social--links">
            <ul>
              <li>
                <a href="">Instagram</a>
              </li>
              <li>
                <a href="">Twitter</a>
              </li>
              <li>
                <a href="">Telegram</a>
              </li>
            </ul>
            <address>Tallin, Estonia</address>
          </article>
          <article className="pattern--container">
            <img src={TazPattern} alt="" />
          </article>
        </div>
      </main>
    </footer>
  );
}

export default Footer;
