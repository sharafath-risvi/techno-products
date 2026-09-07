import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function FounderQuickViewModal({ founder, onClose }) {
  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!founder) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      {/* Dark overlay with slight blur */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 16, 31, 0.6)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          cursor: 'pointer'
        }}
      />

      {/* Modal Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 1100,
          maxHeight: '90vh',
          background: '#FFFFFF',
          borderRadius: 24,
          overflow: 'hidden',
          boxShadow: '0 40px 100px rgba(0,0,0,0.3)',
          display: 'flex',
          zIndex: 1
        }}
        className="founder-modal-container"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 24,
            right: 24,
            width: 48,
            height: 48,
            borderRadius: '50%',
            background: '#F5F5F5',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'background 0.3s'
          }}
          onMouseOver={(e) => e.currentTarget.style.background = '#E5E5E5'}
          onMouseOut={(e) => e.currentTarget.style.background = '#F5F5F5'}
        >
          <X size={24} color="#111111" />
        </button>

        {/* LEFT: Tall Image */}
        <div className="modal-img-col" style={{ width: '40%', flexShrink: 0, position: 'relative' }}>
          <img 
            src={founder.image} 
            alt={founder.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* RIGHT: Scrollable Content */}
        <div className="modal-text-col" style={{ 
          width: '60%', 
          padding: '60px 48px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 40
        }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(32px, 3vw, 48px)', color: '#111111', margin: '0 0 8px 0', lineHeight: 1.1 }}>
              {founder.name}
            </h2>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 14, color: '#D71B32', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {founder.position}
            </div>
          </div>

          <div style={{ paddingLeft: 24, borderLeft: '3px solid #0067A4' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18, color: '#111111', margin: '0 0 12px 0' }}>
              {founder.title}
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: '#333333', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
              "{founder.content}"
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 20, color: '#000000', marginBottom: 16 }}><span style={{ color: '#00446F' }}>Leadership</span> Philosophy</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: '#555555', lineHeight: 1.6, margin: 0 }}>
              {founder.philosophy}
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 20, color: '#000000', marginBottom: 20 }}><span style={{ color: '#00446F' }}>Key</span> Achievements</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {founder.achievements.map((ach, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, borderRadius: '50%', background: '#00101F', color: '#ffffff', fontSize: 12, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</div>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: '#444444', lineHeight: 1.5 }}>
                    {ach}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </motion.div>
      <style>{`
        .founder-modal-container {
          flex-direction: row;
        }
        @media (max-width: 1023px) {
          .founder-modal-container {
            flex-direction: column !important;
          }
          .modal-img-col {
            width: 100% !important;
            height: 40vh !important;
            min-height: 250px !important;
          }
          .modal-text-col {
            width: 100% !important;
            padding: 32px 24px !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </div>
  );
}
