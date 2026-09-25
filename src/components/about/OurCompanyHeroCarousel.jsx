import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselImages = [
  '/Aboutpage_carasouel_images/ChatGPT Image Sep 22, 2026, 04_51_00 PM.png',
  '/Aboutpage_carasouel_images/Screenshot 2026-09-22 at 4.47.03 PM.png',
  '/Aboutpage_carasouel_images/Screenshot 2026-09-22 at 4.47.31 PM.png',
  '/Aboutpage_carasouel_images/Screenshot 2026-09-22 at 5.53.38 PM.png'
];

export default function OurCompanyHeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  return (
    <section className="about-hero-carousel" style={{ position: 'relative', width: '100%', overflow: 'hidden', background: '#00101F', marginTop: 112 }}>
      
      <style>{`
        .carousel-placeholder-desktop {
          width: 100%; height: auto; visibility: hidden; display: block;
        }
        .carousel-placeholder-mobile {
          display: none;
        }
        @media (max-width: 1023px) {
          .carousel-placeholder-desktop {
            display: none !important;
          }
          .carousel-placeholder-mobile {
            width: 100% !important; height: auto !important; visibility: hidden !important; display: block !important;
          }
          .about-hero-carousel {
            margin-top: 0 !important;
          }
          .about-hero-carousel img {
            object-fit: contain !important; /* ensure image fully fits without crop */
          }
        }
      `}</style>
      
      {/* Desktop placeholder (fixed to first image to prevent layout shift) */}
      <img 
        src={carouselImages[0]} 
        alt="Placeholder Desktop"
        className="carousel-placeholder-desktop"
      />
      
      {/* Mobile placeholder (dynamic to prevent letterboxing and ensure full width) */}
      <img 
        src={carouselImages[currentIndex]} 
        alt="Placeholder Mobile"
        className="carousel-placeholder-mobile"
      />

      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          style={{ position: 'absolute', inset: 0 }}
        >
          <img 
            src={carouselImages[currentIndex]} 
            alt={`Techno Products Facility ${currentIndex + 1}`}
            style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Subtle Bottom Gradient for seamless blending */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0, height: '20vh',
        background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
        pointerEvents: 'none',
        zIndex: 2
      }} />

      {/* Previous Arrow (Left Centered) */}
      <button
        onClick={handlePrev}
        style={{
          position: 'absolute',
          left: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'transparent',
          border: 'none',
          color: 'rgba(255, 255, 255, 0.7)',
          cursor: 'pointer',
          transition: 'color 0.2s ease',
          zIndex: 4,
          padding: 8
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = '#FFFFFF'; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'; }}
        aria-label="Previous image"
      >
        <ChevronLeft size={40} strokeWidth={1.5} style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }} />
      </button>

      {/* Next Arrow (Right Centered) */}
      <button
        onClick={handleNext}
        style={{
          position: 'absolute',
          right: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'transparent',
          border: 'none',
          color: 'rgba(255, 255, 255, 0.7)',
          cursor: 'pointer',
          transition: 'color 0.2s ease',
          zIndex: 4,
          padding: 8
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = '#FFFFFF'; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'; }}
        aria-label="Next image"
      >
        <ChevronRight size={40} strokeWidth={1.5} style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }} />
      </button>

      {/* Dots Indicator Wrapper */}
      <div style={{
        position: 'absolute',
        bottom: 40, left: 0, right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 3,
        padding: '0 24px'
      }}>
        {/* Dots */}
        <div style={{ display: 'flex', gap: 12 }}>
          {carouselImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              style={{
                width: i === currentIndex ? 32 : 8,
                height: 8,
                borderRadius: 4,
                background: '#FFFFFF',
                opacity: i === currentIndex ? 1 : 0.4,
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
