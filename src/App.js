import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';

import AboutMe from './About_me';
import Main from './Main';
import Skills from './Skills';
import Projects from './projects';
import ContactForm from './ContactForm';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

// Page Transition Component
const PageTransition = ({ children }) => {
  const location = useLocation();
  
  return (
    <div
      key={location.pathname}
      style={{
        animation: 'fadeIn 0.5s ease-in-out'
      }}
    >
      {children}
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div>
        {isLoading ? (
          <div className="loading-container">
            <div className="loading-wave">
              <div className="loading-bar"></div>
              <div className="loading-bar"></div>
              <div className="loading-bar"></div>
              <div className="loading-bar"></div>
            </div>
            <div className="loading-text">Loading Portfolio...</div>
          </div>
        ) : (
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={
                <PageTransition>
                  <Main id="mainy" />
                  <AboutMe id="aboutMey" />
                  <Skills id="skills" />
                  <Projects id="project" />
                  <ContactForm id="contact" />
                </PageTransition>
              } />
              <Route path="/about" element={
                <PageTransition>
                  <AboutMe id="aboutMey" />
                </PageTransition>
              } />
              <Route path="/skills" element={
                <PageTransition>
                  <Skills id="skills" />
                </PageTransition>
              } />
              <Route path="/projects" element={
                <PageTransition>
                  <Projects id="project" />
                </PageTransition>
              } />
              <Route path="/contact" element={
                <PageTransition>
                  <ContactForm id="contact" />
                </PageTransition>
              } />
            </Routes>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
