# AILCN Style Guide

This document captures the implemented visual system for the AILCN marketing site.

The source of truth for the live styling is still the codebase, especially:

- [tailwind.config.ts](/Users/reggiepadin/Documents/ailcn2/tailwind.config.ts)
- [src/app/globals.css](/Users/reggiepadin/Documents/ailcn2/src/app/globals.css)
- [src/app/layout.tsx](/Users/reggiepadin/Documents/ailcn2/src/app/layout.tsx)
- [src/components](/Users/reggiepadin/Documents/ailcn2/src/components)

## Brand Direction

- Institutional, authoritative, editorial
- Professional standard, not startup landing page
- Flat visual system with no shadows, gradients, or 3D effects
- Alternating dark and light sections create the core page rhythm

## Color System

| Token | Value | Usage |
|---|---|---|
| `navy` | `#0B1A3D` | Primary dark background, header, footer, dark sections |
| `navy-soft` | `#1E3A6E` | Dark cards, secondary surfaces on navy |
| `blue` | `#3B82F6` | Primary CTAs, accent rule, emphasis |
| `off-white` | `#F8F9FB` | Light section background |
| `muted` | `#94A3B8` | Supporting text on dark backgrounds |

## Typography

- Primary font: `Inter`
- Secondary font: `Source Serif 4`
- `Inter` is used for body, navigation, buttons, headings, and general UI
- `Source Serif 4` is reserved for pull quotes and editorial emphasis
- Body text is generally `text-lg` with generous leading
- Metadata and support copy are generally `text-base` or `text-sm`
- Headings use bold weight

### Implemented Font Loading

- Fonts are loaded with `next/font/google` in [src/app/layout.tsx](/Users/reggiepadin/Documents/ailcn2/src/app/layout.tsx)
- CSS font variables:
  - `--font-inter`
  - `--font-source-serif`

## Layout And Spacing

- Horizontal page padding: `px-6`
- Standard section spacing: `py-16 md:py-24`
- Standard content width: `max-w-6xl`
- Narrow prose width: `max-w-4xl`
- Mobile breakpoint: `md` (`768px`)
- Multi-column layouts collapse to one column on mobile

### Page Rhythm

- Most pages alternate:
  - `bg-navy text-white`
  - `bg-off-white text-navy`
- This alternating pattern is the main structural signature of the site

## Headline System

- Hero headline: `text-4xl md:text-6xl`
- Section headline: `text-3xl md:text-5xl`
- Body copy: usually `text-lg leading-8`
- Supporting line under hero CTAs: `text-base leading-7`

### Section Signature

Most section headings use a blue rule below the headline:

- Height: `h-1`
- Width: `w-16`
- Color: `bg-blue`

This is implemented in [src/components/SectionHeading.tsx](/Users/reggiepadin/Documents/ailcn2/src/components/SectionHeading.tsx).

## Border Radius

- Standard radius: `rounded-2xl`
- Implemented as `1rem`
- Use consistently across cards, buttons, table containers, and overlays

## Global Styles

Defined in [src/app/globals.css](/Users/reggiepadin/Documents/ailcn2/src/app/globals.css):

- Default body background: `off-white`
- Default body text color: `navy`
- Smooth scrolling enabled
- Scroll offset added for anchored sections below the sticky header
- Selection color uses a translucent blue highlight

## Buttons

Implemented in [src/components/CTAButton.tsx](/Users/reggiepadin/Documents/ailcn2/src/components/CTAButton.tsx).

### Primary Button

- Background: `blue`
- Text: white
- Border: blue
- Hover: slightly darker blue

### Secondary Button

- Transparent background
- `border-current`
- `text-current`
- Meant to adapt to dark and light sections automatically

### Shared Button Shape

- `inline-flex`
- `rounded-2xl`
- `px-6 py-3`
- `text-base font-semibold`

## Header

Implemented in [src/components/Header.tsx](/Users/reggiepadin/Documents/ailcn2/src/components/Header.tsx).

- Sticky top navigation
- Background: `bg-navy/95`
- Uses backdrop blur
- Adds a thin bottom border after scroll
- White wordmark and nav links
- Primary CTA on desktop
- Mobile menu becomes a full-screen navy overlay

### Header Link Styling

