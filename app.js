// Translation object
const translations = {
  en: {
    home: "Home",
    about: "About Me",
    skills: "Skills",
    projects: "Projects",
    testimonials: "Customer",
    services: "Services",
    contact: "Contact",
    current_lang: "English",
    english: "English",
    arabic: "العربية",
    home_title: "Hi I'M, Mohamed sayed!",
    home_subtitle: "web Developer",
    home_description:
      "Skilled in building responsive and interactive websites using HTML, CSS, and JavaScript. Experienced with version control using Git and GitHub. Passionate about crafting clean user interfaces and enhancing user experience.",
    download_btn: "Download CV",
    view_projects_btn: "View My Projects",
    video_not_supported: "Your browser does not support the video tag.",
    about_title: "About Me",
    about_text1:
      "Hello! I'm <strong>Mohamed</strong>, a <strong>Front-End Developer</strong> with a passion for clean code, modern design, and building interactive user interfaces.",
    about_text2:
      "I specialize in <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>, and I'm proficient with frameworks like <strong>React</strong> and <strong>Tailwind CSS</strong>.",
    about_text3:
      "My toolkit includes <strong>Git & GitHub</strong> for version control, and I focus heavily on <strong>Responsive Design</strong>.",
    about_text4:
      "I'm also keen on <strong>UI/UX Design</strong>, and with my <strong>English (B2)</strong> level, I collaborate smoothly with global teams.",
    about_text5:
      "Since starting in <strong>2024</strong>, I've developed e-commerce platforms, dashboards, and business websites — and I'm always ready for the next challenge.",
    skills_title: "My Skills",
    all_skills: "All",
    frontend: "Frontend",
    tools: "Tools",
    design: "Design",
    language: "Languages",
    html_skill: "HTML",
    css_skill: "CSS",
    js_skill: "JavaScript",
    react_skill: "React",
    git_skill: "Git & GitHub",
    tailwind_skill: "Tailwind CSS",
    responsive_skill: "Responsive Design",
    uiux_skill: "UI / UX",
    english_skill: "English (B2)",
    photoshop_skill: "Adobe Photoshop",
    projects_title: "My Projects",
    view_project: "View Project",
      project_codexite_title: "Codexite – Software Solutions",
  project_codexite_desc: "A modern and responsive website for a software startup offering web development services.",
  view_project: "View Project",
    project1_title: "منتجات منزلية",
    project1_desc: "موقع يعرض منتجات منزلية متنوعة بطريقة جذابة.",
    project2_title: "متجر عطور",
    project2_desc: "متجر إلكتروني لبيع العطور بشكل عصري وسهل الاستخدام.",
    project3_title: "براند Moonlight",
    project3_desc:
      "صفحة هبوط أنيقة لبراند أزياء أو نمط حياة، تعرض المنتجات وتجربة مستخدم سلسة.",
    project4_title: "موقع مكتب محاماة",
    project4_desc:
      "موقع تعريفي احترافي لمكتب محاماة يشمل الخدمات وطرق التواصل.",
    project5_title: "ملف شخصي",
    project5_desc:
      "موقع شخصي يعرض مشاريعي في تطوير الويب والتصميم ومعلومات التواصل.",
    project6_title: "موقع كوفي شوب",
    project6_desc:
      "موقع عصري ومتجاوب لمقهى، يحتوي على القائمة، من نحن، المنتجات، وتقييمات العملاء.",
    project7_title: "تطبيق حاسبة",
    project7_desc: "تطبيق حاسبة بسيط وسهل الاستخدام بحسابات دقيقة وتصميم مريح.",
    testimonials_title: "Customer Testimonials",
    testimonial1_text:
      "I collaborated with Mohamed Sayed on designing our perfume e-commerce website. He delivered professional, high-quality work, was punctual with deadlines, and very flexible. I highly recommend working with him. Thank you for the great effort you put into the project.",
    testimonial2_text:
      "I worked with Mohamed Sayed on the Moonlight factory website. The work was excellent, very professional, and he was always cooperative with any modifications. The project was delivered on time and exactly as we needed it. I recommend him for anyone looking for clean and comfortable work.",
    testimonial3_text:
      "I'm the owner of Riqah - Homewear Store, and I also designed and programmed the website myself. I wanted a simple yet elegant design that reflects the brand's spirit, and thankfully I achieved what I had in mind. I'm very satisfied with the result, and the website has truly helped me present my work professionally.",
    client1_name: "Yassin Gerana",
    client2_name: "Hala",
    client3_name: "Mohamed Sayed",
    services_title: "Services",
    service1_title: "Website UI Design",
    service1_desc:
      "Designing modern, responsive and smooth interfaces to enhance user experience and achieve an attractive visual identity.",
    service2_title: "Web Development",
    service2_desc:
      "Building powerful dynamic websites using the latest technologies like HTML, CSS, JS, Django.",
    service3_title: "Logo & Branding Design",
    service3_desc:
      "Creating professional logos and complete visual identities that suit your business",
    faq_title: "Frequently Asked Questions",
    faq_placeholder: "Search questions...",
    faq1_q: "How long does it take to complete a project?",
    faq1_a:
      "Typically, projects take between 2 to 6 weeks depending on complexity and requirements.",
    faq2_q: "Do you offer post-launch support?",
    faq2_a:
      "Yes, I provide maintenance and support packages after project delivery.",
    faq3_q: "What technologies do you specialize in?",
    faq3_a:
      "I specialize in HTML, CSS, JavaScript, React, Python, and UI/UX design.",
    faq4_q: "Can I request changes after delivery?",
    faq4_a:
      "Yes, minor revisions are included. Major changes require additional discussion.",
    faq5_q: "What is your payment process?",
    faq5_a:
      "50% upfront deposit, 50% upon completion. Flexible terms available.",
    faq6_q: "Can you redesign existing websites?",
    faq6_a:
      "Yes, I can modernize and improve your current website's design and performance.",
    faq7_q: "Will my website be mobile-friendly?",
    faq7_a:
      "Absolutely. All websites I build are fully responsive for all devices.",
    faq8_q: "Can you integrate contact forms?",
    faq8_a: "Yes, I can add forms with email notifications and validation.",
    faq9_q: "Do you work internationally?",
    faq9_a:
      "Yes, I work with clients worldwide via Zoom, email, or other platforms.",
    faq10_q: "Do you provide SEO services?",
    faq10_a:
      "Basic SEO is included. For advanced strategies, I can refer specialists.",
    faq11_q: "How do we communicate?",
    faq11_a:
      "Email, WhatsApp, Zoom, or any platform you prefer with regular updates.",
    faq12_q: "Can you help with hosting?",
    faq12_a: "Yes, I can guide you through hosting options and domain setup.",
    contact_title: "Contact Me",
    name_placeholder: "Your Name",
    email_placeholder: "Your Email",
    message_placeholder: "Your Message",
    send_btn: "Send Message",
    cosmic_msg1: "Message 1 🚀",
    cosmic_msg2: "Message 2 🌟",
    cosmic_msg3: "Message 3 🪐",
    cosmic_msg4: "Message 4 🌌",
    cosmic_msg5: "Message 5 ☄️",
    cosmic_msg6: "Message 6 💫",
  },
  ar: {
    home: "الرئيسية",
    about: "عني",
    skills: "المهارات",
    projects: "المشاريع",
    testimonials: "العملاء",
    services: "الخدمات",
    contact: "اتصل بي",
    current_lang: "العربية",
    english: "English",
    arabic: "العربية",
    home_title: "مرحبًا، أنا محمد سيد!",
    home_subtitle: "مطور مواقع ويب",
    home_description:
      "متخصص في بناء مواقع ويب تفاعلية متجاوبة باستخدام HTML وCSS وJavaScript. لدي خبرة في التحكم بالإصدارات باستخدام Git وGitHub. شغوف بإنشاء واجهات مستخدم نظيفة وتحسين تجربة المستخدم.",
    download_btn: "تحميل السيرة الذاتية",
    view_projects_btn: "عرض مشاريعي",
    video_not_supported: "المتصفح الخاص بك لا يدعم تشغيل الفيديو.",
    about_title: "عني",
    about_text1:
      "مرحبًا! أنا <strong>محمد</strong>، <strong>مطور واجهات أمامية</strong> شغوف بالكود النظيف، التصميم العصري، وبناء واجهات مستخدم تفاعلية.",
    about_text2:
      "أتخصص في <strong>HTML</strong> و<strong>CSS</strong> و<strong>JavaScript</strong>، ولدي إتقان لأطر العمل مثل <strong>React</strong> و<strong>Tailwind CSS</strong>.",
    about_text3:
      "أدواتي تشمل <strong>Git & GitHub</strong> للتحكم بالإصدارات، وأركز بشدة على <strong>التصميم المتجاوب</strong>.",
    about_text4:
      "أهتم أيضًا بـ<strong>تصميم واجهات وتجربة المستخدم</strong>، ومع مستواي في <strong>الإنجليزية (B2)</strong>، أتعاون بسهولة مع الفرق العالمية.",
    about_text5:
      "منذ بدايتي في <strong>2024</strong>، قمت بتطوير منصات للتجارة الإلكترونية، لوحات تحكم، ومواقع أعمال - وأنا دائمًا مستعد للتحدي التالي.",
    skills_title: "مهاراتي",
    all_skills: "الكل",
    frontend: "واجهة أمامية",
    tools: "أدوات",
    design: "تصميم",
    language: "لغات",
    html_skill: "HTML",
    css_skill: "CSS",
    js_skill: "JavaScript",
    react_skill: "React",
    git_skill: "Git & GitHub",
    tailwind_skill: "Tailwind CSS",
    responsive_skill: "تصميم متجاوب",
    uiux_skill: "واجهة المستخدم / تجربة المستخدم",
    english_skill: "الإنجليزية (B2)",
    photoshop_skill: "أدوبي فوتوشوب",
    projects_title: "مشاريعي",
    view_project: "عرض المشروع",
    project1_title: "منتجات منزلية",
   project_codexite_title: "كوديكسايت – حلول برمجية",
  project_codexite_desc: "موقع إلكتروني عصري واستجابي لشركة ناشئة متخصصة في تطوير مواقع الويب.",
  view_project: "عرض المشروع",
    project1_desc: "موقع يعرض منتجات منزلية متنوعة بطريقة جذابة.",
    project2_title: "متجر عطور",
    project2_desc: "متجر إلكتروني لبيع العطور بشكل عصري وسهل الاستخدام.",
    project3_title: "براند Moonlight",
    project3_desc:
      "صفحة هبوط أنيقة لبراند أزياء أو نمط حياة، تعرض المنتجات وتجربة مستخدم سلسة.",
    project4_title: "موقع مكتب محاماة",
    project4_desc:
      "موقع تعريفي احترافي لمكتب محاماة يشمل الخدمات وطرق التواصل.",
    project5_title: "ملف شخصي",
    project5_desc:
      "موقع شخصي يعرض مشاريعي في تطوير الويب والتصميم ومعلومات التواصل.",
    project6_title: "موقع كوفي شوب",
    project6_desc:
      "موقع عصري ومتجاوب لمقهى، يحتوي على القائمة، من نحن، المنتجات، وتقييمات العملاء.",
    project7_title: "تطبيق حاسبة",
    project7_desc: "تطبيق حاسبة بسيط وسهل الاستخدام بحسابات دقيقة وتصميم مريح.",
    testimonials_title: "آراء العملاء",
    testimonial1_text:
      "تم تنفيذ مشروع تصميم موقع إلكتروني خاص بالبرفانات بالتعاون مع المبرمج و المصمم محمد سيد قدم شغل احترافي بجودة عالية، وكان ملتزم بالمواعيد ومرن جدًا في التعامل. أنصح بالتعامل معاه، وشكرًا على المجهود الكبير اللي قدمه في المشروع.",
    testimonial2_text:
      "اشتغلت مع محمد سيد على تصميم موقع مون لايت، وكان فعلاً شغله ممتاز. التعامل معاه سهل ومحترف، ودايمًا متعاون في أي تعديل. سلّم الشغل في ميعاده والموقع طلع بالشكل اللي كنا محتاجينه بالضبط. أنصح أي حد محتاج شغل نظيف ومريح يتعامل معاه.",
    testimonial3_text:
      "أنا صاحب براند Riqah – Homewear Store، وكمان اللي صممت وبرمجت الموقع بنفسي. كنت حابب أطلع بتصميم بسيط وراقي يعبر عن روح البراند، والحمد لله قدرت أحقق اللي في بالي. راضي جدًا عن النتيجة، والموقع فعلاً ساعدني أقدّم شغلي بشكل احترافي.",
    client1_name: "ياسين جرانه",
    client2_name: "هاله",
    client3_name: "محمد سيد",
    services_title: "الخدمات",
    service1_title: "تصميم واجهات المواقع",
    service1_desc:
      "تصميم واجهات عصرية، متجاوبة وسلسة لتحسين تجربة المستخدم وتحقيق هوية بصرية جذابة.",
    service2_title: "برمجة وتطوير المواقع",
    service2_desc:
      "برمجة مواقع ديناميكية قوية باستخدام أحدث التقنيات مثل HTML, CSS, JS, Django.",
    service3_title: "تصميم الشعارات والهويات",
    service3_desc:
      "إنشاء شعارات احترافية وهوية بصرية متكاملة تناسب نشاطك وتعزز ثقة العملاء بك.",
    faq_title: "الأسئلة الشائعة",
    faq_placeholder: "ابحث في الأسئلة...",
    faq1_q: "كم يستغرق إكمال المشروع؟",
    faq1_a: "عادةً من أسبوعين إلى 6 أسابيع حسب تعقيد المشروع ومتطلباته.",
    faq2_q: "هل تقدم دعمًا بعد التسليم؟",
    faq2_a: "نعم، أقدم حزم صيانة ودعم بعد تسليم المشروع.",
    faq3_q: "ما هي التقنيات التي تتقنها؟",
    faq3_a:
      "أتخصص في HTML وCSS وJavaScript وReact وPython وتصميم واجهات المستخدم.",
    faq4_q: "هل يمكن طلب تعديلات بعد التسليم؟",
    faq4_a:
      "نعم، التعديلات البسيطة مشمولة. التعديلات الكبيرة تحتاج مناقشة إضافية.",
    faq5_q: "ما هي طريقة الدفع؟",
    faq5_a: "50% مقدمة، 50% عند التسليم. يمكن التنسيق على شروط مرنة.",
    faq6_q: "هل يمكنك إعادة تصميم مواقع موجودة؟",
    faq6_a: "نعم، يمكنني تطوير وتحسين أداء وتصميم موقعك الحالي.",
    faq7_q: "هل سيكون موقعي متجاوبًا؟",
    faq7_a: "بالتأكيد، جميع المواقع التي أصممها متجاوبة مع جميع الأجهزة.",
    faq8_q: "هل يمكنك إضافة نماذج اتصال؟",
    faq8_a:
      "نعم، يمكنني إضافة نماذج مع إشعارات بريد إلكتروني وفحص صحة البيانات.",
    faq9_q: "هل تعمل مع عملاء دوليين؟",
    faq9_a:
      "نعم، أعمل مع عملاء من جميع أنحاء العالم عبر زووم أو البريد أو غيرها.",
    faq10_q: "هل تقدم خدمات SEO؟",
    faq10_a:
      "أقدم تحسينات أساسية. للاستراتيجيات المتقدمة يمكنني توجيهك لمتخصصين.",
    faq11_q: "كيف نتواصل أثناء المشروع؟",
    faq11_a:
      "بريد إلكتروني، واتساب، زووم، أو أي منصة تفضلها مع تحديثات منتظمة.",
    faq12_q: "هل تساعد في استضافة الموقع؟",
    faq12_a: "نعم، يمكنني إرشادك لخيارات الاستضافة وإعداد النطاق.",
    contact_title: "اتصل بي",
    name_placeholder: "اسمك",
    email_placeholder: "بريدك الإلكتروني",
    message_placeholder: "رسالتك",
    send_btn: "إرسال الرسالة",
    cosmic_msg1: "رسالة ١ 🚀",
    cosmic_msg2: "رسالة ٢ 🌟",
    cosmic_msg3: "رسالة ٣ 🪐",
    cosmic_msg4: "رسالة ٤ 🌌",
    cosmic_msg5: "رسالة ٥ ☄️",
    cosmic_msg6: "رسالة ٦ 💫",
  },
};

