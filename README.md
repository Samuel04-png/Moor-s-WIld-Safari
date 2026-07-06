# Moor's Wild Safaris Website

Premium static website for Moor's Wild Safaris, a Zambia-based safari and travel company offering tailor-made safaris, lodge stays, mobile camps, photographic itineraries, beach holidays, hiking and trekking trips, adventure tours, cultural tours, hosted trips, and transfers across Zambia, Malawi, Zimbabwe, Botswana, and Namibia.

## What is included

- Multi-page static website: Home, About, Experiences, Destinations, Gallery, Reviews, FAQ, Contact, Privacy, and Booking Terms.
- Zambia-first destination coverage with Malawi, Zimbabwe, Botswana, and Namibia as regional operating destinations.
- Expanded service coverage for private safaris, luxury safaris, family holidays, photographic safaris, walking safaris, birdwatching, camping safaris, lodge and hotel bookings, beach holidays, hiking, adventure tours, cross-border tours, and tailor-made itineraries.
- Local brand assets copied from the supplied logo files.
- Real client safari photography and video integrated across hero, experiences, destinations, gallery, hosted support, CTA, and footer contact areas.
- Responsive CSS design system with warm safari palette, editorial typography, accessible focus states, reduced motion support, mobile navigation, and gallery layout.
- Lightweight JavaScript for navigation, reveal motion, gallery filtering, lightbox preview, centralized contact rendering, and inquiry form validation.
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
- Curated client media currently lives in `assets/images/moorsimg`, `assets/images/moorsimg2`, and `assets/images/moorsimg3`; the site uses a selected subset to avoid a gallery dump.
- Update `info@moorswildsafaris.com`, contact numbers in `assets/js/site.js`, and `https://moorswildsafaris.com/` before launch if final details change.
- Add verified guest reviews before publishing review excerpts.
- Review `privacy.html` and `terms.html` with the business before launch.

## Deployment

This is a static site. It can be deployed to Netlify, Vercel static hosting, Cloudflare Pages, GitHub Pages, or any standard web host.

Before deployment:

1. Confirm final domain and update canonical URLs plus `sitemap.xml`.
2. Confirm final email address and form handling.
3. Add verified review excerpts only when approved by the client.
4. Confirm the final client media selection and replace any image if a better place-specific asset is supplied.
5. Run the QA checklist in `docs/handoff/qa-checklist.md`.

## Image and video note

The site now uses supplied client photography and a short client video. The media is spread through the website as a journey sequence: wildlife identity, camp and lodge stays, route planning, vehicle support, destinations, hosted meals, cultural texture, and inquiry moments.
