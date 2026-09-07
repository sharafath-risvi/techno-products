import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroSection() {
  const containerRef = useRef(null);

  // Track the scroll progress of the 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scale the TECHNO mask from 1 up to 60 as the user scrolls
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 60]);
  
  // Fade out the entire black mask near the end to fully reveal the video
  const opacity = useTransform(scrollYProgress, [0.6, 0.9], [1, 0]);

  // Fade out the scroll indicator quickly as the user begins scrolling
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      style={{ 
        position: 'relative', 
        height: '300vh', 
        background: '#000' 
      }}
      aria-label="Hero section" 
      id="hero"
    >
      <div 
        style={{ 
          position: 'sticky', 
          top: 0, 
          height: '100vh', 
          width: '100%', 
          overflow: 'hidden', 
          background: '#000' 
        }}
      >
        
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1
          }}
          src="/videos/Video_is_nicee_but_at_the_end (1).mp4"
        />

        {/* Text Mask Overlay (mix-blend-mode: multiply makes white transparent, black opaque) */}
        <motion.div 
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            backgroundColor: '#000',
            color: '#FFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mixBlendMode: 'multiply',
            scale: scale,
            opacity: opacity,
            transformOrigin: 'center center'
          }}
        >
          <h1 
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              fontSize: '18vw',
              lineHeight: 1,
              margin: 0,
              letterSpacing: '-0.02em',
              textAlign: 'center',
              whiteSpace: 'nowrap',
              userSelect: 'none'
            }}
          >
            TECHNO
          </h1>
        </motion.div>
        
        {/* Subtle Scroll Indicator */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 3,
            color: 'rgba(255,255,255,0.7)',
            fontFamily: 'var(--font-heading)',
            fontSize: 12,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            opacity: scrollIndicatorOpacity,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12
          }}
        >
          <span style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>SCROLL</span>
          <div style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.4)' }} />
        </motion.div>

      </div>
    </section>
  );
}
