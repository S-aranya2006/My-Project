import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';

/**
 * Main Application Shell.
 * Manages side-menu collapse drawers, scroll-triggered page header progress indicators,
 * and standard theme-friendly grid configurations.
 */
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Smooth Scroll Progress bar listener
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        const scrolled = (winScroll / height) * 100;
        setScrollProgress(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        id="progress-bar" 
        style={{ width: `${scrollProgress}%` }} 
        aria-hidden="true"
      />

      {/* Navigations */}
      <Navbar onOpenSidebar={() => setIsSidebarOpen(true)} />
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      {/* Core Page Content */}
      <Home />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
