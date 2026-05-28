# ubaydullahnayeem.com

Personal site of Ubaydullah Nayeem — Bangladeshi educator and Porichalok (Director) of Baitul Quran wa Assunnah Madrasah.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion + GSAP
- Lenis (smooth scroll)
- Supabase (blog + contact intake)

## Develop

```bash
cp .env.local.example .env.local
# fill in Supabase keys
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Database

SQL migrations live in `supabase/migrations/`. Run them in order on a fresh Supabase project.

## Deploy

Deploy to Vercel. Set the same env vars from `.env.local.example` in the project settings.
