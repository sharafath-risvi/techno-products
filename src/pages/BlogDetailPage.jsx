import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, ArrowLeft, Calendar, Clock, Tag, 
  Share2, CheckCircle2, Phone, Mail, BookOpen, Loader2 
} from 'lucide-react';
import { RevealText } from '../components/ui/RevealText';
import { useApi } from '../hooks/useApi';

function isImageInContent(content, imageUrl) {
  if (!content || !imageUrl || typeof content !== 'string' || typeof imageUrl !== 'string') {
    return false;
  }
  const normalizedContent = content.replace(/\\\//g, '/');
  if (normalizedContent.includes(imageUrl)) return true;

  try {
    const filename = imageUrl.split('/').pop().split('?')[0];
    if (filename) {
      if (normalizedContent.includes(filename)) return true;
      const baseName = filename.replace(/(-scaled|-\d+x\d+)(\.[a-zA-Z0-9]+)$/, '$2');
      if (baseName && baseName !== filename && normalizedContent.includes(baseName)) {
        return true;
      }
    }
  } catch (e) {
    // ignore
  }
  return false;
}

function calculateReadTime(content) {
  if (!content) return '3 min read';
  const text = content.replace(/<[^>]+>/g, ' ');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export default function BlogDetailPage() {
  const { postId } = useParams();
  const isNumeric = Boolean(postId && /^\d+$/.test(postId));
  const url = isNumeric
    ? `https://technoproducts.in/api/wp-json/api/v1/posts/${postId}`
    : `https://technoproducts.in/api/wp-json/api/v1/posts?slug=${postId}`;

  const { data: apiData, loading, error } = useApi(url);
  const post = isNumeric ? apiData : (apiData?.data?.[0] || null);

  const featuredImage = (typeof post?.image === 'string' && post.image.trim() !== '') ? post.image : null;
  const imageAlreadyInContent = featuredImage ? isImageInContent(post?.content, featuredImage) : false;
  const shouldRenderFeaturedImage = Boolean(featuredImage && !imageAlreadyInContent);

  // Form state for consultation sidebar
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    industry: 'Engineering & Manufacturing',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  if (loading) {
    return (
      <main style={{ padding: '160px 0 60px', background: '#FFFFFF', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Loader2 size={48} color="#0067A4" className="animate-spin" />
      </main>
    );
  }

  if (error || !post) {
    return (
      <main style={{ padding: '160px 0 80px', background: '#FFFFFF', minHeight: '80vh', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 640 }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#FEE2E2', color: '#DC2626', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <BookOpen size={30} />
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, color: '#001426', marginBottom: 16 }}>
            Blog Post Not Found
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: '#555555', lineHeight: 1.6, marginBottom: 32 }}>
            The article you are looking for may have been removed, moved, or is not yet published in WordPress.
          </p>
          <Link to="/insights/blog" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <ArrowLeft size={18} />
            Back to All Articles
          </Link>
        </div>
      </main>
    );
  }

  const categoryName = post.categories?.[0]?.name || 'Engineering Blog';
  const formattedDate = post.date 
    ? new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : '';
  const readTime = calculateReadTime(post.content);

  return (
    <main style={{ background: '#FFFFFF', minHeight: '100vh', position: 'relative' }}>
      
      {/* ====================================================
          1. HERO HEADER SECTION
          ==================================================== */}
      <section style={{ 
        position: 'relative', zIndex: 1, paddingTop: 150, paddingBottom: 80, 
        background: '#001426', color: '#FFFFFF', borderBottom: '1px solid rgba(255,255,255,0.08)' 
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

        <div className="container" style={{ maxWidth: 1280, position: 'relative', zIndex: 2 }}>
          
          {/* Breadcrumb / Top Tag */}
          <RevealText>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <Link to="/insights/blog" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, color: 'rgba(255,255,255,0.8)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, transition: 'color 0.2s' }}>
                ← All Articles
              </Link>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>/</span>
              <span style={{ 
                fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, 
                letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4F8FBF' 
              }}>
                INSIGHTS & BLOG
              </span>
            </div>
          </RevealText>

          {/* Title & Metadata */}
          <div style={{ maxWidth: 900 }}>
            <RevealText>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(79, 143, 191, 0.15)', color: '#4F8FBF', padding: '6px 16px', borderRadius: 20, fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
                <Tag size={13} />
                {categoryName}
              </div>

              <h1 
                style={{ 
                  fontFamily: 'var(--font-heading)', fontWeight: 700, 
                  fontSize: 'clamp(32px, 4.2vw, 54px)', lineHeight: 1.15, 
                  letterSpacing: '-0.025em', color: '#FFFFFF', marginBottom: 28 
                }} 
                dangerouslySetInnerHTML={{ __html: post.title }} 
              />

              {/* Metadata row */}
              <div style={{ 
                display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap',
                paddingTop: 16, borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                color: 'rgba(255, 255, 255, 0.75)', fontSize: 14, fontFamily: 'var(--font-body)'
              }}>
                {formattedDate && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Calendar size={15} style={{ color: '#4F8FBF' }} />
                    <span>{formattedDate}</span>
                  </div>
                )}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Clock size={15} style={{ color: '#4F8FBF' }} />
                  <span>{readTime}</span>
                </div>
                <button 
                  onClick={handleShare}
                  style={{ 
                    background: 'none', border: 'none', color: copied ? '#10B981' : 'rgba(255, 255, 255, 0.75)', 
                    cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, 
                    fontFamily: 'var(--font-body)', marginLeft: 'auto', padding: 0 
                  }}
                >
                  <Share2 size={15} />
                  {copied ? 'Link Copied!' : 'Share Article'}
                </button>
              </div>
            </RevealText>
          </div>
        </div>
      </section>

      {/* ====================================================
          2. MAIN CONTENT AREA (EDITORIAL 70/30 LAYOUT)
          ==================================================== */}
      <section style={{ position: 'relative', zIndex: 1, padding: '48px 0 100px', background: '#F8F9FA' }}>
        <div className="container" style={{ maxWidth: 1280 }}>
          <div className="blog-main-layout" style={{ display: 'grid', gridTemplateColumns: '7fr 3fr', gap: 48, alignItems: 'start' }}>
            
            {/* Left Column: Full Editorial Content */}
            <div style={{ minWidth: 0 }}>
              <div style={{ 
                background: '#FFFFFF', borderRadius: 24, padding: 'clamp(28px, 4vw, 48px)',
                border: '1px solid #E5E7EB', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)' 
              }}>
                
                {/* Featured Image (if available and not duplicated in content) */}
                {shouldRenderFeaturedImage && (
                  <div style={{ 
                    marginBottom: 36, borderRadius: 16, overflow: 'hidden', 
                    background: '#F1F5F9', border: '1px solid #E2E8F0' 
                  }}>
                    <img 
                      src={featuredImage} 
                      alt={post.title ? post.title.replace(/<[^>]+>/g, '') : 'Blog Article'} 
                      onError={(e) => { e.currentTarget.parentElement.style.display = 'none'; }}
                      style={{ width: '100%', maxHeight: 460, objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                )}

                {/* Article HTML Body from WordPress */}
                <div 
                  className="blog-article-content" 
                  dangerouslySetInnerHTML={{ __html: post.content }} 
                />

                {/* Article Footer & Tags */}
                <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid #E5E7EB', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Category:</span>
                    {post.categories?.map(c => (
                      <span key={c.id} style={{ background: '#EEF4F8', color: '#0067A4', padding: '4px 12px', borderRadius: 16, fontSize: 12, fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                        {c.name}
                      </span>
                    ))}
                  </div>

                  <Link to="/insights/blog" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
                    <ArrowLeft size={16} />
                    Back to All Articles
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Consultation & Author Panel */}
            <div className="blog-sticky-sidebar scrollbar-hide" style={{ 
              position: 'sticky', top: 120, zIndex: 10,
              maxHeight: 'calc(100vh - 140px)', overflowY: 'auto'
            }}>
              <div style={{
                background: '#FFFFFF', borderRadius: 24, padding: 32,
                border: '1px solid #E5E7EB',
                boxShadow: '0 8px 30px rgba(0, 20, 38, 0.04)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, letterSpacing: '0.12em', color: '#0067A4', textTransform: 'uppercase' }}>
                    TECHNICAL EXPERTISE
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 22, color: '#001426', marginBottom: 10 }}>
                  Have an Application Challenge?
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#555555', lineHeight: 1.6, marginBottom: 24 }}>
                  Connect with our field application engineers for sizing, retrofit evaluations, or energy optimization advice.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ background: '#E8F5ED', border: '1px solid #12703C', padding: 24, borderRadius: 16, textAlign: 'center', marginBottom: 24 }}
                  >
                    <CheckCircle2 size={36} style={{ color: '#12703C', margin: '0 auto 12px' }} />
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, color: '#001426', marginBottom: 6 }}>
                      Inquiry Received!
                    </h4>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#000000', lineHeight: 1.5 }}>
                      Our industrial engineers will contact you within 4 business hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 12, color: '#000000', marginBottom: 6 }}>Full Name *</label>
                      <input 
                        type="text" required placeholder="e.g. Rajesh Kumar"
                        value={formData.fullName} onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                        style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid #CBD5E1', fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none', background: '#FAFAFA' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 12, color: '#000000', marginBottom: 6 }}>Company Name *</label>
                      <input 
                        type="text" required placeholder="e.g. ABC Manufacturing"
                        value={formData.companyName} onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                        style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid #CBD5E1', fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none', background: '#FAFAFA' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 12, color: '#000000', marginBottom: 6 }}>Phone / Email *</label>
                      <input 
                        type="text" required placeholder="+91... or email@company.com"
                        value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid #CBD5E1', fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none', background: '#FAFAFA' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 12, color: '#000000', marginBottom: 6 }}>Project / Question</label>
                      <textarea 
                        rows="3" placeholder="Briefly describe your motor, drive, or automation requirement..."
                        value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                        style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid #CBD5E1', fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none', background: '#FAFAFA', resize: 'vertical' }}
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="btn btn-primary"
                      style={{ width: '100%', padding: '14px', fontSize: 14, fontWeight: 700, borderRadius: 10, marginTop: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
                    >
                      Connect With Engineers
                      <ArrowRight size={16} />
                    </button>
                  </form>
                )}

                {/* Direct Contact info */}
                <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <a href="tel:+919840062220" style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-body)', fontSize: 13, color: '#0067A4', textDecoration: 'none' }}>
                    <Phone size={15} />
                    +91 98400 62220
                  </a>
                  <a href="mailto:info@technoproducts.in" style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-body)', fontSize: 13, color: '#0067A4', textDecoration: 'none' }}>
                    <Mail size={15} />
                    info@technoproducts.in
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin { animation: spin 1s linear infinite; }
        
        .blog-article-content {
          font-family: var(--font-body);
          font-size: 18px;
          color: #2D3748;
          line-height: 1.85;
          font-weight: 400;
        }
        .blog-article-content h2, 
        .blog-article-content h3, 
        .blog-article-content h4 {
          font-family: var(--font-heading);
          color: #001426;
          font-weight: 700;
          letter-spacing: -0.015em;
          margin-top: 36px;
          margin-bottom: 16px;
        }
        .blog-article-content h2 { font-size: 28px; line-height: 1.3; }
        .blog-article-content h3 { font-size: 22px; line-height: 1.35; }
        .blog-article-content h4 { font-size: 19px; line-height: 1.4; }
        .blog-article-content p {
          margin-bottom: 24px;
        }
        .blog-article-content strong, 
        .blog-article-content b {
          font-weight: 700;
          color: #001426;
        }
        .blog-article-content ul, 
        .blog-article-content ol {
          margin-bottom: 24px;
          padding-left: 28px;
        }
        .blog-article-content li {
          margin-bottom: 10px;
          line-height: 1.75;
        }
        .blog-article-content img {
          max-width: 100%;
          height: auto;
          border-radius: 12px;
          margin: 28px auto;
          display: block;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }
        .blog-article-content blockquote {
          border-left: 4px solid #0067A4;
          padding-left: 20px;
          margin: 28px 0;
          font-style: italic;
          color: #4A5568;
        }
        .blog-article-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 28px 0;
        }
        .blog-article-content th, 
        .blog-article-content td {
          border: 1px solid #E2E8F0;
          padding: 12px 16px;
          text-align: left;
        }
        .blog-article-content th {
          background: #F8FAFC;
          font-weight: 700;
        }
        .blog-article-content a {
          color: #0067A4;
          text-decoration: underline;
        }
        .blog-article-content a:hover {
          color: #00446F;
        }

        @media (max-width: 1024px) {
          .blog-main-layout { grid-template-columns: 1fr !important; gap: 40px !important; }
          .blog-sticky-sidebar { position: static !important; max-height: none !important; }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </main>
  );
}
