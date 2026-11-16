var themeButton = document.getElementById("theme-toggle-button");
var modeLight = document.getElementById("modeLight");
var modeDark = document.getElementById("modeDark");
var colorsGrid = document.getElementById("themeColorsGrid");
var resetButton = document.getElementById("reset-settings");
var scrollButton = document.getElementById("scroll-to-top");

function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark");
    document.documentElement.setAttribute("data-bs-theme", "dark");
    modeDark.checked = true;
  } else {
    document.body.classList.remove("dark");
    document.documentElement.setAttribute("data-bs-theme", "light");
    modeLight.checked = true;
  }
  localStorage.setItem("theme", theme);
}

var savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  applyTheme("light");
} else {
  applyTheme("dark");
}

themeButton.onclick = function () {
  if (document.body.classList.contains("dark")) {
    applyTheme("light");
  } else {
    applyTheme("dark");
  }
};

modeLight.onclick = function () {
  applyTheme("light");
};

modeDark.onclick = function () {
  applyTheme("dark");
};

var colors = [
  { primary: "#6366f1", secondary: "#8b5cf6" },
  { primary: "#ec4899", secondary: "#f43f5e" },
  { primary: "#10b981", secondary: "#14b8a6" },
  { primary: "#f59e0b", secondary: "#f97316" },
  { primary: "#3b82f6", secondary: "#06b6d4" },
];

function applyColor(index) {
  var root = document.documentElement;
  root.style.setProperty("--primary", colors[index].primary);
  root.style.setProperty("--secondary", colors[index].secondary);
  localStorage.setItem("colorIndex", index);
}

function drawColors() {
  colorsGrid.innerHTML = "";
  for (var i = 0; i < colors.length; i++) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.setAttribute("data-index", i);
    btn.style.width = "40px";
    btn.style.height = "40px";
    btn.style.borderRadius = "50%";
    btn.style.border = "2px solid white";
    btn.style.background = `linear-gradient(to bottom right, ${colors[i].secondary}, ${colors[i].primary})`;
    btn.onclick = function () {
      var index = this.getAttribute("data-index");
      applyColor(index);
    };
    colorsGrid.appendChild(btn);
  }
}

drawColors();

var savedColor = localStorage.getItem("colorIndex");
if (savedColor !== null) {
  applyColor(savedColor);
}

resetButton.onclick = function () {
  applyTheme("dark");
  applyColor(0);
};

var sectionIds = [
  "hero-section",
  "about",
  "portfolio",
  "experience",
  "testimonials",
  "contact",
];
var navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.onscroll = function () {
  if (window.scrollY > 300) {
    scrollButton.classList.add("show");
  } else {
    scrollButton.classList.remove("show");
  }

  var current = "hero-section";
  for (var i = 0; i < sectionIds.length; i++) {
    var section = document.getElementById(sectionIds[i]);
    if (window.scrollY + 120 >= section.offsetTop) {
      current = sectionIds[i];
    }
  }

  for (var j = 0; j < navLinks.length; j++) {
    if (navLinks[j].getAttribute("href") === `#${current}`) {
      navLinks[j].classList.add("active");
    } else {
      navLinks[j].classList.remove("active");
    }
  }
};

scrollButton.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

var skills = [
  {
    name: "React.js",
    icon: "bi-diagram-3",
    level: 95,
    desc: "خبرة متقدمة في بناء تطبيقات React معقدة",
  },
  {
    name: "Next.js",
    icon: "bi-hexagon",
    level: 90,
    desc: "تطوير تطبيقات SSR وSSG متقدمة",
  },
  {
    name: "TypeScript",
    icon: "bi-code-slash",
    level: 88,
    desc: "كتابة كود آمن ومنظم بشكل احترافي",
  },
  {
    name: "Tailwind CSS",
    icon: "bi-wind",
    level: 97,
    desc: "تصميم واجهات حديثة بسرعة عالية",
  },
  {
    name: "Node.js",
    icon: "bi-hexagon-fill",
    level: 85,
    desc: "بناء APIs وخدمات الخلفية",
  },
  {
    name: "Figma",
    icon: "bi-vector-pen",
    level: 92,
    desc: "تصميم واجهات احترافية ونماذج تفاعلية",
  },
];

