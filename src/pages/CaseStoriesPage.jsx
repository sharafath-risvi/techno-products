import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import SectionTag, { RevealText, StaggerContainer, StaggerItem } from '../components/ui/RevealText';

const caseStories = [
  {
    id: 1,
    slug: 'tnpl-vfd-retrofit',
    client: 'TNPL – Tamil Nadu Newsprint',
    title: 'VFD Retrofit for Paper Machine Drives',
    industry: 'Paper & Pulp',
    result: '32% Energy Savings',
    challenge: 'Aging DC drives were causing frequent downtime and high maintenance costs. The paper machine required precise speed control for consistent product quality.',
    solution: 'Replaced the entire DC system with Danfoss VLT® AutomationDrive FC 302 series across 14 drive sections, complete with custom control panels and local HMIs.',
    impact: 'Achieved 32% direct energy savings, near-zero unplanned downtime, and improved paper web tension control leading to higher yield.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1000&h=800&fit=crop&q=80',
    tag: 'Energy Optimization',
  },
  {
    id: 2,
    slug: 'chettinad-cement-kiln',
    client: 'Chettinad Cement',
    title: 'Motor & Gearbox Upgrade for Kiln Drive',
    industry: 'Cement Manufacturing',
    result: '99.8% Uptime Achieved',
    challenge: 'The rotary kiln, a critical component of the cement plant, was experiencing repeated mechanical failures due to extreme heat and dust ingress.',
    solution: 'Designed and installed a completely new mechanical drive train utilizing heavy-duty Innomotics motors and custom-sized Motovario planetary gearboxes.',
    impact: 'Increased kiln uptime from 85% to 99.8%, significantly reducing maintenance overhead and increasing overall plant throughput.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1000&h=800&fit=crop&q=80',
    tag: 'Drive Systems',
  },
  {
    id: 3,
    slug: 'tvs-motors-automation',
    client: 'TVS Motors',
    title: 'Automation Control Panel Engineering',
    industry: 'Automotive',
    result: '40% Faster Commissioning',
    challenge: 'A new high-speed assembly line required complex, synchronized control of multiple conveyors and robotic stations under tight delivery timelines.',
    solution: 'Engineered, built, and FAT-tested comprehensive MCC and automation control panels incorporating Schneider Electric switchgear and safety relays.',
    impact: 'Plug-and-play installation on site allowed commissioning to be completed 40% ahead of schedule, enabling faster time-to-market for the new vehicle line.',
    image: 'https://images.unsplash.com/photo-1565608438257-fac3c27bdbdf?w=1000&h=800&fit=crop&q=80',
    tag: 'Control Engineering',
  },
  {
    id: 4,
    slug: 'water-treatment-pumping',
    client: 'Water Treatment Board',
    title: 'Pumping Station Efficiency Overhaul',
    industry: 'Water Treatment',
    result: '45% Energy Reduction',
    challenge: 'Municipal pumping stations were operating inefficiently with direct-on-line starting, causing pressure surges, pipe bursts, and high energy bills.',
    solution: 'Installed Danfoss AQUA Drive FC 202 VFDs with dedicated cascade controller logic across 6 major pumping stations.',
    impact: 'Eliminated water hammer effects, stabilized network pressure, and reduced energy consumption by 45% during off-peak hours.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&h=800&fit=crop&q=80',
    tag: 'Water & Wastewater',
  },
];

export default function CaseStoriesPage() {
  return (
    <main>
      {/* 1. Page Hero */}
      <section style={{ 
        background: '#001426', 
        paddingTop: 160, paddingBottom: 100, 
        position: 'relative', overflow: 'hidden' 
      }}>
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '50%', opacity: 0.35 }}>
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #001426 0%, transparent 100%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <RevealText>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#D71B32' }} />
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff' }}>
                Case Stories
              </span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 700,
              fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 1.05,
              letterSpacing: '-0.02em', color: '#FFFFFF', marginBottom: 24,
            }}>
              Engineering<br />
              <span style={{ color: '#4F8FBF' }}>Success Stories</span>
            </h1>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.5vw, 20px)',
              color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: 640,
            }}>
              Explore how TECHNO partners with India's leading industrial companies to solve complex challenges, optimize energy usage, and maximize plant uptime.
            </p>
          </RevealText>
        </div>
      </section>

      {/* 2. Featured Case Stories (List View) */}
      <section style={{ padding: '120px 0', background: '#F5F5F5' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            {caseStories.map((story, index) => (
              <motion.div 
                key={story.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                style={{ 
                  background: '#fff', borderRadius: 24, overflow: 'hidden',
                  border: '1px solid rgba(0,0,0,0.06)', display: 'flex',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.04)',
                }}
                className="case-card"
              >
                {/* Image Side */}
                <div style={{ width: '45%', position: 'relative' }} className="case-card__img">
                  <img src={story.image} alt={story.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: 24, left: 24, background: '#0067A4', color: '#fff', padding: '6px 16px', borderRadius: 20, fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    {story.industry}
                  </div>
                </div>

                {/* Content Side */}
                <div style={{ width: '55%', padding: '56px', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 14, color: '#D71B32', marginBottom: 8, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                        {story.client}
                      </div>
                      <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 32px)', color: '#000000', lineHeight: 1.2 }}>
                        <Link to={`/case-stories/${story.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                          {story.title}
                        </Link>
                      </h2>
                    </div>
                    <div style={{ background: '#D9EAF5', color: '#0067A4', padding: '12px 20px', borderRadius: 12, textAlign: 'center', minWidth: 140 }}>
                      <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 20, lineHeight: 1, marginBottom: 4 }}>{story.result.split(' ')[0]}</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        {story.result.split(' ').slice(1).join(' ')}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: 32, marginBottom: 40, flexGrow: 1 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13, color: '#000000', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>The Challenge</div>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: '#666', lineHeight: 1.6 }}>{story.challenge}</p>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13, color: '#000000', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>The Solution</div>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: '#666', lineHeight: 1.6 }}>{story.solution}</p>
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#001426', fontWeight: 500 }}>
                      <span style={{ color: '#0067A4', fontWeight: 700 }}>Impact:</span> {story.impact}
                    </div>
                    <Link to={`/case-stories/${story.slug}`} style={{ flexShrink: 0, width: 48, height: 48, borderRadius: '50%', background: '#F5F5F5', color: '#0067A4', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', textDecoration: 'none' }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#0067A4'; e.currentTarget.style.color = '#fff'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = '#F5F5F5'; e.currentTarget.style.color = '#0067A4'; }}
                    >
                      <ArrowUpRight size={20} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section style={{ padding: '100px 0', background: '#001426', textAlign: 'center' }}>
        <div className="container">
          <RevealText>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 36, color: '#fff', marginBottom: 24 }}>
              Ready to write your success story?
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: 'rgba(255,255,255,0.7)', marginBottom: 40, maxWidth: 600, marginInline: 'auto' }}>
              Partner with our engineering team to solve your facility's most pressing technical challenges.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: 14 }}>
              Discuss Your Project
              <ArrowRight size={18} />
            </Link>
          </RevealText>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .case-card { flex-direction: column !important; }
          .case-card__img { width: 100% !important; height: 320px !important; }
          .case-card > div:last-child { width: 100% !important; padding: 40px !important; }
          .case-card > div > div:nth-child(2) { flex-direction: column !important; gap: 24px !important; }
        }
      `}</style>
    </main>
  );
}
