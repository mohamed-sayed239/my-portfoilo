/**
 * Mohamed Sayed Portfolio - Main JavaScript
 * Senior Frontend Developer & UI/UX Implementation
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // 1. Configuration & Constants
  // ==========================================================================
  const WA = '201003073577';
  const MSG = {
    ar: 'السلام عليكم محمد، حابب أتكلم معاك عن مشروعي.',
    en: 'Hi Mohamed, I’d like to talk about my project.'
  };
  
  // رسالة تفاصيل المشروع (للزرار الثابت)
  const FLOAT_MSG = {
    ar: 'السلام عليكم محمد 👋\nأرغب في طلب خدمة / مناقشة مشروع معك.\n\nتفاصيل الشغل:\n• نوع الخدمة: \n• الفكرة / المطلوب: \n• الميزانية التقريبية: \n• المدة المطلوبة: \n\nفي انتظار تواصلك!',
    en: 'Hi Mohamed 👋\nI\'d like to request a service / discuss a project with you.\n\nProject details:\n• Service type: \n• Idea / Requirements: \n• Approximate budget: \n• Expected timeline: \n\nLooking forward to your reply!'
  };
  
  const isHome = document.body.dataset.p === 'home';
  const homePath = isHome ? '' : 'index.html';

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  
  const L = (ar, en, tag = 'span', className = '') => 
    `<${tag} ${className ? `class="${className}"` : ''} data-ar="${ar}" data-en="${en}">${ar}</${tag}>`;
    
  const getWaLink = (msg) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

  // ==========================================================================
  // 2. Data
  // ==========================================================================
  const NAV = [
    ['about', 'من أنا', 'About'],
    ['services', 'الخدمات', 'Services'],
    ['portfolio', 'الأعمال', 'Work'],
    ['journey', 'الرحلة', 'Journey'],
    ['cv', 'السيرة الذاتية', 'CV'],
    ['contact', 'تواصل', 'Contact']
  ];

  const PROJECTS = [
    ['moon-light-courses', 'Moon Light Courses', 'موقع لعرض الكورسات التعليمية.', 'A website presenting educational courses.'],
    ['codexite', 'Codexite', 'مشروع ويب من أعمالي.', 'A web project from my portfolio.'],
    ['fitness-nutrition-planner', 'Fitness & Nutrition Planner', 'أداة لتخطيط التمارين والتغذية.', 'A tool for planning workouts and nutrition.'],
    ['lumiquest-game', 'Lumiquest Game', 'لعبة ويب تفاعلية.', 'An interactive web game.'],
    ['perfume-store', 'Perfume Store', 'موقع لمتجر عطور.', 'A perfume store website.'],
    ['law-firm-website', 'Law Firm Website', 'موقع لمكتب محاماة.', 'A website for a law firm.'],
    ['personal-portfolio', 'Personal Portfolio', 'موقع شخصي لعرض الأعمال.', 'A personal website showcasing work.'],
    ['coffee-shop-website', 'Coffee Shop Website', 'موقع لمقهى.', 'A coffee shop website.'],
    ['calculator-app', 'Calculator App', 'تطبيق آلة حاسبة.', 'A calculator app.']
  ];

  const TESTIMONIALS = [
    { 
      name: 'ياسين ج.', enName: 'Yassin G.', 
      role: 'صاحب متجر إلكتروني', enRole: 'E-commerce Owner', 
      text: 'محمد لم يبنِ مجرد موقع، بل فهم احتياجات عملنا وقدم حلاً زاد من مبيعاتنا. أنصح به بشدة!', 
      enText: 'Mohamed didn\'t just build a website; he understood our business needs and delivered a solution that increased our sales. Highly recommended!', 
      stars: 5 
    },
    { 
      name: 'هالة م.', enName: 'Hala M.', 
      role: 'مديرة تسويق', enRole: 'Marketing Manager', 
      text: 'العمل مع محمد كان سلساً جداً. خبرته في التسويق جعلت عملية التطوير أسهل بكثير لأنه كان يعرف بالفعل ما الذي يحول الزوار إلى عملاء.', 
      enText: 'Working with Mohamed was smooth. His background in marketing made the development process much easier because he already knew what converts.', 
      stars: 5 
    },
    { 
      name: 'أحمد ك.', enName: 'Ahmed K.', 
      role: 'مؤسس شركة ناشئة', enRole: 'Startup Founder', 
      text: 'محترف، متواصل باستمرار، ويسلم في الوقت المحدد. الاهتمام بتفاصيل تصميم الواجهة تجاوز توقعاتي.', 
      enText: 'Professional, communicative, and delivers on time. The attention to detail in the UI design exceeded my expectations.', 
      stars: 4.5 
    },
    { 
      name: 'محمود ع.', enName: 'Mahmoud A.', 
      role: 'مدير مشاريع', enRole: 'Project Manager', 
      text: 'تجربة عمل رائعة، سرعة في التنفيذ ودقة في التفاصيل. أنصح بالتعامل معه لأي مشروع ويب.', 
      enText: 'Great work experience, fast execution and attention to detail. I recommend him for any web project.', 
      stars: 5 
    },
    { 
      name: 'سارة أ.', enName: 'Sara A.', 
      role: 'صاحبة علامة تجارية', enRole: 'Brand Owner', 
      text: 'شغل احترافي جداً، والموقع الجديد ساعدنا نطلع لشكل يليق بعلامتنا التجارية.', 
      enText: 'Very professional work, and the new website helped us look the way our brand deserves.', 
      stars: 5 
    },
    { 
      name: 'كريم س.', enName: 'Karim S.', 
      role: 'مطور برمجيات', enRole: 'Software Developer', 
      text: 'كود نظيف ومنظم جداً، والتعاون معه كان مريح. أتمنى له التوفيق.', 
      enText: 'Very clean and organized code, and collaborating with him was comfortable. I wish him the best.', 
      stars: 5 
    }
  ];

  // ==========================================================================
  // 3. DOM Initialization
  // ==========================================================================
  
  const initHeaderAndFooter = () => {
    const header = $('#hd');
    const footer = $('#ft');
    
    if (header) {
      header.innerHTML = `
        <div class="container header__container">
          <a class="logo" href="index.html">${L('محمد سيد', 'Mohamed Sayed')}</a>
          
          <button class="nav-toggle" id="nav-toggle" aria-label="Toggle Navigation" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
          
          <nav class="nav" id="nav-menu" aria-label="Main Navigation">
            ${NAV.map(n => `<a href="${homePath}#${n[0]}">${L(n[1], n[2])}</a>`).join('')}
          </nav>
          
          <button id="lang" class="btn btn--secondary btn--sm" type="button" aria-label="Switch Language">EN</button>
        </div>
      `;
    }

    if (footer) {
      footer.innerHTML = `
        <div class="container footer__container">
          <span>© ${new Date().getFullYear()} ${L('محمد سيد', 'Mohamed Sayed')}</span>
          <a data-wa href="#" target="_blank" rel="noopener">${L('واتساب', 'WhatsApp')}</a>
          <a href="index.html">${L('الصفحة الرئيسية', 'Home')}</a>
        </div>
      `;
    }
  };

  /**
   * Floating WhatsApp Button - appears on all pages
   * Opens WhatsApp with pre-filled project details template
   */
  const initFloatingWhatsApp = () => {
    // Remove existing to avoid duplication
    const existing = $('#wa-float');
    if (existing) existing.remove();
    
    const lang = document.documentElement.lang || 'ar';
    const btn = document.createElement('a');
    btn.id = 'wa-float';
    btn.className = 'wa-float';
    btn.href = getWaLink(FLOAT_MSG[lang]);
    btn.target = '_blank';
    btn.rel = 'noopener';
    btn.setAttribute('aria-label', lang === 'ar' ? 'تواصل معي على واتساب' : 'Chat with me on WhatsApp');
    
    btn.innerHTML = `
      <span class="wa-float__ring"></span>
      <span class="wa-float__ring"></span>
      <svg class="wa-float__icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
      <span class="wa-float__tooltip">${lang === 'ar' ? 'اطلب خدمتك الآن' : 'Order your service'}</span>
    `;
    
    document.body.appendChild(btn);
    
    // Update href when language changes (handled by applyLanguage)
    btn.dataset.floatWa = 'true';
  };

  const renderDynamicContent = () => {
    // Render Projects
    const gal = $('#gal');
    if (gal) {
      gal.innerHTML = PROJECTS.map(([slug, name, ar, en, url = '', repo = '', tech = []], i) => `
        <article class="project-card rv" style="--stagger:${(i % 3) * 0.1}s">
          <figure class="project-card__media">
            <img src="assets/images/projects/${slug}.jpg" alt="${name}" loading="lazy" class="project-card__image">
          </figure>
          <div class="project-card__content">
            <h2 class="project-card__title">${name}</h2>
            <p class="project-card__desc">${L(ar, en, 'span')}</p>
            ${tech.length ? `<p class="project-card__tech">${tech.join(' / ')}</p>` : ''}
            <div class="project-card__links" style="margin-top: auto; padding-top: 1rem; display: flex; gap: 0.5rem;">
              ${url ? `<a class="btn btn--primary btn--sm" href="${url}" target="_blank" rel="noopener">${L('معاينة', 'Live Demo')}</a>` : ''}
              ${repo ? `<a class="btn btn--secondary btn--sm" href="${repo}" target="_blank" rel="noopener">GitHub</a>` : ''}
            </div>
          </div>
        </article>
      `).join('');
    }

    // Render Campaigns
    const mg = $('#mg');
    if (mg) {
      mg.innerHTML = [1, 2, 3, 4, 5, 6].map((i, idx) => `
        <article class="campaign-card rv" style="--stagger:${(idx % 3) * 0.1}s">
          <figure class="campaign-card__media">
            <img src="assets/images/marketing/campaign-${i}.jpg" alt="Campaign ${i}" loading="lazy" class="campaign-card__image">
          </figure>
          <div class="campaign-card__content">
            <h2 class="campaign-card__title">${L('حملة تسويقية ' + i, 'Campaign ' + i)}</h2>
            <p class="campaign-card__desc">${L('وصف للحملة والنتائج التي حققتها.', 'Campaign description and results.')}</p>
          </div>
        </article>
      `).join('');
    }

    // Render Testimonials Marquee (Duplicated for seamless loop)
    const mq = $('#mq');
    if (mq) {
      const generateCards = () => TESTIMONIALS.map(t => `
        <article class="testimonial-card">
          <div class="testimonial-card__stars" aria-label="${t.stars} out of 5 stars">
            ${'★'.repeat(Math.floor(t.stars))}${t.stars % 1 !== 0 ? '⯪' : ''}
          </div>
          <p class="testimonial-card__text">${L(t.text, t.enText)}</p>
          <footer class="testimonial-card__author">
            <strong>${L(t.name, t.enName)}</strong>
            <span>${L(t.role, t.enRole)}</span>
          </footer>
        </article>
      `).join('');
      
      mq.innerHTML = generateCards() + generateCards();
    }
  };

  // ==========================================================================
  // 4. Internationalization
  // ==========================================================================
  
  const applyLanguage = (lang) => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';

    $$('[data-en]').forEach(el => {
      el.dataset.ar ??= el.innerHTML;
      el.innerHTML = lang === 'en' ? el.dataset.en : el.dataset.ar;
    });

    $$('[data-enph]').forEach(el => {
      el.dataset.arph ??= el.placeholder;
      el.placeholder = lang === 'en' ? el.dataset.enph : el.dataset.arph;
    });

    // Regular WhatsApp buttons (pre-written greeting)
    $$('[data-wa]').forEach(a => {
      a.href = getWaLink(MSG[lang]);
    });
    
    // Floating WhatsApp button (project details template)
    const floatBtn = $('#wa-float');
    if (floatBtn) {
      floatBtn.href = getWaLink(FLOAT_MSG[lang]);
      floatBtn.setAttribute('aria-label', lang === 'ar' ? 'تواصل معي على واتساب' : 'Chat with me on WhatsApp');
      const tooltip = floatBtn.querySelector('.wa-float__tooltip');
      if (tooltip) tooltip.textContent = lang === 'ar' ? 'اطلب خدمتك الآن' : 'Order your service';
    }

    const langBtn = $('#lang');
    if (langBtn) langBtn.textContent = lang === 'ar' ? 'EN' : 'عربي';

    try { localStorage.setItem('lang', lang); } catch (e) {}
  };

  const initLanguage = () => {
    let currentLang = 'ar';
    try {
      if (localStorage.getItem('lang') === 'en') currentLang = 'en';
    } catch (e) {}
    
    applyLanguage(currentLang);

    const langBtn = $('#lang');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        const newLang = document.documentElement.lang === 'ar' ? 'en' : 'ar';
        applyLanguage(newLang);
      });
    }
  };

  // ==========================================================================
  // 5. Mobile Menu
  // ==========================================================================
  
  const initMobileMenu = () => {
    const toggle = $('#nav-toggle');
    const menu = $('#nav-menu');
    
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('is-open');
      toggle.classList.toggle('is-active');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('is-open');
        toggle.classList.remove('is-active');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !toggle.contains(e.target) && menu.classList.contains('is-open')) {
        menu.classList.remove('is-open');
        toggle.classList.remove('is-active');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  };

  // ==========================================================================
  // 6. Scroll Reveal & Active Nav Link
  // ==========================================================================
  
  const initObservers = () => {
    // Reveal animations
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-active');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    // Apply stagger delays in grids
    $$('.services__grid .service-card').forEach((el, i) => {
      el.style.setProperty('--stagger', `${i * 0.1}s`);
    });
    
    $$('.process__grid .process-card').forEach((el, i) => {
      el.style.setProperty('--stagger', `${i * 0.1}s`);
    });
    
    $$('.project-grid .project-card, .campaign-grid .campaign-card').forEach((el, i) => {
      el.style.setProperty('--stagger', `${(i % 3) * 0.1}s`);
    });
    
    // Mark and observe all reveal targets
    $$('.rv, .service-card, .project-card, .campaign-card, .process-card, .section__title').forEach(el => {
      el.classList.add('rv');
      revealObserver.observe(el);
    });

    // Active Nav Link
    const sections = $$('section[id]');
    const navLinks = $$('.nav a');

    if (sections.length > 0 && navLinks.length > 0) {
      const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
              const href = link.getAttribute('href');
              if (href && href.includes(`#${id}`)) {
                link.classList.add('is-active');
              } else {
                link.classList.remove('is-active');
              }
            });
          }
        });
      }, { threshold: 0.5 });

      sections.forEach(section => navObserver.observe(section));
    }
  };

  // ==========================================================================
  // 7. Form Validation & WhatsApp Integration
  // ==========================================================================
  
  const initContactForm = () => {
    const form = $('#cf');
    if (!form) return;

    const fm = $('#fm');
    const inputs = form.querySelectorAll('input, textarea');

    inputs.forEach(input => {
      input.addEventListener('input', () => {
        if (input.checkValidity()) {
          input.classList.remove('is-invalid');
        } else {
          input.classList.add('is-invalid');
        }
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const isEn = document.documentElement.lang === 'en';
      const val = (k) => form[k].value.trim();
      const name = val('name');
      const email = val('email');
      const subject = val('subject');
      const message = val('message');

      let hasError = false;
      if (!name) { form['name'].classList.add('is-invalid'); hasError = true; }
      if (!email || !/^\S+@\S+\.\S+$/.test(email)) { form['email'].classList.add('is-invalid'); hasError = true; }
      if (!subject) { form['subject'].classList.add('is-invalid'); hasError = true; }
      if (!message) { form['message'].classList.add('is-invalid'); hasError = true; }

      if (hasError) {
        fm.textContent = isEn 
          ? 'Please fill in all fields and enter a valid email.' 
          : 'من فضلك املأ كل الحقول وتأكد من صحة البريد الإلكتروني.';
        fm.style.color = '#FF6B6B';
        return;
      }

      const textMsg = isEn 
        ? `Hi Eng/Mohamed,\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`
        : `مرحباً مهندس محمد،\nالاسم: ${name}\nالبريد الإلكتروني: ${email}\nالموضوع: ${subject}\n\n${message}`;

      window.open(getWaLink(textMsg), '_blank', 'noopener');
      
      fm.textContent = isEn 
        ? 'WhatsApp opened with your message ready. Press Send inside WhatsApp.' 
        : 'تم فتح واتساب ومعاه رسالتك جاهزة. اضغط إرسال داخل واتساب.';
      fm.style.color = 'var(--mk)';
      
      form.reset();
      inputs.forEach(input => input.classList.remove('is-invalid'));
    });
  };

  // ==========================================================================
  // 8. Image Error Handling
  // ==========================================================================
  
  const initImageFallbacks = () => {
    document.addEventListener('error', (e) => {
      if (e.target.tagName === 'IMG') {
        const parent = e.target.closest('.project-card__media, .campaign-card__media, .about__image-placeholder, .portfolio-card');
        if (parent) {
          parent.classList.add('img-error');
          e.target.style.display = 'none';
        }
      }
    }, true);
  };

  // ==========================================================================
  // 9. Initialize Everything
  // ==========================================================================
  
  initHeaderAndFooter();
  initFloatingWhatsApp();   // ← زرار الواتساب الثابت
  renderDynamicContent();
  initLanguage();
  initMobileMenu();
  initObservers();
  initContactForm();
  initImageFallbacks();
  
  console.log('%c Portfolio Loaded Successfully ', 'background: #00f0ff; color: #08080a; font-weight: bold; padding: 4px;');
});