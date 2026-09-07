import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const SERVICES_DATA = [
  {
    id: '01',
    title: 'MECHANICAL',
    name: 'Mechanical Services',
    desc: 'Complete industrial maintenance, installation, and optimization for reliable engineering performance.',
    mainImage: '/images/mechanical_service.webp',
    smallImage: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&q=80',
    link: '/services',
  },
  {
    id: '02',
    title: 'ELECTRICAL',
    name: 'Electrical Services',
    desc: 'Professional diagnostics, drive servicing, and preventive maintenance for maximum uptime.',
    mainImage: '/images/electrical_service.jpeg',
    smallImage: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=400&q=80',
    link: '/services',
  },
  {
    id: '03',
    title: 'CONTROL PANEL',
    name: 'Control Panel Services',
    desc: 'Bespoke manufacturing and maintenance of industrial control panels for reliable automation.',
    mainImage: '/images/control_panel.png',
    smallImage: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&q=80',
    link: '/services',
  },
];

export default function ServicesOverview() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const panelsRef = useRef([]);
  const wrapperRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop: Cinematic Card Transition
      mm.add('(min-width: 1024px)', () => {
        const panels = panelsRef.current;
        
        // Setup initial states for stacking
        // First panel is visible at center. Subsequent panels are pushed offscreen to the right.
        gsap.set(panels, { 
          zIndex: (i) => i,
          xPercent: (i) => i === 0 ? 0 : 100 
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            pin: false, // Use CSS sticky instead of GSAP pin
            scrub: 1,
            start: 'top top',
            end: 'bottom bottom',
            snap: {
              snapTo: 'labels',
              duration: { min: 0.4, max: 0.8 },
              ease: 'power2.inOut',
            }
          },
        });

        tl.addLabel('panel0');

        // Transition 1: Panel 0 exits, Panel 1 enters
        tl.to(
          panels[0],
          { opacity: 0, filter: 'blur(8px)', xPercent: -15, ease: 'power2.inOut' },
          'panel0+=0.01' // Start immediately after label
        ).to(
          panels[1],
          { xPercent: 0, ease: 'power2.inOut' },
          '<'
        );

        tl.addLabel('panel1');

        // Transition 2: Panel 1 exits, Panel 2 enters
        tl.to(
          panels[1],
          { opacity: 0, filter: 'blur(8px)', xPercent: -15, ease: 'power2.inOut' },
          'panel1+=0.01'
        ).to(
          panels[2],
          { xPercent: 0, ease: 'power2.inOut' },
          '<'
        );

        tl.addLabel('panel2');
      });

      // Mobile/Tablet: Standard Vertical Reveal
      mm.add('(max-width: 1023px)', () => {
        // Reset properties that might have been applied by desktop
        gsap.set(panelsRef.current, { clearProps: 'all' });
        
        panelsRef.current.forEach((panel) => {
          gsap.fromTo(
            panel,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: panel,
                start: 'top 85%',
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
    <div ref={wrapperRef} className="expertise-wrapper">
      <section ref={sectionRef} className="editorial-expertise-section">
      {/* Absolute Header Overlay */}
      <div className="expertise-intro-heading">
        <h2 className="expertise-intro-title">
          Our <span style={{ color: '#00446F' }}>Services</span>
        </h2>
        <p className="expertise-intro-desc" style={{ marginTop: '16px', fontSize: '18px', color: '#555', maxWidth: '700px', margin: '16px auto 0', lineHeight: 1.6 }}>
          Comprehensive engineering solutions designed to power industrial performance with reliability and precision.
        </p>
      </div>

      <div ref={containerRef} className="editorial-scroll-container">
        {SERVICES_DATA.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => (panelsRef.current[index] = el)}
            className="editorial-panel"
          >
            <div className="editorial-inner">
              
              {/* Left Panel: Number & Small Preview */}
              <div className="editorial-left">
                <div className="service-number">{service.id}</div>
                <div className="small-image-wrap">
                  <img
                    src={service.smallImage}
                    alt={`${service.name} Preview`}
                    className="editorial-small-img"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Center Panel: Spine / Typography */}
              <div className="editorial-center">
                <h2 className={`vertical-title ${service.id === '03' ? 'vertical-title-long' : ''}`}>{service.title}</h2>
                <div className="center-content">
                  <div className="expertise-badge">TECHNICAL EXPERTISE</div>
                  <p className="editorial-desc">{service.desc}</p>
                  
                  <Link to={service.link} className="editorial-nav">
                    <span className="nav-text">Explore Service</span>
                    <div className="nav-arrows">
                      <ArrowRight size={18} strokeWidth={2} />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Right Panel: Asymmetric Large Image */}
              <div className="editorial-right">
                <div className="premium-image-wrap clip-style-0">
                  <img
                    src={service.mainImage}
                    alt={service.name}
                    className="editorial-main-img"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      <style>{`
        .expertise-wrapper {
          position: relative;
          width: 100%;
        }

        @media (min-width: 1024px) {
          .expertise-wrapper {
            height: 300vh; /* Allow enough scroll distance for 3 panels */
          }
          
          .editorial-expertise-section {
            position: sticky !important;
            top: 0;
            height: 100vh;
          }
        }

        .editorial-expertise-section {
          background: #FFFFFF;
          overflow: hidden;
          position: relative;
          -webkit-font-smoothing: antialiased;
        }

        .expertise-intro-heading {
          position: absolute;
          top: 60px;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          z-index: 50;
          width: 90%;
          max-width: 800px;
          pointer-events: none;
        }

        .expertise-intro-label {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.2em;
          color: #0067A4;
          margin-bottom: 16px;
        }

        .expertise-intro-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: clamp(32px, 4vw, 56px);
          line-height: 1.1;
          color: #000000;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .editorial-scroll-container {
          position: relative;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
        }

        .editorial-panel {
          position: relative;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 220px 4% 60px;
          background: #FFFFFF; /* Essential for overlaying the outgoing card */
          will-change: transform, opacity, filter;
        }

        /* Desktop specific absolute stacking */
        @media (min-width: 1024px) {
          .editorial-panel {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        .editorial-inner {
          width: 100%;
          max-width: 92vw;
          height: 100%;
          max-height: 100%;
          display: grid;
          grid-template-columns: 2.2fr 3.3fr 4.5fr;
          grid-template-rows: 1fr;
          gap: 60px;
          align-items: center;
        }

        /* --- Left Panel --- */
        .editorial-left {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 70%;
          border-right: 1px solid rgba(0,0,0,0.06);
          padding-right: 40px;
        }

        .service-number {
          font-family: var(--font-heading);
          font-weight: 300;
          font-size: clamp(80px, 9vw, 150px);
          line-height: 0.8;
          color: #00101F;
          letter-spacing: -0.05em;
        }

        .small-image-wrap {
          width: 100%;
          aspect-ratio: 4/5;
          border-radius: 16px;
          overflow: hidden;
          margin-top: auto;
          box-shadow: 0 20px 40px -10px rgba(0, 16, 31, 0.08);
        }

        .editorial-small-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          will-change: transform, opacity;
        }

        /* --- Center Panel --- */
        .editorial-center {
          display: flex;
          align-items: center;
          height: 100%;
          min-height: 0;
          gap: 50px;
        }

        .vertical-title {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: clamp(20px, 3.5vh, 48px); /* Unified size ensuring all text fits within container */
          line-height: 0.85;
          color: #00101F;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          margin: 0;
          white-space: nowrap;
          will-change: transform, opacity;
          max-height: 100%;
        }

        .vertical-title-long {
          font-size: clamp(16px, 2.6vh, 36px);
          letter-spacing: -0.04em;
        }

        .center-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 340px;
        }

        .expertise-badge {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 10px;
          letter-spacing: 0.2em;
          color: #0067A4;
          margin-bottom: 24px;
        }

        .editorial-desc {
          font-family: var(--font-body);
          font-size: 16px;
          line-height: 1.6;
          color: #4A5568;
          margin: 0 0 48px 0;
          font-weight: 400;
        }

        .editorial-nav {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          text-decoration: none;
          color: #00101F;
          group: hover;
        }

        .nav-text {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: color 0.3s ease;
        }

        .nav-arrows {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }

        .editorial-nav:hover .nav-arrows {
          background: #00101F;
          color: #FFFFFF;
          transform: translateX(4px);
        }

        .editorial-nav:hover .nav-text {
          color: #0067A4;
        }

        /* --- Right Panel --- */
        .editorial-right {
          height: 92%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-left: 30px;
        }

        .premium-image-wrap {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
          background: #F8FAFC;
          /* Base masking setup for smooth edges */
          -webkit-mask-image: -webkit-radial-gradient(white, black);
          transform: translateZ(0);
          box-shadow: 0 30px 60px -15px rgba(0,0,0,0.1);
        }

        /* Editorial Asymmetric Geometries */
        .clip-style-0 {
          clip-path: polygon(0 0, 100% 8%, 100% 100%, 6% 100%);
          border-radius: 32px 16px 24px 48px;
        }

        .editorial-main-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          will-change: transform;
        }

        /* --- Responsive Design --- */
        @media (max-width: 1380px) {
          .editorial-inner {
            grid-template-columns: 2fr 3fr 5fr;
            gap: 40px;
          }
          .vertical-title {
            font-size: clamp(40px, 5vw, 70px);
          }
          .vertical-title-long {
            font-size: clamp(30px, 4vw, 50px);
          }
        }

        @media (max-width: 1023px) {
          .expertise-intro-heading {
            position: relative;
            top: 0;
            left: 0;
            transform: none;
            text-align: left;
            margin: 0 auto 60px auto;
            max-width: 100%;
          }
          .editorial-expertise-section {
            padding: 80px 5%;
          }
          .editorial-scroll-container {
            width: 100%;
            height: auto;
            flex-direction: column;
            gap: 80px;
          }
          .editorial-panel {
            width: 100%;
            height: auto;
            padding: 0;
          }
          .editorial-inner {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto auto;
            gap: 30px;
          }
          .editorial-left {
            flex-direction: row;
            align-items: center;
            border-right: none;
            border-bottom: 1px solid rgba(0,0,0,0.06);
            padding-right: 0;
            padding-bottom: 20px;
            height: auto;
          }
          .small-image-wrap {
            display: none; /* Hide small image on mobile for cleaner layout */
          }
          .editorial-center {
            flex-direction: column;
            align-items: flex-start;
            height: auto;
            gap: 24px;
          }
          .vertical-title {
            writing-mode: horizontal-tb;
            transform: none;
            font-size: 42px;
          }
          .vertical-title-long {
            font-size: 36px;
          }
          .center-content {
            max-width: 100%;
          }
          .editorial-right {
            height: 400px;
            padding-left: 0;
          }
          .premium-image-wrap {
            border-radius: 24px;
            clip-path: none !important; /* Standardize on mobile */
          }
        }
      `}</style>
      </section>
    </div>
  );
}
