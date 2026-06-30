# Arabella Grace — Media

An ultra-premium, dark-luxury personal media website for a cultural-media
personal brand: long-form essays, short notes, and a weekly letter.

Built as a production-quality demo. **Futuristic dark-luxury minimalism** —
deep off-black surfaces, warm ivory reading areas, and surgical champagne-gold
detailing. Type- and space-led, with no stock photography.

## Stack

- **Next.js 15** (App Router, Server Components, TypeScript)
- **Tailwind CSS 3.4.17** (pinned) + PostCSS + Autoprefixer
- **Framer Motion** for restrained scroll/hover animation
- **next/font** (Fraunces display serif + Inter UI sans)

## Pages

- `/` — hero, featured essay, recent essays, newsletter signup
- `/essays` — full archive (doubles as the newsletter archive)
- `/essays/[slug]` — typeset long-form reading page (ivory surface, ~68ch measure, drop cap, gold rule)
- `/notes` — short observations
- `/about` — single elegant column
- `/work-with-me` — premium enquiry form (client-side validation + success state, no backend)
- `/subscribe` — newsletter focus area (client-side success state)
- `/listen` — architected podcast stub (intentionally not built)

The newsletter / publishing model is reflected throughout: the Subscribe
component is reused in the nav, the footer, under every essay, and on a
dedicated page. Email capture and the enquiry form are fully client-side with
graceful success states (no backend required).

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```
