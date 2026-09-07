import { Icons } from '../utils/icons';

export function renderFooter(): string {
  return `
    <footer class="py-16 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto flex flex-col gap-12 text-xs font-mono text-paper/60" aria-label="Site Colophon and Footer">
      
      <!-- Top Colophon Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-white/10 pb-12">
        
        <div>
          <span class="text-vermilion font-bold uppercase block mb-2">TYPOGRAPHY COLOPHON</span>
          <p class="leading-relaxed text-paper/70">
            Headlines set in <span class="text-paper font-bold">Clash Display</span> &amp; <span class="text-paper font-bold">Cabinet Grotesk</span> (Fontshare). Body in <span class="text-paper font-bold">Satoshi</span>. Technical notation in <span class="text-paper font-bold">JetBrains Mono</span>.
          </p>
        </div>

        <div>
          <span class="text-vermilion font-bold uppercase block mb-2">CORE RUNTIME &amp; TOOLS</span>
          <p class="leading-relaxed text-paper/70">
            Engineered with <span class="text-paper font-bold">Vite</span>, <span class="text-paper font-bold">TypeScript</span>, <span class="text-paper font-bold">Tailwind v4</span>, <span class="text-paper font-bold">GSAP</span> ScrollTrigger, and <span class="text-paper font-bold">Lenis</span> smooth scroll.
          </p>
        </div>

        <div>
          <span class="text-vermilion font-bold uppercase block mb-2">TIME &amp; LOCATION</span>
          <div class="flex flex-col gap-1 text-paper/80">
            <div>LOCAL CLOCK: <span id="footer-live-time" class="font-bold text-paper font-mono">--:--:--</span></div>
            <div>STATUS: <span class="text-emerald-400 font-bold">ACTIVE DEPLOYMENT</span></div>
          </div>
        </div>

        <div class="flex flex-col justify-between items-start md:items-end">
          <a href="#hero" class="btn-pill bg-white/5 hover:bg-vermilion hover:text-white text-paper border border-white/10 transition-colors" aria-label="Scroll back to top of page">
            <span>RETURN TO TOP</span>
            <span class="icon-bubble bg-white/10">
              ${Icons.arrowUpRight('w-3.5 h-3.5 -rotate-45')}
            </span>
          </a>
          <span class="text-[11px] text-paper/40 mt-4 md:mt-0">© 2026 ERFAN // ALL RIGHTS RESERVED</span>
        </div>

      </div>

      <!-- Monumental Wordmark Footer Banner -->
      <div class="pt-4 flex items-baseline justify-between overflow-hidden select-none">
        <span class="font-display font-bold uppercase text-[12vw] leading-none tracking-tighter text-white/[0.04] hover:text-vermilion/20 transition-colors duration-500">
          ERFAN<span class="text-vermilion">.</span>
        </span>
        <span class="font-mono text-xs text-white/20 hidden sm:inline">
          AWWWARDS SOTD SPEC // POSTER ARCHITECTURE
        </span>
      </div>

    </footer>
  `;
}

export function initFooterClock(): void {
  const clockEl = document.getElementById('footer-live-time');
  if (!clockEl) return;

  function updateClock() {
    const now = new Date();
    if (clockEl) {
      clockEl.textContent = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
      });
    }
  }

  updateClock();
  setInterval(updateClock, 1000);
}
