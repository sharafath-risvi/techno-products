import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight, FileText } from 'lucide-react';

const quickLinks = [
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-stories' },
  { label: 'Contact', href: '/contact' }
];

const productLinks = [
  { label: 'Electric Motors', href: '/products/electric-motors' },
  { label: 'Gearboxes', href: '/products/gearboxes' },
  { label: 'Drives & Automation', href: '/products/drives-automation' },
  { label: 'Control Panels', href: '/products/control-panels' },
  { label: 'Industrial Accessories', href: '/products/industrial-accessories' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function Footer() {
  return (
    <footer className="premium-footer">
      <div className="footer-pattern" />
      <div className="footer-gradient" />
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div 
          className="footer-main-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Column 1: Brand */}
          <motion.div variants={itemVariants} className="footer-col brand-col">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon">T</div>
              <div className="footer-logo-text">
                <span className="logo-top">TECHNO</span>
                <span className="logo-bottom">PRODUCTS</span>
              </div>
            </Link>
            <p className="footer-desc">
              Premier channel partner for top global industrial brands. Delivering reliable engineering solutions and performance-driven products since 1999.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="LinkedIn">LI</a>
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="YouTube">YT</a>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants} className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-link-list">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="footer-nav-link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Products */}
          <motion.div variants={itemVariants} className="footer-col">
            <h4 className="footer-heading">Products</h4>
            <ul className="footer-link-list">
              {productLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="footer-nav-link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact */}
          <motion.div variants={itemVariants} className="footer-col contact-col">
            <h4 className="footer-heading">Contact Details</h4>
            <div className="footer-contact-item">
              <MapPin size={18} className="contact-icon" />
              <span>Chennai Head Office<br/>Tamil Nadu, India</span>
            </div>
            <a href="tel:+919551696517" className="footer-contact-item linkable">
              <Phone size={18} className="contact-icon" />
              <span>+91 95516-96517<br/>+91 98412-76889</span>
            </a>
            <a href="mailto:sales@technoproducts.in" className="footer-contact-item linkable">
              <Mail size={18} className="contact-icon" />
              <span>sales@technoproducts.in</span>
            </a>
            <div className="footer-contact-item">
              <FileText size={18} className="contact-icon" />
              <span>GST No.<br/>33AABCT1291J1ZF</span>
            </div>
          </motion.div>

          {/* Column 5: CTA */}
          <motion.div variants={itemVariants} className="footer-col cta-col">
            <h4 className="footer-heading">Need Engineering Solutions?</h4>
            <p className="cta-desc">Partner with us for reliable, high-performance industrial automation and drive solutions tailored to your needs.</p>
            <Link to="/contact" className="footer-cta-btn">
              Get a Quote <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="container">
          <div className="bottom-bar-inner">
            <div className="copyright">
              © {new Date().getFullYear()} Techno Products Development Pvt. Ltd.<br/>All Rights Reserved.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .premium-footer {
          position: relative;
          background-color: var(--color-primary-dark);
          color: var(--color-white);
          overflow: hidden;
          padding-top: 96px;
        }
        
        .footer-pattern {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: 
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 30px 30px;
          opacity: 0.8;
          pointer-events: none;
        }

        .footer-gradient {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(circle at center top, rgba(0, 103, 164, 0.4) 0%, transparent 60%);
          pointer-events: none;
        }

        .footer-main-grid {
          display: grid;
          grid-template-columns: 2.2fr 1fr 1.3fr 1.4fr 1.5fr;
          gap: 48px;
          padding-bottom: 80px;
        }

        @media (max-width: 1200px) {
          .footer-main-grid {
            grid-template-columns: 2fr 1fr 1fr 1.2fr 1.5fr;
            gap: 32px;
          }
        }

        @media (max-width: 1024px) {
          .footer-main-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 56px 40px;
          }
          .brand-col { grid-column: 1 / -1; }
        }

        @media (max-width: 640px) {
          .footer-main-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }

        .footer-col {
          display: flex;
          flex-direction: column;
        }

        /* Brand Column */
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          text-decoration: none;
        }
        .footer-logo-icon {
          width: 36px;
          height: 36px;
          background: #88C5E6;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 18px;
          color: var(--color-primary-dark);
        }
        .footer-logo-text {
          display: flex;
          flex-direction: column;
        }
        .logo-top {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 16px;
          letter-spacing: 0.1em;
          color: #FFFFFF;
          line-height: 1.1;
        }
        .logo-bottom {
          font-family: var(--font-body);
          font-size: 10px;
          letter-spacing: 0.18em;
          color: #88C5E6;
          line-height: 1;
        }
        .footer-desc {
          font-family: var(--font-body);
          font-size: 15px;
          line-height: 1.7;
          color: rgba(255,255,255,0.7);
          margin-bottom: 32px;
          max-width: 340px;
        }
        .footer-socials {
          display: flex;
          gap: 16px;
        }
        .footer-socials a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          color: #FFFFFF;
          transition: all 0.3s ease;
        }
        .footer-socials a:hover {
          background: #88C5E6;
          color: var(--color-primary-dark);
          transform: translateY(-4px);
        }

        /* Typography & Links */
        .footer-heading {
          font-family: var(--font-heading);
          font-size: 18px;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 24px;
        }
        .footer-link-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .footer-nav-link {
          font-family: var(--font-body);
          font-size: 15px;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          position: relative;
          display: inline-block;
          transition: all 0.3s ease;
        }
        .footer-nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 100%;
          height: 1px;
          background: #88C5E6;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .footer-nav-link:hover {
          color: #88C5E6;
          transform: translateX(4px);
        }
        .footer-nav-link:hover::after {
          transform: scaleX(1);
        }

        /* Contact Details */
        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 20px;
          font-family: var(--font-body);
          font-size: 15px;
          line-height: 1.6;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
        }
        .contact-icon {
          color: #88C5E6;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .footer-contact-item.linkable {
          transition: all 0.3s ease;
        }
        .footer-contact-item.linkable:hover {
          color: #88C5E6;
          transform: translateX(4px);
        }

        /* CTA Column */
        .cta-desc {
          font-family: var(--font-body);
          font-size: 14px;
          line-height: 1.6;
          color: rgba(255,255,255,0.6);
          margin-bottom: 24px;
        }
        .footer-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #FFFFFF;
          color: var(--color-primary-dark);
          padding: 14px 28px;
          border-radius: 12px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          text-decoration: none;
          transition: all 0.3s ease;
          align-self: flex-start;
        }
        .footer-cta-btn:hover {
          background: #88C5E6;
          color: var(--color-primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(136, 197, 230, 0.2);
        }

        /* Bottom Bar */
        .footer-bottom-bar {
          position: relative;
          z-index: 2;
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 24px 0;
        }
        .bottom-bar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .copyright, .developer-credit {
          font-family: var(--font-body);
          font-size: 13px;
          color: rgba(255,255,255,0.4);
        }
        @media (max-width: 640px) {
          .bottom-bar-inner {
            flex-direction: column;
            text-align: center;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}
