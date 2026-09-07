import { Icons } from '../utils/icons';

export function renderHero(): string {
  return `
    <section id="hero" class="relative min-h-[100dvh] flex flex-col justify-between pt-24 md:pt-32 pb-12 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto border-b border-white/10 overflow-hidden" aria-labelledby="hero-title">
      
      <!-- Top Technical Signal / Meta Strip -->
      <div class="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 text-xs font-mono text-paper/60 uppercase tracking-wider gsap-reveal">
        <div class="flex items-center gap-3">
          <span class="text-vermilion font-bold">[SYS_2026.09]</span>
          <span class="hidden sm:inline text-white/30">•</span>
          <span>FULL-STACK ARCHITECTURE &amp; VISUAL SYNTAX</span>
        </div>
        <div class="flex items-center gap-6">
          <span class="hidden md:inline">INDEX: 01 // 04</span>
          <span class="text-white/30 hidden md:inline">•</span>
          <span class="text-paper/80 font-medium">GITHUB: @ERFANVOJ</span>
        </div>
      </div>

      <!-- Monumental Typography Core -->
      <div class="my-auto py-10 md:py-16 flex flex-col gap-8 max-w-5xl">
        
        <h1 id="hero-title" class="font-display font-bold uppercase text-hero text-paper tracking-tighter">
          <span class="block hover:text-vermilion transition-colors duration-300">FULL-STACK</span>
          <span class="block text-white/90">DEVELOPER</span>
          <span class="block text-vermilion flex items-baseline gap-4">
            <span class="text-3xl md:text-5xl lg:text-7xl font-mono font-normal text-white/40 select-none">/&gt;</span>
            <span>&amp; DRAFTSMAN</span>
          </span>
        </h1>

        <!-- Controlled Subtext (<20 words) -->
        <p class="font-body text-base md:text-xl text-paper/75 max-w-[54ch] leading-relaxed gsap-reveal">
          Engineering stealth browser engines, air-gap optical transceivers, and typographic print systems with structural rigor and zero bloat.
        </p>

        <!-- CTAs with Button-in-Button Architecture -->
        <div class="flex flex-wrap items-center gap-4 pt-2 gsap-reveal">
          <a href="#projects" class="btn-pill bg-vermilion hover:bg-vermilion-hover text-white shadow-xl shadow-vermilion/25 group">
            <span>EXPLORE SELECTED WORK</span>
            <span class="icon-bubble bg-black/20 text-white">
              ${Icons.arrowDown('w-3.5 h-3.5')}
            </span>
          </a>

          <a href="#posters" class="btn-pill bg-white/5 hover:bg-white/10 text-paper border border-white/15 group">
            <span>VIEW POSTER VAULT</span>
            <span class="icon-bubble bg-white/10 text-paper">
              ${Icons.arrowRight('w-3.5 h-3.5')}
            </span>
          </a>
        </div>

      </div>

      <!-- Bottom Ticker / Swiss Print Registration Bar -->
      <div class="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-xs font-mono text-paper/40 gap-4">
        <div class="flex items-center gap-6">
          <span>LAT: 47.3769° N // LON: 8.5417° E</span>
          <span class="hidden sm:inline">TYPEFACES: CLASH DISPLAY + SATOSHI + JETBRAINS MONO</span>
        </div>
        <div class="flex items-center gap-4 text-vermilion font-bold">
          <span>SCROLL FOR TRANSMISSION</span>
          <span>↓</span>
        </div>
      </div>

    </section>
  `;
}
