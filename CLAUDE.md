# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an authentic vintage macOS-themed portfolio website built with React, TypeScript, and Vite. The design faithfully recreates the classic Mac OS X Aqua interface with Frutiger Aero aesthetic, featuring:

- **Classic Mac OS X blue gradient background** - The iconic blue wallpaper from early OS X
- **Functional menu bar** - Top system menu with Apple logo, application menus, and system icons
- **Draggable Aqua windows** - Brushed metal windows with authentic title bars and optional toolbars
- **Enhanced dock** - Bottom dock with magnification effect, icon reflections, and 3D perspective
- **Finder-style welcome window** - Sidebar navigation with proper Aqua styling

## Development Commands

```bash
# Install dependencies
npm i

# Start development server (runs on http://[::]:8080)
npm run dev

# Build for production
npm run build

# Build in development mode
npm run build:dev

# Lint the codebase
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Core UI Pattern: Authentic macOS Desktop Interface

The application recreates a complete macOS desktop experience:

- **MenuBar.tsx** (`src/components/MenuBar.tsx`) - Top system menu bar with Apple logo, application menus (Finder, File, Edit, View, Window, Help), and system icons (Search, Battery, WiFi, Volume, Time)
- **Index.tsx** (`src/pages/Index.tsx`) - Main desktop with classic Mac OS X blue gradient background, manages window state and z-index ordering
- **Window.tsx** (`src/components/Window.tsx`) - Authentic Aqua windows with:
  - Brushed metal gradients and proper shadows
  - Three-button controls (red/yellow/green) with hover icons
  - Optional toolbar with navigation and view buttons
  - Draggable via `react-draggable` with bounds checking
- **Dock.tsx** (`src/components/Dock.tsx`) - Enhanced dock with authentic macOS behavior:
  - Magnification effect based on mouse proximity
  - Icon reflections underneath (mirror effect)
  - 3D perspective and glass effect
  - Active indicator dots
  - Smooth animations and tooltips
- **FinderWelcome.tsx** (`src/components/FinderWelcome.tsx`) - Authentic Finder window with:
  - Left sidebar navigation (Home, Applications, Favorites, Recent, Devices)
  - Main content area with brushed metal styling
  - Proper Finder title bar

### Window Management

Windows are managed via state in `Index.tsx`:
- Each window has a unique ID, z-index for stacking order
- Opening a window adds it to `openWindows` array with a new z-index
- Clicking/focusing a window brings it to front by assigning the highest z-index
- Windows are positioned with cascading offsets for visual organization

### Content Windows

Each section has its own window component in `src/components/windows/`:
- **HomeWindow.tsx** - Landing/intro content
- **AboutWindow.tsx** - About me section
- **JourneyWindow.tsx** - Career/education timeline
- **WorkWindow.tsx** - Portfolio/projects showcase
- **ContactWindow.tsx** - Contact form using EmailJS

### Styling System

- **Tailwind CSS** for utility classes with custom theme extensions
- **Inline styles** for authentic Aqua aesthetics:
  - Brushed metal gradients (HSL-based grays)
  - Glass/transparency effects with backdrop blur
  - Precise shadows and inset highlights
  - 3D button effects with multiple shadow layers
- **Custom font**: "Luxurious Script" for stylized first letters
- **Color scheme**:
  - Background: Classic Mac OS X blue gradient (#5B92C6 to #2F5980)
  - Brushed metal: Subtle gray gradients with white highlights
  - Accent: Blue for active states and selections
  - System colors: Authentic traffic light buttons (red #FF5F57, yellow #FFBD2E, green #28CA42)

### Path Aliases

Uses `@/` alias for `src/` directory:
```typescript
import { Window } from "@/components/Window";
import { cn } from "@/lib/utils";
```

### EmailJS Integration

The contact form (`ContactWindow.tsx`) requires environment variables:
```
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```

These should be configured in a `.env` file (not committed to the repo).

### Dock Magnification

The dock uses mouse proximity detection to create the authentic macOS magnification effect:
- Calculates distance from mouse to each icon
- Applies cubic bezier scaling based on proximity
- Maximum 1.8x scale for closest icon
- Effect activates when mouse is within 100px of dock

### TypeScript Configuration

The project uses lenient TypeScript settings:
- `noImplicitAny: false`
- `strictNullChecks: false`
- `noUnusedLocals: false`
- `noUnusedParameters: false`

When adding new features, maintain this configuration unless explicitly asked to tighten type safety.

### Component Library

Built on **shadcn/ui** with Radix UI primitives. All UI components are in `src/components/ui/`. Prefer using existing shadcn components before creating custom ones.

### State Management

- React hooks (`useState`) for local component state
- **TanStack Query** (`@tanstack/react-query`) available for async data fetching (configured in `App.tsx`)
- No global state management library currently in use

## Design Guidelines

When modifying or adding features, maintain authentic Mac OS X Aqua principles:

1. **Brushed Metal Aesthetic**:
   - Use subtle gray gradients (HSL 210 range)
   - Add white highlights at the top (inset shadows)
   - Include proper depth with multiple shadow layers

2. **Glass Effects**:
   - Use `backdrop-blur` for translucency
   - Layer gradients for depth (light to slightly darker)
   - Add white borders/highlights for gloss

3. **3D Button Effects**:
   - Use gradient backgrounds (lighter at top)
   - Add inset white highlight shadow at top
   - Include depth shadow below
   - Consider active/hover states with subtle changes

4. **Color Palette**:
   - Background: Blue gradient matching Mac OS X default
   - Windows: Brushed metal grays
   - Active elements: Blue (#3B82F6 range)
   - System buttons: Traffic light colors (exact hex values in code)

5. **Typography**:
   - Use system fonts for authenticity
   - Add white text-shadow for embossed effect on metal backgrounds
   - Keep font sizes small and clean (12-13px for UI elements)

6. **Animations**:
   - Smooth, natural transitions (200-300ms)
   - Cubic bezier easing for organic feel
   - Magnification effects should be proximity-based
   - Fade and scale for window open/close

7. **Responsive Design**: Components work on mobile but optimize for desktop experience
8. **Window Behavior**: New sections should be window components with proper z-index management
9. **Icons**: Use `lucide-react` for consistency

## Important Files

- `src/pages/Index.tsx` - Main desktop interface with blue background and window orchestration
- `src/components/MenuBar.tsx` - Top system menu bar (macOS-style)
- `src/components/Window.tsx` - Draggable Aqua windows with optional toolbar
- `src/components/Dock.tsx` - Enhanced dock with magnification and reflections
- `src/components/FinderWelcome.tsx` - Finder window with sidebar navigation
- `src/components/windows/` - Individual content window components
- `tailwind.config.ts` - Custom theme configuration
- `vite.config.ts` - Build configuration with path aliases

## Deployment

Build the project using `npm run build` and deploy the `dist` folder to your preferred hosting service.
