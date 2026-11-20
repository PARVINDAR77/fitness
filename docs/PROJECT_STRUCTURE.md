# FitLife: Project Structure & File Guide

**Document Version:** 1.0.0  

---

## 1. Directory Tree & Purpose

```text
fitlife/
│
├── index.html                    # Root entry point: Single Page Application shell & Home view
├── README.md                     # General project introduction, setup & usage
├── .gitignore                    # Standard Git ignore list (node_modules, logs, OS files)
│
├── docs/                         # Comprehensive architectural and product documentation
│   ├── PROJECT_OVERVIEW.md       # Product vision, user personas, problem space
│   ├── REQUIREMENTS.md           # Functional & non-functional requirements with IDs
│   ├── UI_UX_GUIDELINES.md       # Color tokens, typography, component rules & accessibility
│   ├── ARCHITECTURE.md           # System architecture, sequence diagrams & data flows
│   ├── PROJECT_STRUCTURE.md      # Detailed directory and module directory guide (this file)
│   ├── FEATURE_SPECIFICATION.md  # Detailed feature specifications & user stories
│   ├── WORKOUT_CONTENT_GUIDELINES.md # Exercise physiology, sets/reps, rest, safety rules
│   ├── 30_DAY_WORKOUT_PLAN.md    # Complete Day 1 to Day 30 curriculum breakdown
│   ├── MULTILINGUAL_GUIDELINES.md# Internationalization & localized content rules
│   ├── AUDIO_ACCESSIBILITY.md    # Web Speech API & voice coaching engine
│   ├── MEDIA_MANAGEMENT.md       # Asset optimization, fallbacks & licensing
│   ├── LOCAL_STORAGE.md          # State schema, migrations & persistence rules
│   ├── TESTING_STRATEGY.md       # Test plans (Unit, integration, a11y, cross-browser)
│   ├── SECURITY_AND_PRIVACY.md   # Privacy-first local data principles
│   ├── IMPLEMENTATION_ROADMAP.md # Phase-by-phase execution roadmap
│   ├── CHANGELOG.md              # Versioned changes history
│   ├── KNOWN_ISSUES.md           # Tracked limitations & workarounds
│   ├── AGENT_INSTRUCTIONS.md     # Guidelines for future AI contributors
│   ├── DOCUMENTATION_REVIEW.md   # Documentation validation report
│   └── FINAL_IMPLEMENTATION_REPORT.md # Delivery audit & verification metrics
│
├── pages/                        # Standalone page views (supporting multi-page navigation)
│   ├── plan.html                 # 30-Day Workout Plan calendar grid view
│   ├── workout.html              # Today's Workout & Interactive Guided Player view
│   ├── tips.html                 # Healthy Habits & Nutrition Tips view
│   └── profile.html              # User Profile, Goal Customization & Settings view
│
├── css/                          # CSS3 stylesheets split by concern
│   ├── variables.css             # Design tokens: colors, spacing, typography scale, radii, shadows
│   ├── reset.css                 # CSS reset, box-sizing and baseline element styles
│   ├── typography.css            # Font declarations, Google Font links & type hierarchy
│   ├── layout.css                # Header, footer, bottom navigation, container grids
│   ├── components.css            # Buttons, pills, badges, cards, progress bars, audio buttons
│   ├── home.css                  # Hero banner, feature highlights & teaser styling
│   ├── workout.css               # Interactive workout board, video player, timer styles
│   ├── calendar.css              # 30-Day calendar grid, day cards, status indicators
│   ├── profile.css               # Profile form, preference toggles, data reset modal
│   └── responsive.css            # Breakpoint overrides (320px, 375px, 768px, 1024px, 1440px)
│
├── js/                           # JavaScript ES6 modules
│   ├── app.js                    # Application initializer and event bootstrap
│   │
│   ├── core/                     # Infrastructure foundation
│   │   ├── router.js             # View router managing hash changes & active navigation
│   │   ├── storage.js            # LocalStorage persistence manager with schema versioning
│   │   ├── state.js              # Reactive state store with event pub/sub
│   │   └── helpers.js            # Time formatters, DOM utilities, audio beep generator
│   │
│   ├── components/               # Modular UI rendering functions
│   │   ├── navbar.js             # Sticky desktop header and mobile menu drawer
│   │   ├── footer.js             # Common footer with copyright & medical disclaimer
│   │   ├── workout-card.js       # Day cards for the 30-day calendar
│   │   ├── exercise-card.js      # Exercise instructions, video demo & steps renderer
│   │   ├── progress-bar.js       # Animated progress bar and streak counter
│   │   ├── video-player.js       # Responsive video player with fallback animated canvas
│   │   └── modal.js              # Accessible modal dialog controller (focus trap, ESC close)
│   │
│   ├── features/                 # Core business logic
│   │   ├── onboarding.js         # Interactive onboarding modal with 4-step wizard
│   │   ├── workout-engine.js     # Plan generator selecting exercises per user profile
│   │   ├── daily-workout.js      # Today's workout resolver and step presenter
│   │   ├── workout-calendar.js   # 30-Day interactive calendar controller
│   │   ├── exercise-player.js    # Guided workout timer (work/rest counter & sound)
│   │   ├── progress-tracker.js   # Calculation of completion %, streaks & logs
│   │   ├── language-manager.js   # Multilingual i18n text replacement engine
│   │   ├── speech-manager.js     # Web Speech synthesis controller
│   │   └── profile-manager.js    # Profile settings and data export/reset
│   │
│   └── data/                     # Application data repositories
│       ├── workouts.js           # 30-day curriculum with daily exercises, rests & categories
│       ├── exercises.js          # Master exercise library with descriptions & multilingual keys
│       ├── translations.js       # i18n dictionaries for EN, HI, GU (and MR, TA, TE placeholders)
│       └── tips.js               # Healthy habits, hydration, sleep, and recovery tips
│
├── assets/                       # Media and icon assets
│   ├── images/
│   │   ├── branding/             # FitLife logo (SVG), favicon
│   │   ├── hero/                 # Hero trainer photo, lifestyle graphics
│   │   ├── exercises/            # Step demonstration photos
│   │   ├── thumbnails/           # Exercise preview thumbnails
│   │   └── tips/                 # Nutrition and hydration illustration photos
│   ├── videos/                   # Video demonstration clips
│   └── icons/                    # Clean SVG icons (Home, Plan, Tips, Profile, Dumbbell, etc.)
│
└── tests/                        # Automated unit & integration tests (Node.js runners)
    ├── workout-engine.test.js    # Verifies all 30 days exist, valid rest days, exercise integrity
    ├── storage.test.js           # Tests local persistence, migrations, and quota recovery
    ├── translations.test.js      # Tests translation key parity across English, Hindi, Gujarati
    └── progress.test.js          # Tests streak math, completion %, and history logging
```

---

## 2. Rationale for Vanilla JavaScript Architecture

1. **Zero Build Bottlenecks**: Developers and users can open `index.html` or run any lightweight local server immediately without waiting for `npm install`, webpack compilation, or node module tree churn.
2. **Predictable Lifetime**: Vanilla ES6 modules and standard Web APIs never suffer from framework deprecation cycles, breaking major version changes, or package security vulnerabilities.
3. **Instant Mobile Loading**: With minimal bundle sizes (< 60KB total JS/CSS), the initial render on low-bandwidth 3G/4G networks is nearly instantaneous.
