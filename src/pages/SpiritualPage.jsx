import { motion } from 'framer-motion';

export default function SpiritualPage() {
  return (
    <main style={{ background: '#F8FAFC', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Premium Hero Section */}
      <section style={{
        position: 'relative',
        paddingTop: '160px',
        paddingBottom: '80px',
        background: '#0F172A',
        color: '#FFFFFF',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.4,
          backgroundImage: 'url(/spiritual_images/blog_6.webp)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'blur(4px)'
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(15,23,42,0.8), rgba(15,23,42,1))'
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 style={{ color: '#0ea5e9', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '14px', marginBottom: '16px', fontWeight: 600 }}>
              Infinitheism
            </h4>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px' }}>
              Spiritual
            </h1>
            <p style={{ fontSize: '18px', color: '#CBD5E1', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
              A new way of life realizing the great hunger in the world for abundance in every sphere of human endeavour.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content & Storytelling */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: 700, color: '#0F172A', marginBottom: '32px', lineHeight: 1.2 }}>
                Inspiring Significant Breakthroughs
              </h2>
              <div style={{ fontSize: '17px', color: '#475569', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <p>
                  After transforming tens of thousands of people – top notch businessmen, global leaders, musicians, sportspersons, and students, by inspiring significant breakthroughs in their lives, by unleashing their internal spirit that drives them to excellence, Mahatria Ra has now divined a new path, infinitheism, realizing the great hunger in the world for a new way of life.
                </p>
                <p>
                  For anyone who ardently desires abundance in any sphere of human endeavour – spiritual, emotional and material, infinitheism is the path that inspire breakthroughs and allows the human spirit to realize its humongous, boundless potential.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              style={{ position: 'relative' }}
            >
              <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                <img 
                  src="/spiritual_images/blog_4-1.webp" 
                  alt="Spiritual Journey" 
                  style={{ width: '100%', height: 'auto', display: 'block' }} 
                />
              </div>
              {/* Decorative accent */}
              <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '100px', height: '100px', background: 'radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 70%)', zIndex: -1 }} />
            </motion.div>

          </div>
        </div>
      </section>



      {/* YouTube Video Section */}
      <section style={{ background: '#FFFFFF', padding: '100px 0' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 700, color: '#0F172A', marginBottom: '16px' }}>
              Experience the Path
            </h3>
            <p style={{ color: '#64748B', marginBottom: '48px', fontSize: '16px' }}>
              Watch and explore the humongous, boundless potential of the human spirit.
            </p>
            
            <div style={{ 
              position: 'relative', 
              paddingBottom: '56.25%', // 16:9 aspect ratio
              height: 0, 
              overflow: 'hidden', 
              borderRadius: '16px',
              boxShadow: '0 24px 50px rgba(0,0,0,0.1)'
            }}>
              <iframe 
                src="https://www.youtube.com/embed/Iro2tEqc3pE?start=122" 
                title="Spiritual YouTube Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
