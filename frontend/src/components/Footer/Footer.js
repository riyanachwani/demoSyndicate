import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer-clean gradient-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-4 col-md-3 col-lg-3 item">
              <h3>About us and team</h3>
              <ul>
                <li className="my-2">
                  <a className="my-2" href="/Development">
                    Development
                  </a>
                </li>
                <li className="my-2">
                  <a className="my-2" href="/About">
                    About us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 col-lg-2 item">
              <h3>Quick Links</h3>
              <ul>
                <li className="my-2">
                  <a className="my-2" href="/Community">
                    Community <br />
                  </a>
                </li>
                <li className="my-2">
                  <a className="my-2" href="/Clubs">
                    Clubs <br />
                  </a>
                </li>
                <li className="my-2">
                  <a className="my-2" href="/Events">
                    Events <br />
                  </a>
                </li>
                <li className="my-2">
                  <a className="my-2" href="/About">
                    About us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 col-lg-2 item">
              <h3>Legal</h3>
              <ul>
                <li className="my-2">
                  <a className="my-2" href="/Terms">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="my-2">
                  <a className="my-2" href="/privacy-policy">
                    Privacy Policy
                  </a>
                </li>
                <li className="my-2">
                  <a className="my-2" href="Refund">
                    Return &amp; Refund
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 col-lg-2 item">
              <div className="row">
                <h3>Address</h3>
                <p className="my-2">Bangalore, Karnataka</p>
              </div>
              <div className="row mt-2">
                <h3>Contact us</h3>
                <a
                  className="my-2 small text-decoration-none"
                  href="mailto:support@saltifai.com"
                >
                  Email Us
                </a>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 col-lg-2 item">
              <h3>Find us on :</h3>
              <div className="socail__icon">
                <ul>
                  <li>
                    <a href="/#">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <p className="copyright">Syndicate© 2021</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
