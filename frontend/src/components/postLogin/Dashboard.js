import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const token = localStorage.getItem("token");

  const getUser = async () => {
    console.log("token");
  };

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
            <h1 className="text-center">Welcome to your dashboard User</h1>
            {/* <!-- Call to action--> */}
            <aside class="bg-dark rounded-5 p-4 p-sm-5 mt-5">
              <div class="row align-items-md-stretch">
                <div class="col-md-12">
                  <div class="h-100 p-5 bg-light border rounded-3">
                    <h2>Add borders</h2>
                    <p>
                      Or, keep it light and add a border for some added
                      definition to the boundaries of your content. Be sure to
                      look under the hood at the source HTML here as we've
                      adjusted the alignment and sizing of both column's content
                      for equal-height.
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
