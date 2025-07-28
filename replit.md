# Replit.md

## Overview

This is a full-stack React application built with Express.js backend, featuring a modern marketing landing page for "ADmyBRAND AI Suite" - an AI-powered marketing automation platform. The application uses a monorepo structure with shared TypeScript schemas, PostgreSQL database with Drizzle ORM, and modern UI components built with Tailwind CSS and shadcn/ui.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for smooth transitions and animations
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API
- **Database**: PostgreSQL with connection via Neon Database serverless
- **ORM**: Drizzle ORM for type-safe database operations
- **Session Storage**: PostgreSQL-based sessions with `connect-pg-simple`
- **Development**: tsx for TypeScript execution in development

### Key Components

#### Database Schema (`shared/schema.ts`)
- **Users Table**: Basic user authentication with username/password
- **Contact Submissions Table**: Form submissions from the landing page
- **Validation**: Zod schemas for runtime type validation
- **Types**: Inferred TypeScript types from Drizzle schemas

#### Landing Page Components
- **Navigation**: Fixed header with smooth scroll navigation
- **Hero Section**: Main call-to-action with gradient backgrounds
- **Features**: Grid layout showcasing AI capabilities
- **Stats**: Performance metrics display
- **Pricing**: Tiered pricing plans with monthly/annual toggle
- **Testimonials**: Customer reviews with ratings
- **FAQ**: Expandable question/answer sections
- **Contact Form**: Lead capture form with form validation

#### UI System
- **Design System**: Consistent spacing, colors, and typography
- **Glassmorphism Effects**: Modern frosted glass UI elements
- **Gradient Text**: Branded gradient text styling
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Layer**: Express routes handle business logic and database operations
3. **Database Layer**: Drizzle ORM manages PostgreSQL interactions
4. **Response Flow**: JSON responses sent back to client components
5. **State Management**: React Query handles caching, loading states, and error handling

### External Dependencies

#### Core Framework Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **Backend**: Express.js, Node.js built-ins
- **Database**: PostgreSQL via Neon Database, Drizzle ORM
- **TypeScript**: Full type safety across frontend, backend, and shared code

#### UI/UX Dependencies
- **Component Library**: Radix UI primitives for accessibility
- **Styling**: Tailwind CSS for utility-first styling
- **Icons**: Lucide React for consistent iconography
- **Animations**: Framer Motion for smooth transitions
- **Forms**: React Hook Form with Zod validation

#### Development Tools
- **Build Tools**: Vite for frontend, esbuild for backend bundling
- **Development**: tsx for TypeScript execution, Replit integration
- **Database Tools**: Drizzle Kit for migrations and schema management

### Deployment Strategy

#### Development Environment
- **Frontend**: Vite dev server with HMR (Hot Module Replacement)
- **Backend**: tsx with automatic restart on file changes
- **Database**: Neon Database serverless PostgreSQL instance
- **Integration**: Replit-specific plugins for development experience

#### Production Build
- **Frontend Build**: Vite builds optimized static assets to `dist/public`
- **Backend Build**: esbuild bundles server code to `dist/index.js`
- **Database**: Production PostgreSQL via DATABASE_URL environment variable
- **Serving**: Express serves both API routes and static frontend files

#### Environment Configuration
- **Database**: `DATABASE_URL` environment variable for PostgreSQL connection
- **Session**: PostgreSQL-based session storage for user authentication
- **Development**: NODE_ENV flag controls development vs production behavior

The application follows a clean separation of concerns with shared types between frontend and backend, ensuring type safety throughout the entire stack. The modular component architecture makes it easy to extend features and maintain consistency across the user interface.