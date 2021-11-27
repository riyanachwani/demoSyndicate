import React, { useState } from "react";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";
export default function TempServiecs() {
  const [servicesModalRef, setServicesModalState] = useState(false);
  const [servicesTitle, setServicesTitle] = useState("OUr Services");
  const [servicesSubTitle, setServicesSubTitle] = useState(
    "these are the services we offer"
  );

  const customStyles = {
    overlay: {
      backgroundColor: "var(--color-purple-700)",
    },
    content: {
      width: "40%",
      padding: "1.6em",
      margin: "auto",

      boxShadow: "0px 6px 20px #00000045",
    },
  };

  return (
    <>
      <section
        class="py-5 bg-white template-hover"
        onClick={() => setServicesModalState(true)}
      >
        <div class="container px-5 my-5">
          <div className="title my-5">
            <h1 class=" fw-bolder text-dark mb-2">{servicesTitle}</h1>
            <h6>{servicesSubTitle}</h6>
          </div>
          <div class="row gx-5">
            <div class="col-12">
              <div class="row gx-5 row-cols-1 row-cols-md-3">
                <div class="col mb-5 h-100">
                  <div class="feature gradient-1 text-light rounded-3 mb-3">
                    <i class="bi bi-collection"></i>
                  </div>
                  <h2 class="h5">Featured title</h2>
                  <p class="mb-0">
                    Paragraph of text beneath the heading to explain the
                    heading. Here is just a bit more text.
                  </p>
                </div>
                <div class="col mb-5 h-100">
                  <div class="feature gradient-1 text-light rounded-3 mb-3">
                    <i class="bi bi-building"></i>
                  </div>
                  <h2 class="h5">Featured title</h2>
                  <p class="mb-0">
                    Paragraph of text beneath the heading to explain the
                    heading. Here is just a bit more text.
                  </p>
                </div>
                <div class="col mb-5 mb-md-0 h-100">
                  <div class="feature gradient-1 text-light rounded-3 mb-3">
                    <i class="bi bi-toggles2"></i>
                  </div>
                  <h2 class="h5">Featured title</h2>
                  <p class="mb-0">
                    Paragraph of text beneath the heading to explain the
                    heading. Here is just a bit more text.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* react modal */}
      <ReactModal
        isOpen={servicesModalRef}
        style={customStyles}
        onRequestClose={() => setServicesModalState(false)}
      >
        <h3 className="my-3">Edit Services Section</h3>
        <div class="mb-3">
          <input
            type="text"
            class="form-control input-filed"
            id="services-title"
            placeholder="Enter Services Section Ttitle"
          />
        </div>{" "}
        <div class="mb-3">
          <textarea
            type="text"
            id="service-sub-heading"
            class="form-control input-filed"
            placeholder="Enter Services Sub heading "
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control input-filed"
            id="service-1"
            placeholder="Enter Service-1 Ttitle"
          />
        </div>
        <div class="mb-3">
          <textarea
            type="text"
            id="service-1-desc"
            class="form-control input-filed"
            placeholder="Enter Service-1 Description "
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control input-filed"
            id="service-2"
            placeholder="Enter Service-1 Ttitle"
          />
        </div>
        <div class="mb-3">
          <textarea
            type="text"
            id="service-2-desc"
            class="form-control input-filed"
            placeholder="Enter Service-1 Description "
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control input-filed"
            id="service-3"
            placeholder="Enter Service-1 Ttitle"
          />
        </div>
        <div class="mb-3">
          <textarea
            type="text"
            id="service-3-desc"
            class="form-control input-filed"
            placeholder="Enter Service-1 Description "
          />
        </div>
        <div className="mt-3 d-flex justify-content-between">
          <button
            className="btn btn-custom-1"
            onClick={() => {
              if (!document.getElementById("services-title").value) {
                alert("please enter something!");
              } else {
                setServicesTitle(
                  document.getElementById("services-title").value
                );

                setServicesModalState(false);
              }
            }}
          >
            Save task
          </button>
          <button
            className="btn btn-dark"
            onClick={() => setServicesModalState(false)}
          >
            Close
          </button>
        </div>
      </ReactModal>
    </>
  );
}