function renderSkills() {
  var grid = document.getElementById("skillsGrid");
  var cartona = "";

  for (var i = 0; i < skills.length; i++) {
    cartona += `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="skill-card">
                <div class="skill-head">
                    <h5 class="skill-name">${skills[i].name}</h5>
                    <i class="bi ${skills[i].icon} skill-icon"></i>
                </div>
                <div class="skill-track">
                    <div class="skill-fill" data-level="${skills[i].level}"></div>
                </div>
                <p class="skill-desc">${skills[i].desc}</p>
            </div>
        </div>`;
  }

  grid.innerHTML = cartona;

  setTimeout(function () {
    var fills = document.getElementsByClassName("skill-fill");
    for (var j = 0; j < fills.length; j++) {
      fills[j].style.width = fills[j].getAttribute("data-level") + "%";
    }
  }, 100);
}

renderSkills();

var projects = [
  {
    title: "متجر إلكتروني متكامل",
    desc: "منصة تجارة إلكترونية حديثة مع نظام دفع آمن وإدارة المنتجات",
    image: "assets/imgs/portfolio-1-BqicZ04C.webp",
    type: "web",
    category: "موقع ويب",
    catClass: "cat-web",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/username/project1",
    figma: "",
    demo: "https://project1.com",
  },
  {
    title: "تطبيق إدارة المهام",
    desc: "تطبيق ويب تفاعلي لإدارة المهام مع ميزات التعاون الجماعي",
    image: "assets/imgs/portfolio-2-D0_acfF_.webp",
    type: "app",
    category: "تطبيق",
    catClass: "cat-app",
    tags: ["Vue.js", "Firebase", "Tailwind"],
    github: "https://github.com/username/project2",
    figma: "",
    demo: "https://project2.com",
  },
  {
    title: "موقع شخصي إبداعي",
    desc: "تصميم موقع شخصي بأسلوب عصري وألوان جريئة",
    image: "assets/imgs/portfolio-3-uJsBXCgl.webp",
    type: "design",
    category: "تصميم",
    catClass: "cat-design",
    tags: ["Figma", "UI/UX", "Prototype"],
    github: "",
    figma: "https://figma.com/file/your-design",
    demo: "https://project3.com",
  },
  {
    title: "موقع شركة استشارية",
    desc: "موقع احترافي لشركة استشارات مع نظام حجز المواعيد",
    image: "assets/imgs/portfolio-4-Czusdp5K.webp",
    type: "web",
    category: "موقع ويب",
    catClass: "cat-web",
    tags: ["Next.js", "TypeScript", "Prisma"],
    github: "",
    figma: "https://figma.com/file/your-design",
    demo: "https://project3.com",
  },
  {
    title: "لوحة تحليلات اجتماعية",
    desc: "منصة تحليل وإدارة حسابات التواصل الاجتماعي",
    image: "assets/imgs/portfolio-5-ChqqtI-W.webp",
    type: "app",
    category: "تطبيق",
    catClass: "cat-app",
    tags: ["React", "Chart.js", "API"],
    github: "",
    figma: "https://figma.com/file/your-design",
    demo: "https://project3.com",
  },
  {
    title: "متجر أزياء فاخر",
    desc: "منصة تسوق راقية للأزياء مع تجربة مستخدم استثنائية",
    image: "assets/imgs/portfolio-6-C9bxzsei.webp",
    type: "ecommerce",
    category: "تجارة إلكترونية",
    catClass: "cat-ecommerce",
    tags: ["Next.js", "Stripe", "Sanity"],
    github: "",
    figma: "https://figma.com/file/your-design",
    demo: "https://project3.com",
  },
  {
    title: "موقع مطعم وتوصيل",
    desc: "منصة طلب طعام مع نظام توصيل وتتبع الطلبات",
    image: "assets/imgs/portfolio-7-BXDNVwGk.webp",
    type: "web",
    category: "موقع ويب",
    catClass: "cat-web",
    tags: ["React", "Express", "PostgreSQL"],
    github: "",
    figma: "https://figma.com/file/your-design",
    demo: "https://project3.com",
  },
  {
    title: "تطبيق لياقة بدنية",
    desc: "تطبيق متكامل لتتبع التمارين والتغذية والتقدم",
    image: "assets/imgs/portfolio-9-Q6q-wpwU.webp",
    type: "app",
    category: "تطبيق",
    catClass: "cat-app",
    tags: ["React Native", "Redux", "Firebase"],
    github: "",
    figma: "https://figma.com/file/your-design",
    demo: "https://project3.com",
  },
  {
    title: "تصميم تطبيق جوال",
    desc: "تصميم UI/UX كامل لتطبيق جوال متعدد الوظائف",
    image: "assets/imgs/portfolio-8-BnHB_F_a.webp",
    type: "design",
    category: "تصميم",
    catClass: "cat-design",
    tags: ["Sketch", "Adobe XD", "Figma"],
    github: "",
    figma: "https://figma.com/file/your-design",
    demo: "https://project3.com",
  },
];
function renderProjects(filter) {
  if (filter === undefined) {
    filter = "all";
  }

  var grid = document.getElementById("portfolioGrid");
  var cartona = "";

  for (var i = 0; i < projects.length; i++) {
    if (filter !== "all" && projects[i].type !== filter) {
      continue;
    }

    var tagsHtml = "";
    for (var j = 0; j < projects[i].tags.length; j++) {
      tagsHtml += `<span class="project-tag">${projects[i].tags[j]}</span>`;
    }

    var secondBtn = "";
    if (projects[i].github != "") {
      secondBtn = `<a href="${projects[i].github}" target="_blank" class="project-btn"><i class="bi bi-github"></i></a>`;
    } else if (projects[i].figma != "") {
      secondBtn = `<a href="${projects[i].figma}" target="_blank" class="project-btn"><i class="devicon-figma-plain"></i></a>`;
    }

    cartona += `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="project-card">
                <div class="project-img">
                    <img src="${projects[i].image}" alt="${projects[i].title}">
                </div>
                <div class="project-body">
                    <div class="project-top">
                        <span class="project-cat ${projects[i].catClass}">${projects[i].category}</span>
                        <div class="project-actions">
                            <a href="${projects[i].demo}" target="_blank" class="project-btn"><i class="bi bi-eye"></i></a>
                            ${secondBtn}
                        </div>
                    </div>
                    <h4 class="project-title">${projects[i].title}</h4>
                    <p class="project-desc">${projects[i].desc}</p>
                    <div class="project-tags">${tagsHtml}</div>
                </div>
            </div>
        </div>`;
  }

  if (cartona === "") {
    cartona = `<p class="text-center text-body-secondary">لا توجد مشاريع في هذا القسم</p>`;
  }

  grid.innerHTML = cartona;
}

