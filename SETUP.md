# Fiverr Clone Project Setup Guide

This guide provides step-by-step instructions for setting up the Fiverr clone project once Node.js is installed on your system.

## Prerequisites Installation

1. Download and install Node.js (v16 or later) from [nodejs.org](https://nodejs.org/)
2. Verify installation by opening a command prompt and running:
   ```
   node -v
   npm -v
   ```

## Project Setup

Once Node.js is installed, follow these steps to set up the project:

```bash
# Navigate to the project directory
cd d:\Project\fiverr-clone

# Create a new React project with Vite
npm create vite@latest . -- --template react

# Install dependencies
npm install

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Configure Tailwind CSS
# Update tailwind.config.js with the following content:
# ```
# /** @type {import('tailwindcss').Config} */
# export default {
#   content: [
#     "./index.html",
#     "./src/**/*.{js,ts,jsx,tsx}",
#   ],
#   theme: {
#     extend: {},
#   },
#   plugins: [],
# }
# ```

# Update src/index.css with Tailwind directives:
# ```
# @tailwind base;
# @tailwind components;
# @tailwind utilities;
# ```

# Install shadcn/ui and its dependencies
npm install @radix-ui/react-icons
npm install class-variance-authority clsx tailwind-merge
npm install lucide-react

# Install React Router for navigation
npm install react-router-dom

# Install React Query for data fetching
npm install @tanstack/react-query

# Install Zustand for state management
npm install zustand

# Start development server
npm run dev
```

## Project Structure Implementation

After setting up the project, implement the directory structure as outlined in the project-structure.md file. Create the following key directories and files:

1. Set up the component directories:
   ```bash
   mkdir -p src/components/ui
   mkdir -p src/components/layout
   mkdir -p src/components/common
   mkdir -p src/components/sections/home
   ```

2. Set up the pages directories:
   ```bash
   mkdir -p src/pages
   mkdir -p src/pages/Auth
   ```

3. Set up other essential directories:
   ```bash
   mkdir -p src/context
   mkdir -p src/hooks
   mkdir -p src/lib
   mkdir -p src/assets/icons
   mkdir -p src/assets/images
   mkdir -p public/images/categories
   mkdir -p public/images/avatars
   ```

## Next Steps

After setting up the project structure:

1. Implement the core components (Header, Footer, MainLayout)
2. Create the routing configuration in src/routes.jsx
3. Implement the homepage components
4. Set up the authentication context
5. Develop the service listing and detail pages

Refer to the project-structure.md file for the complete directory structure and component organization.