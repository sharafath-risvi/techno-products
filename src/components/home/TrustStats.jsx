import { useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { stats } from '../../data/siteData';

const STAT_ACCENT = '#0067A4';

function CounterNumber({ target, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const countRef = useRef(null);

  useEffect(() => {
    if (!isInView) return;
    const el = countRef.current;
    if (!el) return;
    const duration = 2400; // slightly longer for premium feel
    const startTime = performance.now();

    function animate(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      el.textContent = Math.floor(eased * target).toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, [isInView, target, suffix]);

  return (
    <span ref={ref}>
      <span ref={countRef}>0{suffix}</span>
    </span>
  );
}

export default function TrustStats() {
  const sectionRef = useRef(null);
  
  // Create cinematic scroll-linked parallax transition
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start bottom", "center center"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0, 1]);

  return (
    <section ref={sectionRef} style={{
      background: '#FFFFFF', // Pure white
      padding: '90px 0', // Reduced for compact layout
      position: 'relative',
      overflow: 'hidden',
    }}>
      <motion.div 
        className="container" 
        style={{ 
          position: 'relative', 
          zIndex: 1,
          y,
          opacity
        }}
      >
        {/* Stats Horizontal Layout */}
        <div className="trust-stats-layout" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          {stats.map((stat, i) => (
            <div key={stat.label} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <div
                style={{
                  textAlign: 'center',
                  padding: '20px 40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%'
                }}
              >
                {/* Counter */}
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: 'clamp(40px, 4.5vw, 56px)',
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                  color: '#001426', // Dark premium text
                  marginBottom: 16,
                }}>
                  <CounterNumber
                    target={parseInt(stat.number.replace(/\D/g, ''))}
                    suffix={stat.suffix}
                  />
                </div>

                {/* Label */}
                <div style={{
                  fontFamily: 'var(--font-heading)', fontWeight: 700,
                  fontSize: 15, color: '#0067A4', // Blue accent
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  marginBottom: 12,
                }}>
                  {stat.label}
                </div>

                {/* Description */}
                <div style={{
                  fontFamily: 'var(--font-body)', fontSize: 14,
                  color: '#555', lineHeight: 1.6, maxWidth: 260, margin: '0 auto'
                }}>
                  {stat.description}
                </div>
              </div>
              
              {/* Divider (hide for last item) */}
              {i < stats.length - 1 && (
                <div style={{
                  width: 1,
                  height: 120,
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 100%)',
                  flexShrink: 0
                }} className="trust-divider" />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .trust-stats-layout { flex-direction: column !important; gap: 40px !important; }
          .trust-divider { display: none !important; }
        }
      `}</style>
    </section>
  );
}
