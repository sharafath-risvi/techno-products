import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionTag, { RevealText, StaggerContainer, StaggerItem } from '../ui/RevealText';

const caseStories = [
  {
    id: 1,
    client: 'TNPL – Tamil Nadu Newsprint',
    title: 'VFD Retrofit for Paper Machine Drives',
    industry: 'Paper & Pulp',
    result: '32% Energy Savings',
    desc: 'Replaced aging DC drives with Danfoss VLT® AutomationDrive FC 302 series across 14 paper machine drives, delivering significant energy reduction and improved process control.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop&q=80',
    tag: 'Energy Optimization',
  },
  {
    id: 2,
    client: 'Chettinad Cement',
    title: 'Motor & Gearbox Upgrade for Kiln Drive',
    industry: 'Cement Manufacturing',
    result: '99.8% Uptime Achieved',
    desc: 'Complete mechanical drive system upgrade for a rotary kiln using Innomotics motors and Motovario gearboxes, achieving near-zero unplanned downtime in critical production.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=600&fit=crop&q=80',
    tag: 'Drive Systems',
  },
  {
    id: 3,
    client: 'TVS Motors',
    title: 'Automation Control Panel Engineering',
    industry: 'Automotive',
    result: '40% Faster Commissioning',
    desc: 'Designed and fabricated custom MCC and automation control panels with integrated VFD drives for a new manufacturing line, completing commissioning 40% ahead of schedule.',
    image: 'https://images.unsplash.com/photo-1565608438257-fac3c27bdbdf?w=800&h=600&fit=crop&q=80',
    tag: 'Control Engineering',
  },
];

export default function CaseStoriesPreview() {
  return (
    <section style={{ padding: '120px 0', background: '#fff' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, flexWrap: 'wrap', gap: 24 }}>
          <RevealText>
            <SectionTag>Case Stories</SectionTag>
            <h2 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 700,
              fontSize: 'clamp(28px,3.5vw,52px)', lineHeight: 1.05,
              letterSpacing: '-0.02em', color: '#000000',
            }}>
              Engineering Stories<br />
              <span style={{ color: '#00446F' }}>That Matter</span>
            </h2>
          </RevealText>
          <RevealText delay={0.1}>
            <Link to="/case-stories" className="btn btn-secondary">
              All Case Stories
              <ArrowRight size={16} />
            </Link>
          </RevealText>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 }}>
          {/* Featured card */}
          <StaggerItem>
            <Link to="/case-stories" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35 }}
                style={{
                  borderRadius: 20, overflow: 'hidden',
                  background: '#001426',
                  height: '100%', minHeight: 480,
                  position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                }}
              >
                <img
                  src={caseStories[0].image}
                  alt={caseStories[0].title}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }}
                />
                <div style={{ position: 'relative', zIndex: 1, padding: '40px 40px' }}>
                  <div style={{ display: 'flex', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>
                      {caseStories[0].industry}
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#4F8FBF' }}>
                      {caseStories[0].result}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 24, color: '#fff', lineHeight: 1.2, marginBottom: 12 }}>
                    {caseStories[0].title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 24 }}>
                    {caseStories[0].desc}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#4F8FBF', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13 }}>
                    Read Story <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            </Link>
          </StaggerItem>

          {/* Side cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {caseStories.slice(1).map((cs) => (
              <Link key={cs.id} to="/case-stories" style={{ textDecoration: 'none', flex: 1 }}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(0,0,0,0.12)' }}
                  transition={{ duration: 0.35 }}
                  style={{
                    borderRadius: 16, overflow: 'hidden',
                    border: '1px solid rgba(0,0,0,0.07)',
                    background: '#fff', height: '100%',
                  }}
                >
                  <div style={{ height: 160, overflow: 'hidden' }}>
                    <img src={cs.image} alt={cs.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '20px 24px' }}>
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0067A4', display: 'block', marginBottom: 8 }}>
                      {cs.result}
                    </span>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 15, color: '#000000', lineHeight: 1.3, marginBottom: 6 }}>
                      {cs.title}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#999' }}>{cs.industry}</div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
