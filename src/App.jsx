import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";

import { 
  About, 
  Contact, 
  Experience, 
  Hero, 
  Navbar, 
  Tech, 
  Works, 
  StarsCanvas,
  Projects,
  ProjectsPage,
  WorkPage,
  ContactPage,
  Education
} from "./components";

const HomePage = () => {
  useEffect(() => {
    // Handle hash links when the page loads
    const handleHashLink = () => {
      const hash = window.location.hash;
      if (hash) {
        const elementId = hash.substring(1); // Remove the # symbol
        const element = document.getElementById(elementId);
        if (element) {
          // Wait a bit for the page to fully load, then scroll
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 500);
        }
      }
    };

    handleHashLink();
  }, []);

  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Education />
      <Tech />
      <Works />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;