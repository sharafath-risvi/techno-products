import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import SectionTag, { RevealText } from '../ui/RevealText';

// Using high-quality unsplash images with mix-blend-mode for transparency simulation
const products = [
  {
    id: 'gearboxes',
    number: '01',
    title: 'GEARBOXES',
    shortName: 'Gearboxes',
    desc: 'Precision-engineered industrial gearboxes designed for maximum torque transmission, ultimate reliability, and long-term performance under extreme loads.',
    image: 'https://www.technoproducts.in/wp-content/uploads/2022/11/W-Series.jpeg',
    slug: '/products'
  },
  {
    id: 'motors',
    number: '02',
    title: 'ELECTRIC MOTORS',
    shortName: 'Electric Motors',
    desc: 'High-efficiency industrial motors built to power heavy machinery with minimal energy loss and unmatched durability in harsh environments.',
    image: 'https://www.technoproducts.in/wp-content/uploads/2022/12/1-SCA.png',
    slug: '/products'
  },
  {
    id: 'drives',
    number: '03',
    title: 'DRIVES & AUTOMATION',
    shortName: 'Drives & Automation',
    desc: 'Advanced VFD drives and intelligent automation systems offering precise control, energy savings, and seamless integration for smart manufacturing.',
    image: 'https://www.technoproducts.in/wp-content/uploads/2022/12/FC051-Danfoss-Drive.jpeg',
    slug: '/products'
  },
  {
    id: 'control-panels',
    number: '04',
    title: 'CONTROL PANELS',
    shortName: 'Control Panels',
    desc: 'Custom-built industrial control panels engineered to exact specifications, ensuring safety, compliance, and flawless operational logic.',
    image: '/images/control_panel.png',
    slug: '/products'
  },
  {
    id: 'cables',
    number: '05',
    title: 'CABLES & ACCESSORIES',
    shortName: 'Cables & Accessories',
    desc: 'Heavy-duty industrial cables and essential accessories providing robust power delivery and communication across massive industrial complexes.',
    image: '/images/techno_service_support.jpeg',
    slug: '/products' 
  }
];

