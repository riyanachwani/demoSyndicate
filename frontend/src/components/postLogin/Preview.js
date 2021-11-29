import React, { useState} from "react";
import { Link } from "react-router-dom";


export default function Preview() {
  const [heroTitle, setHeroTitle] = useState("Welcome To syndicate");
  const [heroSubTitle, setHeroSubTitle] = useState(
    "hey this is syndicate, we make your websites in no time"
  );
  const [aboutTitle, setAboutTitle] = useState("About");
  const [aboutsubTitle, setAboutSubTitle] = useState(
    "hey this is syndicate, we make your websites in no time"
  );
  const [servicesTitle, setServicesTitle] = useState("");
  const [servicesSubTitle, setServicesSubTitle] = useState("");
  const [services1Title, setServices1Title] = useState("");
  const [services1Desc, setServices1Desc] = useState("");
  const [services2Title, setServices2Title] = useState("");
  const [services2Desc, setServices2Desc] = useState("");
  const [services3Title, setServices3Title] = useState("");
  const [services3Desc, setServices3Desc] = useState("");
  const [companyName, setCompanyName] = useState("syndicate");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  return (
    <>
      <section class="py-5 bg-white my-5">
        <div class="container my-5 ">
          <div className="my-2 d-flex justify-content-between">
            <div className="">
            </div>
            

            <Link to="/preview" className="btn btn-dark">
              Share
            </Link>
          </div>
          {/* <!-- Call to action--> */}
          <aside class=" border rounded-5 p-4 p-sm-5 mt-5">
            <div class="d-flex flex-column flex-xl-row text-center text-xl-start"></div>


            {/* TempNav */}
            <nav
              class="navbar navbar-expand-lg text-dark mt-sm-0"
            >
              <div class="container p-3">
                <Link class="navbar-brand text-dark fw-bolder" to="#/">
                  {/* {user.map((users) => {
              user._id = users._id;
              return users.template.map((template) => {
                return template.navbar.map((navbar) => {
                  user.companyName = navbar.companyName;
                });
              });
            })} */}
            Company Name
                </Link>
                <button
                  class="navbar-toggler navbar-light text-light border-0 "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <Link class="nav-link" to="#">
                        Home
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="#about">
                        about
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="#">
                        services
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            
            {/* TempHero */}
            <div
        class="px-4 py-5 my-5 text-center">
        {" "}
        {/* {user.map((users) => {
          user._id = users._id;
          return users.template.map((template) => {
            return template.heroSection.map((heroSection) => {
              user.heroTitle = heroSection.heroTitle;
              user.herosubTitle = heroSection.herosubTitle;
            });
          });
        })} */}
        {/* <img
            class="d-block mx-auto mb-4"
            src="/docs/5.1/assets/brand/bootstrap-logo.svg"
            alt="Company logo"
            width="72"
            height="57"
          /> */}
        <h1 class="display-5 fw-bold">{heroTitle}</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">{heroSubTitle}</p>
          {/* <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
                Primary button
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Secondary
              </button>
            </div> */}
        </div>
      </div>

            
            {/* TempAbout*/}

            <div
        class="px-4 py-5 my-5 text-center">
        {/* <img
            class="d-block mx-auto mb-4"
            src="/docs/5.1/assets/brand/bootstrap-logo.svg"
            alt="Company logo"
            width="72"
            height="57"
          /> */}
        <h1 class="display-5 fw-bold">{aboutTitle}</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">{aboutsubTitle} </p>
          {/* <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
                Primary button
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Secondary
              </button>
            </div> */}
        </div>
      </div>

            {/* TempSevices*/}
            <section
        class="py-5 bg-white">
        <div class="container px-5 my-5">
          <div className="title my-5">
            <h1 class=" fw-bolder text-dark mb-2">servicesTitle</h1>
            <h6>servicesSubTitle</h6>
          </div>
          <div class="row gx-5">
            <div class="col-12">
              <div class="row gx-5 row-cols-1 row-cols-md-3">
                <div class="col mb-5 h-100">
                  <div class="feature gradient-1 text-light rounded-3 mb-3">
                    <i class="bi bi-collection"></i>
                  </div>
                  <h2 class="h5">Featured title</h2>
                  <p class="mb-0">
                    Paragraph of text beneath the heading to explain the
                    heading. Here is just a bit more text.
                  </p>
                </div>
                <div class="col mb-5 h-100">
                  <div class="feature gradient-1 text-light rounded-3 mb-3">
                    <i class="bi bi-building"></i>
                  </div>
                  <h2 class="h5">Featured title</h2>
                  <p class="mb-0">
                    Paragraph of text beneath the heading to explain the
                    heading. Here is just a bit more text.
                  </p>
                </div>
                <div class="col mb-5 mb-md-0 h-100">
                  <div class="feature gradient-1 text-light rounded-3 mb-3">
                    <i class="bi bi-toggles2"></i>
                  </div>
                  <h2 class="h5">Featured title</h2>
                  <p class="mb-0">
                    Paragraph of text beneath the heading to explain the
                    heading. Here is just a bit more text.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TempFooter*/}
      <div
        class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <span class="text-muted">
              {companyName} &copy; 2021 Company, Inc
            </span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
              <a
                class="text-muted"
                href={instagram}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <i class="fab fa-instagram fs-3"></i>
              </a>
            </li>
            <li class="ms-3">
              <a
                class="text-muted"
                href={twitter}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <i class="fab fa-facebook fs-3"></i>
              </a>
            </li>
            <li class="ms-3">
              <a
                class="text-muted"
                href={linkedIn}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <i class="fab fa-twitter fs-3"></i>
              </a>
            </li>
          </ul>
        </footer>
      </div>


          </aside>
        </div>
      </section>
    </>
  );
}
