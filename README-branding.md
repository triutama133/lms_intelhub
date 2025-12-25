Branding changes — Integrated Learning Hub

Summary:
- Site name changed to: Integrated Learning Hub
- Primary palette: teal (`--primary: #0ea5a4`) with amber accent
- Global styles in `app/globals.css` updated; added `.btn-primary` helper
- Placeholder logo: `public/logo.svg` (simple SVG placeholder)
- Replaced references to old ILMI branding in core pages and headers
- Student pages (`app/student/*`) updated to use teal/primary palette and `btn-primary` for CTAs

Files touched (high level):
- `app/layout.tsx`, `app/globals.css`
- `app/home/page.tsx`, `app/login/page.tsx`
- `app/components/StudentHeader.tsx`, `app/components/TeacherHeader.tsx`
- `app/student/dashboard/page.tsx`, `app/student/courses/page.tsx`, `app/student/home/page.tsx`
- `public/manifest.json`, `public/sw.js`, `public/logo.svg`

Notes & next steps:
- Replace `public/logo.svg` with a proper brand logo (PNG/SVG) when available.
- Consider updating remaining teacher/admin pages to the new palette for full consistency.
- Run the app locally and test all flows (login, header, student workflows) to verify visual consistency.

How to test locally:
1. Start dev server:

```bash
npm run dev
```

2. Open `http://localhost:3000` and verify header says "Integrated Learning Hub" and student pages use teal accents.
