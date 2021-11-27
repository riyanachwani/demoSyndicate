import "./css/App.css";
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

ReactModal.setAppElement("#root");

function App() {
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
        </Routes>
      </main>
      <div>
        <Routes>
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
