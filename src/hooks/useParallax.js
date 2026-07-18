import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Hook to apply vertical parallax effect to an element.
 * @param {number} speed - The speed of the parallax (negative means it moves slower than scroll).
 */
export function useVerticalParallax(speed = -0.2) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // We apply parallax by moving the y position based on scroll progress
    const animation = gsap.to(el, {
      y: () => (ScrollTrigger.maxScroll(window) - window.scrollY) * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      animation.kill();
    };
  }, [speed]);

  return ref;
}

/**
 * Hook to create a pinned horizontal scroll section.
 */
export function useHorizontalScroll() {
  const triggerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const trigger = triggerRef.current;
    const container = containerRef.current;
    if (!trigger || !container) return;

    const getScrollAmount = () => {
      return -(container.scrollWidth - window.innerWidth);
    };

    const animation = gsap.to(container, {
      x: getScrollAmount,
      ease: 'none',
      scrollTrigger: {
        trigger: trigger,
        start: 'top top',
        end: () => `+=${container.scrollWidth}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      animation.kill();
    };
  }, []);

  return { triggerRef, containerRef };
}
