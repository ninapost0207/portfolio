
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './templates/elements/NavBar/NavBar';
import Contact from './templates/pages/Contact/Contact';
import Projects from "./templates/pages/Projects/ProjectsPage";
import Home from "./templates/pages/Home/HomePage";
import CV from "./templates/pages/CV/CVPage";

function App() {  
  return (
    <BrowserRouter>      
        <NavBar />          
        <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/contact" element={ <Contact />} />
            <Route path="/projects" element={ <Projects />} />
            <Route path="/cv" element={ <CV />} />
        </Routes>         
              
    </BrowserRouter>
  );
}

export default App;
