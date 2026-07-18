import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionTag, { RevealText } from '../components/ui/RevealText';
import { solutions, productCategories } from '../data/siteData';

export default function SolutionDetailPage() {
  const { slug } = useParams();
  const solution = solutions.find(s => s.slug === slug);
  if (!solution) return <Navigate to="/solutions" replace />;

  const relatedCats = productCategories.filter(c => solution.relatedProducts.includes(c.id));

  return (
    <main>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: 84 }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src={solution.image} alt={solution.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,10,26,0.9) 50%, rgba(0,10,26,0.3) 100%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: 80, paddingBottom: 80 }}>
          <RevealText>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#D71B32' }} />
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>{solution.tagline}</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(36px, 5.5vw, 72px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: '#FFFFFF', marginBottom: 20, maxWidth: 700 }}>
              {solution.headline}
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.4vw, 19px)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, maxWidth: 600, marginBottom: 36 }}>
              {solution.description}
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: 14 }}>Get a Consultation <ArrowRight size={16} /></Link>
              <Link to="/solutions" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', padding: '14px 0' }}>
                ← All Solutions
              </Link>
            </div>
          </RevealText>
        </div>
      </section>

      {/* Overview */}
      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="overview-grid">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, letterSpacing: '0.14em', color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: 16 }}>OVERVIEW</div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#000', marginBottom: 24 }}>
                The Complete Picture
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: '#555', lineHeight: 1.85 }}>{solution.overview}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
              <div style={{ borderRadius: 24, overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 24px 60px rgba(0,0,0,0.12)' }}>
                <img src={solution.image} alt={solution.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: '120px 0', background: '#F8FAFC', position: 'relative' }}>
        <div className="container">
          <RevealText>
            <div style={{ textAlign: 'center', marginBottom: 72 }}>
              <SectionTag>KEY BENEFITS</SectionTag>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#001426' }}>
                What You Gain
              </h2>
            </div>
          </RevealText>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28, maxWidth: 1040, margin: '0 auto' }} className="benefits-grid">
            {solution.benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, boxShadow: '0 24px 50px -12px rgba(0, 103, 164, 0.15)' }}
                style={{
                  background: '#FFFFFF',
                  borderRadius: 24,
                  padding: 36,
                  border: '1px solid rgba(0, 103, 164, 0.1)',
                  boxShadow: '0 10px 30px -10px rgba(0, 20, 38, 0.06)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  gap: 24,
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'default',
                }}
              >
                {/* Left accent bar */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, bottom: 0,
                  width: 4, background: 'linear-gradient(180deg, #0067A4 0%, #00446F 100%)',
                }} />

                {/* Decorative background number watermark */}
                <div style={{
                  position: 'absolute', top: 16, right: 24,
                  fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 48,
                  color: 'rgba(0, 103, 164, 0.06)', lineHeight: 1,
                  userSelect: 'none', pointerEvents: 'none',
                }}>
                  0{i + 1}
                </div>

                {/* Premium multilayer icon badge */}
                <div style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: 'linear-gradient(135deg, #0067A4 0%, #00446F 100%)',
                  boxShadow: '0 8px 20px rgba(0, 103, 164, 0.28)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, position: 'relative', zIndex: 1,
                }}>
                  <CheckCircle2 size={26} color="#FFFFFF" strokeWidth={2.2} />
                </div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)', fontWeight: 700,
                    fontSize: 20, color: '#001426', marginBottom: 10, lineHeight: 1.25,
                  }}>
                    {benefit.title}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: 15, color: '#555',
                    lineHeight: 1.75, margin: 0,
                  }}>
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <RevealText>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, letterSpacing: '0.14em', color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: 16 }}>INDUSTRIES SERVED</div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(24px, 3.5vw, 40px)', color: '#000' }}>Where This Solution Applies</h2>
            </div>
          </RevealText>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            {solution.industries.map(ind => (
              <motion.div
                key={ind}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, background: '#0067A4', color: '#fff' }}
                style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 500, color: '#001426', background: '#F0F4F8', borderRadius: 40, padding: '10px 22px', border: '1px solid rgba(0,103,164,0.12)', cursor: 'default', transition: 'all 0.2s' }}
              >
                {ind}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedCats.length > 0 && (
        <section style={{ padding: '100px 0', background: '#F8F9FA' }}>
          <div className="container">
            <RevealText>
              <div style={{ textAlign: 'center', marginBottom: 56 }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, letterSpacing: '0.14em', color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: 16 }}>RELATED PRODUCTS</div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(24px, 3.5vw, 40px)', color: '#000' }}>Products for This Solution</h2>
              </div>
            </RevealText>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="related-grid">
              {relatedCats.map((cat, i) => (
                <motion.div
                  key={cat.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(0,0,0,0.1)' }}
                  style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.06)' }}
                >
                  <div style={{ height: 160, overflow: 'hidden', background: '#F0F2F5' }}>
                    <img src={cat.image} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'multiply' }} />
                  </div>
                  <div style={{ padding: 24 }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18, color: '#000', marginBottom: 8 }}>{cat.name}</h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#666', lineHeight: 1.6, marginBottom: 16 }}>{cat.description.slice(0, 80)}...</p>
                    <Link to={`/products/${cat.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, color: '#00446F', textDecoration: 'none' }}>
                      View Products <ArrowRight size={13} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ padding: '100px 0', background: '#001426', textAlign: 'center' }}>
        <div className="container">
          <RevealText>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 52px)', color: '#fff', marginBottom: 20, maxWidth: 700, margin: '0 auto 20px' }}>
              Ready to Implement {solution.title}?
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: 'rgba(255,255,255,0.7)', marginBottom: 40, maxWidth: 560, marginInline: 'auto' }}>
              Our engineers will assess your application and deliver a detailed solution proposal at no cost.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: 15 }}>Get a Free Assessment <ArrowRight size={18} /></Link>
              <Link to="/solutions" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', padding: '16px 0', gap: 8 }}>
                ← All Solutions
              </Link>
            </div>
          </RevealText>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .overview-grid, .benefits-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .related-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .related-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
