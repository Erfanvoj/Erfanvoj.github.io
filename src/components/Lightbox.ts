import { postersData } from '../data/posters';
import { projectsData } from '../data/projects';
import { Icons } from '../utils/icons';

export interface LightboxItem {
  type: 'project' | 'poster';
  index: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  imageWebp: string | null;
  imageJpg: string | null;
  specs: { label: string; value: string }[];
  palette?: string[];
  externalUrl?: string;
  externalLabel?: string;
}

export class ImageLightbox {
  private modalEl: HTMLElement | null = null;
  private currentItems: LightboxItem[] = [];
  private currentIndex = 0;
  private isZoomed = false;

  constructor() {
    this.createModal();
    this.attachEvents();
  }

  private createModal(): void {
    this.modalEl = document.createElement('div');
    this.modalEl.id = 'image-lightbox-modal';
    this.modalEl.className = 'fixed inset-0 z-50 bg-[#0E0E0E]/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8 opacity-0 pointer-events-none transition-opacity duration-300';
    this.modalEl.setAttribute('role', 'dialog');
    this.modalEl.setAttribute('aria-modal', 'true');
    this.modalEl.setAttribute('aria-label', 'Full-Resolution Specimen Viewer');

    this.modalEl.innerHTML = `
      <div class="relative w-full max-w-6xl max-h-[92vh] flex flex-col lg:flex-row gap-6 bg-[#141414] border border-white/10 rounded-2xl p-6 md:p-8 overflow-y-auto shadow-2xl shadow-black">
        
        <!-- Close Button -->
        <button id="lightbox-close-btn" type="button" class="absolute top-4 right-4 z-20 p-2 text-paper/70 hover:text-vermilion rounded-full bg-white/5 border border-white/10 transition-colors" aria-label="Close viewer">
          ${Icons.close('w-5 h-5')}
        </button>

        <!-- Left: High-Res Image Stage with Interactive Zoom -->
        <div class="lg:w-3/5 flex items-center justify-center bg-black/70 rounded-xl p-4 border border-white/5 relative min-h-[350px] overflow-hidden select-none">
          <div id="lightbox-image-wrapper" class="relative max-h-[75vh] w-full flex items-center justify-center cursor-zoom-in transition-transform duration-300">
            <!-- Image injected dynamically -->
          </div>
          <div class="absolute bottom-3 left-4 text-[10px] font-mono text-paper/40 pointer-events-none flex items-center gap-1.5">
            ${Icons.zoomIn('w-3 h-3 text-vermilion')}
            <span>CLICK IMAGE TO TOGGLE 1.5X ZOOM</span>
          </div>
        </div>

        <!-- Right: Details & Technical Colophon -->
        <div class="lg:w-2/5 flex flex-col justify-between gap-6 font-mono text-xs">
          
          <div class="flex flex-col gap-4">
            <div class="flex items-center justify-between border-b border-white/10 pb-3">
              <span class="text-vermilion font-bold text-sm" id="lightbox-index">01 // SPECIMEN</span>
              <span class="text-paper/50" id="lightbox-year">2026</span>
            </div>

            <div>
              <h3 class="font-display font-bold text-2xl md:text-3xl text-paper uppercase tracking-tight" id="lightbox-title">
                Title
              </h3>
              <p class="text-vermilion font-heading font-medium text-xs md:text-sm mt-0.5" id="lightbox-subtitle">
                Subtitle
              </p>
            </div>

            <p class="font-body text-sm text-paper/75 leading-relaxed" id="lightbox-desc">
              Description.
            </p>

            <!-- Technical Specifications Table -->
            <div class="bg-black/40 rounded-xl p-4 border border-white/5 flex flex-col gap-2.5" id="lightbox-specs-table">
              <!-- Specs injected dynamically -->
            </div>

            <!-- External Action Link (GitHub / Live App) -->
            <div id="lightbox-action-container" class="pt-2 hidden">
              <!-- Action button injected dynamically -->
            </div>
          </div>

          <!-- Modal Navigation Controls -->
          <div class="flex items-center justify-between border-t border-white/10 pt-4">
            <button id="lightbox-prev-btn" type="button" class="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-paper hover:text-vermilion transition-colors flex items-center gap-2">
              <span>← PREV</span>
            </button>
            <span class="text-paper/40 text-[11px]" id="lightbox-counter">1 / 1</span>
            <button id="lightbox-next-btn" type="button" class="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-paper hover:text-vermilion transition-colors flex items-center gap-2">
              <span>NEXT →</span>
            </button>
          </div>

        </div>

      </div>
    `;

    document.body.appendChild(this.modalEl);
  }