var filterButtons = document.getElementsByClassName("filter-btn");

for (var f = 0; f < filterButtons.length; f++) {
  filterButtons[f].onclick = function () {
    for (var k = 0; k < filterButtons.length; k++) {
      filterButtons[k].classList.remove("active");
    }
    this.classList.add("active");
    renderProjects(this.getAttribute("data-filter"));
  };
}

renderProjects("all");

var filterButtons = document.getElementsByClassName("filter-btn");

for (var f = 0; f < filterButtons.length; f++) {
  filterButtons[f].onclick = function () {
    for (var k = 0; k < filterButtons.length; k++) {
      filterButtons[k].classList.remove("active");
    }
    this.classList.add("active");
    renderProjects(this.getAttribute("data-filter"));
  };
}

renderProjects();

var experiences = [
  {
    date: "2022 - الآن",
    icon: "fa-briefcase",
    title: "مطور واجهات أمامية أول",
    company: "شركة التقنية المتقدمة",
    desc: "قيادة فريق من 5 مطورين في بناء تطبيقات ويب معقدة باستخدام React و Next.js. تحسين أداء التطبيقات بنسبة 40% وتطوير نظام تصميم شامل.",
    tags: ["Team Lead", "TypeScript", "Next.js", "React"],
    color: "blue",
  },
  {
    date: "2022 - 2020",
    icon: "fa-laptop-code",
    title: "مطور Full Stack",
    company: "استوديو الإبداع الرقمي",
    desc: "تطوير أكثر من 25 موقع ويب وتطبيق للعملاء. العمل على مشاريع متنوعة من التجارة الإلكترونية إلى المنصات التعليمية باستخدام MERN Stack.",
    tags: ["Node.js", "React", "Express", "MongoDB"],
    color: "purple",
  },
  {
    date: "2020 - 2019",
    icon: "fa-code",
    title: "مطور واجهات أمامية",
    company: "وكالة التسويق الرقمي",
    desc: "تطوير واجهات مستخدم تفاعلية ومتجاوبة لحملات تسويقية متعددة. التعاون مع فريق التصميم لتحويل النماذج إلى تطبيقات عملية.",
    tags: ["JavaScript", "Bootstrap", "SASS"],
    color: "purple",
  },
  {
    date: "2019 - 2018",
    icon: "fa-graduation-cap",
    title: "متدرب تطوير ويب",
    company: "شركة البرمجيات الذكية",
    desc: "برنامج تدريبي مكثف لمدة عام في تطوير الويب. تعلم أساسيات البرمجة وأفضل الممارسات والعمل على مشاريع حقيقية تحت إشراف مطورين محترفين.",
    tags: ["Responsive Design", "APIs", "Git"],
    color: "blue",
  },
];

