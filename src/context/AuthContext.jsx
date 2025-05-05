import React, { createContext, useState, useEffect } from 'react';

// Create the Auth Context
export const AuthContext = createContext();

// Create the Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is already logged in on component mount
  useEffect(() => {
    // This would typically check for a token in localStorage or cookies
    // and validate it with the backend
    const checkAuthStatus = () => {
      const token = localStorage.getItem('token');
      
      if (token) {
        // For demo purposes, we'll just set a mock user
        // In a real app, you would validate the token with your backend
        setUser({
          id: '1',
          username: 'johndoe',
          name: 'John Doe',
          email: 'john@example.com',
          avatar: 'https://via.placeholder.com/150',
        });
        setIsAuthenticated(true);
      }
      
      setIsLoading(false);
    };

    checkAuthStatus();
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      setIsLoading(true);
      
      // This would typically make an API call to your backend
      // For demo purposes, we'll just set a mock user
      if (email === 'demo@example.com' && password === 'password') {
        const mockUser = {
          id: '1',
          username: 'johndoe',
          name: 'John Doe',
          email: 'john@example.com',
          avatar: 'https://via.placeholder.com/150',
        };
        
        // Store token in localStorage
        localStorage.setItem('token', 'mock-jwt-token');
        
        setUser(mockUser);
        setIsAuthenticated(true);
        return { success: true };
      } else {
        return { 
          success: false, 
          error: 'Invalid credentials' 
        };
      }
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'An error occurred during login' 
      };
    } finally {
      setIsLoading(false);
    }
  };

  // Register function
  const register = async (userData) => {
    try {
      setIsLoading(true);
      
      // This would typically make an API call to your backend
      // For demo purposes, we'll just set a mock user
      const mockUser = {
        id: '1',
        username: userData.username,
        name: `${userData.firstName} ${userData.lastName}`,
        email: userData.email,
        avatar: 'https://via.placeholder.com/150',
      };
      
      // Store token in localStorage
      localStorage.setItem('token', 'mock-jwt-token');
      
      setUser(mockUser);
      setIsAuthenticated(true);
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'An error occurred during registration' 
      };
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setIsAuthenticated(false);
  };

  // Context value
  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};