import { Routes, Route, Navigate } from "react-router-dom";
import { Projects } from "./pages/Projects";
import { Contacts } from "./pages/Contact";
import { Home } from "./pages/Home";

export function MainRouts() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />

      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contacts />} />
    </Routes>
  )
}