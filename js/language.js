// ====================================================================
// language.js — Multi-language System (TH / EN) & Navbar Active Spy
// ====================================================================

// สถานะภาษาปัจจุบัน (Default: 'th')
let currentLang = 'th';

// Dictionary แปลภาษา
const translations = {
  th: {
    navAbout: "เกี่ยวกับฉัน",
    navSkills: "ทักษะ",
    navTimeline: "ประสบการณ์",
    navProjects: "ผลงาน",
    navContact: "ติดต่อ",
    heroName: "พิมพกานต์<br />กลิ่นหอม",
    heroTagline: 'นักศึกษาฝึกงานสาย <span class="marker-highlight">ui/ux design</span> และ creative development ที่หลงใหลการสร้างสรรค์ประสบการณ์ที่เรียบง่าย สวยงาม และใช้งานได้จริง',
    heroBtnWork: "ดูผลงานทั้งหมด",
    heroCaptionNote: '<iconify-icon icon="mdi:pencil"></iconify-icon> พร้อมสำหรับการเริ่มฝึกงานและเรียนรู้สิ่งใหม่ๆ เสมอ',
    aboutTitle: "เกี่ยวกับฉัน",
    aboutDesc: "ฉันเป็นนักศึกษาที่มีความหลงใหลใน UI/UX Design และ Frontend Development ชอบสร้างประสบการณ์ที่ดีให้กับผู้ใช้ผ่านการออกแบบที่สวยงามและมีประสิทธิภาพ ปัจจุบันกำลังฝึกงานและพัฒนาทักษะด้านการออกแบบและพัฒนาเว็บไซต์",
    factStudent: "กำลังศึกษาอยู่",
    factIntern: "ฝึกงาน Internship",
    factCreative: "ชอบ Design & Creative",
    skillsTitle: "ทักษะและเครื่องมือ",
    timelineTitle: "เส้นทางการเรียนรู้",
    timelineItemTitle: "ปริญญาตรี สาขาวิชาวิศวกรรมซอฟต์แวร์ (ชั้นปีที่ 3)",
    timelineItemDesc: "มหาวิทยาลัยพะเยา (มุ่งเน้นการศึกษาด้านการออกแบบประสบการณ์ผู้ใช้ (UX/UI) และการพัฒนาส่วนหน้าของเว็บไซต์)",
    projectsTitle: "ผลงานที่ผ่านมา",
    proj1Title: "Personal Web Portfolio",
    proj2Title: "ระบบแจ้งซ่อมสุขาภิบาล ICT (Toilet Maintenance Report System)",
    proj1Desc: "ผลงานชิ้นแรกจากการฝึกงานที่ริเริ่มขึ้นตั้งแต่วันแรก โดยการนำเอาองค์ความรู้ เทคนิค และแนวทางการพัฒนาเว็บที่ได้รับจากพี่เลี้ยง มาถ่ายทอดเป็นโปรเจกต์จริงทันที พร้อมทั้งนำเทคโนโลยี AI Agent เข้ามาสเกลกระบวนการทำงานและช่วยแก้ปัญหาเชิงเทคนิคอย่างเป็นระบบ",
    proj2Desc: "ระบบแจ้งซ่อมและติดตามสถานะงานสุขาภิบาลอัจฉริยะ ออกแบบมาเพื่อแก้ปัญหาความล่าช้าในการแจ้งซ่อมภายในคณะ ICT โดยผู้ใช้สามารถสแกน QR Code ประจำจุดเพื่อแจ้งซ่อมผ่าน LINE Official Account (LIFF) ได้ทันที โดยไม่ต้องดาวน์โหลดแอปพลิเคชันเพิ่มเติม พร้อมมีระบบบริหารจัดการสำหรับผู้ดูแลระบบและวิเคราะห์สถิติ",
    contactTitle: "มาคุยกันได้เลย",
    contactDesc: "สนใจร่วมงาน แลกเปลี่ยนไอเดีย หรือมีคำถาม ติดต่อได้ทางนี้เลยนะคะ",
    lblName: "ชื่อของคุณ",
    lblEmail: "อีเมลติดต่อ",
    lblMsg: "ข้อความ",
    phName: "เช่น คุณสมชาย",
    phEmail: "name@company.com",
    phMsg: "อยากชวนคุยเรื่องอะไร เขียนไว้ได้เลยนะคะ...",
    contactBtn: "ส่งข้อความ",
    footerText: 'designed & built with <iconify-icon icon="mdi:heart" style="color: var(--color-marker-orange);"></iconify-icon> by Pimphakan Klinhom · 2026'
  },
  en: {
    navAbout: "About",
    navSkills: "Skills",
    navTimeline: "Experience",
    navProjects: "Projects",
    navContact: "Contact",
    heroName: "Pimpakarn<br />Klinhom",
    heroTagline: 'An intern specializing in <span class="marker-highlight">ui/ux design</span> and creative development, passionate about crafting simple, beautiful, and functional experiences.',
    heroBtnWork: "View All Projects",
    heroCaptionNote: '<iconify-icon icon="mdi:pencil"></iconify-icon> Always open to internship opportunities & learning new things!',
    aboutTitle: "About Me",
    aboutDesc: "I am a student passionate about UI/UX Design and Frontend Development, driven to create great user experiences through aesthetics and functionality. Currently seeking internship and growth opportunities.",
    factStudent: "Currently Studying",
    factIntern: "Internship Seeking",
    factCreative: "Design & Creative Lover",
    skillsTitle: "Skills & Tools",
    timelineTitle: "My Journey",
    timelineItemTitle: "Bachelor's Degree in Software Engineering (Year 3)",
    timelineItemDesc: "University of Phayao (Focused on User Experience Design (UX/UI) and Frontend Web Development.)",
    projectsTitle: "Selected Works",
    proj1Title: "Personal Web Portfolio",
    proj2Title: "ICT Toilet Maintenance Report System",
    proj1Desc: "My first internship project, initiated from day one — turning the knowledge, techniques, and web development practices shared by my mentor into a real project immediately, while integrating AI Agent technology to scale the workflow and solve technical challenges systematically.",
    proj2Desc: "An intelligent sanitation maintenance reporting and tracking system, designed to solve repair delays within the ICT faculty. Users simply scan the on-site QR code to report issues instantly via LINE Official Account (LIFF) — no app installation needed — complete with an admin management dashboard and usage analytics.",
    contactTitle: "Get In Touch",
    contactDesc: "Interested in collaborating, sharing ideas, or have a question? Feel free to reach out!",
    lblName: "Your Name",
    lblEmail: "Email Address",
    lblMsg: "Message",
    phName: "e.g. John Smith",
    phEmail: "name@company.com",
    phMsg: "What would you like to talk about? Feel free to write here...",
    contactBtn: "Send Message",
    footerText: 'designed & built with <iconify-icon icon="mdi:heart" style="color: var(--color-marker-orange);"></iconify-icon> by Pimphakan Klinhom · 2026'
  }
};

