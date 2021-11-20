import React from "react";
import Building from "../../assets/illustration/building.jpg";
import Growth from "../../assets/illustration/growth.jpg";

export default function About() {
  return (
    <>
      <header className="py-5 bg-white">
        <div class="container mt-5 pt-5">
          <div class="row justify-content-center  ">
            <div class="col-10">
              <div class="text-center my-5">
                <h1 class="fw-bolder mb-3">
                  Our mission is to make building websites easier for everyone.
                </h1>
                <p class="lead fw-normal text-muted mb-4">
                  Start Bootstrap was built on the idea that quality, functional
                  website templates and themes should be available to everyone.
                  Use our open source, free products, or support us by
                  purchasing one of our premium products or services.
                </p>
                <a
                  class="btn btn-custom-1 btn-lg shadow-sm"
                  href="#scroll-target"
                >
                  Read our story
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section class="py-2 bg-white" id="scroll-target">
        <div class="container px-5 my-5">
          <div class="row gx-5 align-items-center">
            <div class="col-lg-6">
              <img
                class="img-fluid rounded mb-5 mb-lg-0"
                src={Building}
                alt="..."
              />
            </div>
            <div class="col-lg-6">
              <h2 class="fw-bolder">Our founding</h2>
              <p class="lead fw-normal text-muted mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                est, ut esse a labore aliquam beatae expedita. Blanditiis
                impedit numquam libero molestiae et fugit cupiditate, quibusdam
                expedita, maiores eaque quisquam.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About section two--> */}
      <section class="py-2 bg-white">
        <div class="container px-5 my-5">
          <div class="row gx-5 align-items-center">
            <div class="col-lg-6 order-first order-lg-last">
              <img
                class="img-fluid rounded mb-5 mb-lg-0"
                src={Growth}
                alt="..."
              />
            </div>
            <div class="col-lg-6">
              <h2 class="fw-bolder">Growth &amp; beyond</h2>
              <p class="lead fw-normal text-muted mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                est, ut esse a labore aliquam beatae expedita. Blanditiis
                impedit numquam libero molestiae et fugit cupiditate, quibusdam
                expedita, maiores eaque quisquam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Team members section--> */}
      <section class="py-5 ">
        <div class="container px-5 my-5">
          <div class="text-center">
            <h2 class="fw-bolder">Our team</h2>
            <p class="lead fw-normal text-muted mb-5">
              Dedicated to quality and your success
            </p>
          </div>
          <div class="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
            <div class="col mb-5 mb-5 mb-xl-0">
              <div class="text-center">
                <img
                  class="img-fluid rounded-circle mb-4 px-4"
                  src="https://dummyimage.com/150x150/ced4da/6c757d"
                  alt="..."
                />
                <h5 class="fw-bolder">William</h5>
                <div class="fst-italic text-muted">Founder &amp; CEO</div>
              </div>
            </div>
            <div class="col mb-5 mb-5 mb-xl-0">
              <div class="text-center">
                <img
                  class="img-fluid rounded-circle mb-4 px-4"
                  src="https://dummyimage.com/150x150/ced4da/6c757d"
                  alt="..."
                />
                <h5 class="fw-bolder">Varad</h5>
                <div class="fst-italic text-muted">Frontend Developer</div>
              </div>
            </div>
            <div class="col mb-5 mb-5 mb-sm-0">
              <div class="text-center">
                <img
                  class="img-fluid rounded-circle mb-4 px-4"
                  src="https://dummyimage.com/150x150/ced4da/6c757d"
                  alt="..."
                />
                <h5 class="fw-bolder">Sumit</h5>
                <div class="fst-italic text-muted">UI Developer</div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="text-center">
                <img
                  class="img-fluid rounded-circle mb-4 px-4"
                  src="https://dummyimage.com/150x150/ced4da/6c757d"
                  alt="..."
                />
                <h5 class="fw-bolder">Guru</h5>
                <div class="fst-italic text-muted">UI Developer</div>
              </div>
            </div>{" "}
            <div class="col mb-5">
              <div class="text-center">
                <img
                  class="img-fluid rounded-circle mb-4 px-4"
                  src="https://dummyimage.com/150x150/ced4da/6c757d"
                  alt="..."
                />
                <h5 class="fw-bolder">Sandeep</h5>
                <div class="fst-italic text-muted">Backend Developer</div>
              </div>
            </div>{" "}
            <div class="col mb-5">
              <div class="text-center">
                <img
                  class="img-fluid rounded-circle mb-4 px-4"
                  src="https://dummyimage.com/150x150/ced4da/6c757d"
                  alt="..."
                />
                <h5 class="fw-bolder">Yogesh</h5>
                <div class="fst-italic text-muted">Frontend Developer</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
