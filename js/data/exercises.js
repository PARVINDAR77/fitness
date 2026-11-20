/**
 * FitLife Exercise Catalog
 * Master repository of evidence-based bodyweight exercises
 * Fully localized for English, Hindi, and Gujarati
 */

export const exercises = [
  {
    id: "march-in-place",
    name: {
      en: "March in Place",
      hi: "एक ही जगह पर कदमताल (मार्च)",
      gu: "એક જગ્યાએ કદમતાલ (કૂચ)"
    },
    category: "warm_up",
    difficulty: "beginner",
    primaryMuscles: ["hip_flexors", "calves"],
    secondaryMuscles: ["quadriceps", "core"],
    defaultDuration: 60,
    defaultReps: null,
    restTime: 20,
    instructions: {
      en: [
        "Stand tall with your feet hip-width apart and shoulders relaxed.",
        "Lift your right knee up towards hip height while swinging your left arm forward.",
        "Lower your right foot softly and immediately lift your left knee, swinging your right arm.",
        "Maintain a steady, rhythmic breathing pattern and keep your core gently engaged."
      ],
      hi: [
        "पैरों को कूल्हों की चौड़ाई पर रखकर सीधे खड़े हों और कंधों को ढीला छोड़ें।",
        "दाहिने घुटने को कूल्हे की ऊंचाई तक उठाएं और बाएं हाथ को आगे लाएं।",
        "दाहिने पैर को धीरे से नीचे रखें और बाएं घुटने को ऊपर उठाएं।",
        "अपनी सांसों को सामान्य और लयबद्ध रखें और पेट को हल्का कस कर रखें।"
      ],
      gu: [
        "બંને પગ વચ્ચે થોડી જગ્યા રાખી સીધા ઊભા રહો અને ખભા હળવા રાખો.",
        "જમણો ઘૂંટણ કમરની ઊંચાઈ સુધી ઊંચકો અને ડાબો હાથ આગળ લાવો.",
        "જમણો પગ ધીમેથી નીચે મૂકી ડાબો ઘૂંટણ ઊંચકો અને જમણો હાથ આગળ લાવો.",
        "શ્વાસની ગતિ નિયમિત રાખો અને પેટ સહેજ અંદર રાખો."
      ]
    },
    tip: {
      en: "Land softly on the balls of your feet to protect your knees and ankles.",
      hi: "घुटनों और टखनों की सुरक्षा के लिए पंजों के बल धीरे से जमीन पर आएं।",
      gu: "ઘૂંટણ અને પગની ઘૂંટીના રક્ષણ માટે પંજાના ટેકે હળવેથી નીચે આવો."
    },
    safetyWarning: {
      en: "Hold onto a sturdy wall or chair back if you experience balance instability.",
      hi: "यदि संतुलन बनाने में कठिनाई हो तो किसी मजबूत दीवार या कुर्सी का सहारा लें।",
      gu: "જો સંતુલન જાળવવામાં મુશ્કેલી પડે તો દીવાલ કે ખુરશીનો ટેકો લો."
    },
    media: {
      image: "assets/images/exercises/squat-demo.png",
      thumbnail: "assets/images/thumbnails/day-1-squat.png",
      steps: [
        "assets/images/exercises/steps/squat-step-1.png",
        "assets/images/exercises/steps/squat-step-2.png",
        "assets/images/exercises/steps/squat-step-3.png"
      ],
      video: null
    },
    alternativeId: "arm-circles"
  },
  {
    id: "squat",
    name: {
      en: "Bodyweight Squat",
      hi: "बॉडीवेट स्क्वाट",
      gu: "બોડીવેટ સ્ક્વોટ"
    },
    category: "lower_body",
    difficulty: "beginner",
    primaryMuscles: ["quadriceps", "glutes"],
    secondaryMuscles: ["hamstrings", "core", "calves"],
    defaultDuration: null,
    defaultReps: 12,
    restTime: 30,
    instructions: {
      en: [
        "Stand with your feet shoulder-width apart, toes pointing slightly outward.",
        "Engage your core, lift your chest, and look straight ahead.",
        "Hinge at your hips and bend your knees as if sitting back into an invisible chair.",
        "Lower until your thighs are parallel to the floor, keeping your heels firmly planted.",
        "Press powerfully through your heels to return to the starting standing position."
      ],
      hi: [
        "पैरों को कंधों की चौड़ाई पर रखें, पंजे हल्के से बाहर की ओर रखें।",
        "पेट को कसें, छाती को सीधा उठाएं और सीधे सामने देखें।",
        "कूल्हों को पीछे धकेलें और घुटनों को मोड़ें जैसे किसी कुर्सी पर बैठ रहे हों।",
        "जांघों को जमीन के समानांतर लाएं, अपनी एड़ियों को जमीन से सटाए रखें।",
        "एड़ियों पर जोर देते हुए सीधे खड़े हो जाएं।"
      ],
      gu: [
        "બંને પગ ખભા જેટલા પહોળા રાખીને ઊભા રહો, પંજા સહેજ બહાર રાખો.",
        "પેટ સજ્જડ રાખો, છાતી સીધી રાખો અને સામે જુઓ.",
        "ખુરશીમાં બેસતા હોવ તેમ કમર પાછળ લઈ ઘૂંટણ વાળો.",
        "સાથળ જમીનને સમાંતર થાય ત્યાં સુધી નીચે બેસો, એડી જમીન પર રાખો.",
        "એડી પર ભાર આપીને ફરી સીધા ઊભા થઈ જાઓ."
      ]
    },
    tip: {
      en: "Keep your knees behind your toes and avoid letting them collapse inward.",
      hi: "घुटनों को पंजों के पीछे रखें और उन्हें अंदर की तरफ न झुकने दें।",
      gu: "ઘૂંટણને પંજાથી આગળ ન જવા દો અને અંદરની તરફ વળવા ન દેશો."
    },
    safetyWarning: {
      en: "If you feel joint pinch in your knees, decrease your depth or use a chair for support.",
      hi: "यदि घुटनों में खिंचाव या दर्द हो, तो कम नीचे जाएं या कुर्सी का सहारा लें।",
      gu: "જો ઘૂંટણમાં દુખાવો જણાય તો વધુ નીચે બેસવાનું ટાળો અથવા ખુરશીનો ઉપયોગ કરો."
    },
    media: {
      image: "assets/images/exercises/squat-demo.png",
      thumbnail: "assets/images/thumbnails/day-1-squat.png",
      steps: [
        "assets/images/exercises/steps/squat-step-1.png",
        "assets/images/exercises/steps/squat-step-2.png",
        "assets/images/exercises/steps/squat-step-3.png"
      ],
      video: null
    },
    alternativeId: "chair-squat"
  },
  {
    id: "chair-squat",
    name: {
      en: "Chair Squat (Gentle)",
      hi: "चेयर स्क्वाट (सरल)",
      gu: "ખુરશી સ્ક્વોટ (સરળ)"
    },
    category: "lower_body",
    difficulty: "beginner",
    primaryMuscles: ["quadriceps", "glutes"],
    secondaryMuscles: ["core"],
    defaultDuration: null,
    defaultReps: 10,
    restTime: 30,
    instructions: {
      en: [
        "Stand 6 inches in front of a sturdy chair with feet shoulder-width apart.",
        "Extend arms in front of you for counter-balance.",
        "Slowly push your hips backward and sit down gently onto the chair seat.",
        "Pause for 1 second, then press through your heels to rise back up."
      ],
      hi: [
        "एक मजबूत कुर्सी के आगे खड़े हों, पैरों को कंधों की चौड़ाई पर रखें।",
        "संतुलन बनाने के लिए अपने दोनों हाथों को सामने सीधा रखें।",
        "कूल्हों को पीछे ले जाएं और आराम से कुर्सी पर बैठें।",
        "एक सेकंड रुकें, फिर एड़ियों के जोर से वापस सीधे खड़े हो जाएं।"
      ],
      gu: [
        "એક મજબૂત ખુરશી આગળ બંને પગ ખભા જેટલા પહોળા રાખી ઊભા રહો.",
        "સંતુલન માટે બંને હાથ સામે સીધા રાખો.",
        "ધીમે-ધીમે પાછળ બેસી ખુરશી પર હળવેથી સ્પર્શ કરો.",
        "એક ક્ષણ રોકાઈને એડી પર ભાર આપી ફરી ઊભા થઈ જાઓ."
      ]
    },
    tip: {
      en: "Do not plop down into the chair; use muscle control the entire way down.",
      hi: "कुर्सी पर झटके से न गिरें; मांसपेशियों के नियंत्रण से धीरे-धीरे बैठें।",
      gu: "ખુરશી પર ધબાય દઈને બેસવું નહીં; નિયંત્રણ રાખીને ધીમેથી બેસો."
    },
    safetyWarning: {
      en: "Ensure the chair is stable and will not slide back on the floor.",
      hi: "सुनिश्चित करें कि कुर्सी फिसले नहीं और मजबूत जमीन पर टिकी हो।",
      gu: "ખાતરી કરો કે ખુરશી લપસે નહીં તેવી સુરક્ષિત જગ્યાએ મૂકેલી છે."
    },
    media: {
      image: "assets/images/exercises/squat-demo.png",
      thumbnail: "assets/images/thumbnails/day-1-squat.png",
      steps: [
        "assets/images/exercises/steps/squat-step-1.png",
        "assets/images/exercises/steps/squat-step-2.png",
        "assets/images/exercises/steps/squat-step-3.png"
      ],
      video: null
    },
    alternativeId: "squat"
  },
  {
    id: "wall-pushup",
    name: {
      en: "Wall Push-Up",
      hi: "वॉल पुश-अप (दीवार का सहारा)",
      gu: "દીવાલ પુશ-અપ"
    },
    category: "upper_body",
    difficulty: "beginner",
    primaryMuscles: ["chest", "triceps"],
    secondaryMuscles: ["shoulders", "core"],
    defaultDuration: null,
    defaultReps: 10,
    restTime: 25,
    instructions: {
      en: [
        "Stand facing a wall at arm's length distance, feet hip-width apart.",
        "Place your palms flat on the wall at shoulder height and shoulder-width apart.",
        "Bend your elbows and slowly lower your chest towards the wall while keeping your body in a straight plank.",
        "Press firmly against the wall to return to the starting position."
      ],
      hi: [
        "दीवार के सामने एक हाथ की दूरी पर खड़े हों, पैरों में थोड़ी दूरी रखें।",
        "दोनों हथेलियों को कंधे की सीध में दीवार पर सपाट रखें।",
        "कोहनियों को मोड़ते हुए छाती को दीवार की ओर लाएं, शरीर को सीधा रखें।",
        "दीवार को धक्का देते हुए वापस पहली स्थिति में आएं।"
      ],
      gu: [
        "દીવાલથી એક હાથ જેટલા અંતરે બંને પગ વચ્ચે સહેજ જગ્યા રાખી ઊભા રહો.",
        "બંને હથેળીઓ ખભાની ઊંચાઈએ દીવાલ પર ટેકવો.",
        "કોણી વાળીને છાતીને દીવાલ તરફ લઈ જાઓ, શરીર સીધું રાખો.",
        "દીવાલને ધક્કો મારી ફરી શરૂઆતની સ્થિતિમાં આવો."
      ]
    },
    tip: {
      en: "Keep your elbows at a 45-degree angle rather than flaring them wide.",
      hi: "कोहनियों को बहुत बाहर न फैलाएं, उन्हें 45 डिग्री के कोण पर रखें।",
      gu: "કોણીને બહુ બહાર ફેલાવવાને બદલે 45 અંશના ખૂણે રાખો."
    },
    safetyWarning: {
      en: "Wear shoes with good grip so your feet do not slip on the floor.",
      hi: "अच्छी पकड़ वाले जूते या चटाई का उपयोग करें ताकि पैर न फिसलें।",
      gu: "પગ લપસે નહીં તે માટે પગરખાં અથવા યોગ્ય સાદડીનો ઉપયોગ કરો."
    },
    media: {
      image: "assets/images/exercises/squat-demo.png",
      thumbnail: "assets/images/thumbnails/day-6-pushup.png",
      steps: [
        "assets/images/exercises/steps/squat-step-1.png",
        "assets/images/exercises/steps/squat-step-2.png",
        "assets/images/exercises/steps/squat-step-3.png"
      ],
      video: null
    },
    alternativeId: "pushup"
  },
  {
    id: "pushup",
    name: {
      en: "Push-Up (Classic / Knees)",
      hi: "पुश-अप (क्लासिक / घुटनों पर)",
      gu: "પુશ-અપ (ક્લાસિક / ઘૂંટણ પર)"
    },
    category: "upper_body",
    difficulty: "intermediate",
    primaryMuscles: ["chest", "triceps"],
    secondaryMuscles: ["shoulders", "core"],
    defaultDuration: null,
    defaultReps: 10,
    restTime: 30,
    instructions: {
      en: [
        "Start in a high plank position on your hands and toes (or knees for modification).",
        "Keep hands slightly wider than shoulder-width and align wrists under shoulders.",
        "Inhale and lower your chest until it hovers just above the floor.",
        "Exhale and press the floor away until arms are extended without locking elbows."
      ],
      hi: [
        "हाथों और पंजों के बल प्लैंक स्थिति में आएं (सरल करने के लिए घुटने जमीन पर रख सकते हैं)।",
        "हाथों को कंधों से थोड़ा चौड़ा रखें।",
        "सांस लेते हुए छाती को जमीन के पास तक लाएं।",
        "सांस छोड़ते हुए जमीन को धकेलें और वापस ऊपर आएं।"
      ],
      gu: [
        "હાથ અને પંજા પર પ્લેન્ક સ્થિતિમાં આવો (સરળતા માટે ઘૂંટણ જમીન પર રાખી શકો છો).",
        "હાથ ખભાથી સહેજ પહોળા રાખો.",
        "શ્વાસ અંદર લેતા છાતીને જમીન નજીક લાવો.",
        "શ્વાસ બહાર કાઢતા હાથ સીધા કરી ફરી ઉપર આવો."
      ]
    },
    tip: {
      en: "Keep your neck neutral by gazing a few inches ahead of your fingers.",
      hi: "गर्दन को सीधा रखें और हाथों से कुछ इंच आगे जमीन पर देखें।",
      gu: "ગરદન સીધી રાખો અને આંગળીઓથી થોડે આગળ નજર રાખો."
    },
    safetyWarning: {
      en: "Do not let your hips sag towards the ground; maintain a tight core.",
      hi: "कमर को नीचे की ओर झुकने न दें; पेट को कसकर सीधा रखें।",
      gu: "કમરને નીચે ઝૂકવા ન દેશો; પેટ સજ્જડ રાખી શરીર સીધું રાખો."
    },
    media: {
      image: "assets/images/exercises/squat-demo.png",
      thumbnail: "assets/images/thumbnails/day-6-pushup.png",
      steps: [
        "assets/images/exercises/steps/squat-step-1.png",
        "assets/images/exercises/steps/squat-step-2.png",
        "assets/images/exercises/steps/squat-step-3.png"
      ],
      video: null
    },
    alternativeId: "wall-pushup"
  },
  {
    id: "lunges",
    name: {
      en: "Forward Lunges",
      hi: "फॉरवर्ड लंजेस (कदम ताल लंज)",
      gu: "ફોરવર્ડ લંજિસ (આગળ ડગલાં)"
    },
    category: "lower_body",
    difficulty: "beginner",
    primaryMuscles: ["quadriceps", "glutes"],
    secondaryMuscles: ["hamstrings", "calves", "core"],
    defaultDuration: null,
    defaultReps: 10,
    restTime: 30,
    instructions: {
      en: [
        "Stand tall with feet hip-width apart and hands resting on your hips.",
        "Step forward with your right leg and lower your hips until both knees are bent at roughly 90 degrees.",
        "Ensure your front knee is directly above your ankle, not pushed past your toes.",
        "Push off your front foot to return to the starting position, then repeat on the opposite leg."
      ],
      hi: [
        "सीधे खड़े हों, पैरों में थोड़ी दूरी रखें और हाथों को कमर पर रखें।",
        "दाहिने पैर को आगे बढ़ाएं और घुटने मोड़ें ताकि दोनों घुटने 90 डिग्री का कोण बनाएं।",
        "ध्यान रहे कि आगे का घुटना टखने के ठीक ऊपर रहे, पंजे से आगे न जाए।",
        "आगे वाले पैर से धक्का देकर वापस खड़े हों और दूसरे पैर से दोहराएं।"
      ],
      gu: [
        "બંને પગ વચ્ચે સહેજ જગ્યા રાખી સીધા ઊભા રહો અને હાથ કમર પર રાખો.",
        "જમણો પગ આગળ મૂકો અને બંને ઘૂંટણ 90 અંશ વળે તેમ નીચે નમો.",
        "ધ્યાન રાખો કે આગળનો ઘૂંટણ પંજાથી આગળ ન નીકળે.",
        "આગળના પગે ભાર આપી પાછા ઊભા થાઓ અને ડાબા પગે પુનરાવર્તન કરો."
      ]
    },
    tip: {
      en: "Keep your torso upright and avoid leaning forward over your front thigh.",
      hi: "धड़ को बिल्कुल सीधा रखें और आगे की तरफ झुकने से बचें।",
      gu: "શરીરને સીધું રાખો અને આગળ તરફ ઝૂકવાનું ટાળો."
    },
    safetyWarning: {
      en: "If you have knee vulnerability, take smaller steps and reduce depth.",
      hi: "यदि घुटनों में तकलीफ हो, तो छोटे कदम लें और कम झुकें।",
      gu: "જો ઘૂંટણમાં તકલીફ હોય તો નાનાં ડગલાં ભરો અને ઓછું નમો."
    },
    media: {
      image: "assets/images/exercises/squat-demo.png",
      thumbnail: "assets/images/thumbnails/day-2-lunge.png",
      steps: [
        "assets/images/exercises/steps/squat-step-1.png",
        "assets/images/exercises/steps/squat-step-2.png",
        "assets/images/exercises/steps/squat-step-3.png"
      ],
      video: null
    },
    alternativeId: "squat"
  },
  {
    id: "plank",
    name: {
      en: "Plank Hold",
      hi: "प्लैंक होल्ड (कोर स्थिरता)",
      gu: "પ્લેન્ક હોલ્ડ (પેટની મજબૂતી)"
    },
    category: "core",
    difficulty: "beginner",
    primaryMuscles: ["core", "transverse_abdominis"],
    secondaryMuscles: ["shoulders", "glutes", "back"],
    defaultDuration: 30,
    defaultReps: null,
    restTime: 30,
    instructions: {
      en: [
        "Place forearms on the floor with elbows directly under shoulders.",
        "Extend legs behind you with toes planted, forming a straight line from head to heels.",
        "Draw your navel toward your spine, tighten your glutes, and breathe steadily.",
        "Hold the posture without letting your lower back sag or your hips rise high."
      ],
      hi: [
        "अपनी कोहनियों को कंधों के ठीक नीचे जमीन पर टिकाएं।",
        "पैरों को पीछे फैलाएं और पंजों पर टिकें, सिर से एड़ी तक शरीर को सीधा रखें।",
        "नाभि को अंदर खींचें, कूल्हों को कसें और सामान्य सांस लेते रहें।",
        "कमर को नीचे लटकने न दें और इस स्थिति में बने रहें।"
      ],
      gu: [
        "કોણી ખભાની બરાબર નીચે જમીન પર ટેકવો.",
        "પગ પાછળ ખેંચી પંજા પર ટેકવો, માથાથી એડી સુધી શરીર સીધું રાખો.",
        "પેટ અંદર ખેંચો અને નિયમિત શ્વાસ લેતા રહો.",
        "કમરને ઝૂકવા ન દો અને આ સ્થિતિ જાળવી રાખો."
      ]
    },
    tip: {
      en: "Imagine pulling your elbows towards your toes to activate maximum core tension.",
      hi: "अपनी कोहनियों को पंजों की ओर खींचने का प्रयास करें ताकि पेट की मांसपेशियां सक्रिय रहें।",
      gu: "કોણીને પંજા તરફ ખેંચવાનો પ્રયાસ કરો જેથી પેટના સ્નાયુઓ વધુ સક્રિય બને."
    },
    safetyWarning: {
      en: "Drop your knees to the mat immediately if you experience pain in your lower back.",
      hi: "यदि पीठ के निचले हिस्से में दर्द हो, तो तुरंत घुटने जमीन पर टिका दें।",
      gu: "જો કમરમાં દુખાવો થાય તો તરત જ ઘૂંટણ જમીન પર ટેકવી દો."
    },
    media: {
      image: "assets/images/exercises/squat-demo.png",
      thumbnail: "assets/images/thumbnails/day-9-plank.png",
      steps: [
        "assets/images/exercises/steps/squat-step-1.png",
        "assets/images/exercises/steps/squat-step-2.png",
        "assets/images/exercises/steps/squat-step-3.png"
      ],
      video: null
    },
    alternativeId: "dead-bug"
  },
  {
    id: "jumping-jacks",
    name: {
      en: "Jumping Jacks (or Step Jacks)",
      hi: "जंपिंग जैक्स (कार्डियो)",
      gu: "જમ્પિંગ જેક્સ (કાર્ડિયો)"
    },
    category: "cardio",
    difficulty: "beginner",
    primaryMuscles: ["calves", "quadriceps"],
    secondaryMuscles: ["shoulders", "cardiovascular"],
    defaultDuration: 40,
    defaultReps: null,
    restTime: 20,
    instructions: {
      en: [
        "Stand tall with feet together and arms hanging relaxed by your sides.",
        "Jump feet outward slightly wider than shoulder-width while sweeping arms overhead.",
        "Immediately jump back to the starting position and repeat continuously.",
        "Low-impact option (Step Jack): Step one foot to the side while raising arms, alternate sides without jumping."
      ],
      hi: [
        "पैरों को मिलाकर और हाथों को बगल में रखकर सीधे खड़े हों।",
        "पैरों को बाहर की ओर कूदते हुए फैलाएं और हाथों को सिर के ऊपर ले जाएं।",
        "तुरंत वापस कूदकर पहली स्थिति में आएं और इसे दोहराएं।",
        "सरल विकल्प: बिना कूदे एक पैर को बारी-बारी से बगल में निकालें और हाथ उठाएं।"
      ],
      gu: [
        "બંને પગ જોડે અને હાથ બાજુ પર રાખી સીધા ઊભા રહો.",
        "કૂદીને બંને પગ પહોળા કરો અને હાથ માથા ઉપર લઈ જાઓ.",
        "તરત જ કૂદીને મૂળ સ્થિતિમાં પાછા આવો.",
        "સરળ વિકલ્પ: કૂદ્યા વગર વારાફરતી એક-એક પગ બાજુમાં મૂકી હાથ ઊંચા કરો."
      ]
    },
    tip: {
      en: "Keep knees soft and bend them slightly as you land to absorb shock.",
      hi: "जमीन पर आते समय घुटनों को हल्का मोड़े रखें ताकि झटके से बचाव हो।",
      gu: "નીચે આવતી વખતે ઘૂંટણને સહેજ વળેલા રાખો જેથી આંચકો ન લાગે."
    },
    safetyWarning: {
      en: "If jumping stresses your joints, choose the zero-impact Step Jack alternative.",
      hi: "यदि जोड़ों में समस्या हो, तो बिना कूदे स्टेप जैक का अभ्यास करें।",
      gu: "જો સાંધામાં તકલીફ હોય તો કૂદ્યા વગરનું સ્ટેપ જેક કરો."
    },
    media: {
      image: "assets/images/exercises/squat-demo.png",
      thumbnail: "assets/images/thumbnails/day-3-jumping.png",
      steps: [
        "assets/images/exercises/steps/squat-step-1.png",
        "assets/images/exercises/steps/squat-step-2.png",
        "assets/images/exercises/steps/squat-step-3.png"
      ],
      video: null
    },
    alternativeId: "march-in-place"
  },
  {
    id: "arm-raises",
    name: {
      en: "Arm Raises & Circles",
      hi: "आर्म रेजेज और सर्कल्स (कंधे का व्यायाम)",
      gu: "આર્મ રેઝિસ અને વર્તુળ (ખભાની કસરત)"
    },
    category: "upper_body",
    difficulty: "beginner",
    primaryMuscles: ["deltoids", "upper_back"],
    secondaryMuscles: ["trapezius", "core"],
    defaultDuration: 45,
    defaultReps: null,
    restTime: 20,
    instructions: {
      en: [
        "Stand tall with shoulders rolled down and back, core engaged.",
        "Extend arms straight out to the sides at shoulder height, palms facing down.",
        "Make small, controlled forward circles for half the duration.",
        "Reverse and make small, controlled backward circles for the remaining time."
      ],
      hi: [
        "सीधे खड़े हों, कंधों को पीछे खींचें और पेट को हल्का कसें।",
        "दोनों हाथों को कंधों की सीध में बगल में फैलाएं, हथेलियां नीचे रखें।",
        "हाथों से छोटे और नियंत्रित आगे की ओर गोल चक्कर बनाएं।",
        "फिर दिशा बदलकर पीछे की ओर गोल चक्कर बनाएं।"
      ],
      gu: [
        "સીધા ઊભા રહો, ખભા પાછળ રાખો અને પેટ સહેજ અંદર રાખો.",
        "બંને હાથ ખભાની ઊંચાઈએ બાજુમાં સીધા ફેલાવો, હથેળી નીચે રાખો.",
        "હાથથી આગળની તરફ નાના વર્તુળો બનાવો.",
        "ત્યારબાદ વિરુદ્ધ દિશામાં પાછળની તરફ વર્તુળો બનાવો."
      ]
    },
    tip: {
      en: "Keep your neck relaxed and do not shrug your shoulders up to your ears.",
      hi: "गर्दन को तनावमुक्त रखें और कंधों को कानों के पास न सिकोड़ें।",
      gu: "ગરદન હળવી રાખો અને ખભા કાન તરફ સંકોચવા ન દેશો."
    },
    safetyWarning: {
      en: "Lower your arms briefly if you feel muscle cramp or sharp pinching.",
      hi: "यदि अत्यधिक दर्द या ऐंठन लगे तो हाथों को कुछ सेकंड नीचे कर लें।",
      gu: "જો વધુ પડતો દુખાવો જણાય તો થોડી ક્ષણો હાથ નીચે કરી લો."
    },
    media: {
      image: "assets/images/exercises/squat-demo.png",
      thumbnail: "assets/images/thumbnails/day-4-arms.png",
      steps: [
        "assets/images/exercises/steps/squat-step-1.png",
        "assets/images/exercises/steps/squat-step-2.png",
        "assets/images/exercises/steps/squat-step-3.png"
      ],
      video: null
    },
    alternativeId: "wall-pushup"
  },
  {
    id: "wall-sit",
    name: {
      en: "Wall Sit",
      hi: "वॉल सिट (दीवार पर बैठना)",
      gu: "દીવાલ બેઠક (વોલ સીટ)"
    },
    category: "lower_body",
    difficulty: "beginner",
    primaryMuscles: ["quadriceps", "glutes"],
    secondaryMuscles: ["calves", "core"],
    defaultDuration: 30,
    defaultReps: null,
    restTime: 30,
    instructions: {
      en: [
        "Stand with your back flat against a smooth wall, feet about 2 feet outward.",
        "Slide your back down the wall until your thighs are nearly parallel to the floor.",
        "Keep your knees stacked directly over your ankles.",
        "Press your flat back into the wall and hold the posture while breathing deeply."
      ],
      hi: [
        "अपनी पीठ को दीवार से सटाकर खड़े हों, पैरों को दीवार से 2 फीट आगे रखें।",
        "दीवार के सहारे नीचे फिसलें जब तक कि जांघें जमीन के समानांतर न आ जाएं।",
        "घुटनों को टखनों के ठीक ऊपर सीधा रखें।",
        "पूरी पीठ को दीवार से दबाए रखें और गहरी सांस लेते रहें।"
      ],
      gu: [
        "દીવાલને અડીને પીઠ ટેકવી ઊભા રહો, પગ દીવાલથી 2 ફૂટ આગળ રાખો.",
        "દીવાલના ટેકે નીચે સરકો જ્યાં સુધી સાથળ જમીનને સમાંતર ન થાય.",
        "ઘૂંટણ બરાબર ઘૂંટીની ઉપર રહે તે રીતે રાખો.",
        "પીઠ દીવાલ પર દબાવી રાખી ઊંડા શ્વાસ લેતા રહો."
      ]
    },
    tip: {
      en: "Do not let your knees extend past your toes; adjust your foot distance before sliding down.",
      hi: "घुटनों को पंजों से आगे न निकलने दें; बैठने से पहले पैरों की दूरी ठीक कर लें।",
      gu: "ઘૂંટણને પંજાથી આગળ જવા ન દો; નીચે સરકતા પહેલાં પગનું અંતર યોગ્ય રાખો."
    },
    safetyWarning: {
      en: "Slide up and stand if your knees feel acute pressure.",
      hi: "यदि घुटनों में तेज दबाव लगे, तो धीरे से ऊपर उठ जाएं।",
      gu: "જો ઘૂંટણ પર વધુ દબાણ આવે તો ધીમેથી ઉપર ઊભા થઈ જાઓ."
    },
    media: {
      image: "assets/images/exercises/squat-demo.png",
      thumbnail: "assets/images/thumbnails/day-5-wallsit.png",
      steps: [
        "assets/images/exercises/steps/squat-step-1.png",
        "assets/images/exercises/steps/squat-step-2.png",
        "assets/images/exercises/steps/squat-step-3.png"
      ],
      video: null
    },
    alternativeId: "chair-squat"
  },
  {
    id: "mountain-climbers",
    name: {
      en: "Mountain Climbers",
      hi: "माउंटेन क्लाइम्बर्स (पर्वतारोही व्यायाम)",
      gu: "માઉન્ટેન ક્લાઇમ્બર્સ (પર્વતારોહક કસરત)"
    },
    category: "cardio",
    difficulty: "intermediate",
    primaryMuscles: ["core", "hip_flexors"],
    secondaryMuscles: ["shoulders", "quadriceps", "cardiovascular"],
    defaultDuration: 30,
    defaultReps: null,
    restTime: 25,
    instructions: {
      en: [
        "Start in a high push-up plank position with hands under shoulders.",
        "Drive your right knee forward toward your chest without letting your hips bounce high.",
        "Quickly return your right leg back and drive your left knee forward.",
        "Alternate legs in a smooth, continuous climbing cadence."
      ],
      hi: [
        "हाथों और पंजों के बल प्लैंक स्थिति में आएं।",
        "दाहिने घुटने को छाती की तरफ आगे लाएं, कूल्हों को ज्यादा ऊपर न उठाएं।",
        "दाहिने पैर को वापस ले जाएं और तुरंत बाएं घुटने को आगे लाएं।",
        "लयबद्ध तरीके से दोनों पैरों को बारी-बारी से आगे-पीछे करें।"
      ],
      gu: [
        "હાથ ખભા નીચે રાખી પ્લેન્ક પોઝિશનમાં આવો.",
        "જમણો ઘૂંટણ છાતી તરફ આગળ લાવો, કમર બહુ ઊંચી ન કરો.",
        "જમણો પગ પાછળ લઈ તરત જ ડાબો ઘૂંટણ આગળ લાવો.",
        "ચાલતા હોવ તેમ વારાફરતી બંને પગે લયબદ્ધ રીતે કરો."
      ]
    },
    tip: {
      en: "Keep your weight centered over your hands rather than leaning back onto your toes.",
      hi: "शरीर का भार हाथों पर संतुलित रखें, पीछे की ओर न झुकें।",
      gu: "શરીરનું વજન હાથ પર સંતુલિત રાખો, પાછળ તરફ ન નમો."
    },
    safetyWarning: {
      en: "Perform at a slow walking tempo if your heart rate spikes too rapidly.",
      hi: "यदि सांस बहुत फूलने लगे, तो धीमी गति से एक-एक पैर आगे लाएं।",
      gu: "જો શ્વાસ ઝડપથી ચડવા લાગે તો ધીમી ગતિએ કરો."
    },
    media: {
      image: "assets/images/exercises/squat-demo.png",
      thumbnail: "assets/images/thumbnails/day-10-climber.png",
      steps: [
        "assets/images/exercises/steps/squat-step-1.png",
        "assets/images/exercises/steps/squat-step-2.png",
        "assets/images/exercises/steps/squat-step-3.png"
      ],
      video: null
    },
    alternativeId: "march-in-place"
  },
  {
    id: "glute-bridge",
    name: {
      en: "Glute Bridge",
      hi: "ग्लूट ब्रिज (कमर व कूल्हे का व्यायाम)",
      gu: "ગ્લૂટ બ્રિજ (કમર અને નિતંબની કસરત)"
    },
    category: "lower_body",
    difficulty: "beginner",
    primaryMuscles: ["glutes", "hamstrings"],
    secondaryMuscles: ["core", "lower_back"],
    defaultDuration: null,
    defaultReps: 12,
    restTime: 25,
    instructions: {
      en: [
        "Lie on your back on a mat with knees bent and feet flat, hip-width apart.",
        "Rest arms flat along your sides with palms down.",
        "Squeeze your glutes and push through your heels to lift your hips until your body forms a straight diagonal line from knees to shoulders.",
        "Pause at the top for 2 seconds, then slowly lower hips back down."
      ],
      hi: [
        "चटाई पर पीठ के बल लेटें, घुटने मोड़ें और पैर जमीन पर सपाट रखें।",
        "हाथों को बगल में सीधा फैलाकर रखें।",
        "कूल्हों को कसें और एड़ियों पर जोर देते हुए कमर को ऊपर उठाएं।",
        "ऊपर 2 सेकंड रुकें, फिर धीरे-धीरे कमर को नीचे लाएं।"
      ],
      gu: [
        "પીઠના બળે સાદડી પર સૂઈ જાઓ, ઘૂંટણ વાળી પગ જમીન પર સપાટ રાખો.",
        "બંને હાથ બાજુમાં સીધા રાખો.",
        "નિતંબ સજ્જડ કરી એડી પર ભાર આપી કમરને ઉપર ઊંચકો.",
        "ઉપર 2 ક્ષણ રોકાઈને ધીમેથી કમર નીચે લાવો."
      ]
    },
    tip: {
      en: "Do not hyperextend your lower back at the top; lift primarily with your glute muscles.",
      hi: "कमर को जरूरत से ज्यादा ऊपर न खींचें; केवल कूल्हों की ताकत से उठें।",
      gu: "કમરને વધુ પડતી ખેંચવી નહીં; માત્ર નિતંબના સ્નાયુઓથી ઊંચકો."
    },
    safetyWarning: {
      en: "Keep your neck relaxed on the mat throughout the lift.",
      hi: "गर्दन को पूरी तरह चटाई पर टिका कर रखें।",
      gu: "ગરદન સાદડી પર સંપૂર્ણપણે હળવી રાખો."
    },
    media: {
      image: "assets/images/exercises/squat-demo.png",
      thumbnail: "assets/images/thumbnails/day-8-squatlunge.png",
      steps: [
        "assets/images/exercises/steps/squat-step-1.png",
        "assets/images/exercises/steps/squat-step-2.png",
        "assets/images/exercises/steps/squat-step-3.png"
      ],
      video: null
    },
    alternativeId: "chair-squat"
  },
  {
    id: "bird-dog",
    name: {
      en: "Bird Dog Stability",
      hi: "बर्ड डॉग (रीढ़ व कोर संतुलन)",
      gu: "બર્ડ ડોગ (કરોડરજ્જુ અને સંતુલન)"
    },
    category: "core",
    difficulty: "beginner",
    primaryMuscles: ["core", "lower_back"],
    secondaryMuscles: ["glutes", "shoulders"],
    defaultDuration: null,
    defaultReps: 10,
    restTime: 25,
    instructions: {
      en: [
        "Begin on your hands and knees in a tabletop position, wrists under shoulders and knees under hips.",
        "Simultaneously reach your right arm straight forward and kick your left leg straight back.",
        "Hold for 1 to 2 seconds, maintaining a level pelvis without rotating hips.",
        "Return slowly to tabletop, then alternate to left arm and right leg."
      ],
      hi: [
        "दोनों हाथों और घुटनों पर चौपाया स्थिति (टेबलटॉप) में आएं।",
        "दाहिने हाथ को आगे सीधा फैलाएं और बाएं पैर को पीछे सीधा फैलाएं।",
        "1-2 सेकंड रुकें, कमर को बिल्कुल सीधा और संतुलित रखें।",
        "धीरे से वापस आएं और विपरीत हाथ-पैर से दोहराएं।"
      ],
      gu: [
        "બંને હાથ અને ઘૂંટણ પર ટેબલની જેમ ચોપગા ઊભા રહો.",
        "જમણો હાથ આગળ સીધો લંબાવો અને ડાબો પગ પાછળ સીધો લંબાવો.",
        "1-2 ક્ષણ રોકાઓ, કમરને સીધી અને સ્થિર રાખો.",
        "ધીમેથી પાછા આવો અને વિરુદ્ધ હાથ-પગે કરો."
      ]
    },
    tip: {
      en: "Imagine balancing a cup of water on your lower back throughout the movement.",
      hi: "सोचें कि आपकी पीठ पर पानी का गिलास रखा है जो छलकना नहीं चाहिए।",
      gu: "ધ્યાન રાખો કે કમર સહેજ પણ હાલકડોલક ન થાય."
    },
    safetyWarning: {
      en: "Do not arch your spine high into hyperextension; keep it neutral.",
      hi: "पीठ को बहुत अधिक ऊपर न मोड़ें; रीढ़ को सीधा रखें।",
      gu: "પીઠને બહુ ઊંચી ન વાળો; કરોડરજ્જુ સીધી રાખો."
    },
    media: {
      image: "assets/images/exercises/squat-demo.png",
      thumbnail: "assets/images/thumbnails/day-9-plank.png",
      steps: [
        "assets/images/exercises/steps/squat-step-1.png",
        "assets/images/exercises/steps/squat-step-2.png",
        "assets/images/exercises/steps/squat-step-3.png"
      ],
      video: null
    },
    alternativeId: "plank"
  },
  {
    id: "rest-recovery",
    name: {
      en: "Rest & Active Recovery",
      hi: "विश्राम और स्वास्थ्य लाभ (रिकवरी)",
      gu: "વિશ્રામ અને રિકવરી"
    },
    category: "recovery",
    difficulty: "beginner",
    primaryMuscles: ["full_body", "nervous_system"],
    secondaryMuscles: ["mind"],
    defaultDuration: 180,
    defaultReps: null,
    restTime: 0,
    instructions: {
      en: [
        "Today is your designated muscle recovery day to let your body repair and recharge.",
        "Take a gentle 10-minute walk outside or perform light mobility stretches.",
        "Drink plenty of clean water (at least 2.5 to 3 liters throughout the day).",
        "Practice 5 minutes of mindful deep breathing: inhale for 4 seconds, exhale for 6 seconds."
      ],
      hi: [
        "आज आपके शरीर को आराम और मांसपेशियों को मजबूत बनाने का दिन है।",
        "10 मिनट की हल्की सैर करें या हल्के खिंचाव (स्ट्रेच) करें।",
        "दिन भर में पर्याप्त पानी पिएं (कम से कम 2.5 से 3 लीटर)।",
        "5 मिनट गहरी सांस लेने का अभ्यास करें: 4 सेकंड सांस लें, 6 सेकंड छोड़ें।"
      ],
      gu: [
        "આજે શરીરને આરામ આપવાનો અને સ્નાયુઓને ફરી તાજા કરવાનો દિવસ છે.",
        "10 મિનિટ હળવું ચાલો અથવા હળવા સ્ટ્રેચિંગ કરો.",
        "દિવસ દરમિયાન પૂરતું પાણી પીવો (ઓછામાં ઓછું 2.5 થી 3 લીટર).",
        "5 મિનિટ ઊંડા શ્વાસ લો: 4 સેકન્ડ શ્વાસ અંદર લો, 6 સેકન્ડ બહાર કાઢો."
      ]
    },
    tip: {
      en: "Recovery is when your body actually builds muscle and burns fat efficiently.",
      hi: "आराम के दौरान ही शरीर मांसपेशियों को मजबूत बनाता है और ऊर्जा संचित करता है।",
      gu: "આરામ દરમિયાન જ શરીર સ્નાયુઓને મજબૂત બનાવે છે અને ઊર્જા વધારે છે."
    },
    safetyWarning: {
      en: "Do not attempt high-intensity workouts today. Prioritize sleep and hydration.",
      hi: "आज कोई भारी व्यायाम न करें। अच्छी नींद और पानी को प्राथमिकता दें।",
      gu: "આજે કોઈ ભારે કસરત ન કરો. સારી ઊંઘ અને પૂરતું પાણી લેવા પર ધ્યાન આપો."
    },
    media: {
      image: "assets/images/exercises/squat-demo.png",
      thumbnail: "assets/images/thumbnails/day-7-rest.png",
      steps: [
        "assets/images/exercises/steps/squat-step-1.png",
        "assets/images/exercises/steps/squat-step-2.png",
        "assets/images/exercises/steps/squat-step-3.png"
      ],
      video: null
    },
    alternativeId: "march-in-place"
  }
];

export function getExerciseById(id) {
  return exercises.find(ex => ex.id === id) || exercises[0];
}
