# AILCN Site

Static marketing website for AILCN built with Next.js 14, TypeScript, and Tailwind CSS.

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

## Build for production

```bash
npm run build
```

## Swap placeholder URLs

All CTA URLs live in `src/lib/links.ts`.

Any URL using `example.com` is a placeholder and should be replaced before launch.

## Notes

- Add the final Open Graph image at `public/og-image.png`.
- Footer links for `/privacy` and `/terms` intentionally fall through to the shared 404 page for now, per the brief.
- The brief described `ComparisonTable.tsx` as a two-column component, but the pricing content requires three columns in every table. The component was implemented as a reusable comparison table that supports the required column counts without changing the page copy.