// Change language function with improved error handling
function changeLanguage(lang) {
  // Validate language
  if (!translations[lang]) {
    console.error(`Language '${lang}' not supported`);
    lang = "en"; // Fallback to English
  }

  // Set document direction and language
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lang;

  // Apply translations to all elements
  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[lang][key]) {
      // Handle HTML content safely
      if (translations[lang][key].includes("<")) {
        element.innerHTML = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    } else {
      console.warn(`Missing translation for key: ${key} in language: ${lang}`);
    }
  });

  // Toggle RTL class
  document.body.classList.toggle("rtl", lang === "ar");

  // Save preferred language
  try {
    localStorage.setItem("preferredLanguage", lang);
  } catch (e) {
    console.error("Failed to save language preference:", e);
  }

  return false; // Prevent default link behavior
}

// Load preferred language on startup with fallback
document.addEventListener("DOMContentLoaded", function () {
  let savedLang;
  try {
    savedLang =
      localStorage.getItem("preferredLanguage") ||
      (navigator.language.startsWith("ar") ? "ar" : "en");
  } catch (e) {
    savedLang = "en";
    console.error("Failed to read language preference:", e);
  }
  changeLanguage(savedLang);
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Accordion toggle
document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    const isOpen = btn.classList.contains("active");

    document
      .querySelectorAll(".faq-question")
      .forEach((el) => el.classList.remove("active"));
    document
      .querySelectorAll(".faq-answer")
      .forEach((el) => (el.style.maxHeight = null));

    if (!isOpen) {
      btn.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

// Search filter
document.querySelector(".faq-search").addEventListener("input", (e) => {
  const term = e.target.value.trim().toLowerCase();
  document.querySelectorAll(".faq-item").forEach((item) => {
    const text = item
      .querySelector(".faq-question span")
      .innerText.toLowerCase();
    item.style.display = text.includes(term) ? "block" : "none";
  });
});

const bar = document.querySelector(".fa-bars");
const mainhead = document.querySelector(".main-head");
const removeBtn = document.querySelector(".remove-container");

bar?.addEventListener("click", () => {
  mainhead.classList.toggle("open");
});
removeBtn?.addEventListener("click", () => {
  mainhead.classList.remove("open");
});

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const skills = document.querySelectorAll(".skill");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // إزالة التفعيل من الكل
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const filter = tab.getAttribute("data-filter");

      skills.forEach((skill) => {
        if (filter === "all" || skill.classList.contains(filter)) {
          skill.style.display = "flex";
        } else {
          skill.style.display = "none";
        }
      });
    });
  });
});

const container = document.querySelector(".stars-bg");

const createStars = (count = 120) => {
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    // حجم النجمة: 2 إلى 6 بكسل
    const size = Math.random() * 4 + 2;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // موقع النجمة
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;

    // مدة اللمعة: 5 إلى 10 ثواني
    star.style.animationDuration = `${5 + Math.random() * 5}s`;

    // تأخير مختلف عشان التداخل
    star.style.animationDelay = `${Math.random() * 5}s`;

    container.appendChild(star);
  }
};

createStars();
