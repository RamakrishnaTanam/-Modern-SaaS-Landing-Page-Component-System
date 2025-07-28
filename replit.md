# Replit.md

## Overview

This is a comprehensive full-stack React application featuring a stunning SaaS landing page for "ADmyBRAND AI Suite" - an AI-powered marketing automation platform. Built with modern 2025 design trends including glassmorphism effects, smooth animations, and responsive design. The application includes 15+ reusable UI components, performance optimizations, and a complete component library following current best practices.

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
- **Navigation**: Fixed glassmorphism header with smooth scroll navigation
- **Hero Section**: Interactive hero with video component and gradient backgrounds
- **Features**: Grid layout showcasing AI capabilities with hover animations
- **Stats**: Animated performance metrics with counter animations
- **Pricing**: Interactive pricing calculator with monthly/annual toggle
- **Testimonials**: Customer reviews carousel with glassmorphism cards
- **FAQ**: Expandable accordion with smooth animations
- **Blog Section**: Resource articles with lazy-loaded images
- **CTA Banner**: Conversion-focused call-to-action section
- **Contact Form**: Lead capture form with comprehensive validation

#### UI System & Component Library (15+ Components)
- **Core Components**: Button, Card, Modal, Input, Select, Textarea
- **Advanced Components**: Glassmorphism, GradientText, LazyImage, LoadingSpinner
- **Interactive Components**: PricingCalculator, FeatureCard, TestimonialCard, FAQItem
- **Layout Components**: SectionHeader, CTABanner, HeroVideo
- **Performance Components**: AnimatedCounter, ScrollProgress, MetaTags
- **Design System**: 2025 trends with glassmorphism, gradient effects
- **Animations**: Framer Motion with smooth transitions and scroll animations
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

## Recent Changes (January 2025)

✓ Built comprehensive component library with 15+ reusable components
✓ Implemented modern 2025 design trends with glassmorphism effects
✓ Added performance optimizations including lazy loading and scroll progress
✓ Created interactive elements: pricing calculator, animated counters, hero video
✓ Added SEO optimization with meta tags and semantic HTML structure
✓ Integrated smooth animations using Framer Motion throughout
✓ Built blog/resources section with lazy-loaded images
✓ Added comprehensive form validation and error handling
✓ Implemented responsive design following mobile-first approach

The application showcases modern SaaS landing page best practices with a focus on conversion optimization, visual appeal, and technical performance. The modular component architecture ensures maintainability and consistency across the user interface.