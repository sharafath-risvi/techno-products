import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  return { ref, isInView };
}

export function useCountUp(target, duration = 2000) {
  const ref = useRef(null);
  const countRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const increment = target / (duration / 16);
        countRef.current = setInterval(() => {
          start += increment;
          if (start >= target) {
            el.textContent = target.toLocaleString();
            clearInterval(countRef.current);
          } else {
            el.textContent = Math.floor(start).toLocaleString();
          }
        }, 16);
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearInterval(countRef.current);
    };
  }, [target, duration]);

  return ref;
}
