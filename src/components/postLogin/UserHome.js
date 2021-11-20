import React from "react";

export default function UserHome() {
  return (
    <>
      <section class="py-5 bg-white my-5">
        <div class="container my-5">
          {/* <!-- Call to action--> */}
          <aside class="bg-dark rounded-5 p-4 p-sm-5 mt-5">
            <div class="d-flex align-items-center justify-content-center flex-column flex-xl-row text-center text-xl-start">
              <div className="col-10 col-sm-8 col-lg-6">
                <p className="text-light">Upload Your Custom Data</p>
                <div className="row g-3 d-flex align-items-center">
                  <form className="col-md-10">
                    <input
                      className="form-control mr-3"
                      type="file"
                      id="formFileMultiple"
                      name="fileUpload"
                    />
                  </form>
                  <div className="col-md-2 text-center">
                    <button className="btn btn-custom-1">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <div className="container my-4">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-custom-1">
                  Dataset A
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-custom-1">
                  Dataset B
                </a>
              </div>
            </div>
          </div>{" "}
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-custom-1">
                  Dataset C
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Public Dataset  */}
      <section class="py-5 bg-white my-5">
        <div class="container my-5">
          {/* <!-- Call to action--> */}
          <aside class="gradient-1 rounded-5 p-4 p-sm-5 mt-5">
            <div className="container my-4">
              <h5 className=" text-light my-3">Public Dataset</h5>
              <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col-sm-4">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Special title treatment</h5>
                      <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a href="#" class="btn btn-dark">
                        Dataset A
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Special title treatment</h5>
                      <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a href="#" class="btn btn-dark">
                        Dataset B
                      </a>
                    </div>
                  </div>
                </div>{" "}
                <div class="col-sm-4">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Special title treatment</h5>
                      <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a href="#" class="btn btn-dark">
                        Dataset C
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
