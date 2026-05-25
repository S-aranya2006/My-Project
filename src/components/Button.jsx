import React from 'react';

/**
 * Reusable premium Button component.
 * Supports primary, secondary, glass, and icon styles.
 * Can be rendered as either a <button> or an anchor <a>.
 */
const Button = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'glass' | 'icon'
  className = '',
  href,
  onClick,
  type = 'button',
  ...props
}) => {
  const baseClasses = 'btn-hover font-label-md text-label-md transition-all duration-300 rounded-lg active:scale-95 flex items-center justify-center';
  
  const variants = {
    primary: 'bg-primary text-on-primary px-6 py-2 hover:opacity-90',
    heroPrimary: 'bg-primary text-on-primary px-8 py-4 flex items-center gap-2 hover:opacity-90',
    glass: 'glass-card text-primary px-8 py-4 hover:border-white/30',
    icon: 'w-12 h-12 rounded-lg border border-outline-variant/20 hover:bg-white hover:text-black',
    submit: 'w-full bg-primary text-on-primary py-4 tracking-widest'
  };

  const selectedClasses = `${baseClasses} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a href={href} className={selectedClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={selectedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
