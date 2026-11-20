# FitLife: Workout Content & Exercise Physiology Guidelines

**Document Version:** 1.0.0  

---

## 1. Core Principles of Everyday Fitness

FitLife is built on the physiological principle of **sustainable progressive habituation**. Extreme exercise regimes often lead to high injury rates, delayed onset muscle soreness (DOMS), and early dropout among beginners and older adults.

FitLife designs movement around:
1. **Low-Barrier Adherence**: 10 to 30 minutes of intentional daily movement is far superior to sporadic 90-minute punishing sessions.
2. **Joint-Friendly Functional Movement**: Exercises focus on primal movement patterns (squatting, hinging, pushing, pulling, carrying, and rotating) using body weight.
3. **Structured Warm-Up & Cool-Down**: Every single session begins with circulatory preparation and finishes with calming parasympathetic stretching.
4. **Active Recovery & Rest**: Muscles and neurological pathways adapt during rest. Days 7, 14, 21, and 28 are dedicated recovery days featuring gentle joint mobility and diaphragmatic breathing.

---

## 2. Exercise Taxonomy & Categories

Every exercise in the FitLife database belongs to a primary kinetic category:

| Category | Primary Focus | Examples in FitLife |
|---|---|---|
| **Warm-Up** | Joint mobilization, synovia production, heart-rate elevation | March in Place, Arm Circles, Torso Twists, Shoulder Rolls |
| **Lower Body** | Quadriceps, hamstrings, glutes, calves | Bodyweight Squats, Chair Squats, Forward Lunges, Wall Sit, Glute Bridges |
| **Upper Body** | Chest, deltoids, triceps, upper back | Push-Ups (Wall / Incline / Floor), Arm Raises, Triceps Dips (Chair), Shoulder Taps |
| **Core & Stability** | Rectus abdominis, transversus, lower back, obliques | Plank Hold, Knee Planks, Bird Dog, Mountain Climbers, Dead Bug |
| **Cardio / Endurance**| Aerobic capacity, lymphatic drainage, stamina | Jumping Jacks, Step Jacks (low-impact), High Knees, Butt Kicks |
| **Cool-Down** | Muscle elongation, relaxation, heart rate reduction | Quad Stretch, Child's Pose, Hamstring Stretch, Deep Breathing Flow |

---

## 3. Experience Levels & Scaling

| Metric | Beginner Tier | Intermediate Tier | Advanced Tier |
|---|---|---|---|
| **Primary Goal** | Habit foundation & form confidence | Muscle endurance & calorie burn | Strength, core power & stamina |
| **Work Interval** | 20 – 30 seconds or 8 – 10 reps | 30 – 45 seconds or 12 – 15 reps | 45 – 60 seconds or 15 – 20 reps |
| **Rest Interval** | 30 – 40 seconds | 20 – 30 seconds | 15 – 20 seconds |
| **Impact Level** | Low impact (one foot always grounded) | Moderate impact | Dynamic movement |
| **Modifications** | Chair-assisted options provided | Standard bodyweight | Tempo variations |

---

## 4. Exercise Data Schema

Every exercise in `js/data/exercises.js` must adhere strictly to the following contract:

```javascript
{
  id: "chair-squat",
  name: {
    en: "Chair Squat",
    hi: "चेयर स्क्वाट",
    gu: "ખુરશી સ્ક્વોટ"
  },
  category: "lower_body",
  difficulty: "beginner",
  primaryMuscles: ["quadriceps", "glutes"],
  secondaryMuscles: ["hamstrings", "calves", "core"],
  instructions: {
    en: [
      "Stand in front of a sturdy chair with feet shoulder-width apart.",
      "Engage your abdominal muscles and keep your chest lifted.",
      "Hinge at the hips and slowly lower your body until you gently tap the chair seat.",
      "Press through your heels to return to standing position."
    ],
    hi: [
      "एक मजबूत कुर्सी के सामने खड़े हों, पैरों को कंधों की चौड़ाई पर रखें।",
      "पेट की मांसपेशियों को कसें और छाती को सीधा रखें।",
      "कूल्हों को पीछे झुकाएं और धीरे-धीरे नीचे बैठें जब तक कि कुर्सी को हल्का न छू लें।",
      "एड़ियों पर जोर देते हुए वापस खड़े हो जाएं।"
    ],
    gu: [
      "એક મજબૂત ખુરશી સામે બંને પગ ખભા જેટલા પહોળા રાખીને ઊભા રહો.",
      "પેટના સ્નાયુઓને સજ્જડ રાખો અને છાતી સીધી રાખો.",
      "નિતંબને પાછળ લઈ જઈને ધીમે-ધીમે નીચે બેસો જેથી ખુરશીને હળવો સ્પર્શ થાય.",
      "પગની એડી પર ભાર આપીને ફરી સીધા ઊભા થઈ જાઓ."
    ]
  },
  tip: {
    en: "Keep your knees directly aligned with your toes and do not let them collapse inward.",
    hi: "घुटनों को पंजों की सीध में रखें और उन्हें अंदर की ओर न झुकने दें।",
    gu: "ઘૂંટણને પંજાની સીધાણમાં રાખો અને અંદરની તરફ વળવા ન દેશો."
  },
  safetyWarning: {
    en: "If you feel knee discomfort, reduce the depth of your descent.",
    hi: "यदि घुटनों में दर्द महसूस हो, तो नीचे जाने की गहराई कम करें।",
    gu: "જો ઘૂંટણમાં દુખાવો જણાય તો વધુ નીચે બેસવાનું ટાળો."
  },
  media: {
    image: "assets/images/exercises/chair-squat.webp",
    thumbnail: "assets/images/thumbnails/chair-squat.webp",
    steps: [
      "assets/images/exercises/steps/chair-squat-1.webp",
      "assets/images/exercises/steps/chair-squat-2.webp",
      "assets/images/exercises/steps/chair-squat-3.webp"
    ],
    videoUrl: null // Set when verified video asset is available
  },
  alternativeId: "bodyweight-squat"
}
```

---

## 5. Medical & Physical Safety Rules

1. **Non-Diagnostic Disclaimer**: FitLife does not provide medical diagnoses or replace licensed physiotherapy. A visible medical notice must appear in the application footer and onboarding wizard: *"Please consult a physician before starting any new exercise routine, especially if you have pre-existing cardiovascular or joint conditions."*
2. **Joint Protection**: Exercises must never recommend locking out joints (knees, elbows) at the peak of extension.
3. **Breathing Guidance**: Never instruct users to hold their breath (Valsalva maneuver); remind users to exhale on exertion and inhale during eccentric lowering.
