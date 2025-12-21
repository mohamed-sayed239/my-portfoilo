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
  

// عناوين المشاريع باللغة الإنجليزية
    project1_title: "Homeware Products",
    project_courses_title: "Courses Platform",
    project_codexite_title: "Codexite",
    project_fitness_title: "Fitness & Nutrition Planner",
    project_game_title: "Fun Game",
    project2_title: "Perfume Store",
    project3_title: "Moonlight Brand",
    project4_title: "Law Firm Website",
    project5_title: "Personal Portfolio",
    project6_title: "Coffee Shop Website",
    project7_title: "Calculator App",
    
    // أوصاف المشاريع باللغة الإنجليزية
    project1_desc: "A website showcasing homeware products.",
    project_courses_desc: "A modern and responsive platform for online courses, offering a wide range of learning materials and tutorials.",
    project_codexite_desc: "A modern and responsive website for a software startup offering web development services.",
    project_fitness_desc: "A web app that helps users create personalized workout and nutrition plans to achieve their fitness goals.",
    project_game_desc: "An interactive and entertaining game built with HTML, CSS, and JavaScript for all ages.",
    project2_desc: "An e-commerce store for selling perfumes online.",
    project3_desc: "A stylish landing page for a fashion or lifestyle brand, featuring elegant product displays and smooth user experience.",
    project4_desc: "An informational website for a law firm.",
    project5_desc: "A personal website showcasing my web development and design projects, skills, and contact information.",
    project6_desc: "A modern and responsive website for a coffee shop, featuring menus, about section, products, and customer reviews.",
    project7_desc: "A simple and user-friendly calculator application."
  ,



 // العنوان الرئيسي
    testimonials_title: "Customer Testimonials",
    testimonials_subtitle: "Real Experiences from Successful Projects",
    
    // فلترة المشاريع
    filter_all: "All Projects",
    filter_homeware: "Homeware Products",
    filter_courses: "Courses Platform",
    filter_codexite: "Codexite",
    filter_fitness: "Fitness & Nutrition",
    filter_perfume: "Perfume Store",
    filter_moonlight: "Moonlight Brand",
    filter_lawfirm: "Law Firm",
    filter_portfolio: "Personal Portfolio",
    filter_coffee: "Coffee Shop",
    filter_calculator: "Calculator App",
    
    // آراء المشاريع - الإنجليزية
    // 1. Homeware Products
    client_homeware_name: "Yassin Jarana",
    client_homeware_title: "Owner of Riqah Homewear Store",
    testimonial_homeware_text: `"Mohamed Sayed developed our entire e-commerce website using Django with an amazing interactive interface. 
    The website helped us increase sales by 40% during the first two months. 
    His commitment to deadlines and attention to details was outstanding."`,
    
    // 2. Courses Platform
    client_courses_name: "Hala Mohamed",
    client_courses_title: "Director of Moon Light Courses Platform",
    testimonial_courses_text: `"The project was implemented using HTML, CSS, JavaScript with an excellent responsive design. 
    The platform now receives more than 1000 students monthly. The design is user-friendly and smooth, 
    and students always praise the excellent user experience."`,
    
    // 3. Codexite
    client_codexite_name: "Ahmed Khalid",
    client_codexite_title: "Founder & CEO",
    testimonial_codexite_text: `"The Codexite website was a major challenge executed with high efficiency using advanced technologies. 
    The website helped us acquire 50 new clients during the first quarter. 
    The speed and exceptional performance were among the project's strongest points."`,
    
    // 4. Fitness & Nutrition Planner
    client_fitness_name: "Mahmoud Ali",
    client_fitness_title: "Fitness Trainer",
    testimonial_fitness_text: `"The application was built using React and Tailwind CSS, providing a unique user experience. 
    More than 5000 registered users benefit from customized workout and nutrition plans. 
    The performance is fast and the interface is intuitive and easy to use."`,
    
    // 5. Perfume Store
    client_perfume_name: "Sarah Ahmed",
    client_perfume_title: "Perfume Store Owner",
    testimonial_perfume_text: `"The modern design and advanced features of the perfume store helped double sales. 
    The payment system is easy and secure, and product management is simple and effective. 
    Customers love the elegant design and easy browsing experience."`,
    
    // 6. Moonlight Brand
    client_moonlight_name: "Karim Sami",
    client_moonlight_title: "Marketing Director",
    testimonial_moonlight_text: `"The Moonlight website design accurately reflects the brand identity with excellent technical performance. 
    Website visits increased by 300% and conversion rates improved significantly. 
    The responsive design works perfectly on all devices."`,
    
    // 7. Law Firm Website
    client_lawfirm_name: "Dr. Omar Hassan",
    client_lawfirm_title: "Senior Partner",
    testimonial_lawfirm_text: `"The law firm website was professionally developed using Django with a focus on security and confidentiality. 
    Client inquiries increased by 60% and the appointment booking system works flawlessly. 
    The design reflects professionalism and trust."`,
    
    // 8. Personal Portfolio
    client_portfolio_name: "Mohamed Ibrahim",
    client_portfolio_title: "Freelance Developer",
    testimonial_portfolio_text: `"My personal portfolio website designed by Mohamed showcases my work professionally. 
    The modern design and smooth animations helped me attract more clients. 
    The technical implementation was precise and the results exceeded expectations."`,
    
    // 9. Coffee Shop Website
    client_coffee_name: "Ali Mohammed",
    client_coffee_title: "Coffee Shop Manager",
    testimonial_coffee_text: `"The coffee shop website features an interactive menu and online ordering system. 
    Online orders increased by 80% and customer engagement improved significantly. 
    The warm and inviting design perfectly represents our brand."`,
    
    // 10. Calculator App
    client_calculator_name: "Nour El-Din",
    client_calculator_title: "Math Teacher",
    testimonial_calculator_text: `"The calculator application is fast, accurate, and features an elegant design. 
    My students find it very useful for complex calculations. 
    The user interface is intuitive and the performance is excellent on all devices."`,
    
    // 11. Fun Game
    client_game_name: "Hassan Gamal",
    client_game_title: "Game Developer",
    testimonial_game_text: `"The interactive game developed using React and Tailwind CSS provides an engaging experience. 
    The game mechanics are smooth and the design is visually appealing. 
    Users spend an average of 15 minutes per session, indicating high engagement."`,
    
    // التصميمات الأصلية (للمرجع)
    testimonial1_text: `"I collaborated with Mohamed Sayed on designing our perfume e-commerce website. He delivered professional, high-quality work, was punctual with deadlines, and very flexible. I highly recommend working with him. Thank you for the great effort you put into the project."`,
    testimonial2_text: `"I worked with Mohamed Sayed on the Moonlight factory website. The work was excellent, very professional, and he was always cooperative with any modifications. The project was delivered on time and exactly as we needed it. I recommend him for anyone looking for clean and comfortable work."`,
    testimonial3_text: `"I'm the owner of Riqah - Homewear Store, and I also designed and programmed the website myself. I wanted a simple yet elegant design that reflects the brand's spirit, and thankfully I achieved what I had in mind. I'm very satisfied with the result, and the website has truly helped me present my work professionally."`,
    
    // الإحصاءات
    stat_sales: "Sales Increase",
    stat_delivery: "Project Delivery",
    stat_rating: "Overall Rating",
    stat_students: "Monthly Students",
    stat_satisfaction: "Customer Satisfaction",
    stat_clients: "New Clients",
    stat_load_time: "Load Time",
    stat_users: "Active Users",
    stat_app_rating: "App Rating",
    stat_growth: "Sales Growth",
    stat_positive_feedback: "Positive Feedback",
    stat_traffic: "Traffic Increase",
    stat_conversion: "Conversion Rate",
    stat_projects_completed: "Projects Completed",
    stat_client_satisfaction: "Client Satisfaction",
    stat_average_rating: "Average Rating",
    stat_happy_clients: "Happy Clients",
    
    // التواريخ
    date_dec_2024: "December 2024",
    date_nov_2024: "November 2024",
    date_oct_2024: "October 2024",
    date_sep_2024: "September 2024",
    date_aug_2024: "August 2024",
    date_jul_2024: "July 2024",
    date_jun_2024: "June 2024",
    date_may_2024: "May 2024",
    date_apr_2024: "April 2024",
    date_mar_2024: "March 2024",
    
    // الأزرار
    view_project: "View Project",
    view_all_testimonials: "View All Testimonials",
    contact_for_project: "Contact for Similar Project",
    
    // نصوص إضافية
    what_clients_say: "What My Clients Say",
    success_stories: "Success Stories",
    project_success: "Project Success Metrics",
    client_feedback: "Client Feedback",
    rated_excellent: "Rated Excellent by Clients",
    trusted_by: "Trusted by Professionals",
 
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
   project_codexite_title: "كوديكسايت",
  project_codexite_desc: "موقع إلكتروني عصري واستجابي لشركة ناشئة متخصصة في تطوير مواقع الويب.",
  view_project: "عرض المشروع",
  

