import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionTag, { RevealText } from '../ui/RevealText';

const featuredProducts = [
  {
    id: 'drives',
    name: 'Variable Frequency Drives',
    shortName: 'Drives',
    slug: 'drives',
    tag: 'Most Viewed',
    description: 'Industry-leading variable frequency drives for precise motor speed control, energy savings, and process optimisation across all industrial applications.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=420&fit=crop&q=85',
    brands: ['Danfoss', 'Schneider Electric'],
    count: '50+',
  },
  {
    id: 'motors',
    name: 'Electric Motors',
    shortName: 'Motors',
    slug: 'motors',
    tag: 'Top Seller',
    description: 'High-efficiency electric motors from globally trusted manufacturers for demanding industrial environments — from fractional HP to large horsepower ratings.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=420&fit=crop&q=85',
    brands: ['Innomotics', 'Motovario'],
    count: '80+',
  },
  {
    id: 'gearboxes',
    name: 'Gearboxes',
    shortName: 'Gearboxes',
    slug: 'gearboxes',
    tag: 'Best Rated',
    description: 'Precision-engineered gearboxes including helical, bevel, worm, and planetary types for reliable torque multiplication and speed reduction.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=420&fit=crop&q=85',
    brands: ['Motovario', 'SEW'],
    count: '40+',
  },
];

export default function MostViewedProducts() {
  return (
    <section style={{ padding: '120px 0', background: '#fff' }}>
      <div className="container">

        {/* Section Header */}
        <RevealText>
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <SectionTag>Most Viewed</SectionTag>
            <h2 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 700,
              fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.05,
              letterSpacing: '-0.025em', color: '#000', marginBottom: 16,
            }}>
              Most Viewed Products
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 'clamp(15px, 1.2vw, 18px)',
              color: '#555', lineHeight: 1.7, maxWidth: 560, margin: '0 auto',
            }}>
              Explore our highest-demand industrial products trusted by leading manufacturers across India.
            </p>
          </div>
        </RevealText>

        {/* Product Cards Grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}
          className="mvp-grid"
        >
          {featuredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, boxShadow: '0 32px 72px rgba(0,0,0,0.13)' }}
              style={{
                background: '#fff',
                borderRadius: 20,
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                border: '1px solid rgba(0,0,0,0.06)',
                display: 'flex', flexDirection: 'column',
                transition: 'box-shadow 0.35s ease',
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', overflow: 'hidden', height: 220 }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    transition: 'transform 0.55s cubic-bezier(0.16,1,0.3,1)',
                  }}
                  className="mvp-card-img"
                />
                {/* Tag badge */}
                <div style={{
                  position: 'absolute', top: 16, left: 16,
                  background: 'rgba(0,16,31,0.82)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: 40,
                  padding: '5px 14px',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 10,
                    letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff',
                  }}>
                    {product.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '28px 28px 32px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                {/* Brands */}
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 14 }}>
                  {product.brands.map((b) => (
                    <span
                      key={b}
                      style={{
                        fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 10,
                        letterSpacing: '0.08em', textTransform: 'uppercase',
                        color: '#0067A4', background: '#EEF4F8',
                        borderRadius: 40, padding: '4px 10px',
                      }}
                    >
                      {b}
                    </span>
                  ))}
                </div>

                {/* Name */}
                <h3 style={{
                  fontFamily: 'var(--font-heading)', fontWeight: 700,
                  fontSize: 20, color: '#000', lineHeight: 1.25, marginBottom: 10,
                }}>
                  {product.name}
                </h3>

                {/* Description */}
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: 14,
                  color: '#555', lineHeight: 1.75, marginBottom: 24, flex: 1,
                }}>
                  {product.description}
                </p>

                {/* CTA */}
                <Link
                  to={`/products/${product.slug}`}
                  className="btn btn-primary"
                  style={{ alignSelf: 'flex-start', padding: '12px 24px', fontSize: 13 }}
                >
                  Explore Product <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <RevealText delay={0.2}>
          <div style={{ textAlign: 'center', marginTop: 56 }}>
            <Link
              to="/products"
              style={{
                fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: '#0067A4', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 8,
                borderBottom: '2px solid #0067A4', paddingBottom: 3,
                transition: 'opacity 0.2s',
              }}
            >
              View All Products <ArrowRight size={14} />
            </Link>
          </div>
        </RevealText>
      </div>

      <style>{`
        @media (max-width: 1024px) { .mvp-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .mvp-grid { grid-template-columns: 1fr !important; } }
        .mvp-card-img:hover { transform: scale(1.05); }
      `}</style>
    </section>
  );
}
