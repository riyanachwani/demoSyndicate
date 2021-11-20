import React from "react";

export default function TempAbout() {
  return (
    <>
      <header class="bg-white py-5" id="about">
        <div class="container px-5">
          <div class="row gx-5 align-items-center justify-content-center">
            <div class="col-lg-8 col-xl-7 col-xxl-6">
              <div class="my-5 text-center text-xl-start">
                <h1 class="fw-bolder text-dark mb-2">About Title</h1>
                <p class="lead fw-normal text-dark-50 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  necessitatibus fuga reiciendis eaque cum incidunt commodi
                  vitae pariatur explicabo inventore ratione perferendis,
                  assumenda omnis, officia quia ex, minus quod voluptatibus?
                </p>
                {/* <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  <a
                    class="btn gradient-1 btn-lg px-4 me-sm-3 text-light"
                    href="#features"
                  >
                    Get Started
                  </a>
                  <a class="btn btn-outline-dark btn-lg px-4" href="#!">
                    Learn More
                  </a>
                </div> */}
              </div>
            </div>
            <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
              <img class="img-fluid rounded-3 my-5" src="" alt="..." />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
