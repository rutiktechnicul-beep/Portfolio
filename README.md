# Rutik Ugale — Portfolio

A stunning 3D portfolio website built with **Next.js 14**, **React Three Fiber**, and **Tailwind CSS**. Synthwave aesthetic with floating IDE code panels, custom cursor, scroll-triggered reveals, and a Konami-code easter egg.

## 🚀 Stack

- **Next.js 14** (App Router) + TypeScript
- **React Three Fiber** + Three.js for the 3D hero scene
- **Tailwind CSS** for styling
- **Framer Motion** ready (installed for future animations)

## 📁 Project structure

```
.
├── app/
│   ├── layout.tsx          # Root layout + fonts + metadata
│   ├── page.tsx            # Main page composition
│   └── globals.css         # Global CSS (noise, scanlines, cursor)
├── components/
│   ├── three/
│   │   ├── HeroScene.tsx   # 3D canvas with camera rig
│   │   ├── CodePanel.tsx   # Floating IDE code panels
│   │   ├── WireShape.tsx   # Wireframe geometry
│   │   └── Stars.tsx       # Particle starfield
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Stack.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── SectionHeader.tsx
│   └── ui/
│       ├── Boot.tsx        # Terminal boot loader
│       ├── Cursor.tsx      # Custom magnetic cursor
│       ├── Nav.tsx         # Top navigation
│       ├── Konami.tsx      # Easter egg
│       ├── Reveal.tsx      # Scroll reveal wrapper
│       └── Counter.tsx     # Animated number counter
├── lib/
│   └── data.ts             # All your content lives here (edit me!)
├── public/                 # Static assets
└── package.json
```

## 🛠️ Setup

```bash
# Install dependencies
npm install

# Run dev server (http://localhost:3000)
npm run dev

# Production build
npm run build
npm start
```

## ✏️ Customising your content

Open `lib/data.ts` — everything (profile, projects, stack, timeline) lives there. Edit a single file and the whole site updates.

```ts
export const profile = {
  name: 'Rutik Ugale',
  tagline: 'I ship full-stack AI SaaS — solo, end to end.',
  email: 'rutikugale25@gmail.com',
  // ...
};
```

## 🎨 Theming

The color palette is defined in `app/globals.css`:

```css
:root {
  --cyan: #00FFFF;
  --magenta: #FF006E;
  --bg: #070708;
}
```

Change these to re-skin the whole site instantly.

## 🚢 Deploying to Vercel

1. Push this folder to a GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo
4. Click **Deploy** — Vercel auto-detects Next.js and configures everything

You'll get a `*.vercel.app` URL in ~60 seconds. Connect a custom domain anytime.

## 🥚 Easter eggs

Try the **Konami code** anywhere on the page: `↑ ↑ ↓ ↓ ← → ← → B A`

## ⚡ Performance notes

- Three.js scene is lazy-loaded (`next/dynamic` with `ssr: false`)
- Canvas uses `dpr={[1, 2]}` to cap pixel ratio on retina displays
- Stars cap at 1200 points — adjust in `HeroScene.tsx` if needed
- All animations use CSS transforms / IntersectionObserver (no scroll-listener bloat)

## 📜 License

Personal portfolio. Feel free to learn from it but please don't ship a 1:1 copy.
