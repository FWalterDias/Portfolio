import { Routes, Route, Navigate } from "react-router-dom";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { App } from "./pages/Home";
import { Main } from "./pages/Main";
import { ProjectPage } from "./pages/ProjectPage";
import { NotFound } from "./pages/NotFound";

export function MainRouts() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />

      <Route path="/home" element={<App />} >
        <Route path="" element={<Main />} />
      </Route>

      <Route path="/projects" element={<App />} >
        <Route path="" element={<Projects />} />
        <Route path=":id" element={<ProjectPage />} />
      </Route>

      <Route path="/contact" element={<App />} >
        <Route path="" element={<Contact />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}