// عناوين المشاريع باللغة العربية
    project1_title: "منتجات منزلية",
    project_courses_title: "منصة الكورسات",
    project_codexite_title: "كوديكسايت",
    project_fitness_title: "مخطط التمارين والتغذية",
    project_game_title: "لعبة مسلية",
    project2_title: "متجر عطور",
    project3_title: "براند Moonlight",
    project4_title: "موقع مكتب محاماة",
    project5_title: "الملف الشخصي",
    project6_title: "موقع كوفي شوب",
    project7_title: "تطبيق حاسبة",
    
    // أوصاف المشاريع باللغة العربية
    project1_desc: "موقع يعرض منتجات منزلية متنوعة بطريقة جذابة.",
    project_courses_desc: "منصة تعليمية تفاعلية لتصفح وحضور الكورسات عبر الإنترنت في مجالات متنوعة.",
    project_codexite_desc: "موقع عصري ومتجاوب لشركة ناشئة في مجال البرمجيات تقدم خدمات تطوير الويب.",
    project_fitness_desc: "تطبيق ويب يساعد المستخدمين على إنشاء خطط تمارين وتغذية مخصصة لتحقيق أهدافهم الرياضية.",
    project_game_desc: "لعبة تفاعلية ومسلية مبنية باستخدام HTML و CSS و JavaScript لجميع الأعمار.",
    project2_desc: "متجر إلكتروني لبيع العطور بشكل عصري وسهل الاستخدام.",
    project3_desc: "صفحة هبوط أنيقة لبراند أزياء أو نمط حياة، تعرض المنتجات وتجربة مستخدم سلسة.",
    project4_desc: "موقع تعريفي احترافي لمكتب محاماة يشمل الخدمات وطرق التواصل.",
    project5_desc: "موقع شخصي يعرض مشاريعي في تطوير الويب والتصميم ومعلومات التواصل.",
    project6_desc: "موقع عصري ومتجاوب لمقهى، يحتوي على القائمة، من نحن، المنتجات، وتقييمات العملاء.",
    project7_desc: "تطبيق حاسبة بسيط وسهل الاستخدام بحسابات دقيقة وتصميم مريح.",

