# Design Guidelines: Ayush Sharma - Political Consultant Portfolio

## Design Approach
**Reference-Based Approach** drawing inspiration from professional service portfolios (agency-style layouts) and LinkedIn's professional networking aesthetic. This portfolio must establish immediate credibility and trust with political clients while showcasing social media expertise.

## Layout System
**Spacing Framework:** Use Tailwind units of 4, 6, 8, 12, and 16 for consistent rhythm throughout.
- Section padding: py-16 md:py-24 for major sections
- Component spacing: gap-8 for grids, space-y-6 for stacked content
- Container: max-w-7xl mx-auto px-4 for all sections

## Typography Hierarchy
**Font Families:** 
- Headings: Inter (700, 600 weights) - professional, modern
- Body: Inter (400, 500 weights) - excellent readability

**Scale:**
- Hero Headline: text-5xl md:text-6xl font-bold
- Section Headings: text-3xl md:text-4xl font-bold
- Subsection Headings: text-xl md:text-2xl font-semibold
- Body Text: text-base md:text-lg
- Small Text/Captions: text-sm

## Core Layout Structure

### Hero Section (Full viewport height: min-h-screen)
- Two-column layout on desktop (grid-cols-1 lg:grid-cols-2)
- Left: Professional profile photo (circular, w-64 h-64 md:w-80 md:h-80, shadow-2xl)
- Right: Headline + Tagline + Primary CTA
- Headline: "Political Consultant & Social Media Manager" 
- Subheadline: "Empowering Political Leaders with Strategic Social Media Campaigns"
- CTA: Large button "Schedule a Consultation" with secondary "View My Work"
- Trust indicator: "Trusted by MLAs, MPs & Political Leaders"

### About Section
- Single column, max-w-4xl centered
- Professional summary paragraph
- Education callout box highlighting MCA from DAVV University
- Grid of key strengths (2 columns on mobile, 4 on desktop)

### Experience Section
- Timeline-style layout with cards
- Each experience card includes: Role, Organization, Duration, Key bullet points
- Highlight Janmat Political Consulting and election campaign work
- Icons for each role type (social media, campaign management, leadership)

### Services Section
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Service cards with icons from Heroicons
- Services: Social Media Management, Digital Campaign Planning, Team Management, Media Monitoring, Booth Level Management, Content Creation
- Each card: Icon + Title + 2-3 bullet points
- Hover effect: subtle lift (transform hover:scale-105)

### Portfolio/Work Samples Section
- Masonry-style grid showcasing campaign work
- Integration with Google Drive links (embedded previews where possible)
- Each portfolio item: Thumbnail + Title + "View Work" link button
- Filter tabs if multiple categories emerge

### Skills Section
- Two-column layout: Political Skills | Technical Proficiency
- Badge-style skill tags with subtle borders
- Political Skills: Team Management, Leadership, Social Media Management, Ground Survey, Media Monitoring
- Group related skills together

### Contact Section
- Split layout: Contact form (left 60%) + Info card (right 40%)
- Form fields: Name, Email, Phone, Service Interest (dropdown), Message
- Info card displays: Email, Phone, Location (Indore, MP)
- Add WhatsApp quick contact button
- Social media links if available

### Footer
- Three-column layout on desktop
- Column 1: Brief tagline + location
- Column 2: Quick links (Services, About, Portfolio, Contact)
- Column 3: Contact info
- Copyright notice centered below

## Component Library

**Navigation:**
- Sticky header with logo/name on left
- Desktop: Horizontal nav links (About, Services, Experience, Portfolio, Contact)
- Mobile: Hamburger menu with slide-out drawer
- CTA button in nav: "Get In Touch"

**Buttons:**
- Primary: Solid, rounded-lg, px-8 py-3, font-semibold
- Secondary: Outlined with border-2, same padding
- Hover states: Slight scale and shadow increase

**Cards:**
- Rounded-xl borders with shadow-lg
- Padding: p-6 md:p-8
- Subtle border for depth

**Form Elements:**
- Rounded-lg inputs with border
- Focus: ring effect
- Labels: font-medium, mb-2
- Consistent height: h-12 for inputs

## Images

**Hero Image:** Professional profile photo provided by client (circular frame, prominent placement, shadow effect)

**Portfolio Thumbnails:** Screenshots/previews from Google Drive work samples (responsive aspect ratio, object-cover)

**Section Backgrounds:** Subtle gradient overlays for hero section only

**Icons:** Use Heroicons for all UI icons (social media, services, contact methods)

## Animation Strategy
Minimal, purposeful animations only:
- Fade-in on scroll for section headers
- Gentle hover lifts on cards (transform scale)
- Smooth scroll for navigation links
- No distracting parallax or complex animations

## Responsive Breakpoints
- Mobile-first approach
- Key breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Single column on mobile, multi-column on tablet+
- Navigation collapses to hamburger below md
- Hero stacks vertically on mobile

## Key Design Principles
1. **Credibility First:** Professional, clean aesthetic that builds trust
2. **Results-Oriented:** Showcase experience and concrete achievements
3. **Mobile-Optimized:** Politicians are always on the move
4. **Clear CTAs:** Multiple touchpoints for contact throughout
5. **Visual Hierarchy:** Guide eye from hero → services → portfolio → contact