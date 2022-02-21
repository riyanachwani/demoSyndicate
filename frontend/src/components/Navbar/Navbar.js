import React, { useState, useEffect } from "react";

import { FaSignOutAlt } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Axios from "axios";
import { Link } from "react-router-dom";

import "./Navbar.scss";
import Dropdown from "../Molecules/Dropdown/Dropdown";

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
        email: response.data.email,
      });
    });
  }, []);

  if (token) {
    return (
      <>
        <nav class="navbar navbar-expand-lg text-dark bg-transparent mt-sm-0 fixed-top ">
          <div class="container p-3">
            <Link class="user-brand fw-bolder" to="/">
              Syndicate
            </Link>

            <Dropdown>
              <p>
                Logged in as <br />
                <span>{userdata.email}</span>
              </p>
              <hr />
              <li>
                <Link
                  class="dropdown-item d-flex justify-content-between"
                  to="/dashboard"
                >
                  Dashboard
                  <MdSpaceDashboard className="align-self-center fs-6" />
                </Link>
              </li>
              <li>
                <Link
                  class="dropdown-item d-flex justify-content-between"
                  to="/userprofile"
                >
                  Profile
                  <CgProfile className="align-self-center fs-6" />
                </Link>
              </li>
              {/* <li><hr class="dropdown-divider"></li> */}
              <li>
                <a
                  class="dropdown-item d-flex justify-content-between"
                  href="#!"
                  rel="noreferrer"
                  onClick={logout}
                >
                  Sign out
                  <FaSignOutAlt className="align-self-center fs-6" />
                </a>
              </li>
            </Dropdown>
          </div>
        </nav>
        {/* <!-- Header-->? */}
      </>
    );
  } else {
    return (
      <>
        <nav class="navbar navbar-expand-lg text-dark bg-transparent shadow-sm mt-sm-0 fixed-top ">
          <div class="container p-2">
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
              <Link to="/signup" className="btn btn-outline mx-2">
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
