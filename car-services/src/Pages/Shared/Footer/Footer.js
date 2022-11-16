
import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer overflow-hidden">
      <div className="row">
        <div className="col-md-12">
          <footer className="footer">
            <Container>
              <div className="row">
                <div className="col-md-3 m-b-30">
                  <div className="footer-title m-t-5 m-b-20 p-b-8">
                    About us
                  </div>
                  <p className="white-text">
                    The best games you could ever find is here for you in cheapest price possible. Buy it, gift your friend or for yourself and lose yourself in the fun of gaming world.
                  </p>
                </div>
                <div className="col-md-3 m-b-30">
                  <div className="footer-title m-t-5 m-b-20 p-b-8">
                  Purchase
                  </div>
                  <div className="footer-links">
                    <Link to="#">Policy</Link>
                    <Link to="#">FAQ</Link>
                    <Link to="#">Purchase Form</Link>
                  </div>
                </div>
                <div className="col-md-3 m-b-30">
                  <div className="footer-title m-t-5 m-b-20 p-b-8">
                    Most Popular
                  </div>
                  <div className="footer-links">
                    <Link to="#">God of War</Link>
                    <Link to="#">Assassin's Creed</Link>
                    <Link to="#">Fifa</Link>
                  </div>
                </div>
                <div className="col-md-3 m-b-30">
                  <div className="footer-title m-t-5 m-b-20 p-b-8">Support</div>
                  <div className="footer-links">
                    <Link to="#">Equipment</Link>
                    <Link to="#">About Us</Link>
                    <Link to="#">Contact Us</Link>
                  </div>
                </div>
              </div>
            </Container>
          </footer>
          <div className="footer-bottom">
          <p><small>copyright &copy; {(new Date().getFullYear())}</small></p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;