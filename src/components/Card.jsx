import React from 'react';

/**
 * Reusable Card component implementing the premium glassmorphism ('glass-card') styling.
 */
const Card = ({
  children,
  className = '',
  noBackdrop = false,
  reveal = false,
  revealDelay = 0,
  onClick,
  ...props
}) => {
  const hasPositioning = className.includes('absolute') || className.includes('fixed') || className.includes('relative') || className.includes('static');
  const baseClasses = `glass-card border border-outline-variant/20 transition-all duration-500 ${hasPositioning ? '' : 'relative'}`;
  const revealClasses = reveal ? 'reveal' : '';
  const backdropClasses = noBackdrop ? '!backdrop-filter-none border-transparent hover:border-outline-variant/30' : '';
  
  const finalClasses = `${baseClasses} ${revealClasses} ${backdropClasses} ${className}`.trim();
  const style = revealDelay ? { transitionDelay: `${revealDelay}ms` } : {};

  return (
    <div 
      className={finalClasses} 
      style={style} 
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
