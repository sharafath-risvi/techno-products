import { motion } from 'framer-motion';
import SectionTag from '../ui/RevealText';
import './PartnersSection.css';

const row1 = ["ABB", "Siemens", "Delta", "Crompton", "Havells", "L&T", "Danfoss", "Bonfiglioli", "SKF", "WEG"];
const row2 = ["Bosch", "Schneider", "Omron", "Mitsubishi", "ABB", "Siemens", "Yaskawa", "Fuji Electric"];

function PartnerCard({ name }) {
  return (
    <div className="partner-card">
      <h3 style={{ 
        fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 24, 
        color: '#00101F', margin: 0, letterSpacing: '-0.02em' 
      }}>
        {name}
      </h3>
    </div>
  );
}

export default function PartnersSection() {
  return (
    <section style={{ background: '#FFFFFF', padding: '120px 0 80px 0', position: 'relative', overflow: 'hidden' }}>
      
      {/* Animated Premium Header exactly matching Why Choose Us */}
      <div style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto', marginBottom: 60, padding: '0 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 24 }}
        >
          <SectionTag>Our Partners</SectionTag>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          style={{ 
            fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 56px)', 
            color: '#000000', margin: '0 auto 28px auto', letterSpacing: '-0.02em', 
            lineHeight: 1.1, maxWidth: 700
          }}
        >
          Trusted Partnerships That Drive <span style={{ color: '#00446F' }}>Innovation</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{ 
            fontFamily: 'var(--font-body)', fontSize: 18, 
            color: '#555555', lineHeight: 1.6, margin: '0 auto', maxWidth: 680, fontWeight: 400
          }}
        >
          Working together with globally recognized industrial brands to deliver reliable engineering solutions, quality products, and long-term value for every customer.
        </motion.p>
      </div>

      {/* Marquee Row 1 (Left to Right) */}
      <div className="marquee-wrapper" style={{ marginBottom: 60 }}>
        <div className="marquee-track row1-track">
          {[...Array(4)].map((_, setIndex) => (
            <div key={`set1-${setIndex}`} className="marquee-set">
              {row1.map((name, i) => <PartnerCard key={`r1-${setIndex}-${i}`} name={name} />)}
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Right to Left) */}
      <div className="marquee-wrapper">
        <div className="marquee-track row2-track">
          {[...Array(4)].map((_, setIndex) => (
            <div key={`set2-${setIndex}`} className="marquee-set">
              {row2.map((name, i) => <PartnerCard key={`r2-${setIndex}-${i}`} name={name} />)}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
