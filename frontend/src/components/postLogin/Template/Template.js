import React from "react";
import { Link } from "react-router-dom";
import TempAbout from "./TempAbout/TempAbout";
import TempFooter from "./TempFooter/TempFooter";
import TempHero from "./TempHero/TempHero";
import TempNavbar from "./TempNavbar/TempNavbar";
import TempServices from "./TempServices/TempServices";

export default function Template() {
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
      </>
    );
  }
}
