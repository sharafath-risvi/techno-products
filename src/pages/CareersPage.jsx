import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Award, TrendingUp, Cpu, Users, ShieldCheck, Layers, 
  Upload, CheckCircle, Send, FileText, Phone, Mail, User, Briefcase, Sparkles
} from 'lucide-react';
import SectionTag, { RevealText, StaggerContainer, StaggerItem } from '../components/ui/RevealText';

// Premium Editorial Stack Cards removed per user request

export default function CareersPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: 'Application Engineering & Technical Support',
    experience: '1 - 3 Years',
    resumeName: '',
    coverMessage: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resumeName: e.target.files[0].name }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const scrollToApply = (e) => {
    e.preventDefault();
    const el = document.getElementById('apply-opportunities');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main style={{ background: '#FFFFFF', position: 'relative', overflowX: 'hidden' }}>
      
      {/* Blueprint background texture */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: `
          linear-gradient(to right, rgba(0, 103, 164, 0.035) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 103, 164, 0.035) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
      }} />

      {/* Top soft industrial gradient */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 780, pointerEvents: 'none', zIndex: 0,
        background: 'linear-gradient(180deg, #F0F7FC 0%, rgba(255, 255, 255, 0) 100%)',
      }} />

      {/* ====================================================
          1. REDESIGNED HERO SECTION (MINIMAL EDITORIAL)
          ==================================================== */}
      <section style={{ position: 'relative', zIndex: 1, paddingTop: 140, paddingBottom: 110, borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="container" style={{ maxWidth: 1340 }}>
          <div className="careers-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 64, alignItems: 'center' }}>
            
            {/* Left Side Content */}
            <div>
              <RevealText>
                
                <h1 style={{ 
                  fontFamily: 'var(--font-heading)', fontWeight: 700, 
                  fontSize: 'clamp(38px, 4.5vw, 64px)', lineHeight: 1.08, 
                  letterSpacing: '-0.025em', color: '#001426', marginBottom: 24 
                }}>
                  Build Your Career With<br />
                  <span style={{ color: '#0067A4' }}>Techno Products</span>
                </h1>
                
                <p style={{ 
                  fontFamily: 'var(--font-body)', fontSize: 'clamp(17px, 1.35vw, 20px)', 
                  color: '#444', lineHeight: 1.8, maxWidth: 580, marginBottom: 36 
                }}>
                  Join an elite engineering team driving India's industrial automation and power transmission future. At Techno Products, your technical skill set is continuously challenged, mentored by industry veterans, and recognized with industry-leading rewards.
                </p>

                {/* CTA Buttons */}
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <a 
                    href="#apply-opportunities" 
                    onClick={scrollToApply} 
                    className="btn btn-primary" 
                    style={{ padding: '16px 36px', fontSize: 15, borderRadius: 40, display: 'inline-flex', alignItems: 'center', gap: 10 }}
                  >
                    Apply for Opportunities <ArrowRight size={18} />
                  </a>
                  
                  <Link 
                    to="/contact" 
                    className="btn" 
                    style={{ 
                      padding: '16px 36px', fontSize: 15, borderRadius: 40, 
                      background: '#fff', color: '#0067A4', border: '2px solid #0067A4',
                      fontFamily: 'var(--font-heading)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 10,
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#EEF6FB'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#fff'; }}
                  >
                    Contact HR Desk
                  </Link>
                </div>
              </RevealText>
            </div>

            {/* Right Side Editorial Composition */}
            <div style={{ position: 'relative', height: 520, width: '100%', maxWidth: 580, display: 'flex', alignItems: 'center' }}>
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                {/* Image 1: Tall Left */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                  style={{ position: 'absolute', top: 0, left: 0, width: '55%', height: '85%', borderRadius: 24, overflow: 'hidden', boxShadow: '0 24px 50px rgba(0,20,38,0.1)' }}
                >
                  <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=1000&fit=crop&q=85" alt="Engineering Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </motion.div>
                
                {/* Image 2: Top Right (Offset) */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
                  style={{ position: 'absolute', top: '10%', right: 0, width: '50%', height: '45%', borderRadius: 24, overflow: 'hidden', boxShadow: '0 24px 50px rgba(0,20,38,0.1)', border: '6px solid #FFF', zIndex: 2 }}
                >
                  <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=500&fit=crop&q=85" alt="Industrial Workshop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </motion.div>
                
                {/* Image 3: Bottom Right */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
                  style={{ position: 'absolute', bottom: 0, right: '5%', width: '45%', height: '40%', borderRadius: 24, overflow: 'hidden', boxShadow: '0 24px 50px rgba(0,20,38,0.1)' }}
                >
                  <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=500&fit=crop&q=85" alt="Collaborative workspace" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ====================================================
          2. APPLY FOR OPPORTUNITIES (NEW PREMIUM SECTION)
          ==================================================== */}
      <section id="apply-opportunities" style={{ padding: '110px 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: 1340 }}>
          <div className="apply-opportunities-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, alignItems: 'start' }}>
            
            {/* Left Side Content */}
            <div style={{ position: 'sticky', top: 120 }}>
              <RevealText>
                <SectionTag>JOIN OUR ENGINEERING TEAM</SectionTag>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(30px, 3.8vw, 46px)', lineHeight: 1.15, letterSpacing: '-0.02em', color: '#001426', marginBottom: 24 }}>
                  Shape the Future of Industrial Automation
                </h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: '#555', lineHeight: 1.8, marginBottom: 28 }}>
                  We are continuously seeking passionate electrical, mechanical, and industrial automation engineers. Even if suitable openings are not currently listed, we strongly encourage talent to submit spontaneous applications for immediate assessment and future expansion roles.
                </p>

                <div style={{ background: '#FFFFFF', borderRadius: 16, padding: '24px 28px', border: '1px solid #E5E7EB', boxShadow: '0 4px 16px rgba(0,0,0,0.02)', marginBottom: 32 }}>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, color: '#001426', marginBottom: 20 }}>
                    Why Join Techno Products?
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#0067A4', marginTop: 6 }} />
                      <div>
                        <span style={{ fontFamily: 'var(--font-heading)', fontSize: 15, color: '#001426', fontWeight: 700, display: 'block', marginBottom: 4 }}>Accelerated Career Growth</span>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#555', lineHeight: 1.6 }}>Merit-driven progression frameworks designed to elevate your engineering career rapidly.</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#0067A4', marginTop: 6 }} />
                      <div>
                        <span style={{ fontFamily: 'var(--font-heading)', fontSize: 15, color: '#001426', fontWeight: 700, display: 'block', marginBottom: 4 }}>Continuous Learning & Development</span>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#555', lineHeight: 1.6 }}>Access to global OEM technical training and certification workshops with industry leaders.</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#0067A4', marginTop: 6 }} />
                      <div>
                        <span style={{ fontFamily: 'var(--font-heading)', fontSize: 15, color: '#001426', fontWeight: 700, display: 'block', marginBottom: 4 }}>Engineering Excellence</span>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#555', lineHeight: 1.6 }}>Engage with multi-megawatt installations and solve real-world industrial challenges.</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#0067A4', marginTop: 6 }} />
                      <div>
                        <span style={{ fontFamily: 'var(--font-heading)', fontSize: 15, color: '#001426', fontWeight: 700, display: 'block', marginBottom: 4 }}>Comprehensive Benefits</span>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#555', lineHeight: 1.6 }}>Industry-benchmark compensation, project bonuses, and extensive health coverage.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#666', fontSize: 14, fontFamily: 'var(--font-body)' }}>
                  <ShieldCheck size={18} style={{ color: '#0067A4' }} />
                  <span>Confidentiality guaranteed. Direct HR review.</span>
                </div>
              </RevealText>
            </div>

            {/* Right Side: Premium Application Form */}
            <div>
              <RevealText>
                <div style={{ 
                  background: '#FFFFFF', borderRadius: 24, padding: '44px', 
                  border: '1px solid #E5E7EB', boxShadow: '0 16px 48px rgba(0,20,38,0.04)' 
                }}>
                  {formSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      style={{ textAlign: 'center', padding: '60px 20px' }}
                    >
                      <div style={{ width: 68, height: 68, borderRadius: '50%', background: '#E8F5ED', color: '#12703C', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                        <CheckCircle size={36} />
                      </div>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 26, color: '#001426', marginBottom: 12 }}>
                        Application Received
                      </h3>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: '#666', lineHeight: 1.7, maxWidth: 440, margin: '0 auto 32px' }}>
                        Thank you for your interest in joining Techno Products. Our engineering HR desk will review your profile and credentials and contact you directly when a suitable role aligns.
                      </p>
                      <button 
                        onClick={() => { setFormSubmitted(false); setFormData({ fullName: '', email: '', phone: '', position: 'Application Engineering & Technical Support', experience: '1 - 3 Years', resumeName: '', coverMessage: '' }); }}
                        className="btn"
                        style={{ padding: '12px 28px', background: '#F5F7FA', color: '#001426', border: '1px solid #CBD5E1', borderRadius: 30, fontWeight: 600, fontSize: 14 }}
                      >
                        Submit Another Application
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 24, color: '#001426', marginBottom: 6 }}>
                        Candidate Application Portal
                      </h3>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#777', marginBottom: 32 }}>
                        Please complete all required fields. Upload your latest resume or CV in PDF or DOCX format.
                      </p>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }} className="form-grid-2">
                        <div>
                          <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, color: '#333', marginBottom: 8 }}>
                            Full Name <span style={{ color: '#D71B32' }}>*</span>
                          </label>
                          <input 
                            type="text" 
                            name="fullName"
                            required
                            placeholder="e.g. Rajesh Kumar"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            style={{ 
                              width: '100%', padding: '14px 16px', borderRadius: 12, border: '1px solid #CBD5E1', 
                              fontFamily: 'var(--font-body)', fontSize: 14, color: '#001426', outline: 'none', background: '#FAFAFA' 
                            }} 
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, color: '#333', marginBottom: 8 }}>
                            Email Address <span style={{ color: '#D71B32' }}>*</span>
                          </label>
                          <input 
                            type="email" 
                            name="email"
                            required
                            placeholder="rajesh.kumar@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            style={{ 
                              width: '100%', padding: '14px 16px', borderRadius: 12, border: '1px solid #CBD5E1', 
                              fontFamily: 'var(--font-body)', fontSize: 14, color: '#001426', outline: 'none', background: '#FAFAFA' 
                            }} 
                          />
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }} className="form-grid-2">
                        <div>
                          <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, color: '#333', marginBottom: 8 }}>
                            Phone Number <span style={{ color: '#D71B32' }}>*</span>
                          </label>
                          <input 
                            type="tel" 
                            name="phone"
                            required
                            placeholder="+91 98400 XXXXX"
                            value={formData.phone}
                            onChange={handleInputChange}
                            style={{ 
                              width: '100%', padding: '14px 16px', borderRadius: 12, border: '1px solid #CBD5E1', 
                              fontFamily: 'var(--font-body)', fontSize: 14, color: '#001426', outline: 'none', background: '#FAFAFA' 
                            }} 
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, color: '#333', marginBottom: 8 }}>
                            Years of Experience <span style={{ color: '#D71B32' }}>*</span>
                          </label>
                          <select 
                            name="experience"
                            value={formData.experience}
                            onChange={handleInputChange}
                            style={{ 
                              width: '100%', padding: '14px 16px', borderRadius: 12, border: '1px solid #CBD5E1', 
                              fontFamily: 'var(--font-body)', fontSize: 14, color: '#001426', outline: 'none', background: '#FAFAFA' 
                            }}
                          >
                            <option value="Fresher / Graduate Engineer">Fresher / Graduate Engineer</option>
                            <option value="1 - 3 Years">1 - 3 Years</option>
                            <option value="3 - 6 Years">3 - 6 Years</option>
                            <option value="6 - 10 Years">6 - 10 Years</option>
                            <option value="10+ Years Senior Specialist">10+ Years Senior Specialist</option>
                          </select>
                        </div>
                      </div>

                      <div style={{ marginBottom: 20 }}>
                        <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, color: '#333', marginBottom: 8 }}>
                          Position Applying For <span style={{ color: '#D71B32' }}>*</span>
                        </label>
                        <select 
                          name="position"
                          value={formData.position}
                          onChange={handleInputChange}
                          style={{ 
                            width: '100%', padding: '14px 16px', borderRadius: 12, border: '1px solid #CBD5E1', 
                            fontFamily: 'var(--font-body)', fontSize: 14, color: '#001426', outline: 'none', background: '#FAFAFA' 
                          }}
                        >
                          <option value="Application Engineering & Technical Support">Application Engineering & Technical Support</option>
                          <option value="Drives & Automation System Design">Drives & Automation System Design</option>
                          <option value="Technical Sales & Key Account Management">Technical Sales & Key Account Management</option>
                          <option value="Control Panel Engineering & Assembly">Control Panel Engineering & Assembly</option>
                          <option value="Field Commissioning & Service Engineering">Field Commissioning & Service Engineering</option>
                          <option value="Operations, Supply Chain & Logistics">Operations, Supply Chain & Logistics</option>
                          <option value="Spontaneous / General Engineering Application">Spontaneous / General Engineering Application</option>
                        </select>
                      </div>

                      {/* Resume Upload Box */}
                      <div style={{ marginBottom: 24 }}>
                        <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, color: '#333', marginBottom: 8 }}>
                          Resume Upload (PDF / DOCX) <span style={{ color: '#D71B32' }}>*</span>
                        </label>
                        <label style={{ 
                          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                          padding: '28px', border: '2px dashed #CBD5E1', borderRadius: 14, background: '#FAFAFA',
                          cursor: 'pointer', transition: 'all 0.2s ease', textAlign: 'center'
                        }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = '#0067A4'; e.currentTarget.style.background = '#EEF4F8'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = '#CBD5E1'; e.currentTarget.style.background = '#FAFAFA'; }}
                        >
                          <Upload size={24} style={{ color: '#0067A4', marginBottom: 10 }} />
                          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14, color: '#001426', marginBottom: 4 }}>
                            {formData.resumeName ? `Selected: ${formData.resumeName}` : 'Click to Upload Resume or CV'}
                          </div>
                          <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#888' }}>
                            Supported formats: PDF, DOC, DOCX (Max 10 MB)
                          </div>
                          <input 
                            type="file" 
                            accept=".pdf,.doc,.docx" 
                            onChange={handleFileUpload} 
                            style={{ display: 'none' }} 
                            required={!formData.resumeName}
                          />
                        </label>
                      </div>

                      <div style={{ marginBottom: 32 }}>
                        <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, color: '#333', marginBottom: 8 }}>
                          Cover Message / Engineering Highlights
                        </label>
                        <textarea 
                          name="coverMessage"
                          rows="4"
                          placeholder="Briefly describe your key domain expertise, major projects delivered, or why you want to build your engineering career with Techno Products..."
                          value={formData.coverMessage}
                          onChange={handleInputChange}
                          style={{ 
                            width: '100%', padding: '14px 16px', borderRadius: 12, border: '1px solid #CBD5E1', 
                            fontFamily: 'var(--font-body)', fontSize: 14, color: '#001426', outline: 'none', background: '#FAFAFA', resize: 'vertical' 
                          }} 
                        />
                      </div>

                      <button 
                        type="submit" 
                        className="btn btn-primary" 
                        style={{ width: '100%', padding: '16px 28px', fontSize: 16, borderRadius: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, fontWeight: 700 }}
                      >
                        Submit Application <Send size={18} />
                      </button>
                    </form>
                  )}
                </div>
              </RevealText>
            </div>

          </div>
        </div>
      </section>

      {/* ====================================================
          4. CULTURE CTA / HR CONTACT SECTION
          ==================================================== */}
      <section style={{ padding: '110px 0', background: '#001426', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <RevealText>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 48px)', color: '#fff', marginBottom: 20 }}>
              Questions About Working Here?
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: 'rgba(255,255,255,0.75)', marginBottom: 44, maxWidth: 580, marginInline: 'auto', lineHeight: 1.7 }}>
              Reach out directly to our HR engineering team for any questions regarding open positions, application status, or what it is like to build your career at Techno Products.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 44px', fontSize: 15, borderRadius: 40, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              Contact HR Team <ArrowRight size={18} />
            </Link>
          </RevealText>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .careers-hero-grid { grid-template-columns: 1fr !important; gap: 44px !important; }
          .careers-perks-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .apply-opportunities-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 640px) {
          .careers-perks-grid { grid-template-columns: 1fr !important; }
          .form-grid-2 { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </main>
  );
}