- Base link color: `text-white/80`
- Hover: `text-white`
- Active route: `text-white`

## Hero

Implemented in [src/components/Hero.tsx](/Users/reggiepadin/Documents/ailcn2/src/components/Hero.tsx).

- Background: `navy`
- Text: white
- Eyebrow uses uppercase blue text with expanded tracking
- Body copy is constrained to `max-w-3xl`
- CTA group stacks vertically on mobile and horizontally on larger screens

## Sections

Implemented in [src/components/Section.tsx](/Users/reggiepadin/Documents/ailcn2/src/components/Section.tsx).

- Supports `navy` and `off-white` variants
- Supports standard and narrow widths
- Standard wrapper:
  - `px-6 py-16 md:py-24`
  - centered inner container

## Cards

Implemented in [src/components/Card.tsx](/Users/reggiepadin/Documents/ailcn2/src/components/Card.tsx).

- Shared shape: `rounded-2xl p-8`
- No shadow
- Strong editorial spacing inside the card

### Light Card

- Background: white
- Text: navy
- Border: `border-navy/10`

### Dark Card

- Background: `navy-soft`
- Text: white
- Border: `border-white/10`

### Card Eyebrow

- Blue
- Uppercase
- `text-sm font-semibold`
- Wide tracking

## Tables

Implemented in [src/components/ComparisonTable.tsx](/Users/reggiepadin/Documents/ailcn2/src/components/ComparisonTable.tsx).

- Rounded outer container
- Thin border that adapts to light or dark section tone
- Navy header row with white uppercase labels
- Alternating `white` and `off-white` body rows
- Body cells use `text-base leading-7`

## Footer

Implemented in [src/components/Footer.tsx](/Users/reggiepadin/Documents/ailcn2/src/components/Footer.tsx).

- Background: `navy`
- Text: white
- Three-column layout on desktop
- Single-column stack on mobile
- Bottom legal bar separated by a thin white divider

## Motion And Interaction

- No animation libraries
- No scroll-triggered effects
- Interactions are limited to subtle color transitions
- Standard transition timing: `duration-200`

## Focus And Accessibility

- All interactive elements use visible focus states
- Standard focus treatment:
  - `focus-visible:ring-2`
  - `focus-visible:ring-blue`
  - `focus-visible:ring-offset-2`
- Semantic layout uses `header`, `main`, `section`, `nav`, and `footer`

## Responsive Behavior

- Core breakpoint: `md`
- Grids collapse to single column on mobile
- Hero text scales down on smaller screens
- CTA groups stack on mobile where appropriate
- Mobile navigation uses a dedicated full-screen overlay

## Visual Guardrails

Keep future additions aligned to the current system:

- Do not add shadows
- Do not add gradients
- Do not introduce extra radii
- Do not mix in additional font families
- Do not use decorative illustrations or stock-photo placeholders
- Keep the alternating `navy` / `off-white` section rhythm intact
- Favor strong spacing and typographic hierarchy over decorative styling

## Quick Component Reference

- Header: [src/components/Header.tsx](/Users/reggiepadin/Documents/ailcn2/src/components/Header.tsx)
- Footer: [src/components/Footer.tsx](/Users/reggiepadin/Documents/ailcn2/src/components/Footer.tsx)
- Hero: [src/components/Hero.tsx](/Users/reggiepadin/Documents/ailcn2/src/components/Hero.tsx)
- Section: [src/components/Section.tsx](/Users/reggiepadin/Documents/ailcn2/src/components/Section.tsx)
- Section Heading: [src/components/SectionHeading.tsx](/Users/reggiepadin/Documents/ailcn2/src/components/SectionHeading.tsx)
- Card: [src/components/Card.tsx](/Users/reggiepadin/Documents/ailcn2/src/components/Card.tsx)
- CTA Button: [src/components/CTAButton.tsx](/Users/reggiepadin/Documents/ailcn2/src/components/CTAButton.tsx)
- Pull Quote: [src/components/PullQuote.tsx](/Users/reggiepadin/Documents/ailcn2/src/components/PullQuote.tsx)
- Comparison Table: [src/components/ComparisonTable.tsx](/Users/reggiepadin/Documents/ailcn2/src/components/ComparisonTable.tsx)
