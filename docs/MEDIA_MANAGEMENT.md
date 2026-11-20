# FitLife: Media Management & Asset Architecture

**Document Version:** 1.0.0  

---

## 1. Media Assets Catalog & Hierarchy

FitLife uses high-quality visual aids to ensure users understand proper exercise form without ambiguity:

```text
assets/
├── images/
│   ├── branding/
│   │   ├── logo.svg              # Primary brand dumbbell logo & typography
│   │   ├── favicon.svg           # 32x32 browser tab icon
│   │   └── bullseye.svg          # 30-Day Plan target graphic
│   ├── hero/
│   │   ├── trainer-hero.webp     # Fitness model holding water bottle (from reference)
│   │   └── hero-pattern.svg      # Lavender curved backdrop graphic
│   ├── exercises/
│   │   ├── squat.webp            # Exercise form master demonstration
│   │   ├── pushup.webp
│   │   ├── lunge.webp
│   │   ├── plank.webp
│   │   ├── jumping-jacks.webp
│   │   ├── arm-raises.webp
│   │   ├── wall-sit.webp
│   │   ├── mountain-climbers.webp
│   │   └── steps/                # Sequential 3-step breakdown images (1, 2, 3)
│   ├── thumbnails/               # 200x150 preview thumbnails for calendar cards
│   └── tips/                     # Hydration and wholesome food illustration photos
└── videos/
    └── exercises/                # Curated demonstration loop clips
```

---

## 2. Asset Manifest (`media-manifest.json`)

To guarantee strict compliance with Rule 7 ("Never present random images or claim unverified videos exist"), all assets are mapped through a single verified manifest:

```json
{
  "squat": {
    "title": "Squat",
    "image": "assets/images/exercises/squat.webp",
    "thumbnail": "assets/images/thumbnails/squat.webp",
    "steps": [
      "assets/images/exercises/steps/squat-1.webp",
      "assets/images/exercises/steps/squat-2.webp",
      "assets/images/exercises/steps/squat-3.webp"
    ],
    "video": "assets/videos/exercises/squat.mp4",
    "hasVideo": true,
    "fallbackType": "interactive_canvas"
  }
}
```

---

## 3. Graceful Fallback Strategy

When a local video file is missing or blocked by browser media security:
1. The `video-player.js` component automatically falls back to an **interactive animated canvas demonstration** depicting the exact range of motion (joint angles, eccentric and concentric phases).
2. The user can switch between the animated canvas and the high-resolution step photos at will.
3. A friendly status message informs the user: *"Showing motion guide & posture steps"*.

---

## 4. Performance & Compression Guidelines

- **Image Formats:** WebP / SVG are preferred for all photographic content; SVGs are used for vectors, badges, and icons.
- **Responsive Sizing:** Images specify explicit `width` and `height` attributes to prevent Cumulative Layout Shift (CLS).
- **Lazy Loading:** All images below the initial fold include `loading="lazy" decoding="async"`.
