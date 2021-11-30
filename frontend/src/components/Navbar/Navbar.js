import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import NavLogo from "../../assets/logo/logo.png";
export default function Navbar() {
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const [userdata, setUserdata] = useState({
    name: "",
  });

  useEffect(() => {
    Axios.get(
      `http://localhost:3001/read/${localStorage.getItem("userId")}`
    ).then((response) => {
      setUserdata({
        name: response.data.name,
        
      });
    });
  }, []);

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
                    {userdata.name}
                  </Link>
                </li>
              </ul>

              <div class="dropdown text-start">
                <a
                  href="#"
                  class="d-block link-dark text-decoration-none dropdown-toggle "
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={NavLogo}
                    alt="mdo"
                    width="32"
                    height="32"
                    class="rounded-circle"
                  />
                </a>
                <ul class="dropdown-menu text-small" aria-labelledby="dropdown">
                  <li>
                    <Link class="dropdown-item" to="/dashboard">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/userprofile">
                      Profile
                    </Link>
                  </li>
                  {/* <li><hr class="dropdown-divider"></li> */}
                  <li>
                    <a class="dropdown-item" href="#" onClick={logout}>
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
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
