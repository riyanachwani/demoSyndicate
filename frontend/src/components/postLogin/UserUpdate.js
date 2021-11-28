import React, { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";

export default function UserProfile() {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [List, setList] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      setList(response.data);
    });
  }, []);

  const updateList = (id) => {
    Axios.put("http://localhost:3001/userupdate", {
      id: id,
      newName: newName,
      newEmail: newEmail,
      newPassword: newPassword,
      newLocation: newLocation,
    });
  };

  return (
    <form>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 my-3">
            <div className="card h-100 my-3 rounded-5 bg-dark text-light ">
              <div className="card-body">
                <div className="text-center p-3">
                  <div className="user-profile">
                    <div className="text-center">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="Maxwell Admin"
                        className="rounded-circle my-3 border w-50"
                      />
                    </div>
                    {List.map((val, key) => {
                      return (
                        <>
                          <div key={key} className="signup">
                            {" "}
                          </div>
                          <h5 className="user-name">{val.name}</h5>
                          <p className="user-email">{val.email}</p>
                        </>
                      );
                    })}
                  </div>
                  <div className="about">
                    <h5>About</h5>
                    <p>
                      I'm william. Full Stack Designer I enjoy creating
                      user-centric, delightful and human experiences.
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
                      {List.map((val, key) => {
                        return (
                          <>
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
                              // value={val.name}
                              onChange={(event) => {
                                setNewName(event.target.value);
                              }}
                            />
                          </>
                        );
                      })}
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
                        {List.map((val, key) => {
                          return (
                            <>
                              <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder={val.email}
                                onChange={(event) => {
                                  setNewEmail(event.target.value);
                                }}
                              />
                            </>
                          );
                        })}
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
                        {List.map((val, key) => {
                          return (
                            <>
                              <input
                                type="password"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder={val.password}
                                onChange={(event) => {
                                  setNewPassword(event.target.value);
                                }}
                              />
                            </>
                          );
                        })}
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
                        {List.map((val, key) => {
                          return (
                            <>
                              <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder={val.location}
                                onChange={(event) => {
                                  setNewLocation(event.target.value);
                                }}
                              />
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="d-flex mt-5 justify-content-end">
                      {List.map((val, key) => {
                        return (
                          <>
                            <button
                              type="submit"
                              id="submit"
                              name="submit"
                              className="btn btn-outline-dark me-2"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              id="submit"
                              name="submit"
                              className="btn btn-custom-1 mx-2"
                              onClick={() => updateList(val._id)}
                            >
                              Update
                            </button>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
