import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { RevealText } from '../components/ui/RevealText';
import { solutions } from '../data/siteData';

export default function SolutionsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__grid" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <RevealText>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#D71B32' }} />
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff' }}>Engineering Solutions</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: '#FFFFFF', marginBottom: 24 }}>
              Complete Solutions for<br />
              <span style={{ color: '#FFFFFF' }}>Industrial Excellence</span>
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.5vw, 20px)', color: 'rgba(255,255,255,0.9)', lineHeight: 1.7, maxWidth: 640 }}>
              From motion control to turnkey project engineering, we deliver precisely engineered solutions that maximise the reliability, efficiency, and performance of your industrial operations.
            </p>
          </RevealText>
        </div>
      </section>

      {/* Solutions Grid */}
      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container">
          <RevealText>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, letterSpacing: '0.14em', color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: 16 }}>WHAT WE DELIVER</div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#000', maxWidth: 700, margin: '0 auto' }}>
                Seven Specialist Solution Areas
              </h2>
            </div>
          </RevealText>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="solutions-grid">
            {solutions.map((sol, i) => (
              <motion.div
                key={sol.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', transition: 'box-shadow 0.3s', cursor: 'pointer' }}
              >
                <div style={{ height: 200, overflow: 'hidden', position: 'relative' }}>
                  <img src={sol.image} alt={sol.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,20,38,0.6) 0%, transparent 60%)' }} />
                  <div style={{ position: 'absolute', top: 16, left: 16, background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', borderRadius: 8, padding: '6px 12px' }}>
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{sol.tagline.split('.')[0]}</span>
                  </div>
                </div>
                <div style={{ padding: 28 }}>
                  <div style={{ fontSize: 28, marginBottom: 12 }}>{sol.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 20, color: '#001426', marginBottom: 12, lineHeight: 1.2 }}>{sol.title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#666', lineHeight: 1.7, marginBottom: 20 }}>{sol.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                    {sol.industries.slice(0, 3).map(ind => (
                      <span key={ind} style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#0067A4', background: '#EEF4F8', borderRadius: 20, padding: '3px 10px' }}>{ind}</span>
                    ))}
                  </div>
                  <Link to={`/solutions/${sol.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14, color: '#00446F', textDecoration: 'none' }}>
                    Explore Solution <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section style={{ padding: '100px 0', background: '#001426' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="why-grid">
            <RevealText>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, letterSpacing: '0.14em', color: '#4F8FBF', textTransform: 'uppercase', marginBottom: 16 }}>WHY TECHNO PRODUCTS</div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', marginBottom: 24 }}>
                More Than a Supplier. A Technical Partner.
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 36 }}>
                Our solutions are backed by deep application engineering expertise, genuine OEM products, and full lifecycle support — from concept through commissioning to long-term maintenance.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: 15 }}>
                Request a Technical Consultation <ArrowRight size={18} />
              </Link>
            </RevealText>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { n: '26+', l: 'Years of Experience' },
                { n: '5,000+', l: 'Satisfied Customers' },
                { n: '4', l: 'Global OEM Partnerships' },
                { n: '15+', l: 'Awards & Recognition' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.l}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 20, padding: 28, border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 40, color: '#4F8FBF', lineHeight: 1, marginBottom: 8 }}>{stat.n}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>{stat.l}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: '#F8F9FA', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 40px)', color: '#000', marginBottom: 16 }}>
            Not Sure Which Solution You Need?
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: '#666', marginBottom: 32, maxWidth: 520, marginInline: 'auto' }}>
            Our application engineers will analyse your requirements and recommend the right approach — at no charge.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '14px 36px', fontSize: 15 }}>
            Talk to an Engineer <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) { .solutions-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 768px) { 
          .solutions-grid, .why-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .solutions-main-section { padding: 64px 0 !important; }
          .solutions-why-section { padding: 64px 0 !important; }
          .solutions-cta-section { padding: 56px 0 !important; }
        }
        @media (max-width: 600px) { .solutions-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </main>
  );
}
