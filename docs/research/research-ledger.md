# Research Ledger

## Executive Summary

The strongest luxury safari and bespoke travel sites use immersive photography, editorial pacing, restrained copy, specialist-led inquiry, trust proof, and clear destination or experience paths. Moor's Wild Safaris should not behave like a generic booking engine. It should feel personal, locally grounded, operationally dependable, and warm enough to match the supplied sunset safari logo.

## Studied Reference Set

| Reference | URL | Why studied | Adapt for Moor's Wild Safaris | Do not copy |
|---|---|---|---|---|
| Singita | https://www.singita.com/ | Premium lodge storytelling | Editorial restraint and image-led calm | Exact layouts, copy, or lodge positioning |
| &Beyond | https://www.andbeyond.com/ | Luxury safari with impact and concierge framing | Conservation trust and personal planning tone | Brand language or proprietary flow |
| Wilderness | https://www.wildernessdestinations.com/ | Conservation-led destination storytelling | Place-led authority and generous pacing | Visual identity or navigation details |
| African Bush Camps | https://africanbushcamps.com/ | Zambia and Southern Africa relevance | Regional credibility and camp language | Camp names, photography, copy |
| National Geographic Expeditions | https://www.nationalgeographic.com/expeditions/ | High-trust editorial travel framing | Educational authority and destination context | Institutional voice |
| Abercrombie & Kent | https://www.abercrombiekent.com/ | Luxury journey hierarchy | Expert-led itinerary clarity | Luxury claims and product structure |
| Asilia Africa | https://www.asiliaafrica.com/ | Safari camps and itinerary inspiration | Experience taxonomy and warm storytelling | Hero sequence or copy |
| Go2Africa | https://www.go2africa.com/ | Consultation-driven safari planning | Specialist CTA and planning funnel | Filter mechanics or package copy |
| Natural Selection | https://naturalselection.travel/ | Characterful conservation travel | Personality without clutter | Illustration style or brand voice |
| Ker & Downey Africa | https://ker-downeyafrica.com/ | Bespoke African travel | Tailor-made language and premium trust | Package presentation |
| Micato Safaris | https://www.micato.com/ | Award-led trust | Proof placement near inquiry | Award claims |
| Jacada Travel Africa | https://www.jacadatravel.com/africa/ | Bespoke high-end travel | Human planning and destination confidence | Page structure |
| Scott Dunn Africa | https://www.scottdunn.com/africa | Specialist travel consultation | Expert reassurance and testimonial proximity | Content hierarchy |
| Black Tomato Africa | https://www.blacktomato.com/destinations/africa/ | Luxury bespoke travel | Emotional trip framing | Copy tone |
| Audley Africa | https://www.audleytravel.com/africa | Tailor-made expert planning | Clear destination education | Information density |
| ROAR AFRICA | https://www.roarafrica.com/ | High-luxury consultation | "Begin the conversation" posture | Visual polish or philanthropic language |
| Mahlatini | https://www.mahlatini.com/ | Reviews and bespoke travel proof | Review-led trust signals | Review claims |
| Yellow Zebra Safaris | https://yellowzebrasafaris.com/ | Safari specialist CTAs | Talk-to-expert conversion model | Brand voice and icons |
| Extraordinary Journeys | https://extraordinaryjourneys.com/africa/ | Transformative luxury travel | Seamless bespoke journey promise | Exact page architecture |
| Awwwards Travel | https://www.awwwards.com/websites/travel/ | Interaction and art direction benchmarks | Clean motion, strong imagery, responsive polish | Any single award-site layout |
| Awwwards Luxury | https://www.awwwards.com/websites/luxury/ | Luxury interaction patterns | Restraint, tactile detail, microinteractions | Over-animation |
| Google Search Central images | https://developers.google.com/search/docs/appearance/google-images | Image SEO guidance | Descriptive filenames and alt text | None |
| Google Search Central sitemaps | https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview | Sitemap guidance | XML sitemap and robots reference | None |
| Schema.org TravelAgency | https://schema.org/TravelAgency | Structured data reference | TravelAgency schema on homepage | Fake business details |
| W3C WCAG 2.2 | https://www.w3.org/TR/WCAG22/ | Accessibility baseline | Semantic headings, contrast, focus, reduced motion | None |
| Vercel static hosting | https://vercel.com/docs | Deployment reference | Static deployment option | Platform-specific claims |
| Netlify static hosting | https://docs.netlify.com/ | Deployment reference | Static deployment option | Platform-specific claims |
| GitHub Pages | https://docs.github.com/en/pages | Static hosting reference | Low-friction publishing path | None |
| Tailwind CSS | https://tailwindcss.com/ | Bespoke utility design benchmark | Token thinking, not dependency | Framework dependency for this static build |
| Next.js | https://nextjs.org/docs | Production React benchmark | SEO and performance ideas | Framework overhead for this empty workspace |
| Motion | https://motion.dev/ | Animation benchmark | Respectful motion principles | Dependency overhead |
| Local supplied logo | Project attachment | Brand source | Sunset orange, sepia ink, acacia, vehicle, tent | Distorted or low-contrast logo use |

## Pattern Synthesis

| Pattern | Evidence in references | Site decision |
|---|---|---|
| Cinematic hero | Singita, Asilia, Wilderness, Awwwards travel examples | Full-bleed warm hero with low-pressure inquiry CTA |
| Specialist CTA | Go2Africa, Yellow Zebra, Scott Dunn, ROAR AFRICA | "Plan Your Safari" and "Start the conversation" used throughout |
| Experience taxonomy | Asilia, Wilderness, A&K, Audley | Mobile, lodge, photo, cultural, hosted, transfers |
| Trust near action | Scott Dunn, Mahlatini, Micato | Reviews and logistics sections close to inquiry |
| Conservation or place proof | &Beyond, Wilderness, African Bush Camps | Regional knowledge and respectful travel tone |
| Subtle motion | Awwwards travel and luxury references | Reveal transitions only, reduced motion supported |
| Logistics clarity | Go2Africa, Audley, Scott Dunn | Transfers, border planning, and transport are made visible |

## Adopt, Adapt, Reject

Adopt:
- Image-led first impression.
- Bespoke inquiry as the primary conversion.
- Clear destination and experience paths.
- Trust proof close to the contact step.
- Accessibility and SEO fundamentals from the start.

Adapt:
- Luxury tone should be warm and grounded, not cold or ultra-minimal.
- Conservation and culture should be respectful, not used as generic decoration.
- Motion should add polish without hiding information.

Reject:
- Dense package grids as the main homepage.
- Fake urgency, discount pressure, and booking-engine styling.
- Stereotyped safari decoration or cliched patterns.
- Direct copying from any benchmark.

## Technology Choice

| Option | Pros | Cons | Decision |
|---|---|---|---|
| Static HTML/CSS/JS | Fast, portable, no install, ideal for empty workspace | Manual shared header/footer duplication | Chosen for this build |
| Next.js | Strong routing and metadata | Requires package setup and build tooling | Suitable future upgrade |
| Webflow/Framer style | Quick visual assembly | High risk of template feel | Rejected |

## Sitemap

- Home
- About
- Safaris / Experiences
- Mobile Safaris
- Lodge Safaris
- Photographic Safaris
- Cultural Tours
- Hosted Trips
- Transfers
- Destinations
- Gallery
- Reviews
- Contact / Plan Your Safari
- Privacy Policy
- Booking Terms

In the current static build, the individual safari types live as deep sections inside `experiences.html` so they can be promoted into dedicated pages later without changing the information architecture.
