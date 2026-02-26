# FIXES — Match Figma Design Exactly

Read this file and fix ALL components to match the Figma design. Apply ALL fixes below.

## 1. HERO SECTION (Home page)

**Current issue:** Font "Евгения" is on a separate line from "Фаргер". In Figma, "Евгения" has a star/asterisk decoration and is ABOVE "Фаргер" which is much larger.

**Figma structure:**
- "Евгения" row: has a star icon next to it, smaller text
- "Фаргер": Unageo Bold 120px, color #4f2a08 (brown), NOT black
- Subtitle: "UI/UX Designer" in Archivo Narrow 500 16px, black

**Fix:**
- Split the name into two lines: "Евгения" (smaller, ~56px) with a decorative ✦ star + "Фаргер" (larger, clamp(56px, 9vw, 120px)), color brown #4f2a08
- Subtitle: "UI/UX Designer" in Manrope 500 16px (we don't have Archivo Narrow, Manrope is fine)

## 2. PROJECT CARDS (Home page)

**Current issue:** Cards show project titles inside them. In Figma, the card is just an IMAGE CONTAINER (640x528) with the project image/cover, and the text is BELOW the card.

**Figma structure per card:**
```
Case studies item (640x628)
  Image container (640x528) ← the colored rectangle/image area
  Project info (640x100) ← text below
    "Проект 1" — Manrope 700 10px, black
    "Прометалл" — Manrope 500 20px, black
```

**Fix:**
- The card area (640x528 proportionally) should be a colored rectangle. For now since there are no project images, show the project TITLE in large text centered inside the colored area (like a placeholder cover).
- Below the card: project number in bold caps ("Проект 1") + project name ("Прометалл"), both in small text, black.
- Cards in 2x2 grid with small gap
- Card aspect ratio: 640:528 ≈ 1.21:1

## 3. CTA BANNER — "Смотреть все работы"

**Current issue:** Might have wrong styling.

**Figma structure:**
- Frame: 1280x224, background: `#adc0f2` (BLUE, not peach!), border-radius: 50px
- Text: "Смотреть все работы" in Unageo Bold 80px (responsive: clamp(32px, 6vw, 80px)), color WHITE (#ffffff)
- Full width with rounded corners

**Fix:**
- Background: `#adc0f2` (blue), NOT peach
- Text: white, Unageo/DM Serif Display bold, responsive size
- Border radius: 50px
- Width: full container, height: auto with padding

## 4. "MILDLY IMPRESSIVE MOMENTS" SECTION

**Figma:**
- Label: "Mildly impressive moments" — Manrope 500 12px
- Body: "Along the way: featured on Figma Community, invited to speak at a design thing, and once accidentally made a typeface that looked like pasta. My work has shown up in zines, mockups, sticker-covered laptops, and one Berlin subway ad (true story). Small wins, big joy." — Manrope 500 24px
- Link: "Смотреть еще →" — Manrope 16px

**Fix:** Update the text content to match Figma exactly. Make sure body text is 24px Manrope, not monospace.

## 5. CONTACT SECTION

**Figma structure:**
- Container background: `#fbf9ea` (cream)
- Three contact rows, each with:
  - Icon in a colored shape (70x70):
    - Telegram: pink circle (#f2adad, radius 999)
    - Phone: blue square (#adc0f2, no radius / small radius)
    - Email: salmon rounded rect (#f2bfad, radius 22)
  - Text next to icon in Unageo Bold 56px (desktop), color matches the icon color:
    - "Evg_des_79" — color #f2adad (pink)
    - "+7 (996) 051 69 71" — color #adc0f2 (blue)
    - "Fargered@mail.ru" — color #f2bfad (salmon)

**Fix:**
- Icon shapes: 70x70 colored shapes (circle, square, rounded rect) — use div with appropriate border-radius
- Text: DM Serif Display / heading font, 56px desktop (clamp for responsive), color matches icon
- Each row is a flex row with icon + text
- No actual icons needed — just colored shapes for now (or use simple SVG icons if present)

## 6. FOOTER

**Figma structure:**
- Top row: "© 2026" (left) | nav links separated by salmon dots (center) | "Евгения Фаргер" (right) — all Manrope 500 16px
- Bottom: three decorative shapes peeking from bottom:
  - Shape 1: 427x426, #f2d9ad (peach), border-radius 100px — left
  - Shape 2: 427x426, #adc0f2 (blue), no radius — center
  - Shape 3: 427x427, #f2adad (pink), radius 999 (circle) — right
- These shapes are partially hidden (overflow hidden on footer), only tops visible

**Fix:**
- Footer container with overflow:hidden
- Text row: flex justify-between
- Nav links with salmon (#f2bfad) dot separators
- Three large shapes below, mostly hidden (translate down ~60-70%), creating a decorative peek effect

## 7. FONT — "Archivo Narrow"

The Figma uses "Archivo Narrow" for the subtitle. We can substitute with Manrope since we're already using it. Just make sure it's 16px weight 500.

## 8. NAV FONT

Nav labels are Manrope 500 16px (not 14px, not 600 weight). Fix the font-size and weight.

## APPLY ALL FIXES NOW. After fixing, make sure `npm run build` succeeds.
