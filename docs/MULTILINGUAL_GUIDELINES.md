# FitLife: Multilingual & Internationalization (i18n) Guidelines

**Document Version:** 1.0.0  

---

## 1. Supported Languages & Locales

FitLife is architected for multilingual inclusivity across India and global audiences. The initial V1 release actively supports:

1. **English (`en`)**: Primary baseline, International English.
2. **Hindi (`hi`)**: Devnagari script (हिंदी), standard conversational Indian phrasing.
3. **Gujarati (`gu`)**: Gujarati script (ગુજરાતી), native phrasing.

### Forward Architecture
The translation engine is structurally designed to support immediate additions of:
- Marathi (`mr` / मराठी)
- Tamil (`ta` / தமிழ்)
- Telugu (`te` / తెలుగు)

---

## 2. Key Architecture & Resolution Algorithm

Translations are stored in `js/data/translations.js`. The translation engine (`js/features/language-manager.js`) operates via declarative DOM data attributes:

```html
<h1 data-i18n="heroTitle">Your Daily Fitness Partner</h1>
<button data-i18n="start30Days">Start Your 30 Days Plan →</button>
<p data-i18n="tipKeepKnees">Keep your knees behind your toes.</p>
```

### Fallback Hierarchy
When resolving a key `K` for selected language `L`:
1. Check `translations[L][K]`. If defined and non-empty, return it.
2. If undefined in `L`, check `translations['en'][K]`. Return English string and log a gentle warning in development console.
3. If undefined in English, return `K` to prevent UI breakage.

---

## 3. Typography & Font Binding

Different scripts require proper font stack binding and line-height adjustments:
- English: `Inter, sans-serif`, line-height: `1.5`
- Hindi: `"Noto Sans Devanagari", Inter, sans-serif`, line-height: `1.65` (accommodates ascenders and matras)
- Gujarati: `"Noto Sans Gujarati", Inter, sans-serif`, line-height: `1.65` (accommodates vowel signs)

When language is switched, the language manager updates the root HTML attributes:
```javascript
document.documentElement.setAttribute('lang', langCode);
document.body.classList.toggle('lang-hi', langCode === 'hi');
document.body.classList.toggle('lang-gu', langCode === 'gu');
```

---

## 4. Exercise Content Translation Standard

Unlike machine translation that produces awkward literal translations, exercise descriptions in FitLife must follow clear anatomical cues:

| English Cue | Natural Hindi Phrasing | Natural Gujarati Phrasing |
|---|---|---|
| "Stand with feet shoulder-width apart." | "पैरों को कंधों की चौड़ाई के बराबर खोलकर खड़े हों।" | "બંને પગને ખભા જેટલા પહોળા રાખીને ઊભા રહો." |
| "Keep your back straight." | "अपनी पीठ को बिल्कुल सीधा रखें।" | "તમારી પીઠ હંમેશા સીધી રાખો." |
| "Lower your body slowly." | "धीरे-धीरे अपने शरीर को नीचे लाएं।" | "ધીમે-ધીમે શરીરને નીચે નમાવો." |
| "Breathe out as you push up." | "ऊपर आते समय सांस बाहर छोड़ें।" | "ઉપર આવતી વખતે શ્વાસ બહાર કાઢો." |

---

## 5. Language Persistence

The user's language selection is stored immediately to `fitlife_user_profile.language`. Upon opening any page or reloading, the application reads this setting and immediately translates all static and dynamic elements before rendering.
