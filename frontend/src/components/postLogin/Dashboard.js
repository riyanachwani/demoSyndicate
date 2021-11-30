import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

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
          <div class="container my-5">
            <h3 className="text-center display-5 ">
              Ready to create your own website?
            </h3>
            {/* <!-- Call to action--> */}
            <div class="d-flex justify-content-center my-5">
              <div class="col-lg-5 col-12">
                <div class="h-100 p-5 border text-center text-light rounded-5  gradient-1">
                  <h3>{userdata.name}</h3>
                  <p>{userdata.aboutSection.aboutSubTitle}</p>
                  <div className="d-flex justify-content-between">
                    <Link
                      to="/template"
                      class="btn btn-light px-3"
                      type="button"
                    >
                      Edit
                    </Link>
                    <a
                      href={id}
                      class="btn btn-outline-light px-3"
                      type="button"
                    >
                      Visit
                    </a>
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
