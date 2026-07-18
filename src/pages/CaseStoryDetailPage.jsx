import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, Phone, Mail, Clock, MapPin, 
  Building2, Calendar, Award, ShieldCheck, FileText, Zap, 
  Check, ArrowUpRight, Layers, Cpu, Settings, Shield
} from 'lucide-react';
import SectionTag, { RevealText, StaggerContainer, StaggerItem } from '../components/ui/RevealText';
import { caseStoriesData, productCategories } from '../data/siteData';

export default function CaseStoryDetailPage() {
  const { slug } = useParams();
  
  // Find case story by slug or ID, fallback to first story if not found
  const story = caseStoriesData.find(s => s.slug === slug || s.id.toString() === slug) || caseStoriesData[0];

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

  // Find related products based on slugs or default to top 3 products
  const relatedProducts = story.relatedProductSlugs 
    ? productCategories.filter(p => story.relatedProductSlugs.includes(p.slug) || story.relatedProductSlugs.includes(p.id)).slice(0, 3)
    : productCategories.slice(0, 3);

  // Find next case stories (excluding current)
  const nextStories = caseStoriesData.filter(s => s.id !== story.id).slice(0, 2);

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

          {/* Hero Two-Column Layout */}
          <div className="cs-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 56, alignItems: 'center' }}>
            
            {/* Left Side Content */}
            <div>
              <RevealText>
                <h1 style={{ 
                  fontFamily: 'var(--font-heading)', fontWeight: 700, 
                  fontSize: 'clamp(32px, 3.8vw, 54px)', lineHeight: 1.12, 
                  letterSpacing: '-0.025em', color: '#FFFFFF', marginBottom: 28 
                }}>
                  {story.title}
                </h1>

                {/* Key Metadata Grid */}
                <div style={{ 
                  display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, 
                  marginBottom: 32, background: 'rgba(255, 255, 255, 0.05)', padding: 24, 
                  borderRadius: 20, border: '1px solid rgba(255, 255, 255, 0.12)' 
                }} className="cs-meta-grid">
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: 11, fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                      <Building2 size={14} style={{ color: '#FFFFFF' }} /> Client & Industry
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: '#FFFFFF' }}>{story.client}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#FFFFFF', fontWeight: 500 }}>{story.industry}</div>
                  </div>

                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: 11, fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                      <MapPin size={14} style={{ color: '#FFFFFF' }} /> Location
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: '#FFFFFF' }}>{story.location}</div>
                  </div>

                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: 11, fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                      <Calendar size={14} style={{ color: '#FFFFFF' }} /> Project Duration
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: '#FFFFFF' }}>{story.duration}</div>
                  </div>

                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: 11, fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                      <Award size={14} style={{ color: '#FFFFFF' }} /> Client Category
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: '#FFFFFF' }}>{story.clientCategory}</div>
                  </div>
                </div>

                {/* Short Executive Summary */}
                <p style={{ 
                  fontFamily: 'var(--font-body)', fontSize: 18, color: '#FFFFFF', 
                  lineHeight: 1.8, marginBottom: 28 
                }}>
                  {story.executiveSummary}
                </p>

                {/* Project Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 36 }}>
                  {story.tags.map((tag, idx) => (
                    <span key={idx} style={{ 
                      fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 12, 
                      color: '#FFFFFF', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255, 255, 255, 0.18)', 
                      padding: '6px 16px', borderRadius: 30, letterSpacing: '0.03em' 
                    }}>
                      #{tag}
                    </span>
                  ))}
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

            {/* Right Side Clean Single Engineering Image */}
            <div style={{ position: 'relative', height: 460, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <RevealText>
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    width: '100%', height: 440, borderRadius: 24, overflow: 'hidden', 
                    boxShadow: '0 24px 64px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.15)',
                    position: 'relative'
                  }}
                >
                  <img 
                    src={story.heroComposition?.[0] || story.gallery?.[0]} 
                    alt={story.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </motion.div>
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
              
              {/* Overview Section (Clean Neutral Card) */}
              <RevealText>
                <div style={{ marginBottom: 48, background: '#FFFFFF', padding: '36px 40px', borderRadius: 24, border: '1px solid #E5E7EB', boxShadow: '0 4px 20px rgba(0,0,0,0.025)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                    <div style={{ width: 6, height: 24, background: '#0067A4', borderRadius: 4 }} />
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 32px)', color: '#001426', letterSpacing: '-0.02em' }}>
                      Project Overview
                    </h2>
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: '#444', lineHeight: 1.85, fontWeight: 400, margin: 0 }}>
                    {story.overview}
                  </p>
                </div>
              </RevealText>

              {/* Challenge Section (Clean Neutral Card, no colored side borders) */}
              <RevealText>
                <div style={{ marginBottom: 48, background: '#FFFFFF', padding: '36px 40px', borderRadius: 24, border: '1px solid #E5E7EB', boxShadow: '0 4px 20px rgba(0,0,0,0.025)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                    <div style={{ width: 6, height: 24, background: '#0067A4', borderRadius: 4 }} />
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(22px, 2.8vw, 28px)', color: '#001426', letterSpacing: '-0.02em' }}>
                      The Engineering Challenge
                    </h2>
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: '#444', lineHeight: 1.85, margin: 0 }}>
                    {story.challenge}
                  </p>
                </div>
              </RevealText>

              {/* Engineering Solution Section */}
              <RevealText>
                <div style={{ marginBottom: 64, background: '#FFFFFF', padding: '36px 40px', borderRadius: 24, border: '1px solid #E5E7EB', boxShadow: '0 4px 20px rgba(0,0,0,0.025)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                    <div style={{ width: 6, height: 24, background: '#0067A4', borderRadius: 4 }} />
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 32px)', color: '#001426', letterSpacing: '-0.02em' }}>
                      Our Engineering Solution
                    </h2>
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: '#444', lineHeight: 1.85, margin: 0 }}>
                    {story.engineeringSolution}
                  </p>
                </div>
              </RevealText>

              {/* Implementation Process Section */}
              <RevealText>
                <div style={{ marginBottom: 72 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
                    <div style={{ width: 6, height: 24, background: '#0067A4', borderRadius: 4 }} />
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 32px)', color: '#001426', letterSpacing: '-0.02em' }}>
                      Implementation Process
                    </h2>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {story.implementationProcess?.map((step, idx) => (
                      <div key={idx} style={{ 
                        background: '#FFFFFF', padding: '24px 28px', borderRadius: 18, 
                        border: '1px solid #E5E7EB', boxShadow: '0 4px 16px rgba(0,0,0,0.02)',
                        display: 'flex', gap: 20, alignItems: 'flex-start'
                      }}>
                        <div style={{ 
                          width: 40, height: 40, borderRadius: 12, background: '#F5F7FA', border: '1px solid #E8ECF0', color: '#0067A4', 
                          fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, 
                          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 
                        }}>
                          0{idx + 1}
                        </div>
                        <div>
                          <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18, color: '#001426', marginBottom: 6 }}>
                            {step.phase}
                          </h3>
                          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: '#555', lineHeight: 1.7, margin: 0 }}>
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealText>

              {/* ====================================================
                  PROJECT GALLERY SECTION
                  ==================================================== */}
              <RevealText>
                <div style={{ marginBottom: 72 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
                    <div style={{ width: 6, height: 24, background: '#0067A4', borderRadius: 4 }} />
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 32px)', color: '#001426', letterSpacing: '-0.02em' }}>
                      Project Gallery & Execution
                    </h2>
                  </div>

                  {/* Large Hero Gallery Image */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.4 }}
                    style={{ 
                      borderRadius: 24, overflow: 'hidden', boxShadow: '0 16px 44px rgba(0,20,38,0.08)', 
                      marginBottom: 20, height: 420, position: 'relative', border: '1px solid #E5E7EB'
                    }}
                  >
                    <img 
                      src={story.gallery?.[0]} 
                      alt={`${story.title} - Main Gallery`} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </motion.div>

                  {/* Three Smaller Images Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="cs-gallery-grid">
                    {story.gallery?.slice(1, 4).map((imgUrl, gIdx) => (
                      <motion.div
                        key={gIdx}
                        whileHover={{ scale: 1.03, y: -4, boxShadow: '0 16px 36px rgba(0, 20, 38, 0.08)' }}
                        transition={{ duration: 0.35 }}
                        style={{ 
                          borderRadius: 18, overflow: 'hidden', height: 210, 
                          boxShadow: '0 4px 16px rgba(0,0,0,0.04)', border: '1px solid #E5E7EB',
                          cursor: 'pointer'
                        }}
                      >
                        <img 
                          src={imgUrl} 
                          alt={`Project execution view ${gIdx + 2}`} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </RevealText>

              {/* ====================================================
                  RESULTS & ACHIEVEMENTS SECTION (NEUTRAL STATISTIC CARDS)
                  ==================================================== */}
              <div style={{ marginBottom: 80 }}>
                <RevealText>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
                    <div style={{ width: 6, height: 24, background: '#0067A4', borderRadius: 4 }} />
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 32px)', color: '#001426', letterSpacing: '-0.02em' }}>
                      Measurable Results Achieved
                    </h2>
                  </div>
                </RevealText>

                <StaggerContainer>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }} className="cs-stats-grid">
                    {story.resultsStats?.map((stat, sIdx) => (
                      <StaggerItem key={sIdx}>
                        <motion.div
                          whileHover={{ y: -5, boxShadow: '0 18px 40px rgba(0, 20, 38, 0.06)' }}
                          transition={{ duration: 0.3 }}
                          style={{
                            background: '#FFFFFF', padding: '32px 28px', borderRadius: 20,
                            border: '1px solid #E5E7EB',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.025)', height: '100%'
                          }}
                        >
                          <div style={{ 
                            fontFamily: 'var(--font-heading)', fontWeight: 700, 
                            fontSize: 'clamp(32px, 4vw, 48px)', color: '#001426', lineHeight: 1, 
                            marginBottom: 8 
                          }}>
                            {stat.value}
                          </div>
                          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 17, color: '#0067A4', marginBottom: 8 }}>
                            {stat.label}
                          </div>
                          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#666', lineHeight: 1.6, margin: 0 }}>
                            {stat.desc}
                          </p>
                        </motion.div>
                      </StaggerItem>
                    ))}
                  </div>
                </StaggerContainer>
              </div>

              {/* ====================================================
                  RELATED PRODUCTS SECTION
                  ==================================================== */}
              <div style={{ marginBottom: 80 }}>
                <RevealText>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
                    <div style={{ width: 6, height: 24, background: '#0067A4', borderRadius: 4 }} />
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 32px)', color: '#001426', letterSpacing: '-0.02em' }}>
                      Products Engineered in This Project
                    </h2>
                  </div>
                </RevealText>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="cs-products-grid">
                  {relatedProducts.map((prod) => (
                    <motion.div
                      key={prod.id}
                      whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(0,0,0,0.06)' }}
                      transition={{ duration: 0.3 }}
                      style={{
                        background: '#FFFFFF', borderRadius: 20, overflow: 'hidden',
                        border: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column'
                      }}
                    >
                      <div style={{ height: 160, overflow: 'hidden', position: 'relative' }}>
                        <img 
                          src={prod.image} 
                          alt={prod.name} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                        />
                      </div>
                      <div style={{ padding: 22, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                          {/* Trust Badge */}
                          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '10px 16px', background: 'var(--color-green-xlight)', borderRadius: 12, border: '1px solid var(--color-green-xlight)' }}>
                            <Shield size={20} style={{ color: 'var(--color-green)' }} />
                            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, color: '#001426' }}>
                              Certified Project Execution
                            </span>
                          </div>
                          <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 17, color: '#001426', marginBottom: 8 }}>
                            {prod.name}
                          </h3>
                          <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#666', lineHeight: 1.6, marginBottom: 16 }}>
                            {prod.shortDesc}
                          </p>
                        </div>
                        <Link 
                          to={`/products/${prod.slug}`} 
                          style={{ 
                            fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, 
                            color: '#0067A4', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 
                          }}
                        >
                          View Specifications <ArrowRight size={14} />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* ====================================================
                  NEXT CASE STORIES SECTION
                  ==================================================== */}
              <div>
                <RevealText>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28, flexWrap: 'wrap', gap: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 6, height: 24, background: '#0067A4', borderRadius: 4 }} />
                      <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 32px)', color: '#001426', letterSpacing: '-0.02em' }}>
                        Explore Next Case Stories
                      </h2>
                    </div>
                    <Link to="/case-stories" className="btn btn-secondary" style={{ padding: '10px 24px', fontSize: 14 }}>
                      View All Stories <ArrowRight size={16} />
                    </Link>
                  </div>
                </RevealText>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28 }} className="cs-next-grid">
                  {nextStories.map((nextStory) => (
                    <motion.div
                      key={nextStory.id}
                      whileHover={{ y: -6, boxShadow: '0 16px 44px rgba(0,0,0,0.06)' }}
                      transition={{ duration: 0.35 }}
                      style={{
                        background: '#FFFFFF', borderRadius: 22, overflow: 'hidden',
                        border: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.025)'
                      }}
                    >
                      <div style={{ height: 220, overflow: 'hidden', position: 'relative' }}>
                        <img 
                          src={nextStory.gallery?.[0] || nextStory.heroComposition?.[0]} 
                          alt={nextStory.title} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                        />
                        <div style={{
                          position: 'absolute', top: 16, left: 16,
                          background: '#0067A4', color: '#fff', padding: '6px 14px',
                          borderRadius: 20, fontFamily: 'var(--font-heading)', fontWeight: 700,
                          fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase'
                        }}>
                          {nextStory.industry}
                        </div>
                      </div>
                      <div style={{ padding: '26px 28px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13, color: '#666', marginBottom: 6, textTransform: 'uppercase' }}>
                            {nextStory.client}
                          </div>
                          <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 20, color: '#001426', lineHeight: 1.3, marginBottom: 16 }}>
                            {nextStory.title}
                          </h3>
                        </div>
                        <Link 
                          to={`/case-stories/${nextStory.slug}`} 
                          style={{ 
                            fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 14, 
                            color: '#0067A4', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 
                          }}
                        >
                          Read Case Story <ArrowRight size={16} />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

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

      {/* Responsive Styles */}
      <style>{`
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
