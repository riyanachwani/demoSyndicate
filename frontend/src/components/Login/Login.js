import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoginImg from "../../assets/illustration/login.png";
import Axios from "axios";
import Button from "../Atoms/Button";
import Input from "../Atoms/Input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Toast Properties
  const toastOptions = {
    position: "bottom-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
  };

  // Login User Function
  const loginUser = async (event) => {
    event.preventDefault();

    if (email === "" && password === "") {
      toast.error("Please fill all the fields", toastOptions);
    } else if (password !== "" && email === "") {
      toast.error("Email is Empty", {
        toastOptions,
      });
    }
    if (password === "" && email !== "") {
      toast.error("password is empty", {
        toastOptions,
      });
    }
    if (email !== "" && password !== "") {
      const response = await Axios.post("http://localhost:3001/api/login", {
        email: email,
        password: password,
      });
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);
        // localStorage.setItem("id", response_id);
        window.location.href = "/dashboard";
      } else {
        toast.error("Login Failed", {
          toastOptions,
        });
      }
    }
  };

  return (
    <>
      <section className="py-5 bg-white my-5">
        <div className="container col-xl-10 col-xxl-8 px-4 py-5">
          <div className="row align-items-center g-lg-5 py-5">
            <div className="col-lg-6 text-center text-lg-start">
              <img src={LoginImg} alt="" className="img-fluid" />
            </div>
            <div className="col-md-10 mx-auto col-lg-6">
              <form className="p-4 p-md-5 border rounded-5">
                <h3 className=" m-0 p-0 pb-2">Welcome Back 👋🏻</h3>
                <p>Login to Syndicate</p>
                <div className="form-floating mb-3">
                  <Input
                    type="email"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <Input
                    type="password"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                {/* <button className="w-100 btn btn-lg btn-custom-1" type="submit">
                  Login
                </button> */}
                <Button
                  className="w-100 btn-lg btn-custom-1"
                  onClick={loginUser}
                >
                  Login
                </Button>
                <hr className="my-4" />
                <small className="text-muted">
                  By clicking Sign up, you agree to the terms of use.
                </small>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <ToastContainer /> */}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
