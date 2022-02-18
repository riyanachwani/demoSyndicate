import React, { useEffect, useState } from "react";
import Button from "../Atoms/Button";
import { BiStats } from "react-icons/bi";

import { Link } from "react-router-dom";
import Axios from "axios";
import CustomMessage from "../Molecules/CustomMessage/CustomMessage";

export default function Dashboard() {
  const token = localStorage.getItem("token");

  const getUser = async () => {
    console.log("token");
  };

  const [userdata, setUserdata] = useState({
    name: "",
    aboutSection: {
      aboutTitle: "",
      aboutSubTitle: "",
    },
  });

  const [userName, setUserName] = useState("");

  const id = "/" + userName.replace(/\s+/g, "").toLowerCase();
  console.log(id);

  useEffect(() => {
    Axios.get(
      `http://localhost:3001/read/${localStorage.getItem("userId")}`
    ).then((response) => {
      setUserdata({
        name: response.data.name,
        aboutSection: {
          aboutTitle: response.data.template.aboutSection.aboutTitle,
          aboutSubTitle: response.data.template.aboutSection.aboutSubTitle,
        },
      });
      setUserName(response.data.name);
    });
  }, []);

  useEffect(() => {
    getUser();
  }, []);
  if (!token) {
    window.location.href = "/";
  } else {
    // sessionStorage.setItem("userId", userId);
    console.log(token);
    return (
      <>
        <section class="py-5 bg-white my-5">
          <div class="container my-3">
            <CustomMessage
              id="help-guide"
              message="Welcome to your dashboard. Here you can see your profile, share your profile, and view your profile."
              rounded
              margin="5rem"
            />

            <div className="d-flex justify-content-between">
              <div className="text-start col-8">
                <h5 className="fw-bold">Dashboard</h5>
                <p>
                  Welcome to your dashboard. Here you can edit your webpage,
                  share your webpage, vist your profile, and check stats about
                  your webpage.
                </p>
              </div>
              <div className="align-self-center">
                <Link to={id}>
                  <Button type="text" className="btn-gray-soft mx-2">
                    Visit
                  </Button>
                </Link>
                <Link to="/stats">
                  <Button type="text" className="btn btn-dark mx-2">
                    Stats <BiStats className="mx-1 align-self-center fs-6" />
                  </Button>
                </Link>
              </div>
            </div>

            <div class="row gx-5 my-5 border-2 p-5 rounded-5 align-items-center justify-content-center">
              <div class="col-xl-5 col-xxl-6 d-none d-xl-block">
                <div class="h-100 p-5 shadow text-dark rounded-5 ">
                  <h3 className="mb-4">{userdata.name}</h3>
                  <p>{userdata.aboutSection.aboutSubTitle}</p>
                  <div className="d-flex justify-content-between m-0">
                    <Link
                      to="/template"
                      class="btn btn-dark px-3"
                      type="button"
                    >
                      Edit
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-lg-8 col-xl-7 col-xxl-6">
                <div class="my-5 text-center text-xl-start">
                  <div className="card p-4 rounded-5 my-2  bg-black">
                    <p className="fw-bolder my-1 text-gray-300">Domain </p>
                    <a
                      href={`syndicate.vercel.app${id}`}
                      className="fw-bold text-decoration-none link-gray"
                    >
                      syndicate.vercel.app{id}
                    </a>
                  </div>

                  <div className=" p-4 rounded-5 my-2 bg-black d-flex justify-content-between ">
                    <div className="">
                      <p className="fw-bolder my-1 text-gray-300">
                        Last Update
                      </p>
                      <p className="fw-bold text-decoration-none text-gray-500 mb-0">
                        12.2.2022
                      </p>
                    </div>
                    <div className="">
                      <p className="fw-bolder my-1 text-gray-300">Created </p>
                      <p className="fw-bold text-decoration-none text-gray-500 mb-0">
                        Today
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
