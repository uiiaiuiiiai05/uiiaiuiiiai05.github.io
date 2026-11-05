// ==============================================
// main.js — Superr Notebook Interactions
// ==============================================

document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initAOS();
  initScrollSpy();
  initMobileMenu();
  initClickSparkles();
  initTheme();
  initTypingCaption();
  initFloatingButtons();
  initBrandPlay();
});

/* ── 7. Dark Mode (จำค่าไว้ใน localStorage) ── */
function initTheme() {
  const btn = document.getElementById('theme-toggle');

  const saved = localStorage.getItem('superr-theme');
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  }

  const syncIcon = () => {
    const isDark = document.documentElement.classList.contains('dark');
    if (btn) btn.innerHTML = isDark
      ? '<iconify-icon icon="mdi:weather-sunny"></iconify-icon>'
      : '<iconify-icon icon="mdi:weather-night"></iconify-icon>';
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', isDark ? '#1c1917' : '#fdfbf9');
  };
  syncIcon();

  if (btn) {
    btn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('superr-theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
      syncIcon();
    });
  }
}

/* ── 8. Typing Effect (คำโน้ตลายมือใน hero) ── */
function initTypingCaption() {
  const el = document.getElementById('hero-script-note');
  if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const text = el.textContent;
  el.textContent = '';
  el.classList.add('typing-caret');

  let i = 0;
  (function tick() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i++);
      setTimeout(tick, 55);
    } else {
      el.classList.remove('typing-caret');
    }
  })();
}

/* ── 9. Floating Buttons (เลื่อนขึ้นบน + คัดลอกลิงก์เว็บ) ── */
function initFloatingButtons() {
  const topBtn = document.getElementById('scroll-top');
  if (topBtn) {
    window.addEventListener('scroll', () => {
      topBtn.classList.toggle('visible', window.scrollY > 600);
    });
    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const shareBtn = document.getElementById('share-web');
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        showToast('<iconify-icon icon="mdi:link-variant"></iconify-icon> คัดลอกลิงก์เว็บแล้ว! ส่งต่อให้ใครก็ได้เลย');
      } catch {
        showToast('ไม่สามารถคัดลอกลิงก์ได้', 'error');
      }
    });
  }
}

/* ── 6. Mobile Menu (แค่เปิด/ปิดเมนูเดิมด้วยสไตล์เดิม 100%) ── */
function initMobileMenu() {
  const navbar = document.querySelector('.navbar');
  const burger = document.getElementById('nav-burger');
  if (!navbar || !burger) return;

  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    navbar.classList.toggle('menu-open');
    burger.setAttribute('aria-expanded', navbar.classList.contains('menu-open'));
  });

  document.addEventListener('click', () => {
    navbar.classList.remove('menu-open');
    burger.setAttribute('aria-expanded', 'false');
  });
}

/* ── 1. Page Loader ── */
function initLoader() {
  const loader = document.querySelector('.page-loader');
  if (!loader) return;

  const hide = () => {
    loader.classList.add('hidden');
    setTimeout(() => { loader.style.display = 'none'; }, 500);
  };

  if (document.readyState === 'complete') {
    setTimeout(hide, 300);
  } else {
    window.addEventListener('load', () => setTimeout(hide, 300));
  }
}

/* ── 2. Click Confetti / Paper Flakes ── */
function initClickSparkles() {
  const colors = ['#ff6f1e', '#171717', '#3b82f6', '#ff66cf', '#22c55e'];

  window.addEventListener('click', (e) => {
    if (['INPUT', 'TEXTAREA', 'BUTTON', 'A', 'LABEL', 'SELECT'].includes(e.target.tagName)) return;

    const count = 7;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'click-particle';

      const angle = (Math.PI * 2 * i) / count;
      const dist = 25 + Math.random() * 35;
      const tx = Math.cos(angle) * dist;
      const ty = Math.sin(angle) * dist;
      const color = colors[Math.floor(Math.random() * colors.length)];

      p.style.left = `${e.clientX}px`;
      p.style.top = `${e.clientY}px`;
      p.style.backgroundColor = color;
      p.style.setProperty('--tx', `${tx}px`);
      p.style.setProperty('--ty', `${ty}px`);

      document.body.appendChild(p);
      setTimeout(() => p.remove(), 650);
    }
  });
}

/* ── 3. AOS Animation ── */
function initAOS() {
  if (typeof AOS === 'undefined') return;
  AOS.init({
    duration: 650,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50,
  });
}

/* ── 4. ScrollSpy ── */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(s => observer.observe(s));
}

/* ── 5. Contact Form — บริหารโดย js/language.js (Web3Forms AJAX) ── */

/* ── 10. Brand Mark Playfulness (hover wiggle + click spin/confetti + idle wave) ── */
function initBrandPlay() {
  const brand = document.querySelector('.nav-brand-mark');
  const hand = brand ? brand.querySelector('.hand-icon') : null;
  if (!brand || !hand) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  brand.addEventListener('click', () => {
    hand.classList.remove('brand-spinning');
    void hand.offsetWidth;
    hand.classList.add('brand-spinning');

    const rect = hand.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const colors = ['#ff6f1e', '#171717', '#3b82f6', '#ff66cf', '#22c55e'];
    for (let i = 0; i < 10; i++) {
      const p = document.createElement('div');
      p.className = 'click-particle';
      const angle = (Math.PI * 2 * i) / 10;
      const dist = 20 + Math.random() * 20;
      p.style.left = `${cx}px`;
      p.style.top = `${cy}px`;
      p.style.backgroundColor = colors[i % colors.length];
      p.style.setProperty('--tx', `${Math.cos(angle) * dist}px`);
      p.style.setProperty('--ty', `${Math.sin(angle) * dist}px`);
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 650);
    }
  });

  hand.addEventListener('animationend', () => {
    hand.classList.remove('brand-spinning', 'brand-idle');
  });

  const idleWiggle = () => {
    hand.classList.remove('brand-idle');
    void hand.offsetWidth;
    hand.classList.add('brand-idle');
    setTimeout(idleWiggle, 6000 + Math.random() * 2000);
  };
  setTimeout(idleWiggle, 4000);
}

function showToast(msg, type = 'success') {
  const toast = document.createElement('div');
  toast.innerHTML = msg;
  toast.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    background: ${type === 'error' ? '#ef4444' : '#171717'};
    color: #fdfbf9;
    border: 1.5px solid #171717;
    padding: 12px 20px;
    border-radius: 20px;
    font-size: 0.95rem;
    font-weight: 500;
    z-index: 10000;
    box-shadow: 2px 4px 0px rgba(0,0,0,0.25);
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}
