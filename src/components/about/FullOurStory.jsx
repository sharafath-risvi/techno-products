import { motion } from 'framer-motion';

const STORY_IMG = '/Background_wallpapers/our_story.jpg';

const TIMELINE_DATA = [
  { year: '1999', title: 'Company Founded', desc: 'Started with a vision to deliver dependable engineering solutions to local industries.' },
  { year: '2005', title: 'Industrial Expansion', desc: 'Expanded our footprint into heavy machinery and complete mechanical systems.' },
  { year: '2015', title: 'Automation Solutions', desc: 'Launched our electrical and control panel division, pioneering factory automation.' },
  { year: '2025', title: 'Trusted Partner', desc: 'Recognized as India’s premier partner for precision engineering and manufacturing excellence.' }
];

export default function FullOurStory() {
  return (
    <>
      <section style={{ 
      position: 'relative', 
      background: '#FAFAFA', 
      paddingTop: 160, 
      paddingBottom: 160,
      overflow: 'visible' 
    }}>
      <div className="container" style={{ position: 'relative' }}>
        
        <div className="our-story-grid" style={{
          display: 'grid',
          gridTemplateColumns: '48% 1fr',
          gap: '7%',
          alignItems: 'start' // Critical for sticky to work
        }}>
          
          {/* LEFT: Sticky Image */}
          <div className="our-story-image-wrap" style={{
            position: 'sticky',
            top: 120,
            height: 'calc(100vh - 200px)',
            minHeight: 500,
            borderRadius: 32,
            overflow: 'hidden',
            boxShadow: '0 40px 80px -20px rgba(0,0,0,0.15)',
            transform: 'translateZ(0)' // Hardware acceleration
          }}>
            {/* Extremely slow, continuous breathing parallax */}
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
              style={{ width: '100%', height: '100%' }}
            >
              <img 
                src={STORY_IMG} 
                alt="Techno Products Engineering Facility" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* RIGHT: Scrolling Story Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 100, paddingTop: 40, paddingBottom: 40 }}>
            
            {/* Introduction */}
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                style={{
                  fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13, 
                  letterSpacing: '0.2em', color: '#D71B32', marginBottom: 24,
                  display: 'flex', alignItems: 'center', gap: 12
                }}
              >
                OUR STORY
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: 0.1 }}
                style={{ 
                  fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(36px, 4vw, 56px)',
                  color: '#111111', margin: '0 0 40px 0', letterSpacing: '-0.02em', lineHeight: 1.1
                }}
              >
                Engineering Excellence Built Over Two Decades
              </motion.h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {[
                  "Established in 1999 with a steadfast vision, Techno Products began its journey to deliver dependable, high-quality engineering solutions to the industrial sector.",
                  "Over the years, we rapidly expanded our capabilities into advanced industrial automation, high-performance motors, robust gearboxes, and complete turnkey engineering systems.",
                  "By consistently prioritizing precision and reliability, we have built lasting, deeply rooted partnerships with India's most demanding manufacturing companies.",
                  "Today, Techno Products stands at the forefront of the industry, continuing to innovate and drive manufacturing success through uncompromising quality, microscopic precision, and absolute customer trust."
                ].map((para, i) => (
                  <motion.p 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.7, delay: i * 0.1 }}
                    style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: '#555555', lineHeight: 1.7, margin: 0, fontWeight: 400 }}
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* Vertical Timeline */}
            <div>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 28, color: '#111111', marginBottom: 48 }}
              >
                The Journey
              </motion.h3>
              
              <div style={{ position: 'relative', paddingLeft: 40, display: 'flex', flexDirection: 'column', gap: 60 }}>
                {/* The vertical connecting line */}
                <div style={{ position: 'absolute', left: 4, top: 8, bottom: 8, width: 2, background: '#E2E8F0' }} />
                
                {TIMELINE_DATA.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.7 }}
                    style={{ position: 'relative' }}
                  >
                    {/* The Dot */}
                    <div style={{ position: 'absolute', left: -43, top: 6, width: 14, height: 14, borderRadius: '50%', background: '#0067A4', border: '3px solid #FFFFFF', boxShadow: '0 0 0 1px #0067A4' }} />
                    
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 24, color: '#00101F', lineHeight: 1, marginBottom: 8 }}>
                      {item.year}
                    </div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, color: '#D71B32', marginBottom: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      {item.title}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: '#666666', lineHeight: 1.6 }}>
                      {item.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievement Statistics Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 24
            }}>
              {[
                { val: '26+', label: 'Years' },
                { val: '5000+', label: 'Projects' },
                { val: 'ISO', label: 'Certified' },
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
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(32px, 3vw, 48px)', color: '#00101F', lineHeight: 1, marginBottom: 8 }}>
                    {stat.val}
                  </div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 14, color: '#777777', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
      
      <style>{`
        @media (max-width: 1023px) {
          .our-story-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .our-story-image-wrap {
            position: relative !important;
            top: auto !important;
            height: 480px !important;
            min-height: auto !important;
            border-radius: 20px !important;
          }
        }
      `}</style>
    </>
  );
}
