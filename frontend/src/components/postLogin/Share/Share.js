import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

export default function Share() {
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
    return (
      <>
        {/* <section class="py-5 bg-white my-5">
          <div class="container my-5">
            <h1 className="text-center">Share your story with other </h1>
   

            <div class="d-flex justify-content-center my-5">
              <div class="col-md-5">
                <div class="h-100 p-5 border rounded-3">
                  <h2>{userdata.name}</h2>
                  <p>{userdata.location}</p>
                </div>
              </div>
            </div>
          </div>
          
        </section> */}

        
      </>
    );
  }
}
