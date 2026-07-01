# Moor's Wild Safaris Website

Premium static website for Moor's Wild Safaris, a Zambia-based safari company offering tailor-made safaris, lodge stays, mobile camps, photographic itineraries, cultural tours, hosted trips, and transfers across Southern Africa.

## What is included

- Multi-page static website: Home, About, Experiences, Destinations, Gallery, Reviews, FAQ, Contact, Privacy, and Booking Terms.
- Local brand assets copied from the supplied logo files.
- Generated project-local safari imagery for hero, lodge, camp, photography, and transfer art direction.
- Responsive CSS design system with warm safari palette, editorial typography, accessible focus states, reduced motion support, mobile navigation, and gallery layout.
- Lightweight JavaScript for navigation, reveal motion, gallery filtering, lightbox preview, and inquiry form validation.
- SEO files: `robots.txt`, `sitemap.xml`, page metadata, canonical URLs, Open Graph metadata on the homepage, and TravelAgency structured data.
- Documentation: research ledger, brand asset pack, and QA handoff checklist.

## Open locally

Open `index.html` in a browser from this folder. No package install or local server is required.

## Project structure

```text
assets/
  css/styles.css
  images/
  js/site.js
  logos/
docs/
  brand-guide/brand-asset-pack.md
  handoff/qa-checklist.md
  research/research-ledger.md
index.html
about.html
experiences.html
destinations.html
gallery.html
reviews.html
faq.html
contact.html
privacy.html
terms.html
robots.txt
sitemap.xml
```

## Content editing

- Edit page copy directly in the relevant `.html` file.
- Replace images in `assets/images/` with final client photography using the same filenames to avoid code changes.
- Update `info@moorswildsafaris.com` and `https://moorswildsafaris.com/` before launch if the final email or domain changes.
- Replace placeholder testimonials with verified guest reviews before publishing.
- Review `privacy.html` and `terms.html` with the business before launch.

## Deployment

This is a static site. It can be deployed to Netlify, Vercel static hosting, Cloudflare Pages, GitHub Pages, or any standard web host.

Before deployment:

1. Confirm final domain and update canonical URLs plus `sitemap.xml`.
2. Confirm final email address and form handling.
3. Replace placeholder review copy with verified reviews.
4. Add real client photography when available.
5. Run the QA checklist in `docs/handoff/qa-checklist.md`.

## Image note

The current safari photographs are project-local generated art-direction placeholders. They are intended to establish mood and layout until Moor's Wild Safaris supplies real trip photography.
