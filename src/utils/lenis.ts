import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let lenisInstance: Lenis | null = null;

export function initSmoothScroll(): Lenis | null {
  // Check if reduced motion is requested
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    console.log('[Lenis] Reduced motion preferred; native scroll enabled.');
    return null;
  }

  try {
    lenisInstance = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisInstance.on('scroll', ScrollTrigger.update);

    function raf(time: number) {
      lenisInstance?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return lenisInstance;
  } catch (error) {
    console.warn('[Lenis] Could not initialize smooth scroll:', error);
    return null;
  }
}

export function getLenis(): Lenis | null {
  return lenisInstance;
}
