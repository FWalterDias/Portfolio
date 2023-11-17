import { Routes, Route, Navigate } from "react-router-dom";
import { ProjectPage } from "./pages/ProjectPage";
import { Contact } from "./pages/Contact";
import { App } from "./pages/Home";
import { Main } from "./pages/Main";
import { ProjectId } from "./pages/ProjectId";
import { NotFound } from "./pages/NotFound";

export function MainRouts() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />

      <Route path="/home" element={<App />} >
        <Route path="" element={<Main />} />
      </Route>

      <Route path="/projects" element={<App />} >
        <Route path="" element={<ProjectPage />} />
        <Route path=":id" element={<ProjectId />} />
      </Route>

      <Route path="/contact" element={<App />} >
        <Route path="" element={<Contact />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}