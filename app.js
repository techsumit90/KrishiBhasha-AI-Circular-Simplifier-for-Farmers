// KrishiBhasha AI Interactive Demo JavaScript (v2 – bug-fix)

/* ------------------------------------------------------------
  Sample data and translations
------------------------------------------------------------ */
const sampleData = {
  original:
    "As per the provisions of the Pradhan Mantri Fasal Bima Yojana (PMFBY), all farmers cultivating notified crops in notified areas during the notified season are eligible for crop insurance coverage. The premium rates are 2% of Sum Insured for Kharif crops, 1.5% for Rabi crops, and 5% for annual commercial and horticultural crops. Farmers must submit their applications along with required documents including land records, Aadhaar card, bank account details, and sowing certificate to the nearest Common Service Center or designated insurance company representative within the prescribed timeline of 30 days from the date of sowing.",

  simplified:
    "• यह फसल बीमा योजना है जो आपकी फसल को प्राकृतिक आपदा से सुरक्षा देती है\n• खरीफ फसल के लिए केवल 2% प्रीमियम देना होगा\n• रबी फसल के लिए केवल 1.5% प्रीमियम देना होगा\n• बुआई के 30 दिन के अंदर आवेदन करना जरूरी है\n• जरूरी कागजात: आधार कार्ड, बैंक पासबुक, जमीन के कागजात\n• नजदीकी CSC सेंटर या बीमा एजेंट से संपर्क करें",

  actionSteps: [
    "अपने नजदीकी CSC सेंटर में जाएं",
    "आधार कार्ड, बैंक पासबुक, जमीन के कागजात ले जाएं",
    "बुआई के 30 दिन के अंदर आवेदन जमा करें",
    "प्रीमियम की राशि जमा करें",
    "रसीद को संभाल कर रखें",
  ],

  languages: [
    { code: "hi", name: "हिंदी", english: "Hindi" },
    { code: "mr", name: "मराठी", english: "Marathi" },
    { code: "te", name: "తెలుగు", english: "Telugu" },
    { code: "ta", name: "தமிழ்", english: "Tamil" },
    { code: "bn", name: "বাংলা", english: "Bengali" },
    { code: "gu", name: "ગુજરાતી", english: "Gujarati" },
  ],
};

const translations = {
  hi: sampleData.simplified,
  mr: "• ही पीक विमा योजना आहे जी तुमच्या पिकाचे नैसर्गिक आपत्तींपासून संरक्षण करते\n• खरीप पिकासाठी फक्त 2% प्रीमियम द्यावे लागेल\n• रब्बी पिकासाठी फक्त 1.5% प्रीमियम द्यावे लागेल\n• पेरणीच्या 30 दिवसांत अर्ज करणे आवश्यक आहे\n• आवश्यक कागदपत्रे: आधार कार्ड, बँक पासबुक, जमिनीची कागदपत्रे\n• जवळच्या CSC केंद्र किंवा विमा एजंटशी संपर्क साधा",
  te: "• ఇది మీ పంటను ప్రకృతి వైపరీత్యాల నుండి రక్షించే పంట బీమా పథకం\n• ఖరీఫ్ పంటలకు కేవలం 2% ప్రీమియం చెల్లించాలి\n• రబీ పంటలకు కేవలం 1.5% ప్రీమియం చెల్లించాలి\n• విత్తనల తర్వాత 30 రోజుల్లో దరఖాస్తు చేయాలి\n• అవసరమైన పత్రాలు: ఆధార్ కార్డ్, బ్యాంక్ పాస్‌బుక్, భూమి పత్రాలు\n• సమీప CSC కేంద్రం లేదా బీమా ఏజెంట్‌ను సంప్రదించండి",
  ta: "• இது உங்கள் பயிரை இயற்கை பேரிடர்களிலிருந்து பாதுகாக்கும் பயிர் பீமா திட்டம்\n• கரீப் பயிர்களுக்கு வெறும் 2% பிரீமியம் செலுத்த வேண்டும்\n• ரபி பயிர்களுக்கு வெறும் 1.5% பிரீமியம் செலுத்த வேண்டும்\n• விதைப்பிற்குப் பிறகு 30 நாட்களுக்குள் விண்ணப்பிக்க வேண்டும்\n• தேவையான ஆவணங்கள்: ஆதார் கார்டு, வங்கி பாஸ்புக், நில ஆவணங்கள்\n• அருகிலுள்ள CSC மையம் அல்லது பீமா ஏஜெண்டைத் தொடர்பு கொள்ளுங்கள்",
  bn: "• এটি ফসল বীমা পরিকল্পনা যা আপনার ফসলকে প্রাকৃতিক দুর্যোগ থেকে সুরক্ষা দেয়\n• খরিফ ফসলের জন্য মাত্র 2% প্রিমিয়াম দিতে হবে\n• রবি ফসলের জন্য মাত্র 1.5% প্রিমিয়াম দিতে হবে\n• বপনের 30 দিনের মধ্যে আবেদন করা প্রয়োজন\n• প্রয়োজনীয় কাগজপত্র: আধার কার্ড, ব্যাংক পাসবুক, জমির কাগজ\n• নিকটস্থ CSC কেন্দ্র বা বীমা এজেন্টের সাথে যোগাযোগ করুন",
  gu: "• આ પાક વીમા યોજના છે જે તમારા પાકને કુદરતી આફતોથી સુરક્ષા આપે છે\n• ખરીફ પાક માટે માત્ર 2% પ્રીમિયમ આપવાનું રહેશે\n• રબી પાક માટે માત્ર 1.5% પ્રીમિયમ આપવાનું રહેશે\n• વાવણીના 30 દિવસમાં અરજી કરવી જરૂરી છે\n• જરૂરી કાગળો: આધાર કાર્ડ, બેંક પાસબુક, જમીનના કાગળો\n• નજીકના CSC કેન્દ્ર અથવા વીમા એજન્ટનો સંપર્ક કરો",
};

