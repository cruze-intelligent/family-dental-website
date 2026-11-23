# Family Dental Clinic, Gulu: website

A static website for Family Dental Clinic (opposite Holy Cross Church, Kanyagoga, Gulu City), built on the design in `family-dental-demo.html`. Content comes from the clinic's current site, visitfamilydentalclinic.com.

## Pages

| File | Content |
|---|---|
| `index.html` | Hero, free-consultation band, featured services, why us, founder story, Google reviews, dental tips, medical branch, call to action |
| `about.html` | Founder story, vision, mission, values, why choose us, photo gallery |
| `services.html` | All 15 dental services in 5 groups, plus a treatment FAQ |
| `medical-branch.html` | Family Medical Centre (Kirombe, Juba Road): medical, laboratory, sonography and dental services, contact details and map |
| `blog.html` and `blog-*.html` | Dental tips index and three articles |
| `contact.html` | Booking form (sends via WhatsApp), contact details, map, both locations, FAQ |

Shared files: `assets/css/style.css`, `assets/js/main.js`, and images in `assets/img/`.

## How it works

- No build step is needed. Open `index.html` in a browser, or upload the whole folder to any static host (Netlify, GitHub Pages, cPanel and so on).
- The booking form opens WhatsApp with a pre-filled message. The number is set by `WA` in `assets/js/main.js`.
- A "Book →" link can preselect a service with `contact.html?service=Braces#book`, or a branch with `?branch=Medical`.

## Before going live, confirm these with the clinic

- Sunday hours for the dental clinic. The current site only lists Mon to Sat, 8am to 8pm, so the new site shows Sunday as closed.
- Names, titles and photo permission for the dentists. The current site names nobody except "Doc Ronald", who wrote the gum-disease article.
- Prices, payment methods (cash, Mobile Money) and insurance partners, if the clinic wants to publish them.
- Social media links. None were found on the current site.
