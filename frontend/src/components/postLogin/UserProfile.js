import React, { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";

export default function UserProfile() {
  const [List, setList] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/read/").then((response) => {
      setList(response.data);
    });
  }, []);

  const deleteList = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`);
  };

  /*
      const message = () => {
        return (
          <h1>Account Deleted</h1>
        );
      };
*/
  return (
    <form>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 my-3">
            <div className="card h-100 my-3 rounded-5 bg-dark text-light ">
              <div className="card-body">
                <div className="text-center p-3">
                  <div className="user-profile">
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
                              value={val.name}
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
                                value={val.email}
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
                                value={val.password}
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
                                value={val.location}
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
                              onClick={() => deleteList(val._id)}
                            >
                              Delete Account
                            </button>
                            <button
                              type="submit"
                              id="submit"
                              name="submit"
                              className="btn btn-custom-1 mx-2"
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
