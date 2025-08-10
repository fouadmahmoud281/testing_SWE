import React from 'react';

const Button = ({ 
  text = 'Button', 
  onClick, 
  type = 'button',
  loading = false,
  disabled = false,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  className = '',
  children
}) => {
  const baseClasses = `
    inline-flex items-center justify-center font-medium rounded-lg
    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:cursor-not-allowed disabled:opacity-60
  `;

  const sizeClasses = {
    small: 'px-3 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: `
      bg-blue-600 text-white border border-blue-600
      hover:bg-blue-700 hover:border-blue-700
      focus:ring-blue-500
      disabled:bg-blue-400 disabled:border-blue-400
    `,
    secondary: `
      bg-white text-blue-600 border border-blue-600
      hover:bg-blue-50 hover:border-blue-700 hover:text-blue-700
      focus:ring-blue-500
      disabled:bg-gray-50 disabled:text-blue-400 disabled:border-blue-400
    `,
    danger: `
      bg-red-600 text-white border border-red-600
      hover:bg-red-700 hover:border-red-700
      focus:ring-red-500
      disabled:bg-red-400 disabled:border-red-400
    `,
    outline: `
      bg-transparent text-gray-700 border border-gray-300
      hover:bg-gray-50 hover:border-gray-400
      focus:ring-gray-500
      disabled:bg-gray-50 disabled:text-gray-400 disabled:border-gray-300
    `
  };

  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const isDisabled = disabled || loading;

  const LoadingSpinner = () => (
    <svg 
      className="animate-spin -ml-1 mr-2 h-4 w-4" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={buttonClasses}
      aria-disabled={isDisabled}
    >
      {loading && <LoadingSpinner />}
      {children || text}
    </button>
  );
};

export default Button;
