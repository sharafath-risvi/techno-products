import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { aboutContent } from '../../data/siteData';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.15 } },
  };

  return (
    <section className="about-section" aria-labelledby="about-heading" ref={ref}>
      <div className="container">
        <div className="about-grid">
          {/* Image Column */}
          <motion.div
            className="about-image-wrapper"
            variants={leftVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&h=560&fit=crop&q=80"
              alt="Industrial engineer working on automation equipment"
              className="about-image-main"
              loading="lazy"
            />

            {/* Secondary image */}
            <img
              src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=300&h=240&fit=crop&q=80"
              alt="Electric motor manufacturing"
              className="about-image-accent"
              loading="lazy"
            />

            {/* Experience Badge */}
            <div className="about-exp-badge">
              <div className="about-exp-number">26</div>
              <div className="about-exp-text">Years of<br />Excellence</div>
            </div>

            {/* Floating certification badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              style={{
                position: 'absolute', bottom: 30, left: 20,
                background: 'white', boxShadow: '0 12px 40px rgba(0,68,111,0.15)',
                padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 12,
                maxWidth: 220,
              }}
            >
              <div style={{ width: 36, height: 36, background: '#D9EAF5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <CheckCircle size={18} color="#0067A4" />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, color: '#00446F' }}>
                  Danfoss DrivePro®
                </div>
                <div style={{ fontSize: 11, color: '#666', marginTop: 2 }}>
                  Authorized Partner
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="section-tag">About Techno Products</div>
            <h2 className="section-title" id="about-heading" style={{ marginBottom: 24 }}>
              {aboutContent.headline}
            </h2>

            {aboutContent.description.map((para, i) => (
              <p key={i} className="section-subtitle" style={{ marginBottom: 16, maxWidth: 'none' }}>
                {para}
              </p>
            ))}

            {/* Pillars */}
            <div className="about-pillars">
              {aboutContent.pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  className="about-pillar"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                >
                  <div className="about-pillar-title">{pillar.title}</div>
                  <div className="about-pillar-text">{pillar.text}</div>
                </motion.div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 16, marginTop: 36, flexWrap: 'wrap' }}>
              <Link to="/about" className="btn-primary">
                Our Story <ArrowRight size={16} />
              </Link>
              <Link to="/about#certifications" className="btn-outline-blue">
                View Certifications
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
