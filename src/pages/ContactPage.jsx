import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight, Building2, User, Briefcase, Mail as MailIcon, Phone as PhoneIcon, MessageSquare, Send, FileText } from 'lucide-react';
import SectionTag, { RevealText } from '../components/ui/RevealText';

export default function ContactPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Parallax effect for the hero image
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <main style={{ background: '#FAFAFA' }}>
      
      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="contact-hero">
        <div className="container contact-hero-container">
          <div className="contact-hero-content">
            <RevealText>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#D71B32' }} />
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0067A4' }}>
                  CONTACT US
                </span>
              </div>
              <h1 className="hero-heading">
                Let's Build Better <span style={{ color: '#00446F' }}>Industrial Solutions</span> Together
              </h1>
              <p className="hero-description">
                Whether you need industrial transmission solutions, automation products, engineering consultation, or technical support, our experienced team is ready to help you find the right solution.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary">
                  Get in Touch <ArrowRight size={18} />
                </button>
              </div>
            </RevealText>
          </div>
          
          <div className="contact-hero-image-wrapper">
            <motion.div style={{ y, width: '100%', height: '120%' }}>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80" 
                alt="Industrial Engineering" 
                className="hero-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CONTACT INFO + FORM */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-split-layout">
            
            {/* Left Side: Info */}
            <div className="contact-info-left">
              <RevealText>
                <h2 className="section-title">Get in Touch</h2>
                <p className="company-intro">
                  TECHNO PRODUCTS DEVELOPMENT P LTD is one of India's largest and most preferred industrial transmission application engineering solution providers. Since 1999, we have delivered trusted solutions in Electric Motors, Geared Motors, Gearboxes, VFDs, Control Panels, Pumps & Accessories, Bearings, Couplings, Brakes & Clutches, Harmonic Filters, Cables, and Wires from globally recognized brands.
                </p>
              </RevealText>

              <motion.div 
                className="head-office-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="card-header">
                  <Building2 size={24} color="#0067A4" />
                  <h3>Chennai – Head Office</h3>
                </div>
                <div className="card-body">
                  <div className="info-row">
                    <MapPin size={20} className="info-icon" />
                    <p>No.78/2E1, Noombal Village, Maccana Industrial Estate, (Nearby Sundaram Fasteners Pvt. Ltd. – TVS), Velapanchavadi, Chennai – 600077</p>
                  </div>
                  <div className="info-row">
                    <Phone size={20} className="info-icon" />
                    <p>+91 95516 96517<br/>+91 98412 76889</p>
                  </div>
                  <div className="info-row">
                    <Mail size={20} className="info-icon" />
                    <p>sales@technoproducts.in</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side: Premium Form */}
            <div className="contact-form-right">
              <motion.div 
                className="premium-contact-form"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-grid">
                    <div className="input-group">
                      <label>Full Name</label>
                      <div className="input-wrapper">
                        <User size={18} className="input-icon" />
                        <input type="text" placeholder="John Doe" required />
                      </div>
                    </div>
                    <div className="input-group">
                      <label>Company Name</label>
                      <div className="input-wrapper">
                        <Briefcase size={18} className="input-icon" />
                        <input type="text" placeholder="Company Ltd." required />
                      </div>
                    </div>
                    <div className="input-group">
                      <label>Email Address</label>
                      <div className="input-wrapper">
                        <MailIcon size={18} className="input-icon" />
                        <input type="email" placeholder="john@company.com" required />
                      </div>
                    </div>
                    <div className="input-group">
                      <label>Phone Number</label>
                      <div className="input-wrapper">
                        <PhoneIcon size={18} className="input-icon" />
                        <input type="tel" placeholder="+91 98765 43210" required />
                      </div>
                    </div>
                  </div>
                  
                  <div className="input-group full-width" style={{ marginTop: '24px' }}>
                    <label>Subject</label>
                    <div className="input-wrapper">
                      <MessageSquare size={18} className="input-icon" />
                      <input type="text" placeholder="How can we help you?" required />
                    </div>
                  </div>

                  <div className="input-group full-width" style={{ marginTop: '24px' }}>
                    <label>Message</label>
                    <textarea placeholder="Please describe your industrial requirements..." rows="4" required></textarea>
                  </div>

                  <button type="submit" className="btn btn-red form-submit-btn">
                    <Send size={18} /> Send Enquiry
                  </button>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. BRANCH OFFICES */}
      <section className="branch-network-section">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-title text-center">Our Branch Network</h2>
          </div>
          
          <div className="branch-grid-premium">
            {/* Head Office */}
            <motion.div className="premium-branch-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}>
              <div className="card-header">
                <span className="office-type">Head Office</span>
                <h3 className="city-name">Chennai</h3>
              </div>
              <div className="card-body">
                <div className="info-row">
                  <MapPin size={20} className="info-icon" />
                  <p>No.78/2E1, Noombal Village,<br/>Maccana Industrial Estate,<br/>(Nearby Sundaram Fastners Pvt Ltd (TVS)),<br/>Velapanchavadi, Chennai – 600077</p>
                </div>
                <div className="info-row">
                  <Phone size={20} className="info-icon" />
                  <p>+91 95516-96517<br/>+91 98412-76889</p>
                </div>
                <div className="info-row">
                  <Mail size={20} className="info-icon" />
                  <p>sales@technoproducts.in</p>
                </div>
                <div className="info-row">
                  <FileText size={20} className="info-icon" />
                  <p>GST No.<br/>33AABCT1291J1ZF</p>
                </div>
              </div>
            </motion.div>

            {/* Coimbatore */}
            <motion.div className="premium-branch-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}>
              <div className="card-header">
                <span className="office-type">Branch Office</span>
                <h3 className="city-name">Coimbatore</h3>
              </div>
              <div className="card-body">
                <div className="info-row">
                  <MapPin size={20} className="info-icon" />
                  <p>SF No.119, VKV Industrial Estate,<br/>VKV Nagar, K. Vadamadurai NGGO Colony (PO),<br/>Coimbatore – 641022</p>
                </div>
                <div className="info-row">
                  <Phone size={20} className="info-icon" />
                  <p>+91 0422-3559811<br/>+91 98412-04295<br/>+91 99629-91583</p>
                </div>
                <div className="info-row">
                  <Mail size={20} className="info-icon" />
                  <p>saravanan@technoproducts.in</p>
                </div>
              </div>
            </motion.div>

            {/* Madurai */}
            <motion.div className="premium-branch-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}>
              <div className="card-header">
                <span className="office-type">Branch Office</span>
                <h3 className="city-name">Madurai</h3>
              </div>
              <div className="card-body">
                <div className="info-row">
                  <MapPin size={20} className="info-icon" />
                  <p>A37, Automobile SIDCO Industrial Estate,<br/>Kappalur, Madurai – 625008</p>
                </div>
                <div className="info-row">
                  <Phone size={20} className="info-icon" />
                  <p>+91 99629-91582</p>
                </div>
                <div className="info-row">
                  <Mail size={20} className="info-icon" />
                  <p>madurai@technoproducts.in</p>
                </div>
              </div>
            </motion.div>

            {/* Bengaluru */}
            <motion.div className="premium-branch-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}>
              <div className="card-header">
                <span className="office-type">Branch Office</span>
                <h3 className="city-name">Bengaluru</h3>
              </div>
              <div className="card-body">
                <div className="info-row">
                  <MapPin size={20} className="info-icon" />
                  <p>33/1, 2nd Main Road, Peenya Industrial Area, 2nd Stage,<br/>(Opposite Peenya 2nd Stage Bus Stop, Below BESCOM Office),<br/>Bengaluru – 560058</p>
                </div>
                <div className="info-row">
                  <Phone size={20} className="info-icon" />
                  <p>+91 98412-76889<br/>+91 99419-16488</p>
                </div>
                <div className="info-row">
                  <Mail size={20} className="info-icon" />
                  <p>ramesh@technoproducts.in</p>
                </div>
              </div>
            </motion.div>
            
            {/* Sales Network */}
            <motion.div className="premium-branch-card sales-network-card" style={{ gridColumn: '1 / -1' }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}>
              <div className="card-header" style={{ marginBottom: '24px', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '16px' }}>
                <span className="office-type">Regional Representation</span>
                <h3 className="city-name">Sales Network</h3>
              </div>
              <div className="sales-network-grid">
                <div className="sales-mini-item">
                  <span className="sales-city">Trichy</span>
                  <span className="sales-phone"><Phone size={14}/> +91 98412-11192</span>
                </div>
                <div className="sales-mini-item">
                  <span className="sales-city">Dindigul</span>
                  <span className="sales-phone"><Phone size={14}/> +91 98412-75310</span>
                </div>
                <div className="sales-mini-item">
                  <span className="sales-city">Erode</span>
                  <span className="sales-phone"><Phone size={14}/> +91 98418-17058</span>
                </div>
                <div className="sales-mini-item">
                  <span className="sales-city">Thoothukudi</span>
                  <span className="sales-phone"><Phone size={14}/> +91 97109-35725</span>
                </div>
                <div className="sales-mini-item">
                  <span className="sales-city">Kerala</span>
                  <span className="sales-phone"><Phone size={14}/> +91 98412-75316</span>
                </div>
                <div className="sales-mini-item">
                  <span className="sales-city">Puducherry</span>
                  <span className="sales-phone"><Phone size={14}/> +91 98412-75314</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE MAP */}
      <section className="map-section">
        <div className="container">
          <h2 className="section-title text-center" style={{ marginBottom: '40px' }}>Find Us Across South India</h2>
          <motion.div 
            className="map-container"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <iframe 
              src="https://maps.google.com/maps?width=100%25&height=500&hl=en&q=Techno%20Products%20Development%20Pvt.%20Ltd.,%2078/2E1,%20Noombal%20Rd,%20Velappanchavadi,%20Chennai,%20Tamil%20Nadu%20600077+(Techno%20Products%20Development)&t=&z=15&ie=UTF8&iwloc=B&output=embed" 
              width="100%" 
              height="500" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Techno Products Head Office Location"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* 5. QUICK CONTACT STRIP */}
      <section className="quick-contact-strip">
        <div className="container">
          <div className="quick-strip-grid">
            <div className="quick-card">
              <div className="quick-icon"><Mail size={24} /></div>
              <div className="quick-info">
                <span className="quick-label">Sales Support</span>
                <span className="quick-value">sales@technoproducts.in</span>
              </div>
            </div>
            <div className="quick-card">
              <div className="quick-icon"><Phone size={24} /></div>
              <div className="quick-info">
                <span className="quick-label">Call Our Team</span>
                <span className="quick-value">+91 95516 96517</span>
              </div>
            </div>
            <div className="quick-card">
              <div className="quick-icon"><Building2 size={24} /></div>
              <div className="quick-info">
                <span className="quick-label">Head Office</span>
                <span className="quick-value">Chennai, Tamil Nadu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="final-cta-section">
        <div className="container">
          <div className="cta-content-box">
            <h2 className="cta-heading">Let's Power Your Next Industrial Project</h2>
            <p className="cta-description">
              Partner with Techno Products for trusted industrial engineering solutions, technical expertise, and world-class support tailored to your business needs.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Contact Our Team</button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Typography & Colors */
        .section-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: clamp(32px, 4vw, 48px);
          color: #000000;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }
        .text-center { text-align: center; }

        /* 1. Hero Section */
        .contact-hero {
          padding: 140px 0 100px;
          background: #FFFFFF;
          overflow: hidden;
        }
        .contact-hero-container {
          display: flex;
          align-items: center;
          gap: 60px;
        }
        .contact-hero-content {
          flex: 0 0 50%;
        }
        .hero-heading {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: clamp(40px, 5vw, 64px);
          line-height: 1.1;
          color: #000000;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }
        .hero-description {
          font-family: var(--font-body);
          font-size: clamp(16px, 1.5vw, 18px);
          color: #555;
          line-height: 1.7;
          margin-bottom: 40px;
          max-width: 600px;
        }
        .hero-buttons {
          display: flex;
          gap: 16px;
        }
        .contact-hero-image-wrapper {
          flex: 0 0 calc(50% - 60px);
          height: 600px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(0,0,0,0.08);
        }
        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* 2. Contact Info & Form */
        .contact-info-section {
          padding: 100px 0;
          background: #FAFAFA;
        }
        .contact-split-layout {
          display: flex;
          gap: 60px;
        }
        .contact-info-left {
          flex: 0 0 45%;
        }
        .company-intro {
          font-family: var(--font-body);
          font-size: 16px;
          line-height: 1.8;
          color: #555;
          margin-bottom: 40px;
        }
        .head-office-card {
          background: #FFFFFF;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.04);
          border: 1px solid rgba(0, 103, 164, 0.05);
        }
        .card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          padding-bottom: 20px;
          border-bottom: 1px solid #EEE;
        }
        .card-header h3 {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 20px;
          color: #000000;
          margin: 0;
        }
        .info-row {
          display: flex;
          gap: 16px;
          margin-bottom: 20px;
        }
        .info-row:last-child {
          margin-bottom: 0;
        }
        .info-icon {
          color: #0067A4;
          flex-shrink: 0;
          margin-top: 4px;
        }
        .info-row p {
          font-family: var(--font-body);
          font-size: 15px;
          line-height: 1.6;
          color: #444;
          margin: 0;
        }

        .contact-form-right {
          flex: 0 0 calc(55% - 60px);
        }
        .premium-contact-form {
          background: #FFFFFF;
          border-radius: 24px;
          padding: 48px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.06);
          border: 1px solid rgba(0, 103, 164, 0.05);
        }
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .input-group label {
          display: block;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 13px;
          color: #001426;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .input-icon {
          position: absolute;
          left: 16px;
          color: #999;
          transition: color 0.3s;
        }
        .premium-contact-form input,
        .premium-contact-form textarea {
          width: 100%;
          background: #F8F9FA;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          font-family: var(--font-body);
          font-size: 15px;
          color: #333;
          transition: all 0.3s ease;
        }
        .premium-contact-form input {
          height: 52px;
          padding: 0 16px 0 44px;
        }
        .premium-contact-form textarea {
          padding: 16px;
          resize: vertical;
        }
        .premium-contact-form input:focus,
        .premium-contact-form textarea:focus {
          outline: none;
          border-color: #0067A4;
          background: #FFFFFF;
          box-shadow: 0 0 0 4px rgba(0, 103, 164, 0.1);
        }
        .premium-contact-form input:focus + .input-icon {
          color: #0067A4;
        }
        .btn-red {
          background: #D71B32;
          color: #FFF;
          width: 100%;
          height: 56px;
          border-radius: 12px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 16px;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 32px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .btn-red:hover {
          background: #b51528;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(215, 27, 50, 0.2);
        }

        /* 3. Branch Network */
        .branch-network-section {
          padding: 100px 0;
          background: #FFFFFF;
        }
        .branch-grid-premium {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          margin-top: 56px;
        }
        .premium-branch-card {
          background: #FFFFFF;
          border-radius: 24px;
          padding: 40px;
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 16px 40px rgba(0,0,0,0.04);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease;
          display: flex;
          flex-direction: column;
        }
        .premium-branch-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 48px rgba(0, 103, 164, 0.08);
          border-color: rgba(0, 103, 164, 0.2);
        }
        .sales-network-card {
          background: #00446F;
          background-image: 
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 20px 20px;
          border: none;
        }
        .sales-network-card:hover {
          background-color: #003355;
          border: none;
        }
        .sales-network-card .office-type {
          color: #88C5E6 !important;
        }
        .sales-network-card .city-name {
          color: #FFFFFF !important;
        }
        .sales-network-card .card-header {
          border-bottom-color: rgba(255,255,255,0.1) !important;
        }
        .premium-branch-card .card-header {
          margin-bottom: 24px;
        }
        .premium-branch-card .office-type {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #0067A4;
          display: block;
          margin-bottom: 8px;
        }
        .premium-branch-card .city-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 28px;
          color: #000000;
          margin: 0;
          letter-spacing: -0.01em;
        }
        .premium-branch-card .card-body {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .premium-branch-card .info-row {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .premium-branch-card .info-icon {
          color: #0067A4;
          flex-shrink: 0;
          margin-top: 4px;
        }
        .premium-branch-card .info-row p {
          font-family: var(--font-body);
          font-size: 16px;
          line-height: 1.6;
          color: #444;
          margin: 0;
        }
        .sales-network-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .sales-mini-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 16px 24px;
          background: rgba(255,255,255,0.05);
          border-radius: 40px;
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s ease;
          align-items: center;
          text-align: center;
        }
        .sales-mini-item:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.25);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          transform: translateY(-4px);
        }
        .sales-city {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 16px;
          color: #FFFFFF;
        }
        .sales-phone {
          font-family: var(--font-body);
          font-size: 14px;
          color: rgba(255,255,255,0.8);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .sales-phone svg {
          color: #88C5E6;
        }

        /* 4. Interactive Map */
        .map-section {
          padding: 80px 0 40px;
          background: #FAFAFA;
        }
        .map-container {
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.08);
          background: #FFF;
          padding: 8px;
        }
        .map-container iframe {
          border-radius: 16px;
        }

        /* 5. Quick Contact Strip */
        .quick-contact-strip {
          padding: 0 0 100px;
          background: #FAFAFA;
        }
        .quick-strip-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: -30px; /* Overlap map slightly */
          position: relative;
          z-index: 10;
        }
        .quick-card {
          background: #FFFFFF;
          border-radius: 16px;
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transition: transform 0.3s ease;
        }
        .quick-card:hover {
          transform: translateY(-5px);
        }
        .quick-icon {
          width: 56px;
          height: 56px;
          background: rgba(0, 103, 164, 0.05);
          color: #0067A4;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .quick-label {
          display: block;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 16px;
          color: #001426;
          margin-bottom: 4px;
        }
        .quick-value {
          font-family: var(--font-body);
          font-size: 14px;
          color: #666;
        }

        /* 6. Final CTA */
        .final-cta-section {
          padding: 120px 0;
          background: #FFFFFF;
        }
        .cta-content-box {
          background: #0067A4;
          border-radius: 32px;
          padding: 80px 40px;
          text-align: center;
          color: #FFFFFF;
          background-image: radial-gradient(circle at top right, #0081CC, transparent 60%);
          box-shadow: 0 24px 60px rgba(0, 103, 164, 0.25);
        }
        .cta-heading {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: clamp(32px, 4vw, 48px);
          margin-bottom: 20px;
        }
        .cta-description {
          font-family: var(--font-body);
          font-size: 18px;
          color: rgba(255,255,255,0.85);
          max-width: 650px;
          margin: 0 auto 40px;
          line-height: 1.6;
        }
        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 16px;
        }
        .cta-buttons .btn-primary {
          background: #FFFFFF;
          color: #0067A4;
        }
        .cta-buttons .btn-primary:hover {
          background: #F5F5F5;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .contact-hero-container { flex-direction: column; }
          .contact-hero-content { flex: none; width: 100%; text-align: center; }
          .hero-buttons { justify-content: center; }
          .contact-hero-image-wrapper { flex: none; width: 100%; height: 400px; margin-top: 40px; }
          
          .contact-split-layout { flex-direction: column; }
          .contact-info-left, .contact-form-right { flex: none; width: 100%; }
          
          .branch-grid-premium { grid-template-columns: repeat(2, 1fr); }
          .sales-network-grid { grid-template-columns: repeat(2, 1fr); }
          .quick-strip-grid { grid-template-columns: 1fr; margin-top: 24px; }
        }

        @media (max-width: 768px) {
          .form-grid { grid-template-columns: 1fr; }
          .branch-grid-premium { grid-template-columns: 1fr; }
          .sales-network-grid { grid-template-columns: 1fr; }
          .cta-buttons { flex-direction: column; }
        }
      `}</style>
    </main>
  );
}
