import { motion } from 'framer-motion';
import SectionTag, { RevealText, StaggerContainer, StaggerItem } from '../ui/RevealText';
import { brandPartners } from '../../data/siteData';
import { Award, CheckCircle2 } from 'lucide-react';

const PARTNER_IMAGES = [
  'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=560&h=320&fit=crop&q=80',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=560&h=320&fit=crop&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=560&h=320&fit=crop&q=80',
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=560&h=320&fit=crop&q=80',
];

export default function BrandPartners() {
  return (
    <section style={{
      padding: '140px 0',
      background: '#fff',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle background */}
      <div style={{
        position: 'absolute', bottom: 0, right: 0,
        width: '40%', height: '50%',
        background: 'linear-gradient(225deg, #D9EAF5 0%, transparent 65%)',
        zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 72px' }}>
          <RevealText>
            <SectionTag>Authorised Partnerships</SectionTag>
            <h2 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 700,
              fontSize: 'clamp(28px, 3.5vw, 52px)',
              lineHeight: 1.05, letterSpacing: '-0.025em',
              color: '#00101F', marginBottom: 20,
            }}>
              Global Brands.<br />
              <span style={{ color: '#0067A4' }}>Official Authorisation.</span>
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 16,
              color: '#666', lineHeight: 1.75,
            }}>
              Every product we supply carries manufacturer certification, full warranty, and complete technical support — backed by official partnership agreements with world leaders in industrial engineering.
            </p>
          </RevealText>
        </div>

        {/* Infinite Marquee */}
        <div className="marquee-container">
          <div className="marquee-track">
            {[...brandPartners, ...brandPartners, ...brandPartners, ...brandPartners].map((partner, idx) => {
              const i = idx % brandPartners.length;
              return (
                <div key={`${partner.name}-${idx}`} className="brand-card-wrapper">
                  <motion.div
                    whileHover={{ y: -5, boxShadow: '0 24px 64px rgba(0,103,164,0.12)' }}
                    transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      background: '#fff',
                      borderRadius: 20,
                      overflow: 'hidden',
                      border: '1px solid rgba(0,103,164,0.1)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                      display: 'flex', flexDirection: 'column',
                      height: '100%',
                    }}
                  >
                    {/* Image */}
                    <div style={{ position: 'relative', height: 180, overflow: 'hidden' }}>
                      <motion.img
                        src={PARTNER_IMAGES[i]}
                        alt={partner.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: 0.6 }}
                        loading="lazy"
                      />
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(to right, rgba(0,16,31,0.75) 0%, rgba(0,16,31,0.2) 100%)',
                      }} />
                      <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
                        <div style={{
                          fontFamily: 'var(--font-heading)', fontWeight: 700,
                          fontSize: 22, color: '#fff', letterSpacing: '-0.02em', marginBottom: 2,
                        }}>
                          {partner.name}
                        </div>
                        <div style={{
                          fontFamily: 'var(--font-body)', fontSize: 12,
                          color: 'rgba(255,255,255,0.65)',
                        }}>
                          {partner.fullName}
                        </div>
                      </div>
                      {/* Authorised chip */}
                      <div style={{
                        position: 'absolute', top: 14, right: 14,
                        background: '#0067A4',
                        color: '#fff', padding: '4px 10px',
                        borderRadius: 20, fontFamily: 'var(--font-heading)',
                        fontWeight: 700, fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase',
                      }}>
                        Authorised
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{ padding: '24px 24px 28px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <p style={{
                        fontFamily: 'var(--font-body)', fontSize: 14,
                        color: '#666', lineHeight: 1.75,
                        marginBottom: 20, flexGrow: 1,
                      }}>
                        {partner.description}
                      </p>

                      {/* Certification badge */}
                      <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        background: '#F5F5F5',
                        borderRadius: 30, padding: '8px 16px',
                        border: '1px solid rgba(0,103,164,0.1)',
                      }}>
                        <Award size={13} color="#0067A4" />
                        <span style={{
                          fontFamily: 'var(--font-heading)', fontWeight: 700,
                          fontSize: 11, letterSpacing: '0.04em', color: '#0067A4',
                        }}>
                          {partner.certification}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Authorization assurance note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            marginTop: 40,
            padding: '20px 28px',
            background: '#F8FBFF',
            borderRadius: 14,
            border: '1px solid rgba(0,103,164,0.1)',
            display: 'flex', alignItems: 'center', gap: 14,
            flexWrap: 'wrap',
          }}
        >
          <CheckCircle2 size={18} color="#0067A4" style={{ flexShrink: 0 }} />
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 14,
            color: '#00446F', lineHeight: 1.6,
          }}>
            <strong>All products supplied by TECHNO are 100% genuine</strong> — sourced directly from authorised manufacturing channels with full traceability, warranty, and manufacturer technical support.
          </p>
        </motion.div>
      </div>

      <style>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          padding: 20px 0;
        }
        .marquee-container::before, .marquee-container::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 150px;
          z-index: 2;
          pointer-events: none;
        }
        .marquee-container::before {
          left: 0;
          background: linear-gradient(to right, #ffffff, transparent);
        }
        .marquee-container::after {
          right: 0;
          background: linear-gradient(to left, #ffffff, transparent);
        }
        .marquee-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }
        .brand-card-wrapper {
          width: 480px;
          flex-shrink: 0;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }

        @media (max-width: 768px) {
          .brand-card-wrapper {
            width: 320px;
          }
          .marquee-container::before, .marquee-container::after {
            width: 60px;
          }
        }
      `}</style>
    </section>
  );
}