// العنوان الرئيسي
    testimonials_title: "آراء العملاء",
    testimonials_subtitle: "تجارب حقيقية من مشاريع ناجحة",
    
    // فلترة المشاريع
    filter_all: "جميع المشاريع",
    filter_homeware: "المنتجات المنزلية",
    filter_courses: "منصة الكورسات",
    filter_codexite: "كوديكسايت",
    filter_fitness: "التمارين والتغذية",
    filter_perfume: "متجر العطور",
    filter_moonlight: "براند مون لايت",
    filter_lawfirm: "مكتب محاماة",
    filter_portfolio: "الملف الشخصي",
    filter_coffee: "كوفي شوب",
    filter_calculator: "تطبيق حاسبة",
    
    // آراء المشاريع - العربية
    // 1. منتجات منزلية
    client_homeware_name: "ياسين جرانه",
    client_homeware_title: "صاحب متجر Riqah Homewear",
    testimonial_homeware_text: `"محمد سيد قام بتطوير موقع متجرنا الإلكتروني بالكامل باستخدام Django مع واجهة تفاعلية رائعة. 
    الموقع ساعدنا في زيادة المبيعات بنسبة 40٪ خلال الشهرين الأولين. 
    الالتزام بالمواعيد والاهتمام بالتفاصيل كان مميزًا جدًا."`,
    
    // 2. منصة الكورسات
    client_courses_name: "هالة محمد",
    client_courses_title: "مديرة منصة Moon Light Courses",
    testimonial_courses_text: `"المشروع تم تنفيذه باستخدام HTML و CSS و JavaScript مع تصميم متجاوب ممتاز. 
    المنصة تستقبل الآن أكثر من 1000 طالب شهريًا. التصميم سهل الاستخدام وسلس، 
    والطلاب دائمًا يمدحون تجربة المستخدم الممتازة."`,
    
    // 3. كوديكسايت
    client_codexite_name: "أحمد خالد",
    client_codexite_title: "المؤسس والرئيس التنفيذي",
    testimonial_codexite_text: `"موقع Codexite كان تحديًا كبيرًا تم تنفيذه بكفاءة عالية باستخدام تقنيات متقدمة. 
    الموقع ساعدنا في اكتساب 50 عميل جديد خلال الربع الأول. 
    السرعة والأداء المتميزان كانا من أهم نقاط القوة في المشروع."`,
    
    // 4. مخطط التمارين والتغذية
    client_fitness_name: "محمود علي",
    client_fitness_title: "مدرب لياقة بدنية",
    testimonial_fitness_text: `"التطبيق تم بناؤه باستخدام React و Tailwind CSS وهو يوفر تجربة مستخدم فريدة. 
    أكثر من 5000 مستخدم مسجل يستفيدون من خطط التمارين والتغذية المخصصة. 
    الأداء سريع والواجهة بديهية وسهلة الاستخدام."`,
    
    // 5. متجر العطور
    client_perfume_name: "سارة أحمد",
    client_perfume_title: "مالكة متجر العطور",
    testimonial_perfume_text: `"التصميم العصري والوظائف المتقدمة لمتجر العطور ساعدت في مضاعفة المبيعات. 
    نظام الدفع سهل وآمن، وإدارة المنتجات بسيطة وفعالة. 
    العملاء يحبون التصميم الأنيق وسهولة التصفح."`,
    
    // 6. براند مون لايت
    client_moonlight_name: "كريم سامي",
    client_moonlight_title: "مدير التسويق",
    testimonial_moonlight_text: `"تصميم موقع Moonlight يعكس هوية البراند بدقة مع أداء فني ممتاز. 
    زادت زيارات الموقع بنسبة 300٪ وتحسن معدل التحويل بشكل ملحوظ. 
    التصميم المتجاوب يعمل بشكل مثالي على جميع الأجهزة."`,
    
    // 7. موقع مكتب محاماة
    client_lawfirm_name: "د. عمر حسن",
    client_lawfirm_title: "شريك أول",
    testimonial_lawfirm_text: `"موقع مكتب المحاماة تم تطويره بشكل احترافي باستخدام Django مع التركيز على الأمان والسرية. 
    زادت استفسارات العملاء بنسبة 60٪ ونظام حجز المواعيد يعمل بشكل ممتاز. 
    التصميم يعكس الاحترافية والثقة."`,
    
    // 8. الملف الشخصي
    client_portfolio_name: "محمد إبراهيم",
    client_portfolio_title: "مطور مستقل",
    testimonial_portfolio_text: `"موقع ملفي الشخصي الذي صممه محمد يعرض أعمالي بشكل احترافي. 
    التصميم الحديث والحركات السلسة ساعدتني في جذب المزيد من العملاء. 
    التنفيذ الفني كان دقيقًا والنتائج تجاوزت التوقعات."`,
    
    // 9. موقع كوفي شوب
    client_coffee_name: "علي محمد",
    client_coffee_title: "مدير كوفي شوب",
    testimonial_coffee_text: `"موقع الكوفي شوب يتميز بقائمة تفاعلية ونظام طلب عبر الإنترنت. 
    زادت الطلبات عبر الإنترنت بنسبة 80٪ وتحسنت مشاركة العملاء بشكل كبير. 
    التصميم الدافئ والجذاب يمثل علامتنا التجارية بشكل مثالي."`,
    
    // 10. تطبيق حاسبة
    client_calculator_name: "نور الدين",
    client_calculator_title: "مدرس رياضيات",
    testimonial_calculator_text: `"تطبيق الحاسبة سريع ودقيق ويتميز بتصميم أنيق. 
    طلابي يجدونه مفيدًا جدًا للحسابات المعقدة. 
    واجهة المستخدم بديهية والأداء ممتاز على جميع الأجهزة."`,
    
    // 11. لعبة مسلية
    client_game_name: "حسن جمال",
    client_game_title: "مطور ألعاب",
    testimonial_game_text: `"اللعبة التفاعلية المطورة باستخدام React و Tailwind CSS توفر تجربة جذابة. 
    ميكانيكا اللعبة سلسة والتصميم جذاب بصريًا. 
    المستخدمون يقضون متوسط 15 دقيقة لكل جلسة، مما يدل على مشاركة عالية."`,
    
    // التصميمات الأصلية (للمرجع)
    testimonial1_text: `"تم تنفيذ مشروع تصميم موقع إلكتروني خاص بالبرفانات بالتعاون مع المبرمج و المصمم محمد سيد قدم شغل احترافي بجودة عالية، وكان ملتزم بالمواعيد ومرن جدًا في التعامل. أنصح بالتعامل معاه، وشكرًا على المجهود الكبير اللي قدمه في المشروع."`,
    testimonial2_text: `"اشتغلت مع محمد سيد على تصميم موقع مون لايت، وكان فعلاً شغله ممتاز. التعامل معاه سهل ومحترف، ودايمًا متعاون في أي تعديل. سلّم الشغل في ميعاده والموقع طلع بالشكل اللي كنا محتاجينه بالضبط. أنصح أي حد محتاج شغل نظيف ومريح يتعامل معاه."`,
    testimonial3_text: `"أنا صاحب براند Riqah - Homewear Store، وكمان اللي صممت وبرمجت الموقع بنفسي. كنت حابب أطلع بتصميم بسيط وراقي يعبر عن روح البراند، والحمد لله قدرت أحقق اللي في بالي. راضي جدًا عن النتيجة، والموقع فعلاً ساعدني أقدّم شغلي بشكل احترافي."`,
    
    // الإحصاءات
    stat_sales: "زيادة في المبيعات",
    stat_delivery: "تسليم المشروع",
    stat_rating: "التقييم العام",
    stat_students: "طالب شهريًا",
    stat_satisfaction: "رضا العملاء",
    stat_clients: "عميل جديد",
    stat_load_time: "وقت التحميل",
    stat_users: "مستخدم نشط",
    stat_app_rating: "تقييم التطبيق",
    stat_growth: "نمو المبيعات",
    stat_positive_feedback: "تقييم إيجابي",
    stat_traffic: "زيادة في الزيارات",
    stat_conversion: "معدل التحويل",
    stat_projects_completed: "مشروع مكتمل",
    stat_client_satisfaction: "رضا العملاء",
    stat_average_rating: "متوسط التقييم",
    stat_happy_clients: "عميل سعيد",
    
    // التواريخ
    date_dec_2024: "ديسمبر 2024",
    date_nov_2024: "نوفمبر 2024",
    date_oct_2024: "أكتوبر 2024",
    date_sep_2024: "سبتمبر 2024",
    date_aug_2024: "أغسطس 2024",
    date_jul_2024: "يوليو 2024",
    date_jun_2024: "يونيو 2024",
    date_may_2024: "مايو 2024",
    date_apr_2024: "أبريل 2024",
    date_mar_2024: "مارس 2024",
    
    // الأزرار
    view_project: "عرض المشروع",
    view_all_testimonials: "عرض كل الآراء",
    contact_for_project: "اتصل لمشروع مشابه",
    
    // نصوص إضافية
    what_clients_say: "ما يقوله عملائي",
    success_stories: "قصص النجاح",
    project_success: "مؤشرات نجاح المشروع",
    client_feedback: "ملاحظات العملاء",
    rated_excellent: "حصل على تقييم ممتاز من العملاء",
    trusted_by: "موثوق به من قبل المحترفين",
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

