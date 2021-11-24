import React from "react";

export default function TempHero() {
  return (
    <>
      <div data-bs-toggle="modal" data-bs-target="#heroModal">
        <div class="px-4 py-5 my-5 text-center">
          {/* <img
            class="d-block mx-auto mb-4"
            src="/docs/5.1/assets/brand/bootstrap-logo.svg"
            alt="Company logo"
            width="72"
            height="57"
          /> */}
          <h1 class="display-5 fw-bold">Centered hero</h1>
          <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
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
      </div>
      <div
        class="modal fade"
        id="heroModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Hero
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
                    class="form-control"
                    id="Navbartitle"
                    Value="Hero Title"
                  />
                </div>{" "}
                <div class="mb-3">
                  <textarea
                    type="text"
                    class="form-control"
                    id="Abouttitle"
                    Value="Hero Content"
                  />
                </div>{" "}
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
