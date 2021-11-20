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
            Background
          </aside>
        </div>
      </section>
    </>
  );
}
