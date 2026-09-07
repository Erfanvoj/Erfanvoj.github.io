import './styles/main.css';

import { renderNavbar, initNavbarInteractions } from './components/Navbar';
import { renderHero } from './components/Hero';
import { renderPhilosophy } from './components/Philosophy';
import { renderProjects } from './components/Projects';
import { initGhostblockDemo, initRgbDemo } from './components/ProjectVisualizers';
import { renderPosters } from './components/Posters';
import { ImageLightbox } from './components/Lightbox';
import { renderAbout } from './components/About';
import { renderContact, initContactInteractions } from './components/Contact';
import { renderFooter, initFooterClock } from './components/Footer';
import { CustomCursor } from './components/Cursor';
import { initSmoothScroll } from './utils/lenis';
import { initScrollAnimations } from './utils/gsap';

function initApp(): void {
  const appContainer = document.getElementById('app');
  if (!appContainer) return;

  // Assemble the application DOM
  appContainer.innerHTML = `
    <!-- Grain/Noise Texture Overlay -->
    <div class="noise-overlay" aria-hidden="true"></div>

    <!-- Accessible Skip to Main Content Link -->
    <a href="#projects" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-vermilion focus:text-white focus:font-bold focus:rounded-full focus:shadow-xl">
      Skip to main content
    </a>

    <!-- Top Navigation -->
    ${renderNavbar()}

    <!-- Main Content Flow -->
    <main id="main-content">
      ${renderHero()}
      ${renderPhilosophy()}
      ${renderProjects()}
      ${renderPosters()}
      ${renderAbout()}
      ${renderContact()}
    </main>

    <!-- Footer Colophon -->
    ${renderFooter()}
  `;

  // Initialize smooth scroll & motion
  initSmoothScroll();
  initScrollAnimations();

  // Initialize components & interactions
  initNavbarInteractions();
  initGhostblockDemo();
  initRgbDemo();
  initContactInteractions();
  initFooterClock();

  // Initialize custom cursor
  const cursor = new CustomCursor();

  // Initialize universal lightbox for poster gallery and project images
  const lightbox = new ImageLightbox();

  // Poster items click/enter
  const posterItems = document.querySelectorAll('.poster-card-item');
  posterItems.forEach((card) => {
    card.addEventListener('click', () => {
      const idxAttr = card.getAttribute('data-poster-index');
      if (idxAttr !== null) {
        lightbox.openPoster(parseInt(idxAttr, 10));
      }
    });

    card.addEventListener('keydown', (e) => {
      const keyboardEvent = e as KeyboardEvent;
      if (keyboardEvent.key === 'Enter' || keyboardEvent.key === ' ') {
        keyboardEvent.preventDefault();
        const idxAttr = card.getAttribute('data-poster-index');
        if (idxAttr !== null) {
          lightbox.openPoster(parseInt(idxAttr, 10));
        }
      }
    });
  });

  // Project zoomable images click/enter
  const projectZoomables = document.querySelectorAll('[data-zoomable-project]');
  projectZoomables.forEach((el) => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const projId = el.getAttribute('data-zoomable-project');
      if (projId) {
        lightbox.openProject(projId);
      }
    });

    el.addEventListener('keydown', (e) => {
      const keyboardEvent = e as KeyboardEvent;
      if (keyboardEvent.key === 'Enter' || keyboardEvent.key === ' ') {
        keyboardEvent.preventDefault();
        const projId = el.getAttribute('data-zoomable-project');
        if (projId) {
          lightbox.openProject(projId);
        }
      }
    });
  });

  // Re-attach cursor hover listeners to dynamically rendered DOM
  cursor.attachHoverListeners();

  console.log('[Erfan Portfolio] Initialized successfully. 70/30 Dev-to-Design craft ready.');
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
