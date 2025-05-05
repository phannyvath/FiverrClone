# Fiverr Clone Project Structure

This document outlines the complete project structure for the Fiverr clone application. Since Node.js is not currently installed on the system, this serves as a blueprint for implementing the project once the prerequisites are installed.

## Complete Directory Structure

```
fiverr-clone/
├── public/
│   ├── favicon.ico
│   ├── logo.svg
│   └── images/
│       ├── hero-banner.jpg
│       ├── categories/
│       └── avatars/
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   ├── components/
│   │   ├── ui/           # shadcn/ui components
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   ├── dropdown.jsx
│   │   │   ├── input.jsx
│   │   │   └── ...
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── MainLayout.jsx
│   │   ├── common/
│   │   │   ├── ServiceCard.jsx
│   │   │   ├── CategoryCard.jsx
│   │   │   ├── ReviewCard.jsx
│   │   │   ├── UserAvatar.jsx
│   │   │   └── ...
│   │   └── sections/
│   │       ├── home/
│   │       │   ├── HeroBanner.jsx
│   │       │   ├── PopularServices.jsx
│   │       │   ├── HowItWorks.jsx
│   │       │   └── Testimonials.jsx
│   │       └── ...
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── ServiceDetail.jsx
│   │   ├── Profile.jsx
│   │   ├── Orders.jsx
│   │   ├── Messages.jsx
│   │   ├── Auth/
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   └── ...
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── ThemeContext.jsx
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useServices.js
│   │   └── useOrders.js
│   ├── lib/
│   │   ├── utils.js
│   │   └── api.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   ├── main.jsx
│   └── routes.jsx
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## Key Features Implementation

### 1. Homepage
- Hero banner with search functionality
- Popular service categories with icons
- Featured services carousel
- How it works section
- Testimonials section
- Call-to-action for sellers

### 2. Service Listings
- Filter by category, price range, delivery time
- Search functionality
- Grid/List view toggle
- Pagination
- Sort options (popularity, price, rating)

### 3. Service Detail Page
- Service images gallery
- Service description
- Pricing packages (Basic, Standard, Premium)
- Seller information and rating
- Reviews section
- Related services
- Order button

### 4. User Profile
- User information and stats
- Portfolio/Services offered
- Reviews and ratings
- Skills and description
- Contact button

### 5. Order Management
- Active orders list
- Order details view
- Order status tracking
- Delivery acceptance
- Revision requests
- Messaging integration

### 6. Messaging System
- Conversation list
- Chat interface
- File attachment support
- Order-related messages
- Notification system

## UI Design Guidelines

### Colors
- Primary: #1DBF73 (Fiverr green)
- Secondary: #0A1929 (Dark blue)
- Accent: #446EE7 (Blue)
- Background: #FFFFFF (White)
- Text: #404145 (Dark gray)
- Light gray: #F5F5F5 (For backgrounds)

### Typography
- Headings: Inter, sans-serif
- Body: Roboto, sans-serif
- Button text: Inter, medium weight

### Spacing
- Follow 8px grid system
- Consistent padding and margins

### Components
- Rounded corners (8px radius)
- Subtle shadows for cards and dropdowns
- Green buttons for primary actions
- White buttons with green border for secondary actions

## Responsive Design
- Mobile-first approach
- Breakpoints:
  - Small: 640px
  - Medium: 768px
  - Large: 1024px
  - Extra Large: 1280px

## Implementation Notes
This structure provides a comprehensive foundation for building a Fiverr-like marketplace. Once Node.js is installed, follow the setup instructions in the README.md file to initialize the project and install all necessary dependencies.