import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SignImg from "../../assets/illustration/signup.png";
import Axios from "axios";
import Input from "../Atoms/Input";
import Button from "../Atoms/Button";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [location, setLocation] = useState("");

  // Toast Properties
  const toastOptions = {
    position: "bottom-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
  };

  //const [newName, setNewName] = useState(username);

  const handleSignup = (event) => {
    event.preventDefault();
    console.log(name);

    if (name === "" && email === "" && password === "") {
      toast.error("Please fill all the fields", toastOptions);
      console.log("Please fill all the fields");
    } else if (name === "" && email !== "" && password !== "") {
      toast.error("Name is Empty", {
        toastOptions,
      });
    } else if (name !== "" && email === "" && password !== "") {
      toast.error("Email is Empty", {
        toastOptions,
      });
    } else if (name !== "" && email !== "" && password === "") {
      toast.error("Password is Empty", {
        toastOptions,
      });
    } else if (name !== "" && email !== "" && password !== "") {
      if (password === confirmPassword) {
        if (password.length < 3) {
          toast.error("Password must be at least 3 characters", {
            toastOptions,
          });
        } else {
          const response = Axios.post("http://localhost:3001/signup", {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            location: location,
          });

          if (response) {
            toast.success("Signup Successful, You can now login 🎉", {
              toastOptions,
            });
          } else {
            toast.error("Signup Failed", {
              toastOptions,
            });
          }
        }
      } else {
        toast.error("Password is not matching", {
          toastOptions,
        });
      }
    }
  };

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/read").then((response) => {
  //     setList(response.data);
  //   });
  // }, []);

  return (
    <>
      <section className="py-5 my-5">
        <div className="container col-xl-10 col-xxl-8 px-4 py-5">
          <div className="row g-lg-5 py-5">
            <div className="col-lg-6 text-lg-start p-0">
              <img src={SignImg} alt="" className="img-fluid" />
            </div>
            <div className="col-md-10 mx-auto col-lg-6">
              <form className="p-4 p-md-5 border rounded-5">
                <h3 className=" m-0 p-0 pb-2">Hi, nice to see you 👋🏻</h3>
                <p>Create a new account</p>
                <div className="form-floating mb-3">
                  <Input
                    type="text"
                    id="floatingInput"
                    placeholder="Company Name"
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
                  <label for="floatingInput">Company Name</label>
                </div>{" "}
                <div className="form-floating mb-3">
                  <Input
                    type="email"
                    id="floatingInput"
                    placeholder="name@example.com"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <Input
                    type="password"
                    id="floatingPassword"
                    placeholder="Password"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                  <label for="floatingPassword">Password</label>
                </div>{" "}
                <div className="form-floating mb-3">
                  <Input
                    type="password"
                    id="floatingPassword"
                    placeholder="Confirm Password"
                    onChange={(event) => {
                      setConfirmPassword(event.target.value);
                    }}
                  />
                  <label for="floatingPassword">Confirm Password</label>
                </div>
                <div className="form-floating mb-3">
                  <Input
                    type="text"
                    id="floatingInput"
                    placeholder="Location"
                    onChange={(event) => {
                      setLocation(event.target.value);
                    }}
                  />
                  <label for="floatingInput">Location</label>
                </div>
                <Button
                  className="w-100 btn btn-lg btn-dark"
                  onClick={handleSignup}
                >
                  Signup
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
