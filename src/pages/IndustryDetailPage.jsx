import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, AlertTriangle, CheckCircle2, Zap } from 'lucide-react';
import SectionTag, { RevealText } from '../components/ui/RevealText';
import { industriesData, productCategories } from '../data/siteData';
import { useProducts } from '../context/ProductsContext';

export default function IndustryDetailPage() {
  const { slug } = useParams();
  const industry = industriesData.find(i => i.slug === slug);
  if (!industry) return <Navigate to="/industries" replace />;

  const mappedHeroImage = {
    'cement-mining': '/industries images/cement_mining.webp',
    'automotive': '/industries images/automative.webp',
    'hvac': '/industries images/HVAC.webp',
    'textile': '/industries images/Textile.webp',
    'infrastructure': '/industries images/infracture.webp',
    'water-treatment': '/industries images/waterTreatment.webp',
    'food-beverage': '/industries images/food_beverage.webp',
    'paper-pulp': '/industries images/paper_pulp.webp'
  }[industry.slug] || industry.image;

  const { products } = useProducts();
  const relatedCats = productCategories.filter(c => industry.relatedProducts.includes(c.id));
  const relatedCategorySlugs = relatedCats.map(c => c.slug);
  const relevantProducts = products.filter(p => relatedCategorySlugs.includes(p.category_slug)).slice(0, 3);
  const displayProducts = relevantProducts.length === 3 ? relevantProducts : products.slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: 84 }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src={mappedHeroImage} alt={industry.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,10,26,0.9) 50%, rgba(0,10,26,0.3) 100%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: 80, paddingBottom: 80 }}>
          <RevealText>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#D71B32' }} />
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>Industry Solutions</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(36px, 5.5vw, 72px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: '#FFFFFF', marginBottom: 20, maxWidth: 700 }}>
              {industry.name}
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.4vw, 19px)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, maxWidth: 600, marginBottom: 36 }}>
              {industry.shortDesc}
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: 14 }}>Discuss Your Requirements <ArrowRight size={16} /></Link>
              <Link to={`/products`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', padding: '14px 0' }}>
                View Products
              </Link>
            </div>
          </RevealText>
        </div>
      </section>

      {/* Overview */}
      <section style={{ padding: '90px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: 940 }}>
          <RevealText>
            <SectionTag>SECTOR OVERVIEW</SectionTag>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 'clamp(17px, 1.35vw, 20px)',
              color: '#333', lineHeight: 1.85, fontWeight: 400,
            }}>
              {industry.fullDesc}
            </p>
          </RevealText>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section style={{ padding: '100px 0', background: '#F8F9FA' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }} className="challenge-grid">
            {/* Challenges */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div style={{ background: '#fff', borderRadius: 24, padding: 40, border: '1px solid rgba(0,0,0,0.06)', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: '#FAD9DD', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <AlertTriangle size={22} style={{ color: '#D71B32' }} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 20, color: '#000' }}>Industry Challenges</h3>
                </div>
                {industry.challenges.map((c, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, marginBottom: 16, paddingBottom: 16, borderBottom: i < industry.challenges.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none' }}>
                    <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#FAD9DD', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                      <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, color: '#D71B32' }}>{i + 1}</span>
                    </div>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: '#444', lineHeight: 1.6 }}>{c}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Solutions */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
              <div style={{ background: '#fff', borderRadius: 24, padding: 40, border: '1px solid rgba(0,0,0,0.06)', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: '#D9EAF5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CheckCircle2 size={22} style={{ color: '#0067A4' }} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 20, color: '#000' }}>Techno Products Solutions</h3>
                </div>
                {industry.solutions.map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, marginBottom: 16, paddingBottom: 16, borderBottom: i < industry.solutions.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none' }}>
                    <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#D9EAF5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                      <CheckCircle2 size={14} style={{ color: '#0067A4' }} />
                    </div>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: '#444', lineHeight: 1.6 }}>{s}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <RevealText>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, letterSpacing: '0.14em', color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: 16 }}>APPLICATIONS</div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(24px, 3.5vw, 40px)', color: '#000' }}>Where We Make the Difference</h2>
            </div>
          </RevealText>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            {industry.applications.map((app, i) => (
              <motion.div
                key={app}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 15, color: '#001426', background: '#F0F4F8', borderRadius: 40, padding: '10px 22px', border: '1px solid rgba(0,103,164,0.12)' }}
              >
                <Zap size={14} style={{ color: '#0067A4' }} />
                {app}
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
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, letterSpacing: '0.14em', color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: 16 }}>RECOMMENDED PRODUCTS</div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(24px, 3.5vw, 40px)', color: '#000' }}>Products for {industry.name}</h2>
              </div>
            </RevealText>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="ind-related-grid">
              {displayProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(0,0,0,0.1)' }}
                  style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.06)' }}
                >
                  <div style={{ height: 260, overflow: 'hidden', background: '#F0F2F5' }}>
                    <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'multiply' }} />
                  </div>
                  <div style={{ padding: 32 }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 24, color: '#000', marginBottom: 12, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{product.name}</h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: '#666', lineHeight: 1.6, marginBottom: 24, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{product.description || 'Industrial product engineered for reliability.'}</p>
                    <Link to={`/products/${product.category_slug}/${product.id}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 15, color: '#00446F', textDecoration: 'none' }}>
                      View Product <ArrowRight size={15} />
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
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 48px)', color: '#fff', marginBottom: 20 }}>
              Ready to Optimise Your {industry.name} Operations?
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: 'rgba(255,255,255,0.7)', marginBottom: 40, maxWidth: 560, marginInline: 'auto' }}>
              Talk to an engineer who specialises in your sector. No generic advice — only solutions built for your specific challenges.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: 15 }}>Request Technical Support <ArrowRight size={18} /></Link>
              <Link to="/industries" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', padding: '16px 0', gap: 8 }}>
                ← All Industries
              </Link>
            </div>
          </RevealText>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .challenge-grid { grid-template-columns: 1fr !important; }
          .ind-related-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) { .ind-related-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </main>
  );
}
