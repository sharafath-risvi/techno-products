import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Factory, Car, Package, FileText, Layers, FlaskConical, Droplets, Building2, ChevronRight } from 'lucide-react';
import SectionTag, { RevealText } from '../components/ui/RevealText';
import { industriesData } from '../data/siteData';

const iconMap = {
  mountain: Factory, car: Car, package: Package, 'file-text': FileText,
  layers: Layers, 'flask-conical': FlaskConical, droplets: Droplets, 'building-2': Building2,
};

// Accent colors per industry
const accentColors = [
  '#0067A4', '#D71B32', '#12703C', '#00446F',
  '#8B5CF6', '#D97706', '#0891B2', '#6366F1',
];

export default function IndustriesPage() {
  return (
    <main>

      {/* ─── HERO (tagline removed, rest unchanged) ─── */}
      <section className="page-hero">
        <div className="page-hero__grid" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <RevealText>
            <h1 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 700,
              fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 1.05,
              letterSpacing: '-0.02em', color: '#FFFFFF', marginBottom: 24,
            }}>
              Engineered for<br />
              <span style={{ color: '#FFFFFF' }}>Every Industrial Sector</span>
            </h1>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.5vw, 20px)',
              color: 'rgba(255,255,255,0.9)', lineHeight: 1.7, maxWidth: 640,
            }}>
              From the extreme conditions of cement plants to the precision requirements of pharmaceutical manufacturing — Techno Products delivers purpose-built engineering solutions tailored to the unique demands of each sector.
            </p>
          </RevealText>
        </div>
      </section>

      {/* ─── SECTOR OVERVIEW (Enhanced) ─── */}
      <section style={{ padding: '120px 0', background: '#F8FAFC', position: 'relative' }}>
        <div className="container">
          <RevealText>
            <div style={{ textAlign: 'center', marginBottom: 76 }}>
              <SectionTag>SECTOR OVERVIEW</SectionTag>
              <h2 style={{
                fontFamily: 'var(--font-heading)', fontWeight: 700,
                fontSize: 'clamp(30px, 4.2vw, 54px)', lineHeight: 1.08,
                letterSpacing: '-0.025em', color: '#001426', marginBottom: 18,
              }}>
                8 Industries. One Trusted Partner.
              </h2>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.25vw, 19px)',
                color: '#555', lineHeight: 1.75, maxWidth: 560, margin: '0 auto',
              }}>
                Engineered solutions purpose-built for the severe demands, safety requirements, and critical operations of every industrial sector we serve.
              </p>
            </div>
          </RevealText>

          {/* Enhanced grid */}
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28 }}
            className="industries-hub-grid"
          >
            {industriesData.map((ind, i) => {
              const Icon = iconMap[ind.icon] || Factory;
              const accent = accentColors[i % accentColors.length];
              return (
                <motion.div
                  key={ind.slug}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -10 }}
                  style={{
                    position: 'relative', borderRadius: 24, overflow: 'hidden',
                    aspectRatio: '3/4.2', cursor: 'pointer',
                    boxShadow: '0 12px 36px -8px rgba(0, 20, 38, 0.12)',
                    transition: 'box-shadow 0.4s ease',
                  }}
                  className="ind-card"
                >
                  <Link to={`/industries/${ind.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                    {/* Background image with smooth zoom on hover */}
                    <img
                      src={ind.image}
                      alt={ind.name}
                      style={{
                        width: '100%', height: '100%', objectFit: 'cover',
                        transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1)',
                      }}
                      className="ind-card-img"
                    />

                    {/* Layered premium dark gradient overlay */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(0, 14, 32, 0.96) 0%, rgba(0, 14, 32, 0.55) 50%, rgba(0, 14, 32, 0.12) 100%)',
                      transition: 'background 0.4s ease',
                    }} />

                    {/* Accent line at bottom */}
                    <div style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0,
                      height: 4, background: accent,
                      transform: 'scaleX(0)', transformOrigin: 'left',
                      transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1)',
                    }} className="ind-card-line" />

                    {/* Content */}
                    <div style={{
                      position: 'absolute', inset: 0, padding: 28,
                      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                    }}>
                      {/* Icon badge */}
                      <div style={{
                        width: 52, height: 52, borderRadius: 16,
                        background: accent,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        marginBottom: 16, boxShadow: `0 10px 28px ${accent}66`,
                        transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease',
                      }} className="ind-card-icon">
                        <Icon size={24} color="#fff" strokeWidth={2.2} />
                      </div>

                      <h3 style={{
                        fontFamily: 'var(--font-heading)', fontWeight: 700,
                        fontSize: 20, color: '#fff', marginBottom: 10, lineHeight: 1.2,
                      }}>
                        {ind.name}
                      </h3>

                      <p style={{
                        fontFamily: 'var(--font-body)', fontSize: 13.5,
                        color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.7, marginBottom: 18,
                      }}>
                        {ind.shortDesc}
                      </p>

                      <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13,
                        letterSpacing: '0.04em', color: '#fff',
                        opacity: 0.85,
                        transition: 'opacity 0.25s, gap 0.25s',
                      }} className="ind-card-cta">
                        Explore Sector <ChevronRight size={15} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ padding: '100px 0', background: '#001426', textAlign: 'center' }}>
        <div className="container">
          <RevealText>
            <h2 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 700,
              fontSize: 36, color: '#fff', marginBottom: 20,
            }}>
              Don't See Your Industry?
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 18,
              color: 'rgba(255,255,255,0.7)', marginBottom: 40,
              maxWidth: 600, marginInline: 'auto',
            }}>
              Our engineering expertise extends across many niche industrial applications. Contact our technical team to discuss your specific requirements.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: 14 }}>
              Speak to an Engineer <ArrowRight size={18} />
            </Link>
          </RevealText>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) { .industries-hub-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 768px) { 
          .industries-hub-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; }
          .industries-sector-section { padding: 64px 0 !important; }
        }
        @media (max-width: 480px) { 
          .industries-hub-grid { grid-template-columns: 1fr !important; }
          .industries-cta-section { padding: 56px 0 !important; }
        }

        /* Hover effects */
        .ind-card:hover .ind-card-img { transform: scale(1.07); }
        .ind-card:hover .ind-card-line { transform: scaleX(1) !important; }
        .ind-card:hover .ind-card-icon { transform: scale(1.08) !important; }
        .ind-card:hover .ind-card-cta { opacity: 1 !important; gap: 10px !important; }
        .ind-card:hover { box-shadow: 0 24px 64px rgba(0,0,0,0.20) !important; }
      `}</style>
    </main>
  );
}
