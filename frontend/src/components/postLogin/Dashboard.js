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
            <h1 className="text-center">Welcome to your dashboard {userdata.name}</h1>
            {/* <!-- Call to action--> */}
            <aside class="bg-dark rounded-5 p-4 p-sm-5 mt-5">
              <div class="row align-items-md-stretch">
                <div class="col-md-12">
                  <div class="h-100 p-5 bg-light border rounded-3">
                    <h2>{userdata.aboutSection.aboutTitle}</h2>
                    <p>
                      {userdata.aboutSection.aboutSubTitle}
                    </p>
                    <Link to="/template" class="btn btn-custom-1" type="button">
                      Your template
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </>
    );
  }
}
