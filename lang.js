// lang.js: Arabic / English switching.
// The pages are written in English. In Arabic mode, every known English text below is swapped for its Arabic version.
// To fix a translation, edit the Arabic text on the right. To translate a new sentence, add a new line.
const ar = {
  // navbar + footer
  "⌂ Your Brand": "⌂ اسم الشركة", "Your Brand": "اسم الشركة", "Home": "الرئيسية", "About": "من نحن",
  "Properties": "العقارات", "Services": "خدماتنا", "List your properties": "اعرض عقاراتك", "Contact": "اتصل بنا",
  "Log in": "تسجيل الدخول", "Sign up": "إنشاء حساب", "Open menu": "فتح القائمة",
  "© 2026 Your Brand · Damascus, Syria": "© 2026 اسم الشركة · دمشق، سوريا",
  // home
  "Find Your": "اعثر على", "Perfect Property": "عقارك المثالي",
  "Homes for rent and sale in Damascus, plus full management for owners and Airbnb hosts.": "منازل للإيجار والبيع في دمشق، مع إدارة كاملة للملاك ومضيفي Airbnb.",
  "Browse properties": "تصفح العقارات", "Location (e.g. Al-Mezzeh)": "الموقع (مثال: المزة)",
  "Any type": "أي نوع", "For Rent": "للإيجار", "For Sale": "للبيع", "Any price": "أي سعر",
  "Under $500": "أقل من 500 دولار", "$500 - $1,000": "500 - 1,000 دولار", "Over $1,000": "أكثر من 1,000 دولار", "Search": "بحث",
  "Featured properties": "عقارات مميزة", "A few of our latest listings.": "بعض أحدث عقاراتنا.",
  "What we do": "ماذا نقدم", "Everything an owner or a renter needs, in one place.": "كل ما يحتاجه المالك أو المستأجر في مكان واحد.",
  "Property management": "إدارة العقارات", "We find tenants, collect rent and look after your property.": "نبحث عن المستأجرين ونحصّل الإيجار ونعتني بعقارك.",
  "Learn more": "اعرف المزيد", "Airbnb management": "إدارة Airbnb", "Listings, guests, cleaning and pricing handled for you.": "ندير الإعلانات والضيوف والتنظيف والتسعير نيابةً عنك.",
  "Renovations": "الترميم والتجديد", "Refresh your property to rent or sell for more.": "جدّد عقارك لتؤجره أو تبيعه بسعر أفضل.",
  "Own a property?": "هل تملك عقارًا؟", "List it with us for rent, sale or Airbnb, and we handle the rest.": "اعرضه معنا للإيجار أو البيع أو Airbnb ونتولى الباقي.",
  "List your property with us": "اعرض عقارك معنا",
  // properties
  "Filter by type, tap the heart to save the ones you like.": "صنّف حسب النوع، واضغط على القلب لحفظ ما يعجبك.", "All": "الكل", "Save to favorites": "حفظ في المفضلة",
  // services
  "Our services": "خدماتنا", "Pick what you need. We can also combine them.": "اختر ما تحتاجه، ويمكننا الجمع بينها أيضًا.",
  "Tenant search, contracts, rent collection, maintenance and regular updates for owners.": "البحث عن مستأجرين، العقود، تحصيل الإيجار، الصيانة، وتقارير دورية للمالك.",
  "Listing creation, guest messaging, check-ins, cleaning and pricing for short-term rentals.": "إنشاء الإعلان، التواصل مع الضيوف، الاستقبال، التنظيف والتسعير للإيجار قصير الأمد.",
  "Repairs, painting, furniture and full renovations to raise your rent or sale price.": "إصلاحات ودهان وأثاث وترميم كامل لرفع سعر الإيجار أو البيع.",
  "Contact us": "تواصل معنا",
  // list your properties
  "Rent it, sell it, or let us run it as an Airbnb. Send us the basics and we take care of the rest.": "أجّره أو بِعه أو دعنا ندير عقارك كإيجار قصير الأمد. أرسل لنا التفاصيل الأساسية ونتولى الباقي.",
  "Send us the details": "أرسل لنا التفاصيل", "It takes about two minutes.": "يستغرق الأمر دقيقتين تقريبًا.",
  "We call you": "نتصل بك", "We agree on the price, photos and how we work together.": "نتفق على السعر والصور وآلية العمل معًا.",
  "We list and manage it": "نعرض عقارك وندير شؤونه", "Your property goes on our site and we find the right tenant, buyer or guests.": "يظهر عقارك على موقعنا ونبحث عن المستأجر أو المشتري أو الضيوف المناسبين.",
  "No photos needed now. We will ask for them when we call.": "لا حاجة لإرسال صور الآن، سنطلبها منك عند الاتصال.",
  "About you": "معلوماتك", "Full name": "الاسم الكامل", "Phone number": "رقم الهاتف", "Email": "البريد الإلكتروني",
  "Best way to reach you": "أفضل طريقة للتواصل", "Phone call": "اتصال هاتفي", "WhatsApp": "واتساب",
  "About the property": "عن العقار", "Address or area (e.g. Al-Mezzeh, Damascus)": "العنوان أو المنطقة (مثال: المزة، دمشق)",
  "Apartment": "شقة", "House": "منزل", "Villa": "فيلا", "Commercial": "تجاري", "Land": "أرض",
  "Size (m²)": "المساحة (م²)", "Bedrooms": "غرف النوم", "Expected price or rent ($)": "السعر أو الإيجار المتوقع ($)",
  "What do you need?": "ماذا تحتاج؟", "Rent it out": "أريد تأجيره", "Sell it": "أريد بيعه", "Renovation": "الترميم",
  "Anything else we should know?": "هل هناك أي شيء آخر نحتاج معرفته؟", "Send my property": "أرسل عقاري",
  // about + contact
  "About us": "من نحن",
  "We are a Damascus-based team helping people rent, buy and manage property. Replace this text with your real story.": "نحن فريق في دمشق نساعد الناس على استئجار العقارات وشرائها وإدارتها. (استبدل هذا النص بقصتكم الحقيقية)",
  "Send a message or write to us on WhatsApp.": "أرسل لنا رسالة أو راسلنا عبر واتساب.", "Your name": "اسمك", "How can we help?": "كيف يمكننا مساعدتك؟",
  "Send message": "إرسال الرسالة", "Hisham Sammouneh": "هشام سمونة", "Business Lead Director / Owner": "مدير الأعمال / المالك",
  "📍 Damascus, Syria": "📍 دمشق، سوريا", "Chat on WhatsApp": "تحدث معنا على واتساب", "Map goes here": "الخريطة هنا",
  // form messages
  "Sending...": "جارٍ الإرسال...",
  "Thank you! We received your message and will contact you soon.": "شكرًا لك! وصلتنا رسالتك وسنتواصل معك قريبًا.",
  "Something went wrong. Please try again or message us on WhatsApp.": "حدث خطأ ما. يرجى المحاولة مرة أخرى أو مراسلتنا عبر واتساب."
};

