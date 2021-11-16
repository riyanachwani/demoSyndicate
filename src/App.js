import "./css/App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";
import About from "./components/Pages/About";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
