import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import Axios from "axios";

export default function TempHero() {
  const [heroModalRef, setHeroModalState] = useState(false);
  const [heroTitle, setHeroTitle] = useState("Welcome To syndicate");
  const [heroSubTitle, setHeroSubTitle] = useState(
    "hey this is syndicate, we make your websites in no time"
  );

  const customStyles = {
    overlay: {
      backgroundColor: "var(--color-purple-700)",
    },
    content: {
      width: "40%",
      borderRadius: "14px",
      height: "fit-content",
      padding: "1.6em",
      margin: "auto",
      boxShadow: "0px 6px 20px #00000045",
    },
  };

  const [userdata, setUserdata] = useState({
    heroSection: {
      heroTitle: "",
      heroSubTitle: "",
    },
  });

  useEffect(() => {
    Axios.get(
      `http://localhost:3001/read/${localStorage.getItem("userId")}`
    ).then((response) => {
      setUserdata({
        heroSection: {
          heroTitle: response.data.template.heroSection.heroTitle,
          heroSubTitle: response.data.template.heroSection.heroSubTitle,
        },
      });
    });
  }, []);

  let updatenavbar = () => {
    let userId = localStorage.getItem("userId");
    Axios.put(
      `http://localhost:3001/update/${localStorage.getItem("userId")}`,
      {
        id: userId,
        heroTitle: heroTitle,
        heroSubTitle: heroSubTitle,
      }
    );
  };

  return (
    <>
      <div
        class="px-4 py-5 my-5 text-center template-hover  border border-dark"
        onClick={() => setHeroModalState(true)}
      >
        <h1 class="display-5 fw-bold">{userdata.heroSection.heroTitle}</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">{userdata.heroSection.heroSubTitle}</p>
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
            onChange={(event) => {
              setHeroTitle(event.target.value);
            }}
          />
        </div>{" "}
        <div class="mb-3">
          <textarea
            type="text"
            id="hero-subtitle"
            class="form-control input-filed"
            placeholder="Enter Hero Sub heading "
            onChange={(event) => {
              setHeroSubTitle(event.target.value);
            }}
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
                updatenavbar();
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