  public openPoster(index: number): void {
    this.currentItems = postersData.map((p) => ({
      type: 'poster',
      index: p.index,
      year: p.year,
      title: p.title,
      subtitle: p.format,
      description: p.description,
      imageWebp: p.imageWebp,
      imageJpg: p.imageJpg,
      palette: p.palette,
      specs: [
        { label: 'PRINT FORMAT', value: p.format },
        { label: 'PAPER STOCK', value: p.paperStock },
        { label: 'DIMENSIONS', value: p.dimensions },
      ],
    }));
    this.currentIndex = index;
    this.isZoomed = false;
    this.renderCurrent();
    this.showModal();
  }

  public openProject(projectId: string): void {
    const validProjects = projectsData.filter((p) => !p.isPlaceholder);
    this.currentItems = validProjects.map((p) => {
      const isHearThisPic = p.id === 'hear-this-pic';
      const isRgb = p.id === 'rgb-file-transfer';

      let externalUrl = p.githubUrl;
      let externalLabel = 'GITHUB REPOSITORY';

      if (isHearThisPic) {
        externalUrl = 'https://t.me/HearThisPicBot';
        externalLabel = 'LAUNCH TELEGRAM BOT (@HearThisPicBot)';
      } else if (isRgb) {
        externalUrl = 'https://rgb-file-transfer.netlify.app';
        externalLabel = 'LAUNCH LIVE APP (rgb-file-transfer.netlify.app)';
      }

      const specs = [
        { label: 'CATEGORY', value: p.category },
        { label: 'TIMELINE', value: p.year },
        { label: 'STACK', value: p.techStack.join(' • ') },
      ];

      if (isHearThisPic) {
        specs.push({ label: 'PLATFORM', value: 'TELEGRAM BOT (@HearThisPicBot)' });
      }

      return {
        type: 'project',
        index: p.index,
        year: p.year,
        title: p.title,
        subtitle: p.tagline,
        description: p.overview,
        imageWebp: p.imageWebp,
        imageJpg: p.imageJpg,
        externalUrl,
        externalLabel,
        specs,
      };
    });

    const foundIdx = validProjects.findIndex((p) => p.id === projectId);
    this.currentIndex = foundIdx >= 0 ? foundIdx : 0;
    this.isZoomed = false;
    this.renderCurrent();
    this.showModal();
  }

  private showModal(): void {
    if (this.modalEl) {
      this.modalEl.classList.remove('opacity-0', 'pointer-events-none');
      this.modalEl.classList.add('opacity-100');
      document.body.style.overflow = 'hidden';
    }
  }

  public close(): void {
    if (this.modalEl) {
      this.modalEl.classList.add('opacity-0', 'pointer-events-none');
      this.modalEl.classList.remove('opacity-100');
      document.body.style.overflow = '';
      this.isZoomed = false;
    }
  }

