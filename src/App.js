import "./css/App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";
import About from "./components/Pages/About";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router";
import Login from "./components/Login/Login.js";
import Signup from "./components/Login/Signup";
import UserHome from "./components/postLogin/UserHome";
import UserProfile from "./components/postLogin/UserProfile";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/userhome" element={<UserHome />} />
          <Route path="/userprofile" element={<UserProfile />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
