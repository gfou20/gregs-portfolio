import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import NavBar from "./components/NavBar";
import { Skill } from "./components/Skill/Skill";

function App() {
  return (
    <>
      <NavBar />
      <Skill />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
