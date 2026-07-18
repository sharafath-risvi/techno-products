import { motion } from 'framer-motion';
import SectionTag from '../ui/RevealText';

const clients = [
  { id: 1, client: "TNPL", category: "Paper Industry", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&h=900&fit=crop" },
  { id: 2, client: "Larsen & Toubro", category: "Heavy Engineering", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&h=900&fit=crop" },
  { id: 3, client: "Chettinad Cement", category: "Cement Manufacturing", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=900&fit=crop" },
  { id: 4, client: "Schwing Stetter", category: "Manufacturing", image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=1600&h=900&fit=crop" }
];

function ClientCard({ clientData }) {
  return (
    <div 
      style={{ 
        width: '100%', 
        aspectRatio: '1/1',
        position: 'relative',
        borderRadius: 24, 
        overflow: 'hidden', 
        boxShadow: '0 16px 32px rgba(0,0,0,0.1)',
      }}
    >
      <img 
        src={clientData.image} 
        alt={clientData.client} 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
      />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,16,31,0.4)' }} />
      
      <h3 style={{ 
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(20px, 3vw, 32px)',
        color: '#ffffff', margin: 0, textAlign: 'center', width: '90%', pointerEvents: 'none',
        textShadow: '0 8px 24px rgba(0,0,0,0.6)', letterSpacing: '-0.02em', wordWrap: 'break-word'
      }}>
        {clientData.client}
      </h3>
      
      <div style={{
        position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)',
        background: '#ffffff', padding: '8px 16px', borderRadius: 40,
        fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11,
        color: '#00101F', letterSpacing: '0.08em', textTransform: 'uppercase',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)', whiteSpace: 'nowrap'
      }}>
        {clientData.category}
      </div>
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
