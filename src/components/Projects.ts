import { projectsData } from '../data/projects';
import { Icons } from '../utils/icons';
import { renderGhostblockDemo, renderRgbDemo } from './ProjectVisualizers';

export function renderProjects(): string {
  return `
    <section id="projects" class="py-24 md:py-36 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto border-b border-white/10" aria-labelledby="projects-title">
      
      <!-- Section Header with Bold Graphic Divider -->
      <div class="flex flex-col gap-4 mb-16 md:mb-24 gsap-reveal">
        <div class="flex items-center justify-between border-b-2 border-vermilion pb-4">
          <div class="flex items-center gap-3">
            <span class="font-mono text-sm md:text-base font-bold text-vermilion">[ 01 // SELECTED CODEWORKS ]</span>
            <span class="hidden sm:inline text-white/40 font-mono text-xs">• 70% DEV FOCUS</span>
          </div>
          <span class="font-mono text-xs text-paper/60 uppercase">SYSTEM ARCHITECTURE</span>
        </div>

        <h2 id="projects-title" class="font-display font-bold uppercase text-section-title text-paper mt-2 tracking-tighter">
          HEURISTIC ENGINES, <br class="hidden sm:inline" />
          <span class="text-vermilion">OPTICAL PROTOCOLS &amp; VISION AI</span>
        </h2>
        <p class="font-body text-base md:text-lg text-paper/70 max-w-[65ch]">
          Production systems engineered across Chromium Manifest V3 internals, physical-layer optical transceivers, and multimodal AI sonic curation.
        </p>
      </div>

      <!-- Project Cards List -->
      <div class="flex flex-col gap-20 md:gap-32">
        ${projectsData
          .map((project) => {
            if (project.isPlaceholder) {
              return renderPlaceholderProjectCard(project);
            }
            return renderStandardProjectCard(project);
          })
          .join('')}
      </div>

    </section>
  `;
}