function showTimeline() {
  var list = document.getElementById("timelineList");
  var html = "";

  for (var i = 0; i < experiences.length; i++) {
    var item = experiences[i];
    var side;

    if (i % 2 === 0) {
      side = "right";
    } else {
      side = "left";
    }

    var tagsHtml = "";
    for (var j = 0; j < item.tags.length; j++) {
      tagsHtml += `<span class="tl-tag">${item.tags[j]}</span>`;
    }

    html += `
            <div class="timeline-item ${side} ${item.color}">
                <span class="timeline-dot"></span>
                <div class="timeline-card">
                    <div class="tl-top">
                        <span class="tl-date">${item.date}</span>
                        <i class="fa-solid ${item.icon}"></i>
                    </div>
                    <h3>${item.title}</h3>
                    <h5>${item.company}</h5>
                    <p>${item.desc}</p>
                    <div class="tl-tags">${tagsHtml}</div>
                </div>
            </div>
        `;
  }

  list.innerHTML = html;
}

showTimeline();

var testimonials = [
  {
    name: "أحمد السعيد",
    role: "مدير شركة التقنية الحديثة",
    img: "assets/imgs/avatar-1-BQH9KX0X.webp",
    text: "شغل أحمد معانا كان حاجة تانية خالص. قدم حلول مبتكرة لكل المشاكل اللي واجهتنا. الموقع اللي عمله عدى كل توقعاتنا في التصميم والأداء.",
  },
  {
    name: "سيف أسامة",
    role: "ميديا باير",
    img: "assets/imgs/avatar-2-CyFiVXIH.webp",
    text: "المتجر بتاعنا بقى محترف ومريح جداً في الاستخدام. مبيعاتنا زادت 60% في أول شهر. شكراً يا أحمد على المجهود الجبار",
  },
  {
    name: "خالد صلاح",
    role: "مدير تطوير الأعمال",
    img: "assets/imgs/avatar-5-BF_5vAuR.webp",
    text: "شغل محترفين بجد ومواعيد مظبوطة. التطبيق اللي عمله لنا شغال زي الفل على كل الأجهزة. بننصح بيه جداً لأي مشروع.",
  },
  {
    name: "أحمد الرفاعي",
    role: "جرافيك ديزاينر",
    img: "assets/imgs/avatar-4-CI2X8fvY.webp",
    text: "تجربة ممتازة من الأول للآخر. أحمد سمع طلباتنا كويس وقدم أفكار برة الصندوق. الموقع الجديد عجب العملاء جداً.",
  },
  {
    name: "عمر عادل",
    role: "مؤسس شركة ناشئة",
    img: "assets/imgs/avatar-3-CmoFRkys.webp",
    text: "أحمد ساعدنا نحول الفكرة لواقع. الـ MVP اللي عمله كان ممتاز عشان نجذب مستثمرين. شطارة تقنية وإبداع ملوش حل.",
  },
  {
    name: "كريم ياسر",
    role: "دكتور صيدلي",
    img: "assets/imgs/avatar-6-IIG--UcM.webp",
    text: "الشغل مع أحمد كان مريح ومنظم جداً. دايماً بيبعت تحديثات وبيرد بسرعة على أي تعديل. النتيجة النهائية أحسن من اللي كنا متخيلينه.",
  },
];

var currentIndex = 0;

function getVisibleCount() {
  var w = window.innerWidth;
  if (w >= 992) {
    return 3;
  } else if (w >= 768) {
    return 2;
  } else {
    return 1;
  }
}

function renderTestimonials() {
  var inner = document.getElementById("testimonialInner");
  var html = "";

  for (var i = 0; i < testimonials.length; i++) {
    var t = testimonials[i];
    var stars = "";
    for (var s = 0; s < 5; s++) {
      stars += "★";
    }

    html += `
            <div class="t-card-wrap">
                <div class="t-card">
                    <div class="t-head">
                        <img src="${t.img}" alt="${t.name}">
                        <div>
                            <h5>${t.name}</h5>
                            <small>${t.role}</small>
                        </div>
                    </div>
                    <div class="t-stars">${stars}</div>
                    <p>"${t.text}"</p>
                </div>
            </div>
        `;
  }

  inner.innerHTML = html;
  updateSlider();
}

