import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, CheckCircle2, FileText, Download, ShieldCheck, 
  Settings, ArrowRight, Share2, Printer, Check, PhoneCall, Mail, Building2, User, Loader2
} from 'lucide-react';
import { useApi } from '../hooks/useApi';

export default function ProductDetailPage() {
  const { categorySlug, productId } = useParams();
  const navigate = useNavigate();
  
  const { data: productData, loading, error } = useApi(`https://technoproducts.in/wp-json/api/v1/products/${productId}`);
  const product = productData;

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [toastMessage, setToastMessage] = useState(null);
  
  // Enquiry form states
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Reset top scroll and image/tab index when product ID changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveImageIdx(0);
    setActiveTab('overview');
    setFormSubmitted(false);
  }, [productId]);

  if (loading) {
    return (
      <main style={{ padding: '140px 0 100px', background: '#F8FAFC', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Loader2 size={48} color="#0067A4" className="animate-spin" />
      </main>
    );
  }

  if (error || !product) {
    return (
      <main style={{ padding: '140px 0 100px', background: '#F8FAFC', minHeight: '80vh', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 600 }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, color: '#001426', marginBottom: 16 }}>
            Product Not Found
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: '#64748B', marginBottom: 32 }}>
            The industrial product specification you are looking for may have been updated or moved.
          </p>
          <Link to="/products" className="btn btn-primary" style={{ display: 'inline-flex' }}>
            Back to All Products
          </Link>
        </div>
      </main>
    );
  }

  const images = product.image ? [product.image] : [];

  const handleDownload = (title) => {
    setToastMessage(`Downloading ${title}...`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Find related products from API response
  const relatedProducts = product.related_products || [];

  return (
    <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingBottom: 120 }}>
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            style={{
              position: 'fixed', bottom: 32, right: 32, zIndex: 9999,
              background: '#001426', color: '#FFF', padding: '14px 24px',
              borderRadius: 12, boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
              display: 'flex', alignItems: 'center', gap: 12,
              fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 14,
              border: '1px solid rgba(255,255,255,0.15)'
            }}
          >
            <CheckCircle2 size={18} color="#10B981" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. Top Breadcrumb Bar */}
      <section style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', paddingTop: 120, paddingBottom: 20 }}>
        <div className="container">
          <nav style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', fontSize: 13, fontFamily: 'var(--font-heading)' }}>
            <Link to="/" style={{ color: '#64748B', textDecoration: 'none', transition: 'color 0.2s' }}>Home</Link>
            <ChevronRight size={14} color="#94A3B8" />
            <Link to="/products" style={{ color: '#64748B', textDecoration: 'none', transition: 'color 0.2s' }}>Products</Link>
            <ChevronRight size={14} color="#94A3B8" />
            <Link to={`/products/${categorySlug}`} style={{ color: '#0067A4', fontWeight: 700, textDecoration: 'none' }}>
              {categorySlug.toUpperCase()}
            </Link>
            <ChevronRight size={14} color="#94A3B8" />
            <span style={{ color: '#0F172A', fontWeight: 700 }} className="truncate-breadcrumb" dangerouslySetInnerHTML={{ __html: product.name }} />
          </nav>
        </div>
      </section>

      {/* 2. Main Product Hero Section */}
      <section style={{ padding: '56px 0 80px' }}>
        <div className="container">
          <div className="product-detail-hero">
            
            {/* Left: Gallery & Images */}
            <div className="detail-gallery">
              <div className="main-image-wrapper">
                <motion.img
                  key={activeImageIdx}
                  src={images[activeImageIdx]}
                  alt={product.name}
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="main-image"
                />
                {product.brand && <div className="gallery-badge-brand">{product.brand}</div>}
                <div className="gallery-badge-status">Official Industrial Warranty</div>
              </div>

              {images.length > 1 && (
                <div className="thumbnail-strip">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIdx(idx)}
                      className={`thumb-btn ${activeImageIdx === idx ? 'active' : ''}`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Specification Summary & Actions */}
            <div className="detail-info">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
                <span className="category-tag">{categorySlug}</span>
              </div>

              <h1 className="product-title" dangerouslySetInnerHTML={{ __html: product.name }} />
              
              <div className="product-short-desc" dangerouslySetInnerHTML={{ __html: product.description }} />
              {/* CTA Button Group */}
              <div className="detail-actions">
                <a 
                  href="#product-enquiry" 
                  className="btn btn-primary" 
                  style={{ flex: 1, justifyContent: 'center', padding: '16px 28px', fontSize: 16 }}
                >
                  Request Official Quotation
                  <ArrowRight size={18} />
                </a>
                
                <button 
                  onClick={() => handleDownload(`${product.name} Datasheet`)}
                  className="btn btn-outline" 
                  style={{ padding: '16px 24px', borderColor: '#CBD5E1', color: '#0F172A', fontWeight: 700 }}
                >
                  <Download size={18} />
                  <span>Datasheet</span>
                </button>
              </div>

              <div style={{ marginTop: 24, paddingTop: 24, borderTop: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#64748B' }}>
                  <ShieldCheck size={16} color="#10B981" />
                  <span>Verified B2B Supply & Application Engineering Support</span>
                </div>
                
                <div style={{ display: 'flex', gap: 12 }}>
                  <button onClick={() => window.print()} title="Print Specs" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748B' }}>
                    <Printer size={18} />
                  </button>
                  <button onClick={() => handleDownload('Product Share Link')} title="Share" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748B' }}>
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Detailed Tabs Section */}
      <section style={{ background: '#F8FAFC', padding: '64px 0', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          
          {/* Tab Headers */}
          <div className="tab-navigation scrollbar-hide">
            {[
              { id: 'overview', label: 'Product Overview', icon: FileText }
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Box */}
          <div className="tab-content-box">
            
            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <h3 className="tab-heading">Product Description & Engineering Overview</h3>
                <div className="overview-text" dangerouslySetInnerHTML={{ __html: product.description }} />

                <div style={{ marginTop: 40, padding: 32, background: '#EFF6FF', borderRadius: 16, border: '1px solid #BFDBFE' }}>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, color: '#1E3A8A', marginBottom: 12 }}>
                    Why Order from Techno Products?
                  </h4>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#1E40AF', lineHeight: 1.6, margin: 0 }}>
                    As an authorized distributor for world-leading industrial automation and electro-mechanical brands, Techno Products guarantees 100% genuine factory equipment with valid manufacturer warranty, prioritized supply chain fulfillment, and comprehensive pre/post-commissioning engineering assistance.
                  </p>
                </div>
              </motion.div>
            )}



          </div>
        </div>
      </section>

      {/* 4. Product Enquiry & Consultation Section */}
      <section id="product-enquiry" style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="enquiry-container">
            
            {/* Left Box: Context & Contact info */}
            <div className="enquiry-left">
              <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#FFF', padding: '6px 14px', borderRadius: 20, fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>
                Direct Engineering Desk
              </div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 32, color: '#FFF', marginBottom: 16, lineHeight: 1.2 }}>
                Request Quotation & Technical Application Review
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: 32 }}>
                Need customized pricing, bulk project supply, or engineering advice for the <strong style={{ color: '#FFF' }}>{product.name}</strong>? Fill out this direct inquiry form or speak to our technical sales team.
              </p>

              <div style={{ background: 'rgba(255,255,255,0.06)', padding: 24, borderRadius: 16, border: '1px solid rgba(255,255,255,0.1)', marginBottom: 32 }}>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginBottom: 8 }}>Selected Unit</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18, color: '#FFF', marginBottom: 4 }} dangerouslySetInnerHTML={{ __html: product.name }} />
                <div style={{ fontSize: 14, color: '#93C5FD' }}>{categorySlug}</div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: '#FFF' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <PhoneCall size={20} color="#60A5FA" />
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>Call Our Sales Engineers</div>
                    <div style={{ fontWeight: 700, fontSize: 16 }}>+91 44 2433 1234</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: '#FFF' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Mail size={20} color="#60A5FA" />
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>Email Technical Support</div>
                    <div style={{ fontWeight: 700, fontSize: 16 }}>enquiry@technoproducts.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Box: Enquiry Form */}
            <div className="enquiry-right">
              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--color-green-xlight)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--color-green)' }}>
                    <CheckCircle size={32} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 24, color: '#0F172A', marginBottom: 12 }}>
                    Inquiry Received Successfully
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: '#64748B', lineHeight: 1.6, marginBottom: 28, maxWidth: 440, margin: '0 auto 28px' }}>
                    Thank you for contacting Techno Products. Our technical specialist will review your requirements and reply with a formal quote within 4 business hours.
                  </p>
                  <button onClick={() => setFormSubmitted(false)} className="btn btn-outline" style={{ display: 'inline-flex' }}>
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="enquiry-form">
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 22, color: '#0F172A', marginBottom: 20 }}>
                    Enquire About This Product
                  </h3>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <div className="input-with-icon">
                        <User size={18} className="input-icon" />
                        <input 
                          type="text" required placeholder="e.g. Rajesh Kumar" 
                          value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Company Name *</label>
                      <div className="input-with-icon">
                        <Building2 size={18} className="input-icon" />
                        <input 
                          type="text" required placeholder="e.g. Apex Industries Ltd" 
                          value={formData.companyName} onChange={e => setFormData({...formData, companyName: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Email Address *</label>
                      <div className="input-with-icon">
                        <Mail size={18} className="input-icon" />
                        <input 
                          type="email" required placeholder="rajesh@company.com" 
                          value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <div className="input-with-icon">
                        <PhoneCall size={18} className="input-icon" />
                        <input 
                          type="tel" required placeholder="+91 98765 43210" 
                          value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Application Requirements & Quantity</label>
                    <textarea 
                      rows="4" 
                      placeholder={`Please mention your quantity, voltage rating, installation date, or specific customization requirements for the ${product.name}...`}
                      value={formData.message} 
                      onChange={e => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: 16, marginTop: 8 }}>
                    Submit Quote Request
                    <ArrowRight size={18} />
                  </button>
                  <div style={{ fontSize: 12, color: '#94A3B8', textAlign: 'center', marginTop: 12 }}>
                    🔒 We protect your data and respond within 4 business hours.
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 5. Related Products Section */}
      {relatedProducts.length > 0 && (
        <section style={{ padding: '80px 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
              <div>
                <div style={{ fontSize: 12, color: '#0067A4', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>
                  Explore Similar Models
                </div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 28, color: '#0F172A' }}>
                  Related Products
                </h2>
              </div>
              <Link to={`/products/${categorySlug}`} className="btn btn-outline" style={{ display: 'inline-flex' }}>
                View All in Category
              </Link>
            </div>

            <div className="product-grid">
              {relatedProducts.map(rel => (
                <motion.div
                  key={rel.id}
                  onClick={() => navigate(`/products/${categorySlug}/${rel.id}`)}
                  className="premium-product-card"
                  whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(0,0,0,0.08)' }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="card-image-wrapper">
                    {rel.image ? (
                      <img src={rel.image} alt={rel.name} className="card-image" />
                    ) : (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', fontFamily: 'var(--font-heading)' }}>
                        No Image
                      </div>
                    )}
                  </div>
                  <div className="card-content">
                    <h3 className="card-title" dangerouslySetInnerHTML={{ __html: rel.name }} />
                    <div className="card-actions">
                      <Link 
                        to={`/products/${categorySlug}/${rel.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="btn-quick-view"
                        style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        View Product
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Styled CSS for Product Detail Page */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin { animation: spin 1s linear infinite; }
        
        .truncate-breadcrumb {
          max-width: 320px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .product-detail-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: start;
        }

        @media (max-width: 992px) {
          .product-detail-hero {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .detail-gallery {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .detail-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          padding-top: 10px;
          padding-bottom: 10px;
        }
        .main-image-wrapper {
          position: relative;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          overflow: hidden;
          aspect-ratio: 1 / 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
        }
        .main-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          mix-blend-mode: multiply;
        }
        .gallery-badge-brand {
          position: absolute;
          top: 20px;
          left: 20px;
          background: #001426;
          color: #FFF;
          padding: 6px 14px;
          border-radius: 8px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 13px;
        }
        .gallery-badge-status {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: #EFF6FF;
          color: #1D4ED8;
          border: 1px solid #BFDBFE;
          padding: 6px 12px;
          border-radius: 20px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 0.04em;
        }

        .thumbnail-strip {
          display: flex;
          gap: 12px;
        }
        .thumb-btn {
          width: 88px;
          height: 88px;
          border-radius: 12px;
          border: 2px solid #E2E8F0;
          background: #F8FAFC;
          padding: 8px;
          cursor: pointer;
          transition: all 0.2s;
          overflow: hidden;
        }
        .thumb-btn.active {
          border-color: #0067A4;
          box-shadow: 0 0 0 3px rgba(0, 103, 164, 0.15);
        }
        .thumb-btn img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          mix-blend-mode: multiply;
        }

        .brand-tag {
          background: #D9EAF5;
          color: #0067A4;
          padding: 6px 14px;
          border-radius: 20px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 13px;
        }
        .category-tag {
          background: #F1F5F9;
          color: #475569;
          padding: 6px 14px;
          border-radius: 20px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 13px;
        }

        .product-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: clamp(28px, 3.5vw, 40px);
          color: #0F172A;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .product-short-desc {
          font-family: var(--font-body);
          font-size: 16px;
          color: #475569;
          line-height: 1.8;
          margin-bottom: 40px;
        }

        .highlights-box {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 20px;
          margin-bottom: 28px;
        }
        .highlights-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        @media (max-width: 576px) {
          .highlights-grid { grid-template-columns: 1fr; }
        }
        .highlight-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-body);
          font-size: 14px;
          color: #334155;
          font-weight: 500;
        }

        .quick-specs {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 32px;
        }
        .quick-specs-header {
          background: #F8FAFC;
          padding: 12px 20px;
          border-bottom: 1px solid #E2E8F0;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 13px;
          color: #334155;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .quick-specs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .quick-spec-item {
          padding: 14px 20px;
          border-bottom: 1px solid #F1F5F9;
          border-right: 1px solid #F1F5F9;
        }
        .quick-spec-item:nth-child(2n) { border-right: none; }
        .spec-key {
          font-size: 12px;
          color: #64748B;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .spec-val {
          font-size: 15px;
          color: #0F172A;
          font-weight: 700;
        }

        .detail-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        /* Tabs Section */
        .tab-navigation {
          display: flex;
          gap: 12px;
          border-bottom: 2px solid #E2E8F0;
          overflow-x: auto;
          margin-bottom: 40px;
          padding-bottom: 2px;
        }
        .tab-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 24px;
          background: transparent;
          border: none;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 15px;
          color: #64748B;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          margin-bottom: -2px;
          white-space: nowrap;
          transition: all 0.2s;
        }
        .tab-btn:hover { color: #0F172A; }
        .tab-btn.active {
          color: #0067A4;
          border-bottom-color: #0067A4;
        }

        .tab-content-box {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 48px;
        }
        @media (max-width: 768px) {
          .tab-content-box { padding: 24px; }
        }
        .tab-heading {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 24px;
          color: #0F172A;
          margin-bottom: 24px;
        }
        .overview-text p {
          font-family: var(--font-body);
          font-size: 16px;
          color: #334155;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        /* Specs Table */
        .specs-table-wrapper {
          overflow-x: auto;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
        }
        .specs-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        .specs-table tr { border-bottom: 1px solid #E2E8F0; }
        .specs-table tr:last-child { border-bottom: none; }
        .row-even { background: #FFFFFF; }
        .row-odd { background: #F8FAFC; }
        .spec-table-key {
          padding: 16px 24px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 14px;
          color: #475569;
          width: 35%;
          border-right: 1px solid #E2E8F0;
        }
        .spec-table-val {
          padding: 16px 24px;
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 600;
          color: #0F172A;
        }

        /* Features List */
        .features-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .feature-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
        }
        .feature-icon { margin-top: 2px; }
        .feature-text {
          font-family: var(--font-body);
          font-size: 16px;
          color: #334155;
          line-height: 1.6;
        }

        /* Applications Grid */
        .applications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
        }
        .application-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 20px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 15px;
          color: #1E293B;
        }

        /* Downloads Grid */
        .downloads-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 20px;
        }
        .download-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 20px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
        }
        .doc-icon {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          background: #D9EAF5;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .doc-info { flex-grow: 1; }
        .doc-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 15px;
          color: #0F172A;
          margin-bottom: 4px;
        }
        .doc-meta {
          font-size: 12px;
          color: #64748B;
        }
        .btn-doc-download {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #FFF;
          border: 1px solid #CBD5E1;
          color: #0F172A;
          padding: 8px 14px;
          border-radius: 8px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-doc-download:hover {
          background: #0067A4;
          color: #FFF;
          border-color: #0067A4;
        }

        /* Enquiry Section */
        .enquiry-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(0,0,0,0.1);
        }
        @media (max-width: 992px) {
          .enquiry-container { grid-template-columns: 1fr; }
        }
        .enquiry-left {
          background: #001426;
          padding: 56px 48px;
        }
        .enquiry-right {
          background: #F8FAFC;
          padding: 56px 48px;
          border: 1px solid #E2E8F0;
        }
        @media (max-width: 768px) {
          .enquiry-left, .enquiry-right { padding: 36px 24px; }
        }

        .enquiry-form .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }
        @media (max-width: 576px) {
          .enquiry-form .form-row { grid-template-columns: 1fr; }
        }
        .enquiry-form .form-group {
          margin-bottom: 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .enquiry-form label {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 13px;
          color: #334155;
        }
        .input-with-icon {
          position: relative;
        }
        .input-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #94A3B8;
        }
        .input-with-icon input {
          width: 100%;
          padding: 12px 14px 12px 42px;
          border: 1px solid #CBD5E1;
          border-radius: 10px;
          font-family: var(--font-body);
          font-size: 14px;
          background: #FFF;
          outline: none;
          transition: border-color 0.2s;
        }
        .input-with-icon input:focus, .enquiry-form textarea:focus {
          border-color: #0067A4;
        }
        .enquiry-form textarea {
          width: 100%;
          padding: 14px;
          border: 1px solid #CBD5E1;
          border-radius: 10px;
          font-family: var(--font-body);
          font-size: 14px;
          background: #FFF;
          outline: none;
          resize: vertical;
        }

        /* Product Grid & Card Styles for Related Products */
        .product-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }
        @media (max-width: 1200px) {
          .product-grid { grid-template-columns: repeat(3, 1fr); gap: 24px; }
        }
        @media (max-width: 900px) {
          .product-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
        }
        @media (max-width: 600px) {
          .product-grid { grid-template-columns: 1fr; gap: 20px; }
        }

        .premium-product-card {
          background: #FFFFFF;
          border-radius: 16px;
          border: 1px solid rgba(0,0,0,0.06);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .card-image-wrapper {
          padding: 24px;
          background: #F8F9FA;
          position: relative;
          overflow: hidden;
          height: 240px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          mix-blend-mode: multiply;
        }
        .card-brand-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          background: #FFFFFF;
          padding: 6px 14px;
          border-radius: 20px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 11px;
          color: #0067A4;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .card-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .card-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 16px;
          color: #000000;
          margin-bottom: 20px;
          line-height: 1.4;
        }
        .card-specs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 24px;
        }
        .spec-label {
          font-family: var(--font-heading);
          font-size: 11px;
          font-weight: 700;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 4px;
        }
        .spec-value {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 700;
          color: #333;
        }

        .card-actions {
          margin-top: auto;
          display: flex;
          gap: 12px;
        }
        .btn-quick-view {
          flex: 1;
          background: #001426;
          color: #FFF;
          border: none;
          padding: 12px 0;
          border-radius: 10px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 13px;
          cursor: pointer;
          transition: background 0.3s;
        }
        .btn-quick-view:hover { background: #0067A4; }
      `}</style>
    </main>
  );
}
