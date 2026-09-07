import { motion } from 'framer-motion';
import SectionTag from '../ui/RevealText';

const clients = [
  { id: 1, client: "TNPL", category: "Paper Industry", image: "/Clients/tnpl1-1.jpg" },
  { id: 2, client: "Larsen & Toubro", category: "Heavy Engineering", image: "/Clients/Larsen_Turbo.jpg" },
  { id: 3, client: "Chettinad Cement", category: "Cement Manufacturing", image: "/Clients/chettinad1.jpg" },
  { id: 4, client: "Schwing Stetter", category: "Manufacturing", image: "/Clients/schewind-1.jpg" }
];

function ClientCard({ clientData }) {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <img 
        src={clientData.image} 
        alt="Client Logo" 
        style={{ maxWidth: '100%', maxHeight: '180px', objectFit: 'contain' }} 
      />
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section style={{ background: '#FFFFFF', padding: '80px 0 160px 0', position: 'relative' }}>
      
      {/* Animated Premium Header exactly matching Why Choose Us */}
      <div style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto', marginBottom: 80, padding: '0 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 24 }}
        >
          <SectionTag>Our Clients</SectionTag>
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
          Trusted by <span style={{ color: '#00446F' }}>Industry Leaders</span>
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
          Collaborating with India's leading manufacturers for over two decades, delivering reliable engineering excellence across every industrial sector.
        </motion.p>
      </div>

      {/* Static 4-Column Grid Layout */}
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: 32,
        }}>
          {clients.slice(0, 4).map((clientData) => (
            <ClientCard 
              key={clientData.id} 
              clientData={clientData} 
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          section .container > div {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 640px) {
          section .container > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
