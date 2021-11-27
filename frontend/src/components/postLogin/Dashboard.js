import React from "react";
import { Link } from "react-router-dom";
export default function UserHome() {
  return (
    <>
      <section class="py-5 bg-white my-5">
        <div class="container my-5">
          {/* <!-- Call to action--> */}
          <aside class="bg-dark rounded-5 p-4 p-sm-5 mt-5">
            <div class="d-flex flex-column flex-xl-row text-center text-xl-start">
              <div class="row g-4">
                <div class="col-8">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Special title treatment</h5>
                      <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <Link to="/startinfo" class="btn btn-custom-1">
                        Edit
                      </Link>{" "}
                      {/* <Link to="/template" class="btn btn-custom-1">
                        Visit
                      </Link> */}
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
