import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, Phone, Mail, Clock, MapPin, 
  Building2, Calendar, Award, ShieldCheck, Loader2
} from 'lucide-react';
import SectionTag, { RevealText, StaggerContainer, StaggerItem } from '../components/ui/RevealText';
import { useApi } from '../hooks/useApi';

export default function CaseStoryDetailPage() {
  const { postId } = useParams();
  
  const { data: apiData, loading, error } = useApi(`https://technoproducts.in/wp-json/api/v1/posts/${postId}`);
  const story = apiData;

  // Form state for sticky panel
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    industry: 'Paper & Pulp',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (loading) {
    return (
      <main style={{ padding: '140px 0 100px', background: '#FFFFFF', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Loader2 size={48} color="#0067A4" className="animate-spin" />
      </main>
    );
  }

  if (error || !story) {
    return (
      <main style={{ padding: '140px 0 100px', background: '#FFFFFF', minHeight: '80vh', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 600 }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, color: '#001426', marginBottom: 16 }}>
            Case Story Not Found
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: '#64748B', marginBottom: 32 }}>
            The case story you are looking for may have been updated or moved.
          </p>
          <Link to="/case-stories" className="btn btn-primary" style={{ display: 'inline-flex' }}>
            Back to Case Stories
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main style={{ background: '#FFFFFF', minHeight: '100vh', position: 'relative' }}>
      
      {/* ====================================================
          1. EDITORIAL HERO SECTION (CLEAN DARK BACKGROUND & SINGLE HIGH-IMPACT IMAGE)
          ==================================================== */}
      <section style={{ 
        position: 'relative', zIndex: 1, paddingTop: 140, paddingBottom: 100, 
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

        <div className="container" style={{ maxWidth: 1340, position: 'relative', zIndex: 2 }}>
          
          {/* Breadcrumb / Top Tag */}
          <RevealText>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <Link to="/case-stories" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, color: '#FFFFFF', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
                ← All Case Stories
              </Link>
              <span style={{ color: 'rgba(255,255,255,0.6)' }}>/</span>
              <span style={{ 
                fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, 
                letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FFFFFF' 
              }}>
                CASE STORY DETAIL
              </span>
            </div>
          </RevealText>

          {/* Hero Single-Column Layout */}
          <div className="cs-hero-grid" style={{ maxWidth: 800 }}>
            
            {/* Content */}
            <div>
              <RevealText>
                <h1 style={{ 
                  fontFamily: 'var(--font-heading)', fontWeight: 700, 
                  fontSize: 'clamp(32px, 3.8vw, 54px)', lineHeight: 1.12, 
                  letterSpacing: '-0.025em', color: '#FFFFFF', marginBottom: 28 
                }} dangerouslySetInnerHTML={{ __html: story.title }} />

                {/* Key Metadata Grid */}
                <div style={{ 
                  display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, 
                  marginBottom: 32, background: 'rgba(255, 255, 255, 0.05)', padding: 24, 
                  borderRadius: 20, border: '1px solid rgba(255, 255, 255, 0.12)' 
                }} className="cs-meta-grid">
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: 11, fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                       Date
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: '#FFFFFF' }}>{new Date(story.date).toLocaleDateString()}</div>
                  </div>

                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: 11, fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                       Category
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: '#FFFFFF' }}>{story.categories?.[0]?.name || 'Industrial Project'}</div>
                  </div>
                </div>

                {/* CTA Button */}
                <div>
                  <Link to="/case-stories" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: 15, borderRadius: 40, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                    Explore Similar Projects
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </RevealText>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          2. MAIN PAGE CONTENT: TWO-COLUMN LAYOUT (70% / 30%)
          ==================================================== */}
      <section style={{ position: 'relative', zIndex: 1, padding: '80px 0 120px' }}>
        <div className="container" style={{ maxWidth: 1340 }}>
          <div className="cs-main-layout" style={{ display: 'grid', gridTemplateColumns: '7fr 3fr', gap: 56, alignItems: 'start' }}>
            
            {/* ====================================================
                LEFT COLUMN (70%): EDITORIAL SECTIONS & GALLERY
                ==================================================== */}
            <div style={{ minWidth: 0 }}>
              <RevealText>
                <div style={{ marginBottom: 48, background: '#FFFFFF', padding: '36px 40px', borderRadius: 24, border: '1px solid #E5E7EB', boxShadow: '0 4px 20px rgba(0,0,0,0.025)' }}>
                  <div className="post-content" dangerouslySetInnerHTML={{ __html: story.content }} />
                </div>
              </RevealText>
            </div>

            {/* ====================================================
                RIGHT COLUMN (30%): STICKY CONSULTATION PANEL
                ==================================================== */}
            <div className="cs-sticky-sidebar scrollbar-hide" style={{ 
              position: 'sticky', top: 120, zIndex: 10,
              maxHeight: 'calc(100vh - 140px)', overflowY: 'auto'
            }}>
              <div style={{
                background: '#FFFFFF', borderRadius: 24, padding: 32,
                border: '1px solid #E5E7EB',
                boxShadow: '0 12px 36px rgba(0, 20, 38, 0.04)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, letterSpacing: '0.12em', color: '#0067A4', textTransform: 'uppercase' }}>
                    ENGINEERING SUPPORT
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 24, color: '#001426', marginBottom: 10 }}>
                  Need a Similar Solution?
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#666', lineHeight: 1.65, marginBottom: 24 }}>
                  Consult our application engineers to evaluate custom drive and automation upgrades for your plant.
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
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#444', lineHeight: 1.5 }}>
                      Our industrial specialists will review your requirements and contact you within 4 business hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 12, color: '#333', marginBottom: 6 }}>Full Name *</label>
                      <input 
                        type="text" required placeholder="e.g. Rajesh Kumar"
                        value={formData.fullName} onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                        style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid #CBD5E1', fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none', background: '#FAFAFA' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 12, color: '#333', marginBottom: 6 }}>Company Name *</label>
                      <input 
                        type="text" required placeholder="e.g. ABC Manufacturing"
                        value={formData.companyName} onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                        style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid #CBD5E1', fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none', background: '#FAFAFA' }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                      <div>
                        <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 12, color: '#333', marginBottom: 6 }}>Phone *</label>
                        <input 
                          type="tel" required placeholder="+91..."
                          value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid #CBD5E1', fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none', background: '#FAFAFA' }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 12, color: '#333', marginBottom: 6 }}>Email *</label>
                        <input 
                          type="email" required placeholder="name@company.com"
                          value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                          style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid #CBD5E1', fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none', background: '#FAFAFA' }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 12, color: '#333', marginBottom: 6 }}>Industry Sector</label>
                      <select 
                        value={formData.industry} onChange={e => setFormData({ ...formData, industry: e.target.value })}
                        style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid #CBD5E1', fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none', background: '#FAFAFA' }}
                      >
                        <option value="Paper & Pulp">Paper & Pulp</option>
                        <option value="Cement & Heavy Industry">Cement & Heavy Industry</option>
                        <option value="Automotive & Assembly">Automotive & Assembly</option>
                        <option value="Water & Utilities">Water & Utilities</option>
                        <option value="Food & Beverage">Food & Beverage</option>
                        <option value="Other Industrial">Other Industrial</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 12, color: '#333', marginBottom: 6 }}>Project Details / Message</label>
                      <textarea 
                        rows="3" placeholder="Briefly describe your plant application or drive requirement..."
                        value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                        style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid #CBD5E1', fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none', background: '#FAFAFA', resize: 'vertical' }}
                      />
                    </div>

                    <button 
                      type="submit" className="btn btn-primary"
                      style={{ width: '100%', padding: '14px', fontSize: 15, fontWeight: 700, borderRadius: 40, marginTop: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
                    >
                      Request Consultation
                      <ArrowRight size={18} />
                    </button>
                  </form>
                )}

                {/* Supporting Contact Details */}
                <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: 22, marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <a href="tel:+914448555333" style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#333', textDecoration: 'none', fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 10, background: '#F5F7FA', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0067A4', flexShrink: 0 }}>
                      <Phone size={15} />
                    </div>
                    +91 44 4855 5333
                  </a>

                  <a href="mailto:solutions@technoproducts.in" style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#333', textDecoration: 'none', fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 10, background: '#F5F7FA', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0067A4', flexShrink: 0 }}>
                      <Mail size={15} />
                    </div>
                    solutions@technoproducts.in
                  </a>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#666', fontFamily: 'var(--font-body)', fontSize: 13 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 10, background: '#F5F7FA', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666', flexShrink: 0 }}>
                      <Clock size={15} />
                    </div>
                    Mon – Sat: 9:00 AM – 6:30 PM
                  </div>

                  {/* Trust Badge */}
                  <div style={{ 
                    marginTop: 10, background: 'var(--color-green-xlight)', padding: '12px 16px', borderRadius: 14, 
                    border: '1px solid var(--color-green-xlight)', display: 'flex', alignItems: 'center', gap: 10 
                  }}>
                    <ShieldCheck size={20} style={{ color: 'var(--color-green)', flexShrink: 0 }} />
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12, color: '#001426', lineHeight: 1.3 }}>
                      Trusted Engineering Partner <span style={{ fontWeight: 500, color: '#666', display: 'block', fontSize: 11 }}>26+ Years of Industrial Excellence</span>
                    </div>
                  </div>
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
        
        .post-content {
          font-family: var(--font-body);
          font-size: 17px;
          color: #444;
          line-height: 1.85;
          font-weight: 400;
        }
        .post-content h2, .post-content h3 {
          font-family: var(--font-heading);
          color: #001426;
          margin-top: 32px;
          margin-bottom: 16px;
        }
        .post-content p {
          margin-bottom: 24px;
        }
        .post-content ul, .post-content ol {
          margin-bottom: 24px;
          padding-left: 24px;
        }
        .post-content li {
          margin-bottom: 8px;
        }
        
        @media (max-width: 1024px) {
          .cs-hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .cs-main-layout { grid-template-columns: 1fr !important; gap: 48px !important; }
          .cs-sticky-sidebar { position: static !important; }
        }
        @media (max-width: 768px) {
          .cs-meta-grid { grid-template-columns: 1fr !important; }
          .cs-gallery-grid { grid-template-columns: 1fr !important; }
          .cs-stats-grid { grid-template-columns: 1fr !important; }
          .cs-products-grid { grid-template-columns: 1fr !important; }
          .cs-next-grid { grid-template-columns: 1fr !important; }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </main>
  );
}
