import React from "react";

export default function TempFooter() {
  return (
    <>
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <a
              href="/"
              class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            ></a>
            <span class="text-muted">&copy; 2021 Company, Inc</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
              <a class="text-muted" href="#">
                {" "}
                <i class="fab fa-instagram fs-3"></i>
              </a>
            </li>
            <li class="ms-3">
              <a class="text-muted" href="#">
                {" "}
                <i class="fab fa-facebook fs-3"></i>
              </a>
            </li>
            <li class="ms-3">
              <a class="text-muted" href="#">
                {" "}
                <i class="fab fa-twitter fs-3"></i>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}