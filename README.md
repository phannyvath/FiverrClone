# Fiverr Clone Project

## Overview
This is a professional Fiverr-like marketplace built with React, Tailwind CSS, and shadcn/ui components. The application features a modern UI with responsive design and includes key pages like homepage, service listings, service details, user profiles, and order management.

## Setup Requirements

### Prerequisites
- Node.js (v16 or later)
- npm (v7 or later)

### Installation Steps
1. Install Node.js from [nodejs.org](https://nodejs.org/)
2. Clone this repository
3. Navigate to the project directory
4. Run `npm install` to install dependencies
5. Run `npm run dev` to start the development server

## Project Structure
- `/src` - Contains all React components and application code
  - `/components` - Reusable UI components
  - `/pages` - Main application pages
  - `/layouts` - Layout components
  - `/hooks` - Custom React hooks
  - `/context` - React context providers
  - `/lib` - Utility functions and configuration
  - `/styles` - Global styles and Tailwind configuration
  - `/assets` - Images, icons, and other static assets

## Features
- User authentication and profiles
- Service listing and search
- Service categories and filtering
- Service detail pages
- Order management system
- Messaging system
- Reviews and ratings
- Responsive design for all devices

## Technologies Used
- React (Frontend library)
- Vite (Build tool)
- Tailwind CSS (Styling)
- shadcn/ui (UI components)
- React Router (Routing)
- React Query (Data fetching)
- Zustand (State management)

## Project Setup Instructions
Once Node.js is installed, you can create this project from scratch with:

```bash
# Create a new React project with Vite
npm create vite@latest fiverr-clone -- --template react

# Navigate to project directory
cd fiverr-clone

# Install dependencies
npm install

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install shadcn/ui and its dependencies
npm install @radix-ui/react-icons
npm install class-variance-authority clsx tailwind-merge
npm install lucide-react

# Install React Router
npm install react-router-dom

# Start development server
npm run dev
```

## Design Principles
- Clean, professional UI inspired by Fiverr
- Responsive design for all screen sizes
- Intuitive user experience
- Accessibility compliance
- Performance optimization

## Implementation Notes
This project structure provides a foundation for building a Fiverr-like marketplace. The actual implementation would require connecting to a backend service for data persistence and user authentication.