function renderStandardProjectCard(project: typeof projectsData[0]): string {
  const isGhostblock = project.id === 'ghostblock';
  const isRgb = project.id === 'rgb-file-transfer';
  const isHearThisPic = project.id === 'hear-this-pic';

  return `
    <article class="project-card double-bezel group" id="card-${project.id}">
      <div class="double-bezel-inner p-6 md:p-10 lg:p-12">
        
        <!-- Top Meta Row -->
        <div class="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8 font-mono text-xs">
          <div class="flex items-center gap-3">
            <span class="text-2xl md:text-3xl font-bold font-display text-vermilion">${project.index}</span>
            <span class="text-white/30">•</span>
            <span class="text-paper/90 font-bold uppercase tracking-wider">${project.category}</span>
          </div>
          <div class="flex items-center gap-4 text-paper/60">
            <span>TIMELINE: ${project.year}</span>
            <span class="text-white/30">•</span>
            ${
              isHearThisPic
                ? `
              <a href="https://t.me/HearThisPicBot" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-vermilion hover:underline transition-colors focus-visible:rounded" aria-label="Open Telegram bot t.me/HearThisPicBot">
                <span>t.me/HearThisPicBot</span>
                ${Icons.arrowUpRight('w-3 h-3')}
              </a>
            `
                : `
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-paper hover:text-vermilion transition-colors focus-visible:rounded" aria-label="View source for ${project.title} on GitHub">
                <span>GITHUB</span>
                ${Icons.arrowUpRight('w-3 h-3')}
              </a>
            `
            }
          </div>
        </div>

        <!-- Content Grid: 12-column layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          <!-- Left 7 Columns: Text & Deep Architectural Breakdown -->
          <div class="lg:col-span-7 flex flex-col gap-6">
            <div class="flex items-start justify-between gap-4">
              <div>
                <h3 class="font-display font-bold uppercase text-project-title text-paper group-hover:text-vermilion transition-colors duration-300">
                  ${project.title}
                </h3>
                <p class="font-heading font-medium text-sm md:text-base text-vermilion mt-1">
                  ${project.tagline}
                </p>
              </div>
              ${
                project.logoWebp
                  ? `
                <div class="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <picture>
                    <source srcset="${project.logoWebp}" type="image/webp" />
                    <img src="${project.logoPng || project.logoWebp}" alt="${project.title} Logo" class="w-5 h-5 rounded-full object-cover" width="20" height="20" />
                  </picture>
                  <span class="font-mono text-[11px] text-white/70">TELEGRAM BOT</span>
                </div>
              `
                  : ''
              }
            </div>

            <p class="font-body text-sm md:text-base text-paper/80 leading-relaxed">
              ${project.overview}
            </p>

            <!-- Technical Highlights -->
            <div class="bg-black/40 rounded-xl p-5 border border-white/5 flex flex-col gap-3">
              <span class="font-mono text-[11px] font-bold text-white/50 uppercase tracking-wider">
                CORE TECHNICAL ARCHITECTURE:
              </span>
              <ul class="flex flex-col gap-2 text-xs font-mono text-paper/75">
                ${project.technicalHighlights
                  .map(
                    (highlight) => `
                  <li class="flex items-start gap-2.5">
                    <span class="text-vermilion mt-0.5">▪</span>
                    <span>${highlight}</span>
                  </li>
                `
                  )
                  .join('')}
              </ul>
            </div>

            <!-- Tech Stack Tags -->
            <div class="flex flex-wrap items-center gap-2 pt-2">
              ${project.techStack
                .map(
                  (tag) => `
                <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-paper/80">
                  ${tag}
                </span>
              `
                )
                .join('')}
            </div>

            <!-- Action Links -->
            <div class="flex flex-wrap items-center gap-4 pt-4">
              ${
                isHearThisPic
                  ? `
                <a href="https://t.me/HearThisPicBot" target="_blank" rel="noopener noreferrer" class="btn-pill bg-vermilion hover:bg-vermilion-hover text-white group/btn shadow-lg shadow-vermilion/25">
                  <span>LAUNCH TELEGRAM BOT</span>
                  <span class="icon-bubble bg-black/20 text-white">
                    ${Icons.telegram('w-3.5 h-3.5')}
                  </span>
                </a>
                <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-pill bg-white/5 hover:bg-white/10 text-paper border border-white/10 group/btn">
                  <span>VIEW REPOSITORY</span>
                  <span class="icon-bubble bg-white/10 text-paper">
                    ${Icons.github('w-3.5 h-3.5')}
                  </span>
                </a>
              `
                  : isRgb
                  ? `
                <a href="https://rgb-file-transfer.netlify.app" target="_blank" rel="noopener noreferrer" class="btn-pill bg-vermilion hover:bg-vermilion-hover text-white group/btn shadow-lg shadow-vermilion/25">
                  <span>LAUNCH LIVE APP</span>
                  <span class="icon-bubble bg-black/20 text-white">
                    ${Icons.arrowUpRight('w-3.5 h-3.5')}
                  </span>
                </a>
                <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-pill bg-white/5 hover:bg-white/10 text-paper border border-white/10 group/btn">
                  <span>VIEW REPOSITORY</span>
                  <span class="icon-bubble bg-white/10 text-paper">
                    ${Icons.github('w-3.5 h-3.5')}
                  </span>
                </a>
                <a href="#demo-rgb-airgap" class="btn-pill bg-white/5 hover:bg-white/10 text-paper border border-white/10 group/demo">
                  <span>IN-PAGE LAB</span>
                  <span class="icon-bubble bg-white/10 text-vermilion">
                    ${Icons.arrowDown('w-3.5 h-3.5')}
                  </span>
                </a>
              `
                  : `
                <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-pill bg-white/5 hover:bg-vermilion hover:text-white text-paper border border-white/10 group/btn shadow-lg transition-colors">
                  <span>VIEW REPOSITORY</span>
                  <span class="icon-bubble bg-white/10 text-paper">
                    ${Icons.github('w-3.5 h-3.5')}
                  </span>
                </a>
                <a href="${project.liveDemoUrl}" class="btn-pill bg-white/5 hover:bg-white/10 text-paper border border-white/10 group/demo">
                  <span>INTERACTIVE LAB</span>
                  <span class="icon-bubble bg-white/10 text-vermilion">
                    ${Icons.arrowDown('w-3.5 h-3.5')}
                  </span>
                </a>
              `
              }
            </div>

          </div>

          <!-- Right 5 Columns: Zoomable Visual Preview Asset -->
          <div class="lg:col-span-5 flex flex-col gap-4">
            <div 
              class="zoomable-image-container relative overflow-hidden rounded-xl border border-white/10 bg-[#161616] group/img aspect-video md:aspect-[4/3] flex items-center justify-center cursor-pointer"
              data-zoomable-project="${project.id}"
              data-zoomable-image="true"
              tabindex="0"
              role="button"
              aria-label="Click to zoom ${project.title} diagram"
            >
              <picture>
                <source srcset="${project.imageWebp}" type="image/webp" />
                <img 
                  src="${project.imageJpg}" 
                  alt="${project.title} Visual Overview" 
                  width="1024" 
                  height="576" 
                  loading="lazy" 
                  class="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-105 select-none"
                />
              </picture>
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 group-hover/img:opacity-10 transition-opacity"></div>
              
              <!-- Floating Brand Emblem for HearThisPic -->
              ${
                project.logoWebp
                  ? `
                <div class="absolute top-3 left-3 z-10 flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/15 shadow-xl pointer-events-none">
                  <picture>
                    <source srcset="${project.logoWebp}" type="image/webp" />
                    <img src="${project.logoPng || project.logoWebp}" alt="${project.title} Logo" class="w-5 h-5 rounded-full object-cover" width="20" height="20" />
                  </picture>
                  <span class="font-mono text-[10px] text-paper/90 font-bold tracking-wider">@HearThisPicBot</span>
                </div>
              `
                  : ''
              }

              <!-- Magnifier Floating Badge on Hover -->
              <div class="magnifier-badge">
                ${Icons.zoomIn('w-4 h-4 text-vermilion')}
                <span>CLICK TO ZOOM</span>
              </div>

              <!-- Corner print crosshairs -->
              <div class="crosshair top-2 left-2"></div>
              <div class="crosshair top-2 right-2"></div>
              <div class="crosshair bottom-2 left-2"></div>
              <div class="crosshair bottom-2 right-2"></div>
            </div>

            <div class="flex justify-between items-center text-[10px] font-mono text-paper/40 px-1">
              <span>SCHEMATIC // SPECIMEN 0${project.index}</span>
              <span class="text-vermilion">CLICK TO ZOOM ↗</span>
            </div>
          </div>

        </div>

        <!-- Embedded Interactive Demonstration Lab (Only for projects with live interactive sandboxes) -->
        ${
          isGhostblock || isRgb
            ? `
          <div class="mt-8 pt-8 border-t border-white/10">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-2 h-2 rounded-full bg-vermilion"></span>
              <span class="font-mono text-xs font-bold text-paper uppercase tracking-wider">LIVE SYSTEM LAB</span>
            </div>
            ${isGhostblock ? renderGhostblockDemo() : ''}
            ${isRgb ? renderRgbDemo() : ''}
          </div>
        `
            : ''
        }

      </div>
    </article>
  `;
}

