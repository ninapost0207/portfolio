import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './templates/elements/NavBar/NavBar';
import Contact from './templates/pages/Contact/Contact';
import Projects from "./templates/pages/Projects/ProjectsPage";
import Home from "./templates/pages/Home/HomePage";
import CV from "./templates/pages/CV/CVPage";
import ThemeSwitcher from "./templates/elements/ThemeSwither/ThemeSwitcher";

const App: React.FC = () => {  
    const [theme, setTheme] = useState(() => {
        const initialTheme = localStorage.getItem("theme");
        return initialTheme ? initialTheme : 'light';
    });
    function getThemeFromLocalStorage() {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }
    function toggleTheme() {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);            
            return newTheme;
        });        
    }
    useEffect(() => {
        getThemeFromLocalStorage();
    }, [theme]);
    
    if (theme === 'dark') {
        document.body.classList.add('dark')
    } else {
        document.body.classList.remove('dark')
    }
  return (
    
    <BrowserRouter>
        <ThemeSwitcher toggleTheme={toggleTheme}/>    
        <NavBar /> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/cv" element={<CV/>} />
            </Routes>
    </BrowserRouter>
  );
}

export default App;
