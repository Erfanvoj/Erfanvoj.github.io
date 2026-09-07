import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function isReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function initScrollAnimations(): void {
  if (isReducedMotion()) {
    // If reduced motion is preferred, reveal all elements immediately
    document.querySelectorAll('.gsap-reveal').forEach((el) => {
      (el as HTMLElement).style.opacity = '1';
      (el as HTMLElement).style.transform = 'none';
    });
    return;
  }

  // Section titles and badges
  const revealElements = document.querySelectorAll('.gsap-reveal');
  revealElements.forEach((element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  // Stagger project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card) => {
    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 82%',
        },
      }
    );
  });

  // Stagger poster grid items
  const posterCards = document.querySelectorAll('.poster-card-item');
  if (posterCards.length > 0) {
    gsap.fromTo(
      posterCards,
      {
        opacity: 0,
        y: 40,
        scale: 0.96,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#posters-gallery-grid',
          start: 'top 80%',
        },
      }
    );
  }

  // Refresh ScrollTrigger after assets settle
  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });
}
