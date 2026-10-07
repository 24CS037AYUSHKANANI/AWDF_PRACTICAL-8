import { Suspense, lazy } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoadingScreen from "./components/LoadingScreen";

const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Insights = lazy(() => import("./pages/Insights"));

export default function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <NavLink to="/" className="brand">
          <span className="brand-mark">J</span>
          <span>
            <strong>AYUSH</strong>
            <small>24CS037 · AWDF 08</small>
          </span>
        </NavLink>

        <nav>
          <NavLink to="/" end>Overview</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/insights">Insights</NavLink>
        </nav>

        <div className="status-pill">
          <i />
          Optimized
        </div>
      </header>

      <main>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>

      <footer>
        <span>ADVANCED WEB DEVELOPMENT FRAMEWORKS</span>
        <span>24CS037 · PRACTICAL 8</span>
      </footer>
    </div>
  );
}
