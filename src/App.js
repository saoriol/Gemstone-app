import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GemstoneList from "./components/GemstoneList";
import GemstoneDetail from "./components/GemstoneDetail";
import "./styles.css";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      localStorage.setItem("darkMode", !prevMode);
      return !prevMode;
    });
  };

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <Router>
      <div className={`app ${darkMode ? "dark" : ""}`}>
        
        {/* Logo */}
        <header className="app-header">
          <img src="/images/logo.png" alt="The Gemist Logo" className="app-logo" />
        </header>

        {/* Dark Mode Toggle */}
        <div className="dark-mode-toggle">
          <label className="switch">
            <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
            <span className="slider round"></span>
          </label>
          <span>{darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}</span>
        </div>

        <Routes>
          <Route path="/" element={<GemstoneList />} />
          <Route path="/gem/:id" element={<GemstoneDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
