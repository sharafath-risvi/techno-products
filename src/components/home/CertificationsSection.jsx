import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionTag from '../ui/RevealText';
import './CertificationsSection.css';

const certData = [
  { id: 1, title: "Danfoss DrivePro® Authorised Partner", issuer: "Danfoss", image: "/Certification/Danfross.jpeg", link: "/Certification/dandross_certificate.jpeg" },
  { id: 2, title: "SIMOLOG Service Partner", issuer: "Innomotics", image: "/Certification/SIMOLOG.jpeg", link: "/Certification/Siemens-Simolog.pdf" },
  { id: 3, title: "Techno Products Catalog", issuer: "Techno Products", image: "/Certification/Techno-Products-Catalogue.jpg", link: "/Certification/booklet32-pages-1_compressed.pdf" }
];

export default function CertificationsSection() {
  const targetRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const updateRange = () => {
      if (trackRef.current) {
        // Measure exact horizontal overflow width
        const trackWidth = trackRef.current.scrollWidth;
        const viewportWidth = document.documentElement.clientWidth; // precise width without scrollbar
        const maxScroll = Math.max(0, trackWidth - viewportWidth);
        setScrollRange(-maxScroll);
      }
    };

    updateRange();
    
    // ResizeObserver ensures we catch any layout shifts
    const observer = new ResizeObserver(() => updateRange());
    if (trackRef.current) {
      observer.observe(trackRef.current);
    }
    
    window.addEventListener('resize', updateRange);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateRange);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    // Start tracking when section top hits viewport top. Stop when section bottom hits viewport bottom.
    offset: ["start start", "end end"] 
  });

  // Mathematically tie horizontal position to normalized scroll progress (0 to 1)
  const x = useTransform(scrollYProgress, [0, 1], [0, scrollRange]);

  return (
    <section ref={targetRef} className="cert-section" style={{ position: 'relative', height: '350vh', background: '#FAFAFA' }}>
      {/* Sticky Container - One stable viewport during the entire 350vh scroll */}
      <div className="cert-sticky-wrapper" style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        
        {/* Soft Spotlight from ceiling */}
        <div className="museum-spotlight" />
        
        {/* Premium Floor Shadow */}
        <div className="museum-floor-shadow" />

        {/* Premium Header */}
        <div style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto', marginBottom: 60, padding: '0 24px', position: 'relative', zIndex: 20 }}>
          <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'center' }}>
            <SectionTag>Certifications</SectionTag>
          </div>
          
          <h2 style={{ 
            fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 56px)', 
            color: '#000000', margin: '0 auto 24px auto', letterSpacing: '-0.02em', 
            lineHeight: 1.1, maxWidth: 700
          }}>
            Recognized For <span style={{ color: '#00446F' }}>Engineering Excellence</span>
          </h2>
          
          <p style={{ 
            fontFamily: 'var(--font-body)', fontSize: 18, 
            color: '#555555', lineHeight: 1.6, margin: '0 auto', maxWidth: 680, fontWeight: 400
          }}>
            Certified to deliver engineering excellence with globally recognized quality and safety standards.
          </p>
        </div>

        {/* Single Source of Truth Horizontal Track */}
        <div className="cert-gsap-track-wrapper">
          <motion.div ref={trackRef} style={{ x }} className="cert-gsap-container">
            {certData.map((cert) => (
              <div key={cert.id} className="cert-gsap-slide-item">
                <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', transition: 'transform 0.3s' }} className="cert-link">
                  <img src={cert.image} alt={cert.title} style={{ height: '320px', width: 'auto', objectFit: 'contain', display: 'block', mixBlendMode: 'multiply' }} />
                </a>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
