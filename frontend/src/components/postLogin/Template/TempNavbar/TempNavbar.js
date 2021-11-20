import React from "react";
import { Link } from "react-router-dom";
export default function TempNavbar() {
  return (
    <>
      <div data-bs-toggle="modal" data-bs-target="#exampleModal">
        <nav class="navbar navbar-expand-lg text-dark bg-transparent mt-sm-0  ">
          <div class="container p-3">
            <Link class="navbar-brand text-dark fw-bolder" to="/">
              Syndicate
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
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="#">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
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
                    Value="Company Name"
                  />
                </div>{" "}
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="Abouttitle"
                    Value="About"
                  />
                </div>{" "}
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="Servicestitle"
                    Value="Services"
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
