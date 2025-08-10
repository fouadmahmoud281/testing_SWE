import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

const Signup = ({ onToggleMode, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Phone number validation regex (optional field)
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Phone number validation (optional)
    if (formData.phoneNumber.trim() && !phoneRegex.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    // Clear confirm password error when password changes
    if (name === 'password' && errors.confirmPassword) {
      setErrors(prev => ({
        ...prev,
        confirmPassword: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Call parent's onSubmit if provided
      if (onSubmit) {
        onSubmit(formData);
      } else {
        console.log('Signup attempt:', formData);
        alert('Account created successfully! (This is a demo)');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setErrors({ general: 'Account creation failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Create Account
        </h2>
        <p className="text-gray-600">
          Join our venue booking platform today
        </p>
      </div>

      {/* Signup Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* General Error Message */}
        {errors.general && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-red-700 text-sm">{errors.general}</span>
            </div>
          </div>
        )}

        {/* Name Input */}
        <Input
          type="text"
          id="name"
          name="name"
          label="Full Name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleInputChange}
          error={!!errors.name}
          errorMessage={errors.name}
          required
        />

        {/* Email Input */}
        <Input
          type="email"
          id="email"
          name="email"
          label="Email Address"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
          error={!!errors.email}
          errorMessage={errors.email}
          required
        />

        {/* Password Input */}
        <Input
          type="password"
          id="password"
          name="password"
          label="Password"
          placeholder="Create a strong password"
          value={formData.password}
          onChange={handleInputChange}
          error={!!errors.password}
          errorMessage={errors.password}
          required
        />

        {/* Confirm Password Input */}
        <Input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          error={!!errors.confirmPassword}
          errorMessage={errors.confirmPassword}
          required
        />

        {/* Phone Number Input (Optional) */}
        <Input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          label="Phone Number"
          placeholder="Enter your phone number (optional)"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          error={!!errors.phoneNumber}
          errorMessage={errors.phoneNumber}
        />

        {/* Password Requirements */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="text-sm font-medium text-blue-900 mb-2">Password Requirements:</h4>
          <ul className="text-xs text-blue-700 space-y-1">
            <li className="flex items-center">
              <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              At least 8 characters long
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Contains uppercase and lowercase letters
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Contains at least one number
            </li>
          </ul>
        </div>

        {/* Terms and Conditions */}
        <div className="text-sm text-gray-600">
          By creating an account, you agree to our{' '}
          <button
            type="button"
            className="text-blue-600 hover:text-blue-700 hover:underline focus:outline-none focus:underline"
            onClick={() => alert('Terms of Service would be displayed here')}
          >
            Terms of Service
          </button>
          {' '}and{' '}
          <button
            type="button"
            className="text-blue-600 hover:text-blue-700 hover:underline focus:outline-none focus:underline"
            onClick={() => alert('Privacy Policy would be displayed here')}
          >
            Privacy Policy
          </button>
        </div>

        {/* Signup Button */}
        <Button
          type="submit"
          text="Create Account"
          loading={isLoading}
          fullWidth
          variant="primary"
        />

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">or</span>
          </div>
        </div>

        {/* Toggle to Login */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <button
              type="button"
              onClick={onToggleMode}
              className="font-medium text-blue-600 hover:text-blue-700 hover:underline focus:outline-none focus:underline"
            >
              Sign in here
            </button>
          </p>
        </div>
      </form>

      {/* Platform Branding */}
      <div className="mt-8 text-center">
        <p className="text-xs text-gray-500">
          Secure venue booking management platform
        </p>
      </div>
    </div>
  );
};

export default Signup;
