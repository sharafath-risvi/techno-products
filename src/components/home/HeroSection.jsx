import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowRight, ChevronDown, Shield, Award, Globe } from 'lucide-react';
import { stats } from '../../data/siteData';

function AnimatedCounter({ target, suffix = '', duration = 2 }) {
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const el = ref.current;
          if (!el) return;
          const end = parseInt(target, 10);
          const start = 0;
          const step = (end - start) / (duration * 60);
          let current = start;
          const timer = setInterval(() => {
            current += step;
            if (current >= end) {
              current = end;
              clearInterval(timer);
            }
            el.textContent = Math.floor(current).toLocaleString();
          }, 1000 / 60);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span>
      <span ref={ref}>0</span>
      <span style={{ color: '#E25A6D' }}>{suffix}</span>
    </span>
  );
}

export default function HeroSection() {
  const bgRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // Subtle parallax on scroll
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
  };

  return (
    <section className="hero-section" aria-label="Hero section" id="hero">
      {/* Background */}
      <div className="hero-bg" ref={bgRef}>
        {/* Industrial SVG Pattern */}
        <div className="hero-grid-pattern" />
        {/* Background image overlay using Unsplash */}
        <img
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&h=1080&fit=crop&q=80"
          alt=""
          className="hero-bg-image"
          aria-hidden="true"
          loading="eager"
        />
      </div>
      <div className="hero-overlay" aria-hidden="true" />

      {/* Animated blueprint grid elements */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, overflow: 'hidden',
          pointerEvents: 'none', zIndex: 2,
        }}
      >
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: `${120 + i * 60}px`,
              height: `${120 + i * 60}px`,
              border: '1px solid rgba(255,255,255,0.04)',
              borderRadius: '50%',
              right: `${10 + i * 8}%`,
              top: '50%',
              transform: 'translateY(-50%)',
              animation: `pulse ${3 + i}s infinite ease-in-out ${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tag */}
          <motion.div variants={itemVariants}>
            <div className="hero-tag">
              <Shield size={11} />
              Authorized Industrial Partner · Est. 1999
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1 variants={itemVariants} className="hero-title">
            One-Stop Sourcing &amp;{' '}
            <span className="accent">Solution Partner</span>
            {' '}for All Industrial Products
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="hero-subtitle">
            Techno Products Development Pvt. Ltd. is Tamil Nadu's premier industrial distribution and engineering solutions company. Authorized distributor for Danfoss, Innomotics, Schneider Electric &amp; Motovario — serving 5,000+ industries for 26+ years.
          </motion.p>

          {/* Actions */}
          <motion.div variants={itemVariants} className="hero-actions">
            <Link to="/products" className="btn-primary">
              Explore Products <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Get Engineering Support
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={itemVariants}
            style={{ display: 'flex', gap: 24, marginTop: 44, flexWrap: 'wrap' }}
          >
            {[
              { icon: Shield, text: 'Danfoss DrivePro® Partner' },
              { icon: Award, text: 'Innomotics SIMOLOG Partner' },
              { icon: Globe, text: 'Schneider Electric Authorized' },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  color: 'rgba(255,255,255,0.65)', fontSize: 12,
                  fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: '0.5px',
                }}
              >
                <Icon size={13} style={{ color: '#F87F8E', flexShrink: 0 }} />
                {text}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: 'absolute', bottom: 120, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
          color: 'rgba(255,255,255,0.4)', cursor: 'pointer', zIndex: 10,
        }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        aria-label="Scroll down"
      >
        <span style={{ fontSize: 10, fontFamily: 'var(--font-heading)', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>

      {/* Stats Bar */}
      <div className="hero-stats" role="region" aria-label="Company statistics">
        <div className="container">
          <div className="hero-stats-inner">
            {stats.map((stat) => (
              <div key={stat.label} className="hero-stat-item">
                <div className="hero-stat-number">
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                </div>
                <div className="hero-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: translateY(-50%) scale(1); }
          50% { opacity: 0.8; transform: translateY(-50%) scale(1.05); }
        }
      `}</style>
    </section>
  );
}
