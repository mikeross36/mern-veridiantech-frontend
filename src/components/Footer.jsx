import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__content">
          <h5 className="footer__title">our information</h5>
          <ul className="footer__list">
            <li>VeridianTech</li>
            <li>1234 europe </li>
            <li>some street 42310</li>
          </ul>
        </div>
        <div className="footer__content">
          <h5 className="footer__title">drone blogs</h5>
          <ul className="footer__links">
            <li>
              <a
                href="https://www.aerotas.com/blog/"
                target="_blank"
                rel="noreferrer"
                className="footer__link"
              >
                the aerotas blog
              </a>
            </li>
            <li>
              <a
                href="https://dronelawsblog.com/"
                target="_blank"
                rel="noreferrer"
                className="footer__link"
              >
                drone laws blog
              </a>
            </li>
            <li>
              <a
                href="https://www.thedronegirl.com/"
                target="_blank"
                rel="noreferrer"
                className="footer__link"
              >
                the drone girl
              </a>
            </li>
          </ul>
        </div>
        {/*  */}
        <div className="footer__content">
          <h5 className="footer__title">trending</h5>
          <ul className="footer__links">
            <li>
              <a
                href="https://www.flyingmag.com/guides/best-commercial-drone-pilot-jobs/"
                target="_blank"
                rel="noreferrer"
                className="footer__link"
              >
                drone pilot jobs
              </a>
            </li>
            <li>
              <a
                href="https://www.droneblog.com/21-ideas-for-interesting-useful-ways-to-use-your-drone/"
                target="_blank"
                rel="noreferrer"
                className="footer__link"
              >
                ideas to use your drone
              </a>
            </li>
            <li>
              <a
                href="https://www.dronerush.com/best-long-range-drones-18975/"
                target="_blank"
                rel="noreferrer"
                className="footer__link"
              >
                logn range drones
              </a>
            </li>
          </ul>
        </div>
        {/*  */}
        <div className="footer__content">
          <h5 className="footer__title">social media</h5>
          <ul className="footer__social">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
              >
                <FaFacebook className="social__icon" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
              >
                <FaTwitter className="social__icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
              >
                <FaInstagram className="social__icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <span className="footer__copy">Copyright 2023 DodaDesign</span>
    </footer>
  );
}
