# Erfan — Personal Portfolio Website

An award-winning personal portfolio website engineered for **Erfan**, a self-directed full-stack developer and poster draftsman. Built to Awwwards Site-of-the-Day standards with bold Swiss constructivist typography, asymmetric 12-column grid layout, tactile print textures, Lenis smooth scrolling, and hardware-accelerated GSAP interactions.

---

## ✦ Positioning & Design Architecture

- **Discipline Ratio:** 70% Full-Stack Developer / 30% Graphic Design & Poster Draftsman.
- **Visual Aesthetic:** International Typographic Style (Swiss Brutalism) meets modern digital systems. Asymmetric grid, monumental headline scale (`clamp(3.5rem, 11vw, 10.5rem)`), tactile film-grain paper noise, and high-voltage vermilion accents.
- **Color Palette:**
  - Base Dark: `#0E0E0E` (Obsidian canvas)
  - Base Light / Paper: `#F6F3EC` (Warm archival paper)
  - Primary Accent: `#FF4B21` (International Poster Vermilion Red)
  - Secondary Accent: `#0F4C81` / `#005F73` (Deep Marine Cobalt / Teal, <10% surface area)
- **Typography System:**
  - Display / Hero Headlines: **Clash Display** (Fontshare)
  - Section Headings / Nav: **Cabinet Grotesk** (Fontshare)
  - Body / UI: **Satoshi** (Fontshare)
  - Technical Notation & Code: **JetBrains Mono** (Google Fonts)

---

## ✦ Tech Stack

