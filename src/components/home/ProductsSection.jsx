import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { productCategories } from '../../data/siteData';

// Extract and map only the exactly requested products
const requestedProducts = [
  { name: 'Variable Frequency Drives (VFD)', id: 'vfd' },
  { name: 'Electric Motors', id: 'motors' },
  { name: 'Gearbox', id: 'gearboxes' },
  { name: 'Geared Motors', id: 'geared-motors' },
  { name: 'Brakes', id: 'brakes' },
  { name: 'Control Panels', id: 'control-panels' },
  { name: 'Pulleys & Couplings', id: 'pulleys' }, // Using the pulleys image for this combined item
];

const carouselProducts = requestedProducts.map(req => {
  const cat = productCategories.find(p => p.id === req.id);
  return {
    name: req.name,
    image: cat ? cat.image : 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    slug: cat ? cat.slug : '#',
  };
});

// Swipe detection logic
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function ProductsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % carouselProducts.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + carouselProducts.length) % carouselProducts.length);
  };

  const getOffset = (index) => {
    const total = carouselProducts.length;
    let offset = (index - activeIndex) % total;
    if (offset > Math.floor(total / 2)) offset -= total;
    if (offset < -Math.floor(total / 2)) offset += total;
    return offset;
  };

  const variants = {
    center: {
      x: 0,
      scale: 1,
      zIndex: 10,
      rotateY: 0,
      opacity: 1,
      boxShadow: '0 32px 64px rgba(0, 0, 0, 0.15)',
    },
    left: {
      x: '-70%',
      scale: 0.8,
      zIndex: 5,
      rotateY: 10,
      opacity: 1,
      boxShadow: '0 16px 32px rgba(0, 0, 0, 0.05)',
    },
    right: {
      x: '70%',
      scale: 0.8,
      zIndex: 5,
      rotateY: -10,
      opacity: 1,
      boxShadow: '0 16px 32px rgba(0, 0, 0, 0.05)',
    },
    hiddenLeft: {
      x: '-100%',
      scale: 0.6,
      zIndex: 0,
      opacity: 0,
    },
    hiddenRight: {
      x: '100%',
      scale: 0.6,
      zIndex: 0,
      opacity: 0,
    }
  };

  const animateState = (offset) => {
    if (offset === 0) return 'center';
    if (offset === -1) return 'left';
    if (offset === 1) return 'right';
    if (offset < -1) return 'hiddenLeft';
    if (offset > 1) return 'hiddenRight';
    return 'hiddenRight';
  };

  return (
    <section className="products-3d-section">
      <div className="container">
        
        {/* Section Header (Unchanged) */}
        <div className="products-header">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-tag">Product Portfolio</div>
            <h2 className="section-title">
              Industrial Products from<br />World-Class Manufacturers
            </h2>
          </motion.div>
        </div>

        {/* 3D Carousel Stage */}
        <div className="carousel-stage">
          {carouselProducts.map((product, index) => {
            const offset = getOffset(index);
            const isCenter = offset === 0;

            return (
              <motion.div
                key={index}
                className="carousel-card"
                variants={variants}
                animate={animateState(offset)}
                initial={false}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    handleNext();
                  } else if (swipe > swipeConfidenceThreshold) {
                    handlePrev();
                  }
                }}
                onClick={() => {
                  if (offset === 1) handleNext();
                  if (offset === -1) handlePrev();
                }}
              >
                {/* Inner Card (Applies CSS floating to active card without fighting Framer Motion) */}
                <div className={`carousel-inner ${isCenter ? 'active-float' : ''}`}>
                  <h3 className="carousel-title">{product.name}</h3>
                  <div className="carousel-img-wrapper">
                    <img src={product.image} alt={product.name} className="carousel-img" loading="lazy" />
                  </div>
                  {/* Dark overlay for side cards to push them back in depth */}
                  <div className={`carousel-dark-overlay ${isCenter ? 'hidden' : ''}`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Controls */}
        <div className="carousel-nav">
          <button className="nav-btn" onClick={handlePrev} aria-label="Previous product">
            <ArrowLeft size={24} />
          </button>
          
          <div className="carousel-dots">
            {carouselProducts.map((_, i) => (
              <button 
                key={i} 
                className={`dot ${i === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button className="nav-btn" onClick={handleNext} aria-label="Next product">
            <ArrowRight size={24} />
          </button>
        </div>

      </div>

      <style>{`
        .products-3d-section {
          padding: 120px 0;
          background: #F8F9FA;
          overflow: hidden;
        }

        .products-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-tag {
          display: inline-block;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #005BAC;
          background: rgba(0, 91, 172, 0.1);
          padding: 8px 16px;
          border-radius: 4px;
          margin-bottom: 24px;
        }

        .section-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: clamp(32px, 4vw, 56px);
          line-height: 1.15;
          color: #111;
          letter-spacing: -0.02em;
        }

        /* --- 3D Carousel Stage --- */
        .carousel-stage {
          position: relative;
          height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1200px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .carousel-card {
          position: absolute;
          width: 480px;
          height: 600px;
          border-radius: 32px;
          cursor: pointer;
          touch-action: pan-y;
        }

        .carousel-inner {
          position: relative;
          width: 100%;
          height: 100%;
          background: #FFFFFF;
          border-radius: 32px;
          display: flex;
          flex-direction: column;
          padding: 32px;
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        /* Subtle float animation for the center active card */
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .carousel-inner.active-float {
          animation: subtleFloat 4s ease-in-out infinite;
        }

        /* Hover lift for the active card */
        .carousel-card[style*="z-index: 10"]:hover .carousel-inner.active-float {
          transform: translateY(-8px);
        }

        /* --- Card Content --- */
        .carousel-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 28px;
          color: #111111;
          text-align: center;
          margin-bottom: 24px;
          line-height: 1.2;
          z-index: 2;
        }

        .carousel-img-wrapper {
          flex: 1;
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          z-index: 1;
        }

        .carousel-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* Mouse parallax effect simulation on hover */
        .carousel-card[style*="z-index: 10"]:hover .carousel-img {
          transform: scale(1.05);
        }

        .carousel-dark-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 16, 31, 0.4);
          z-index: 10;
          border-radius: 32px;
          pointer-events: none;
          transition: opacity 0.7s ease;
        }

        .carousel-dark-overlay.hidden {
          opacity: 0;
        }

        /* --- Navigation --- */
        .carousel-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 32px;
          margin-top: 56px;
        }

        .nav-btn {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 1px solid #E0E0E0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #111;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .nav-btn:hover {
          background: #005BAC;
          color: #FFF;
          border-color: #005BAC;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 91, 172, 0.2);
        }

        .carousel-dots {
          display: flex;
          gap: 12px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background: #D0D0D0;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .dot.active {
          width: 32px;
          background: #005BAC;
        }

        /* --- Responsive --- */
        @media (max-width: 1024px) {
          .carousel-card {
            width: 400px;
            height: 500px;
          }
          .carousel-stage {
            height: 500px;
          }
        }

        @media (max-width: 768px) {
          .carousel-card {
            width: 320px;
            height: 420px;
          }
          .carousel-stage {
            height: 420px;
          }
          .carousel-title {
            font-size: 22px;
            margin-bottom: 16px;
          }
        }

        @media (max-width: 480px) {
          .carousel-card {
            width: 280px;
            height: 380px;
          }
          .carousel-stage {
            height: 380px;
          }
          .nav-btn {
            width: 48px;
            height: 48px;
          }
        }
      `}</style>
    </section>
  );
}
