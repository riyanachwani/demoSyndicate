import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

export default function UserProfile() {
  
  const [userdata, setUserdata] = useState({
    id:"",
    name: "",
    email: "",
    password: "",
    location: "",
    aboutSection: {
      aboutTitle: "",
      aboutSubTitle: "",
    },
  });
  useEffect(() => {
    Axios.get(
      `http://localhost:3001/read/${localStorage.getItem("userId")}`
    ).then((response) => {
      setUserdata({
        name: response.data.name,
        email:response.data.email,
        password: response.data.password,
        location:response.data.location,
        aboutSection: {
          aboutTitle: response.data.template.aboutSection.aboutTitle,
          aboutSubTitle: response.data.template.aboutSection.aboutSubTitle,
        },
      });
    });
  }, []);

  
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const deleteList = (id) => {
    Axios.delete(`http://localhost:3001/delete/${localStorage.getItem("userId")}`);
    logout();
  };

  /*
      const message = () => {
        return (
          <h1>Account Deleted</h1>
        );
      };
*/
  return (
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 my-3">
            <div className="card h-100 my-3 rounded-5 bg-dark text-light ">
              <div className="card-body">
                <div className="text-center p-3">
                  <div className="user-profile">
                          <div className="signup">
                            {" "}
                          </div>
                          <h5 className="user-name">{userdata.name}</h5>
                          <p className="user-email">{userdata.email}</p>
                    </div>
                  <div className="about">
                    <h5>About</h5>
                    <p>
                      {userdata.aboutSection.aboutSubTitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12 my-3">
            <div className="card h-100 my-3 rounded-5 p-3  ">
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mb-2 text-primary">Details</h6>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="mb-3">
                         <label
                              HTMLfor="exampleFormControlInput1"
                              className="form-label"
                            >
                              Company Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleFormControlInput1"
                              value={userdata.name}
                            />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <div className="mb-3">
                        <label
                          HTMLfor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Email address
                        </label>
                              <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                value={userdata.email}
                              />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <div className="mb-3">
                        <label
                          HTMLfor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Password
                        </label>
                              <input
                                type="password"
                                className="form-control"
                                id="exampleFormControlInput1"
                                value={userdata.password}
                              />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="form-group">
                      <div className="mb-3">
                        <label
                          HTMLfor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Location
                        </label>
                              <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                value={userdata.location}
                              />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="d-flex mt-5 justify-content-end">
                            <button
                              type="button"
                              id="button"
                              name="submit"
                              className="btn btn-outline-dark me-2"
                              onClick={() => deleteList(userdata._id)}
                            >
                              Delete Account
                            </button>
                            <Link to="/UserUpdate" class="btn btn-custom-1" type="button">
                              Update
                            </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
