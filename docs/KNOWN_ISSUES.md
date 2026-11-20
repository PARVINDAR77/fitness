# FitLife: Known Issues & Technical Limitations

**Document Version:** 1.0.0  

---

## 1. Browser & OS Specific Behaviors

### 1.1 Web Speech API Regional Voice Availability
- **Issue:** Web browsers rely on local OS speech synthesizers. Some desktop Windows/Linux installations lack pre-installed Gujarati (`gu-IN`) or Hindi (`hi-IN`) neural voices.
- **Impact:** When a user selects Hindi or Gujarati and their OS has no installed regional voice, the audio speech engine cannot enunciate in that dialect.
- **Mitigation / Workaround:** `SpeechManager` detects missing voice support and displays a helpful toast notification (*"Voice synthesis is unavailable for this language on your device. Exercise instructions remain visible on screen."*). It cleanly prevents speech errors from crashing the UI.

### 1.2 LocalStorage Storage Isolation
- **Issue:** Browser `localStorage` is scoped strictly to the local device and specific browser profile.
- **Impact:** Workouts completed on a user's smartphone do not automatically sync to their laptop without an external cloud backend.
- **Mitigation / Workaround:** Clear educational note presented on the Profile screen, along with a "Export Data" JSON utility so users can back up their progress.

### 1.3 Media Autoplay Policies
- **Issue:** Modern mobile browsers (iOS Safari, Android Chrome) block automatic audio and video playback unless explicitly triggered by a user touch/click gesture.
- **Mitigation / Workaround:** Video playback and speech synthesis are strictly bound to explicit user actions ("Listen", "Play", "Start Workout").
