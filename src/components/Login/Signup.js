import React from "react";
import LoginImg from "../../assets/illustration/login.jpg";
export default function Signup() {
  return (
    <>
      <section class="py-5 my-5">
        <div class="container col-xl-10 col-xxl-8 px-4 py-5">
          <div class="row align-items-center g-lg-5 py-5">
            <div class="col-lg-6 text-center text-lg-start">
              <img src={LoginImg} alt="" className="img-fluid" />
            </div>
            <div class="col-md-10 mx-auto col-lg-6">
              <form class="p-4 p-md-5 border rounded-5">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Your Name"
                  />
                  <label for="floatingInput">Your Name</label>
                </div>{" "}
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>{" "}
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Confirm Password"
                  />
                  <label for="floatingPassword">Confirm Password</label>
                </div>
                <div class="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <button class="w-100 btn btn-lg btn-dark" type="submit">
                  Signup
                </button>
                <hr class="my-4" />
                <small class="text-muted">
                  By clicking Sign up, you agree to the terms of use.
                </small>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}