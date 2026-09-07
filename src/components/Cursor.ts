import { isReducedMotion } from '../utils/gsap';
import { Icons } from '../utils/icons';

export class CustomCursor {
  private cursorEl: HTMLElement | null = null;
  private targetX = 0;
  private targetY = 0;
  private currentX = 0;
  private currentY = 0;
  private isCoarse = false;

  constructor() {
    this.isCoarse = window.matchMedia('(pointer: coarse)').matches || isReducedMotion();
    if (this.isCoarse) return;

    this.init();
  }

  private init(): void {
    this.cursorEl = document.createElement('div');
    this.cursorEl.className = 'custom-cursor';
    this.cursorEl.setAttribute('aria-hidden', 'true');
    document.body.appendChild(this.cursorEl);

    // Initial position outside screen
    this.targetX = window.innerWidth / 2;
    this.targetY = window.innerHeight / 2;
    this.currentX = this.targetX;
    this.currentY = this.targetY;

    window.addEventListener('mousemove', (e) => {
      this.targetX = e.clientX;
      this.targetY = e.clientY;
    });

    this.attachHoverListeners();
    this.renderLoop();
  }

  public attachHoverListeners(): void {
    if (this.isCoarse || !this.cursorEl) return;

    // Interactive buttons & links (clean subtle ring)
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]:not(.zoomable-image-container)');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        this.cursorEl?.classList.add('is-link');
      });
      el.addEventListener('mouseleave', () => {
        this.cursorEl?.classList.remove('is-link');
      });
    });

    // Zoomable image containers (Project images & Poster images)
    const zoomableElements = document.querySelectorAll('.zoomable-image-container, [data-zoomable-image]');
    zoomableElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        if (!this.cursorEl) return;
        this.cursorEl.classList.add('is-magnifier');
        this.cursorEl.innerHTML = Icons.zoomIn('w-4 h-4 text-vermilion');
      });
      el.addEventListener('mouseleave', () => {
        if (!this.cursorEl) return;
        this.cursorEl.classList.remove('is-magnifier');
        this.cursorEl.innerHTML = '';
      });
    });
  }

  private renderLoop = (): void => {
    if (!this.cursorEl) return;

    // Smooth lerp (spring factor)
    const factor = 0.2;
    this.currentX += (this.targetX - this.currentX) * factor;
    this.currentY += (this.targetY - this.currentY) * factor;

    this.cursorEl.style.transform = `translate(${this.currentX}px, ${this.currentY}px) translate(-50%, -50%)`;

    requestAnimationFrame(this.renderLoop);
  };
}