/* ------------------------------------------------------------
  DOM references
------------------------------------------------------------ */
let fileInput,
  sampleBtn,
  processSection,
  processList,
  resultSection,
  languageSelect,
  summaryText,
  playAudio,
  actionSteps;

/* ------------------------------------------------------------
  INITIALISE APP AFTER DOM READY
------------------------------------------------------------ */
window.addEventListener("DOMContentLoaded", init);

function init() {
  // Grab elements
  fileInput = document.getElementById("fileInput");
  sampleBtn = document.getElementById("sampleBtn");
  processSection = document.getElementById("processSection");
  processList = document.getElementById("processList");
  resultSection = document.getElementById("resultSection");
  languageSelect = document.getElementById("languageSelect");
  summaryText = document.getElementById("summaryText");
  playAudio = document.getElementById("playAudio");
  actionSteps = document.getElementById("actionSteps");

  // Event listeners
  fileInput.addEventListener("change", () => startProcessing());
  sampleBtn.addEventListener("click", () => startProcessing());
  languageSelect.addEventListener("change", handleLanguageChange);
  playAudio.addEventListener("click", handleAudioPlay);

  // Populate language dropdown now (hidden initially but ready)
  populateLanguages();

  // Smooth scrolling for nav links
  document.querySelectorAll('.nav-list a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(link.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

/* ------------------------------------------------------------
  Helpers
------------------------------------------------------------ */
function populateLanguages() {
  languageSelect.innerHTML = "";
  const defaultOpt = document.createElement("option");
  defaultOpt.value = "";
  defaultOpt.textContent = "Select Language";
  languageSelect.appendChild(defaultOpt);

  sampleData.languages.forEach((lang) => {
    const opt = document.createElement("option");
    opt.value = lang.code;
    opt.textContent = `${lang.name} (${lang.english})`;
    languageSelect.appendChild(opt);
  });
}

function startProcessing() {
  // Reset UI
  processSection.classList.remove("hidden");
  resultSection.classList.add("hidden");
  processList.innerHTML = "";

  const steps = [
    "Extracting text using OCR...",
    "Analyzing document content with GPT-4...",
    "Generating simplified summary...",
    "Translating summary into target languages...",
    "Generating audio using TTS...",
    "Processing complete!",
  ];

  // Build step list
  steps.forEach((step, idx) => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="process-icon" id="icon-${idx}"></span> ${step}`;
    processList.appendChild(li);
  });

  // Sequentially animate steps
  let current = 0;
  function nextStep() {
    const icon = document.getElementById(`icon-${current}`);
    if (icon) icon.classList.add("process-complete");
    current += 1;

    if (current < steps.length) {
      setTimeout(nextStep, 700);
    } else {
      // All done – show results after brief pause
      setTimeout(showResults, 500);
    }
  }
  setTimeout(nextStep, 700);
}

function showResults() {
  resultSection.classList.remove("hidden");

  // Default language Hindi
  languageSelect.value = "hi";
  updateSummaryDisplay("hi");
  populateActionSteps();

  // Scroll into view
  resultSection.scrollIntoView({ behavior: "smooth" });
}

function populateActionSteps() {
  actionSteps.innerHTML = "";
  sampleData.actionSteps.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    actionSteps.appendChild(li);
  });
}

function updateSummaryDisplay(langCode) {
  summaryText.textContent = translations[langCode] || sampleData.simplified;
}

function handleLanguageChange() {
  const code = languageSelect.value;
  if (code) updateSummaryDisplay(code);
}

function handleAudioPlay() {
  playAudio.disabled = true;
  playAudio.textContent = "Playing...";

  showToast("Audio summary is playing");

  setTimeout(() => {
    playAudio.disabled = false;
    playAudio.textContent = "Play Audio";
  }, 3000);
}

function showToast(msg) {
  const toast = document.createElement("div");
  toast.textContent = msg;
  toast.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--color-success);
    color: var(--color-white);
    padding: 10px 16px;
    border-radius: var(--radius-base);
    box-shadow: var(--shadow-md);
    z-index: 9999;
    opacity: 1;
    transition: opacity 0.4s ease;
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => document.body.removeChild(toast), 400);
  }, 2500);
}
