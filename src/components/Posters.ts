import { postersData, Poster } from '../data/posters';
import { Icons } from '../utils/icons';

export function renderPosters(): string {
  return `
    <section id="posters" class="py-24 md:py-36 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto border-b border-white/10" aria-labelledby="posters-title">
      
      <!-- Section Header with Bold Graphic Divider -->
      <div class="flex flex-col gap-4 mb-16 md:mb-20 gsap-reveal">
        <div class="flex items-center justify-between border-b-2 border-white/20 pb-4">
          <div class="flex items-center gap-3">
            <span class="font-mono text-sm md:text-base font-bold text-paper/80">[ 02 // PRINT &amp; POSTER EXPERIMENTS ]</span>
            <span class="hidden sm:inline text-white/40 font-mono text-xs">• 30% DESIGN FOCUS</span>
          </div>
          <span class="font-mono text-xs text-vermilion uppercase font-bold">SWISS &amp; BRUTALIST VAULT</span>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div class="lg:col-span-8">
            <h2 id="posters-title" class="font-display font-bold uppercase text-section-title text-paper tracking-tighter">
              CONSTRUCTIVIST <br class="hidden sm:inline" />
              <span class="text-vermilion">PRINT &amp; TYPOGRAPHY</span>
            </h2>
          </div>
          <div class="lg:col-span-4">
            <p class="font-body text-sm md:text-base text-paper/70 leading-relaxed">
              Silkscreen, risograph, and exhibition posters investigating diagonal layout dynamics, optical waveforms, and mechanical grid alignment.
            </p>
          </div>
        </div>
      </div>

      <!-- Poster Gallery Grid -->
      <div id="posters-gallery-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        ${postersData
          .map((poster, index) => {
            if (poster.isPlaceholder) {
              return renderPlaceholderPosterCard(poster, index);
            }
            return renderStandardPosterCard(poster, index);
          })
          .join('')}
      </div>

      <!-- Bottom Gallery Instruction Note -->
      <div class="mt-12 p-6 rounded-2xl bg-[#141414] border border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-paper/60 gsap-reveal">
        <div class="flex items-center gap-3">
          <span class="text-vermilion font-bold">[!] NOTE:</span>
          <span>CLICK ANY POSTER TO LAUNCH HIGH-RES SPECIMEN VIEWER &amp; PRINT SPECS</span>
        </div>
        <div class="flex items-center gap-4 text-paper/40">
          <span>KEYBOARD: [ESC] CLOSE • [← / →] NAVIGATE</span>
        </div>
      </div>

    </section>
  `;
}

function renderStandardPosterCard(poster: Poster, index: number): string {
  return `
    <article 
      class="poster-card-item poster-frame rounded-2xl overflow-hidden cursor-pointer group flex flex-col justify-between"
      data-poster-index="${index}"
      role="button"
      tabindex="0"
      aria-label="View poster: ${poster.title}"
    >
      <!-- Image Container with Aspect Ratio 3:4 and Zoom Magnifier -->
      <div class="zoomable-image-container relative w-full aspect-[3/4] bg-[#0E0E0E] overflow-hidden group/img" data-zoomable-image="true">
        <picture>
          <source srcset="${poster.imageWebp}" type="image/webp" />
          <img 
            src="${poster.imageJpg}" 
            alt="${poster.title}" 
            width="896" 
            height="1200" 
            loading="lazy" 
            class="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-105 select-none"
          />
        </picture>

        <!-- Hover Overlay with Lens Effect -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <div class="flex items-center justify-between text-xs font-mono text-paper mb-2">
            <span class="text-vermilion font-bold">${poster.format}</span>
            <span>${poster.dimensions}</span>
          </div>
          <p class="font-body text-xs text-paper/80 line-clamp-2">
            ${poster.description}
          </p>
        </div>

        <!-- Magnifier Floating Badge on Hover -->
        <div class="magnifier-badge">
          ${Icons.zoomIn('w-4 h-4 text-vermilion')}
          <span>CLICK TO ZOOM</span>
        </div>

        <!-- Corner print registration marks -->
        <div class="crosshair top-3 left-3"></div>
        <div class="crosshair top-3 right-3"></div>
        <div class="crosshair bottom-3 left-3"></div>
        <div class="crosshair bottom-3 right-3"></div>

        <!-- Top Right Index Badge -->
        <div class="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 font-mono text-[10px] font-bold text-paper">
          ${poster.index}
        </div>
      </div>

      <!-- Card Footer / Details Strip -->
      <div class="p-4 bg-[#141414] border-t border-white/5 flex items-center justify-between font-mono text-xs">
        <div class="flex flex-col">
          <span class="font-heading font-bold text-sm text-paper group-hover:text-vermilion transition-colors">
            ${poster.title}
          </span>
          <span class="text-[10px] text-paper/50 mt-0.5">
            ${poster.paperStock}
          </span>
        </div>

        <div class="w-7 h-7 rounded-full bg-white/5 group-hover:bg-vermilion group-hover:text-white flex items-center justify-center text-paper/60 transition-colors">
          ${Icons.zoomIn('w-3.5 h-3.5')}
        </div>
      </div>
    </article>
  `;
}

function renderPlaceholderPosterCard(poster: Poster, index: number): string {
  return `
    <!-- TODO: replace with real poster image -->
    <article 
      class="poster-card-item poster-frame rounded-2xl overflow-hidden cursor-pointer group flex flex-col justify-between border-dashed border-white/20 hover:border-vermilion/60 bg-[#121212]"
      data-poster-index="${index}"
      role="button"
      tabindex="0"
      aria-label="View staged poster slot: ${poster.title}"
    >
      <div class="zoomable-image-container relative w-full aspect-[3/4] bg-[#0E0E0E] flex flex-col items-center justify-center p-6 text-center overflow-hidden group/img" data-zoomable-image="true">
        
        <!-- Registration lines background -->
        <div class="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
          <div class="w-full h-px bg-white"></div>
          <div class="h-full w-px bg-white absolute"></div>
          <div class="w-48 h-48 rounded-full border border-white absolute"></div>
        </div>

        <div class="relative z-10 flex flex-col items-center gap-3">
          <span class="font-mono text-4xl font-bold text-white/20 group-hover:text-vermilion transition-colors">
            ${poster.index}
          </span>
          <span class="font-mono text-xs font-bold text-vermilion uppercase tracking-wider">
            [STAGED POSTER FRAME]
          </span>
          <p class="font-mono text-[11px] text-paper/50 max-w-[24ch]">
            Drop poster file into public/assets/ and update src/data/posters.ts
          </p>
          <span class="mt-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-paper/70 group-hover:bg-white/10 transition-colors">
            HOVER STATE ACTIVE
          </span>
        </div>

        <div class="crosshair top-3 left-3"></div>
        <div class="crosshair top-3 right-3"></div>
        <div class="crosshair bottom-3 left-3"></div>
        <div class="crosshair bottom-3 right-3"></div>
      </div>

      <div class="p-4 bg-[#141414] border-t border-white/5 flex items-center justify-between font-mono text-xs">
        <div class="flex flex-col">
          <span class="font-heading font-bold text-sm text-paper/80 group-hover:text-vermilion transition-colors">
            ${poster.title}
          </span>
          <span class="text-[10px] text-vermilion mt-0.5">
            READY FOR ARTWORK DROP
          </span>
        </div>

        <div class="w-7 h-7 rounded-full bg-white/5 group-hover:bg-vermilion group-hover:text-white flex items-center justify-center text-paper/40 transition-colors">
          ${Icons.arrowUpRight('w-3.5 h-3.5')}
        </div>
      </div>
    </article>
  `;
}
