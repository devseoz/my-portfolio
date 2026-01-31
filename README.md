## Features

- **Editorial Design**: Large typography, generous whitespace, and minimal
  aesthetics
- **Category Filtering**: Filter projects by UIUX, Product Design, Branding,
  3D/CGI, Graphic Design, and Poster
- **Project Detail Pages**: Dynamic routing with slug-based project pages
- **Smooth Animations**: Framer Motion animations throughout
- **Responsive Design**: Mobile-first approach with breakpoints
- **Dark Mode Support**: Automatic dark mode based on system preferences

## Tech Stack

- Next.js 16.1.6 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Shadcn/UI

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page (Hero + Featured)
│   ├── work/
│   │   ├── page.tsx            # Work page with filters
│   │   └── [slug]/
│   │       └── page.tsx        # Project detail pages
│   ├── about/
│   │   └── page.tsx            # About page
│   └── contact/
│       └── page.tsx            # Contact page
├── components/
│   ├── navigation.tsx          # Sticky navigation
│   ├── hero.tsx                # Homepage hero section
│   ├── work-filter.tsx         # Category filter component
│   ├── work-grid.tsx           # Projects grid with animations
│   ├── project-card.tsx       # Individual project card
│   ├── project-header.tsx      # Project detail header
│   ├── project-section.tsx    # Project detail sections
│   └── contact-footer.tsx     # Footer component
├── lib/
│   ├── projects.ts             # Project data and utilities
│   └── utils.ts                # Utility functions
└── public/
    └── projects/               # Project images
```
