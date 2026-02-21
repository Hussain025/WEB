# Tech Stack

## Core Technologies
- **Framework**: React 18.3.1 with TypeScript 5.5.3
- **Build Tool**: Vite 5.4.2
- **Styling**: Tailwind CSS 3.4.1 with PostCSS and Autoprefixer
- **Animations**: Framer Motion 12.34.3
- **Icons**: Lucide React 0.344.0
- **Backend**: Supabase JS 2.57.4

## Development Tools
- **Linting**: ESLint 9.9.1 with React-specific plugins
- **Type Checking**: TypeScript compiler

## Common Commands

```bash
# Development server (runs on http://localhost:5173 by default)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Type checking (no emit)
npm run typecheck
```

## Build Configuration
- Module type: ES modules
- React plugin with Fast Refresh enabled
- Lucide React excluded from optimization for better performance
- Tailwind configured to scan all HTML and TSX files in src/
