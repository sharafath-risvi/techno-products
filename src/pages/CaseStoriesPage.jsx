import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Loader2, ArrowLeft } from 'lucide-react';
import SectionTag, { RevealText, StaggerContainer, StaggerItem } from '../components/ui/RevealText';
import { useApi } from '../hooks/useApi';

export default function CaseStoriesPage() {
  const [page, setPage] = useState(1);
  const perPage = 10;
  const { data: apiData, loading, error } = useApi(`https://technoproducts.in/wp-json/api/v1/posts?page=${page}&per_page=${perPage}`);
  
  const stories = apiData?.data || [];
  const pagination = apiData?.pagination || { page: 1, total_pages: 1, total: 0 };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.total_pages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  return (
    <main>
      {/* 1. Page Hero */}
      <section style={{ 
        background: '#001426', 
        paddingTop: 160, paddingBottom: 100, 
        position: 'relative', overflow: 'hidden' 
      }}>
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '50%', opacity: 0.35 }}>
          <img src="/industries images/case_stories.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
            {loading ? (
              [...Array(3)].map((_, i) => (
                <div key={i} style={{ 
                  background: '#fff', borderRadius: 24, overflow: 'hidden',
                  border: '1px solid rgba(0,0,0,0.06)', display: 'flex',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.04)', height: 400
                }}>
                  <div style={{ width: '100%', padding: 'clamp(40px, 5vw, 64px) clamp(40px, 6vw, 80px)', display: 'flex', flexDirection: 'column' }}>
                    <div className="skeleton-pulse" style={{ height: 32, width: '150px', background: '#E2E8F0', borderRadius: 30, marginBottom: 24 }} />
                    <div className="skeleton-pulse" style={{ height: 48, width: '70%', background: '#E2E8F0', borderRadius: 8, marginBottom: 32 }} />
                    <div className="skeleton-pulse" style={{ height: 24, width: '100%', background: '#E2E8F0', borderRadius: 4, marginBottom: 12 }} />
                    <div className="skeleton-pulse" style={{ height: 24, width: '80%', background: '#E2E8F0', borderRadius: 4, marginBottom: 48 }} />
                    <div className="skeleton-pulse" style={{ height: 44, width: '200px', background: '#E2E8F0', borderRadius: 22, marginTop: 'auto' }} />
                  </div>
                </div>
              ))
            ) : error ? (
              <div style={{ textAlign: 'center', color: '#D71B32', padding: '64px 0', fontFamily: 'var(--font-body)' }}>
                Failed to load case stories. Please try again.
              </div>
            ) : stories.length === 0 ? (
              <div style={{ textAlign: 'center', color: '#666', padding: '64px 0', fontFamily: 'var(--font-body)' }}>
                No case stories found.
              </div>
            ) : (
              stories.map((story) => {
                const categoryName = story.categories?.[0]?.name || 'Industrial Project';
                return (
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
                    {/* Content Side */}
                    <div style={{ width: '100%', padding: 'clamp(40px, 5vw, 64px) clamp(40px, 6vw, 80px)', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', marginBottom: 24 }}>
                        <div style={{ background: '#F5F7FA', color: '#0067A4', padding: '8px 20px', borderRadius: 30, fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 14, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                          {categoryName}
                        </div>
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#CBD5E1' }} />
                        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 15, color: '#64748B', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                          {new Date(story.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </div>
                      </div>

                      <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 44px)', color: '#001426', lineHeight: 1.15, marginBottom: 32, maxWidth: 900, letterSpacing: '-0.02em' }}>
                        <Link to={`/case-stories/${story.id}`} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#0067A4'} onMouseLeave={e => e.currentTarget.style.color = '#001426'} dangerouslySetInnerHTML={{ __html: story.title }} />
                      </h2>

                      <div style={{ marginBottom: 48, flexGrow: 1, maxWidth: 900 }}>
                        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 15, color: '#001426', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Executive Summary</div>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(18px, 1.8vw, 20px)', color: '#334155', lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: story.excerpt }} />
                      </div>

                      <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: 32, display: 'flex', alignItems: 'center' }}>
                        <Link to={`/case-stories/${story.id}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, color: '#0067A4', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.05em', transition: 'all 0.2s' }}
                          onMouseEnter={e => { e.currentTarget.style.gap = '16px'; e.currentTarget.querySelector('.circle-icon').style.background = '#0067A4'; e.currentTarget.querySelector('.circle-icon').style.color = '#FFFFFF'; }}
                          onMouseLeave={e => { e.currentTarget.style.gap = '12px'; e.currentTarget.querySelector('.circle-icon').style.background = '#F1F5F9'; e.currentTarget.querySelector('.circle-icon').style.color = '#0067A4'; }}
                        >
                          Read Case Story
                          <span className="circle-icon" style={{ width: 44, height: 44, borderRadius: '50%', background: '#F1F5F9', color: '#0067A4', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
                            <ArrowRight size={20} />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            )}

            {/* Pagination Controls */}
            {pagination.total_pages > 1 && (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 24, marginTop: 40 }}>
                <button 
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}
                  style={{
                    padding: '12px 24px', borderRadius: 8, border: '1px solid #E5E7EB', background: page === 1 ? '#F9FAFB' : '#FFF',
                    color: page === 1 ? '#9CA3AF' : '#001426', cursor: page === 1 ? 'not-allowed' : 'pointer',
                    fontFamily: 'var(--font-heading)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8
                  }}
                >
                  <ArrowLeft size={16} /> Previous
                </button>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: '#4B5563' }}>
                  Page {page} of {pagination.total_pages}
                </span>
                <button 
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page === pagination.total_pages}
                  style={{
                    padding: '12px 24px', borderRadius: 8, border: '1px solid #E5E7EB', background: page === pagination.total_pages ? '#F9FAFB' : '#FFF',
                    color: page === pagination.total_pages ? '#9CA3AF' : '#001426', cursor: page === pagination.total_pages ? 'not-allowed' : 'pointer',
                    fontFamily: 'var(--font-heading)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8
                  }}
                >
                  Next <ArrowRight size={16} />
                </button>
              </div>
            )}
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
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin { animation: spin 1s linear infinite; }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .skeleton-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        
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
