
export function renderAbout(): string {
  return `
    <section id="about" class="py-24 md:py-36 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto border-b border-white/10" aria-labelledby="about-title">
      
      <!-- Section Header with Bold Graphic Divider -->
      <div class="flex flex-col gap-4 mb-16 md:mb-20 gsap-reveal">
        <div class="flex items-center justify-between border-b-2 border-vermilion pb-4">
          <div class="flex items-center gap-3">
            <span class="font-mono text-sm md:text-base font-bold text-vermilion">[ 03 // DISCIPLINE &amp; TRAJECTORY ]</span>
            <span class="hidden sm:inline text-white/40 font-mono text-xs">• BIOGRAPHY &amp; CAPABILITIES</span>
          </div>
          <span class="font-mono text-xs text-paper/60 uppercase">ABOUT ERFAN</span>
        </div>

        <h2 id="about-title" class="font-display font-bold uppercase text-section-title text-paper mt-2 tracking-tighter">
          SELF-DIRECTED <br class="hidden sm:inline" />
          <span class="text-vermilion">DEVELOPMENT &amp; PRINT</span>
        </h2>
      </div>

      <!-- 12-Column Asymmetric About Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        
        <!-- Left 7 Columns: Erfan's Voice Bio & Philosophy -->
        <div class="lg:col-span-7 flex flex-col gap-6 gsap-reveal">
          <div class="flex items-center gap-2 font-mono text-xs text-vermilion font-bold">
            <span>&gt; THE BRIEF</span>
          </div>

          <p class="font-body text-lg md:text-xl text-paper leading-relaxed">
            I am a self-directed full-stack developer with broad scripting interests, moving fluidly between browser internals, physical optical protocols, and graphic design.
          </p>

          <p class="font-body text-base text-paper/75 leading-relaxed">
            My development practice is rooted in low-overhead systems and creative problem solving: architecting browser extensions that spoof DOM geometry to evade detection traps, designing camera-to-screen air-gap data transceivers with fountain codes, and building ultra-responsive web applications with zero superfluous dependencies.
          </p>

          <p class="font-body text-base text-paper/75 leading-relaxed">
            Alongside engineering, I design exhibition posters and printed matter. The discipline of the 12-column Swiss grid, physical ink registration, and typographic scale directly informs how I architect software interfaces: structured, confident, and free of ornamental filler.
          </p>

          <!-- Core Competencies Matrix -->
          <div class="mt-4 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
            <div class="flex flex-col gap-2">
              <span class="text-vermilion font-bold uppercase tracking-wider">FULL-STACK &amp; RUNTIME</span>
              <ul class="flex flex-col gap-1.5 text-paper/70">
                <li>• TypeScript / Modern JavaScript</li>
                <li>• Python 3.12 / Asyncio &amp; aiogram</li>
                <li>• Multimodal AI (Gemini Vision)</li>
                <li>• Manifest V3 WebExtensions</li>
                <li>• DOM Virtualization &amp; Heuristics</li>
                <li>• Canvas API &amp; WebRTC Media</li>
              </ul>
            </div>

            <div class="flex flex-col gap-2">
              <span class="text-white/50 font-bold uppercase tracking-wider">SYSTEMS, PRINT &amp; AUDIO</span>
              <ul class="flex flex-col gap-1.5 text-paper/70">
                <li>• Swiss International Typography</li>
                <li>• Zero-Auth Audio Discovery APIs</li>
                <li>• Fountain Codes &amp; Packet Math</li>
                <li>• Docker &amp; Container Ephemerality</li>
                <li>• Git &amp; Automated CI Pipelines</li>
              </ul>
            </div>
          </div>

        </div>

        <!-- Right 5 Columns: Technical Terminal / Machine Specimen Card -->
        <div class="lg:col-span-5 flex flex-col gap-6 gsap-reveal">
          <div class="double-bezel">
            <div class="double-bezel-inner p-6 md:p-8 flex flex-col gap-5 font-mono text-xs">
              
              <div class="flex items-center justify-between border-b border-white/10 pb-3">
                <div class="flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-vermilion"></span>
                  <span class="font-bold text-paper text-[11px] tracking-wider uppercase">ENV_CONFIG // SPECS</span>
                </div>
                <span class="text-white/40 text-[10px]">HOST: ERFAN-DEV</span>
              </div>

              <div class="flex flex-col gap-3 text-paper/80">
                <div class="flex justify-between border-b border-white/5 pb-2">
                  <span class="text-white/40">PRIMARY BASE:</span>
                  <span class="text-paper font-bold">TypeScript / Vite</span>
                </div>
                <div class="flex justify-between border-b border-white/5 pb-2">
                  <span class="text-white/40">MOTION KERNEL:</span>
                  <span class="text-paper font-bold">GSAP + Lenis Smooth</span>
                </div>
                <div class="flex justify-between border-b border-white/5 pb-2">
                  <span class="text-white/40">STYLE FRAMEWORK:</span>
                  <span class="text-paper font-bold">Tailwind v4 / Custom CSS</span>
                </div>
                <div class="flex justify-between border-b border-white/5 pb-2">
                  <span class="text-white/40">VERSION CONTROL:</span>
                  <span class="text-paper font-bold">Git / GitHub CI</span>
                </div>
                <div class="flex justify-between border-b border-white/5 pb-2">
                  <span class="text-white/40">TARGET PLATFORMS:</span>
                  <span class="text-paper font-bold">Chromium / Linux / Web</span>
                </div>
              </div>

              <!-- Terminal Live Output Snippet -->
              <div class="bg-black/80 rounded-lg p-3 text-[11px] leading-relaxed text-emerald-400 border border-white/5">
                <span class="text-white/30">$</span> erfan --status<br />
                <span class="text-paper">&gt; Full-stack developer: ready</span><br />
                <span class="text-paper">&gt; Graphic posters: cataloged</span><br />
                <span class="text-vermilion">&gt; Availability: open to high-impact roles</span>
              </div>

              <div class="pt-2 flex items-center justify-between text-[10px] text-paper/40">
                <span>RESOURCES: MINIMAL DEPENDENCY</span>
                <span class="text-vermilion font-bold">UPTIME: 99.9%</span>
              </div>

            </div>
          </div>

          <!-- Quick Quote / Ethos -->
          <div class="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
            <span class="text-vermilion text-2xl font-display font-bold select-none leading-none">“</span>
            <p class="font-body text-xs md:text-sm text-paper/80 leading-relaxed">
              Great software, like great print design, requires knowing what to cut. No superfluous telemetry, no unneeded dependencies, no bloated abstractions.
            </p>
          </div>

        </div>

      </div>

    </section>
  `;
}
