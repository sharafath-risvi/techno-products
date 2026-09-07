import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { foundersData } from '../../data/foundersData';
import FounderQuickViewModal from './FounderQuickViewModal';

export default function LeadershipStory() {
  const [selectedFounder, setSelectedFounder] = useState(null);

  return (
    <section style={{ 
      background: '#FFFFFF', 
      paddingTop: 80, 
      paddingBottom: 20,
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ position: 'relative' }}>
        
        {/* Original Section Header Restored */}
        <div style={{ textAlign: 'center', marginBottom: 120, maxWidth: 800, margin: '0 auto 120px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
            <div className="tp-label">LEADERSHIP</div>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            style={{ 
              fontFamily: 'var(--font-heading)', fontWeight: 700, 
              fontSize: 'clamp(36px, 5vw, 64px)', color: '#000000', 
              lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 24px 0' 
            }}
          >
            Meet Our <span style={{ color: '#00446F' }}>Founder</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: '#555555', lineHeight: 1.6, margin: 0 }}
          >
            The visionary minds driving Techno Products toward engineering excellence and continuous industrial innovation.
          </motion.p>
        </div>

        {/* Alternating Founder Rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 60 }}>
          {foundersData.map((founder, index) => {
            const isEven = index % 2 === 1; // 0=left, 1=right, 2=left
            
            return (
              <div key={founder.id} className="founder-grid-row" style={{
                display: 'grid',
                // Reduce Image Size (0.7fr) and give Text more space (1.3fr)
                gridTemplateColumns: isEven ? '1.3fr 0.7fr' : '0.7fr 1.3fr',
                gap: '8%',
                alignItems: 'center',
                position: 'relative'
              }}>
                
                {/* Image Side */}
                <motion.div 
                  className="founder-img-col"
                  initial={{ opacity: 0, scale: 0.95, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  style={{
                    order: isEven ? 2 : 1,
                    aspectRatio: '3/4', // Taller, elegant aspect ratio
                    borderRadius: 24,
                    overflow: 'hidden',
                    boxShadow: '0 40px 80px -20px rgba(0,0,0,0.1)'
                  }}
                >
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                </motion.div>

                {/* Content Side */}
                <motion.div 
                  className="founder-text-col"
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                  style={{
                    order: isEven ? 1 : 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                  }}
                >
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(32px, 3.5vw, 48px)', color: '#111111', margin: '0 0 12px 0', lineHeight: 1.1 }}>
                    {founder.name}
                  </h3>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 15, color: '#D71B32', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 32 }}>
                    {founder.position}
                  </div>
                  
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: '#555555', lineHeight: 1.6, margin: '0 0 48px 0', fontWeight: 400, maxWidth: 600 }}>
                    {founder.shortDesc}
                  </p>

                  <motion.button 
                    onClick={() => setSelectedFounder(founder)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 12,
                      background: '#00101F',
                      color: '#FFFFFF',
                      padding: '16px 32px',
                      borderRadius: 100,
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: 14,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'background 0.3s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.background = '#0067A4'}
                    onMouseOut={(e) => e.currentTarget.style.background = '#00101F'}
                  >
                    About Founder <ArrowRight size={18} />
                  </motion.button>

                </motion.div>

                {/* Decorative thin divider line at bottom (except last) */}
                {index < foundersData.length - 1 && (
                  <div style={{ position: 'absolute', bottom: -70, left: '5%', width: '90%', height: 1, background: 'rgba(0,0,0,0.06)' }} />
                )}

              </div>
            );
          })}
        </div>
      </div>

      {/* Quick View Modal Mount */}
      <AnimatePresence>
        {selectedFounder && (
          <FounderQuickViewModal 
            founder={selectedFounder} 
            onClose={() => setSelectedFounder(null)} 
          />
        )}
      </AnimatePresence>
      <style>{`
        @media (max-width: 1023px) {
          .founder-grid-row {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .founder-img-col {
            order: 1 !important;
            aspect-ratio: 1/1 !important;
          }
          .founder-text-col {
            order: 2 !important;
          }
        }
      `}</style>
    </section>
  );
}
