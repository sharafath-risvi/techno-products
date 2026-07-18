import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTag, { RevealText } from '../ui/RevealText';

const IMG_HERO = 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=1200&h=1400&fit=crop&q=85';

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="who-we-are-editorial-section">
      <div className="container">
        
        {/* ONE Premium Editorial Card */}
        <div className="editorial-card">
          
          {/* 1. Left Vertical Panel */}
          <div className="panel-left">
            <RevealText>
              <SectionTag>Who We Are</SectionTag>
              <h2 className="editorial-heading">
                A Trusted Name in<br />
                <span style={{ color: '#00446F' }}>Industrial Engineering</span><br />
                Since 1999.
              </h2>
              <p className="editorial-desc">
                Established in 1999, Techno Products Development Pvt. Ltd. is a trusted industrial engineering partner with over 26 years of proven excellence. We specialize in delivering customer-focused engineering solutions designed to maximize operational efficiency and accelerate industrial growth. Through our trusted global brand partnerships and an unwavering commitment to innovation, we provide high-quality, reliable solutions tailored to meet the evolving demands of the modern industrial sector.
              </p>
              <Link to="/contact" className="about-modern-cta">
                Partner With Us
                <ArrowRight size={18} className="cta-icon" strokeWidth={2.5} />
              </Link>
            </RevealText>
          </div>

          {/* 2. Bottom Horizontal Panel (The Notch) */}
          <div className="panel-bottom">
            <motion.div 
              className="dashboard-stats"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="dash-stat">
                <span className="dash-stat-value">26+</span>
                <span className="dash-stat-label">Years of<br />Experience</span>
              </div>
              <div className="stat-divider" />
              <div className="dash-stat">
                <span className="dash-stat-value">15+</span>
                <span className="dash-stat-label">Global Brand<br />Partners</span>
              </div>
              <div className="stat-divider" />
              <div className="dash-stat">
                <span className="dash-stat-value">500+</span>
                <span className="dash-stat-label">Projects<br />Delivered</span>
              </div>
            </motion.div>
          </div>

          {/* 3. Hero Image (Inverted L-Shape) */}
          <motion.div 
            className="hero-image-wrapper"
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src={IMG_HERO} alt="Techno Products Engineering Facility" className="hero-img" loading="lazy" />
            <div className="hero-overlay" />
          </motion.div>

        </div>
      </div>

      <style>{`
        .who-we-are-editorial-section {
          padding: 120px 0;
          background: #FFFFFF;
          overflow: hidden;
        }

        /* --- Master Puzzle Grid --- */
        .editorial-card {
          background: #FFFFFF;
          border-radius: 64px;
          box-shadow: 0 32px 80px rgba(0, 20, 40, 0.08);
          border: 1px solid rgba(0, 103, 164, 0.08);
          display: grid;
          /* 12 Columns: Left=5, Middle=4, Right=3 */
          grid-template-columns: 5fr 4fr 3fr;
          /* 2 Rows: Top is flexible, Bottom is strictly 240px to match clip-path notch */
          grid-template-rows: 1fr 240px;
          min-height: 740px;
          overflow: hidden;
        }

        /* 1. Left Vertical Panel (Top to Bottom) */
        .panel-left {
          grid-column: 1 / 2;
          grid-row: 1 / 3;
          padding: 80px 64px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          z-index: 2;
          background: #FFFFFF;
        }

        /* 2. Bottom Horizontal Panel (The L-Shape Extension) */
        .panel-bottom {
          grid-column: 2 / 3;
          grid-row: 2 / 3;
          padding: 32px 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 24px;
          z-index: 2;
          background: #FFFFFF;
        }

        /* 3. Hero Image (Inverted L-Shape matching the Grid precisely) */
        .hero-image-wrapper {
          grid-column: 2 / 4;
          grid-row: 1 / 3;
          position: relative;
          z-index: 1;
          clip-path: polygon(
            0 0, 
            100% 0, 
            100% 100%, 
            calc(100% * 4 / 7) 100%, 
            calc(100% * 4 / 7) calc(100% - 240px), 
            0 calc(100% - 240px)
          );
        }

        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.3) 100%);
        }

        /* --- Typography & UI Elements --- */
        .editorial-heading {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: clamp(32px, 3.5vw, 48px);
          line-height: 1.1;
          letter-spacing: -0.025em;
          color: #000000;
          margin-bottom: 32px;
        }

        .editorial-desc {
          font-family: var(--font-body);
          font-size: 16px;
          color: #555;
          line-height: 1.8;
          margin-bottom: 48px;
        }

        .dashboard-stats {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .stat-divider {
          width: 1px;
          height: 56px;
          background: rgba(0, 0, 0, 0.08);
        }

        .dash-stat {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .dash-stat-value {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 32px;
          color: #0067A4;
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .dash-stat-label {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 13px;
          color: #666;
          line-height: 1.4;
        }

        .about-modern-cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #0067A4;
          color: #FFFFFF;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 14px;
          padding: 16px 32px;
          border-radius: 50px;
          text-decoration: none;
          box-shadow: 0 12px 28px rgba(0, 103, 164, 0.25);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          width: max-content;
        }
        .about-modern-cta:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0, 103, 164, 0.4);
          background: #005BAC;
        }
        .about-modern-cta .cta-icon {
          transition: transform 0.4s ease;
        }
        .about-modern-cta:hover .cta-icon {
          transform: translateX(6px);
        }

        /* --- Responsive Design --- */
        @media (max-width: 1200px) {
          .editorial-card {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto auto;
          }
          .panel-left { grid-column: 1 / 2; grid-row: 1; padding: 64px 40px; }
          .panel-bottom { grid-column: 1 / 2; grid-row: 2; padding: 40px; }
          .hero-image-wrapper { 
            grid-column: 2 / 3; 
            grid-row: 1 / 3;
            clip-path: none;
          }
        }

        @media (max-width: 960px) {
          .editorial-card {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto auto;
            border-radius: 24px;
          }
          .panel-left { grid-column: 1; grid-row: 1; padding: 40px; }
          .hero-image-wrapper { 
            grid-column: 1; 
            grid-row: 2;
            min-height: 380px; 
          }
          .panel-bottom { grid-column: 1; grid-row: 3; padding: 40px; }
          .dashboard-stats {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 24px;
          }
          .stat-divider {
            width: 48px;
            height: 1px;
          }
        }
      `}</style>
    </section>
  );
}