- **Base Runtime:** [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation & Scroll Orchestration:** [GSAP](https://gsap.com/) (with ScrollTrigger)
- **Smooth Scroll:** [Lenis](https://lenis.darkroom.engineering/)
- **Image Optimization:** [Sharp](https://sharp.pixelplumbing.com/) (WebP generation with fallback)
- **Zero-Bloat:** Pure native DOM components, no heavy framework overhead, sub-millisecond execution.

---

## ✦ Getting Started

### 1. Installation
```bash
npm install
```

### 2. Local Development
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build & Verification
```bash
npm run build
npm run preview
```

### 4. Image Optimization Pipeline
When adding new poster images or project screenshots:
```bash
npm run optimize
```
This automatically converts `.jpg` / `.png` files in `public/assets/` into ultra-lightweight WebP format (-80% to -93% size reduction).

---

## ✦ Project Structure

```
Portfolio/
├── public/
│   ├── assets/               # High-res WebP and JPG artworks, schematics, OG image
│   │   ├── poster_01_forma_brutale.webp
│   │   ├── poster_02_optics_frequency.webp
│   │   ├── poster_03_ghost_architecture.webp
│   │   ├── poster_04_kinetic_type.webp
│   │   ├── project_ghostblock.webp
│   │   ├── project_rgb_airgap.webp
│   │   ├── project_hearthispic.webp
│   │   ├── project_hearthispic_logo.webp
│   │   └── og_image.webp
│   ├── favicon.svg           # Custom geometric monogram favicon
│   ├── robots.txt            # Search engine directives
│   └── sitemap.xml           # XML sitemap for SEO
├── scripts/
│   └── optimize-images.mjs   # Sharp image processing script
├── src/
│   ├── components/
│   │   ├── Navbar.ts         # Floating pill nav + mobile drawer
│   │   ├── Hero.ts           # Asymmetric monumental typography hero
│   │   ├── Philosophy.ts     # Technical ethos & manifesto strip
│   │   ├── Projects.ts       # 12-col project cards with interactive labs
│   │   ├── ProjectVisualizers.ts # Ghostblock MV3 & RGB Air-gap live simulations
│   │   ├── Posters.ts        # Swiss poster gallery grid
│   │   ├── Lightbox.ts       # High-res print specimen viewer & modal
│   │   ├── About.ts          # Biography, skill matrix, and environment specs
│   │   ├── Contact.ts        # Direct transmission channels + clipboard copy
│   │   ├── Footer.ts         # Typography colophon, live clock & monumental mark
│   │   └── Cursor.ts         # Custom lag-smoothed magnetic cursor
│   ├── data/
│   │   ├── projects.ts       # Project metadata, copy, and tech stacks
│   │   └── posters.ts        # Poster collection, print specs, and dimensions
│   ├── styles/
│   │   └── main.css          # Tailwind v4 theme, clamp scales, noise overlay
│   ├── utils/
│   │   ├── icons.ts          # Standardized 1.5-stroke vector icons
│   │   ├── lenis.ts          # Lenis smooth scroll engine
│   │   └── gsap.ts           # ScrollTrigger registration & motion controls
│   ├── main.ts               # Application bootstrap
│   └── vite-env.d.ts         # Vite client type definitions
├── 404.html                  # Custom Swiss brutalist 404 error page
├── index.html                # Main semantic HTML template + SEO meta
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## ✦ How-To Guide for Erfan

### Adding or Updating Poster Artworks
1. Export your poster artwork as a high-resolution `.jpg` or `.png` (recommended 3:4 aspect ratio, e.g. 1200×1600px).
2. Save the file in `public/assets/` (e.g. `public/assets/my_new_poster.jpg`).
3. Run the optimization script:
   ```bash
   npm run optimize
   ```
4. Open `src/data/posters.ts` and locate the placeholder slot:
   ```ts
   // TODO: replace with real poster image
   {
     id: 'my-new-poster',
     index: '05',
     title: 'Your Poster Title Here',
     year: '2026',
     format: 'Silkscreen Print / A1',
     paperStock: '300gsm Munken Kristall',
     dimensions: '594 × 841 mm (DIN A1)',
     palette: ['#0E0E0E', '#FF4B21', '#F6F3EC'],
     description: 'Concept notes and typographic rationale...',
     imageWebp: '/assets/my_new_poster.webp',
     imageJpg: '/assets/my_new_poster.jpg',
     aspectRatio: '3:4',
     isPlaceholder: false, // set to false
   }
   ```

### Featured Production Projects
1. **Ghostblock (Project 01):** Chromium Manifest V3 stealth ad shield with DOM geometry virtualization.
2. **RGB Air-Gap Transfer (Project 02):** Unidirectional optical data transceiver with Luby Transform fountain codes ([rgb-file-transfer.netlify.app](https://rgb-file-transfer.netlify.app)).
3. **HearThisPic (Project 03):** Multimodal vision AI & zero-auth sonic curation Telegram bot ([t.me/HearThisPicBot](https://t.me/HearThisPicBot)).

### Adding New Projects
To add or modify projects, edit `src/data/projects.ts` with your repository details, tech stack, and preview assets. WebP and JPG previews in `public/assets/` will automatically hook into the universal zoomable specimen lightbox.

---

## ✦ Definition of Done Checklist

- [x] Spacing follows consistent 8px unit throughout
- [x] Fluid clamp typography for responsive scaling
- [x] High-contrast WCAG AA accessible interactive elements
- [x] Custom focus states replacing stripped defaults
- [x] WebP images with zero layout shift (CLS)
- [x] Fonts preloaded with `font-display: swap`
- [x] 60fps GPU-accelerated motion via GSAP & Lenis
- [x] Full `prefers-reduced-motion` compliance
- [x] Responsive from 360px mobile up through 4K displays
- [x] Custom Swiss brutalist 404 page
- [x] Open Graph, Twitter Cards, SVG favicon, sitemap, and robots.txt

---

## ✦ Contact / Identity Reference

- **GitHub:** [https://github.com/Erfanvoj](https://github.com/Erfanvoj)
- **Email:** [Erfanchess450@gmail.com](mailto:Erfanchess450@gmail.com)
- **Telegram:** [@Peaceful_God](https://t.me/Peaceful_God)
