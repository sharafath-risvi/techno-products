import { motion } from 'framer-motion';
import SectionTag from '../ui/RevealText';
import './PartnersSection.css';

const row1 = [
  { name: 'ABB', logo: '/partners/ABB-1.png' },
  { name: 'Innomotics', logo: '/partners/INNOMOTICS-A-Siemens-Business-450.png' },
  { name: 'Schneider Electric', logo: '/partners/Schneider_Electric_2007.svg.png' },
  { name: 'Bauer', logo: '/partners/bauer-1.png' },
  { name: 'Bharat Bijlee', logo: '/partners/bharat-bijili.png' },
  { name: 'Bonfiglioli', logo: '/partners/bonfigolli.png' },
  { name: 'Crompton', logo: '/partners/cromton.png' },
  { name: 'Danfoss', logo: '/partners/danfoss-logo.jpg' },
  { name: 'Havells', logo: '/partners/havells.png' },
  { name: 'Hindustan', logo: '/partners/hindustan.png' },
  { name: 'JK Fenner', logo: '/partners/jk_fenner.png' }
];

const row2 = [
  { name: 'LEDL', logo: '/partners/ledl.png' },
  { name: 'Marathon', logo: '/partners/marathon.png' },
  { name: 'Motovario', logo: '/partners/motovario.png' },
  { name: 'Murugappa', logo: '/partners/murugappa.png' },
  { name: 'Polycab', logo: '/partners/pollycabs.png' },
  { name: 'Rossi', logo: '/partners/rossi-1.png' },
  { name: 'Shanthi', logo: '/partners/shanthi.png' },
  { name: 'STM', logo: '/partners/stm.png' },
  { name: 'Top Gear', logo: '/partners/top-gear.png' },
  { name: 'Unitorq', logo: '/partners/unitorq.png' },
  { name: 'Vagmine', logo: '/partners/vagmine.png' }
];

function PartnerCard({ partner }) {
  return (
    <div className="partner-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img 
        src={partner.logo} 
        alt={partner.name} 
        style={{ maxWidth: '80%', maxHeight: '60px', objectFit: 'contain', mixBlendMode: 'multiply' }} 
        title={partner.name}
      />
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
      <div className="marquee-wrapper" style={{ marginBottom: 90 }}>
        <div className="marquee-track row1-track">
          {[...Array(4)].map((_, setIndex) => (
            <div key={`set1-${setIndex}`} className="marquee-set">
              {row1.map((partner, i) => <PartnerCard key={`r1-${setIndex}-${i}`} partner={partner} />)}
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Right to Left) */}
      <div className="marquee-wrapper">
        <div className="marquee-track row2-track">
          {[...Array(4)].map((_, setIndex) => (
            <div key={`set2-${setIndex}`} className="marquee-set">
              {row2.map((partner, i) => <PartnerCard key={`r2-${setIndex}-${i}`} partner={partner} />)}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