// ฟังก์ชันสลับภาษาทั้งหมดในเว็บ
function setLanguage(lang) {
  currentLang = lang;
  const data = translations[lang];
  if (!data) return;

  // อัปเดตภาษาของเอกสาร (a11y / screen reader)
  document.documentElement.lang = lang;

  // Projects
  if (document.getElementById("proj-1-desc")) document.getElementById("proj-1-desc").textContent = data.proj1Desc;
  if (document.getElementById("proj-2-desc")) document.getElementById("proj-2-desc").textContent = data.proj2Desc;
  if (document.getElementById("proj-1-title")) document.getElementById("proj-1-title").textContent = data.proj1Title;
  if (document.getElementById("proj-2-title")) document.getElementById("proj-2-title").textContent = data.proj2Title;

  // Navbar
  if (document.getElementById("nav-about")) document.getElementById("nav-about").textContent = data.navAbout;
  if (document.getElementById("nav-skills")) document.getElementById("nav-skills").textContent = data.navSkills;
  if (document.getElementById("nav-timeline")) document.getElementById("nav-timeline").textContent = data.navTimeline;
  if (document.getElementById("nav-projects")) document.getElementById("nav-projects").textContent = data.navProjects;
  if (document.getElementById("nav-contact")) document.getElementById("nav-contact").textContent = data.navContact;

  // Hero Section
  if (document.getElementById("hero-name")) document.getElementById("hero-name").innerHTML = data.heroName;
  if (document.getElementById("hero-tagline")) document.getElementById("hero-tagline").innerHTML = data.heroTagline;
  if (document.getElementById("hero-btn-work")) document.getElementById("hero-btn-work").textContent = data.heroBtnWork;
  if (document.getElementById("hero-caption-note")) document.getElementById("hero-caption-note").innerHTML = data.heroCaptionNote;

  // About Section
  if (document.getElementById("about-title")) document.getElementById("about-title").textContent = data.aboutTitle;
  if (document.getElementById("about-desc")) document.getElementById("about-desc").textContent = data.aboutDesc;
  if (document.getElementById("fact-student")) document.getElementById("fact-student").textContent = data.factStudent;
  if (document.getElementById("fact-intern")) document.getElementById("fact-intern").textContent = data.factIntern;
  if (document.getElementById("fact-creative")) document.getElementById("fact-creative").textContent = data.factCreative;

  // Sections
  if (document.getElementById("skills-title")) document.getElementById("skills-title").textContent = data.skillsTitle;
  if (document.getElementById("timeline-title")) document.getElementById("timeline-title").textContent = data.timelineTitle;
  if (document.getElementById("timeline-item-title")) document.getElementById("timeline-item-title").textContent = data.timelineItemTitle;
  if (document.getElementById("timeline-item-desc")) document.getElementById("timeline-item-desc").textContent = data.timelineItemDesc;
  if (document.getElementById("projects-title")) document.getElementById("projects-title").textContent = data.projectsTitle;
  if (document.getElementById("contact-title")) document.getElementById("contact-title").textContent = data.contactTitle;
  if (document.getElementById("contact-desc")) document.getElementById("contact-desc").textContent = data.contactDesc;

  // Contact Form
  if (document.getElementById("lbl-name")) document.getElementById("lbl-name").textContent = data.lblName;
  if (document.getElementById("lbl-email")) document.getElementById("lbl-email").textContent = data.lblEmail;
  if (document.getElementById("lbl-msg")) document.getElementById("lbl-msg").textContent = data.lblMsg;
  if (document.getElementById("contact-name")) document.getElementById("contact-name").placeholder = data.phName;
  if (document.getElementById("contact-email")) document.getElementById("contact-email").placeholder = data.phEmail;
  if (document.getElementById("contact-msg")) document.getElementById("contact-msg").placeholder = data.phMsg;
  if (document.getElementById("contact-btn")) document.getElementById("contact-btn").textContent = data.contactBtn;
  if (document.getElementById("footer-text")) document.getElementById("footer-text").innerHTML = data.footerText;

  // สลับสถานะปุ่ม Active (TH / EN)
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });
}

