export function renderPhilosophy(): string {
  return `
    <section class="border-b border-white/10 bg-[#111111]/60 py-12 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto" aria-label="Technical Ethos">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div class="flex flex-col gap-2 border-l-2 border-vermilion pl-4 gsap-reveal">
          <span class="font-mono text-xs text-vermilion font-bold">01 // HEURISTIC SPOOFING</span>
          <h2 class="font-heading font-bold text-lg text-paper tracking-tight">DOM Geometry Virtualization</h2>
          <p class="font-body text-xs text-paper/60 leading-relaxed">
            Preserving computed dimensions and synthesizing ad telemetry so anti-adblock detection scripts pass silently.
          </p>
        </div>

        <div class="flex flex-col gap-2 border-l-2 border-white/20 hover:border-vermilion transition-colors pl-4 gsap-reveal">
          <span class="font-mono text-xs text-white/50 font-bold">02 // OPTICAL AIR-GAPS</span>
          <h2 class="font-heading font-bold text-lg text-paper tracking-tight">Screen-to-Camera Data Links</h2>
          <p class="font-body text-xs text-paper/60 leading-relaxed">
            Streaming binary files via rateless fountain codes and chromatic matrices across air-gapped physical barriers.
          </p>
        </div>

        <div class="flex flex-col gap-2 border-l-2 border-white/20 hover:border-vermilion transition-colors pl-4 gsap-reveal">
          <span class="font-mono text-xs text-white/50 font-bold">03 // POSTER DRAFTSMANSHIP</span>
          <h2 class="font-heading font-bold text-lg text-paper tracking-tight">Swiss Constructivist Syntax</h2>
          <p class="font-body text-xs text-paper/60 leading-relaxed">
            Rigid 12-column grid geometry, bold visual weight distribution, and tactile silkscreen print sensibilities.
          </p>
        </div>

        <div class="flex flex-col gap-2 border-l-2 border-white/20 hover:border-vermilion transition-colors pl-4 gsap-reveal">
          <span class="font-mono text-xs text-white/50 font-bold">04 // ZERO-BLOAT CRAFT</span>
          <h2 class="font-heading font-bold text-lg text-paper tracking-tight">Sub-Millisecond Execution</h2>
          <p class="font-body text-xs text-paper/60 leading-relaxed">
            Hand-tuned TypeScript engines, GPU-accelerated transforms, and pure mathematical layout precision.
          </p>
        </div>

      </div>
    </section>
  `;
}
