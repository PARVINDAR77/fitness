/**
 * FitLife 30-Day Workout Program Data
 * Evidence-based progressive curriculum across 4 habit weeks
 */

export const workouts = [
  // WEEK 1: BUILD THE HABIT (Days 1 - 7)
  {
    day: 1,
    title: {
      en: "Squat + Push Up (Full Body)",
      hi: "स्क्वाट + पुश-अप (फुल बॉडी)",
      gu: "સ્ક્વોટ + પુશ-અપ (સંપૂર્ણ શરીર)"
    },
    duration: 15,
    difficulty: "beginner",
    category: "Full Body",
    isRestDay: false,
    thumbnail: "assets/images/thumbnails/day-1-squat.png",
    description: {
      en: "Jumpstart your fitness habit with foundational bodyweight movements for lower and upper body.",
      hi: "निचले और ऊपरी शरीर के मूलभूत व्यायामों से अपनी फिटनेस यात्रा शुरू करें।",
      gu: "શરીરના ઉપરના અને નીચેના ભાગની મૂળભૂત કસરતોથી ફિટનેસની શરૂઆત કરો."
    },
    exercises: [
      { exerciseId: "march-in-place", duration: 60, repetitions: null, sets: 1, rest: 20 },
      { exerciseId: "squat", duration: null, repetitions: 12, sets: 2, rest: 30 },
      { exerciseId: "wall-pushup", duration: null, repetitions: 10, sets: 2, rest: 30 },
      { exerciseId: "arm-raises", duration: 45, repetitions: null, sets: 1, rest: 20 }
    ]
  },
  {
    day: 2,
    title: {
      en: "Lunges + Plank (Core)",
      hi: "लंजेस + प्लैंक (कोर व संतुलन)",
      gu: "લંજિસ + પ્લેન્ક (કોર અને સંતુલન)"
    },
    duration: 15,
    difficulty: "beginner",
    category: "Core & Legs",
    isRestDay: false,
    thumbnail: "assets/images/thumbnails/day-2-lunge.png",
    description: {
      en: "Build leg stability and deep abdominal core endurance with lunges and isometric planks.",
      hi: "लंजेस और प्लैंक के साथ पैरों की स्थिरता और पेट की ताकत को बढ़ाएं।",
      gu: "લંજિસ અને પ્લેન્ક દ્વારા પગની સ્થિરતા અને પેટની મજબૂતી વધારો."
    },
    exercises: [
      { exerciseId: "march-in-place", duration: 60, repetitions: null, sets: 1, rest: 20 },
      { exerciseId: "lunges", duration: null, repetitions: 10, sets: 2, rest: 30 },
      { exerciseId: "plank", duration: 30, repetitions: null, sets: 2, rest: 30 },
      { exerciseId: "glute-bridge", duration: null, repetitions: 12, sets: 1, rest: 20 }
    ]
  },
  {
    day: 3,
    title: {
      en: "Jumping Jacks (Cardio)",
      hi: "जंपिंग जैक्स (हल्का कार्डियो)",
      gu: "જમ્પિંગ જેક્સ (હળવું કાર્ડિયો)"
    },
    duration: 15,
    difficulty: "beginner",
    category: "Cardio",
    isRestDay: false,
    thumbnail: "assets/images/thumbnails/day-3-jumping.png",
    description: {
      en: "Elevate your heart rate, boost blood circulation, and awaken your metabolic energy.",
      hi: "हार्ट रेट बढ़ाएं, रक्त संचार बेहतर करें और ऊर्जावान महसूस करें।",
      gu: "હૃદયની ગતિ સક્રિય કરો, લોહીનું પરિભ્રમણ સુધારો અને તાજગી અનુભવો."
    },
    exercises: [
      { exerciseId: "march-in-place", duration: 60, repetitions: null, sets: 1, rest: 20 },
      { exerciseId: "jumping-jacks", duration: 40, repetitions: null, sets: 3, rest: 25 },
      { exerciseId: "squat", duration: null, repetitions: 10, sets: 2, rest: 30 },
      { exerciseId: "arm-raises", duration: 45, repetitions: null, sets: 1, rest: 20 }
    ]
  },
  {
    day: 4,
    title: {
      en: "Arm Raises (Upper Body)",
      hi: "आर्म रेजेज (अपर बॉडी पोस्चर)",
      gu: "આર્મ રેઝિસ (અપર બોડી)"
    },
    duration: 15,
    difficulty: "beginner",
    category: "Upper Body",
    isRestDay: false,
    thumbnail: "assets/images/thumbnails/day-4-arms.png",
    description: {
      en: "Strengthen shoulders, counteract desk hunching, and open tight upper back muscles.",
      hi: "कंधों को मजबूत बनाएं, झुककर बैठने की आदत सुधारें और पीठ को सीधा रखें।",
      gu: "ખભા મજબૂત બનાવો અને પીઠના સ્નાયુઓને ખોલો."
    },
    exercises: [
      { exerciseId: "march-in-place", duration: 60, repetitions: null, sets: 1, rest: 20 },
      { exerciseId: "arm-raises", duration: 45, repetitions: null, sets: 3, rest: 20 },
      { exerciseId: "wall-pushup", duration: null, repetitions: 10, sets: 2, rest: 30 },
      { exerciseId: "bird-dog", duration: null, repetitions: 10, sets: 2, rest: 25 }
    ]
  },
  {
    day: 5,
    title: {
      en: "Wall Sit (Legs)",
      hi: "वॉल सिट (लेग्स व सहनशक्ति)",
      gu: "વોલ સીટ (પગની મજબૂતી)"
    },
    duration: 15,
    difficulty: "beginner",
    category: "Legs",
    isRestDay: false,
    thumbnail: "assets/images/thumbnails/day-5-wallsit.png",
    description: {
      en: "Develop muscular endurance in your quads and knees without heavy joint impact.",
      hi: "बिना जोड़ों पर दबाव डाले जांघों और घुटनों की ताकत विकसित करें।",
      gu: "સાંધા પર વજન લાવ્યા વિના સાથળ અને ઘૂંટણની શક્તિ વધારો."
    },
    exercises: [
      { exerciseId: "march-in-place", duration: 60, repetitions: null, sets: 1, rest: 20 },
      { exerciseId: "wall-sit", duration: 30, repetitions: null, sets: 3, rest: 30 },
      { exerciseId: "glute-bridge", duration: null, repetitions: 12, sets: 2, rest: 25 },
      { exerciseId: "plank", duration: 25, repetitions: null, sets: 2, rest: 25 }
    ]
  },
  {
    day: 6,
    title: {
      en: "Push Up (Strength)",
      hi: "पुश अप (स्ट्रेंथ व चेस्ट)",
      gu: "પુશ અપ (શક્તિ અને છાતી)"
    },
    duration: 15,
    difficulty: "beginner",
    category: "Strength",
    isRestDay: false,
    thumbnail: "assets/images/thumbnails/day-6-pushup.png",
    description: {
      en: "Strengthen upper body pushing muscles with controlled push-up variations.",
      hi: "नियंत्रित पुश-अप्स के साथ शरीर के ऊपरी हिस्से की ताकत को बढ़ाएं।",
      gu: "પુશ-અપ કસરત સાથે શરીરના ઉપરના ભાગની તાકાત વધારો."
    },
    exercises: [
      { exerciseId: "march-in-place", duration: 60, repetitions: null, sets: 1, rest: 20 },
      { exerciseId: "wall-pushup", duration: null, repetitions: 12, sets: 2, rest: 25 },
      { exerciseId: "squat", duration: null, repetitions: 12, sets: 2, rest: 30 },
      { exerciseId: "bird-dog", duration: null, repetitions: 10, sets: 2, rest: 25 }
    ]
  },
  {
    day: 7,
    title: {
      en: "Rest Day (Relax & Recharge)",
      hi: "विश्राम दिवस (रिलैक्स व रिकवरी)",
      gu: "વિશ્રામ દિવસ (આરામ અને રિકવરી)"
    },
    duration: 10,
    difficulty: "gentle",
    category: "Recovery",
    isRestDay: true,
    thumbnail: "assets/images/thumbnails/day-7-rest.png",
    description: {
      en: "Celebrate completing Week 1! Today is an active recovery day for muscle repair and hydration.",
      hi: "पहला हफ्ता पूरा करने की बधाई! आज मांसपेशियों को आराम देने और पानी पीने का दिन है।",
      gu: "પ્રથમ સપ્તાહ પૂર્ણ કરવા બદલ અભિનંદન! આજે આરામ અને શરીરમાં પાણીનું પ્રમાણ જાળવવાનો દિવસ છે."
    },
    exercises: [
      { exerciseId: "rest-recovery", duration: 180, repetitions: null, sets: 1, rest: 0 }
    ]
  },

  // WEEK 2: BUILD CONSISTENCY (Days 8 - 14)
  {
    day: 8,
    title: {
      en: "Squat + Lunges (Legs)",
      hi: "स्क्वाट + लंजेस (लोअर बॉडी)",
      gu: "સ્ક્વોટ + લંજિસ (પગ)"
    },
    duration: 18,
    difficulty: "beginner",
    category: "Legs",
    isRestDay: false,
    thumbnail: "assets/images/thumbnails/day-8-squatlunge.png",
    description: {
      en: "Combine squats and lunges to enhance lower body tone, balance, and hip mobility.",
      hi: "स्क्वाट्स और लंजेस को मिलाकर पैरों की टोनिंग और संतुलन को बेहतर बनाएं।",
      gu: "સ્ક્વોટ્સ અને લંજિસ સાથે પગની મજબૂતી અને સંતુલન સુધારો."
    },
    exercises: [
      { exerciseId: "march-in-place", duration: 60, repetitions: null, sets: 1, rest: 20 },
      { exerciseId: "squat", duration: null, repetitions: 14, sets: 2, rest: 30 },
      { exerciseId: "lunges", duration: null, repetitions: 12, sets: 2, rest: 30 },
      { exerciseId: "glute-bridge", duration: null, repetitions: 12, sets: 2, rest: 25 }
    ]
  },
  {
    day: 9,
    title: {
      en: "Plank Hold (Core)",
      hi: "प्लैंक होल्ड (कोर शक्ति)",
      gu: "પ્લેન્ક હોલ્ડ (પેટની તાકાત)"
    },
    duration: 15,
    difficulty: "beginner",
    category: "Core",
    isRestDay: false,
    thumbnail: "assets/images/thumbnails/day-9-plank.png",
    description: {
      en: "Deep abdominal activation and core stability to protect your lower back.",
      hi: "कमर की सुरक्षा और पेट की मांसपेशियों को मजबूत बनाने के लिए प्लैंक अभ्यास।",
      gu: "કમરના રક્ષણ અને પેટના સ્નાયુઓને મજબૂત કરવા માટે પ્લેન્ક."
    },
    exercises: [
      { exerciseId: "march-in-place", duration: 60, repetitions: null, sets: 1, rest: 20 },
      { exerciseId: "plank", duration: 35, repetitions: null, sets: 3, rest: 30 },
      { exerciseId: "bird-dog", duration: null, repetitions: 12, sets: 2, rest: 25 },
      { exerciseId: "arm-raises", duration: 45, repetitions: null, sets: 1, rest: 20 }
    ]
  },
  {
    day: 10,
    title: {
      en: "Mountain Climbers (Cardio)",
      hi: "माउंटेन क्लाइम्बर्स (कार्डियो गति)",
      gu: "માઉન્ટેન ક્લાઇમ્બર્સ (કાર્ડિયો)"
    },
    duration: 18,
    difficulty: "intermediate",
    category: "Cardio",
    isRestDay: false,
    thumbnail: "assets/images/thumbnails/day-10-climber.png",
    description: {
      en: "Full-body dynamic climbing movement for aerobic stamina and fat burning.",
      hi: "सहनशक्ति और कैलोरी बर्न करने के लिए गतिशील पर्वतारोही व्यायाम।",
      gu: "સ્ટેમિના વધારવા અને કેલરી બર્ન કરવા માટે ગતિશીલ કસરત."
    },
    exercises: [
      { exerciseId: "march-in-place", duration: 60, repetitions: null, sets: 1, rest: 20 },
      { exerciseId: "mountain-climbers", duration: 30, repetitions: null, sets: 3, rest: 30 },
      { exerciseId: "jumping-jacks", duration: 40, repetitions: null, sets: 2, rest: 25 },
      { exerciseId: "wall-sit", duration: 30, repetitions: null, sets: 2, rest: 30 }
    ]
  },
  {
    day: 11,
    title: {
      en: "Upper Body & Posture",
      hi: "अपर बॉडी व पोस्चर संरेखण",
      gu: "અપર બોડી અને પોશ્ચર"
    },
    duration: 15,
    difficulty: "beginner",
    category: "Upper Body",
    isRestDay: false,
    thumbnail: "assets/images/thumbnails/day-4-arms.png",
    description: {
      en: "Tone shoulders, triceps, and upper back for a confident and upright posture.",
      hi: "कंधों और ऊपरी पीठ को मजबूत बनाकर सीधे और आत्मविश्वास से भरपूर रहें।",
      gu: "ખભા અને પીઠને મજબૂત બનાવી સીધા ઊભા રહેવાની ટેવ પાડો."
    },
    exercises: [
      { exerciseId: "march-in-place", duration: 60, repetitions: null, sets: 1, rest: 20 },
      { exerciseId: "wall-pushup", duration: null, repetitions: 12, sets: 3, rest: 25 },
      { exerciseId: "arm-raises", duration: 50, repetitions: null, sets: 2, rest: 20 },
      { exerciseId: "bird-dog", duration: null, repetitions: 10, sets: 2, rest: 20 }
    ]
  },
  {
    day: 12,
    title: {
      en: "Lower Body Stability",
      hi: "लोअर बॉडी व स्थिरता",
      gu: "પગની મજબૂતી અને સ્થિરતા"
    },
    duration: 18,
    difficulty: "beginner",
    category: "Legs",
    isRestDay: false,
    thumbnail: "assets/images/thumbnails/day-1-squat.png",
    description: {
      en: "Target your hips, quadriceps, and hamstrings for joint stability and mobility.",
      hi: "घुटनों और कूल्हों के जोड़ों की स्थिरता के लिए लक्षित व्यायाम।",
      gu: "ઘૂંટણ અને સાંધાની સ્થિરતા માટે વિશેષ કસરતો."
    },
    exercises: [
      { exerciseId: "march-in-place", duration: 60, repetitions: null, sets: 1, rest: 20 },
      { exerciseId: "squat", duration: null, repetitions: 14, sets: 2, rest: 30 },
      { exerciseId: "wall-sit", duration: 35, repetitions: null, sets: 2, rest: 30 },
      { exerciseId: "glute-bridge", duration: null, repetitions: 14, sets: 2, rest: 25 }
    ]
  },
  {
    day: 13,
    title: {
      en: "Core & Balance Flow",
      hi: "कोर व संतुलन फ्लो",
      gu: "કોર અને બેલેન્સ ફ્લો"
    },
    duration: 15,
    difficulty: "beginner",
    category: "Core",
    isRestDay: false,
    thumbnail: "assets/images/thumbnails/day-9-plank.png",
    description: {
      en: "Integrate core strengthening with balance stability drills.",
      hi: "संतुलन और कोर शक्ति को एक साथ विकसित करने वाला सत्र।",
      gu: "સંતુલન અને પેટની શક્તિ બંને એકસાથે વધારતી કસરતો."
    },
    exercises: [
      { exerciseId: "march-in-place", duration: 60, repetitions: null, sets: 1, rest: 20 },
      { exerciseId: "bird-dog", duration: null, repetitions: 12, sets: 3, rest: 25 },
      { exerciseId: "plank", duration: 35, repetitions: null, sets: 2, rest: 30 },
      { exerciseId: "lunges", duration: null, repetitions: 10, sets: 2, rest: 30 }
    ]
  },
  {
    day: 14,
    title: {
      en: "Rest Day (Midway Milestone)",
      hi: "विश्राम दिवस (आधा सफर पूरा!)",
      gu: "વિશ્રામ દિવસ (અડધી સફર પૂર્ણ!)"
    },
    duration: 10,
    difficulty: "gentle",
    category: "Recovery",
    isRestDay: true,
    thumbnail: "assets/images/thumbnails/day-7-rest.png",
    description: {
      en: "Two full weeks completed! Rest, drink herbal water, and stretch gently.",
      hi: "दो हफ्ते पूरे हुए! आराम करें, पर्याप्त पानी पिएं और हल्का खिंचाव करें।",
      gu: "બે સપ્તાહ પૂર્ણ થયા! આરામ કરો, પૂરતું પાણી પીવો અને હળવું ખેંચાણ કરો."
    },
    exercises: [
      { exerciseId: "rest-recovery", duration: 180, repetitions: null, sets: 1, rest: 0 }
    ]
  },

  // WEEK 3: IMPROVE STRENGTH & ENDURANCE (Days 15 - 21)
  {
    day: 15,
    title: {
      en: "Circuit Kickoff (Full Body)",
      hi: "सर्किट किकऑफ (फुल बॉडी)",
      gu: "સર્કિટ કિકઓફ (સંપૂર્ણ શરીર)"
    },
    duration: 20,
    difficulty: "intermediate",
    category: "Full Body",
    isRestDay: false,
    thumbnail: "assets/images/thumbnails/day-1-squat.png",
    description: {
      en: "Welcome to Week 3! Dynamic circuit combining squats, push-ups, and jacks.",
      hi: "तीसरे हफ्ते में आपका स्वागत है! स्क्वाट्स, पुश-अप्स और जंप्स का सर्किट।",
      gu: "ત્રીજા સપ્તાહમાં સ્વાગત છે! સ્ક્વોટ્સ, પુશ-અપ્સ અને જમ્પિંગનું સર્કિટ."
    },
    exercises: [
      { exerciseId: "march-in-place", duration: 60, repetitions: null, sets: 1, rest: 20 },
      { exerciseId: "squat", duration: null, repetitions: 15, sets: 3, rest: 30 },
      { exerciseId: "pushup", duration: null, repetitions: 10, sets: 2, rest: 30 },
      { exerciseId: "jumping-jacks", duration: 45, repetitions: null, sets: 2, rest: 25 }
    ]
  },
  {
    day: 16,
    title: {
      en: "Lower Body Tone & Lift",
      hi: "लोअर बॉडी टोन व लिफ्ट",
      gu: "લોઅર બોડી ટોન અને લિફ્ટ"
    },
    duration: 18,
    difficulty: "intermediate",
    category: "Legs",
    isRestDay: false,
    thumbnail: "assets/images/thumbnails/day-2-lunge.png",
    description: {
      en: "Progressive lunges and glute bridges for strong legs and hips.",
      hi: "मजबूत पैरों और कूल्हों के लिए प्रगतिशील लंजेस और ग्लूट ब्रिज।",
      gu: "મજબૂત પગ માટે લંજિસ અને ગ્લૂટ બ્રિજનું સંયોજન."
    },
    exercises: [
      { exerciseId: "march-in-place", duration: 60, repetitions: null, sets: 1, rest: 20 },
      { exerciseId: "lunges", duration: null, repetitions: 14, sets: 3, rest: 30 },
      { exerciseId: "glute-bridge", duration: null, repetitions: 15, sets: 3, rest: 25 },
      { exerciseId: "wall-sit", duration: 40, repetitions: null, sets: 2, rest: 30 }
    ]
  },
  {
    day: 17,
    title: {
      en: "Core Endurance Blast",
      hi: "कोर सहनशक्ति विस्तार",
      gu: "કોર એન્ડ્યુરન્સ બ્લાસ્ટ"
    },
    duration: 18,
    difficulty: "intermediate",
    category: "Core",
    isRestDay: false,
    thumbnail: "assets/images/thumbnails/day-9-plank.png",
    description: {
      en: "Longer plank holds and mountain climber intervals to challenge your stamina.",
      hi: "लंबे समय तक प्लैंक होल्ड और क्लाइम्बर अभ्यास से सहनशक्ति बढ़ाएं।",
      gu: "લાંબા સમય સુધી પ્લેન્ક હોલ્ડ અને ક્લાઇમ્બર્સથી સ્ટેમિના વધારો."
    },
    exercises: [
      { exerciseId: "march-in-place", duration: 60, repetitions: null, sets: 1, rest: 20 },
      { exerciseId: "plank", duration: 45, repetitions: null, sets: 3, rest: 30 },
      { exerciseId: "mountain-climbers", duration: 35, repetitions: null, sets: 2, rest: 25 },
      { exerciseId: "bird-dog", duration: null, repetitions: 12, sets: 2, rest: 20 }
    ]
  },
  {
    day: 18,
    title: {
      en: "Aerobic Rhythm & Cardio",
      hi: "एरोबिक रिदम व कार्डियो",
      gu: "એરોબિક રિધમ અને કાર્ડિયો"
    },
    duration: 18,
    difficulty: "intermediate",
    category: "Cardio",
    isRestDay: false,
    thumbnail: "assets/images/thumbnails/day-3-jumping.png",
    description: {
      en: "Cardiovascular endurance interval training to maximize natural calorie burn.",
      hi: "प्राकृतिक कैलोरी बर्न को अधिकतम करने के लिए कार्डियो इंटरवल ट्रेनिंग।",
      gu: "કેલરી બર્ન કરવા માટે કાર્ડિયો ઇન્ટરવલ ટ્રેનિંગ."
    },
    exercises: [
      { exerciseId: "march-in-place", duration: 60, repetitions: null, sets: 1, rest: 20 },
      { exerciseId: "jumping-jacks", duration: 45, repetitions: null, sets: 3, rest: 25 },
      { exerciseId: "mountain-climbers", duration: 35, repetitions: null, sets: 2, rest: 25 },
      { exerciseId: "squat", duration: null, repetitions: 12, sets: 2, rest: 25 }
    ]
  },
  {
    day: 19,
    title: {
      en: "Upper Body Power",
      hi: "अपर बॉडी स्ट्रेंथ व टोन",
      gu: "અપર બોડી પાવર"
    },
    duration: 18,
    difficulty: "intermediate",
    category: "Upper Body",
    isRestDay: false,
    thumbnail: "assets/images/thumbnails/day-6-pushup.png",
    description: {
      en: "Progress your push-up depth and shoulder control for noticeable upper body tone.",
      hi: "शरीर के ऊपरी हिस्से की टोनिंग के लिए गहरे पुश-अप्स और कंधे का नियंत्रण।",
      gu: "શરીરના ઉપરના ભાગ માટે પુશ-અપ્સ અને ખભાનું સંતુલન."
    },
    exercises: [
      { exerciseId: "march-in-place", duration: 60, repetitions: null, sets: 1, rest: 20 },
      { exerciseId: "pushup", duration: null, repetitions: 12, sets: 3, rest: 30 },
      { exerciseId: "arm-raises", duration: 60, repetitions: null, sets: 2, rest: 20 },
      { exerciseId: "plank", duration: 35, repetitions: null, sets: 2, rest: 25 }
    ]
  },
  {
    day: 20,
    title: {
      en: "Total Body Conditioning",
      hi: "संपूर्ण शरीर कंडीशनिंग",
      gu: "સંપૂર્ણ શરીર કન્ડિશનિંગ"
    },
    duration: 20,
    difficulty: "intermediate",
    category: "Full Body",
    isRestDay: false,
    thumbnail: "assets/images/thumbnails/day-8-squatlunge.png",
    description: {
      en: "Full kinetic chain integration combining lower body squats and upper body presses.",
      hi: "निचले और ऊपरी शरीर के अभ्यासों का संपूर्ण तालमेल।",
      gu: "શરીરના તમામ મુખ્ય સ્નાયુઓનું એકીકૃત વર્કઆઉટ."
    },
    exercises: [
      { exerciseId: "march-in-place", duration: 60, repetitions: null, sets: 1, rest: 20 },
      { exerciseId: "squat", duration: null, repetitions: 15, sets: 3, rest: 30 },
      { exerciseId: "wall-pushup", duration: null, repetitions: 14, sets: 2, rest: 25 },
      { exerciseId: "jumping-jacks", duration: 40, repetitions: null, sets: 2, rest: 25 }
    ]
  },
  {
    day: 21,
    title: {
      en: "Rest Day (Week 3 Completed)",
      hi: "विश्राम दिवस (3 हफ्ते सफल!)",
      gu: "વિશ્રામ દિવસ (3 સપ્તાહ સફળ!)"
    },
    duration: 10,
    difficulty: "gentle",
    category: "Recovery",
    isRestDay: true,
    thumbnail: "assets/images/thumbnails/day-7-rest.png",
    description: {
      en: "21 days makes a habit! Rest deeply today and recharge for the final stretch.",
      hi: "21 दिन में आदत बन जाती है! आज गहरी नींद लें और खुद को तरोताजा करें।",
      gu: "21 દિવસમાં ટેવ પાકી થઈ જાય છે! આજે આરામ કરો અને ઊર્જા સંચય કરો."
    },
    exercises: [
      { exerciseId: "rest-recovery", duration: 180, repetitions: null, sets: 1, rest: 0 }
    ]
  },

  // WEEK 4: MAINTAIN CONSISTENCY & PEAK MOBILITY (Days 22 - 28)
  {
    day: 22,
    title: {
      en: "Lower Body Endurance",
      hi: "लोअर बॉडी सहनशक्ति",
      gu: "પગની સહનશક્તિ"
    },
    duration: 20,
    difficulty: "intermediate",
    category: "Legs",
    isRestDay: false,
    thumbnail: "assets/images/thumbnails/day-1-squat.png",
    description: {
      en: "Final week kickoff! Refine your squat and lunge form with confident control.",
      hi: "अंतिम हफ्ते की शुरुआत! स्क्वाट्स और लंजेस के सही रूप को निखारें।",
      gu: "છેલ્લા સપ્તાહની શરૂઆત! સ્ક્વોટ્સ અને લંજિસની ઉત્તમ ટેકનિક."
    },
    exercises: [
      { exerciseId: "march-in-place", duration: 60, repetitions: null, sets: 1, rest: 20 },
      { exerciseId: "squat", duration: null, repetitions: 16, sets: 3, rest: 30 },
      { exerciseId: "lunges", duration: null, repetitions: 14, sets: 2, rest: 30 },
      { exerciseId: "wall-sit", duration: 45, repetitions: null, sets: 2, rest: 30 }
    ]
  },
  {
    day: 23,
    title: {
      en: "Core Sculpt & Stability",
      hi: "कोर स्कल्पट व स्थिरता",
      gu: "કોર સ્કલ્પટ અને સ્થિરતા"
    },
    duration: 18,
    difficulty: "intermediate",
    category: "Core",
    isRestDay: false,
    thumbnail: "assets/images/thumbnails/day-9-plank.png",
    description: {
      en: "Advanced core holds and balanced bird-dog extensions for spinal strength.",
      hi: "रीढ़ की मजबूती के लिए प्लैंक होल्ड और बर्ड-डॉग विस्तार।",
      gu: "કરોડરજ્જુની મજબૂતી માટે પ્લેન્ક અને બર્ડ-ડોગ કસરતો."
    },
    exercises: [
      { exerciseId: "march-in-place", duration: 60, repetitions: null, sets: 1, rest: 20 },
      { exerciseId: "plank", duration: 50, repetitions: null, sets: 3, rest: 30 },
      { exerciseId: "bird-dog", duration: null, repetitions: 14, sets: 2, rest: 25 },
      { exerciseId: "glute-bridge", duration: null, repetitions: 15, sets: 2, rest: 25 }
    ]
  },
  {
    day: 24,
    title: {
      en: "Cardio Agility Flow",
      hi: "कार्डियो चपलता प्रवाह",
      gu: "કાર્ડિયો ચપળતા ફ્લો"
    },
    duration: 20,
    difficulty: "intermediate",
    category: "Cardio",
    isRestDay: false,
    thumbnail: "assets/images/thumbnails/day-10-climber.png",
    description: {
      en: "Dynamic combination of high-energy mountain climbers and rhythmic jacks.",
      hi: "माउंटेन क्लाइम्बर्स और जंप्स का ऊर्जावान और ताजगी भरा संयोजन।",
      gu: "માઉન્ટેન ક્લાઇમ્બર્સ અને જમ્પિંગનું ઉત્સાહજનક સંયોજન."
    },
    exercises: [
      { exerciseId: "march-in-place", duration: 60, repetitions: null, sets: 1, rest: 20 },
      { exerciseId: "mountain-climbers", duration: 40, repetitions: null, sets: 3, rest: 30 },
      { exerciseId: "jumping-jacks", duration: 45, repetitions: null, sets: 3, rest: 25 },
      { exerciseId: "squat", duration: null, repetitions: 12, sets: 2, rest: 25 }
    ]
  },
  {
    day: 25,
    title: {
      en: "Upper Body & Posture Peak",
      hi: "अपर बॉडी व पोस्चर पीक",
      gu: "અપર બોડી પીક"
    },
    duration: 18,
    difficulty: "intermediate",
    category: "Upper Body",
    isRestDay: false,
    thumbnail: "assets/images/thumbnails/day-6-pushup.png",
    description: {
      en: "Solidify chest, back, and arm tone with structured push-up intervals.",
      hi: "पुश-अप्स के साथ छाती, पीठ और बाहों की टोनिंग को मजबूत बनाएं।",
      gu: "પુશ-અપ્સ સાથે છાતી, પીઠ અને હાથના સ્નાયુઓને સુદ્રઢ બનાવો."
    },
    exercises: [
      { exerciseId: "march-in-place", duration: 60, repetitions: null, sets: 1, rest: 20 },
      { exerciseId: "pushup", duration: null, repetitions: 14, sets: 3, rest: 30 },
      { exerciseId: "arm-raises", duration: 60, repetitions: null, sets: 2, rest: 20 },
      { exerciseId: "plank", duration: 40, repetitions: null, sets: 2, rest: 25 }
    ]
  },
  {
    day: 26,
    title: {
      en: "Functional Balance & Tone",
      hi: "फंक्शनल बैलेंस व टोनिंग",
      gu: "ફંક્શનલ બેલેન્સ અને ટોનિંગ"
    },
    duration: 18,
    difficulty: "intermediate",
    category: "Full Body",
    isRestDay: false,
    thumbnail: "assets/images/thumbnails/day-5-wallsit.png",
    description: {
      en: "Combine wall sits, glute bridges, and lunges for total lower body confidence.",
      hi: "वॉल सिट, ग्लूट ब्रिज और लंजेस के साथ पैरों का आत्मविश्वास बढ़ाएं।",
      gu: "વોલ સીટ, ગ્લૂટ બ્રિજ અને લંજિસ સાથે આત્મવિશ્વાસ વધારો."
    },
    exercises: [
      { exerciseId: "march-in-place", duration: 60, repetitions: null, sets: 1, rest: 20 },
      { exerciseId: "wall-sit", duration: 45, repetitions: null, sets: 3, rest: 30 },
      { exerciseId: "lunges", duration: null, repetitions: 14, sets: 2, rest: 30 },
      { exerciseId: "glute-bridge", duration: null, repetitions: 16, sets: 2, rest: 25 }
    ]
  },
  {
    day: 27,
    title: {
      en: "Full Body Integration",
      hi: "फुल बॉडी समग्र फिटनेस",
      gu: "સંપૂર્ણ શરીર ફિટનેસ"
    },
    duration: 20,
    difficulty: "intermediate",
    category: "Full Body",
    isRestDay: false,
    thumbnail: "assets/images/thumbnails/day-1-squat.png",
    description: {
      en: "Comprehensive circuit celebrating all the foundational movements mastered this month.",
      hi: "इस महीने सीखे गए सभी मुख्य व्यायामों का एक संपूर्ण और सुंदर अभ्यास।",
      gu: "આ મહિને શીખેલી તમામ મુખ્ય કસરતોનું એક સુંદર સંયોજન."
    },
    exercises: [
      { exerciseId: "march-in-place", duration: 60, repetitions: null, sets: 1, rest: 20 },
      { exerciseId: "squat", duration: null, repetitions: 16, sets: 3, rest: 30 },
      { exerciseId: "pushup", duration: null, repetitions: 12, sets: 2, rest: 30 },
      { exerciseId: "plank", duration: 45, repetitions: null, sets: 2, rest: 30 }
    ]
  },
  {
    day: 28,
    title: {
      en: "Rest Day (Final Week Recharge)",
      hi: "विश्राम दिवस (अंतिम पड़ाव की तैयारी)",
      gu: "વિશ્રામ દિવસ (અંતિમ તબક્કાની તૈયારી)"
    },
    duration: 10,
    difficulty: "gentle",
    category: "Recovery",
    isRestDay: true,
    thumbnail: "assets/images/thumbnails/day-7-rest.png",
    description: {
      en: "Rest deeply before your final 2 milestone days. Hydrate and feel proud of your commitment.",
      hi: "अंतिम 2 मील के पत्थर वाले दिनों से पहले आराम करें और खुद पर गर्व करें।",
      gu: "અંતિમ 2 દિવસો પહેલાં ઊંડો આરામ કરો અને તમારી મહેનત પર ગર્વ અનુભવો."
    },
    exercises: [
      { exerciseId: "rest-recovery", duration: 180, repetitions: null, sets: 1, rest: 0 }
    ]
  },

  // DAYS 29 - 30: FINALE & HABIT VICTORY
  {
    day: 29,
    title: {
      en: "30-Day Milestone Circuit",
      hi: "30-दिवसीय माइलस्टोन सर्किट",
      gu: "30-દિવસીય માઇલસ્ટોન સર્કિટ"
    },
    duration: 22,
    difficulty: "all_levels",
    category: "Milestone",
    isRestDay: false,
    thumbnail: "assets/images/thumbnails/day-8-squatlunge.png",
    description: {
      en: "Experience how much stronger, lighter, and more capable your body feels compared to Day 1!",
      hi: "अनुभव करें कि पहले दिन की तुलना में आपका शरीर कितना मजबूत और ऊर्जावान महसूस कर रहा है!",
      gu: "અનુભવો કે પહેલા દિવસની સરખામણીએ તમારું શરીર કેટલું મજબૂત અને હળવું બન્યું છે!"
    },
    exercises: [
      { exerciseId: "march-in-place", duration: 60, repetitions: null, sets: 1, rest: 20 },
      { exerciseId: "squat", duration: null, repetitions: 16, sets: 3, rest: 30 },
      { exerciseId: "pushup", duration: null, repetitions: 12, sets: 2, rest: 30 },
      { exerciseId: "mountain-climbers", duration: 35, repetitions: null, sets: 2, rest: 25 },
      { exerciseId: "plank", duration: 45, repetitions: null, sets: 2, rest: 30 }
    ]
  },
  {
    day: 30,
    title: {
      en: "Grand Finale & Victory Flow",
      hi: "ग्रैंड फिनाले व विजय उत्सव!",
      gu: "ગ્રાન્ડ ફિનાલે અને વિજય ઉત્સવ!"
    },
    duration: 20,
    difficulty: "all_levels",
    category: "Celebration",
    isRestDay: false,
    thumbnail: "assets/images/branding/target-bullseye.png",
    description: {
      en: "Day 30! You have successfully established a lifelong daily movement habit. Be healthy, live happy!",
      hi: "30वां दिन! आपने जीवन भर के लिए स्वस्थ रहने की आदत बना ली है। स्वस्थ रहें, खुश रहें!",
      gu: "30મો દિવસ! તમે આજીવન સ્વસ્થ રહેવાની અદ્ભુત ટેવ કેળવી લીધી છે. સ્વસ્થ રહો, ખુશ રહો!"
    },
    exercises: [
      { exerciseId: "march-in-place", duration: 60, repetitions: null, sets: 1, rest: 20 },
      { exerciseId: "squat", duration: null, repetitions: 15, sets: 2, rest: 25 },
      { exerciseId: "lunges", duration: null, repetitions: 12, sets: 2, rest: 25 },
      { exerciseId: "jumping-jacks", duration: 40, repetitions: null, sets: 2, rest: 20 },
      { exerciseId: "rest-recovery", duration: 180, repetitions: null, sets: 1, rest: 0 }
    ]
  }
];

export function getWorkoutByDay(dayNumber) {
  const num = parseInt(dayNumber, 10);
  return workouts.find(w => w.day === num) || workouts[0];
}
