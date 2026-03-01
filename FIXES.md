# Portfolio Fixes — Figma vs Implementation

Reference screenshots are in `./design-reference/`:
- `desktop-1-main.png` — Home page
- `desktop-2-projects.png` — Works page
- `desktop-4.png` — About page
- `styles.png` — Design system

## Design System (from SPEC.md + styles.png)

### Fonts
- **Headings:** `Unageo` Bold (700) — already loaded via @font-face
- **Body:** `Manrope` Medium (500) — already loaded

### Font Sizes (EXACT from Figma)
- H1: 200px, H2: 120px, H3: 80px, H4: 56px, H5: 32px
- P1: 32px, P2: 24px, P3: 20px, P4: 16px, Label: 12px, Caption: 10px

### Colors
- Black: #000000, Green: #adf1ad, Peach: #f2d9ad, Blue: #adc0f2
- Pink: #f2adad, Salmon: #f2bfad, Brown: #4f2a08, Cream: #fbf9ea
- Light Blue: #dae8ff, White: #ffffff, Light Gray: #ebebeb

---

## FIXES TO IMPLEMENT (priority order)

### 1. 🔴 Hero Name — Home Page
**Current:** "Евгения" in small body font + "Фаргер" in serif on separate line + ✦ star icon
**Figma:** Single cohesive heading, both words in Unageo Bold, very large (close to 200px), spanning nearly full width. NO star icon.
**Fix:**
- Remove the ✦ star icon
- Make "Евгения Фаргер" a single `<h1>` in Unageo Bold
- Font size: use `clamp(72px, 12vw, 200px)` to fill width responsively
- Both words same font family and weight, brown color (#4f2a08)
- Can be on two lines at narrow widths, but same typographic style throughout

### 2. 🔴 CTA "Смотреть все работы" — Home Page
**Current:** White text on blue background
**Figma:** Golden/yellow text (#e88a00 or similar warm gold) on blue (#adc0f2) background, with dashed underline on text
**Fix:**
- Change text color to warm gold/orange: `#e88a00`
- Add `text-decoration: underline dashed` to the text
- Keep blue background (#adc0f2)

### 3. 🔴 Contact Section Icons
**Current:** Plain colored geometric shapes (circle, square, rounded square) with no icons inside
**Figma:** Colored circles with WHITE icons inside (Telegram plane, phone handset, mail envelope)
**Fix:**
- Add SVG icons (white) inside each colored shape:
  - Telegram: paper plane icon
  - Phone: phone handset icon
  - Email: envelope/mail icon
- All shapes should be circles (border-radius: 50%)
- Icon color: white
- Icon size: ~50% of circle diameter

### 4. 🔴 Contact Section — Text & Alignment
**Current:** Left-aligned, saturated colors matching icon colors
**Figma:** Centered on page, more muted/pastel text colors
**Fix:**
- Center the contact list on the page
- Make text colors more muted/pastel (reduce saturation or add opacity)
- Contact text font: Unageo Bold, size ~clamp(28px, 4.5vw, 56px)

### 5. 🔴 Project Cards — Text Size & Full Names
**Current:** Small centered text, abbreviated names ("ЛК АН", "Тг приложение «МиМ»")
**Figma:** Large bold serif text, full project names
**Fix:**
- Increase card title font size to `clamp(36px, 5vw, 64px)`
- Remove `titleShort` usage on cards — always show full `title`
- On the Home page cards AND Works page visual blocks, show full title

### 6. 🔴 Project Card Labels (below cards) — Home Page
**Current:** "ПРОЕКТ 01" and project name stacked vertically (flex-column)
**Figma:** "ПРОЕКТ 1" on left, project name on right (justify-between in a row)
**Fix:**
- Change `.labelRow` to `flex-direction: row; justify-content: space-between; align-items: baseline`
- Remove zero-padding from numbers: "01" → "1", "02" → "2", etc. (update projects.ts)
- Project label: caption size (10px), uppercase
- Project name: body font, ~16-20px

### 7. 🟡 Works Page — Project Descriptions
**Current:** Very short descriptions
**Figma:** Longer placeholder text (lorem ipsum style)
**Fix:**
- Expand each project description in `projects.ts` to 2-3 sentences minimum
- Make description font size at least 14-16px (currently 10px caption — way too small!)
- "View case study →" link should also be larger (~14-16px)

### 8. 🟡 About Page — Experience Table
**Current:** Job titles in English ("UX/UI designer"), dates say "present"
**Figma:** Job titles in Russian, dates say "сейчас"
**Fix:**
- Догма-сити: position = "Дизайнер пользовательского опыта и интерфейсов"
- Asteq: position = "UI UX дизайнер"
- Dates: "present" → "сейчас"

### 9. 🟡 About Page — Missing Decorative Element
**Figma:** Small pink/coral decorative illustration (bow/ribbon/floral) in bottom-right of bio section
**Fix:** Add a simple decorative SVG or CSS shape in pink (#f2adad) positioned absolute in the bio grid bottom-right

### 10. 🟡 Overall Typography Scale
**Current:** Most text sizes are smaller than Figma
**Fix:**
- Works page title "Работы": should be much larger (~96px or H2 size 120px)
- About page title "Обо мне": should match H1 (200px) as per Figma
- Section headers like "Опыт работы": H3 size (80px)
- Body text in bio: P4 (16px) — check this is applied
- Works page descriptions: at least P4 (16px), NOT caption (10px)

### 11. 🟢 Footer Dot Separators
**Current:** Dots exist but may be hard to see
**Fix:** Ensure dot separators (·) between nav links are visible, color: $salmon or similar accent

### 12. 🟢 Vertical Spacing
**Fix:** Increase padding between major sections:
- Hero to projects grid: ~80px
- Projects grid to CTA: ~80px
- CTA to Mildly Impressive: ~80px
- Sections generally need more breathing room

---

## IMPORTANT RULES
1. Use EXACT font sizes from the design system where applicable
2. Do NOT use `titleShort` on cards — always show full project title
3. All contact icons must have actual SVG icons inside, not just colored shapes
4. Test by running `npm run build` to make sure there are no errors
5. The dev server is running on port 5173 — changes will hot-reload
