import { motion } from 'framer-motion';
import SectionTag from '../ui/RevealText';
import './CertificationsSection.css';

const certData = [
  { id: 1, title: "Danfoss DrivePro® Authorised Partner", issuer: "Danfoss", image: "https://images.unsplash.com/photo-1562664377-709f2c337eb2?w=800&q=80" },
  { id: 2, title: "ISO 9001:2015 Quality Standard", issuer: "TÜV SÜD", image: "https://images.unsplash.com/photo-1614036417651-1d4ee89fd253?w=800&q=80" },
  { id: 3, title: "SIMOLOG Service Partner", issuer: "Innomotics", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80" }
];

export default function CertificationsSection() {
  return (
    <section style={{ position: 'relative', background: '#FAFAFA', padding: '80px 0 160px 0' }}>
      <div className="container">
        {/* Soft Spotlight from ceiling */}
        <div className="museum-spotlight" />
        
        {/* Premium Floor Shadow */}
        <div className="museum-floor-shadow" />

        {/* Premium Header */}
        <div style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto', marginBottom: 80, padding: '0 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 20 }}>
          <div style={{ marginBottom: 24 }}>
            <SectionTag>Certifications</SectionTag>
          </div>
          
          <h2 style={{ 
            fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 56px)', 
            color: '#000000', margin: '0 auto 28px auto', letterSpacing: '-0.02em', 
            lineHeight: 1.1, maxWidth: 700
          }}>
            Recognized For <span style={{ color: '#00446F' }}>Engineering Excellence</span>
          </h2>
          
          <p style={{ 
            fontFamily: 'var(--font-body)', fontSize: 18, 
            color: '#555555', lineHeight: 1.6, margin: '0 auto', maxWidth: 680, fontWeight: 400
          }}>
            Certified to deliver engineering excellence with globally recognized quality and safety standards.
          </p>
        </div>

        {/* Static Grid Layout */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 100,
          position: 'relative',
          zIndex: 20,
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px'
        }}>
          {/* First Row: 2 items */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 40, width: '100%' }}>
            {certData.slice(0, 2).map((cert) => (
              <motion.div 
                key={cert.id}
                className="museum-card-wrapper"
              >
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="museum-frame"
                >
                  <div style={{ width: '100%', aspectRatio: '16/9', position: 'relative', background: '#F3F4F6' }}>
                    <img src={cert.image} alt={cert.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    <div style={{ position: 'absolute', inset: 0, boxShadow: 'inset 0 0 60px rgba(0,0,0,0.15)', pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', bottom: 30, left: 30, right: 30, pointerEvents: 'none' }}>
                      <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, letterSpacing: '2px', color: '#00101F', textTransform: 'uppercase', marginBottom: 6, background: 'rgba(255,255,255,0.9)', padding: '6px 12px', display: 'inline-block', borderRadius: 4, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                        Issued by {cert.issuer}
                      </div>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(20px, 2.5vw, 28px)', color: '#ffffff', margin: 0, letterSpacing: '-0.02em', lineHeight: 1.2, textShadow: '0 4px 16px rgba(0,0,0,0.6)' }}>
                        {cert.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Second Row: 1 item centered */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(400px, 50%)', justifyContent: 'center', width: '100%' }}>
            <motion.div 
              key={certData[2].id}
              className="museum-card-wrapper"
            >
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="museum-frame"
              >
                <div style={{ width: '100%', aspectRatio: '16/9', position: 'relative', background: '#F3F4F6' }}>
                  <img src={certData[2].image} alt={certData[2].title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', inset: 0, boxShadow: 'inset 0 0 60px rgba(0,0,0,0.15)', pointerEvents: 'none' }} />
                  <div style={{ position: 'absolute', bottom: 30, left: 30, right: 30, pointerEvents: 'none' }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, letterSpacing: '2px', color: '#00101F', textTransform: 'uppercase', marginBottom: 6, background: 'rgba(255,255,255,0.9)', padding: '6px 12px', display: 'inline-block', borderRadius: 4, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                      Issued by {certData[2].issuer}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(20px, 2.5vw, 28px)', color: '#ffffff', margin: 0, letterSpacing: '-0.02em', lineHeight: 1.2, textShadow: '0 4px 16px rgba(0,0,0,0.6)' }}>
                      {certData[2].title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
