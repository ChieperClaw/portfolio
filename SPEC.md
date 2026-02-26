# Portfolio — Евгения Фаргер (Evgenia Farger)

## Stack
- **Vite + React + TypeScript**
- **SCSS Modules** (`.module.scss`)
- **React Router v7** with Data Router (`createBrowserRouter`)
- NO Tailwind, NO styled-components, NO CSS-in-JS

## Pages (5 routes)
1. `/` — Home (Главная)
2. `/works` — Works list (Работы)
3. `/works/:projectId` — Individual project page (4 variations)
4. `/about` — About me (Обо мне)

## Design System

### Fonts
- **Headings:** `Unageo` Bold (700)
  - H1: 200px, H2: 120px, H3: 80px, H4: 56px, H5: 32px, H6 (extra): varies
- **Body:** `Manrope` Medium (500)
  - P1: 32px, P2: 24px, P3: 20px, P4: 16px, Label: 12px, Caption: 10px
- **Unageo** is a commercial/custom font — include it via @font-face from `/public/fonts/` directory. If we can't get the actual font files, use a similar serif display font like `Playfair Display` or `DM Serif Display` as fallback.
- **Manrope** is on Google Fonts — load from there or self-host.

### Colors
| Name | Hex | Usage |
|------|-----|-------|
| Black | `#000000` | Primary text |
| Green | `#adf1ad` | Accent |
| Peach | `#f2d9ad` | Background, CTA |
| Blue | `#adc0f2` | Background, accent |
| Pink | `#f2adad` | Navigation, accent |
| Salmon | `#f2bfad` | Navigation, accent |
| Brown | `#4f2a08` | Text accent |
| Cream | `#fbf9ea` | Background |
| Light Blue | `#dae8ff` | Background |
| White | `#ffffff` | Background |
| Light Gray | `#ebebeb` | Dividers |

### Interactive states
- Yellow Hovered / Pressed states
- Blue Hovered / Pressed states  
- Red Hovered / Pressed states

## Page Details

### Home Page (`/`)
1. **Navigation** (top-right): 3 pill/circle buttons — Главная (pink), Работы (blue), Обо мне (salmon)
2. **Hero**: Large "Евгения Фаргер" in Unageo Bold 200px. Subtitle "UI/UX Designer" below in Manrope
3. **Projects Grid**: 2×2 grid of project cards:
   - Project 1: "Прометалл" — dark navy bg, orange text
   - Project 2: "Копанской" — dark navy bg, orange text
   - Project 3: "ЛК агентств недвижимости" — dark charcoal bg, white text
   - Project 4: "Телеграм приложение «Машины и Механизмы»" — blue bg (#4A6FA5-ish), white text
   - Each card has: project number label (ПРОЕКТ 1-4) and project name below
4. **CTA Banner**: "Смотреть все работы" — golden/peach background (#f2d9ad), Unageo Bold text, rounded corners. Links to /works
5. **"Mildly Impressive Moments"** section: monospace-style text, achievements list
6. **Contacts**: Telegram, Phone, Email with colored circle icons on cream (#fbf9ea) background
7. **Footer**: "© 2026" left, nav links center, "Евгения Фаргер" right. Decorative colored blobs peeking from bottom

### Works Page (`/works`)
1. Navigation (same component)
2. Title "Работы" in orange/golden on light blue background
3. Project list — each project in a 2-column layout:
   - Left: project number, title, description paragraph, "View case study →" link
   - Right: large visual block with project name
4. Contact section + footer (same components)

### Project Page (`/works/:projectId`)
- Individual project detail pages. For now, use placeholder content:
  - Hero with project name
  - Description text
  - Image placeholders
  - Contact + footer

### About Page (`/about`)
1. Hero "Обо мне" on peach/salmon background + portrait photo (use placeholder)
2. Bio section: 3 paragraphs + right sidebar with SERVICES list and CONTACT links
3. "Опыт работы" (Work Experience) table:
   - Догма-сити — UX/UI designer — 04.2024 - present
   - Asteq — UI UX designer — 09.2022 - 03.2024
4. Contact section on lavender background
5. Footer

## Data Structure

All project data in `src/data/projects.ts`:
```typescript
export interface Project {
  id: string;
  number: string;
  title: string;
  titleShort?: string;
  description: string;
  cardBg: string;
  cardTextColor: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "prometall",
    number: "01",
    title: "Прометалл",
    description: "An exploration of fractured identity...", // placeholder
    cardBg: "#1A1A2E",
    cardTextColor: "#E87C1E",
    images: [],
  },
  // ... 3 more
];
```

## Responsive
- Desktop: 1280px max-width, centered
- Mobile: 375px (standard mobile breakpoint)
- Breakpoint: 768px

## File Structure
```
src/
  components/
    Navigation/
      Navigation.tsx
      Navigation.module.scss
    Footer/
      Footer.tsx
      Footer.module.scss
    ContactSection/
      ContactSection.tsx
      ContactSection.module.scss
    ProjectCard/
      ProjectCard.tsx
      ProjectCard.module.scss
  pages/
    Home/
      Home.tsx
      Home.module.scss
    Works/
      Works.tsx
      Works.module.scss
    Project/
      Project.tsx
      Project.module.scss
    About/
      About.tsx
      About.module.scss
  data/
    projects.ts
  styles/
    _variables.scss
    _mixins.scss
    _fonts.scss
    global.scss
  router.tsx
  App.tsx
  main.tsx
public/
  fonts/
    (Unageo font files if available, otherwise use fallback)
```

## Important Notes
- Use `createBrowserRouter` from react-router (Data Router pattern)
- All SCSS modules, no global styles except reset/fonts
- Mobile-first or desktop-first is fine, just be consistent
- Smooth scroll between sections on home page
- Navigation should highlight active page
- Project cards should link to `/works/:projectId`
- CTA "Смотреть все работы" links to `/works`
- Decorative colored shapes in footer (blobs peeking from bottom edge)

## Design Reference
Screenshots of the Figma design are in `./design-reference/`:
- `desktop-1-main.png` — Home page
- `desktop-2-projects.png` — Works page  
- `desktop-3.png` — Project detail page
- `desktop-4.png` — About page
- `styles.png` — Design system / styles overview
