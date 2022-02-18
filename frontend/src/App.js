import "./css/App.scss";
import ReactModal from "react-modal";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";
import About from "./components/Pages/About";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router";
import Login from "./components/Login/Login.js";
import Signup from "./components/Login/Signup";
import Dashboard from "./components/postLogin/Dashboard";
import UserProfile from "./components/postLogin/UserProfile";
import Template from "./components/postLogin/Template/Template";
import Background from "./components/postLogin/Background";
import Preview from "./components/postLogin/Preview";
import UserUpdate from "./components/postLogin/UserUpdate";
import Result from "./components/postLogin/Result";
import Share from "./components/postLogin/Share/Share";
import React, { useState, useEffect } from "react";

import Axios from "axios";

ReactModal.setAppElement("#root");

function App() {
  const [userName, setUserName] = useState("");

  const id = "/" + userName.replace(/\s+/g, "").toLowerCase();
  console.log(id);
  useEffect(() => {
    Axios.get(
      `http://localhost:3001/read/${localStorage.getItem("userId")}`
    ).then((response) => {
      setUserName(response.data.name);
    });
  }, []);

  if (window.location.pathname === id) {
    return (
      <div>
        <Routes>
          <Route path="/:id" element={<Result />} />
        </Routes>
      </div>
    );
  } else {
    return (
      <>
        <main>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/template" element={<Template />} />
            <Route path="/background" element={<Background />} />
            <Route path="/userupdate" element={<UserUpdate />} />
            <Route path="/share" element={<Share />} />
            <Route path="/pdf" element={<pdf />} />
          </Routes>
          <div>
            <Routes>
              <Route path="/preview" element={<Preview />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
