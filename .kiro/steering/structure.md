# Project Structure

## Directory Organization

```
/
├── src/
│   ├── components/     # React components
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles (Tailwind imports)
├── .kiro/              # Kiro AI configuration
├── .vscode/            # VS Code settings
├── index.html          # HTML entry point
└── [config files]      # Vite, TypeScript, Tailwind, ESLint configs
```

## Component Architecture

### Component Patterns
- **Functional components** with TypeScript interfaces for props
- **Named exports** for main components (default export used)
- **Composition**: Small, reusable components (Button, Card) composed into larger sections

### Component Categories
1. **Layout Components**: Navbar, Footer
2. **Section Components**: Hero, About, Prizes, Sponsors, ThemesRules, Coordinators
3. **Reusable Components**: Button, Card, SectionTitle

### Component Conventions
- One component per file
- Component filename matches component name (PascalCase)
- Props defined with TypeScript interfaces
- Framer Motion used for animations (motion.div, whileHover, whileInView)
- Tailwind classes for styling

## Styling Conventions
- **Dark theme**: Black background with white text as base
- **Color palette**: Orange (primary), Green (secondary), gradients for emphasis
- **Glass morphism**: `bg-white/5 backdrop-blur-lg border border-white/10`
- **Responsive**: Mobile-first with sm:, md:, lg: breakpoints
- **Animations**: Framer Motion for entrance animations and hover effects

## File Naming
- Components: PascalCase (e.g., `Hero.tsx`, `Button.tsx`)
- Config files: lowercase with dots (e.g., `vite.config.ts`)
- Styles: lowercase (e.g., `index.css`)
