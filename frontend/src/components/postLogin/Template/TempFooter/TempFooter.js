import React from "react";

export default function TempFooter() {
  return (
    <>
      <div data-bs-toggle="modal" data-bs-target="#footerModal">
        <div class="container">
          <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div class="col-md-4 d-flex align-items-center">
              <span class="text-muted">&copy; 2021 Company, Inc</span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li class="ms-3">
                <a class="text-muted" href="/#">
                  {" "}
                  <i class="fab fa-instagram fs-3"></i>
                </a>
              </li>
              <li class="ms-3">
                <a class="text-muted" href="/#">
                  {" "}
                  <i class="fab fa-facebook fs-3"></i>
                </a>
              </li>
              <li class="ms-3">
                <a class="text-muted" href="/#">
                  {" "}
                  <i class="fab fa-twitter fs-3"></i>
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </div>

      <div class="modal fade" id="footerModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Footer
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
                    Value="comapany Name"
                  />
                </div>{" "}
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="Navbartitle"
                    Value="Add Instagram Hnadle"
                  />{" "}
                  <input
                    type="text"
                    class="form-control"
                    id="Navbartitle"
                    Value="Add Twitter Hnadle"
                  />{" "}
                  <input
                    type="text"
                    class="form-control"
                    id="Navbartitle"
                    Value="Add Linkein Hnadle"
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