// projects-enhancements.js
document.addEventListener('DOMContentLoaded', function() {
  // إنشاء الجسيمات المتحركة
  createParticles();
  
  // إضافة تأثيرات التمرير
  initScrollAnimations();
  
  // إضافة إحصاءات ديناميكية
  initProjectStats();
});

function createParticles() {
  const container = document.querySelector('.projects');
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles-container';
  container.appendChild(particlesContainer);
  
  // إنشاء 50 جسيماً
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // تحديد عشوائي للخصائص
    const size = Math.random() * 3 + 1;
    const left = Math.random() * 100;
    const animationDuration = Math.random() * 20 + 10;
    const animationDelay = Math.random() * 20;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${left}%`;
    particle.style.animationDuration = `${animationDuration}s`;
    particle.style.animationDelay = `${animationDelay}s`;
    
    particlesContainer.appendChild(particle);
  }
}

function initScrollAnimations() {
  const projectCards = document.querySelectorAll('.project-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-glow');
        animateCardEntry(entry.target);
      } else {
        entry.target.classList.remove('scroll-glow');
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  });
  
  projectCards.forEach(card => {
    observer.observe(card);
  });
}

function animateCardEntry(card) {
  card.style.opacity = '0';
  card.style.transform = 'translateY(50px) scale(0.9)';
  
  setTimeout(() => {
    card.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
    card.style.opacity = '1';
    card.style.transform = 'translateY(0) scale(1)';
  }, 100);
  
  // إضافة تأثير تسلسلي للبطاقات
  const index = Array.from(document.querySelectorAll('.project-card')).indexOf(card);
  card.style.transitionDelay = `${index * 0.1}s`;
}

function initProjectStats() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    const statsContainer = document.createElement('div');
    statsContainer.className = 'project-stats';
    
    // إحصاءات عشوائية للمشاريع (يمكن استبدالها ببيانات حقيقية)
    const stats = [
      { value: Math.floor(Math.random() * 50) + 50, label: 'Completion' },
      { value: Math.floor(Math.random() * 5) + 1, label: 'Months' },
      { value: Math.floor(Math.random() * 10000) + 5000, label: 'Lines' }
    ];
    
    stats.forEach(stat => {
      const statItem = document.createElement('div');
      statItem.className = 'stat-item';
      
      const value = document.createElement('span');
      value.className = 'stat-value';
      value.textContent = `${stat.value}${stat.label === 'Completion' ? '%' : stat.label === 'Months' ? '' : '+'}`;
      
      const label = document.createElement('span');
      label.className = 'stat-label';
      label.textContent = stat.label;
      
      statItem.appendChild(value);
      statItem.appendChild(label);
      statsContainer.appendChild(statItem);
      
      // تأثير العد المتزايد للإحصاءات
      animateCounter(value, 0, stat.value, 2000);
    });
    
    card.querySelector('.project-content').appendChild(statsContainer);
  });
}

function animateCounter(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const current = Math.floor(progress * (end - start) + start);
    element.textContent = `${current}${element.textContent.includes('%') ? '%' : element.textContent.includes('+') ? '+' : ''}`;
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// تأثيرات الاهتزاز عند التمرير
document.addEventListener('mousemove', function(e) {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = (x - centerX) / 50;
    const rotateX = (centerY - y) / 50;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
});

// إضافة شارة "New" للمشاريع الحديثة
document.querySelectorAll('.project-card').forEach((card, index) => {
  if (index < 3) { // أول 3 مشاريع تحصل على شارة "New"
    const badge = document.createElement('div');
    badge.className = 'project-badge';
    badge.textContent = 'New';
    card.appendChild(badge);
  }
});

// تأثير الثلج المتساقط
function createSnowfall() {
  const snowfallContainer = document.getElementById('snowfall');
  if (!snowfallContainer) return;
  
  // عدد رقاقات الثلج (يمكن تعديله حسب الحاجة)
  const snowflakeCount = 150;
  
  // إنشاء رقاقات الثلج
  for (let i = 0; i < snowflakeCount; i++) {
    createSnowflake(snowfallContainer, i);
  }
  
  // إنشاء وميض إضافي
  createSparkles(snowfallContainer);
}

function createSnowflake(container, index) {
  const snowflake = document.createElement('div');
  const size = Math.random();
  
  // تحديد حجم ونوع رقاقة الثلج
  if (size < 0.3) {
    snowflake.className = 'snowflake snowflake-small';
  } else if (size < 0.6) {
    snowflake.className = 'snowflake snowflake-medium';
  } else {
    snowflake.className = 'snowflake snowflake-large';
  }
  
  // خصائص عشوائية
  const left = Math.random() * 100;
  const animationDuration = Math.random() * 8 + 5; // 5-13 ثانية
  const animationDelay = Math.random() * 10; // تأخير عشوائي
  const animationType = Math.random();
  
  // تحديد نوع الحركة
  let animationName = 'snowfall';
  if (animationType < 0.3) {
    animationName = 'snowfall-slow';
  } else if (animationType > 0.7) {
    animationName = 'snowfall-fast';
  }
  
  // تطبيق الخصائص
  snowflake.style.left = `${left}%`;
  snowflake.style.animationDuration = `${animationDuration}s`;
  snowflake.style.animationDelay = `${animationDelay}s`;
  snowflake.style.animationName = animationName;
  
  // إضافة تمايل إضافي
  snowflake.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;
  
  // لون عشوائي (أبيض مع ظلال زرقاء خفيفة)
  const blueTint = Math.random() * 0.2;
  snowflake.style.backgroundColor = `rgba(255, 255, 255, ${0.7 + Math.random() * 0.3})`;
  snowflake.style.boxShadow = `
    0 0 ${5 + Math.random() * 5}px rgba(173, 216, 230, ${0.3 + blueTint}),
    0 0 ${10 + Math.random() * 10}px rgba(173, 216, 230, ${0.1 + blueTint})
  `;
  
  container.appendChild(snowflake);
  
  // إعادة إنشاء رقاقة الثلج بعد انتهاء الحركة
  setTimeout(() => {
    if (snowflake.parentNode === container) {
      container.removeChild(snowflake);
      createSnowflake(container, index);
    }
  }, (animationDuration + animationDelay) * 1000);
}

function createSparkles(container) {
  const sparkleCount = 30;
  
  for (let i = 0; i < sparkleCount; i++) {
    setTimeout(() => {
      const sparkle = document.createElement('div');
      sparkle.className = 'snowflake-sparkle';
      
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const duration = 1 + Math.random() * 2;
      const delay = Math.random() * 5;
      
      sparkle.style.left = `${left}%`;
      sparkle.style.top = `${top}%`;
      sparkle.style.animationDuration = `${duration}s`;
      sparkle.style.animationDelay = `${delay}s`;
      
      container.appendChild(sparkle);
      
      // إزالة الوميض بعد انتهاء الحركة
      setTimeout(() => {
        if (sparkle.parentNode === container) {
          container.removeChild(sparkle);
        }
      }, (duration + delay) * 1000);
    }, i * 500);
  }
  
  // استمرارية الوميض
  setInterval(() => {
    createSparkles(container);
  }, 5000);
}

// تفاعل الثلج مع الماوس
function initSnowInteraction() {
  const snowfall = document.querySelector('.snowfall');
  if (!snowfall) return;
  
  let mouseX = 0;
  let mouseY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // تأثير على رقاقات الثلج القريبة من الماوس
    const snowflakes = document.querySelectorAll('.snowflake');
    snowflakes.forEach(flake => {
      const rect = flake.getBoundingClientRect();
      const flakeX = rect.left + rect.width / 2;
      const flakeY = rect.top + rect.height / 2;
      
      const distance = Math.sqrt(
        Math.pow(flakeX - mouseX, 2) + 
        Math.pow(flakeY - mouseY, 2)
      );
      
      if (distance < 100) {
        const angle = Math.atan2(flakeY - mouseY, flakeX - mouseX);
        const force = (100 - distance) / 100;
        
        flake.style.transform += ` translate(${Math.cos(angle) * force * 10}px, ${Math.sin(angle) * force * 10}px)`;
      }
    });
  });
}

// تحكم في كثافة الثلج
function adjustSnowDensity(density) {
  const snowfall = document.getElementById('snowfall');
  if (!snowfall) return;
  
  // إزالة جميع رقاقات الثلج الحالية
  while (snowfall.firstChild) {
    snowfall.removeChild(snowfall.firstChild);
  }
  
  // إنشاء عدد جديد من رقاقات الثلج
  const snowflakeCount = Math.floor(density * 150);
  for (let i = 0; i < snowflakeCount; i++) {
    createSnowflake(snowfall, i);
  }
}

// تأثيرات الطقس الإضافية
function createWeatherEffects() {
  const projectsSection = document.querySelector('.projects');
  
  // إضافة طبقة ضباب خفيفة
  const fogLayer = document.createElement('div');
  fogLayer.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(255, 255, 255, 0.02) 50%,
      transparent 100%
    );
    pointer-events: none;
    z-index: 1;
    animation: fogMove 30s infinite linear;
  `;
  
  // إضافة أنماط للضباب
  const fogStyle = document.createElement('style');
  fogStyle.textContent = `
    @keyframes fogMove {
      0% { transform: translateY(0); opacity: 0.3; }
      50% { transform: translateY(-20px); opacity: 0.5; }
      100% { transform: translateY(0); opacity: 0.3; }
    }
  `;
  
  document.head.appendChild(fogStyle);
  projectsSection.appendChild(fogLayer);
  
  // إضافة ومضات برق خفيفة (نادرة)
  setInterval(() => {
    if (Math.random() > 0.98) { // 2% فرصة لحدوث وميض
      const lightning = document.createElement('div');
      lightning.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.1);
        pointer-events: none;
        z-index: 0;
        animation: lightningFlash 0.5s;
      `;
      
      const lightningStyle = document.createElement('style');
      lightningStyle.textContent = `
        @keyframes lightningFlash {
          0% { opacity: 0; }
          10% { opacity: 0.3; }
          20% { opacity: 0; }
          30% { opacity: 0.2; }
          40% { opacity: 0; }
          100% { opacity: 0; }
        }
      `;
      
      document.head.appendChild(lightningStyle);
      projectsSection.appendChild(lightning);
      
      setTimeout(() => {
        lightning.remove();
        lightningStyle.remove();
      }, 500);
    }
  }, 3000);
}

// استدعاء الدوال عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
  createSnowfall();
  initSnowInteraction();
  createWeatherEffects();
  
  // إضافة عناصر التحكم في كثافة الثلج (اختياري)
  addSnowControls();
});

// إضافة أزرار تحكم في كثافة الثلج (اختياري)
function addSnowControls() {
  const controls = document.createElement('div');
  controls.className = 'snow-controls';
  controls.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.7);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    gap: 10px;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 122, 0, 0.3);
  `;
  
  const lightBtn = document.createElement('button');
  lightBtn.textContent = '❄️ خفيف';
  lightBtn.onclick = () => adjustSnowDensity(0.3);
  lightBtn.style.cssText = `
    background: rgba(255, 122, 0, 0.3);
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    transition: all 0.3s;
  `;
  
  const mediumBtn = document.createElement('button');
  mediumBtn.textContent = '❄️ متوسط';
  mediumBtn.onclick = () => adjustSnowDensity(0.7);
  mediumBtn.style.cssText = `
    background: rgba(255, 122, 0, 0.5);
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    transition: all 0.3s;
  `;
  
  const heavyBtn = document.createElement('button');
  heavyBtn.textContent = '❄️ كثيف';
  heavyBtn.onclick = () => adjustSnowDensity(1);
  heavyBtn.style.cssText = `
    background: rgba(255, 122, 0, 0.7);
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    transition: all 0.3s;
  `;
  
  const offBtn = document.createElement('button');
  offBtn.textContent = '❌ إيقاف';
  offBtn.onclick = () => {
    const snowfall = document.getElementById('snowfall');
    if (snowfall) {
      snowfall.innerHTML = '';
    }
  };
  offBtn.style.cssText = `
    background: rgba(255, 0, 0, 0.3);
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    transition: all 0.3s;
  `;
  
  controls.appendChild(lightBtn);
  controls.appendChild(mediumBtn);
  controls.appendChild(heavyBtn);
  controls.appendChild(offBtn);
  
  document.body.appendChild(controls);
}