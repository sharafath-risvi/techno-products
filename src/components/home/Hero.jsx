import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const dynamicWords = [
  "Industrial Solutions",
  "Automation Systems",
  "Mechanical Excellence",
  "Electrical Innovation",
  "Control Solutions"
];

export default function Hero() {
  const containerRef = useRef();
  const maskLayerRef = useRef();
  const textMaskRef = useRef();
  const darkOverlayRef = useRef();
  const contentRef = useRef();
  
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    // Hide text and overlay initially
    const elements = contentRef.current.children;
    gsap.set(elements, { y: 60, opacity: 0 });
    gsap.set(darkOverlayRef.current, { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=1300', // Reduced scroll distance for faster content reveal
        pin: true,
        scrub: 1.2, // Buttery smooth scrub ensures perfect reverse animation
        anticipatePin: 1
      }
    });
    
    // 1. Scale the text massively (Zooming into the solid white stroke of 'H')
    tl.to(textMaskRef.current, {
      scale: 180, // Massive scale to ensure the stroke covers the viewport
      ease: 'power3.in',
      duration: 1.2
    });

    // 2. Fade out the mask layer slightly before the text stops scaling to prevent any artifacting
    tl.to(maskLayerRef.current, {
      opacity: 0,
      duration: 0.2
    }, "-=0.1");

    // 3. Fade in dark overlay
    tl.to(darkOverlayRef.current, {
      opacity: 1,
      duration: 0.4
    }, "-=0.1");

    // 4. Stagger Content Reveal (Only Headline and Buttons remain)
    tl.to(elements, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out'
    }, "-=0.2");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} style={{
      position: 'relative',
      height: '100svh',
      width: '100%',
      overflow: 'hidden',
      background: '#000000', // Solid black base
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Background Video */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0
      }}>
        <video 
          src="/videos/hero.mp4"
          autoPlay 
          loop 
          muted 
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        
        {/* Subtle Dark Overlay (fades in later) */}
        <div ref={darkOverlayRef} style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 16, 31, 0.45)',
          willChange: 'opacity'
        }} />
      </div>

      {/* Mask Layer (mix-blend-mode: multiply) */}
      <div ref={maskLayerRef} style={{
        position: 'absolute',
        inset: 0,
        zIndex: 5,
        background: '#000000', // Black background
        color: '#ffffff', // White text
        mixBlendMode: 'multiply', // Video shines only through white
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        willChange: 'opacity'
      }}>
        <h1 ref={textMaskRef} style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: 'clamp(100px, 22vw, 300px)',
          lineHeight: 1,
          letterSpacing: '-0.02em',
          margin: 0,
          whiteSpace: 'nowrap',
          transformOrigin: '58% 50%', // Targets the thick crossbar of the 'H'
          willChange: 'transform'
        }}>
          TECHNO
        </h1>
      </div>

      {/* Hero Content Container */}
      <motion.div style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 24px',
        textAlign: 'center'
      }}>
        <div ref={contentRef} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          {/* Main Headline with Dynamic Changing Second Line */}
          <h1 style={{
            fontFamily: 'var(--font-heading)', fontWeight: 700,
            fontSize: 'clamp(40px, 6vw, 96px)', lineHeight: 1.1,
            letterSpacing: '-0.02em', color: '#ffffff', marginBottom: 96,
            textShadow: '0 12px 40px rgba(0,0,0,0.3)'
          }}>
            Engineering Reliable<br />
            <span style={{ display: 'block', position: 'relative', height: '1.2em', width: '100%' }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  style={{ color: '#4F8FBF', position: 'absolute', left: 0, right: 0 }}
                >
                  {dynamicWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/products" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#0067A4', color: '#ffffff',
              padding: '18px 40px', borderRadius: 40,
              fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 700,
              textDecoration: 'none', transition: 'all 0.3s ease',
              boxShadow: '0 12px 24px rgba(0, 103, 164, 0.3)'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Explore Products <ArrowRight size={18} />
            </Link>

            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.1)', color: '#ffffff',
              backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)',
              padding: '18px 40px', borderRadius: 40,
              fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 700,
              textDecoration: 'none', transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.color = '#00101F';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.color = '#ffffff';
            }}
            >
              Contact Our Experts
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
