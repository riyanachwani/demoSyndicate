import "./css/App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";
import About from "./components/Pages/About";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router";
import Login from "./components/Login/Login.js";
import Signup from "./components/Login/Signup";

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
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