function renderDots() {
  var dots = document.getElementById("testimonialDots");
  var count = testimonials.length - getVisibleCount() + 1;
  var html = "";

  if (count < 1) {
    count = 1;
  }

  for (var i = 0; i < count; i++) {
    if (i === currentIndex) {
      html += `<span class="t-dot active" onclick="goToTestimonial(${i})"></span>`;
    } else {
      html += `<span class="t-dot" onclick="goToTestimonial(${i})"></span>`;
    }
  }

  dots.innerHTML = html;
}

function updateSlider() {
  var track = document.getElementById("testimonialInner");
  var cards = track.getElementsByClassName("t-card-wrap");
  var visible = getVisibleCount();
  var cardWidth = 100 / visible;
  var maxIndex = testimonials.length - visible;

  if (maxIndex < 0) {
    maxIndex = 0;
  }
  if (currentIndex > maxIndex) {
    currentIndex = 0;
  }

  for (var i = 0; i < cards.length; i++) {
    cards[i].style.flex = "0 0 " + cardWidth + "%";
  }

  track.style.transform = "translateX(" + currentIndex * cardWidth + "%)";
  renderDots();
}

function goToTestimonial(i) {
  currentIndex = i;
  updateSlider();
}

function nextTestimonial() {
  var maxIndex = testimonials.length - getVisibleCount();
  if (currentIndex < maxIndex) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlider();
}

function prevTestimonial() {
  var maxIndex = testimonials.length - getVisibleCount();
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = maxIndex;
  }
  updateSlider();
}

window.onresize = updateSlider;
renderTestimonials();

var fonts = [
  { name: "Alexandria", label: "Alexandria" },
  { name: "Tajawal", label: "الخط الافتراضي" },
  { name: "Cairo", label: "Cairo" },
];

function applyFont(index) {
  document.body.style.fontFamily = `"${fonts[index].name}", sans-serif`;
  localStorage.setItem("fontIndex", index);
  drawFonts();
}

function drawFonts() {
  var list = document.getElementById("fontsList");
  var saved = localStorage.getItem("fontIndex");
  if (saved === null) {
    saved = 1;
  }
  var cartona = "";

  for (var i = 0; i < fonts.length; i++) {
    var activeClass = "";
    var check = "";
    if (i == saved) {
      activeClass = " active";
      check = `<i class="bi bi-check-circle-fill font-check"></i>`;
    }
    cartona += `
      <button type="button" class="font-option${activeClass}" onclick="applyFont(${i})">
        <span class="font-text">
          <strong style="font-family: '${fonts[i].name}'">${fonts[i].name}</strong>
          <small>${fonts[i].label}</small>
        </span>
        ${check}
      </button>`;
  }

  list.innerHTML = cartona;
}

var savedFont = localStorage.getItem("fontIndex");
if (savedFont !== null) {
  applyFont(savedFont);
} else {
  drawFonts();
}


var colors = [
  { primary: "#6366f1", secondary: "#8b5cf6" },
  { primary: "#ec4899", secondary: "#f43f5e" },
  { primary: "#10b981", secondary: "#14b8a6" },
  { primary: "#f59e0b", secondary: "#f97316" },
  { primary: "#3b82f6", secondary: "#06b6d4" },
  { primary: "#ef4444", secondary: "#f43f5e" },
];

function applyColor(index) {
  var root = document.documentElement;
  root.style.setProperty("--primary", colors[index].primary);
  root.style.setProperty("--secondary", colors[index].secondary);
  localStorage.setItem("colorIndex", index);
  drawColors();
}

function drawColors() {
  var saved = localStorage.getItem("colorIndex");
  if (saved === null) {
    saved = 0;
  }
  colorsGrid.innerHTML = "";

  for (var i = 0; i < colors.length; i++) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.setAttribute("data-index", i);
    btn.style.width = "40px";
    btn.style.height = "40px";
    btn.style.borderRadius = "50%";

    if (i == saved) {
      btn.style.border = "3px solid white";
    } else {
      btn.style.border = "2px solid #314158";
    }

    btn.style.background = `linear-gradient(to bottom right, ${colors[i].secondary}, ${colors[i].primary})`;

    btn.onclick = function () {
      var index = parseInt(this.getAttribute("data-index"));
      applyColor(index);
    };

    colorsGrid.appendChild(btn);
  }
}

var savedColor = localStorage.getItem("colorIndex");
if (savedColor !== null) {
  applyColor(parseInt(savedColor));
} else {
  drawColors();
}

resetButton.onclick = function () {
  applyTheme("dark");
  applyColor(0);
  applyFont(1);
};