import { Icons } from '../utils/icons';

export function renderNavbar(): string {
  return `
    <header class="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:pt-6 pointer-events-none flex justify-center">
      <nav class="pointer-events-auto bg-[#141414]/85 backdrop-blur-xl border border-white/10 rounded-full px-4 md:px-6 py-2.5 flex items-center justify-between gap-4 md:gap-8 shadow-2xl shadow-black/60 transition-all duration-300 w-full max-w-5xl" aria-label="Main Navigation">
        
        <!-- Brand / Identity -->
        <a href="#hero" class="flex items-center gap-2.5 text-paper hover:text-vermilion transition-colors group focus-visible:rounded-full">
          <span class="w-2.5 h-2.5 rounded-full bg-vermilion animate-pulse" aria-hidden="true"></span>
          <span class="font-heading font-bold text-sm tracking-tight text-paper group-hover:text-vermilion transition-colors">
            ERFAN <span class="text-white/40 font-mono text-xs font-normal">/ DEV+DES</span>
          </span>
        </a>

        <!-- Desktop Nav Links -->
        <div class="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-mono uppercase tracking-wider text-paper/70">
          <a href="#projects" class="hover:text-vermilion transition-colors focus-visible:rounded">
            <span class="text-vermilion mr-1">01</span>Work
          </a>
          <a href="#posters" class="hover:text-vermilion transition-colors focus-visible:rounded">
            <span class="text-vermilion mr-1">02</span>Posters
          </a>
          <a href="#about" class="hover:text-vermilion transition-colors focus-visible:rounded">
            <span class="text-vermilion mr-1">03</span>About
          </a>
          <a href="#contact" class="hover:text-vermilion transition-colors focus-visible:rounded">
            <span class="text-vermilion mr-1">04</span>Contact
          </a>
        </div>

        <!-- Right Side: CTA -->
        <div class="flex items-center gap-3">
          <a href="#contact" class="hidden sm:inline-flex items-center gap-2 bg-vermilion hover:bg-vermilion-hover text-white text-xs font-heading font-bold px-3.5 py-1.5 rounded-full transition-all duration-300 shadow-md shadow-vermilion/20 hover:scale-105 active:scale-95">
            <span>GET IN TOUCH</span>
            <span class="w-4 h-4 rounded-full bg-black/20 flex items-center justify-center">${Icons.arrowUpRight('w-2.5 h-2.5')}</span>
          </a>

          <!-- Mobile Hamburger Toggle -->
          <button id="mobile-menu-toggle" type="button" class="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 text-paper hover:text-vermilion transition-colors focus-visible:rounded-full" aria-label="Toggle navigation menu" aria-expanded="false">
            <span class="w-5 h-0.5 bg-current transition-transform duration-300 origin-center" id="nav-line-1"></span>
            <span class="w-5 h-0.5 bg-current transition-transform duration-300 origin-center" id="nav-line-2"></span>
          </button>
        </div>
      </nav>

      <!-- Mobile Full-Screen Overlay Navigation -->
      <div id="mobile-menu" class="fixed inset-0 bg-[#0E0E0E]/95 backdrop-blur-2xl z-40 flex flex-col justify-between p-8 pointer-events-auto transition-all duration-500 opacity-0 -translate-y-full md:hidden" aria-hidden="true">
        <div class="flex justify-between items-center pt-2">
          <span class="font-heading font-bold text-lg text-paper">ERFAN <span class="text-vermilion font-mono text-xs">/ NAVIGATION</span></span>
          <button id="mobile-menu-close" type="button" class="p-2 text-paper hover:text-vermilion" aria-label="Close menu">
            ${Icons.close('w-6 h-6')}
          </button>
        </div>

        <div class="flex flex-col gap-6 my-auto font-display text-4xl text-paper">
          <a href="#projects" class="mobile-nav-link hover:text-vermilion transition-colors flex items-center justify-between border-b border-white/10 pb-4">
            <span>01 // SELECTED WORK</span>
            <span class="text-sm font-mono text-vermilion">${Icons.arrowRight('w-5 h-5')}</span>
          </a>
          <a href="#posters" class="mobile-nav-link hover:text-vermilion transition-colors flex items-center justify-between border-b border-white/10 pb-4">
            <span>02 // POSTER VAULT</span>
            <span class="text-sm font-mono text-vermilion">${Icons.arrowRight('w-5 h-5')}</span>
          </a>
          <a href="#about" class="mobile-nav-link hover:text-vermilion transition-colors flex items-center justify-between border-b border-white/10 pb-4">
            <span>03 // ABOUT & TECH</span>
            <span class="text-sm font-mono text-vermilion">${Icons.arrowRight('w-5 h-5')}</span>
          </a>
          <a href="#contact" class="mobile-nav-link hover:text-vermilion transition-colors flex items-center justify-between border-b border-white/10 pb-4">
            <span>04 // TRANSMISSION</span>
            <span class="text-sm font-mono text-vermilion">${Icons.arrowRight('w-5 h-5')}</span>
          </a>
        </div>

        <div class="pt-6 border-t border-white/10 flex flex-col gap-3 font-mono text-xs text-paper/60">
          <div class="flex justify-between items-center">
            <span>ERFANCHESS450@GMAIL.COM</span>
            <span class="text-vermilion">@PEACEFUL_GOD</span>
          </div>
          <p class="text-[10px] text-paper/40">ZÜRICH / IRAN / GLOBAL — FULL-STACK ARCHITECTURE</p>
        </div>
      </div>
    </header>
  `;
}

export function initNavbarInteractions(): void {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const closeBtn = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLine1 = document.getElementById('nav-line-1');
  const navLine2 = document.getElementById('nav-line-2');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !mobileMenu) return;

  let isOpen = false;

  const openMenu = () => {
    isOpen = true;
    mobileMenu.classList.remove('opacity-0', '-translate-y-full');
    mobileMenu.classList.add('opacity-100', 'translate-y-0');
    mobileMenu.setAttribute('aria-hidden', 'false');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';

    if (navLine1 && navLine2) {
      navLine1.style.transform = 'translateY(3px) rotate(45deg)';
      navLine2.style.transform = 'translateY(-3px) rotate(-45deg)';
    }
  };

  const closeMenu = () => {
    isOpen = false;
    mobileMenu.classList.add('opacity-0', '-translate-y-full');
    mobileMenu.classList.remove('opacity-100', 'translate-y-0');
    mobileMenu.setAttribute('aria-hidden', 'true');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';

    if (navLine1 && navLine2) {
      navLine1.style.transform = '';
      navLine2.style.transform = '';
    }
  };

  toggleBtn.addEventListener('click', () => {
    if (isOpen) closeMenu();
    else openMenu();
  });

  closeBtn?.addEventListener('click', closeMenu);

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}
