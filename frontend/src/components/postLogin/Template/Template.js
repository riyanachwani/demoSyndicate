import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Button from "../../Atoms/Button";
import TempAbout from "./TempAbout/TempAbout";
import TempFooter from "./TempFooter/TempFooter";
import TempHero from "./TempHero/TempHero";
import TempNavbar from "./TempNavbar/TempNavbar";
import TempServices from "./TempServices/TempServices";

export default function Template() {
  const [modalOpen, setModalOpen] = useState(true);

  const customStyle = {
    content: {
      width: "40%",
      borderRadius: "14px",
      height: "fit-content",
      padding: "1.6em",
      margin: "auto",
      boxShadow: "0px 6px 20px #00000045",
    },
  };
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/";
  } else {
    return (
      <>
        <section class="py-5 bg-white my-5">
          <div class="container my-5 ">
            <div className="my-2 d-flex justify-content-between">
              <div className="">
                <Link className="btn btn-custom-1" to="/background">
                  Background
                </Link>
              </div>

              <Link to="/preview" className="btn btn-dark">
                Preview
              </Link>
            </div>
            {/* <!-- Call to action--> */}
            <aside class=" border rounded-5 p-4 p-sm-5 mt-5">
              <div class="d-flex flex-column flex-xl-row text-center text-xl-start"></div>
              <TempNavbar />
              <TempHero />
              <TempAbout />
              <TempServices />
              <TempFooter />
            </aside>
          </div>
        </section>

        <Modal
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          style={customStyle}
          contentLabel="Example Modal"
        >
          <div className="modal-header">
            <h5 className="modal-title">
              <span className="fw-bold">Help Guide</span>
            </h5>
            <Button
              className="close"
              onClick={() => setModalOpen(false)}
              type="button"
            >
              <span aria-hidden="true" className="fs-3">
                &times;
              </span>
            </Button>
          </div>

          <div className="modal-body">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="card p-5 ">Hello</div>
                </div>
                <div class="carousel-item">
                  <div className="card p-5 ">Hellos</div>
                </div>
                <div class="carousel-item">
                  <div className="card p-5 ">Helloss</div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-between my-2">
              <button
                className="btn btn-dark"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                Previous
              </button>

              <button
                className="btn btn-dark "
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                Next
              </button>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}