// โหลดข้อมูลและผูก Event เมื่อเปิดหน้าเว็บ
document.addEventListener("DOMContentLoaded", () => {
  // 1. สลับภาษาเมื่อกดปุ่ม
  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      setLanguage(selectedLang);
    });
  });

  // 2. รีเฟรช AOS เมื่อคลิกเมนู Navbar (Active State จัดการโดย ScrollSpy ใน main.js)
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      setTimeout(() => {
        if (typeof AOS !== 'undefined') {
          AOS.refresh();
        }
      }, 150);
    });
  });

  // 3. ฟอร์มติดต่อ: ส่งผ่าน Web3Forms API (AJAX ไม่รีโหลดหน้า)
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const btn = document.getElementById("contact-btn");
      const originalText = btn ? btn.innerHTML : "ส่งข้อความ";
      if (btn) {
        btn.innerHTML = "<span>กำลังส่ง...</span>";
        btn.disabled = true;
      }

      const payload = Object.fromEntries(new FormData(contactForm));

      // Honeypot: ถ้าบอทกรอกช่อง botcheck ให้แสดงว่าส่งสำเร็จ แต่ไม่ส่งจริง
      if (payload.botcheck) {
        contactForm.reset();
        if (btn) {
          btn.innerHTML = originalText;
          btn.disabled = false;
        }
        return;
      }

      if ((payload.access_key || "").includes("YOUR_WEB3FORMS_ACCESS_KEY")) {
        if (typeof showToast === 'function') {
          showToast('<iconify-icon icon="mdi:key"></iconify-icon> ฟอร์มยังไม่พร้อมใช้งาน — ใส่ access_key จาก web3forms.io ที่ index.html ก่อนนะ', "error");
        } else {
          alert("กรุณาใส่ Access Key จาก Web3Forms ใน index.html ก่อนนะคะ");
        }
        if (btn) {
          btn.innerHTML = originalText;
          btn.disabled = false;
        }
        return;
      }

      try {
        // Timeout 15 วินาที — กันเน็ตช้า/หลุดจนปุ่มค้าง
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), 15000);

        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(payload),
          signal: ctrl.signal
        });
        clearTimeout(timer);

        if (!res.ok) {
          throw new Error("HTTP " + res.status);
        }
        const data = await res.json();

        if (data.success) {
          if (typeof showToast === 'function') {
            showToast('<iconify-icon icon="mdi:check-circle"></iconify-icon> ส่งข้อความเรียบร้อยแล้วค่ะ ขอบคุณนะคะ!');
          } else {
            alert("ส่งข้อความเรียบร้อยแล้วค่ะ ขอบคุณนะคะ!");
          }
          contactForm.reset();
        } else {
          const msg = '<iconify-icon icon="mdi:alert"></iconify-icon> ' + (data.message || "ส่งไม่สำเร็จ กรุณาลองใหม่อีกครั้งค่ะ");
          if (typeof showToast === 'function') showToast(msg, "error");
          else alert(msg);
        }
      } catch (err) {
        const msg = '<iconify-icon icon="mdi:cloud-off-outline"></iconify-icon> ไม่สามารถเชื่อมต่อได้ กรุณาลองใหม่อีกครั้งค่ะ';
        if (typeof showToast === 'function') showToast(msg, "error");
        else alert(msg);
      } finally {
        if (btn) {
          btn.innerHTML = originalText;
          btn.disabled = false;
        }
      }
    });
  }

  // โหลดหน้าเว็บครั้งแรกด้วยภาษาไทย ('th')
  setLanguage('th');
});