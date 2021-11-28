import React, { useState } from "react";
import { useEffect } from "react";
import LoginImg from "../../assets/illustration/login.jpg";
import Axios from "axios";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [location, setLocation] = useState("");

  const [List, setList] = useState([]);

  const username = List.map((val) => {
    return val.name;
  });

  //const [newName, setNewName] = useState(username);
  console.log(username);
  const addToList = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:3001/signup", {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      location: location,
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      setList(response.data);
    });
  }, []);

  // const updateList = (id) => {
  //   Axios.put("http://localhost:3001/update", {
  //     id: id,
  //     newName: newName,
  //   });
  // };

  // const deleteList = (id) => {
  //   Axios.delete(`http://localhost:3001/delete/${id}`);
  // };

  /*
  const logindata = () => {
    return (
      <>
        {List.map((val, id) => {
          return (
            <>
              <input
                value={newName}
                onChange={(event) => {
                  setNewName(event.target.value);
                }}
              />
            </>
          );
        })}
      </>
    );
  };
*/

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
                    placeholder="Company Name"
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
                  <label for="floatingInput">Company Name</label>
                </div>{" "}
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                  <label for="floatingPassword">Password</label>
                </div>{" "}
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Confirm Password"
                    onChange={(event) => {
                      setConfirmPassword(event.target.value);
                    }}
                  />
                  <label for="floatingPassword">Confirm Password</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Location"
                    onChange={(event) => {
                      setLocation(event.target.value);
                    }}
                  />
                  <label for="floatingInput">Location</label>
                </div>
                <div class="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <button
                  class="w-100 btn btn-lg btn-dark"
                  type="submit"
                  onClick={addToList}
                >
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
