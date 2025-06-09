  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled'); 
    }
  });

  // Accordion toggle
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const isOpen = btn.classList.contains('active');

      document.querySelectorAll('.faq-question').forEach(el => el.classList.remove('active'));
      document.querySelectorAll('.faq-answer').forEach(el => el.style.maxHeight = null);

      if (!isOpen) {
        btn.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // Search filter
  document.querySelector('.faq-search').addEventListener('input', e => {
    const term = e.target.value.trim().toLowerCase();
    document.querySelectorAll('.faq-item').forEach(item => {
      const text = item.querySelector('.faq-question span').innerText.toLowerCase();
      item.style.display = text.includes(term) ? 'block' : 'none';
    });
  });

// كائن الترجمات
const translations = {
  en: {
    // Header
    home: "Home",
    about: "About Me",
    skills: "My Skills",
    projects: "My Projects",
    testimonials: "Customer Reviews",
    contact: "Contact Me",
    language: "Language",

    // Home Section
    homeTitle: "Hi I'm, Mohamed Sayed!",
    homeSubtitle: "Web Developer",
    homeDescription: "Skilled in building responsive and interactive websites using HTML, CSS, and JavaScript. Experienced with version control using Git and GitHub. Passionate about crafting clean user interfaces and enhancing user experience.",
    downloadBtn: "Download CV",
    projectsBtn: "View My Projects",

    // About Section
    aboutTitle: "About Me",
    aboutText: "Hi! I'm Mohamed — a Front-End Developer passionate about building clean, responsive, and user-friendly websites. I specialize in HTML, CSS, and JavaScript, crafting sleek interfaces and smooth user experiences. Since starting in 2024, I've worked on a wide range of projects, including e-commerce stores, business websites, course platforms, and admin dashboards. I love collaborating with backend teams and turning ideas into interactive, production-ready interfaces.",
    projectsCount: "Completed Web Projects",
    experience: "Years of Experience",
    clients: "Official Clients",
    learning: "Hours of Learning",

    // Skills Section
    skillsTitle: "My Skills",

    // Projects Section
    projectsTitle: "My Projects",
    viewProject: "View Project",

    // Testimonials
    testimonialsTitle: "Customer Reviews",

    // Services
    servicesTitle: "Services",
    uiDesign: "UI Design",
    uiDesignDesc: "Modern, responsive and smooth interfaces to enhance user experience and achieve an attractive visual identity.",
    webDev: "Web Development",
    webDevDesc: "Powerful dynamic website programming using the latest technologies like HTML, CSS, JS, Django.",
    branding: "Branding",
    brandingDesc: "Creating professional logos and integrated visual identities that suit your business and enhance customer confidence.",

    // FAQ
    faqTitle: "Frequently Asked Questions",
    faqPlaceholder: "Search questions...",
    faqQ1: "How long does it take to complete a project?",
    faqA1: "Typically, projects take between 2 to 6 weeks depending on complexity and requirements.",
    faqQ2: "Do you offer post-launch support?",
    faqA2: "Yes, I provide maintenance and support packages after project delivery.",
    faqQ3: "What technologies do you specialize in?",
    faqA3: "I specialize in HTML, CSS, JavaScript, React, Python, and UI/UX design.",
    faqQ4: "Can I request changes after the project is delivered?",
    faqA4: "Yes, minor revisions are included. For major changes, we can discuss additional scope and pricing.",
    faqQ5: "What is your payment process?",
    faqA5: "I usually take a 50% upfront deposit and the rest upon project completion. Flexible terms are available depending on the scope.",
    faqQ6: "Can you redesign an existing website?",
    faqA6: "Yes, I can help modernize and improve the design and performance of your current website.",
    faqQ7: "Will my website be mobile-friendly?",
    faqA7: "Absolutely. All websites I build are fully responsive and optimized for phones and tablets.",
    faqQ8: "Can you integrate booking/contact forms?",
    faqA8: "Yes, I can add custom forms with email notifications, validation, and even database storage if needed.",
    faqQ9: "Do you work with international clients?",
    faqA9: "Yes, I work remotely with clients from all over the world via email, Zoom, or any preferred platform.",

    // Contact
    contactTitle: "Contact Me",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    messagePlaceholder: "Your Message",
    sendBtn: "Send Message",

    // CTA
    ctaTitle: "Ready to Start Your Project?",
    ctaText: "Let's work together to create something amazing!",
    ctaBtn: "Contact Me Now",

    // Footer
    footerName: "Mohamed Sayed",
    footerTitle: "Web Developer & Graphic Designer",
    quickLinks: "Quick Links",
    contactMe: "Contact Me",
    copyright: "© 2025 Mohamed Sayed. All rights reserved."
  },
  ar: {
    // Header
    home: "الرئيسية",
    about: "عني",
    skills: "مهاراتي",
    projects: "مشاريعي",
    testimonials: "آراء العملاء",
    contact: "اتصل بي",
    language: "اللغة",

    // Home Section
    homeTitle: "مرحبًا، أنا محمد سيد!",
    homeSubtitle: "مطور ويب",
    homeDescription: "ماهر في بناء مواقع ويب تفاعلية متجاوبة باستخدام HTML و CSS و JavaScript. لدي خبرة في التحكم في الإصدار باستخدام Git و GitHub. شغوف بإنشاء واجهات مستخدم نظيحة وتحسين تجربة المستخدم.",
    downloadBtn: "تحميل السيرة الذاتية",
    projectsBtn: "عرض مشاريعي",

    // About Section
    aboutTitle: "عني",
    aboutText: "مرحبًا! أنا محمد - مطور واجهات أمامية شغوف ببناء مواقع ويب نظيفة وسريعة الاستجابة وسهلة الاستخدام. أتخصص في HTML و CSS و JavaScript، حيث أصمم واجهات أنيقة وتجارب مستخدم سلسة. منذ بدايتي في 2024، عملت على مجموعة واسعة من المشاريع، بما في ذلك متاجر إلكترونية ومواقع أعمال ومنصات دورات ولوحات تحكم إدارية. أحب التعاون مع فرق المطورين الخلفيين لتحويل الأفكار إلى واجهات تفاعلية جاهزة للإنتاج.",
    projectsCount: "مشاريع ويب مكتملة",
    experience: "سنوات الخبرة",
    clients: "عملاء رسميون",
    learning: "ساعات التعلم",

    // Skills Section
    skillsTitle: "مهاراتي",

    // Projects Section
    projectsTitle: "مشاريعي",
    viewProject: "عرض المشروع",

    // Testimonials
    testimonialsTitle: "آراء العملاء",

    // Services
    servicesTitle: "الخدمات",
    uiDesign: "تصميم واجهات المواقع",
    uiDesignDesc: "تصميم واجهات عصرية، متجاوبة وسلسة لتحسين تجربة المستخدم وتحقيق هوية بصرية جذابة.",
    webDev: "برمجة وتطوير المواقع",
    webDevDesc: "برمجة مواقع ديناميكية قوية باستخدام أحدث التقنيات مثل HTML, CSS, JS, Django.",
    branding: "تصميم الشعارات والهويات",
    brandingDesc: "إنشاء شعارات احترافية وهوية بصرية متكاملة تناسب نشاطك وتعزز ثقة العملاء بك.",

    // FAQ
    faqTitle: "الأسئلة الشائعة",
    faqPlaceholder: "ابحث عن أسئلة...",
    faqQ1: "كم من الوقت يستغرق إكمال المشروع؟",
    faqA1: "عادة ما تستغرق المشاريع من أسبوعين إلى 6 أسابيع حسب التعقيد والمتطلبات.",
    faqQ2: "هل تقدم دعمًا بعد الإطلاق؟",
    faqA2: "نعم، أقدم حزم صيانة ودعم بعد تسليم المشروع.",
    faqQ3: "ما هي التقنيات التي تتخصص فيها؟",
    faqA3: "أتخصص في HTML و CSS و JavaScript و React و Python وتصميم UI/UX.",
    faqQ4: "هل يمكنني طلب تعديلات بعد تسليم المشروع؟",
    faqA4: "نعم، التعديلات الطفيفة مشمولة. بالنسبة للتغييرات الكبيرة، يمكننا مناقشة النطاق الإضافي والتسعير.",
    faqQ5: "ما هي عملية الدفع الخاصة بك؟",
    faqA5: "عادة آخذ 50% مقدمة والباقي عند استكمال المشروع. تتوفر شروط مرنة حسب نطاق العمل.",
    faqQ6: "هل يمكنك إعادة تصميم موقع موجود؟",
    faqA6: "نعم، يمكنني المساعدة في تحديث وتحسين تصميم وأداء موقعك الحالي.",
    faqQ7: "هل سيكون موقعي متوافقًا مع الجوال؟",
    faqA7: "بالتأكيد. جميع المواقع التي أبنيها متجاوبة بالكامل ومحسنة للهواتف والأجهزة اللوحية.",
    faqQ8: "هل يمكنك دمج نماذج حجز/اتصال؟",
    faqA8: "نعم، يمكنني إضافة نماذج مخصصة مع إشعارات البريد الإلكتروني والتحقق وحتى تخزين قاعدة البيانات إذا لزم الأمر.",
    faqQ9: "هل تعمل مع عملاء دوليين؟",
    faqA9: "نعم، أعمل عن بعد مع عملاء من جميع أنحاء العالم عبر البريد الإلكتروني أو Zoom أو أي منصة مفضلة.",

    // Contact
    contactTitle: "اتصل بي",
    namePlaceholder: "اسمك",
    emailPlaceholder: "بريدك الإلكتروني",
    messagePlaceholder: "رسالتك",
    sendBtn: "إرسال الرسالة",

    // CTA
    ctaTitle: "هل أنت مستعد لبدء مشروعك؟",
    ctaText: "دعونا نعمل معًا لإنشاء شيء رائع!",
    ctaBtn: "اتصل بي الآن",

    // Footer
    footerName: "محمد سيد",
    footerTitle: "مطور ويب ومصمم جرافيك",
    quickLinks: "روابط سريعة",
    contactMe: "اتصل بي",
    copyright: "© 2025 محمد سيد. جميع الحقوق محفوظة."
  }
};

// دالة تغيير اللغة
function changeLanguage(lang) {
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;

  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelector('.dropdown-btn').textContent = translations[lang]['language'];
  document.querySelector('.faq h2').textContent = translations[lang]['faqTitle'];
  document.querySelector('.faq-search').placeholder = translations[lang]['faqPlaceholder'];

  localStorage.setItem('preferredLanguage', lang);
  document.getElementById('languageDropdown').style.display = 'none';
  return false;
}

// تهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function () {
  const lang = localStorage.getItem('preferredLanguage') || 'en';
  changeLanguage(lang);

  // تفعيل وإغلاق القائمة المنسدلة عند الضغط
  const dropdownBtn = document.querySelector('.dropdown-btn');
  const dropdownMenu = document.getElementById('languageDropdown');

  dropdownBtn.addEventListener('click', function () {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });

  // إغلاق القائمة عند اختيار اللغة
  const langOptions = document.querySelectorAll('.lang-option');
  langOptions.forEach(option => {
    option.addEventListener('click', function () {
      const selectedLang = this.getAttribute('data-lang');
      changeLanguage(selectedLang);
    });
  });
});










const counters = document.querySelectorAll(".counter");
  let started = false;

  function animateCounters() {
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const increment = target / 150;

      const update = () => {
        if (count < target) {
          count += increment;
          counter.innerText = Math.ceil(count);
          setTimeout(update, 30);
        } else {
          counter.innerText = target + (target >= 500 ? "+" : "");
        }
      };

      update();
    });
  }

  window.addEventListener("scroll", () => {
    const aboutSection = document.querySelector(".about");
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight && !started) {
      animateCounters();
      started = true;
    }
  });
  if (count < target) {
  count += increment;
  counter.innerText = Math.ceil(count);
  setTimeout(update, 30);
} else {
  counter.innerText = target + (target >= 50 ? "+" : "");
}