function renderPlaceholderProjectCard(project: typeof projectsData[0]): string {
  return `
    <!-- TODO: Erfan to replace with 3rd GitHub repo -->
    <article class="project-card double-bezel border-dashed border-white/20 hover:border-vermilion/50 transition-colors group" id="card-${project.id}">
      <div class="double-bezel-inner p-6 md:p-10 lg:p-12 bg-[#121212]/80">
        
        <!-- Top Meta Row -->
        <div class="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8 font-mono text-xs">
          <div class="flex items-center gap-3">
            <span class="text-2xl md:text-3xl font-bold font-display text-white/40">${project.index}</span>
            <span class="text-white/30">•</span>
            <span class="text-vermilion font-bold uppercase tracking-wider">[STAGED REPOSITORY SLOT]</span>
          </div>
          <div class="flex items-center gap-4 text-paper/40">
            <span>STATUS: READY TO LINK</span>
            <span class="text-white/30">•</span>
            <span class="text-paper/60">TWO-MINUTE SETUP</span>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div class="lg:col-span-8 flex flex-col gap-4">
            <h3 class="font-display font-bold uppercase text-project-title text-paper/90 group-hover:text-vermilion transition-colors">
              ${project.title}
            </h3>
            <p class="font-heading font-medium text-sm text-vermilion">
              ${project.tagline}
            </p>
            <p class="font-body text-sm md:text-base text-paper/70 leading-relaxed">
              ${project.overview}
            </p>

            <div class="bg-black/60 rounded-xl p-4 border border-dashed border-white/10 font-mono text-xs text-paper/60 flex flex-col gap-2">
              <span class="text-vermilion font-bold">&gt; HOW TO POPULATE THIS CARD:</span>
              <code class="text-emerald-400">1. Open: src/data/projects.ts</code>
              <code class="text-paper/80">2. Replace 'staged-project-slot-03' with your GitHub repo details</code>
              <code class="text-paper/80">3. Drop a preview image into public/assets/</code>
            </div>

            <div class="flex flex-wrap items-center gap-2 pt-2">
              ${project.techStack
                .map(
                  (tag) => `
                <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-paper/60">
                  ${tag}
                </span>
              `
                )
                .join('')}
            </div>
          </div>

          <div class="lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-xl border border-dashed border-white/15 bg-black/40 min-h-[200px] text-center">
            <span class="font-mono text-3xl font-bold text-white/20 mb-2">03</span>
            <span class="font-heading font-bold text-sm text-paper mb-1">RESERVED REPOSITORY SLOT</span>
            <p class="font-mono text-[11px] text-paper/50 max-w-[28ch]">
              Erfan's upcoming open-source library or tool.
            </p>
            <a href="https://github.com/erfanvoj" target="_blank" rel="noopener noreferrer" class="mt-4 px-4 py-2 rounded-full bg-white/5 hover:bg-vermilion hover:text-white text-xs font-mono text-paper transition-all">
              EXPLORE @ERFANVOJ ↗
            </a>
          </div>
        </div>

      </div>
    </article>
  `;
}
