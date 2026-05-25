import React from 'react';

/**
 * Reusable input element with consistent floating/border-bottom styling.
 */
export const FormInput = ({
  label,
  id,
  type = 'text',
  placeholder,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className={`space-y-2 flex flex-col ${className}`}>
      {label && (
        <label 
          htmlFor={id} 
          className="text-left text-label-md font-label-md text-outline uppercase tracking-wider"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className="w-full bg-transparent border-0 border-b border-outline-variant/40 py-3 focus:ring-0 focus:border-primary transition-all text-body-md text-white placeholder:text-outline/50 outline-none"
        {...props}
      />
      {error && (
        <span className="text-left text-xs text-error font-label-md mt-1 animate-pulse">
          {error}
        </span>
      )}
    </div>
  );
};

/**
 * Reusable textarea element with consistent floating/border-bottom styling.
 */
export const FormTextArea = ({
  label,
  id,
  placeholder,
  rows = 4,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className={`space-y-2 flex flex-col ${className}`}>
      {label && (
        <label 
          htmlFor={id} 
          className="text-left text-label-md font-label-md text-outline uppercase tracking-wider"
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        rows={rows}
        className="w-full bg-transparent border-0 border-b border-outline-variant/40 py-3 focus:ring-0 focus:border-primary transition-all text-body-md text-white placeholder:text-outline/50 resize-none outline-none"
        {...props}
      />
      {error && (
        <span className="text-left text-xs text-error font-label-md mt-1 animate-pulse">
          {error}
        </span>
      )}
    </div>
  );
};

/**
 * Main form wrapper.
 */
const Form = ({ children, onSubmit, className = '', ...props }) => {
  return (
    <form onSubmit={onSubmit} className={`space-y-8 ${className}`} {...props}>
      {children}
    </form>
  );
};

export default Form;
