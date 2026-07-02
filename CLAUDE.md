# DEEVA Nail Boutique — Project Notes

## Stack
- React + TypeScript + Vite (vite@8.1.0)
- Tailwind CSS
- Deployed on Cloudflare Pages via GitHub (auto-deploy через deploy hook)
- Domain: deevanailboutique.com

## Rules
- OG images must be JPG (not webp) — Facebook and Telegram don't support webp for previews
- All prices are centralized in `src/data/prices.ts` — never hardcode prices in components
- Instagram handle: `deeva_nailboutique` (underscore, not dot)
- `.npmrc` has `legacy-peer-deps=true` — required for Cloudflare build (vite@8 peer deps conflict)

## Key files
- `index.html` — OG tags, schema.org (NailSalon + FAQPage), favicon
- `public/og-image.jpg` — OG image (1920×1080 JPG)
- `public/robots.txt` + `public/sitemap.xml` — SEO
- `src/data/prices.ts` — single source of truth for all prices
- `src/components/sections/BrandStory.tsx` — portrait video + horizontal photo strip
- `src/components/sections/Hero.tsx` — auto-rotating images, static title only
