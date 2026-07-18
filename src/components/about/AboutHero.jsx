import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';

const HERO_IMG = 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1920&h=1080&fit=crop&q=80';

export default function AboutHero() {
  const containerRef = useRef(null);

  // 1. Core Scroll Physics
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Buttery smooth spring interpolation for Apple-style cinematic feel
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 70, damping: 20, mass: 0.5 });

  // 2. The Split Text Animation (0 to 0.15)
  // Splits and disappears rapidly before image shrinks significantly
  const textOpacity = useTransform(smoothScroll, [0, 0.12], [1, 0]);
  const textBlur = useTransform(smoothScroll, [0, 0.12], ["blur(0px)", "blur(12px)"]);
  const topTextX = useTransform(smoothScroll, [0, 0.15], [0, -150]);
  const bottomTextX = useTransform(smoothScroll, [0, 0.15], [0, 150]);

  // 3. Cinematic Camera Zoom & Slide (Image Transformation)
  // Zoom: 0 to 0.3
  const imageScale = useTransform(smoothScroll, [0, 0.3], [1, 0.36]);
  const imageRadius = useTransform(smoothScroll, [0, 0.3], [0, 48]); 
  const imageShadow = useTransform(smoothScroll, [0.25, 0.35], ["0px 0px 0px rgba(0,0,0,0)", "0px 40px 100px -20px rgba(0,0,0,0.15)"]);
  const overlayOpacity = useTransform(smoothScroll, [0, 0.2], [1, 0]);

  // Slide Left: 0.5 to 0.7
  const imageX = useTransform(smoothScroll, [0.5, 0.7], ["0%", "-26%"]);

  // Background crossfade from dark/image to pure white
  const bgOpacity = useTransform(smoothScroll, [0.15, 0.25], [0, 1]);

  // 4. Our Story Minimal Content Reveal (0.65 to 0.85)
  const contentOpacity = useTransform(smoothScroll, [0.65, 0.85], [0, 1]);
  const contentY = useTransform(smoothScroll, [0.65, 0.85], [40, 0]);

  // 5. Editorial Heading Trigger
  const [showEditorial, setShowEditorial] = useState(false);
  useMotionValueEvent(smoothScroll, "change", (latest) => {
    if (latest > 0.55 && !showEditorial) {
      setShowEditorial(true);
    } else if (latest < 0.45 && showEditorial) {
      setShowEditorial(false);
    }
  });

  return (
    <section ref={containerRef} style={{ height: '280vh', position: 'relative' }}>
      
      {/* 100vh Sticky Viewport */}
      <div style={{ position: 'sticky', top: 0, height: '100vh', width: '100%', overflow: 'hidden', background: '#00101F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Pure White Background Fade */}
        <motion.div 
          style={{ position: 'absolute', inset: 0, background: '#FFFFFF', zIndex: 1, opacity: bgOpacity }} 
        />

        {/* The Transforming Cinematic Image */}
        <motion.div
          style={{
            position: 'absolute',
            width: '100vw',
            height: '100vh',
            scale: imageScale,
            x: imageX,
            borderRadius: imageRadius,
            boxShadow: imageShadow,
            overflow: 'hidden',
            zIndex: 2,
            willChange: 'transform, border-radius',
            transformOrigin: 'center center',
          }}
        >
          {/* Subtle Float & Parallax (Infinite) */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: '100%', height: '100%' }}
          >
            <img 
              src={HERO_IMG} 
              alt="Engineering Excellence" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
            />
            {/* Dark overlay specifically for the initial split heading */}
            <motion.div 
              style={{ 
                position: 'absolute', inset: 0, 
                background: 'linear-gradient(to top, rgba(0,16,31,0.6) 0%, rgba(0,16,31,0.2) 100%)',
                opacity: overlayOpacity,
                pointerEvents: 'none'
              }} 
            />
          </motion.div>
        </motion.div>

        {/* Editorial Identity Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20, x: "-50%" }}
          animate={{ opacity: showEditorial ? 0.12 : 0, y: showEditorial ? 0 : 20, x: "-50%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            position: 'absolute',
            top: '5%', // Moved upward for more breathing space from the image
            left: '50%', // Centered across the entire hero section
            zIndex: 1, // Behind the image but above the white bg
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: 'clamp(100px, 12vw, 160px)',
            color: '#00446F', // Brand blue
            margin: 0,
            lineHeight: 0.8,
            letterSpacing: '-0.02em',
            overflow: 'hidden'
          }}>
            OUR IDENTITY
          </h2>
        </motion.div>

        {/* The Splitting Heading */}
        <motion.div
          style={{
            position: 'absolute',
            zIndex: 3,
            opacity: textOpacity,
            filter: textBlur,
            textAlign: 'center',
            width: '100%',
            pointerEvents: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8
          }}
        >
          <motion.h1 style={{ 
            fontFamily: 'var(--font-heading)', fontWeight: 700, 
            fontSize: 'clamp(40px, 6vw, 90px)', color: '#ffffff', 
            lineHeight: 1, letterSpacing: '-0.03em', margin: 0,
            textShadow: '0 20px 40px rgba(0,0,0,0.5)',
            x: topTextX,
            willChange: 'transform, opacity, filter'
          }}>
            ENGINEERING EXCELLENCE
          </motion.h1>
          <motion.h1 style={{ 
            fontFamily: 'var(--font-heading)', fontWeight: 700, 
            fontSize: 'clamp(40px, 6vw, 90px)', color: '#ffffff', 
            lineHeight: 1, letterSpacing: '-0.03em', margin: 0,
            textShadow: '0 20px 40px rgba(0,0,0,0.5)',
            x: bottomTextX,
            willChange: 'transform, opacity, filter'
          }}>
            SINCE 1999
          </motion.h1>
        </motion.div>

        {/* Minimalist Our Story Editorial Content */}
        <motion.div
          style={{
            position: 'absolute',
            right: '8%',
            width: '42%',
            zIndex: 4,
            opacity: contentOpacity,
            y: contentY,
            willChange: 'transform, opacity',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Small Label */}
          <div style={{
            fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13, 
            letterSpacing: '0.2em', color: '#0067A4', marginBottom: 20,
            display: 'flex', alignItems: 'center', gap: 12
          }}>
            OUR LEGACY
          </div>
          
          {/* Large Heading */}
          <h2 style={{ 
            fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 56px)',
            color: '#111111', margin: '0 0 24px 0', letterSpacing: '-0.02em', lineHeight: 1.1
          }}>
            Building Engineering Excellence Since 1999
          </h2>

          {/* Minimal 2-Line Description */}
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: '#555555', lineHeight: 1.6, margin: '0 0 48px 0', fontWeight: 400 }}>
            For over two decades, Techno Products has partnered with leading manufacturers, delivering custom-engineered systems that drive industrial success.
          </p>

          {/* Clean 4-Point Features Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px 16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, borderRadius: '50%', background: '#00101F', color: '#ffffff', fontSize: 13, fontWeight: 700 }}>✓</div>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, color: '#00101F' }}>Since 1999</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, borderRadius: '50%', background: '#00101F', color: '#ffffff', fontSize: 13, fontWeight: 700 }}>✓</div>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, color: '#00101F' }}>26+ Years</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, borderRadius: '50%', background: '#00101F', color: '#ffffff', fontSize: 13, fontWeight: 700 }}>✓</div>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, color: '#00101F' }}>ISO Certified</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, borderRadius: '50%', background: '#00101F', color: '#ffffff', fontSize: 13, fontWeight: 700 }}>✓</div>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, color: '#00101F' }}>5000+ Projects</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
