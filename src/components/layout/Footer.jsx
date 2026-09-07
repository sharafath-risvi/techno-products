import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight, FileText } from 'lucide-react';

const LinkedinIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const FacebookIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

export default function Footer() {
  return (
    <footer className="premium-footer">
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
              <img src="/Logo/logo1.png" alt="Techno Products" style={{ height: 150, width: 'auto', objectFit: 'contain' }} />
            </Link>
            <p className="footer-desc">
              Premier channel partner for top global industrial brands. Delivering reliable engineering solutions and performance-driven products since 1999.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="LinkedIn"><LinkedinIcon size={22} /></a>
              <a href="#" aria-label="Facebook"><FacebookIcon size={22} /></a>
              <a href="#" aria-label="Instagram"><InstagramIcon size={22} /></a>
              <a href="#" aria-label="YouTube"><YoutubeIcon size={22} /></a>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants} className="footer-col">
            <h4 className="footer-heading">Company</h4>
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
            <h4 className="footer-heading">Solutions</h4>
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
            <h4 className="footer-heading">Get in Touch</h4>
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
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="container">
          <div className="bottom-bar-inner">
            <div className="copyright">
              © {new Date().getFullYear()} Techno Products Development Pvt. Ltd. All Rights Reserved.
            </div>
            <div className="legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .premium-footer {
          position: relative;
          background-color: #F8FAFC;
          color: #1E293B;
          overflow: hidden;
          padding-top: 100px;
          border-top: 1px solid rgba(0,0,0,0.06);
        }
        
        .footer-main-grid {
          display: grid;
          grid-template-columns: 2.2fr 1fr 1.3fr 1.6fr;
          gap: 60px;
          padding-bottom: 80px;
        }

        @media (max-width: 1200px) {
          .footer-main-grid {
            grid-template-columns: 2fr 1fr 1fr 1.5fr;
            gap: 40px;
          }
        }

        @media (max-width: 992px) {
          .footer-main-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 56px 40px;
          }
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
          margin-bottom: 32px;
          text-decoration: none;
        }
        
        .footer-desc {
          font-family: var(--font-body);
          font-size: 16px;
          line-height: 1.7;
          color: #475569;
          margin-bottom: 40px;
          max-width: 380px;
        }
        .footer-socials {
          display: flex;
          gap: 16px;
        }
        .footer-socials a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #FFFFFF;
          color: #64748B;
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .footer-socials a:hover {
          background: #0067A4;
          color: #FFFFFF;
          border-color: #0067A4;
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 12px 24px rgba(0, 103, 164, 0.2);
        }

        /* Typography & Links */
        .footer-heading {
          font-family: var(--font-heading);
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #0F172A;
          margin-bottom: 32px;
          position: relative;
        }
        
        .footer-heading::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 24px;
          height: 2px;
          background: #0067A4;
          border-radius: 2px;
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
          color: #64748B;
          text-decoration: none;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
        }
        
        .footer-nav-link:hover {
          color: #0067A4;
          transform: translateX(4px);
        }

        /* Contact Details */
        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 24px;
          font-family: var(--font-body);
          font-size: 15px;
          line-height: 1.6;
          color: #475569;
          text-decoration: none;
        }
        .contact-icon {
          color: #0067A4;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .footer-contact-item.linkable {
          transition: all 0.2s ease;
        }
        .footer-contact-item.linkable:hover {
          color: #0067A4;
        }

        /* Bottom Bar */
        .footer-bottom-bar {
          background: #FFFFFF;
          border-top: 1px solid rgba(0,0,0,0.06);
          padding: 24px 0;
        }
        .bottom-bar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .copyright {
          font-family: var(--font-body);
          font-size: 14px;
          color: #64748B;
        }
        .legal-links {
          display: flex;
          gap: 24px;
        }
        .legal-links a {
          font-family: var(--font-body);
          font-size: 14px;
          color: #64748B;
          text-decoration: none;
          transition: color 0.2s;
        }
        .legal-links a:hover {
          color: #0067A4;
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
