import React from 'react';

const Input = ({ 
  type = 'text', 
  placeholder = '', 
  value = '', 
  onChange, 
  error = false,
  errorMessage = '',
  label = '',
  id = '',
  name = '',
  required = false,
  disabled = false,
  className = ''
}) => {
  const baseClasses = `
    w-full px-4 py-3 rounded-lg border transition-all duration-200 
    focus:outline-none focus:ring-2 focus:ring-offset-1
    placeholder-gray-400 text-gray-900
  `;
  
  const normalClasses = `
    border-gray-300 bg-white
    focus:border-blue-500 focus:ring-blue-500
    hover:border-gray-400
  `;
  
  const errorClasses = `
    border-red-500 bg-red-50
    focus:border-red-500 focus:ring-red-500
  `;
  
  const disabledClasses = `
    bg-gray-100 cursor-not-allowed opacity-60
  `;

  const inputClasses = `
    ${baseClasses}
    ${error ? errorClasses : normalClasses}
    ${disabled ? disabledClasses : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={inputClasses}
        aria-invalid={error}
        aria-describedby={error && errorMessage ? `${id}-error` : undefined}
      />
      
      {error && errorMessage && (
        <p 
          id={`${id}-error`}
          className="mt-2 text-sm text-red-600 flex items-center"
        >
          <svg 
            className="w-4 h-4 mr-1 flex-shrink-0" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path 
              fillRule="evenodd" 
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" 
              clipRule="evenodd" 
            />
          </svg>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default Input;
