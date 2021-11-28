import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import Axios from "axios";
import { Link } from "react-router-dom";
export default function TempNavbar() {
  const [navbarModalRef, setNavbarModalState] = useState(false);
  const [user, setUser] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [userId, setUserId] = useState("");
  const customStyles = {
    overlay: {
      backgroundColor: "var(--color-purple-700)",
    },
    content: {
      width: "40%",
      height: "fit-content",
      padding: "1.6em",
      borderRadius: "14px",
      margin: "auto",
      boxShadow: "0px 6px 20px #00000045",
    },
  };

  // const addToList = () => {
  //   Axios.post("http://localhost:3001/navbar", {
  //     companyName: companyName,
  //   });
  // };

  useEffect(() => {
    console.log(user._id);
    Axios.get(`http://localhost:3001/read/${userId}`).then((response) => {
      setUser(response.data);
    });
  }, []);

  let updatenavbar = (id) => {
    let userId = id;
    Axios.put(`http://localhost:3001/update/${userId}`, {
      id: userId,
      navTitle: companyName,
    });
    
  };

  return (
    <>
      <nav
        class="navbar navbar-expand-lg text-dark mt-sm-0 template-hover"
        onClick={() => setNavbarModalState(true)}
      >
        <div class="container p-3">
          <Link class="navbar-brand text-dark fw-bolder" to="#/">
            {user.map((users) => {
              user._id=users._id;
              return users.template.map((template) => {
                return template.navbar.map((navbar) => {
                  return navbar.companyName;
                });
              });
            })} 
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
                  about
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="#">
                  services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* react modal */}
      <ReactModal
        isOpen={navbarModalRef}
        style={customStyles}
        onRequestClose={() => setNavbarModalState(false)}
      >
        <h3 className="my-3">Edit Navbar</h3>
        <div class="mb-3">
          <input
            type="text"
            class="form-control input-filed"
            id="company-name"
            placeholder="Enter Your Company Name"
            onChange={(event) => {
              setCompanyName(event.target.value);
            }}
          />
        </div>{" "}
        <div className="mt-3 d-flex justify-content-between">
          <button
            className="btn btn-custom-1"
            onClick={() => {
              if (!document.getElementById("company-name").value) {
                alert("please enter something!");
              } else {
                setCompanyName(document.getElementById("company-name").value);
                updatenavbar(user._id);
                setNavbarModalState(false);
              }
            }}
          >
            Save task
          </button>
          <button
            className="btn btn-dark"
            onClick={() => setNavbarModalState(false)}
          >
            Close
          </button>
        </div>
      </ReactModal>
    </>
  );
}
