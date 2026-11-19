import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Award, CheckCircle2 } from 'lucide-react';
import { leaderData } from '../../data/foundersData';
import FounderQuickViewModal from './FounderQuickViewModal';

export default function LeaderSection() {
  const [selectedLeader, setSelectedLeader] = useState(null);
  const leader = leaderData;

  if (!leader) return null;

  return (
    <section style={{ 
      background: '#F8FAFC', 
      paddingTop: 80, 
      paddingBottom: 80,
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid rgba(0, 68, 111, 0.08)',
      borderBottom: '1px solid rgba(0, 68, 111, 0.08)'
    }}>
      {/* Subtle blueprint grid texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(rgba(0, 103, 164, 0.06) 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
        pointerEvents: 'none', zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 80, maxWidth: 800, margin: '0 auto 80px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <div className="tp-label">LEADER</div>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            style={{ 
              fontFamily: 'var(--font-heading)', fontWeight: 700, 
              fontSize: 'clamp(36px, 5vw, 64px)', color: '#000000', 
              lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 20px 0' 
            }}
          >
            Meet Our <span style={{ color: '#00446F' }}>Leader</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: '#475569', lineHeight: 1.6, margin: 0 }}
          >
            Spearheading operations, customer delight, and strategic growth across India's industrial landscape.
          </motion.p>
        </div>

        {/* Leader Presentation Row */}
        <div className="founder-grid-row" style={{
          display: 'grid',
          gridTemplateColumns: '0.7fr 1.3fr',
          gap: '8%',
          alignItems: 'center',
          position: 'relative'
        }}>
          
          {/* Image Side */}
          <motion.div 
            className="founder-img-col"
            initial={{ opacity: 0, scale: 0.95, x: -40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{
              aspectRatio: '3/4',
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: '0 30px 60px -15px rgba(0, 16, 31, 0.12)',
              border: '1px solid rgba(0, 103, 164, 0.1)'
            }}
          >
            <img 
              src={leader.image} 
              alt={leader.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="lazy"
            />
          </motion.div>

          {/* Content Side */}
          <motion.div 
            className="founder-text-col"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}
          >
            <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(32px, 3.5vw, 48px)', color: '#000000', margin: '0 0 12px 0', lineHeight: 1.1 }}>
              {leader.name}
            </h3>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 15, color: '#D71B32', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 24 }}>
              {leader.position}
            </div>
            
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: '#000000', lineHeight: 1.65, margin: '0 0 28px 0', fontWeight: 400, maxWidth: 620 }}>
              {leader.shortDesc}
            </p>

            {/* Leadership Philosophy Highlight Block */}
            <div style={{ 
              background: '#FFFFFF',
              borderLeft: '4px solid #0067A4',
              padding: '20px 24px',
              borderRadius: '0 16px 16px 0',
              marginBottom: 36,
              maxWidth: 620,
              boxShadow: '0 4px 20px rgba(0, 68, 111, 0.04)',
              borderTop: '1px solid #F1F5F9',
              borderRight: '1px solid #F1F5F9',
              borderBottom: '1px solid #F1F5F9'
            }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: '#1E293B', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
                "{leader.philosophy}"
              </p>
            </div>

            {/* Key Achievements Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 36 }}>
              {leader.achievements?.map((ach, idx) => (
                <div 
                  key={idx}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    background: '#FFFFFF',
                    border: '1px solid rgba(0, 103, 164, 0.15)',
                    padding: '8px 16px',
                    borderRadius: 30,
                    fontFamily: 'var(--font-heading)',
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#00446F'
                  }}
                >
                  <CheckCircle2 size={14} color="#0067A4" />
                  <span>{ach}</span>
                </div>
              ))}
            </div>

            <motion.button 
              onClick={() => setSelectedLeader(leader)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                background: '#00101F',
                color: '#FFFFFF',
                padding: '16px 34px',
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
              About Leader <ArrowRight size={18} />
            </motion.button>

          </motion.div>

        </div>
      </div>

      {/* Quick View Modal Mount */}
      <AnimatePresence>
        {selectedLeader && (
          <FounderQuickViewModal 
            founder={selectedLeader} 
            onClose={() => setSelectedLeader(null)} 
          />
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1023px) {
          .founder-grid-row {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .founder-img-col {
            order: 1 !important;
            aspect-ratio: 1/1 !important;
            max-width: 420px !important;
            margin: 0 auto !important;
          }
          .founder-text-col {
            order: 2 !important;
          }
        }
      `}</style>
    </section>
  );
}
