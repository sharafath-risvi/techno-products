import { motion } from 'framer-motion';

const HERO_IMG = 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1920&h=1080&fit=crop&q=80';

export default function AboutHero() {
  return (
    <section className="about-identity-section" style={{ position: 'relative', background: '#FFFFFF', padding: '120px 0', overflow: 'hidden' }}>
      

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="identity-grid" style={{ display: 'grid', gridTemplateColumns: '40% 1fr', gap: '80px', alignItems: 'center' }}>
          
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="identity-image-wrap"
          >
            <div 
              style={{ width: '100%', height: '100%', borderRadius: 32, overflow: 'hidden', boxShadow: '0 40px 100px -20px rgba(0,0,0,0.15)' }}
            >
              <img 
                src={HERO_IMG} 
                alt="Engineering Excellence" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', aspectRatio: '4/5' }} 
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            {/* Small Label */}
            <div style={{
              fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13, 
              letterSpacing: '0.2em', color: '#0067A4', marginBottom: 20,
              display: 'flex', alignItems: 'center', gap: 12
            }}>
              OUR LEGACY
            </div>
            
            {/* Large Heading */}
            <h2 style={{ 
              fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 56px)',
              color: '#111111', margin: '0 0 24px 0', letterSpacing: '-0.02em', lineHeight: 1.1
            }}>
              Building Engineering Excellence Since 1999
            </h2>

            {/* Minimal Description */}
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: '#555555', lineHeight: 1.6, margin: '0 0 48px 0', fontWeight: 400 }}>
              For over two decades, Techno Products has partnered with leading manufacturers, delivering custom-engineered systems that drive industrial success.
            </p>

            {/* 4-Card Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 8 }}>
              {[
                { val: '26+', label: 'Years' },
                { val: '5000+', label: 'Customers' },
                { val: '40+', label: 'Projects' },
                { val: '100%', label: 'Commitment' }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                  style={{
                    background: '#FFFFFF',
                    padding: 32,
                    borderRadius: 24,
                    boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    border: '1px solid rgba(0,0,0,0.03)'
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(32px, 3vw, 48px)', color: '#00101F', lineHeight: 1, margin: '0 0 8px 0' }}>
                    {stat.val}
                  </div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 14, color: '#777777', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .identity-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .about-identity-section {
            padding: 80px 0 !important;
          }
          .identity-image-wrap {
            max-width: 600px;
            margin: 0 auto;
          }
        }
        @media (max-width: 767px) {
          .identity-image-wrap {
            max-width: 100% !important;
          }
          .identity-image-wrap img {
            aspect-ratio: 16/9 !important;
          }
        }
      `}</style>
    </section>
  );
}
