import { motion } from 'framer-motion';
import SectionTag, { RevealText } from '../components/ui/RevealText';
import AboutHero from '../components/about/AboutHero';
import FullOurStory from '../components/about/FullOurStory';
import MissionVision from '../components/about/MissionVision';
import CTASection from '../components/home/CTASection';

import {
  ShieldCheck, Users, Lightbulb, Gem, Clock, Handshake,
} from 'lucide-react';

/* ─── Core Values data — premium editorial ─────────────────────────────── */
const coreValues = [
  {
    Icon: ShieldCheck,
    title: 'Quality Excellence',
    desc: 'Every product we supply and every solution we deliver is held to the highest engineering standard — because our customers\' operations depend on zero compromise.',
  },
  {
    Icon: Users,
    title: 'Customer Commitment',
    desc: 'We treat every customer relationship as a long-term partnership, investing in understanding their operational goals and consistently delivering beyond expectations.',
  },
  {
    Icon: Lightbulb,
    title: 'Innovation',
    desc: 'We continuously adopt emerging industrial technologies and engineering methodologies to keep our customers competitive in a rapidly evolving manufacturing landscape.',
  },
  {
    Icon: Gem,
    title: 'Engineering Integrity',
    desc: 'We give honest, unbiased technical recommendations — even when it means advising against a costlier option — because our credibility is our most valuable asset.',
  },
  {
    Icon: Clock,
    title: 'Reliability',
    desc: 'From on-time delivery to 24-hour emergency support, our customers can count on us to be present — precisely when they need us most.',
  },
  {
    Icon: Handshake,
    title: 'Long-Term Partnerships',
    desc: 'We build enduring relationships by consistently delivering measurable value — not just supplying products — and standing beside our customers through every challenge.',
  },
];

/* Engineering-grid SVG background — blueprint aesthetic */
const GRID_SVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%230067A4' stroke-opacity='0.04' stroke-width='1'/%3E%3C/svg%3E`;

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] },
  }),
};



export default function OurCompanyPage() {
  return (
    <main>
      {/* 1. Cinematic Hero — exact same AboutHero component */}
      <AboutHero />

      {/* 2. Our Story — exact same FullOurStory component */}
      <FullOurStory />

      {/* 3. Mission & Vision — exact same MissionVision component */}
      <MissionVision />

      {/* 4. Core Values — premium editorial redesign */}
      <section style={{
        padding: '60px 0 120px 0',
        background: '#FAFAFA',
        position: 'relative',
        overflow: 'hidden',
      }}>

        {/* Engineering-grid blueprint texture */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("${GRID_SVG}")`,
          backgroundSize: '60px 60px',
          backgroundRepeat: 'repeat',
          pointerEvents: 'none',
          zIndex: 0,
        }} />

        {/* Soft radial vignette so grid fades toward edges */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, #FAFAFA 100%)',
          pointerEvents: 'none',
          zIndex: 0,
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          {/* Section Header — unchanged heading & description */}
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <RevealText>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
                <SectionTag>CORE VALUES</SectionTag>
              </div>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: 'clamp(32px, 4vw, 48px)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#000000',
                marginBottom: 20,
              }}>
                What Drives Everything{' '}
                <span style={{ color: '#00446F' }}>We Do</span>
              </h2>
            </RevealText>
            <RevealText delay={0.2}>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(16px, 1.5vw, 18px)',
                color: '#666',
                lineHeight: 1.7,
                maxWidth: 700,
                margin: '0 auto',
              }}>
                These six principles are not aspirations — they are the operating beliefs that shape every decision, every recommendation, and every interaction at Techno Products.
              </p>
            </RevealText>
          </div>

          {/* Premium Editorial Card Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 24,
            }}
            className="values-grid-company"
          >
            {coreValues.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-8%' }}
                className="cv-card"
                style={{
                  background: '#FFFFFF',
                  borderRadius: 20,
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  padding: '44px 40px',
                  boxShadow: '0 2px 16px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  position: 'relative',
                  overflow: 'hidden',
                  transition:
                    'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 24px 48px -12px rgba(0, 68, 111, 0.14)';
                  e.currentTarget.style.borderColor = 'rgba(0, 103, 164, 0.28)';
                  e.currentTarget.querySelector('.cv-icon-wrap').style.background = '#00446F';
                  e.currentTarget.querySelector('.cv-icon-wrap').style.borderColor = '#00446F';
                  e.currentTarget.querySelector('.cv-icon').style.color = '#FFFFFF';
                  e.currentTarget.querySelector('.cv-icon').style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 16px rgba(0, 0, 0, 0.04)';
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.06)';
                  e.currentTarget.querySelector('.cv-icon-wrap').style.background = '#F0F5FA';
                  e.currentTarget.querySelector('.cv-icon-wrap').style.borderColor = 'rgba(0,103,164,0.12)';
                  e.currentTarget.querySelector('.cv-icon').style.color = '#0067A4';
                  e.currentTarget.querySelector('.cv-icon').style.transform = 'scale(1)';
                }}
              >
                {/* Large ghost ordinal — premium editorial number */}
                <div style={{
                  position: 'absolute',
                  top: 16,
                  right: 24,
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: 72,
                  lineHeight: 1,
                  color: 'rgba(0, 68, 111, 0.05)',
                  letterSpacing: '-0.04em',
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Icon tray */}
                <div
                  className="cv-icon-wrap"
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: '#F0F5FA',
                    border: '1px solid rgba(0,103,164,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 28,
                    flexShrink: 0,
                    transition: 'background 0.3s ease, border-color 0.3s ease',
                  }}
                >
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                    className="cv-icon"
                    style={{
                      color: '#0067A4',
                      transition: 'color 0.3s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1)',
                    }}
                  />
                </div>

                {/* Small ordinal label + accent rule */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 14,
                }}>
                  <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: 11,
                    letterSpacing: '0.16em',
                    color: '#0067A4',
                    textTransform: 'uppercase',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div style={{
                    width: 28,
                    height: 1,
                    background: 'rgba(0,103,164,0.35)',
                  }} />
                </div>

                {/* Value title */}
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: 19,
                  color: '#000000',
                  margin: '0 0 14px 0',
                  lineHeight: 1.2,
                  letterSpacing: '-0.01em',
                }}>
                  {title}
                </h3>

                {/* Description */}
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 15,
                  color: '#555555',
                  lineHeight: 1.8,
                  margin: 0,
                }}>
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            .values-grid-company { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 640px) {
            .values-grid-company { grid-template-columns: 1fr !important; }
            .cv-card { padding: 36px 28px !important; }
          }
        `}</style>
      </section>


      {/* 5. CTA — exact same CTASection component with industrial background already built-in */}
      <CTASection
        label="LET'S BUILD TOGETHER"
        heading="Partner With Techno Products"
        gradientHeading="For Your Next Engineering Project"
        description={null}
        primaryBtnText="Explore Products"
        primaryBtnLink="/products"
        secondaryBtnText="Contact Our Experts"
        secondaryBtnLink="/contact"
      />
    </main>
  );
}
