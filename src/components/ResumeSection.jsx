import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiExternalLink } from 'react-icons/fi';
import Button from './Button';

const ResumeSection = () => {
  return (
    <section className="py-section-padding px-gutter bg-surface-container-lowest" id="resume">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <p className="text-label-md font-label-md text-outline tracking-widest mb-2 reveal">EXPERTISE & CREDENTIALS</p>
          <h2 className="font-headline-lg text-headline-lg mb-6 reveal" style={{ transitionDelay: '100ms' }}>Resume / CV</h2>
          <p className="max-w-2xl mx-auto font-body-lg text-body-lg text-on-surface-variant reveal" style={{ transitionDelay: '200ms' }}>
            Freelance Full Stack Developer specializing in React, Django, and modern web applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Actions & Summary */}
          <div className="lg:col-span-4 space-y-8 reveal text-left" style={{ transitionDelay: '300ms' }}>
            <h3 className="font-headline-md text-headline-md">Download My Resume</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Get a comprehensive overview of my experience, technical skills, and freelance projects in a printer-friendly PDF format.
            </p>
            
            <div className="flex flex-col gap-4">
              <Button 
                variant="primary" 
                href="/SaranyaS.pdf" 
                download="Saranya_S_Resume.pdf"
                className="w-full flex items-center justify-center gap-3"
              >
                <FiDownload className="text-xl" />
                DOWNLOAD RESUME
              </Button>
              <Button 
                variant="glass" 
                href="/SaranyaS.pdf" 
                target="_blank"
                className="w-full flex items-center justify-center gap-3"
              >
                <FiExternalLink className="text-xl" />
                OPEN IN NEW TAB
              </Button>
            </div>
            
            <div className="pt-6 border-t border-outline-variant/20">
              <p className="font-label-md text-label-md text-outline mb-4">READY TO START A PROJECT?</p>
              <Button variant="heroPrimary" href="#contact" className="w-full">
                Hire Me
              </Button>
            </div>
          </div>

          {/* Preview Window */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="lg:col-span-8 h-[600px] w-full rounded-2xl overflow-hidden border border-outline-variant/20 shadow-2xl bg-surface-container-highest relative group"
          >
            {/* Simple Mac-like header for premium feel */}
            <div className="h-10 bg-surface-container-lowest border-b border-outline-variant/20 flex items-center px-4 gap-2 absolute top-0 w-full z-10">
              <div className="w-3 h-3 rounded-full bg-outline-variant/40" />
              <div className="w-3 h-3 rounded-full bg-outline-variant/40" />
              <div className="w-3 h-3 rounded-full bg-outline-variant/40" />
              <span className="ml-4 font-label-md text-label-md text-on-surface-variant text-xs">SaranyaS.pdf</span>
            </div>
            <div className="w-full h-full pt-10">
              <iframe 
                src="/SaranyaS.pdf" 
                title="Resume Preview" 
                className="w-full h-full border-none bg-white filter grayscale-[50%] group-hover:grayscale-0 transition-all duration-700" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
