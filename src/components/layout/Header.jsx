import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search, User, ShoppingBag, MessageSquare } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated } = useAuth() || { user: null, isAuthenticated: false };
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const categories = [
    { name: 'Graphics & Design', path: '/services?category=graphics-design' },
    { name: 'Digital Marketing', path: '/services?category=digital-marketing' },
    { name: 'Writing & Translation', path: '/services?category=writing-translation' },
    { name: 'Video & Animation', path: '/services?category=video-animation' },
    { name: 'Programming & Tech', path: '/services?category=programming-tech' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary-600 flex-shrink-0">
            FiverrClone
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for services"
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-600">
                <span>Categories</span>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md overflow-hidden z-20 hidden group-hover:block">
                <div className="py-2">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {isAuthenticated ? (
              <>
                <Link to="/messages" className="text-gray-700 hover:text-primary-600 p-2">
                  <MessageSquare className="h-6 w-6" />
                </Link>
                <Link to="/orders" className="text-gray-700 hover:text-primary-600 p-2">
                  <ShoppingBag className="h-6 w-6" />
                </Link>
                <div className="relative group">
                  <button className="flex items-center text-gray-700 hover:text-primary-600 p-2">
                    <User className="h-6 w-6" />
                  </button>
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-20 hidden group-hover:block">
                    <div className="py-2">
                      <Link
                        to={`/profile/${user?.username}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Profile
                      </Link>
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Dashboard
                      </Link>
                      <button
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => {
                          // Logout logic will be implemented in the auth context
                          navigate('/');
                        }}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="text-gray-700 hover:text-primary-600 font-medium"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Join
                </Link>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Search - Visible only on mobile */}
        <div className="mt-4 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for services"
              className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 border-t border-gray-200">
            <nav className="py-4 space-y-1">
              <div className="pb-3 border-b border-gray-200">
                <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Categories</h3>
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    to={category.path}
                    className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                    onClick={toggleMenu}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>

              {isAuthenticated ? (
                <div className="space-y-1 px-3">
                  <Link
                    to={`/profile/${user?.username}`}
                    className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                    onClick={toggleMenu}
                  >
                    <User className="h-5 w-5 mr-3" />
                    Profile
                  </Link>
                  <Link
                    to="/messages"
                    className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                    onClick={toggleMenu}
                  >
                    <MessageSquare className="h-5 w-5 mr-3" />
                    Messages
                  </Link>
                  <Link
                    to="/orders"
                    className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                    onClick={toggleMenu}
                  >
                    <ShoppingBag className="h-5 w-5 mr-3" />
                    Orders
                  </Link>
                  <Link
                    to="/dashboard"
                    className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                    onClick={toggleMenu}
                  >
                    Dashboard
                  </Link>
                  <button
                    className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                    onClick={() => {
                      toggleMenu();
                      navigate('/');
                    }}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="space-y-1 px-3 pt-4">
                  <Link
                    to="/login"
                    className="block w-full px-3 py-2 rounded-md text-center font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                    onClick={toggleMenu}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="block w-full px-3 py-2 rounded-md text-center font-medium text-white bg-primary-600 hover:bg-primary-700"
                    onClick={toggleMenu}
                  >
                    Join
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;