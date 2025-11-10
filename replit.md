# Ayush Sharma - Political Consultant Portfolio

## Overview

This is a professional portfolio website for Ayush Sharma, a political consultant and social media manager specializing in digital campaigns for political leaders (MLAs, MPs). The application serves as a comprehensive online presence showcasing services, experience, and work samples, with integrated contact functionality.

The site is built as a single-page application with smooth scrolling navigation between sections including Hero, About, Experience, Services, Portfolio, Skills, and Contact.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18+ with TypeScript for type safety
- Vite as the build tool and development server
- Single-page application using Wouter for client-side routing
- Component-based architecture with reusable UI elements

**UI Component System:**
- shadcn/ui component library built on Radix UI primitives
- Tailwind CSS for styling with custom design tokens
- CSS variables for theming support (light/dark mode ready)
- Inter font family for professional typography
- Responsive design with mobile-first approach

**State Management:**
- TanStack Query (React Query) for server state and API data fetching
- Local component state using React hooks
- Toast notifications for user feedback

**Design System:**
- Custom spacing framework using Tailwind units (4, 6, 8, 12, 16)
- Consistent component styling through CVA (class-variance-authority)
- Professional color palette with primary (blue), accent (orange), and neutral tones
- Shadow system for depth and elevation

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript
- ESM module system
- Development and production build configurations
- Request/response logging middleware

**API Design:**
- RESTful API endpoint (`/api/contact`) for contact form submissions
- JSON request/response format
- Schema validation using Zod

**Development Setup:**
- Hot module replacement (HMR) in development via Vite
- Custom Vite middleware integration with Express
- Runtime error overlay for debugging
- Replit-specific development plugins

### Data Storage Solutions

**Database Configuration:**
- PostgreSQL as the primary database (configured via Drizzle)
- Neon serverless Postgres driver for database connectivity
- Connection pooling with `connect-pg-simple`
- Database URL managed through environment variables

**ORM & Schema:**
- Drizzle ORM for type-safe database operations
- Schema definitions in TypeScript with Drizzle-Zod integration
- User table with UUID primary keys
- Contact form validation schema

**In-Memory Storage:**
- MemStorage implementation for development/testing
- Interface-based storage abstraction for future database migration

### External Dependencies

**Email Service:**
- Nodemailer for email delivery
- Gmail SMTP integration
- Environment-based credentials (`EMAIL_USER`, `EMAIL_PASS`)
- HTML-formatted emails with form data
- Reply-to functionality for direct client responses

**Third-Party UI Libraries:**
- Radix UI for accessible component primitives (30+ components)
- Lucide React for iconography
- date-fns for date manipulation
- cmdk for command palette functionality

**Development Tools:**
- Replit-specific plugins for development experience
- TypeScript strict mode enabled
- Path aliases configured for clean imports (`@/`, `@shared/`)

**Asset Management:**
- Static assets served from `attached_assets` directory
- Profile image loaded via Vite's asset handling
- Favicon and meta tags for SEO optimization

**Form Handling:**
- React Hook Form with Zod resolvers for validation
- Type-safe form schemas shared between client and server
- Optional fields for phone and service selection

**Portfolio Integration:**
- Google Drive links for campaign work samples
- External link handling for portfolio items
- Seven documented work samples with descriptions