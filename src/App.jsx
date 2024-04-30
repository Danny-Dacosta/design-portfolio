import "./App.css";
import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { Homepage, Projects, About } from "./pages";
import {
  Zzzone,
  Eservz,
  Myntra,
  Finixpe,
  Gourmet,
} from "./pages/project/projects/index.js";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="projects" element={<Projects />}></Route>
        <Route path="projects/zzzone" element={<Zzzone />}></Route>
        <Route path="projects/gourmet" element={<Gourmet />}></Route>
        <Route path="projects/finixpe" element={<Finixpe />}></Route>
        <Route path="projects/myntra" element={<Myntra />}></Route>
        <Route path="projects/eservz" element={<Eservz />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
