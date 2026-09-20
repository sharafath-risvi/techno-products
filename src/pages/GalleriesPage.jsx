import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Image as ImageIcon } from 'lucide-react';
import SectionTag, { RevealText } from '../components/ui/RevealText';
import CTASection from '../components/home/CTASection';

const galleryImages = [
  '/galleries/43c4d5cb-3b5a-4f62-9cbd-57232da27a00.JPG',
  '/galleries/47cbc571-551f-4b9b-a2e3-705139c7d396.JPG',
  '/galleries/60cbd133-87b4-4275-b19c-feb2c98a3fc5 (1).JPG',
  '/galleries/bc808e1b-ee7e-4026-a9a6-522ea9dd2623 (1).JPG'
];

export default function GalleriesPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Prevent background scroll when lightbox is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  return (
    <main style={{ background: '#FAFAFA' }}>
      
      {/* 1. HERO SECTION (Redesigned) */}
      <section className="galleries-hero">
        {/* Technical Background Elements */}
        <div className="galleries-hero-bg">
          <div className="tech-grid"></div>
          <div className="faint-bg-text">ARCHIVE</div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Top Decorative Row */}
          <motion.div 
            className="hero-top-row"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-eyebrow">
              <span className="accent-line"></span>
              INSIGHTS / GALLERY
            </div>
            <div className="hero-tech-labels">
              <span>TPD / 01</span>
              <span className="dot-separator"></span>
              <span>VISUAL ARCHIVE</span>
            </div>
          </motion.div>

          {/* Main Title Area */}
          <div className="hero-main-area">
            <motion.h1 
              className="hero-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Galleries
            </motion.h1>

            <motion.div 
              className="hero-sub-area"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="decorative-number">01</div>
              <p className="hero-description">
                Explore the moments, products, projects and experiences that shape our journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="galleries-intro">
        <div className="container text-center">
          <RevealText>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <SectionTag>Inside Techno Products</SectionTag>
            </div>
            <h2 className="section-title" style={{ marginTop: 24 }}>
              Take a closer look at the people, products, projects and moments that shape our journey at Techno Products.
            </h2>
          </RevealText>
        </div>
      </section>

      {/* 3. MASONRY GALLERY */}
      <section className="galleries-grid-section">
        <div className="container">
          <div className="masonry-grid">
            {galleryImages.map((src, index) => (
              <motion.div 
                key={index} 
                className="masonry-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedImage(index)}
              >
                <div className="image-wrapper">
                  <img src={src} alt={`Techno Products Gallery ${index + 1}`} loading="lazy" />
                  <div className="image-overlay">
                    <div className="expand-icon-wrapper">
                      <ImageIcon size={24} color="#FFF" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
              <X size={32} color="#FFF" />
            </button>
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={galleryImages[selectedImage]} alt="Enlarged gallery view" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. CLOSING SECTION */}
      <section className="galleries-closing">
        <div className="container text-center">
          <RevealText>
            <h2 className="section-title">Moments That Shape Our Journey</h2>
            <p className="closing-description">
              From products and projects to people and milestones, every moment reflects our commitment to engineering excellence and lasting partnerships.
            </p>
          </RevealText>
        </div>
      </section>

      {/* 6. CTA */}
      <CTASection />

      <style>{`
        /* Hero Section (Typography Led) */
        .galleries-hero {
          padding: 200px 0 120px;
          background: #FAFAFA;
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        .galleries-hero-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }
        .tech-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: radial-gradient(circle at 50% 50%, black 40%, transparent 80%);
          -webkit-mask-image: radial-gradient(circle at 50% 50%, black 40%, transparent 80%);
        }
        .faint-bg-text {
          position: absolute;
          top: 45%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 28vw;
          color: rgba(0,0,0,0.02);
          white-space: nowrap;
          letter-spacing: -0.04em;
          user-select: none;
        }
        .hero-top-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 60px;
          border-bottom: 1px solid rgba(0,0,0,0.1);
          padding-bottom: 24px;
        }
        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 16px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.15em;
          color: #0067A4;
        }
        .accent-line {
          width: 40px;
          height: 2px;
          background: #D71B32;
        }
        .hero-tech-labels {
          display: flex;
          align-items: center;
          gap: 16px;
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 11px;
          letter-spacing: 0.1em;
          color: #666;
        }
        .dot-separator {
          width: 4px;
          height: 4px;
          background: #CCC;
          border-radius: 50%;
        }
        .hero-main-area {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        @media (min-width: 992px) {
          .hero-main-area {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
          }
        }
        .hero-heading {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: clamp(64px, 10vw, 120px);
          line-height: 0.95;
          letter-spacing: -0.03em;
          color: #001426;
          margin: 0;
          flex: 1;
        }
        .hero-sub-area {
          flex-basis: 360px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          border-left: 1px solid rgba(0,103,164,0.2);
          padding-left: 32px;
          position: relative;
        }
        .decorative-number {
          font-family: var(--font-heading);
          font-weight: 300;
          font-size: 64px;
          line-height: 1;
          color: rgba(0,103,164,0.15);
          position: absolute;
          top: -24px;
          left: 32px;
          z-index: -1;
        }
        .hero-description {
          font-family: var(--font-body);
          font-size: 18px;
          line-height: 1.7;
          color: #555;
          margin: 0;
          font-weight: 400;
        }

        /* Intro Section */
        .galleries-intro {
          padding: 100px 0 60px;
          background: #FAFAFA;
        }
        .galleries-intro .section-title {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: clamp(24px, 3vw, 32px);
          line-height: 1.5;
          color: #001426;
          max-width: 800px;
          margin: 0 auto;
        }

        /* Masonry Grid */
        .galleries-grid-section {
          padding: 40px 0 100px;
          background: #FAFAFA;
        }
        .masonry-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .masonry-item {
          break-inside: avoid;
          margin-bottom: 24px;
          cursor: pointer;
        }
        .image-wrapper {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          background: #E5E7EB;
          aspect-ratio: 4/3;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }
        .image-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 20, 38, 0.4);
          opacity: 0;
          transition: opacity 0.4s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .expand-icon-wrapper {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          transform: scale(0.8) translateY(10px);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .image-wrapper:hover img {
          transform: scale(1.05);
        }
        .image-wrapper:hover .image-overlay {
          opacity: 1;
        }
        .image-wrapper:hover .expand-icon-wrapper {
          transform: scale(1) translateY(0);
        }

        /* Lightbox */
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.9);
          z-index: 999999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          backdrop-filter: blur(10px);
        }
        .lightbox-close {
          position: absolute;
          top: 32px;
          right: 32px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50%;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 2;
        }
        .lightbox-close:hover {
          background: rgba(255,255,255,0.2);
          transform: scale(1.05);
        }
        .lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
        }
        .lightbox-content img {
          max-width: 100%;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }

        /* Closing Section */
        .galleries-closing {
          padding: 80px 0 120px;
          background: #FFFFFF;
        }
        .galleries-closing .section-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: clamp(32px, 4vw, 44px);
          color: #000000;
          margin-bottom: 24px;
        }
        .closing-description {
          font-family: var(--font-body);
          font-size: 18px;
          color: #666;
          line-height: 1.7;
          max-width: 700px;
          margin: 0 auto;
        }

        .text-center { text-align: center; }

        @media (max-width: 768px) {
          .masonry-grid {
            grid-template-columns: 1fr;
          }
          .galleries-hero {
            padding: 140px 0 60px;
          }
          .hero-top-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
            margin-bottom: 40px;
          }
          .hero-sub-area {
            border-left: none;
            padding-left: 0;
            border-top: 1px solid rgba(0,103,164,0.2);
            padding-top: 32px;
          }
          .decorative-number {
            top: 16px;
            left: 0;
          }
          .lightbox-overlay {
            padding: 16px;
          }
          .lightbox-close {
            top: 16px;
            right: 16px;
            width: 48px;
            height: 48px;
          }
        }
      `}</style>
    </main>
  );
}
