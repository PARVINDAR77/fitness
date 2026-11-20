# FitLife: Quality Assurance & Testing Strategy

**Document Version:** 1.0.0  

---

## 1. Multi-Tiered Testing Pyramid

Quality assurance for FitLife spans 5 critical testing dimensions:
1. **Automated Unit Testing** (Data integrity, plan algorithms, storage, progress math).
2. **Functional Integration Testing** (Onboarding flow, daily workout resolver, live interval player).
3. **Accessibility Verification** (WCAG 2.1 AA keyboard flow, color contrast, ARIA landmarks, screen-readers).
4. **Responsive Viewport Verification** (320px to 1440px+ without horizontal scroll or truncated text).
5. **Cross-Browser Speech & Media Compatibility** (Chrome, Edge, Safari, Firefox, Android Chrome).

---

## 2. Automated Test Suites (`tests/`)

Automated tests are written for native Node.js execution without external testing framework dependencies:

- **`tests/workout-engine.test.js`**:
  - Validates that all 30 days are present and ordered sequentially.
  - Ensures Days 7, 14, 21, and 28 are designated rest days.
  - Verifies that every exercise ID referenced in any workout day exists in `exercises.js`.
  - Verifies that all exercises have warm-up, core exercise, and cool-down definitions.

- **`tests/storage.test.js`**:
  - Tests save, retrieval, versioning, and migration of user profiles.
  - Tests corruption recovery and in-memory fallback.
  - Tests clean state reset behavior.

- **`tests/translations.test.js`**:
  - Tests key parity across English, Hindi, and Gujarati dictionaries.
  - Checks that no required UI key is missing in any active language.
  - Verifies that language fallback handles missing keys without throwing runtime errors.

- **`tests/progress.test.js`**:
  - Tests mathematical accuracy of completion percentage: `(completed / 30) * 100`.
  - Tests daily streak calculation logic (consecutive days vs broken days).
  - Verifies that visiting a day does NOT erroneously mark it completed.

---

## 3. Manual & Cross-Device Test Checklist

- [ ] Mobile Viewport Test (320px, 360px, 375px, 414px)
- [ ] Tablet Viewport Test (768px, 834px)
- [ ] Desktop Viewport Test (1024px, 1440px)
- [ ] Voice synthesis speech rate adjustment test (0.8x, 1.0x, 1.2x)
- [ ] Keyboard navigation test (Tab through all buttons, modals, and close via Esc)
- [ ] Full 30-day plan navigation test
- [ ] Workout timer pause, resume, and interval transition test
