import React, { useEffect } from 'react';

/**
 * Reusable premium Modal overlay component.
 * Integrates escape key presses, transitions, and backdrop blur close actions.
 */
const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  className = '',
  ...props
}) => {
  // Listen for Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent scroll when modal is open
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

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-all duration-300 animate-fadeIn"
      onClick={onClose}
      {...props}
    >
      <div 
        className={`relative w-full max-w-lg p-8 rounded-2xl glass-card border border-white/20 bg-background/95 shadow-2xl animate-scaleUp ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-white transition-colors p-1"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        {/* Title */}
        {title && (
          <h3 className="font-headline-md text-headline-md text-primary mb-6 pr-8">
            {title}
          </h3>
        )}

        {/* Content */}
        <div className="text-body-md text-on-surface-variant leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
