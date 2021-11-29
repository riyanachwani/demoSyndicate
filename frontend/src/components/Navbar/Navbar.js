import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const token = localStorage.getItem("token");

  const logut = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  if (token) {
    return (
      <>
        <nav class="navbar navbar-expand-lg text-dark bg-transparent shadow-sm mt-sm-0 fixed-top ">
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
                  <Link class="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Contact
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    FAQ
                  </Link>
                </li>
              </ul>
              <button
                className="btn gradient-1 text-light mx-2"
                onClick={logut}
              >
                Logout
              </button>
            </div>
          </div>
        </nav>
        {/* <!-- Header-->? */}
      </>
    );
  } else {
    return (
      <>
        <nav class="navbar navbar-expand-lg text-dark bg-transparent shadow-sm mt-sm-0 fixed-top ">
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
                  <Link class="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Contact
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    FAQ
                  </Link>
                </li>
              </ul>
              <Link to="/login" className="btn gradient-1 text-light mx-2">
                Login
              </Link>
              <Link to="/signup" className="btn btn-outline-dark mx-2">
                Signup
              </Link>
            </div>
          </div>
        </nav>
        {/* <!-- Header-->? */}
      </>
    );
  }
}
