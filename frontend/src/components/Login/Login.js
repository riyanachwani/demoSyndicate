import React, { useState } from "react";
// import { useEffect } from "react";
import LoginImg from "../../assets/illustration/login.jpg";
import Axios from "axios";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (event) => {
    event.preventDefault();
    const response = await Axios.post("http://localhost:3001/api/login", {
      email: email,
      password: password,
    });
    if (response) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.userId);
      console.log(response);
      // localStorage.setItem("id", response_id);
      alert("Login Successful");
      window.location.href = "/dashboard";
    } else {
      alert("Login Failed");
    }
  };

  return (
    <>
      <section class="py-5 bg-white my-5">
        <div class="container col-xl-10 col-xxl-8 px-4 py-5">
          <div class="row align-items-center g-lg-5 py-5">
            <div class="col-lg-6 text-center text-lg-start">
              <img src={LoginImg} alt="" className="img-fluid" />
            </div>
            <div class="col-md-10 mx-auto col-lg-6">
              <form class="p-4 p-md-5 border rounded-5" onSubmit={loginUser}>
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <div class="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <button class="w-100 btn btn-lg btn-custom-1" type="submit">
                  Login
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
