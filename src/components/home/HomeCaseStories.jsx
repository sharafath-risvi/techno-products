import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Loader2 } from 'lucide-react';
import SectionTag, { RevealText } from '../ui/RevealText';
import { useApi } from '../../hooks/useApi';

export default function HomeCaseStories() {
  const { data: apiData, loading, error } = useApi('https://technoproducts.in/wp-json/api/v1/posts?page=1&per_page=2');
  const caseStories = apiData?.data || [];

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
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '100px 0', gridColumn: '1 / -1' }}>
              <Loader2 size={48} color="#0067A4" className="animate-spin" />
            </div>
          ) : error ? (
            <div style={{ textAlign: 'center', color: '#D71B32', padding: '64px 0', fontFamily: 'var(--font-body)', gridColumn: '1 / -1' }}>
              Failed to load case stories. Please try again.
            </div>
          ) : caseStories.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#666', padding: '64px 0', fontFamily: 'var(--font-body)', gridColumn: '1 / -1' }}>
              No case stories found.
            </div>
          ) : caseStories.map((story, i) => {
            const categoryName = story.categories?.[0]?.name || 'Industrial Project';
            return (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to={`/case-stories/${story.id}`} style={{ textDecoration: 'none', display: 'block' }}>
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
                  {/* Content */}
                  <div style={{ position: 'relative', zIndex: 1, padding: '36px 36px' }}>
                    {/* Industry + result pill */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, flexWrap: 'wrap' }}>
                      <span style={{
                        fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 10,
                        letterSpacing: '0.14em', textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.6)',
                      }}>
                        {categoryName}
                      </span>
                      <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }} />
                      <span style={{
                        fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 10,
                        letterSpacing: '0.1em', textTransform: 'uppercase',
                        color: '#4F8FBF',
                        background: 'rgba(79,143,191,0.15)',
                        borderRadius: 40, padding: '4px 10px',
                      }}>
                        {new Date(story.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </span>
                    </div>

                    <h3 
                      dangerouslySetInnerHTML={{ __html: story.title }}
                      style={{
                        fontFamily: 'var(--font-heading)', fontWeight: 700,
                        fontSize: 'clamp(18px, 2vw, 26px)', color: '#fff',
                        lineHeight: 1.2, marginBottom: 12,
                      }}
                    />

                    <div 
                      dangerouslySetInnerHTML={{ __html: story.excerpt }}
                      style={{
                        fontFamily: 'var(--font-body)', fontSize: 14,
                        color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: 24,
                      }}
                    />

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
          )})}
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin { animation: spin 1s linear infinite; }
        
        @media (max-width: 768px) { .hcs-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
