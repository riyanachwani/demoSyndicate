import React from "react";

export default function TempServices() {
  return (
    <>
      <div data-bs-toggle="modal" data-bs-target="#serviceModal">
        <section class="py-5 bg-white">
          <div class="container px-5 my-5">
            <div className="title my-5">
              <h1 class=" fw-bolder text-dark mb-2">Services Title</h1>
              <h6>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo, sunt.
              </h6>
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
      </div>

      <div
        class="modal fade"
        id="serviceModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Services
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control mb-2"
                    id="Navbartitle"
                    Value="Service Title"
                  />{" "}
                  <input
                    type="text"
                    class="form-control mb-2"
                    id="Navbartitle"
                    Value="Service Sub Title"
                  />
                </div>{" "}
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control mb-2"
                    id="Navbartitle"
                    Value="Service 1 Title"
                  />
                  <textarea
                    type="text"
                    class="form-control mb-2"
                    id="Abouttitle"
                    Value="Service 1 Content"
                  />
                </div>{" "}
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control mb-2"
                    id="Navbartitle"
                    Value="Service 2 Title"
                  />
                  <textarea
                    type="text"
                    class="form-control mb-2"
                    id="Abouttitle"
                    Value="Service 2 Content"
                  />
                </div>{" "}
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control mb-2"
                    id="Navbartitle"
                    Value="Service 3 Title"
                  />
                  <textarea
                    type="text"
                    class="form-control mb-2"
                    id="Abouttitle"
                    Value="Service 3 Content"
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
