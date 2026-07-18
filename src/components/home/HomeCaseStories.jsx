import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionTag, { RevealText } from '../ui/RevealText';

const caseStories = [
  {
    id: 1,
    slug: 'tnpl-vfd-retrofit',
    industry: 'Paper & Pulp',
    title: 'VFD Retrofit for Paper Machine Drives',
    description: 'Replaced aging DC drives with Danfoss VLT® AutomationDrive FC 302 series across 14 paper machine drives, delivering 32% energy reduction and improved process control.',
    result: '32% Energy Savings',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&h=620&fit=crop&q=85',
  },
  {
    id: 2,
    slug: 'chettinad-cement-kiln',
    industry: 'Cement Manufacturing',
    title: 'Motor & Gearbox Upgrade for Kiln Drive',
    description: 'Complete mechanical drive system upgrade for a rotary kiln using Innomotics motors and Motovario gearboxes — achieving near-zero unplanned downtime in critical production.',
    result: '99.8% Kiln Uptime',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&h=620&fit=crop&q=85',
  },
];

export default function HomeCaseStories() {
  return (
    <section style={{ padding: '120px 0', background: '#F8F9FA' }}>
      <div className="container">

        {/* Section Header */}
        <RevealText>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-end', marginBottom: 72, flexWrap: 'wrap', gap: 24,
          }}>
            <div>
              <SectionTag>Case Stories</SectionTag>
              <h2 style={{
                fontFamily: 'var(--font-heading)', fontWeight: 700,
                fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.05,
                letterSpacing: '-0.025em', color: '#000',
              }}>
                Engineering Stories<br />
                <span style={{ color: '#0067A4' }}>That Matter</span>
              </h2>
            </div>
            <Link
              to="/case-stories"
              className="btn btn-secondary"
              style={{ flexShrink: 0 }}
            >
              All Case Stories <ArrowRight size={16} />
            </Link>
          </div>
        </RevealText>

        {/* Cards Grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28 }}
          className="hcs-grid"
        >
          {caseStories.map((story, i) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to={`/case-stories/${story.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    borderRadius: 20, overflow: 'hidden',
                    background: '#001426',
                    position: 'relative',
                    minHeight: 480,
                    display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
                  }}
                  className="hcs-card"
                >
                  {/* Background Image */}
                  <img
                    src={story.image}
                    alt={story.title}
                    style={{
                      position: 'absolute', inset: 0,
                      width: '100%', height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
                    }}
                    className="hcs-card-img"
                  />

                  {/* Gradient overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(0,10,26,0.92) 0%, rgba(0,10,26,0.35) 55%, transparent 100%)',
                  }} />

                  {/* Content */}
                  <div style={{ position: 'relative', zIndex: 1, padding: '36px 36px' }}>
                    {/* Industry + result pill */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, flexWrap: 'wrap' }}>
                      <span style={{
                        fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 10,
                        letterSpacing: '0.14em', textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.6)',
                      }}>
                        {story.industry}
                      </span>
                      <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }} />
                      <span style={{
                        fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 10,
                        letterSpacing: '0.1em', textTransform: 'uppercase',
                        color: '#4F8FBF',
                        background: 'rgba(79,143,191,0.15)',
                        borderRadius: 40, padding: '4px 10px',
                      }}>
                        {story.result}
                      </span>
                    </div>

                    <h3 style={{
                      fontFamily: 'var(--font-heading)', fontWeight: 700,
                      fontSize: 'clamp(18px, 2vw, 26px)', color: '#fff',
                      lineHeight: 1.2, marginBottom: 12,
                    }}>
                      {story.title}
                    </h3>

                    <p style={{
                      fontFamily: 'var(--font-body)', fontSize: 14,
                      color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: 24,
                    }}>
                      {story.description}
                    </p>

                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12,
                      letterSpacing: '0.08em', textTransform: 'uppercase', color: '#4F8FBF',
                      borderBottom: '1px solid rgba(79,143,191,0.4)', paddingBottom: 3,
                      transition: 'color 0.2s',
                    }}>
                      Read More <ArrowRight size={14} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .hcs-grid { grid-template-columns: 1fr !important; } }
        .hcs-card:hover .hcs-card-img { transform: scale(1.05); }
      `}</style>
    </section>
  );
}
