import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

export default function Preview() {
  const [userdata, setUserdata] = useState({
    name: "",
    navbar: {
      companyName: "",
    },
    heroSection: {
      heroTitle: "",
      heroSubTitle: "",
    },
    aboutSection: {
      aboutTitle: "",
      aboutSubTitle: "",
    },
    serviceSection: {
      serviceTitle: "",
      serviceSubTitle: "",
      service1Title: "",
      service1Desc: "",
      service2Title: "",
      service2Desc: "",
      service3Title: "",
      service3Desc: "",
    },
    footerSection: {
      companyName: "",
      instagram: "",
      twitter: "",
      linkedIn: "",
    },
  });
  useEffect(() => {
    Axios.get(
      `http://localhost:3001/read/${localStorage.getItem("userId")}`
    ).then((response) => {
      setUserdata({
        name: response.data.name,
        navbar: {
          companyName: response.data.template.navbar.companyName,
        },
        heroSection: {
          heroTitle: response.data.template.heroSection.heroTitle,
          heroSubTitle: response.data.template.heroSection.heroSubTitle,
        },
        aboutSection: {
          aboutTitle: response.data.template.aboutSection.aboutTitle,
          aboutSubTitle: response.data.template.aboutSection.aboutSubTitle,
        },
        serviceSection: {
          serviceTitle: response.data.template.serviceSection.servicesTitle,
          serviceSubTitle:
            response.data.template.serviceSection.servicesSubTitle,
          service1Title: response.data.template.serviceSection.services1Title,
          service1Desc: response.data.template.serviceSection.services1Desc,
          service2Title: response.data.template.serviceSection.services2Title,
          service2Desc: response.data.template.serviceSection.services2Desc,
          service3Title: response.data.template.serviceSection.services3Title,
          service3Desc: response.data.template.serviceSection.services3Desc,
        },
        footerSection: {
          companyName: response.data.template.footerSection.companyName,
          instagram:
            "https://www.instagram.com/" +
            response.data.template.footerSection.instagram,
          twitter:
            "https://www.twitter.com/" +
            response.data.template.footerSection.twitter,
          linkedIn:
            "https://linkedin.com/company/" +
            response.data.template.footerSection.linkedIn,
        },
      });
      console.log(userdata.heroSection.heroTitle);
    });
  }, []);

  return (
    <>
      <section class="py-5 bg-white my-5">
        <div class="container my-5 ">
          <div className="my-2 d-flex justify-content-between">
            <div className=""></div>

            <Link to="/preview" className="btn btn-dark">
              Share
            </Link>
          </div>
          {/* <!-- Call to action--> */}
          <aside class=" border rounded-5 p-4 p-sm-5 mt-5">
            <div class="d-flex flex-column flex-xl-row text-center text-xl-start"></div>

            {/* TempNav */}
            <nav class="navbar navbar-expand-lg text-dark mt-sm-0">
              <div class="container p-3">
                <Link class="navbar-brand text-dark fw-bolder" to="#/">
                  {userdata.navbar.companyName}
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
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
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
            <div class="px-4 py-5 my-5 text-center">
              {" "}
              <div class="col-lg-8 mx-auto">
                <h1 class="display-5 fw-bold">
                  {userdata.heroSection.heroTitle}
                </h1>
                <p class="lead mb-4"> {userdata.heroSection.heroSubTitle}</p>
              </div>
            </div>

            {/* TempAbout*/}

            <div class="px-4 py-5 my-5 text-center">
              {/* <img
            class="d-block mx-auto mb-4"
            src="/docs/5.1/assets/brand/bootstrap-logo.svg"
            alt="Company logo"
            width="72"
            height="57"
          /> */}
              <h1 class="display-5 fw-bold">
                {" "}
                {userdata.aboutSection.aboutTitle}
              </h1>
              <div class="col mx-auto">
                <p class="lead mb-4"> {userdata.aboutSection.aboutSubTitle} </p>
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
            <section class="py-5 bg-white">
              <div class="container px-5 my-5">
                <div className="title my-5">
                  <h1 class=" fw-bolder text-dark mb-2">
                    {userdata.serviceSection.serviceTitle}
                  </h1>
                  <h6> {userdata.serviceSection.serviceSubTitle}</h6>
                </div>
                <div class="row gx-5">
                  <div class="col-12">
                    <div class="row gx-5 row-cols-1 row-cols-md-3">
                      <div class="col mb-5 h-100">
                        <div class="feature gradient-1 text-light rounded-3 mb-3">
                          <i class="bi bi-collection"></i>
                        </div>
                        <h2 class="h5">
                          {" "}
                          {userdata.serviceSection.service1Title}
                        </h2>
                        <p class="mb-0">
                          {userdata.serviceSection.service1Desc}
                        </p>
                      </div>
                      <div class="col mb-5 h-100">
                        <div class="feature gradient-1 text-light rounded-3 mb-3">
                          <i class="bi bi-building"></i>
                        </div>
                        <h2 class="h5">
                          {" "}
                          {userdata.serviceSection.service2Title}
                        </h2>
                        <p class="mb-0">
                          {userdata.serviceSection.service2Desc}
                        </p>
                      </div>
                      <div class="col mb-5 mb-md-0 h-100">
                        <div class="feature gradient-1 text-light rounded-3 mb-3">
                          <i class="bi bi-toggles2"></i>
                        </div>
                        <h2 class="h5">
                          {" "}
                          {userdata.serviceSection.service3Title}
                        </h2>
                        <p class="mb-0">
                          {userdata.serviceSection.service3Desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* TempFooter*/}
            <div class="container">
              <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div class="col-md-4 d-flex align-items-center">
                  <span class="text-muted">
                    {userdata.name} &copy; 2021 Company, Inc
                  </span>
                </div>

                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                  <li class="ms-3">
                    <a
                      class="text-muted"
                      href={userdata.footerSection.instagram}
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
                      href={userdata.footerSection.twitter}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <i class="fab fa-twitter fs-3"></i>
                    </a>
                  </li>
                  <li class="ms-3">
                    <a
                      class="text-muted"
                      href={userdata.footerSection.linkedIn}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <i class="fab fa-linkedin fs-3"></i>
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
