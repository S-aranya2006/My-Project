import React, { useEffect } from 'react';
import Button from './Button';

/**
 * Collapsible side-drawer navigation menu for mobile devices.
 * Implements transitions, backdrop blur click, and smooth scrolling callbacks.
 */
const Sidebar = ({ isOpen, onClose }) => {
  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Experience', href: '#experience' },
    { name: 'About', href: '#about' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside 
        className={`fixed top-0 right-0 z-50 w-72 h-full bg-background border-l border-outline-variant/20 shadow-2xl transition-transform duration-300 ease-out transform md:hidden flex flex-col p-8 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header with brand and close button */}
        <div className="flex items-center justify-between mb-12">
          <span className="text-headline-md font-headline-xl tracking-tighter text-primary">
            MENU
          </span>
          <button 
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 border border-outline-variant/20 rounded-lg text-primary hover:bg-white/5 transition-all"
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-6 text-left mb-12">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={handleLinkClick}
              className="text-headline-md font-headline-md text-on-surface-variant hover:text-primary transition-colors py-2 border-b border-outline-variant/10"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Resume action in sidebar */}
        <div className="mt-auto">
          <Button variant="primary" className="w-full py-4 text-center" href="/SaranyaS.pdf" target="_blank">
            RESUME
          </Button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
