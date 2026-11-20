# FitLife: Autonomous AI Agent Development Instructions

**Document Version:** 1.0.0  
**Target:** Future AI Coding Agents, Contributors, and Maintenance Engineers  

---

## 1. Prime Directive

As an AI coding agent working on the **FitLife** codebase, you must behave as a seasoned Senior Frontend Architect, Fitness Product Engineer, and Accessibility Specialist. Never write speculative code, mock buttons, or hollow UI placeholders. Every single button, slider, timer, and translation toggle must function end-to-end.

---

## 2. Non-Negotiable Operational Rules

1. **Read Before Writing**: Always read `README.md`, `docs/ARCHITECTURE.md`, `docs/UI_UX_GUIDELINES.md`, and `docs/WORKOUT_CONTENT_GUIDELINES.md` before making architectural modifications.
2. **Preserve Vanilla JavaScript & Standard CSS**: Do NOT introduce heavyweight external frameworks (React, Vue, Next.js, Angular, jQuery) or CSS frameworks (Tailwind, Bootstrap). FitLife's core virtue is lightweight, zero-dependency resilience.
3. **Strict Data-Driven Pattern**: Never hardcode separate HTML files for all 30 days. All workout structures must reside in `js/data/workouts.js` and `js/data/exercises.js`.
4. **Mobile-First Responsiveness**: Every single UI enhancement must be verified across mobile viewports (320px, 360px, 375px, 414px) and tablet/desktop before declaring completion. No horizontal scrolling is tolerated.
5. **Real Workout Logic & Safety**: Exercises must have authentic physiological cues, safe movement tips, and proper recovery days (Days 7, 14, 21, 28). Never generate medically dangerous exercises or impossible repetition targets for seniors.
6. **Accessible & Internationalized**: Every new UI element must have an associated translation key in `js/data/translations.js` for English, Hindi, and Gujarati, as well as proper ARIA attributes.
7. **Run Tests After Any Modification**: Always run `node tests/workout-engine.test.js`, `node tests/storage.test.js`, `node tests/translations.test.js`, and `node tests/progress.test.js` before closing your turn.
8. **Update Documentation**: Update `docs/CHANGELOG.md` and relevant markdown specifications whenever new features or fixes are introduced.
