import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import './App.css';
import AboutPage from './components/AboutPage';
import ResumePage from './components/ResumePage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