export default function ProductCategories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotation logic
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % products.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + products.length) % products.length);

  const activeProduct = products[activeIndex];

  return (
    <section 
      style={{ padding: '120px 0', background: '#FAFAFA' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container">
        
        {/* --- Top Header Area --- */}
        <div className="portfolio-header">
          <div className="portfolio-header-left">
            <RevealText>
              <SectionTag>OUR PORTFOLIO</SectionTag>
              <h2 className="portfolio-heading">
                Engineered Products<br />
                <span style={{ color: '#00446F' }}>Built for Performance</span>
              </h2>
            </RevealText>
          </div>
          <div className="portfolio-header-right">
            <RevealText delay={0.1}>
              <Link to="/products" className="btn portfolio-view-all">
                View All Products <ArrowRight size={16} />
              </Link>
            </RevealText>
          </div>
        </div>

        {/* --- Main Showcase Container --- */}
        <div className="portfolio-showcase">
          {/* Vertical Label */}
          <div className="portfolio-vertical-label">
            PRODUCT PORTFOLIO
          </div>

          <div className="portfolio-content">
            
            {/* Active Hero Product (Left) */}
            <div className="portfolio-hero">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeProduct.id}
                  className="hero-info"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <div className="hero-number">{activeProduct.number}</div>
                  <h3 className="hero-title" style={{ marginBottom: 16 }}>{activeProduct.title}</h3>
                  <p className="hero-description" style={{
                    fontFamily: 'var(--font-body)', fontSize: 17, color: '#555',
                    lineHeight: 1.6, maxWidth: 480, margin: 0,
                    display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'
                  }}>
                    {activeProduct.desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Hero Image */}
              <div className="hero-image-wrapper">
                <motion.img
                  key={activeProduct.id}
                  src={activeProduct.image}
                  alt={activeProduct.title}
                  className="hero-image"
                  layoutId={`image-${activeProduct.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                />
              </div>

              {/* Action & Navigation */}
              <div className="hero-footer">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`btn-${activeProduct.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  >
                    <Link to={activeProduct.slug} className="btn btn-primary hero-btn">
                      Explore Product <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                <div className="portfolio-nav">
                  <button onClick={handlePrev} className="nav-btn outlined" aria-label="Previous">
                    <ArrowLeft size={20} />
                  </button>
                  <button onClick={handleNext} className="nav-btn filled" aria-label="Next">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Previews List (Right) */}
            <div className="portfolio-previews">
              {products.map((product, index) => {
                const isActive = index === activeIndex;
                
                // Hide active product from previews
                if (isActive) return null;

                return (
                  <motion.div 
                    key={product.id}
                    layoutId={`card-${product.id}`}
                    className="preview-card"
                    onClick={() => setActiveIndex(index)}
                    whileHover={{ scale: 1.03, y: -4 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  >
                    <div className="preview-info">
                      <span className="preview-number">{product.number}</span>
                      <h4 className="preview-title">{product.shortName}</h4>
                    </div>
                    <div className="preview-image-wrapper">
                      <motion.img 
                        layoutId={`image-${product.id}`}
                        src={product.image} 
                        alt={product.shortName} 
                        className="preview-image"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </div>

      <style>{`
        /* --- Layout Structure --- */
        .portfolio-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 64px;
          gap: 40px;
        }

        .portfolio-heading {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: clamp(32px, 4vw, 56px);
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: #000000;
          margin: 0;
        }

        .portfolio-header-right {
          max-width: 400px;
        }

        .portfolio-desc {
          font-family: var(--font-body);
          font-size: 16px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .portfolio-view-all {
          background: #00446F !important;
          border-color: #00446F !important;
          color: #fff !important;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .portfolio-view-all:hover {
          transform: translateX(3px);
          opacity: 0.9;
        }

        /* --- Main Showcase Container --- */
        .portfolio-showcase {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 0, 0, 0.04);
          border-radius: 40px;
          box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.05);
          position: relative;
          display: flex;
          overflow: hidden;
          padding: 60px;
          min-height: 850px;
        }

        .portfolio-vertical-label {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-family: var(--font-heading);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.3em;
          color: rgba(0, 0, 0, 0.15);
          position: absolute;
          left: 40px;
          top: 50%;
          transform: translateY(-50%) rotate(180deg);
        }

        .portfolio-content {
          display: flex;
          width: 100%;
          padding-left: 60px; /* Space for vertical label */
          gap: 120px;
        }

        /* --- Hero Product --- */
        .portfolio-hero {
          flex: 1.5;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .hero-info {
          position: relative;
          z-index: 2;
        }

        .hero-number {
          font-family: var(--font-heading);
          font-size: 18px;
          font-weight: 700;
          color: #00446F;
          letter-spacing: 0.05em;
          margin-bottom: 16px;
        }

        .hero-title {
          font-family: var(--font-heading);
          font-size: clamp(36px, 4vw, 52px);
          font-weight: 700;
          color: #000000;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 0;
        }

        .hero-footer {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 40px;
          position: relative;
          z-index: 2;
        }



        .hero-image-wrapper {
          position: relative;
          width: 100%;
          flex: 1;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin: 40px 0;
          pointer-events: none;
          z-index: 1;
        }

        .hero-image {
          max-width: 600px;
          width: 100%;
          height: auto;
          max-height: 500px;
          object-fit: contain;
          mix-blend-mode: multiply; /* Simulates transparent PNG over white background */
          filter: drop-shadow(0 30px 40px rgba(0,0,0,0.15));
        }

        /* --- Navigation --- */
        .portfolio-nav {
          display: flex;
          gap: 16px;
        }

        .nav-btn {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-btn.outlined {
          background: transparent;
          border: 1px solid #E0E0E0;
          color: #000000;
        }
        .nav-btn.outlined:hover {
          border-color: #000000;
          background: #F5F5F5;
        }

        .nav-btn.filled {
          background: #000000;
          border: none;
          color: #FFFFFF;
        }
        .nav-btn.filled:hover {
          background: #00446F;
          transform: translateX(4px);
          box-shadow: 0 10px 20px rgba(0, 68, 111, 0.2);
        }

        /* --- Previews --- */
        .portfolio-previews {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
          justify-content: center;
          z-index: 3;
        }

        .preview-card {
          background: #FFFFFF;
          border: 1px solid rgba(0,0,0,0.03);
          border-radius: 20px;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }

        .preview-card:hover {
          border-color: rgba(0, 68, 111, 0.3);
          box-shadow: 0 20px 40px rgba(0,0,0,0.06);
        }

        .preview-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .preview-number {
          font-family: var(--font-heading);
          font-size: 13px;
          font-weight: 700;
          color: #999;
          letter-spacing: 0.05em;
        }

        .preview-title {
          font-family: var(--font-heading);
          font-size: 18px;
          font-weight: 700;
          color: #000000;
          margin: 0;
        }

        .preview-image-wrapper {
          width: 80px;
          height: 80px;
          flex-shrink: 0;
          border-radius: 12px;
          background: #F8F8F8;
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .preview-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          mix-blend-mode: multiply;
        }

        /* --- Responsive --- */
        @media (max-width: 1100px) {
          .portfolio-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }
          .portfolio-content {
            flex-direction: column;
            padding-left: 20px;
          }
          .portfolio-vertical-label {
            display: none;
          }
          .hero-image-wrapper {
            position: relative;
            right: auto;
            top: auto;
            transform: none;
            width: 100%;
            height: 300px;
            margin-top: 40px;
          }
          .hero-image {
            object-position: center;
          }
          .portfolio-showcase {
            padding: 40px 24px;
          }
          .portfolio-previews {
            flex-direction: row;
            flex-wrap: wrap;
          }
          .preview-card {
            flex: 1 1 calc(50% - 8px);
          }
        }

        @media (max-width: 768px) {
          .portfolio-previews {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 16px;
            margin-inline: -24px;
            padding-inline: 24px;
          }
          .preview-card {
            flex: 0 0 280px;
            scroll-snap-align: start;
          }
          .hero-title {
            font-size: 32px;
          }
          .hero-description {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}
