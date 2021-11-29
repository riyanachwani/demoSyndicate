import React from "react";

export default function Background() {
  return (
    <>
      <section class="py-5 bg-white my-5">
        <div class="container my-5 ">
          <div className="my-2 d-flex justify-content-between">
            <button className="btn btn-dark">Preview</button>
          </div>
          {/* <!-- Call to action--> */}
          <aside class=" border rounded-5 p-4 p-sm-5 mt-5">
            <div class="d-flex flex-column flex-xl-row text-center text-xl-start"></div>

            <div class="row align-items-md-stretch">
              <div class="col-md-6">
                <div class="h-100 p-5 text-white bg-dark rounded-3">
                  <h2>Change the background</h2>
                  <p>
                    Swap the background-color utility and add a `.text-*` color
                    utility to mix up the jumbotron look. Then, mix and match
                    with additional component themes and more.
                  </p>
                  <button class="btn btn-outline-light" type="button">
                    Example button
                  </button>
                </div>
              </div>
              <div class="col-md-6">
                <div class="h-100 p-5 bg-light border rounded-3">
                  <h2>Add borders</h2>
                  <p>
                    Or, keep it light and add a border for some added definition
                    to the boundaries of your content. Be sure to look under the
                    hood at the source HTML here as we've adjusted the alignment
                    and sizing of both column's content for equal-height.
                  </p>
                  <button class="btn btn-outline-secondary" type="button">
                    Example button
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
