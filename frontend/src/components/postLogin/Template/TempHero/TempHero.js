import React, { useState } from "react";
import ReactModal from "react-modal";
// import { Link } from "react-router-dom";
export default function TempHero() {
  const [heroModalRef, setHeroModalState] = useState(false);
  const [heroTitle, setHeroTitle] = useState("Welcome To syndicate");
  const [herosubTitle, setHeroSubTitle] = useState(
    "hey this is syndicate, we make your websites in no time"
  );

  const customStyles = {
    overlay: {
      backgroundColor: "var(--color-purple-700)",
    },
    content: {
      width: "40%",
      height: "fit-content",
      padding: "1.6em",
      margin: "auto",
      boxShadow: "0px 6px 20px #00000045",
    },
  };
  return (
    <>
      <div
        class="px-4 py-5 my-5 text-center template-hover"
        onClick={() => setHeroModalState(true)}
      >
        {/* <img
            class="d-block mx-auto mb-4"
            src="/docs/5.1/assets/brand/bootstrap-logo.svg"
            alt="Company logo"
            width="72"
            height="57"
          /> */}
        <h1 class="display-5 fw-bold">{heroTitle}</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">{herosubTitle}</p>
          {/* <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
                Primary button
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Secondary
              </button>
            </div> */}
        </div>
      </div>

      {/* react modal */}
      <ReactModal
        isOpen={heroModalRef}
        style={customStyles}
        onRequestClose={() => setHeroModalState(false)}
      >
        <h3 className="my-3">Edit Hero Section</h3>
        <div class="mb-3">
          <input
            type="text"
            class="form-control input-filed"
            id="hero-title"
            placeholder="Enter Hero Section Ttitle"
          />
        </div>{" "}
        <div class="mb-3">
          <textarea
            type="text"
            id="hero-subtitle"
            class="form-control input-filed"
            placeholder="Enter Hero Sub heading "
          />
        </div>{" "}
        <br />
        <div className="mt-3 d-flex justify-content-between">
          <button
            className="btn btn-custom-1"
            onClick={() => {
              if (!document.getElementById("hero-title").value) {
                alert("please enter something!");
              } else {
                setHeroTitle(document.getElementById("hero-title").value);
                setHeroSubTitle(document.getElementById("hero-subtitle").value);

                setHeroModalState(false);
              }
            }}
          >
            Save task
          </button>
          <button
            className="btn btn-dark"
            onClick={() => setHeroModalState(false)}
          >
            Close
          </button>
        </div>
      </ReactModal>
    </>
  );
}
