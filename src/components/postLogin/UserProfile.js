import React from "react";

export default function UserProfile() {
  return (
    <>
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
                    <h5 className="user-name">William Scott</h5>
                    <p className="user-email">yuki@Maxwell.com</p>
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
                    <h6 className="mb-2 text-primary">Personal Details</h6>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="mb-3">
                      <label
                        HTMLfor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter Your Full Name"
                      />
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="form-group">
                      <div className="mb-3">
                        <label
                          HTMLfor="exampleFormControlTextarea1"
                          className="form-label"
                        >
                          About Me
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        ></textarea>
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
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="name@example.com"
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
                          Phone
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Enter Your Phone No."
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mt-3 mb-2 text-primary">Address</h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <div className="mb-3">
                        <label
                          HTMLfor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Street
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Street."
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
                          City
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="City"
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
                          State
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="State"
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
                          Zip Code
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Zip Code."
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
                        id="submit"
                        name="submit"
                        className="btn btn-outline-dark me-2"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        id="submit"
                        name="submit"
                        className="btn btn-custom-1 mx-2"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
