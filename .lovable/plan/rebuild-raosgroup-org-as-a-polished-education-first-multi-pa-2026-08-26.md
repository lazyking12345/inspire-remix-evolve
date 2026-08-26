# Rebuild raosgroup.org as a polished, education-first multi-page site

Goal: keep everything real from your current site — the Rao's Group story, admission steps, branch list, learning pathways, gallery images, contact details — and rebuild it as a modern, warm, credible school website with a proper colour system and clear navigation. No stock imagery or invented content: all photos come from `raosgroup.org/images/...`, all text from your existing pages.

## What's weak today (from reading the live site)

- Template leftovers still in the markup: links to `youtube.com/templatemo`, `mailto:info@company.com`, `mailto:donate@charity.org`, `tel:120-240-9600`, and alt text like "African woman pouring water" on a campus photo.
- Every "Learning Pathway" card links to `donate.html` instead of a curriculum page; the gallery tiles all point at one generic `student-detail.html`.
- No real Contact page (`contact.html` is a 404) even though the header links exist.
- Testimonials use stock avatar portraits ("portrait-young-redhead-bearded-male.jpg") that don't match an Indian school in Telangana — these read as fake.
- Colour and typography are default-template; nothing signals "school" or "Rao's Group".
- The homepage does everything at once, so the 1985 founder legacy and the 25+ branch network — your strongest trust signals — get buried.

## Pages

| Route | Content |
|---|---|
| `/` | Hero slider (your 3 slide images), pathways, key numbers (10,000+ students, since 1985, branch count), admission overview, campus highlights, testimonials, enquiry CTA |
| `/about` | Full legacy story: Mr. Prabhakar Rao Polsani (founder, 1985 Kukatpally), Mr. Nidhin Rao (2010 onward), vision statement, chairman photo, Rao's logo |
| `/curriculum` | The three pathways expanded — Preschool Journey, Foundational Learning, Adolescent Development |
| `/campus-life` | Gallery organised into Sports / Academics / Science Fair, plus classrooms, teaching staff, campus facilities |
| `/admissions` | The 6-step process as a proper stepper, plus the enrollment form (name, class, branch, mobile, email, message) |
| `/branches` | All branch names from your form as a searchable list |
| `/careers` | Content from your existing careers page |
| `/contact` | Real phone (+91 93922 61228), `srprincipal@raosgroup.com`, WhatsApp link, branch enquiry — fixes the current 404 |

Shared header with nav + "Enquire Now" button, and a footer with real contact info only.

## Design direction

Since you want a better colour code and a more educational feel, the first build step is to show you 2–3 rendered design directions to pick from — all built around a warm, trustworthy palette (deep indigo/teal academic base with a warm accent), a readable display+body font pairing, generous whitespace, and photo-led sections. Nothing gets built site-wide until you choose one.

## Content decisions I need to make honestly

- **Testimonials**: I'll keep the four quotes (A. Priyanka, S. Raghav, N. Anjali, K. Vidhya) but drop the mismatched stock avatars and use initials-in-a-circle instead.
- **Any number I can't verify** (exact branch count, award claims) will be stated only from what your site already says — "10,000+ students", "since 1985", "leading school chain in Telangana".
- **Placeholder junk removed**: templatemo, company.com, charity.org, the fake phone number.

## Technical notes

- TanStack Start file routes under `src/routes/`, one file per page, each with its own `head()` title/description/og tags for search and sharing.
- Colour tokens defined as oklch variables in `src/styles.css` and mapped through `@theme inline`; no hardcoded colour classes in components.
- Images are hot-linked from `https://raosgroup.org/images/...` (your own assets), lazy-loaded, with accurate alt text.
- Enrollment/contact forms render and validate on the client. They will **not** actually send anywhere yet — submitting needs a backend (Lovable Cloud) to store enquiries or email them. Say the word and I'll add that; otherwise the form shows a success state without delivery.
- Shared components: `SiteHeader`, `SiteFooter`, `SectionHeading`, `Gallery`, `EnquiryForm`.
- Structured data (`Organization` / `EducationalOrganization` JSON-LD) on the homepage.

## Out of scope unless you ask

- Sending form submissions / storing enquiries (needs Lovable Cloud)
- Per-branch detail pages
- Fee payment or donation processing
- Uploading new photography