let lang = localStorage.getItem("lang") || "ar";            // Arabic is the default
const t = text => (lang === "ar" && ar[text]) || text;      // translate one string (script.js uses this too)
const originals = new Map();                                // remembers the English text of each translated text node

function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";   // rtl = right-to-left layout
  if (window.refreshCards) refreshCards();                        // redraw the property cards

  // 1. Text on the page: remember the English once, then swap
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const n = walker.currentNode;
    if (!originals.has(n) && ar[n.nodeValue.trim()] && n.parentNode.tagName !== "SCRIPT") originals.set(n, n.nodeValue);
  }
  originals.forEach((english, n) => {
    if (!n.isConnected) return originals.delete(n);
    const key = english.trim();
    n.nodeValue = lang === "ar" ? english.replace(key, () => ar[key]) : english;
  });

  // 2. Placeholders and aria-labels
  document.querySelectorAll("[placeholder],[aria-label]").forEach(el => {
    ["placeholder", "aria-label"].forEach(attr => {
      if (!el.hasAttribute(attr)) return;
      if (!el.hasAttribute("data-en-" + attr)) el.setAttribute("data-en-" + attr, el.getAttribute(attr));
      el.setAttribute(attr, t(el.getAttribute("data-en-" + attr)));
    });
  });

  // 3. Browser tab title ("Home | Your Brand")
  if (!document.documentElement.dataset.title) document.documentElement.dataset.title = document.title;
  document.title = document.documentElement.dataset.title.split(" | ").map(t).join(" | ");

  // 4. The switch button always shows the OTHER language
  document.getElementById("langBtn").textContent = lang === "ar" ? "English" : "العربية";
}

document.getElementById("langBtn").addEventListener("click", () => {
  lang = lang === "ar" ? "en" : "ar";
  localStorage.setItem("lang", lang);
  applyLang();
});
