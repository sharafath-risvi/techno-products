import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

// High-quality industrial & manufacturing hero photography
const FULL_WIDTH_INDUSTRIAL_IMAGE =
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1800&h=1100&fit=crop&q=88';

// Exactly 3 Premium Storytelling Cards with distinct industrial background images
const STORY_CHAPTERS = [
  {
    title: 'Established in 1999',
    text: 'Founded in 1999, Techno Products began with a vision to deliver unmatched industrial engineering precision and transmission solutions to enterprises across India.',
    bgImage:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&h=700&fit=crop&q=85',
  },
  {
    title: 'ISO Certified Excellence',
    text: 'Operating with rigorous international quality benchmarks, our ISO Certified engineering and automation processes ensure uncompromising safety, stability, and reliability.',
    bgImage:
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=900&h=700&fit=crop&q=85',
  },
  {
    title: 'Trusted Engineering Partner',
    text: 'More than an authorized distributor, we act as strategic engineering partners—designing, optimizing, and supporting purpose-built systems for mission-critical operations.',
    bgImage:
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=900&h=700&fit=crop&q=85',
  },
];

export default function AboutPreview() {
  const sectionRef = useRef(null);
  const pinContainerRef = useRef(null);

  // Screen 1 Refs
  const screen1Ref = useRef(null);

  // Screen 2 Refs (Hero background image reveal)
  const imageFrameRef = useRef(null);
  const imageElementRef = useRef(null);

  // Screen 3 Refs (3 Premium Cards)
  const storyBlocksRef = useRef([]);
  const ctaRef = useRef(null);
  const progressBarRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // ==========================================
      // DESKTOP: CINEMATIC PARALLAX STORYTELLING TIMELINE
      // ==========================================
      mm.add('(min-width: 1024px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '+=1800',
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        // Top story progress indicator
        tl.fromTo(
          progressBarRef.current,
          { scaleX: 0 },
          { scaleX: 1, ease: 'none' },
          0
        );

        // --- 1. SCREEN 1: CLEAN INTRODUCTION (0.00 -> 0.22) ---
        // Heading stays centered initially on clean background, then glides upward as image reveals
        tl.fromTo(
          screen1Ref.current,
          { opacity: 1, y: 0 },
          { opacity: 0, y: -130, duration: 0.22, ease: 'power2.inOut' },
          0.04
        );

        // --- 2. CINEMATIC BOTTOM REVEAL & EXPANSION (0.08 -> 0.38) ---
        // Large industrial image smoothly reveals from bottom and expands upward to 75-85% viewport height
        tl.fromTo(
          imageFrameRef.current,
          {
            clipPath: 'inset(88% 4% 0% 4% round 36px)',
            y: 160,
            opacity: 0,
            scale: 0.94,
          },
          {
            clipPath: 'inset(0% 0% 0% 0% round 32px)',
            y: 0,
            opacity: 1,
            scale: 1.0,
            duration: 0.30,
            ease: 'power2.out',
          },
          0.08
        );

        // Subtle internal parallax movement while image reveals and scrolls
        tl.fromTo(
          imageElementRef.current,
          { scale: 1.15, y: -55 },
          { scale: 1.0, y: 0, ease: 'none' },
          0.08
        );

        // --- 3. THREE PREMIUM CARDS REVEAL SEQUENTIALLY (0.36 -> 0.86) ---
        storyBlocksRef.current.forEach((block, index) => {
          if (!block) return;
          tl.fromTo(
            block,
            { opacity: 0, y: 55 },
            {
              opacity: 1,
              y: 0,
              duration: 0.15,
              ease: 'power2.out',
            },
            0.36 + index * 0.12
          );
        });

        // Reveal final CTA button
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.12, ease: 'power2.out' },
          0.78
        );
      });

      // ==========================================
      // TABLET & MOBILE: TAILORED PROGRESSIVE REVEALS
      // ==========================================
      mm.add('(max-width: 1023px)', () => {
        // Parallax reveal for hero image
        gsap.fromTo(
          imageFrameRef.current,
          { scale: 0.95, y: 30, opacity: 0.2 },
          {
            scale: 1.0,
            y: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: imageFrameRef.current,
              start: 'top 85%',
              end: 'top 40%',
              scrub: 1,
            },
          }
        );

        // Fade-up animation for each of the 3 premium cards
        storyBlocksRef.current.forEach((block) => {
          if (!block) return;
          gsap.fromTo(
            block,
            { opacity: 0, y: 42 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: block,
                start: 'top 86%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="apple-storytelling-section">
      {/* Subtle Engineering Blueprint Background & Soft Grey Gradients */}
      <div className="story-bg-layer">
        <div className="blueprint-texture" />
        <div className="soft-grey-gradient-top" />
        <div className="soft-grey-gradient-bottom" />
      </div>

      {/* Story Progress Indicator */}
      <div className="story-progress-bar-track" aria-hidden="true">
        <div ref={progressBarRef} className="story-progress-bar-fill" />
      </div>

      <div ref={pinContainerRef} className="story-pinned-stage">
        
        {/* =========================================================
            SCREEN 1: CLEAN INTRODUCTION
            Centered initially, then glides upward as background image reveals
           ========================================================= */}
        <div ref={screen1Ref} className="story-screen-1">
          <div className="screen-1-label">
            <span className="label-text">ABOUT TECHNO PRODUCTS</span>
          </div>
          <h2 className="screen-1-heading">
            A Trusted Name in <br />
            <span className="heading-accent">Industrial Engineering</span> <br />
            Since 1999
          </h2>
          <p className="screen-1-intro">
            Delivering trusted industrial transmission and engineering solutions for over two decades through innovation, quality, and customer commitment.
          </p>
        </div>

        {/* =========================================================
            SCREEN 2 & 3: IMMERSIVE HERO IMAGE + 3 PREMIUM CARDS
           ========================================================= */}
        <div className="story-screen-2-3">
          
          {/* 1. Immersive Hero Image (75-85% of Viewport Height) revealed from bottom */}
          <div ref={imageFrameRef} className="sticky-image-frame">
            <img
              ref={imageElementRef}
              src={FULL_WIDTH_INDUSTRIAL_IMAGE}
              alt="Techno Products Precision Engineering Facility"
              className="sticky-industrial-image"
              loading="lazy"
            />
            <div className="image-subtle-vignette" />
          </div>

          {/* 2. Exactly 3 Premium Cards with Subtle Industrial Backgrounds */}
          <div className="story-content-chapters">
            {STORY_CHAPTERS.map((chapter, i) => (
              <div
                key={chapter.title}
                ref={(el) => (storyBlocksRef.current[i] = el)}
                className="story-chapter-card"
              >
                {/* Subtle industrial background image behind content */}
                <div
                  className="card-bg-img"
                  style={{ backgroundImage: `url(${chapter.bgImage})` }}
                />
                <div className="card-overlay" />

                {/* Card content */}
                <div className="card-content-wrap">
                  <div className="chapter-index">0{i + 1}</div>
                  <h3 className="chapter-title">{chapter.title}</h3>
                  <p className="chapter-text">{chapter.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div ref={ctaRef} className="story-end-cta">
            <Link to="/about" className="apple-story-btn">
              <span>Explore Our Full Story</span>
              <ArrowRight size={18} className="btn-icon" strokeWidth={2.5} />
            </Link>
          </div>

        </div>

      </div>

      <style>{`
        .apple-storytelling-section {
          position: relative;
          background: #FFFFFF;
          color: #00101F;
          overflow: hidden;
          padding: 0;
          -webkit-font-smoothing: antialiased;
        }

        /* --- Background Layers --- */
        .story-bg-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .blueprint-texture {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, rgba(0, 103, 164, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 103, 164, 0.03) 1px, transparent 1px);
          background-size: 64px 64px;
        }

        .soft-grey-gradient-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 40%;
          background: radial-gradient(circle at 50% 0%, rgba(241, 245, 249, 0.8) 0%, transparent 80%);
        }

        .soft-grey-gradient-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 35%;
          background: radial-gradient(circle at 50% 100%, rgba(241, 245, 249, 0.7) 0%, transparent 80%);
        }

        /* --- Story Progress Bar --- */
        .story-progress-bar-track {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: rgba(0, 0, 0, 0.04);
          z-index: 10;
        }

        .story-progress-bar-fill {
          width: 100%;
          height: 100%;
          background: #0067A4;
          transform-origin: left center;
          will-change: transform;
        }

        /* --- Pinned Stage Container --- */
        .story-pinned-stage {
          position: relative;
          z-index: 2;
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          padding: 86px 4% 60px;
          max-width: 1680px;
          margin: 0 auto;
        }

        /* =====================================================
           SCREEN 1: CENTERED INTRODUCTION
           ===================================================== */
        .story-screen-1 {
          position: absolute;
          top: 22%;
          left: 0;
          right: 0;
          margin: 0 auto;
          text-align: center;
          max-width: 860px;
          padding: 0 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 5;
          will-change: transform, opacity;
        }

        .screen-1-label {
          display: inline-flex;
          align-items: center;
          margin-bottom: 24px;
        }

        .label-text {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 0.14em;
          color: var(--color-primary);
          text-transform: uppercase;
        }

        .screen-1-heading {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: clamp(38px, 4.4vw, 64px);
          line-height: 1.08;
          letter-spacing: -0.03em;
          color: #000000;
          margin: 0 0 28px 0;
        }

        .heading-accent {
          color: #00446F;
        }

        .screen-1-intro {
          font-family: var(--font-body);
          font-size: clamp(17px, 1.35vw, 21px);
          line-height: 1.7;
          color: #4A5568;
          margin: 0;
          max-width: 720px;
          font-weight: 400;
        }

        /* =====================================================
           SCREEN 2 & 3: FULL-WIDTH IMAGE (75-85% VH) + 3 CARDS
           ===================================================== */
        .story-screen-2-3 {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }

        /* Screen 2: Expansive Hero Image (60vh immersive height) */
        .sticky-image-frame {
          position: relative;
          width: 100%;
          max-width: 1540px;
          height: clamp(400px, 60vh, 680px);
          border-radius: 32px;
          overflow: hidden;
          -webkit-mask-image: -webkit-radial-gradient(white, black);
          -webkit-backface-visibility: hidden;
          -moz-backface-visibility: hidden;
          transform: translateZ(0);
          box-shadow:
            0 40px 100px -18px rgba(0, 16, 31, 0.18),
            0 0 0 1px rgba(0, 103, 164, 0.12);
          background: #F8FAFC;
          will-change: transform, opacity, clip-path;
        }

        .sticky-industrial-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          will-change: transform;
        }

        .image-subtle-vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 16, 31, 0.05) 55%,
            rgba(0, 16, 31, 0.24) 100%
          );
          pointer-events: none;
        }

        /* Screen 3: Exactly 3 Larger Premium Story Cards */
        .story-content-chapters {
          width: 100%;
          max-width: 1540px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          padding: 6px 0;
        }

        .story-chapter-card {
          position: relative;
          min-height: 340px;
          border-radius: 28px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 38px 36px;
          box-shadow: 0 18px 48px -12px rgba(0, 16, 31, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.12);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
          will-change: transform, opacity;
        }

        .story-chapter-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 28px 64px -14px rgba(0, 103, 164, 0.26);
        }

        /* Card Background Image & Subtle Overlay */
        .card-bg-img {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 0;
        }

        .story-chapter-card:hover .card-bg-img {
          transform: scale(1.08);
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            145deg,
            rgba(0, 16, 31, 0.88) 0%,
            rgba(0, 32, 60, 0.82) 100%
          );
          z-index: 1;
        }

        .card-content-wrap {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
        }

        .chapter-index {
          font-family: var(--font-heading);
          font-size: 13px;
          font-weight: 700;
          color: #38BDF8;
          letter-spacing: 0.14em;
          margin-bottom: 14px;
        }

        .chapter-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: clamp(20px, 1.4vw, 24px);
          color: #FFFFFF;
          line-height: 1.25;
          margin: 0 0 14px 0;
          letter-spacing: -0.015em;
        }

        .chapter-text {
          font-family: var(--font-body);
          font-size: 15px;
          line-height: 1.75;
          color: #E2E8F0;
          margin: 0;
          font-weight: 400;
        }

        /* End CTA Button */
        .story-end-cta {
          margin-top: 10px;
          will-change: transform, opacity;
        }

        .apple-story-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #00101F;
          color: #FFFFFF;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 13px;
          padding: 13px 28px;
          border-radius: 9999px;
          text-decoration: none;
          box-shadow: 0 12px 30px -6px rgba(0, 16, 31, 0.3);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .apple-story-btn:hover {
          background: #0067A4;
          transform: translateY(-3px);
          box-shadow: 0 16px 38px -6px rgba(0, 103, 164, 0.4);
        }

        .apple-story-btn .btn-icon {
          transition: transform 0.35s ease;
        }

        .apple-story-btn:hover .btn-icon {
          transform: translateX(5px);
        }

        /* --- Responsive Styles --- */
        @media (max-width: 1023px) {
          .story-pinned-stage {
            min-height: auto;
            padding: 100px 5%;
            gap: 60px;
          }

          .story-screen-1 {
            position: relative;
            top: auto;
            margin-bottom: 24px;
          }

          .sticky-image-frame {
            height: 440px;
            border-radius: 24px;
          }

          .story-content-chapters {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .story-chapter-card {
            min-height: 280px;
            padding: 30px 28px;
          }
        }

        @media (max-width: 640px) {
          .story-pinned-stage {
            padding: 80px 5%;
          }

          .sticky-image-frame {
            height: 320px;
          }

          .apple-story-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
