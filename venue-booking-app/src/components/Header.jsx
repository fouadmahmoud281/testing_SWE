import React from 'react';

const Header = ({ 
  showAuth = true, 
  onAuthClick,
  isLoggedIn = false,
  userInfo = null 
}) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              {/* Logo Icon */}
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-md">
                <svg 
                  className="w-6 h-6 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
                  />
                </svg>
              </div>
              
              {/* Brand Text */}
              <div className="ml-3">
                <h1 className="text-xl font-bold text-gray-900">
                  VenueBook Pro
                </h1>
                <p className="text-xs text-gray-500 hidden sm:block">
                  Professional Venue Management
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#features" 
              className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Pricing
            </a>
            <a 
              href="#about" 
              className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Contact
            </a>
          </nav>

          {/* Auth Section */}
          <div className="flex items-center space-x-4">
            {showAuth && !isLoggedIn && (
              <>
                <button
                  onClick={() => onAuthClick && onAuthClick('login')}
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Sign In
                </button>
                <button
                  onClick={() => onAuthClick && onAuthClick('signup')}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200 shadow-sm"
                >
                  Get Started
                </button>
              </>
            )}

            {isLoggedIn && userInfo && (
              <div className="flex items-center space-x-3">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium text-gray-900">
                    {userInfo.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {userInfo.email}
                  </p>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    {userInfo.name?.charAt(0).toUpperCase()}
                  </span>
                </div>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (Hidden by default) */}
      <div className="md:hidden border-t border-gray-200 bg-gray-50">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a 
            href="#features" 
            className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-white rounded-md transition-colors duration-200"
          >
            Features
          </a>
          <a 
            href="#pricing" 
            className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-white rounded-md transition-colors duration-200"
          >
            Pricing
          </a>
          <a 
            href="#about" 
            className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-white rounded-md transition-colors duration-200"
          >
            About
          </a>
          <a 
            href="#contact" 
            className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-white rounded-md transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
