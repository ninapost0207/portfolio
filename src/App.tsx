import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './templates/pages/HomePage';
import NavBar from './templates/elements/NavBar';
import ContactPage from './templates/pages/ContactPage';
import ProjectsPage from './templates/pages/ProjectsPage';
import CVPage from './templates/pages/CVPage';


function App() {
  return (
    <BrowserRouter>      
        <NavBar />          
            <Routes>
                <Route path="/" element={ <HomePage />} />
                <Route path="/contact" element={ <ContactPage />} />
                <Route path="/projects" element={ <ProjectsPage />} />
                <Route path="/cv" element={ <CVPage />} />
            </Routes>         
              
    </BrowserRouter>
  );
}

export default App;
