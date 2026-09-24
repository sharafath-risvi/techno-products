import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const dynamicPhrases = [
  "Mechanical Things",
  "Global Industries"
];

export default function Hero() {
  const containerRef = useRef();
  const videoRef = useRef();
  const videoBgWrapperRef = useRef();
  
  const [activeText, setActiveText] = useState(null);


  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const { currentTime, duration } = videoRef.current;
    if (!duration) return;
    
    const progress = currentTime / duration;
    
    // Text logic synced to video timeline
    let newActiveText = null;
    if (progress > 0.05 && progress < 0.48) {
      newActiveText = 0;
    } else if (progress > 0.52 && progress < 0.95) {
      newActiveText = 1;
    }
    
    if (activeText !== newActiveText) {
      setActiveText(newActiveText);
    }
  };

  return (
    <section ref={containerRef} style={{
      position: 'relative',
      height: '100svh',
      width: '100%',
      overflow: 'hidden',
      background: '#FFFFFF', // Solid white base
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Background Video — wrapped in a zoom container for the scroll-driven scale effect */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden'
      }}>
        <div
          ref={videoBgWrapperRef}
          style={{
            position: 'absolute',
            inset: 0,
            willChange: 'transform',
            transformOrigin: 'center center',
          }}
        >
          <video 
            ref={videoRef}
            onTimeUpdate={handleTimeUpdate}
            src="/videos/products_video.mp4"
            autoPlay 
            loop
            muted 
            playsInline
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover'
            }}
          />
        </div>
      </div>

      {/* Storytelling Text Overlay (Z-index 1 places it inside the video world) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        padding: '0 24px',
      }}>

        {/* STATIC HIGHLIGHTED TITLE with Premium Industrial Design */}
        <div style={{ position: 'relative', marginBottom: 40, textAlign: 'center', padding: '0 24px', maxWidth: 1200 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(40px, 6vw, 96px)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              textShadow: '0 12px 40px rgba(0,0,0,0.8), 0 4px 12px rgba(0,0,0,0.4)',
              textTransform: 'uppercase', // Premium editorial/industrial feel
            }}
          >
            Engineering With A Higher Purpose
          </motion.div>
        </div>

        {/* ROTATING CONTENT WRAPPER */}
        <div style={{ position: 'relative', width: '100%', height: '60px', display: 'flex', justifyContent: 'center' }}>
          <AnimatePresence mode="wait">
            {activeText !== null && (
              <motion.div
                key={activeText}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: 'absolute',
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(20px, 2.5vw, 36px)',
                  fontWeight: 400,
                  color: '#E2E8F0', // Slightly muted compared to the bold white title
                  letterSpacing: '0.04em',
                  textShadow: '0 4px 12px rgba(0,0,0,0.6)',
                  textTransform: 'uppercase'
                }}
              >
                {dynamicPhrases[activeText]}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div 
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          cursor: 'pointer',
        }}
        onClick={() => {
          const nextSection = containerRef.current?.nextElementSibling;
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
          }
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(4px)',
            border: '1px solid rgba(255,255,255,0.2)',
          }}
        >
          <ChevronDown color="#FFFFFF" size={24} />
        </motion.div>
      </div>

    </section>
  );
}
