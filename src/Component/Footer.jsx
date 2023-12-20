import React from "react";
import "../ComponentUI/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="sb__footer section__padding">
          <div className="sb__footer-links">
            <div className="sb__footer-links_div">
              <h4>For Business</h4>
              <a href={"/"}>
                <p>Employer</p>
              </a>
              <a href={"/"}>
                <p>Healthplan</p>
              </a>
              <a href={"/"}>
                <p>Indivisual</p>
              </a>
            </div>
            <div className="sb__footer-links_div">
              <h4>Resources</h4>
              <a href={"/"}>
                <p>Employer</p>
              </a>
              <a href={"/"}>
                <p>Employer</p>
              </a>
              <a href={"/"}>
                <p>Employer</p>
              </a>
            </div>
            <div className="sb__footer-links_div">
              <h4>Parrtners</h4>
              <a href={"/"}>
                <p>Swing Tech</p>
              </a>
            </div>
            <div className="sb__footer-links_div">
              <h4>Company</h4>
              <a href={"/"}>
                <p>About</p>
              </a>
              <a href={"/"}>
                <p>Press</p>
              </a>
              <a href={"/"}>
                <p> career</p>
              </a>
              <a href={"/"}>
                <p>contact</p>
              </a>
            </div>
            <div className="sb__footer-links_div">
              <h4>Comming soon on</h4>
              <div className="socialmedia">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faEnvelope} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faSquareInstagram} />
              </div>
            </div>
          </div>
          <hr />
          <div className="sb__footer-below">
            <div className="sb__footer-copyright">
              <p>@{new Date().getFullYear()} CodeInn. All right reserved</p>
            </div>
            <div className="sb__footer-below-links">
              <a href="/term">
                <div>
                  <p>Term & condition</p>
                </div>
              </a>
              <a href="/privacy">
                <div>
                  <p>Privacy</p>
                </div>
              </a>
              <a href="/security">
                <div>
                  <p>Security</p>
                </div>
              </a>
              <a href="/cookie">
                <div>
                  <p>Cookie Declaration</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
