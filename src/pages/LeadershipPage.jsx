import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import LeadershipStory from '../components/about/LeadershipStory';
import MeetOurTeam from '../components/about/MeetOurTeam';
import CTASection from '../components/home/CTASection';

/* ── Image assets — premium industrial leadership photography ───────────── */
const IMG_MAIN =
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=1400&fit=crop&q=85';
const IMG_SECONDARY =
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop&q=85';
const IMG_ACCENT =
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80';

/* Engineering-grid SVG — same as Core Values section */
const GRID_SVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%230067A4' stroke-opacity='0.045' stroke-width='1'/%3E%3C/svg%3E`;

/* Stagger ease */
const EASE = [0.16, 1, 0.3, 1];

/* ─── Leadership Hero — Premium Editorial ────────────────────────────────── */
function LeadershipHero() {
  const heroRef = useRef(null);

  /* Subtle parallax on images when user scrolls down */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 60, damping: 18, mass: 0.5 });
  const imgMainY    = useTransform(smoothScroll, [0, 1], ['0%', '14%']);
  const imgSecY     = useTransform(smoothScroll, [0, 1], ['0%', '-8%']);
  const contentY    = useTransform(smoothScroll, [0, 1], ['0%', '10%']);
  const contentOpacity = useTransform(smoothScroll, [0, 0.55], [1, 0]);

  return (
    <section
      ref={heroRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#F8FAFC',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'stretch',
        paddingTop: 84, /* navbar offset */
      }}
    >

      {/* ── 1. Engineering-grid blueprint texture ── */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url("${GRID_SVG}")`,
        backgroundSize: '60px 60px',
        backgroundRepeat: 'repeat',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* ── 2. Soft brand-blue diagonal gradient wash ── */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(0,68,111,0.06) 0%, transparent 55%, rgba(0,103,164,0.04) 100%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* ── 3. Thin top accent bar ── */}
      <div style={{
        position: 'absolute', top: 84, left: 0, right: 0,
        height: 3,
        background: 'linear-gradient(to right, transparent 0%, #0067A4 35%, #00446F 65%, transparent 100%)',
        opacity: 0.5, zIndex: 1,
      }} />

      {/* ── 4. Large editorial watermark — ghost brand text ── */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, ease: EASE, delay: 0.1 }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '-2%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none', zIndex: 0,
          userSelect: 'none',
        }}
      >
        <div style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 800,
          fontSize: 'clamp(100px, 14vw, 200px)',
          lineHeight: 0.85,
          letterSpacing: '-0.04em',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(0,68,111,0.07)',
          whiteSpace: 'nowrap',
        }}>
          LEADERSHIP
        </div>
      </motion.div>

      {/* ── 5. Floating decorative geometric ring ── */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: EASE, delay: 0.4 }}
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '8%',
          width: 200,
          height: 200,
          borderRadius: '50%',
          border: '1px solid rgba(0,103,164,0.12)',
          pointerEvents: 'none', zIndex: 0,
        }}
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: EASE, delay: 0.5 }}
        style={{
          position: 'absolute',
          bottom: '11%',
          left: '8.7%',
          width: 160,
          height: 160,
          borderRadius: '50%',
          border: '1px solid rgba(0,103,164,0.07)',
          pointerEvents: 'none', zIndex: 0,
        }}
      />

      {/* ── 6. Thin vertical divider line — editorial detail ── */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.6 }}
        style={{
          position: 'absolute',
          top: '18%',
          bottom: '18%',
          left: '50%',
          width: 1,
          background: 'linear-gradient(to bottom, transparent, rgba(0,103,164,0.15) 30%, rgba(0,103,164,0.15) 70%, transparent)',
          transformOrigin: 'top',
          pointerEvents: 'none', zIndex: 1,
        }}
      />

      {/* ── 7. Main two-column layout ── */}
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '5%',
        alignItems: 'center',
        paddingTop: 80,
        paddingBottom: 100,
        position: 'relative',
        zIndex: 2,
        width: '100%',
      }}>

        {/* ─── LEFT: Editorial text block ─── */}
        <motion.div style={{ y: contentY, opacity: contentOpacity, willChange: 'transform, opacity' }}>

          {/* Eyebrow label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            style={{
              display: 'inline-flex', alignItems: 'center',
              marginBottom: 32,
            }}
          >
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700, fontSize: 11,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: '#0067A4',
            }}>
              About Our Leadership
            </span>
          </motion.div>

          {/* Main H1 — editorial large */}
          <div style={{ overflow: 'hidden', marginBottom: 12 }}>
            <motion.h1
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: 'clamp(40px, 5.5vw, 80px)',
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                color: '#00101F',
                margin: 0,
              }}
            >
              The Minds
            </motion.h1>
          </div>
          <div style={{ overflow: 'hidden', marginBottom: 36 }}>
            <motion.h1
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: 'clamp(40px, 5.5vw, 80px)',
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                color: '#00446F',   /* brand blue for second line */
                margin: 0,
              }}
            >
              Behind the Vision
            </motion.h1>
          </div>

          {/* Supporting description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(16px, 1.3vw, 18px)',
              color: '#555',
              lineHeight: 1.8,
              maxWidth: 520,
              marginBottom: 48,
            }}
          >
            Over 26 years, the leadership team at Techno Products has built one of South India's most trusted industrial engineering partnerships — driven by technical conviction, customer-first values, and an uncompromising commitment to engineering excellence.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.65 }}
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}
          >
            <Link
              to="/contact"
              className="btn btn-primary"
              style={{ padding: '14px 32px', fontSize: 14, letterSpacing: '0.06em' }}
            >
              Talk to Our Team <ArrowRight size={16} />
            </Link>
            <Link
              to="/careers"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700, fontSize: 14,
                color: '#00446F',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                display: 'flex', alignItems: 'center', gap: 6,
                paddingBlock: 14,
                borderBottom: '1px solid rgba(0,68,111,0.25)',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#D71B32'; e.currentTarget.style.borderColor = 'rgba(215,27,50,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#00446F'; e.currentTarget.style.borderColor = 'rgba(0,68,111,0.25)'; }}
            >
              View Careers <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Stat strip — glass panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.8 }}
            style={{
              marginTop: 56,
              display: 'flex',
              gap: 0,
              background: 'rgba(255,255,255,0.75)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(0,103,164,0.1)',
              borderRadius: 16,
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,68,111,0.06)',
              maxWidth: 480,
            }}
          >
            {[
              { val: '26+', label: 'Years of Leadership' },
              { val: '5,000+', label: 'Clients Served' },
              { val: '40+', label: 'Engineering Staff' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  flex: 1,
                  padding: '20px 20px',
                  textAlign: 'center',
                  borderRight: i < 2 ? '1px solid rgba(0,103,164,0.1)' : 'none',
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: 'clamp(20px, 2vw, 28px)',
                  color: '#00446F',
                  lineHeight: 1,
                  marginBottom: 4,
                }}>
                  {stat.val}
                </div>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 11,
                  color: '#888',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ─── RIGHT: Layered image composition ─── */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end' }}>

          {/* Tall primary image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.3 }}
            style={{
              position: 'relative',
              width: '68%',
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: '0 40px 80px -20px rgba(0,16,31,0.15)',
              aspectRatio: '3/4',
            }}
          >
            <motion.div style={{ y: imgMainY, height: '115%', marginTop: '-7.5%', willChange: 'transform' }}>
              <img
                src={IMG_MAIN}
                alt="Techno Products leadership team"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </motion.div>
            {/* Subtle bottom gradient so it blends into the glass bar below */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(0,16,31,0.18) 0%, transparent 40%)',
              pointerEvents: 'none',
            }} />
          </motion.div>

          {/* Floating secondary image — offset top-left */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.0, ease: EASE, delay: 0.55 }}
            style={{
              position: 'absolute',
              top: '6%',
              left: 0,
              width: '46%',
              borderRadius: 18,
              overflow: 'hidden',
              boxShadow: '0 24px 48px -10px rgba(0,16,31,0.12)',
              border: '3px solid #F8FAFC',
              aspectRatio: '4/3',
            }}
          >
            <motion.div style={{ y: imgSecY, height: '115%', marginTop: '-7.5%', willChange: 'transform' }}>
              <img
                src={IMG_SECONDARY}
                alt="Engineering leadership discussion"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </motion.div>
          </motion.div>

          {/* Brand blue accent strip behind primary image */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.2 }}
            style={{
              position: 'absolute',
              top: '8%',
              right: '-16px',
              width: 4,
              height: '55%',
              background: 'linear-gradient(to bottom, #0067A4, #00446F)',
              borderRadius: 4,
              transformOrigin: 'top',
            }}
          />

          {/* Glass stat card — floating over primary image */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.9 }}
            style={{
              position: 'absolute',
              bottom: '12%',
              left: '2%',
              background: 'rgba(255,255,255,0.88)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(0,103,164,0.12)',
              borderRadius: 16,
              padding: '20px 24px',
              boxShadow: '0 16px 40px rgba(0,68,111,0.1)',
              minWidth: 160,
            }}
          >
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: 32,
              color: '#00446F',
              lineHeight: 1,
              marginBottom: 4,
            }}>
              1999
            </div>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: 12,
              color: '#888',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}>
              Founded
            </div>
            <div style={{
              marginTop: 12,
              display: 'flex',
              gap: 4,
            }}>
              {[...Array(5)].map((_, j) => (
                <div key={j} style={{
                  width: 20, height: 3, borderRadius: 2,
                  background: j < 4 ? '#0067A4' : 'rgba(0,103,164,0.2)',
                }} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── 8. Responsive overrides ── */}
      <style>{`
        @media (max-width: 900px) {
          .lh-layout { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}


/* ─── Leadership Page ─────────────────────────────────────────────────────── */
export default function LeadershipPage() {
  return (
    <main>
      {/* 1. Premium Leadership Hero */}
      <LeadershipHero />

      {/* 2. Meet Our Founder — existing LeadershipStory component, untouched */}
      <LeadershipStory />

      {/* 3. Our Team — existing MeetOurTeam component, untouched */}
      <MeetOurTeam />

      {/* 4. CTA — existing CTASection with industrial background built-in */}
      <CTASection
        label="JOIN OUR JOURNEY"
        heading="Build the Future of Industry"
        gradientHeading="With Techno Products"
        description={null}
        primaryBtnText="Explore Career Opportunities"
        primaryBtnLink="/careers"
        secondaryBtnText="Get in Touch"
        secondaryBtnLink="/contact"
      />
    </main>
  );
}
