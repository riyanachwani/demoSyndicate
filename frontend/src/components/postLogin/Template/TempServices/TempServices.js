import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import Axios from "axios";

// import { Link } from "react-router-dom";
export default function TempServiecs() {
  const [servicesModalRef, setServicesModalState] = useState(false);
  const [servicesTitle, setServicesTitle] = useState("");
  const [servicesSubTitle, setServicesSubTitle] = useState("");
  const [services1Title, setServices1Title] = useState("");
  const [services1Desc, setServices1Desc] = useState("");
  const [services2Title, setServices2Title] = useState("");
  const [services2Desc, setServices2Desc] = useState("");
  const [services3Title, setServices3Title] = useState("");
  const [services3Desc, setServices3Desc] = useState("");

  const customStyles = {
    overlay: {
      backgroundColor: "var(--color-purple-700)",
    },
    content: {
      width: "40%",
      padding: "1.6em",
      margin: "auto",
      borderRadius: "14px",
      boxShadow: "0px 6px 20px #00000045",
    },
  };

  const [userdata, setUserdata] = useState({
    serviceSection: {
      serviceTitle: "",
      serviceSubTitle: "",
      service1Title: "",
      service1Desc: "",
      service2Title: "",
      service2Desc: "",
      service3Title: "",
      service3Desc: "",
    },
  });
  useEffect(() => {
    Axios.get(
      `http://localhost:3001/read/${localStorage.getItem("userId")}`
    ).then((response) => {
      setUserdata({
        serviceSection: {
          serviceTitle: response.data.template.serviceSection.servicesTitle,
          serviceSubTitle:
            response.data.template.serviceSection.servicesSubTitle,
          service1Title: response.data.template.serviceSection.services1Title,
          service1Desc: response.data.template.serviceSection.services1Desc,
          service2Title: response.data.template.serviceSection.services2Title,
          service2Desc: response.data.template.serviceSection.services2Desc,
          service3Title: response.data.template.serviceSection.services3Title,
          service3Desc: response.data.template.serviceSection.services3Desc,
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
        servicesTitle: servicesTitle,
        servicesSubTitle: servicesSubTitle,
        services1Title: services1Title,
        services1Desc: services1Desc,
        services2Title: services2Title,
        services2Desc: services2Desc,
        services3Title: services3Title,
        services3Desc: services3Desc,
      }
    );
  };

  return (
    <>
      <section
        class="py-5 bg-white template-hover"
        onClick={() => setServicesModalState(true)}
      >
        <div class="container px-5 my-5">
          <div className="title my-5">
            <h1 class=" fw-bolder text-dark mb-2">{userdata.serviceSection.serviceTitle}</h1>
            <h6>{userdata.serviceSection.serviceSubTitle}</h6>
          </div>
          <div class="row gx-5">
            <div class="col-12">
              <div class="row gx-5 row-cols-1 row-cols-md-3">
                <div class="col mb-5 h-100">
                  <div class="feature gradient-1 text-light rounded-3 mb-3">
                    <i class="bi bi-collection"></i>
                  </div>
                  <h2 class="h5">{userdata.serviceSection.service1Title}</h2>
                  <p class="mb-0">
                    {userdata.serviceSection.service1Desc}
                  </p>
                </div>
                <div class="col mb-5 h-100">
                  <div class="feature gradient-1 text-light rounded-3 mb-3">
                    <i class="bi bi-building"></i>
                  </div>
                  <h2 class="h5">{userdata.serviceSection.service2Title}</h2>
                  <p class="mb-0">
                    {userdata.serviceSection.service2Desc}
                  </p>
                </div>
                <div class="col mb-5 mb-md-0 h-100">
                  <div class="feature gradient-1 text-light rounded-3 mb-3">
                    <i class="bi bi-toggles2"></i>
                  </div>
                  <h2 class="h5">{userdata.serviceSection.service3Title}</h2>
                  <p class="mb-0">
                    {userdata.serviceSection.service3Desc}
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
            placeholder="Enter Services Section Title"
            onChange={(event) => {
              setServicesTitle(event.target.value);
            }}
          />
        </div>{" "}
        <div class="mb-3">
          <textarea
            type="text"
            id="service-subtitle"
            class="form-control input-filed"
            placeholder="Enter Services Sub heading "
            onChange={(event) => {
              setServicesSubTitle(event.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control input-filed"
            id="service-1"
            placeholder="Enter Service-1 Ttitle"
            onChange={(event) => {
              setServices1Title(event.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <textarea
            type="text"
            id="service-1-desc"
            class="form-control input-filed"
            placeholder="Enter Service-1 Description "
            onChange={(event) => {
              setServices1Desc(event.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control input-filed"
            id="service-2"
            placeholder="Enter Service-2 Ttitle"
            onChange={(event) => {
              setServices2Title(event.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <textarea
            type="text"
            id="service-2-desc"
            class="form-control input-filed"
            placeholder="Enter Service-2 Description "
            onChange={(event) => {
              setServices2Desc(event.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control input-filed"
            id="service-3"
            placeholder="Enter Service-3 Ttitle"
            onChange={(event) => {
              setServices3Title(event.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <textarea
            type="text"
            id="service-3-desc"
            class="form-control input-filed"
            placeholder="Enter Service-3 Description "
            onChange={(event) => {
              setServices3Desc(event.target.value);
            }}
          />
        </div>
        <div className="mt-3 d-flex justify-content-between">
          <button
            className="btn btn-custom-1"
            onClick={() => {
              if (!document.getElementById("services-title").value) {
                alert("please enter something!");
              } else {
                console.log(servicesTitle);
                updatenavbar();
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
