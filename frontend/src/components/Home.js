import React from "react";
import HeroImg from "../assets/logo/logo.png";

export default function Home() {
  return (
    <>
      <header class="bg-white py-5 my-5">
        <div class="container px-5">
          <div class="row gx-5 align-items-center justify-content-center">
            <div class="col-lg-8 col-xl-7 col-xxl-6">
              <div class="my-5 text-center text-xl-start">
                <h1 class="display-5 fw-bolder text-dark mb-2">
                  Get a <span className="gradient-text-1">Website</span> for
                  your business in no time.
                </h1>
                <p class="lead fw-normal text-dark-50 mb-4">
                  We provide business holders with an online platform where they
                  can showcase their businesses in no time.
                </p>
                <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  <a
                    class="btn gradient-1 btn-lg px-4 me-sm-3 text-light"
                    href="/Signup"
                  >
                    Get Started
                  </a>
                  <a class="btn btn-outline btn-lg px-4" href="#!">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
              <img class="img-fluid rounded-3 my-5" src={HeroImg} alt="..." />
            </div>
          </div>
        </div>
      </header>

      {/* <!-- Features section--> */}
      <section class="py-5 bg-white">
        <div class="container px-5 my-5">
          <div className="title my-5">
            <h1>OUR SERVICES</h1>
            <p></p>
          </div>
          <div class="row gx-5">
            <div class="col-12">
              <div class="row gx-5 row-cols-1 row-cols-md-3">
                <div class="col mb-5 h-100">
                  <div class="feature gradient-1 text-light rounded-3 mb-3">
                    <i class="bi bi-collection"></i>
                  </div>
                  <h2 class="h5">Hosting Facility</h2>
                  <p class="mb-0">
                    Will give companies availability of hosting a webpage with
                    minimum resources.
                  </p>
                </div>
                <div class="col mb-5 h-100">
                  <div class="feature gradient-1 text-light rounded-3 mb-3">
                    <i class="bi bi-building"></i>
                  </div>
                  <h2 class="h5">No technical knowledge required</h2>
                  <p class="mb-0">
                    No need for any specific technical knowledge for usage.
                  </p>
                </div>
                <div class="col mb-5 mb-md-0 h-100">
                  <div class="feature gradient-1 text-light rounded-3 mb-3">
                    <i class="bi bi-toggles2"></i>
                  </div>
                  <h2 class="h5">Webpage Creation</h2>
                  <p class="mb-0">
                    Can use available templates for webpage creation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Call to action section--> */}
      <section class="py-5 bg-white">
        <div class="container px-5 my-5">
          {/* <!-- Call to action--> */}
          <aside class="bg-dark rounded-5 p-4 p-sm-5 mt-5">
            <div class="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
              <div class="mb-4 mb-xl-0">
                <div class="fs-3 fw-bold text-white">
                  New products, delivered to you.
                </div>
                <div class="text-white-50">
                  Sign up for our newsletter for the latest updates.
                </div>
              </div>
              <div class="ms-xl-4 text-center">
                <button
                  class="btn btn-outline-light"
                  id="button-newsletter"
                  type="button"
                >
                  Sign up
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
