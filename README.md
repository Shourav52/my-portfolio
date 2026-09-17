# Shorov Saha — Portfolio

A React + Vite + Tailwind CSS + Motion portfolio.

## Stack

- React 18
- Vite
- Tailwind CSS
- [Motion for React](https://motion.dev/) (`import { motion } from "motion/react"`)

## Getting started

This project was built in a sandbox without internet access, so dependencies
have **not** been installed yet. On your own machine, with Node.js 18+
installed:

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production (e.g. to deploy on Netlify or Vercel, the same way
as your other projects):

```bash
npm run build
```

This outputs a static `dist/` folder you can drag-and-drop onto
[Netlify Drop](https://app.netlify.com/drop) or deploy with the Vercel CLI /
GitHub integration.

## Project structure

```
src/
  components/   → one component per section (Navbar, Hero, About, ...)
  data/         → projects.js and skills.js — edit these to update content
  assets/       → your profile photo + real project screenshots
  App.jsx       → assembles all sections
  main.jsx      → React entry point
  index.css     → Tailwind directives + small set of custom utility classes
```

## Updating content

- **Projects**: edit `src/data/projects.js`. Each project has a `cover`
  image (shown on the card) and a `gallery` array (shown in the modal).
- **Skills**: edit `src/data/skills.js`.
- **Screenshots**: drop new images into `src/assets/projects/` and update
  the `import` paths at the top of `projects.js`.

## Notes

- The contact form uses a `mailto:` link — there's no backend wired up, so
  submitting it opens the visitor's email client with the message
  pre-filled. Swap this out for a real email service (e.g. Formspree,
  EmailJS) when you're ready.
- The GitHub section is a clean static card rather than a live stats widget
  — the public `github-readme-stats` demo endpoints are frequently
  rate-limited and show broken images, so a static card is more reliable.
