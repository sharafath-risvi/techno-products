import { useState } from 'react';
import SectionTag from '../ui/RevealText';

const reasons = [
  {
    number: '01',
    title: 'Trusted Industrial Expertise',
    desc: 'Over 26 years of engineering excellence delivering reliable industrial transmission solutions. We optimize processes for maximum uptime.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
  },
  {
    number: '02',
    title: 'Authorized Global Brands',
    desc: 'Official partner for world-renowned manufacturers. We supply genuine products with full manufacturer warranty and technical expertise.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80',
  },
  {
    number: '03',
    title: 'Expert Engineering Support',
    desc: 'Dedicated mechanical, electrical, and control panel specialists for every project, from installation to complete system overhauls.',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&q=80',
  },
  {
    number: '04',
    title: 'Fast Product Availability',
    desc: 'Large inventory and strong logistics ensure faster deliveries across India, minimizing your critical operational downtime.',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&q=80',
  },
  {
    number: '05',
    title: 'Customer-Centric Solutions',
    desc: 'Tailored engineering recommendations based on your industry\'s specific operational requirements and environmental challenges.',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80',
  },
  {
    number: '06',
    title: 'Reliable After-Sales Service',
    desc: 'Comprehensive maintenance, technical support, and long-term customer relationships built on trust and consistent performance.',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&q=80',
  },
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="why-choose-section">
      <div className="container">
        
        {/* Static Header Elements */}
        <div className="why-header-section">
          <SectionTag>Why Choose Us</SectionTag>
          <h2 className="why-heading">The <span className="text-techno-blue">TECHNO</span> Advantage</h2>
          <p className="why-intro-desc">
            We don't just supply products; we engineer complete industrial solutions. 
            Discover why leading industries trust Techno Products for their most critical operations.
          </p>
        </div>

        {/* Horizontal Interactive Stack */}
        <div className="horizontal-accordion-container" onMouseLeave={() => setActiveIndex(0)}>
          {reasons.map((item, index) => {
            const isActive = index === activeIndex;
            // Descending z-index so the left-most card is on top of the one to its right.
            const cardZIndex = isActive ? 20 : reasons.length - index;

            return (
              <div
                key={item.number}
                className={`horizontal-card ${isActive ? 'active' : ''}`}
                onMouseEnter={() => setActiveIndex(index)}
                onTouchStart={() => setActiveIndex(index)}
                style={{ zIndex: cardZIndex }}
              >
                {/* Background Image: Always present, covers the entire card area */}
                <div className="card-img-wrapper">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="card-bg-img" 
                  />
                </div>
                
                {/* Dark overlay for inactive strips to make text readable */}
                <div className="card-img-overlay" />

                {/* INACTIVE STATE: Vertical text sliver */}
                <div className="card-inactive-content">
                  <span className="card-inactive-title">{item.title}</span>
                  <span className="card-inactive-number">{item.number}</span>
                </div>

                {/* ACTIVE STATE: Complete Left/Right Slide Content */}
                <div className="card-active-text-panel">
                  <div className="card-active-inner">
                    <div className="card-active-number">{item.number}</div>
                    <h3 className="card-active-title">{item.title}</h3>
                    <p className="card-active-desc">{item.desc}</p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .why-choose-section {
          padding: 40px 0 120px 0;
          background: #FFFFFF;
          overflow: hidden;
        }

        /* --- Static Header --- */
        .why-header-section {
          text-align: center;
          margin-bottom: 64px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .text-techno-blue {
          color: #00446F;
        }

        .why-heading {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: clamp(32px, 4vw, 56px);
          line-height: 1.1;
          color: #000000;
          letter-spacing: -0.02em;
          margin-top: 16px;
          margin-bottom: 24px;
        }

        .why-intro-desc {
          font-family: var(--font-body);
          font-size: 18px;
          line-height: 1.6;
          color: #555555;
        }

        /* --- Horizontal Accordion Stack --- */
        .horizontal-accordion-container {
          display: flex;
          flex-direction: row;
          height: 600px;
          max-width: 1300px;
          margin: 0 auto;
        }

        .horizontal-card {
          flex: 0 0 100px; /* Width of the inactive vertical layer */
          height: 100%;
          position: relative;
          border-radius: 32px;
          overflow: hidden;
          margin-left: -32px; /* Heavy overlap creating the stacked deck look */
          box-shadow: -8px 0 24px rgba(0,0,0,0.12); /* Shadow casts to the left over previous card */
          cursor: pointer;
          
          /* Premium Ease-Out-Quint animation for extremely fluid flex expansion */
          transition: flex 0.7s cubic-bezier(0.22, 1, 0.36, 1), 
                      box-shadow 0.7s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: flex;
          background: #00101F;
        }

        .horizontal-card:first-child {
          margin-left: 0;
        }

        .horizontal-card.active {
          flex: 1 1 0%; /* Expands to fill all remaining horizontal width */
          box-shadow: -16px 0 48px rgba(0,0,0,0.15), 16px 0 48px rgba(0,0,0,0.1);
          cursor: default;
        }

        /* Image sits in the background of the card */
        .card-img-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .card-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.1);
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }

        .horizontal-card.active .card-bg-img {
          transform: scale(1);
          object-position: right center; /* Keep the focal point to the right */
        }

        .horizontal-card.active:hover .card-bg-img {
          transform: scale(1.02); /* Subtle zoom */
        }

        .card-img-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 16, 31, 0.5);
          transition: background 0.7s cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: none;
        }

        .horizontal-card.active .card-img-overlay {
          background: rgba(0, 16, 31, 0); /* Clears totally when expanded */
        }

        /* --- Inactive Vertical Sliver Content --- */
        .card-inactive-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          padding: 64px 0;
          /* Push to the right to visually center it in the un-overlapped 68px area */
          left: 32px; 
          opacity: 1;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .horizontal-card:first-child .card-inactive-content {
          left: 0;
        }

        .horizontal-card.active .card-inactive-content {
          opacity: 0;
          transition-duration: 0.2s; /* Fades out fast when activated */
        }

        .card-inactive-number {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 32px;
          color: #FFFFFF;
        }

        .card-inactive-title {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 18px;
          color: #FFFFFF;
          margin-bottom: 32px;
          white-space: nowrap;
        }

        /* --- Active Complete Slide (Left Side Text) --- */
        .card-active-text-panel {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 45%; /* Creates the left text / right image split! */
          background: #FFFFFF;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 64px;
          
          /* Smooth fade for the background panel */
          opacity: 0;
          transition: opacity 0.6s ease;
          pointer-events: none;
        }

        .horizontal-card.active .card-active-text-panel {
          opacity: 1;
          pointer-events: auto;
          transition-delay: 0.1s;
        }

        .card-active-inner {
          display: flex;
          flex-direction: column;
        }

        /* Staggered slide-up animations for inner text */
        .card-active-number {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 72px;
          color: #D32F2F;
          line-height: 1;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
          
          opacity: 0;
          transform: translateY(15px);
          transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0s;
        }

        .card-active-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 32px;
          color: #00101F;
          line-height: 1.2;
          margin-bottom: 16px;
          
          opacity: 0;
          transform: translateY(15px);
          transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0s;
        }

        .card-active-desc {
          font-family: var(--font-body);
          font-size: 17px;
          color: #555555;
          line-height: 1.7;
          max-width: 95%;
          
          opacity: 0;
          transform: translateY(15px);
          transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0s;
        }

        /* Trigger staggered transitions on active state */
        .horizontal-card.active .card-active-number {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s;
        }

        .horizontal-card.active .card-active-title {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.3s;
        }

        .horizontal-card.active .card-active-desc {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.4s;
        }

        /* --- Responsive --- */
        @media (max-width: 1024px) {
          .card-active-text-panel { width: 55%; padding: 40px; }
          .card-active-number { font-size: 56px; }
          .card-active-title { font-size: 26px; }
        }

        @media (max-width: 768px) {
          .horizontal-accordion-container { 
            flex-direction: column; 
            height: auto; 
            gap: 24px; 
          }
          .horizontal-card { 
            flex: auto; 
            margin-left: 0; 
            height: 480px; 
            border-radius: 24px; 
            box-shadow: 0 16px 40px rgba(0,0,0,0.06); 
            cursor: default;
          }
          .card-inactive-content { display: none; }
          
          .horizontal-card.active { box-shadow: 0 16px 40px rgba(0,0,0,0.06); }
          
          .card-active-text-panel {
            width: 100%;
            height: auto;
            bottom: 0;
            top: auto;
            opacity: 1;
            padding: 32px;
            background: rgba(255,255,255,0.95);
            backdrop-filter: blur(10px);
          }
          
          .card-active-number { font-size: 40px; margin-bottom: 12px; }
          .card-active-title { font-size: 24px; }
        }
      `}</style>
    </section>
  );
}
