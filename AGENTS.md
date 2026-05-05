# AGENTS.md — Digital Wedding Invitation Agent

## Overview

This agent builds a **mobile-first digital wedding invitation web app** for **Adinda & Adi**. The output is a Next.js single-page scrollable application that runs in the browser and can be shared via link.

The invitation is an elegant dark-themed Indonesian wedding invitation featuring animated sections, love story, couple profiles, and a dress code section.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | [Next.js](https://nextjs.org/) (App Router) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) |
| **Deployment** | Vercel (free tier) |
| **Data Persistence** | `localStorage` (no backend required) |

### Why This Stack
- Next.js on Vercel = free static/SSG deploy with zero config
- Tailwind v4 = utility-first, performant, no CSS bloat
- Framer Motion = declarative, smooth scroll-reveal & entrance animations

### Key Rules for Implementation
- Use `"use client"` directive on all interactive components (music toggle, scroll)
- Use `next/font` for Google Fonts (no `<link>` tag needed)
- All animations via Framer Motion `motion.*` components and `useInView` / `useAnimation` hooks
- No CSS keyframes — delegate all animations to Framer Motion
- Use `variants` pattern for consistent enter/exit animation definitions
- Tailwind v4 config: use `@import "tailwindcss"` in global CSS (no `tailwind.config.js` needed for v4 unless customizing tokens)

### File Structure
```
wedding-001/
├── app/
│   ├── layout.tsx          # Root layout: font, metadata, global styles
│   ├── page.tsx            # Single page — composes all section components
│   └── globals.css         # Tailwind v4 import + CSS custom properties
├── components/
│   ├── Hero.tsx            # Cover section
│   ├── Profiles.tsx        # Bride & Groom profiles
│   ├── WeddingDetails.tsx  # Akad & Resepsi schedule
│   ├── LoveStory.tsx       # Timeline / Opening letter
│   ├── Gallery.tsx         # Polaroid photos
│   ├── Poem.tsx            # Poem / love letter section
│   ├── DressCode.tsx       # Dress code section
│   └── FloatingNav.tsx     # Fixed floating nav (top, music, read mode)
├── lib/
│   └── config.ts           # weddingConfig — single source of truth
├── public/
│   ├── music.mp3           # Background music
│   ├── photo1.jpg          # Couple photos
│   └── ...
└── AGENTS.md               # This file
```

---

## Design Reference Summary

The invitation consists of the following **sections in order**:

| # | Section | Key Content |
|---|---------|-------------|
| 1 | **Hero / Cover** | Couple names, wedding date badge, floral line art decoration |
| 2 | **Bride & Groom Profiles** | Full name, parents' names, invitation text |
| 3 | **Wedding Details** | Date, time, venue, map link |
| 4 | **Love Story / Opening Letter** | Narrative prose, Indonesian language |
| 5 | **Gallery / Photos** | Polaroid-style couple photos, scrapbook aesthetic |
| 6 | **Our Poem** | A short romantic poem displayed on a postcard/letter visual |
| 7 | **Dress Code** | Short note encouraging guests on attire |
| 8 | **Share Your Blessing** | Name input, message textarea, send button |

---

## Visual Design System

### Color Palette
```
Background:   #1a0a08  (very dark brown/maroon)
Surface:      #2a1208  (slightly lighter dark brown)
Text Primary: #f0e8e0  (off-white / cream)
Text Muted:   #c8b8a8  (warm light gray)
Accent:       #d4c5b5  (muted rose-cream for decorative elements)
Border:       rgba(255,255,255,0.1)
```

### Typography
- **Display / Script**: Italic serif or cursive font for headings (`Cormorant Garamond` or `Dancing Script`)
- **Body**: Clean sans-serif for readable content (`Lato`, `Montserrat`, or `Inter`)
- **Accent**: Uppercase tracking for labels and small caps
- Use `next/font/google` to load fonts (no external `<link>` tags)

### Layout
- Mobile-first: max-width ~430px, centered on desktop
- Full-width sections with generous vertical padding (min `py-20`)
- Text centered by default
- Sections separated by subtle dividers or negative space

### Decorative Elements
- Floral line-art (SVG magnolia/botanical branches) in corners
- Lace texture strip as a decorative border between sections
- Polaroid-style photo frames (white border + slight rotation)
- Postcard/letter visual for poem section
- Date badge with dotted oval border on the cover

---

## Floating Navigation Bar

A fixed right-side floating bar must be included with these buttons:
- **Top** (↑): Scroll to top
- **Music** (♪): Toggle background music on/off
- **Read**: Toggle font size / reading mode

Implementation: `FloatingNav.tsx` — `"use client"` component using `useState` + `useRef` for audio.

---

## Wedding Data (Source of Truth)

### Couple
| Field | Bride | Groom |
|-------|-------|-------|
| **Name (short)** | Adinda | Adi |
| **Full Name** | Adinda Alfianty Fatrisini | Adi Saputra |
| **Position** | Putri ke-1 | Putra ke-4 |
| **Father** | Hj. Ritno Supriyadi | Sarwadi |
| **Mother** | Enung Camirah | Sarnah |

### Venue & Address
```
Mega Regency Blok D60/08
RT 08 / RW 15
Desa Sukaragam, Kecamatan Serang Baru
Kabupaten Bekasi
```

### Schedule
| Event | Time | Notes |
|-------|------|-------|
| **Akad** | 09.00 – 10.00 WIB | Minggu, 28 Juni 2026 |
| **Resepsi** | 10.00 – Selesai | Minggu, 28 Juni 2026 |

### Maps
```
https://maps.google.com/?q=-6.388819,107.114693
```

---

## Data Schema

### Invitation Config (`lib/config.ts`)
```ts
export const weddingConfig = {
  bride: {
    name: "Adinda",
    fullName: "Adinda Alfianty Fatrisini",
    position: "Putri ke-1",
    fatherName: "Hj. Ritno Supriyadi",
    motherName: "Enung Camirah",
  },
  groom: {
    name: "Adi",
    fullName: "Adi Saputra",
    position: "Putra ke-4",
    fatherName: "Sarwadi",
    motherName: "Sarnah",
  },
  akad: {
    date: "Minggu, 28 Juni 2026",
    time: "09.00 – 10.00 WIB",
    venue: "Mega Regency Blok D60/08",
    address: "RT 08/RW 15, Desa Sukaragam, Kec. Serang Baru, Kab. Bekasi",
    mapsUrl: "https://maps.google.com/?q=-6.388819,107.114693",
  },
  resepsi: {
    date: "Minggu, 28 Juni 2026",
    time: "10.00 – Selesai",
    venue: "Mega Regency Blok D60/08",
    address: "RT 08/RW 15, Desa Sukaragam, Kec. Serang Baru, Kab. Bekasi",
    mapsUrl: "https://maps.google.com/?q=-6.388819,107.114693",
  },
  openingLetter: `Kami tidak memulai dengan cerita yang indah.

Bahkan di awal, kami hanyalah dua orang asing yang berjalan di arah masing-masing, tanpa pernah menyangka akan dipertemukan dalam satu takdir yang sama.

Waktu mempertemukan kami dalam keadaan yang tidak sempurna. Ada luka yang belum sepenuhnya sembuh, ada cerita lama yang masih tersisa.

Namun justru di situlah kami belajar — bahwa Allah tidak mempertemukan tanpa alasan. Kami pun memahami, bahwa cinta yang baik bukan yang tergesa-gesa, melainkan yang dipersiapkan dengan kesungguhan. Bukan hanya tentang bersama, tapi tentang bagaimana saling membawa menuju kebaikan dan ridha-Nya.

Hari ini, kami memilih untuk melangkah dengan niat yang lebih serius.

Mengikat bukan hanya perasaan, tetapi juga tanggung jawab dalam sebuah janji suci pernikahan.

Semoga langkah ini menjadi awal ibadah panjang, yang tidak hanya menyatukan kami di dunia, tetapi juga kelak di akhirat dalam ridha Allah SWT.`,
  poem: [
    "For as long as the sun sets and the moon rises,",
    "it is you that I want in all of my tomorrows.",
  ],
  dressCode: "We kindly encourage our guests to wear your best & comfiest outfit.",
  music: {
    url: "/music.mp3",
    autoplay: false,
  },
  photos: [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",
  ],
} as const;
```

---

## Section Specs

### 1. Hero / Cover
```
Content:
  - Small label: "Adinda & Adi" (uppercase, letter-spaced)
  - Large script heading: "we are getting married"
  - Date badge: oval dotted border with date "28.06.26"
  - Floral decoration: top-right corner botanical SVG

Animation (Framer Motion):
  - Hero text: fadeIn + slideUp on mount (staggered children)
  - Date badge: scale pulse loop (keyframes via Framer)
```

### 2. Bride & Groom Profiles
```
Content (repeat for each person):
  - Ampersand (&) decorative divider
  - Full name in large serif
  - "Putri ke-1 / Putra ke-4 dari [Father] & [Mother]"
  - Vertical divider line
  - Invitation tagline in Indonesian

Layout: stacked vertically, one per screen
Animation: slide in from left/right alternating (Framer Motion whileInView)
```

### 3. Wedding Details
```
Content:
  - Akad: 09.00–10.00 WIB, Minggu 28 Juni 2026
  - Resepsi: 10.00–Selesai, Minggu 28 Juni 2026
  - Venue: Mega Regency Blok D60/08, RT 08/RW 15,
           Desa Sukaragam, Kec. Serang Baru, Kab. Bekasi
  - "Buka Maps" button → maps.google.com/?q=-6.388819,107.114693
  - "Tambah ke Kalender" button → Google Calendar deep link

Style: card with border, icon per detail row
Animation: fade + slide up on scroll (whileInView)
```

### 4. Love Story / Opening Letter
```
Content:
  - Section heading: "Cerita Kami"
  - Full openingLetter prose (Indonesian) — rendered as paragraph blocks
  - Floral vines decoration alongside

Style: cream/aged paper card feel on dark background
Animation: paragraph blocks stagger in as user scrolls (Framer Motion staggerChildren)
```

### 5. Gallery / Photos
```
Content:
  - 4–6 couple photos in Polaroid frames
  - Mixed orientations: some straight, some rotated ±3–5deg
  - "Getting Married" label scattered among photos

Style:
  - White Polaroid frame: 4px solid white, slight box-shadow
  - Scrapbook/collage arrangement
Animation: each Polaroid pops in with scale + rotate on whileInView
```

### 6. Our Poem
```
Content:
  - Section label: "Our Poem"
  - Poem lines on a letter/postcard visual

Poem:
  "For as long as the sun sets and the moon rises,
   it is you that I want in all of my tomorrows."

Style:
  - Aged paper / cream background card
  - Handwritten-style font (Dancing Script)
  - Postage stamp decoration in corner
  - Envelope open animation on scroll (Framer Motion)
```

### 7. Dress Code
```
Content:
  - Heading: "Dress Code"
  - Text: "We kindly encourage our guests to wear your best & comfiest outfit."
  - Optional: color swatch palette

Style: simple, centered, minimal
Animation: fade in on whileInView
```

---

## Framer Motion Patterns

### Section Reveal (used on every section)
```tsx
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// Usage
<motion.section
  variants={sectionVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
```

### Staggered Children
```tsx
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
```

### Date Badge Pulse
```tsx
<motion.div
  animate={{ boxShadow: ["0 0 0 0px rgba(255,255,255,0.3)", "0 0 0 8px rgba(255,255,255,0)"] }}
  transition={{ duration: 2, repeat: Infinity }}
/>
```

---

## Agent Behavior Guidelines

### When building the invitation:
1. **Always read `weddingConfig`** from `lib/config.ts` as the single source of truth
2. **Never hardcode** couple names, dates, or venues in JSX — always pull from config
3. **Generate all sections** in order: Hero → Profiles → Details → Love Story → Gallery → Poem → Dress Code
4. **Mobile-first**: design at 390px width, test on larger screens
5. **Dark theme**: default background must be `#1a0a08`
6. **Floral SVG**: include at minimum one botanical SVG on the hero and one on the poem section
7. **All animations via Framer Motion** — no raw CSS keyframes for entrance animations

### When customizing for a new couple:
1. Update `lib/config.ts` only — no changes needed in components
2. Replace photo assets in `public/`
3. Optionally replace `public/music.mp3`

### When adding new sections:
1. Create a new component in `components/`
2. Wrap root element in `motion.section` with `whileInView` variants
3. Import and render in `app/page.tsx`
4. Add any dynamic data to `weddingConfig` in `lib/config.ts`

---

## Example Output Check

After building, verify these items:
- [ ] Hero section shows "Adinda & Adi" and date badge "28.06.26"
- [ ] Bride profile: Adinda Alfianty Fatrisini, putri ke-1 dari Hj. Ritno Supriyadi & Enung Camirah
- [ ] Groom profile: Adi Saputra, putra ke-4 dari Sarwadi & Sarnah
- [ ] Akad: 09.00–10.00 WIB | Resepsi: 10.00–Selesai | Minggu, 28 Juni 2026
- [ ] Venue address correct, "Buka Maps" links to `-6.388819,107.114693`
- [ ] Opening letter prose appears in Indonesian, full text
- [ ] Scrolling reveals each section with Framer Motion animation
- [ ] Floating nav buttons visible and functional
- [ ] Music toggle present (even if no audio file yet)
- [ ] Page renders correctly on mobile (390px) and desktop

---

## Notes for Agent

- **Shared link**: ensure the invitation works without any login or authentication
- **Background music**: must NOT autoplay — browser policy requires user gesture first
- **Language**: UI text in Indonesian (Bahasa Indonesia); section headings may use English for elegance
