import React from "react";
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import Messages from './pages/Messages';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

// Context providers
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Routes with main layout */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:id" element={<ServiceDetail />} />
            <Route path="profile/:username" element={<Profile />} />
            <Route path="orders" element={<Orders />} />
            <Route path="messages" element={<Messages />} />
          </Route>
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;