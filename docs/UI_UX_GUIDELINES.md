# FitLife: UI/UX Guidelines & Design System

**Document Version:** 1.0.0  
**Design Authority:** Reference Image `ChatGPT Image Nov 20, 2026, 10_59_14 AM.png`

---

## 1. Reference Image Analysis & Visual Identity

The user-supplied reference image establishes the core visual personality of FitLife:
- **Clean, Bright & Inspiring**: Uses crisp white (#FFFFFF) paired with soft lavender backgrounds (#F4F1FF) to evoke calm, approachability, and health.
- **Deep Navy Typography**: Text is rendered in deep, high-contrast navy (#101C3A, #17213D) rather than harsh pure black, creating a polished editorial feel.
- **Vibrant Purple Brand Highlights**: Primary buttons and active indicators use energetic purple (#5637D8) and vibrant violet (#7456EA) that draw immediate visual attention to next actions.
- **Warm Yellow & Success Green Accents**: Motivational tips use warm yellow (#FFC857 / #FFF9E6), and completed milestones use reassuring emerald green (#219653).
- **Friendly Rounded Aesthetic**: Generous card radiuses (16px to 24px) and smooth pill buttons (9999px) provide an inviting, modern touch-friendly interface.

---

## 2. Design Tokens & Color Palette

All colors are exposed as CSS Custom Properties in `:root`:

```css
:root {
  /* Brand Primary */
  --color-primary: #5637D8;
  --color-primary-hover: #482ec0;
  --color-primary-light: #ECE8FD;
  --color-secondary-purple: #7456EA;

  /* Typography & Neutrals */
  --color-navy-dark: #101C3A;
  --color-text-primary: #17213D;
  --color-text-secondary: #69738A;
  --color-text-muted: #8E98B0;

  /* Backgrounds & Surfaces */
  --color-bg-main: #FFFFFF;
  --color-bg-lavender: #F4F1FF;
  --color-bg-card: #FFFFFF;
  --color-bg-subtle: #F8F7FD;

  /* Borders & Dividers */
  --color-border: #E8E4F5;
  --color-border-hover: #D5CEF0;

  /* State & Accents */
  --color-success: #219653;
  --color-success-bg: #EAF7EE;
  --color-warning: #FFC857;
  --color-warning-bg: #FFF9E6;
  --color-danger: #EB5757;
  --color-danger-bg: #FDF2F2;

  /* Spacing Scale (8pt Grid) */
  --space-2xs: 4px;
  --space-xs: 8px;
  --space-sm: 12px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;

  /* Border Radii */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-xl: 28px;
  --radius-pill: 9999px;

  /* Shadows & Elevations */
  --shadow-sm: 0 2px 8px rgba(86, 55, 216, 0.06);
  --shadow-md: 0 6px 20px rgba(86, 55, 216, 0.08);
  --shadow-lg: 0 12px 32px rgba(16, 28, 58, 0.12);
  --shadow-card: 0 4px 16px rgba(86, 55, 216, 0.05);

  /* Transitions */
  --transition-fast: 0.15s ease-in-out;
  --transition-normal: 0.25s ease-in-out;
}
```

---

## 3. Typography System

The application employs clean, highly legible grotesque sans-serif fonts:
- **Default / English:** `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Hindi / Devanagari:** `"Noto Sans Devanagari", Inter, sans-serif`
- **Gujarati:** `"Noto Sans Gujarati", Inter, sans-serif`

### Type Scale (Clamped for Fluid Scalability)
- **Display 1 (Hero Title):** `clamp(2rem, 5vw + 1rem, 3.25rem)` (32px – 52px), Weight: 800, Line-height: 1.15
- **Heading 1 (Section Titles):** `clamp(1.5rem, 3vw + 0.5rem, 2.25rem)` (24px – 36px), Weight: 700, Line-height: 1.25
- **Heading 2 (Card Titles):** `clamp(1.125rem, 2vw + 0.5rem, 1.5rem)` (18px – 24px), Weight: 600, Line-height: 1.3
- **Heading 3 (Sub-headers):** `1.125rem` (18px), Weight: 600
- **Body Regular:** `1rem` (16px), Weight: 400, Line-height: 1.6
- **Body Small:** `0.875rem` (14px), Weight: 400, Line-height: 1.5
- **Caption / Meta:** `0.75rem` (12px), Weight: 500

---

## 4. UI Component Patterns

### 4.1 Buttons
- **Primary Action (Pill Button):** Solid purple (`--color-primary`), bold white text, smooth hover lift, minimum touch height: 48px.
  - Example: `Start Your 30 Days Plan →`
- **Secondary / Outline Button:** Lavender background (`--color-primary-light`) or 1.5px purple border with purple text.
- **Audio "Listen" Button:** Distinct pill with speaker icon (`🔊 Listen`), purple background with white text, providing visual feedback during playback.
- **State Badges:** Green badge with checkmark (`✔ Done`), yellow badge for rest days (`❤️ Relax & Recharge`), purple badge for pending days (`▶ Start`).

### 4.2 Cards
- **Workout Preview Card:** Rounded 20px card with 1px border (`--color-border`), subtle shadow, thumbnail preview, day count badge, and clean action button.
- **Today's Workout Video Board:** Prominent 24px rounded card housing the responsive video player, sequential thumbnail step previews, numbered instructions, and tips callout.
- **Tip Card:** Soft yellow background (`#FFF9E6`) with warm amber border, lightbulb icon, and concise lifestyle guidance.

### 4.3 Navigation
- **Desktop Header:** Fixed/sticky clean white navigation with FitLife logo, navigation links with active underline/pill, language dropdown selector with native flags, and profile/settings avatar.
- **Mobile Bottom Navigation Bar:** Fixed bottom bar with 4 primary destinations (Home, Plan, Tips, Profile). Active tab is indicated by purple highlight icon and bold text. Large 48px touch targets.
- **Language Selector:** Dropdown menu and dedicated card with direct language buttons (English, हिंदी, ગુજરાતી) for single-tap switching.

---

## 5. Accessibility & Inclusivity Rules

1. **High Contrast:** All text must strictly comply with WCAG 2.1 AA (Navy `#17213D` on White `#FFFFFF` yields an exceptional contrast ratio of 14.5:1; Primary Purple `#5637D8` on White achieves 6.5:1).
2. **Keyboard Navigation:** Every interactive button and form control must show a crisp 2px focus ring (`outline: 2px solid var(--color-primary); outline-offset: 2px`).
3. **No Decorative-Only Text:** All exercise icons have semantic screen-reader text (`sr-only` class).
4. **Reduced Motion:** If the user has enabled `prefers-reduced-motion: reduce`, all CSS animations and transitions are set to 0.001ms.
5. **No Sudden Audio:** Audio narration never plays automatically; it must always be initiated by a user tap on the "Listen" button.
