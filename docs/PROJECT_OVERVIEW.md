# Project Overview: FitLife

**Tagline:** Be Healthy. Live Happy.  
**Product Version:** 1.0.0  
**Status:** Active Development Specification  

---

## 1. What is FitLife?

**FitLife** is a personal, daily fitness coaching web application engineered to remove the intimidation, friction, and confusion commonly associated with physical fitness. Rather than presenting an endless catalog of high-intensity workouts or expecting users to know complex gym mechanics, FitLife delivers a curated, personalized **30-Day Daily Fitness Program** that adapts to a user's fitness experience, goal, and daily schedule (10 to 30 minutes per day).

Every morning when a user visits FitLife, they are presented immediately with **Today's Workout** — complete with video demonstrations, step-by-step instructions, clear safety cues, audio speech guidance in their preferred native Indian language, and an interactive workout timer that guides them from warm-up to cool-down.

---

## 2. Target Audience & Personas

FitLife is explicitly crafted for users who are often neglected by extreme fitness platforms:

### Persona A: Suman (52, Homemaker / Beginner)
- **Background:** Has mild joint stiffness, wants to improve mobility, increase energy, and maintain healthy blood sugar.
- **Tech Fluency:** Low to moderate; uses a smartphone primarily for WhatsApp, YouTube, and news in Hindi or Gujarati.
- **Needs:** Clear font, zero technical jargon, voice instructions in Hindi or Gujarati, low-impact movements with chair options, large friendly buttons.

### Persona B: Rajesh (38, Desk Worker / Busy Professional)
- **Background:** Sits for 9+ hours a day, experiences lower back discomfort, and has gained weight over recent years.
- **Tech Fluency:** High, but suffers from extreme decision fatigue and limited daily time (only 15–20 minutes free).
- **Needs:** Fast start, structured 30-day progression without overthinking, clear video demos, ability to track streaks without signing up for paid subscriptions.

### Persona C: Priya (24, College Student / Fitness Starter)
- **Background:** Wants to lose weight naturally, tone muscles, and feel happier and more energetic.
- **Tech Fluency:** High; browses on mobile phones.
- **Needs:** Engaging visual interface, modern purple/lavender aesthetics, interactive guided player, quick feedback, habit-building consistency.

---

## 3. Core Problems FitLife Solves

| Problem in Typical Fitness Apps | How FitLife Solves It |
|---|---|
| **Intimidation & Jargon** | Uses plain language, beginner-friendly cues, and realistic bodyweight exercises. |
| **Language Barriers** | Offers full multilingual UI and voice coaching in English, Hindi, and Gujarati. |
| **Analysis Paralysis** | Shows exactly **one clear workout for today** with an explicit 30-day roadmap. |
| **Fake or Gated Functionality** | 100% functional, accessible, private, with zero mandatory paywalls or fake mock buttons. |
| **Complex Equipment Required** | Focuses on bodyweight, chair-assisted, and home-friendly exercises requiring no gym gear. |
| **Overwhelming Onboarding** | A friendly, 30-second onboarding questionnaire that stores preferences privately. |

---

## 4. Main User Journeys

### Journey 1: First-Time Onboarding & Goal Setup
1. User arrives on FitLife home page.
2. Clicks **"Start Your 30 Days Plan →"**.
3. A friendly onboarding wizard appears asking for:
   - Fitness Goal (e.g., Weight Management, General Fitness, Mobility, Strength).
   - Experience Level (Beginner, Intermediate, Advanced).
   - Daily Available Time (10m, 15m, 20m, 30m).
   - Preferred Language (English, Hindi, Gujarati).
4. System generates and saves the customized 30-Day Plan in LocalStorage.
5. User is redirected directly to **Today's Workout (Day 1)**.

### Journey 2: Daily Workout Execution
1. User opens FitLife. System automatically recognizes their active day (e.g., Day 4).
2. User sees the summary: Exercise count, duration, muscle focus (e.g., "Arm Raises - Upper Body").
3. User can click **"Listen"** to hear spoken instructions in their chosen language.
4. User clicks **"Start Workout"** to launch the full-screen Guided Workout Player:
   - 3-second countdown buffer ("Get Ready").
   - Live work timer and audio alerts.
   - Live rest countdown with transition previews.
   - Next/Previous controls, pause/resume.
5. On the final exercise, user sees the celebratory **"Workout Completed!"** modal.
6. The day is marked as completed (`done: true`), updating the 30-day calendar and streak tracker.

### Journey 3: Exploring the 30-Day Calendar & History
1. User clicks **"Workout Plan"** in the navigation header or bottom mobile navigation.
2. Interactive 30-day calendar grid displays all days with status chips: *Completed*, *Today*, *Upcoming*, or *Rest Day*.
3. User can inspect past days to review exercise details or preview upcoming days.

---

## 5. Product Scope

### Initial Release (V1.0) — Included
- Responsive single-page / multi-view architecture matching the primary reference design.
- Complete 30-Day progressive workout program with active recovery days.
- Over 25 distinct bodyweight exercises with detailed steps, safety warnings, and muscle tags.
- Full trilingual support (English, Hindi, Gujarati) with scalable dictionary architecture for Marathi, Tamil, and Telugu.
- Speech synthesis audio coaching via native Web Speech API.
- Guided interactive workout player with work/rest intervals and acoustic chime alerts.
- Offline-capable local persistence via versioned LocalStorage.
- Accessible, mobile-first design adhering to WCAG 2.1 AA standards.

### Post-V1 Scope (Future Releases)
- PWA installability with background reminder push notifications.
- Voice-command input ("Pause", "Next") via Web Speech Recognition.
- Bluetooth heart rate monitor pairing via Web Bluetooth API.
- Multi-user profiles on the same device.