  private renderCurrent(): void {
    const item = this.currentItems[this.currentIndex];
    if (!item) return;

    const imgWrapper = document.getElementById('lightbox-image-wrapper');
    const indexEl = document.getElementById('lightbox-index');
    const yearEl = document.getElementById('lightbox-year');
    const titleEl = document.getElementById('lightbox-title');
    const subtitleEl = document.getElementById('lightbox-subtitle');
    const descEl = document.getElementById('lightbox-desc');
    const specsTable = document.getElementById('lightbox-specs-table');
    const actionContainer = document.getElementById('lightbox-action-container');
    const counterEl = document.getElementById('lightbox-counter');

    if (indexEl) indexEl.textContent = `${item.index} // ${item.type.toUpperCase()} SPECIMEN`;
    if (yearEl) yearEl.textContent = item.year;
    if (titleEl) titleEl.textContent = item.title;
    if (subtitleEl) subtitleEl.textContent = item.subtitle;
    if (descEl) descEl.textContent = item.description;
    if (counterEl) counterEl.textContent = `${this.currentIndex + 1} / ${this.currentItems.length}`;

    if (specsTable) {
      let html = item.specs
        .map(
          (s) => `
        <div class="flex justify-between border-b border-white/5 pb-1.5">
          <span class="text-white/40 uppercase">${s.label}:</span>
          <span class="text-paper font-bold">${s.value}</span>
        </div>
      `
        )
        .join('');

      if (item.palette && item.palette.length > 0) {
        html += `
          <div class="flex items-center justify-between pt-1">
            <span class="text-white/40 uppercase">COLOR PALETTE:</span>
            <div class="flex items-center gap-1.5">
              ${item.palette
                .map(
                  (c) =>
                    `<span class="w-4 h-4 rounded-full border border-white/20 inline-block" style="background-color: ${c};" title="${c}"></span>`
                )
                .join('')}
            </div>
          </div>
        `;
      }

      specsTable.innerHTML = html;
    }

    if (actionContainer) {
      if (item.externalUrl) {
        actionContainer.classList.remove('hidden');
        actionContainer.innerHTML = `
          <a href="${item.externalUrl}" target="_blank" rel="noopener noreferrer" class="btn-pill bg-white/5 hover:bg-vermilion hover:text-white text-paper border border-white/10 text-xs font-bold justify-between w-full transition-colors">
            <span>${item.externalLabel || 'OPEN LINK'}</span>
            <span class="icon-bubble bg-white/10">
              ${Icons.arrowUpRight('w-3.5 h-3.5')}
            </span>
          </a>
        `;
      } else {
        actionContainer.classList.add('hidden');
      }
    }

    if (imgWrapper) {
      this.isZoomed = false;
      imgWrapper.style.transform = 'scale(1)';
      imgWrapper.className = 'relative max-h-[75vh] w-full flex items-center justify-center cursor-zoom-in transition-transform duration-300';

      if (item.imageWebp) {
        imgWrapper.innerHTML = `
          <picture>
            <source srcset="${item.imageWebp}" type="image/webp" />
            <img src="${item.imageJpg}" alt="${item.title}" class="max-h-[70vh] max-w-full w-auto object-contain rounded-lg shadow-2xl border border-white/10 select-none" />
          </picture>
        `;
      } else {
        imgWrapper.innerHTML = `
          <div class="w-72 h-96 rounded-lg border-2 border-dashed border-white/20 bg-[#1A1A1A] flex flex-col items-center justify-center p-6 text-center">
            <span class="text-3xl font-display font-bold text-white/20 mb-2">${item.index}</span>
            <span class="text-xs font-mono font-bold text-vermilion mb-1">STAGED FRAME</span>
            <p class="text-[11px] font-mono text-paper/50">TODO: Replace with real image file</p>
          </div>
        `;
      }
    }
  }

  private toggleZoom(): void {
    const imgWrapper = document.getElementById('lightbox-image-wrapper');
    if (!imgWrapper) return;

    this.isZoomed = !this.isZoomed;
    if (this.isZoomed) {
      imgWrapper.style.transform = 'scale(1.45)';
      imgWrapper.classList.remove('cursor-zoom-in');
      imgWrapper.classList.add('cursor-zoom-out');
    } else {
      imgWrapper.style.transform = 'scale(1)';
      imgWrapper.classList.remove('cursor-zoom-out');
      imgWrapper.classList.add('cursor-zoom-in');
    }
  }

  private attachEvents(): void {
    const closeBtn = document.getElementById('lightbox-close-btn');
    const prevBtn = document.getElementById('lightbox-prev-btn');
    const nextBtn = document.getElementById('lightbox-next-btn');
    const imgWrapper = document.getElementById('lightbox-image-wrapper');

    closeBtn?.addEventListener('click', () => this.close());

    imgWrapper?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleZoom();
    });

    this.modalEl?.addEventListener('click', (e) => {
      if (e.target === this.modalEl) {
        this.close();
      }
    });

    prevBtn?.addEventListener('click', () => {
      this.currentIndex = (this.currentIndex - 1 + this.currentItems.length) % this.currentItems.length;
      this.renderCurrent();
    });

    nextBtn?.addEventListener('click', () => {
      this.currentIndex = (this.currentIndex + 1) % this.currentItems.length;
      this.renderCurrent();
    });

    window.addEventListener('keydown', (e) => {
      if (!this.modalEl || this.modalEl.classList.contains('pointer-events-none')) return;

      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowLeft') {
        this.currentIndex = (this.currentIndex - 1 + this.currentItems.length) % this.currentItems.length;
        this.renderCurrent();
      }
      if (e.key === 'ArrowRight') {
        this.currentIndex = (this.currentIndex + 1) % this.currentItems.length;
        this.renderCurrent();
      }
    });
  }
}
