import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Newspaper, Megaphone } from 'lucide-react';
import SectionTag, { RevealText } from '../components/ui/RevealText';
import CTASection from '../components/home/CTASection';

export default function NewsroomPage() {
  // Ensure top scroll
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main style={{ background: '#FAFAFA', minHeight: '100vh' }}>
      {/* ================================================== */}
      {/* SECTION 1: MODERN NEWSROOM HERO                    */}
      {/* ================================================== */}
      <section 
        style={{ 
          position: 'relative', 
          backgroundColor: '#0F172A', // Dark premium industrial bg
          color: '#FFFFFF',
          padding: '160px 0 100px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          minHeight: '70vh'
        }}
      >
        {/* Subtle engineering grid & lines */}
        <div 
          style={{
            position: 'absolute', inset: 0, opacity: 0.1,
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />
        {/* Abstract geometric elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            position: 'absolute', top: '10%', right: '5%',
            width: '40vw', height: '40vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,103,164,0.15) 0%, rgba(15,23,42,0) 70%)',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        />
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          style={{
            position: 'absolute', bottom: '15%', left: '10%',
            width: '2px', height: '100px',
            backgroundColor: '#A91D44', // Red accent
            zIndex: 0,
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '800px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}
            >
              <span style={{ width: 40, height: 2, background: '#0067A4' }}></span>
              <span style={{ 
                fontFamily: 'var(--font-heading)', 
                fontSize: 12, 
                letterSpacing: '0.15em', 
                color: '#4F8FBF', 
                textTransform: 'uppercase' 
              }}>
                Insights / Newsroom
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ 
                fontFamily: 'var(--font-heading)', 
                fontSize: 'clamp(48px, 6vw, 84px)', 
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                marginBottom: 32
              }}
            >
              Newsroom
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ 
                fontFamily: 'var(--font-body)', 
                fontSize: 'clamp(18px, 2vw, 22px)', 
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: 1.6,
                maxWidth: '600px'
              }}
            >
              Discover the latest updates, milestones and stories from Techno Products.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 2: NEWSROOM INTRODUCTION                     */}
      {/* ================================================== */}
      <section style={{ padding: '100px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <RevealText>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <SectionTag>Inside Techno Products</SectionTag>
              </div>
              <h2 style={{ 
                fontFamily: 'var(--font-heading)', 
                fontSize: 'clamp(28px, 4vw, 42px)', 
                fontWeight: 700, 
                color: '#00446F',
                marginTop: 24,
                marginBottom: 24,
                lineHeight: 1.2
              }}>
                Stay connected with the latest developments, milestones and stories shaping our journey.
              </h2>
              <div style={{ width: 60, height: 3, background: '#D71B32', margin: '0 auto' }}></div>
            </RevealText>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 3: LATEST UPDATES / NEWS                     */}
      {/* ================================================== */}
      <section style={{ padding: '100px 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 60 }}>
            <div>
              <div style={{ fontSize: 13, color: '#0067A4', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>
                Company News
              </div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(32px, 5vw, 48px)', color: '#0F172A', margin: 0 }}>
                Latest Updates
              </h2>
            </div>
            <div style={{ display: 'none', '@media (min-width: 768px)': { display: 'block' } }}>
              <Newspaper size={48} color="#CBD5E1" strokeWidth={1} />
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            style={{ 
              background: '#FFFFFF', 
              border: '1px dashed #CBD5E1', 
              borderRadius: 16, 
              padding: '80px 40px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
            }}
          >
            <div style={{ 
              width: 64, height: 64, borderRadius: '50%', background: '#F1F5F9', 
              display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 
            }}>
              <Newspaper size={28} color="#94A3B8" />
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700, color: '#1E293B', marginBottom: 16 }}>
              New updates are coming soon.
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: '#000000', maxWidth: 400, margin: '0 auto', lineHeight: 1.6 }}>
              We are currently curating our latest stories and news. Please check back later for exciting announcements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 4: MEDIA & ANNOUNCEMENTS                     */}
      {/* ================================================== */}
      <section style={{ padding: '100px 0', background: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div style={{ fontSize: 13, color: '#A91D44', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>
              Press & Media
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(32px, 5vw, 48px)', color: '#00446F', margin: 0 }}>
              Media & Announcements
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: '#000000', maxWidth: 600, margin: '24px auto 0', lineHeight: 1.6 }}>
              Explore future announcements, media coverage and company updates from Techno Products.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
            {/* Empty state cards */}
            {[1, 2, 3].map((item, idx) => (
              <motion.div 
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                style={{ 
                  background: '#F8FAFC',
                  border: '1px solid #F1F5F9',
                  borderRadius: 12,
                  padding: 40,
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Decorative corner accent */}
                <div style={{ position: 'absolute', top: 0, right: 0, width: 40, height: 40, background: 'linear-gradient(135deg, transparent 50%, #E2E8F0 50%)' }}></div>
                
                <div style={{ marginBottom: 24 }}>
                  <Megaphone size={24} color="#CBD5E1" />
                </div>
                <div style={{ height: 20, width: '40%', background: '#E2E8F0', borderRadius: 4, marginBottom: 12 }}></div>
                <div style={{ height: 16, width: '80%', background: '#F1F5F9', borderRadius: 4, marginBottom: 8 }}></div>
                <div style={{ height: 16, width: '60%', background: '#F1F5F9', borderRadius: 4 }}></div>
                
                <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 13, color: '#000000', fontFamily: 'var(--font-body)', fontWeight: 500, textTransform: 'uppercase' }}>
                    Coming Soon
                  </span>
                  <ArrowRight size={16} color="#CBD5E1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
