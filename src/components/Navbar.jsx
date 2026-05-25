import React, { useState, useEffect } from 'react';
import Button from './Button';

/**
 * Sticky responsive header navigation.
 * Height shrinks and backdrop increases blur past 50px scroll height.
 * Emits open actions for collapsible mobile Sidebar.
 */
const Navbar = ({ onOpenSidebar }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('work');

  // Handle shrink on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simple active nav tracker on scroll
  useEffect(() => {
    const sections = ['work', 'experience', 'about', 'contact'];
    const handleActiveSection = () => {
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleActiveSection);
    return () => window.removeEventListener('scroll', handleActiveSection);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Resume', href: '#resume', id: 'resume' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 border-b border-outline-variant/20 transition-all duration-300 ${
        isScrolled 
          ? 'h-16 bg-background/95 backdrop-blur-md' 
          : 'h-20 bg-background/80 backdrop-blur-md'
      }`}
    >
      <div className="flex justify-between items-center h-full px-gutter max-w-container-max mx-auto">
        {/* Brand Logo */}
        <a href="#" className="text-headline-md font-headline-xl tracking-tighter text-primary select-none">
          SARANYA S.
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-label-md font-label-md transition-all duration-200 ${
                  isActive
                    ? 'text-primary border-b border-primary pb-1'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Resume & Toggle Burger Buttons */}
        <div className="flex items-center gap-4">
          <Button variant="primary" className="hidden sm:flex" href="/SaranyaS.pdf" target="_blank">
            RESUME
          </Button>

          {/* Burger Menu for Mobile */}
          <button 
            onClick={onOpenSidebar}
            className="md:hidden flex items-center justify-center w-10 h-10 border border-outline-variant/20 rounded-lg text-primary hover:bg-white/5 transition-all active:scale-95"
            aria-label="Open navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
