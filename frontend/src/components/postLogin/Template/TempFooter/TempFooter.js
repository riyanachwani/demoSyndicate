import React, { useState } from "react";
import ReactModal from "react-modal";
import Axios from "axios";
import { Link } from "react-router-dom";
export default function TempFooter() {
  const [footerModalRef, setFooterModalState] = useState(false);
  const [companyName, setComapnyName] = useState("syndicate");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedIn, setLinkedIn] = useState("");

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
    Axios.post("http://localhost:3001/footer", {
      companyName: companyName,
      instagram: instagram,
      twitter: twitter,
      linkedIn: linkedIn,
    });
  };

  return (
    <>
      <div
        class="container template-hover"
        onClick={() => setFooterModalState(true)}
      >
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <span class="text-muted">&copy; 2021 Company, Inc</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
              <a class="text-muted" href={instagram} target="_blank">
                {" "}
                <i class="fab fa-instagram fs-3"></i>
              </a>
            </li>
            <li class="ms-3">
              <a class="text-muted" href="/#" target="_blank">
                {" "}
                <i class="fab fa-facebook fs-3"></i>
              </a>
            </li>
            <li class="ms-3">
              <a class="text-muted" href="/#" target="_blank">
                {" "}
                <i class="fab fa-twitter fs-3"></i>
              </a>
            </li>
          </ul>
        </footer>
      </div>

      {/* react modal */}
      <ReactModal
        isOpen={footerModalRef}
        style={customStyles}
        onRequestClose={() => setFooterModalState(false)}
      >
        <h3 className="my-3">Edit Footer Section</h3>
        <div class="mb-3">
          <input
            type="text"
            class="form-control input-filed"
            id="compnay-name"
            placeholder="Enter Your Company Name"
          />
        </div>{" "}
        <div class="mb-3">
          <input
            type="text"
            class="form-control input-filed"
            id="insta"
            placeholder="Instagram Handle"
          />
        </div>
        <div className="mt-3 d-flex justify-content-between">
          <button
            className="btn btn-custom-1"
            onClick={() => {
              if (!document.getElementById("compnay-name").value) {
                alert("please enter something!");
              } else {
                setComapnyName(document.getElementById("compnay-name").value);
                setInstagram(
                  "https://instagram.com/" +
                    document.getElementById("insta").value
                );

                setFooterModalState(false);
              }
            }}
          >
            Save task
          </button>
          <button
            className="btn btn-dark"
            onClick={() => setFooterModalState(false)}
          >
            Close
          </button>
        </div>
      </ReactModal>
    </>
  );
}
