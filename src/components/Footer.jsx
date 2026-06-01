import React from 'react';

/**
 * Global website footer component.
 * Includes branding title, copyright info, and secondary label-style social links.
 */
const Footer = () => {
  return (
    <footer className="w-full py-section-padding border-t border-outline-variant/10">
      <div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand */}
        <div className="text-headline-md font-headline-md font-bold text-primary tracking-tight">
          SARANYA S.
        </div>
        
        {/* Copyright */}
        <div className="text-body-md font-body-md text-outline text-center md:text-left">
          © 2024 SARANYA S. ENGINEERED FOR EXCELLENCE.
        </div>
        
        {/* Social Links */}
        <div className="flex gap-8">
          <a 
            className="text-label-md font-label-md text-outline hover:text-primary hover:underline underline-offset-4 transition-all duration-200" 
            href="https://github.com/codebysaya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <a 
            className="text-label-md font-label-md text-outline hover:text-primary hover:underline underline-offset-4 transition-all duration-200" 
            href="#"
          >
            LINKEDIN
          </a>
          <a 
            className="text-label-md font-label-md text-outline hover:text-primary hover:underline underline-offset-4 transition-all duration-200" 
            href="#"
          >
            TWITTER
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
