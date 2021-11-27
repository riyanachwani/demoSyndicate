import React, { useState } from "react";
import ReactModal from "react-modal";
import Axios from "axios";
// import { Link } from "react-router-dom";
export default function TempAbout() {
  const [aboutModalRef, setAboutModalState] = useState(false);
  const [aboutTitle, setAboutTitle] = useState("About");
  const [aboutsubTitle, setAboutSubTitle] = useState(
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

  const addToList = () => {
    Axios.post("http://localhost:3001/about", {
      aboutTitle: aboutTitle,
      aboutsubTitle:aboutsubTitle,
    });
  };

  return (
    <>
      <div
        class="px-4 py-5 my-5 text-center template-hover"
        onClick={() => setAboutModalState(true)}
      >
        {/* <img
            class="d-block mx-auto mb-4"
            src="/docs/5.1/assets/brand/bootstrap-logo.svg"
            alt="Company logo"
            width="72"
            height="57"
          /> */}
        <h1 class="display-5 fw-bold">{aboutTitle}</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">{aboutsubTitle} </p>
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
        isOpen={aboutModalRef}
        style={customStyles}
        onRequestClose={() => setAboutModalState(false)}
      >
        <h3 className="my-3">Edit About Section</h3>
        <div class="mb-3">
          <input
            type="text"
            class="form-control input-filed"
            id="about-title"
            placeholder="Enter About Section Ttitle"
            onChange={(event) => {
              setAboutTitle(event.target.value);
            }}
          />
        </div>{" "}
        <div class="mb-3">
          <textarea
            type="text"
            id="about-subtitle"
            class="form-control input-filed"
            placeholder="Enter About Sub heading "
            onChange={(event) => {
              setAboutSubTitle(event.target.value);
            }}
          />
        </div>{" "}
        <br />
        <div className="mt-3 d-flex justify-content-between">
          <button
            className="btn btn-custom-1"
            onClick={() => {
              if (!document.getElementById("about-title").value) {
                alert("please enter something!");
              } else {
                setAboutTitle(document.getElementById("about-title").value);
                setAboutSubTitle(
                  document.getElementById("about-subtitle").value
                );

                addToList();
                setAboutModalState(false);
              }
            }}
          >
            Save task
          </button>
          <button
            className="btn btn-dark"
            onClick={() => setAboutModalState(false)}
          >
            Close
          </button>
        </div>
      </ReactModal>
    </>
  );
}
