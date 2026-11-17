import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, ArrowLeft, Calendar, Clock, Tag, 
  BookOpen, Loader2, Sparkles, AlertCircle 
} from 'lucide-react';
import { RevealText } from '../components/ui/RevealText';
import { useApi } from '../hooks/useApi';

function calculateReadTime(content) {
  if (!content) return '3 min read';
  const text = content.replace(/<[^>]+>/g, ' ');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function cleanExcerpt(excerpt, maxLength = 130) {
  if (!excerpt) return '';
  const text = excerpt.replace(/<[^>]+>/g, '').replace(/\[&hellip;\]/g, '...').trim();
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

export default function BlogPage() {
  const [page, setPage] = useState(1);
  const perPage = 9;
  
  // Dynamic fetch from WordPress Posts API with category=blog filter
  const { data: apiData, loading, error } = useApi(
    `https://technoproducts.in/api/wp-json/api/v1/posts?category=blog&page=${page}&per_page=${perPage}`
  );

  const rawPosts = apiData?.data || [];
  const pagination = apiData?.pagination || { page: 1, total_pages: 1, total: 0 };

  // Defensively verify category taxonomy so only genuine Blog posts appear
  const blogPosts = rawPosts.filter(post => 
    post.categories?.some(cat => 
      cat.slug === 'blog' || 
      cat.name?.toLowerCase() === 'blog' || 
      cat.id === 332
    )
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.total_pages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <main style={{ background: '#F8F9FA', minHeight: '100vh' }}>
      
      {/* ====================================================
          SECTION 1: BLOG HERO (MATCHING CASE STORIES HERO)
          ==================================================== */}
      <section style={{ 
        background: '#001426', 
        paddingTop: 160, paddingBottom: 60, 
        position: 'relative', overflow: 'hidden' 
      }}>
        {/* Subtle geometric background grid */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }} />

        {/* Ambient background glow image */}
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '50%', opacity: 0.25, pointerEvents: 'none' }}>
          <img src="/industries images/allproducts.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #001426 0%, transparent 100%)' }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <RevealText>
            {/* Tag / Category Indicator */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#D71B32' }} />
              <span style={{ 
                fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12, 
                letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FFFFFF' 
              }}>
                Insights & Blog
              </span>
            </div>

            {/* Main Hero Heading */}
            <h1 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 700,
              fontSize: 'clamp(40px, 5.5vw, 76px)', lineHeight: 1.08,
              letterSpacing: '-0.025em', color: '#FFFFFF', marginBottom: 24, maxWidth: 850
            }}>
              Engineering Insights<br />
              <span style={{ color: '#4F8FBF' }}>& Field Perspectives</span>
            </h1>

            {/* Supporting Description */}
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.4vw, 20px)',
              color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, maxWidth: 660,
            }}>
              Technical articles, automation guides, and practical engineering solutions written by Techno Products’ engineering specialists for industrial professionals.
            </p>
          </RevealText>
        </div>
      </section>

      {/* ====================================================
          SECTION 2: BLOG LISTING (DYNAMIC WORDPRESS POSTS)
          ==================================================== */}
      <section style={{ padding: '60px 0 100px' }}>
        <div className="container">
          
          {/* Loading Skeleton State */}
          {loading && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 32 }} className="blog-cards-grid">
              {[...Array(6)].map((_, i) => (
                <div key={i} style={{ 
                  background: '#FFFFFF', borderRadius: 20, overflow: 'hidden',
                  border: '1px solid #E5E7EB', boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                  height: 440, display: 'flex', flexDirection: 'column'
                }}>
                  <div className="skeleton-pulse" style={{ height: 210, width: '100%', background: '#E2E8F0' }} />
                  <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div className="skeleton-pulse" style={{ height: 20, width: '40%', background: '#E2E8F0', borderRadius: 10, marginBottom: 16 }} />
                    <div className="skeleton-pulse" style={{ height: 28, width: '90%', background: '#E2E8F0', borderRadius: 6, marginBottom: 16 }} />
                    <div className="skeleton-pulse" style={{ height: 16, width: '100%', background: '#E2E8F0', borderRadius: 4, marginBottom: 8 }} />
                    <div className="skeleton-pulse" style={{ height: 16, width: '70%', background: '#E2E8F0', borderRadius: 4, marginBottom: 24 }} />
                    <div className="skeleton-pulse" style={{ height: 20, width: '30%', background: '#E2E8F0', borderRadius: 4, marginTop: 'auto' }} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* API Error State */}
          {!loading && error && (
            <div style={{ 
              textAlign: 'center', background: '#FFFFFF', borderRadius: 24, 
              padding: '72px 24px', border: '1px solid #FEE2E2', maxWidth: 640, margin: '0 auto' 
            }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#FEE2E2', color: '#DC2626', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <AlertCircle size={28} />
              </div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, color: '#001426', marginBottom: 12 }}>
                Unable to Load Blog Posts
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: '#64748B', lineHeight: 1.6, marginBottom: 24 }}>
                We encountered an issue connecting to the WordPress API. Please check your network connection and try again.
              </p>
              <button 
                onClick={() => window.location.reload()} 
                className="btn btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px' }}
              >
                Retry
              </button>
            </div>
          )}

          {/* Empty State: No Blog Posts Published Yet */}
          {!loading && !error && blogPosts.length === 0 && (
            <div style={{ 
              textAlign: 'center', background: '#FFFFFF', borderRadius: 24, 
              padding: '80px 32px', border: '1px solid #E5E7EB', 
              boxShadow: '0 8px 30px rgba(0,0,0,0.03)', maxWidth: 680, margin: '0 auto' 
            }}>
              <div style={{ 
                width: 72, height: 72, borderRadius: '50%', background: '#EEF4F8', 
                color: '#0067A4', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                margin: '0 auto 24px' 
              }}>
                <BookOpen size={34} />
              </div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(24px, 2.5vw, 32px)', color: '#001426', marginBottom: 14 }}>
                No Blog Articles Published Yet
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: '#64748B', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 32px' }}>
                We are actively writing detailed engineering articles, case analyses, and technical guides. New posts assigned to the Blog category in WordPress will automatically appear here.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
                <Link to="/case-stories" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  Explore Case Stories
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  Contact Our Engineers
                </Link>
              </div>
            </div>
          )}

          {/* Dynamic Blog Grid */}
          {!loading && !error && blogPosts.length > 0 && (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 32 }} className="blog-cards-grid">
                {blogPosts.map((post, idx) => {
                  const hasImage = typeof post.image === 'string' && post.image.trim() !== '';
                  const categoryTitle = post.categories?.[0]?.name || 'Blog';
                  const formattedDate = post.date 
                    ? new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
                    : '';
                  const readTime = calculateReadTime(post.content);
                  const excerpt = cleanExcerpt(post.excerpt);

                  return (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ delay: (idx % 3) * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0, 20, 38, 0.08)' }}
                      style={{
                        background: '#FFFFFF', borderRadius: 20, overflow: 'hidden',
                        border: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column',
                        transition: 'box-shadow 0.3s ease, transform 0.3s ease'
                      }}
                      className="blog-card"
                    >
                      {/* Card Image Banner */}
                      <Link to={`/insights/blog/${post.id}`} style={{ textDecoration: 'none', display: 'block', overflow: 'hidden', height: 220, position: 'relative', background: '#001426' }}>
                        {hasImage ? (
                          <img 
                            src={post.image} 
                            alt={post.title ? post.title.replace(/<[^>]+>/g, '') : 'Blog'} 
                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                            className="blog-card-image"
                          />
                        ) : (
                          <div style={{ 
                            width: '100%', height: '100%', 
                            background: 'linear-gradient(135deg, #001426 0%, #00446F 100%)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            flexDirection: 'column', gap: 10, color: 'rgba(255,255,255,0.7)', padding: 24, textAlign: 'center'
                          }}>
                            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4F8FBF' }}>
                              <BookOpen size={24} />
                            </div>
                            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)' }}>
                              Techno Products
                            </span>
                          </div>
                        )}
                        
                        {/* Category Floating Pill */}
                        <div style={{ position: 'absolute', top: 16, left: 16, zIndex: 2 }}>
                          <span style={{ 
                            background: 'rgba(0, 20, 38, 0.85)', backdropFilter: 'blur(8px)',
                            color: '#FFFFFF', padding: '5px 14px', borderRadius: 20, 
                            fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11,
                            letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.15)'
                          }}>
                            {categoryTitle}
                          </span>
                        </div>
                      </Link>

                      {/* Card Content Body */}
                      <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                        
                        {/* Meta info: Date & Read Time */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14, color: '#64748B', fontSize: 13, fontFamily: 'var(--font-body)' }}>
                          {formattedDate && (
                            <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                              <Calendar size={13} style={{ color: '#0067A4' }} />
                              {formattedDate}
                            </span>
                          )}
                          <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#CBD5E1' }} />
                          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                            <Clock size={13} style={{ color: '#0067A4' }} />
                            {readTime}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 style={{ 
                          fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 21, 
                          color: '#001426', lineHeight: 1.35, marginBottom: 14, 
                          letterSpacing: '-0.015em' 
                        }}>
                          <Link 
                            to={`/insights/blog/${post.id}`} 
                            style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}
                            onMouseEnter={e => e.currentTarget.style.color = '#0067A4'}
                            onMouseLeave={e => e.currentTarget.style.color = '#001426'}
                            dangerouslySetInnerHTML={{ __html: post.title }}
                          />
                        </h2>

                        {/* Excerpt */}
                        <p style={{ 
                          fontFamily: 'var(--font-body)', fontSize: 15, color: '#4A5568', 
                          lineHeight: 1.65, marginBottom: 24, flex: 1 
                        }}>
                          {excerpt}
                        </p>

                        {/* Card Action Link */}
                        <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: 18, marginTop: 'auto' }}>
                          <Link 
                            to={`/insights/blog/${post.id}`}
                            style={{ 
                              display: 'inline-flex', alignItems: 'center', gap: 8, 
                              fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 14, 
                              color: '#0067A4', textDecoration: 'none', textTransform: 'uppercase', 
                              letterSpacing: '0.06em', transition: 'gap 0.2s ease, color 0.2s ease' 
                            }}
                            onMouseEnter={e => { e.currentTarget.style.gap = '12px'; e.currentTarget.style.color = '#00446F'; }}
                            onMouseLeave={e => { e.currentTarget.style.gap = '8px'; e.currentTarget.style.color = '#0067A4'; }}
                          >
                            Read More
                            <ArrowRight size={16} />
                          </Link>
                        </div>

                      </div>
                    </motion.article>
                  );
                })}
              </div>

              {/* Pagination Controls */}
              {pagination.total_pages > 1 && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12, marginTop: 56 }}>
                  <button
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page <= 1}
                    style={{
                      padding: '10px 18px', borderRadius: 10, border: '1px solid #CBD5E1',
                      background: page <= 1 ? '#F8F9FA' : '#FFFFFF',
                      color: page <= 1 ? '#94A3B8' : '#001426',
                      cursor: page <= 1 ? 'not-allowed' : 'pointer',
                      display: 'flex', alignItems: 'center', gap: 6,
                      fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14
                    }}
                  >
                    <ArrowLeft size={16} /> Previous
                  </button>

                  <div style={{ display: 'flex', gap: 8 }}>
                    {[...Array(pagination.total_pages)].map((_, i) => {
                      const pNum = i + 1;
                      const isActive = pNum === page;
                      return (
                        <button
                          key={pNum}
                          onClick={() => handlePageChange(pNum)}
                          style={{
                            width: 40, height: 40, borderRadius: 10, border: 'none',
                            background: isActive ? '#0067A4' : '#FFFFFF',
                            color: isActive ? '#FFFFFF' : '#001426',
                            fontWeight: 700, fontSize: 14, cursor: 'pointer',
                            boxShadow: isActive ? '0 4px 12px rgba(0,103,164,0.3)' : '0 1px 3px rgba(0,0,0,0.06)'
                          }}
                        >
                          {pNum}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page >= pagination.total_pages}
                    style={{
                      padding: '10px 18px', borderRadius: 10, border: '1px solid #CBD5E1',
                      background: page >= pagination.total_pages ? '#F8F9FA' : '#FFFFFF',
                      color: page >= pagination.total_pages ? '#94A3B8' : '#001426',
                      cursor: page >= pagination.total_pages ? 'not-allowed' : 'pointer',
                      display: 'flex', alignItems: 'center', gap: 6,
                      fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14
                    }}
                  >
                    Next <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </>
          )}

        </div>
      </section>

      <style>{`
        .blog-card:hover .blog-card-image {
          transform: scale(1.05);
        }
        .skeleton-pulse {
          animation: skeleton-pulse 1.5s ease-in-out infinite;
        }
        @keyframes skeleton-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @media (max-width: 768px) {
          .blog-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
