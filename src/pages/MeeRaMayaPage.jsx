import { motion } from 'framer-motion';

export default function MeeRaMayaPage() {
  return (
    <main style={{ background: '#F8FAFC', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Premium Hero Section */}
      <section style={{
        position: 'relative',
        paddingTop: '160px',
        paddingBottom: '100px',
        background: '#0F172A',
        color: '#FFFFFF',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.35,
          backgroundImage: 'url(/Meeraya/blog_6_1.webp)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'blur(3px)'
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(15,23,42,0.85), rgba(15,23,42,1))'
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 style={{ color: '#0ea5e9', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '14px', marginBottom: '16px', fontWeight: 600 }}>
              A Start-Living Initiative
            </h4>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px' }}>
              MeeRaMaya
            </h1>
            <p style={{ fontSize: '18px', color: '#CBD5E1', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
              Giving More & Receiving Less
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content & Storytelling */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center', marginBottom: '80px' }}>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              style={{ position: 'relative' }}
            >
              <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                <img 
                  src="/Meeraya/blog_4_1.webp" 
                  alt="MeeRaMaya Journey" 
                  style={{ width: '100%', height: 'auto', display: 'block' }} 
                />
              </div>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: 'radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 70%)', zIndex: -1 }} />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 700, color: '#0F172A', marginBottom: '24px', lineHeight: 1.3 }}>
                Empowering a Peaceful & Happy Life
              </h2>
              <div style={{ fontSize: '17px', color: '#475569', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <p>
                  MeeRaMaya has been a “Start-Living” initiative initiated by Mrs. Shobhana Narayanan in Chennai in the last two odd years.
                </p>
                <p>
                  With an intention of helping citizens lead a peaceful & happy life, MeeRaMaya, aims at providing the tools to meet this goal. “Giving More & Receiving Less” being the sole motive of this initiative, MeeRaMaya has been involved in a series of counselling sessions & workshops across various segments & age-groups.
                </p>
                <p>
                  To address the increasing stress levels leading to disjointed relationships, these Counselling sessions help in soothing frayed tempers & providing transparency & longevity to those in need. To help people identify their own inner talent, MeeRaMaya aims at building bridges between the “Giver” & the “Seeker”.
                </p>
              </div>
            </motion.div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              style={{ order: 2 }} // On mobile, text naturally goes first if we don't adjust, but let's keep visual order
            >
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 700, color: '#0F172A', marginBottom: '24px', lineHeight: 1.3 }}>
                Insights & Inspirations
              </h2>
              <div style={{ fontSize: '17px', color: '#475569', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <p>
                  MeeRaMaya has also penned down her thoughts, aspirations & desires via a series of mini publications. Within the last one year itself MeeRaMaya has been read & seen across various platforms.
                </p>
                <p>
                  Her written initiatives, both in English & Tamil, have been widely read & reviewed by many in & around the southern parts of the Country.
                </p>
                <p>
                  To give a fill-up to our Daily lives, MeeRaMaya also provides a “Daily Quote” via their website & other Online Social media & messaging applications.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              style={{ position: 'relative', order: 1 }} // Ensures image is on the left for standard desktop L/R pattern
            >
              <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                <img 
                  src="/Meeraya/spiside_1.webp" 
                  alt="MeeRaMaya Publications" 
                  style={{ width: '100%', height: 'auto', display: 'block' }} 
                />
              </div>
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
              MeeRaMaya in Action
            </h3>
            <p style={{ color: '#64748B', marginBottom: '48px', fontSize: '16px' }}>
              Learn more about the Start-Living initiative and its impact.
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
                src="https://www.youtube.com/embed/trR6HREdY4c" 
                title="MeeRaMaya YouTube Video" 
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
