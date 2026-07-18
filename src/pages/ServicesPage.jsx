import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionTag, { RevealText, RevealSlideLeft, RevealSlideRight } from '../components/ui/RevealText';
import { services } from '../data/siteData';

const serviceImages = [
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1000&h=800&fit=crop&q=80',
  'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1000&h=800&fit=crop&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&h=800&fit=crop&q=80',
  'https://images.unsplash.com/photo-1565608438257-fac3c27bdbdf?w=1000&h=800&fit=crop&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&h=800&fit=crop&q=80',
  'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1000&h=800&fit=crop&q=80',
];

export default function ServicesPage() {
  return (
    <main>
      {/* 1. Page Hero */}
      <section className="page-hero">
        <div className="page-hero__grid" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <RevealText>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#D71B32' }} />
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff' }}>
                Engineering Services
              </span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 700,
              fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 1.05,
              letterSpacing: '-0.02em', color: '#FFFFFF', marginBottom: 24,
            }}>
              End-to-End<br />
              <span style={{ color: '#FFFFFF' }}>Technical Support</span>
            </h1>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.5vw, 20px)',
              color: 'rgba(255,255,255,0.9)', lineHeight: 1.7, maxWidth: 640,
            }}>
              From component selection to complete automation system design, our trained engineers ensure your operations run at peak efficiency.
            </p>
          </RevealText>
        </div>
      </section>

      {/* 2. Service Details (Alternating Layout) */}
      <section style={{ padding: '80px 0' }}>
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={service.id} id={service.id} style={{ 
              padding: '80px 0', 
              background: isEven ? '#fff' : '#F5F5F5',
              borderBottom: index < services.length -1 ? '1px solid rgba(0,0,0,0.05)' : 'none'
            }}>
              <div className="container">
                <div style={{ 
                  display: 'flex', 
                  flexDirection: isEven ? 'row' : 'row-reverse', 
                  gap: 80, alignItems: 'center' 
                }} className="service-row">
                  
                  {/* Content Side */}
                  <div style={{ flex: 1 }}>
                    {isEven ? (
                      <RevealSlideLeft>
                        <ServiceContent service={service} index={index + 1} />
                      </RevealSlideLeft>
                    ) : (
                      <RevealSlideRight>
                        <ServiceContent service={service} index={index + 1} />
                      </RevealSlideRight>
                    )}
                  </div>

                  {/* Image Side */}
                  <div style={{ flex: 1 }}>
                    {isEven ? (
                      <RevealSlideRight delay={0.2}>
                        <ServiceImage src={serviceImages[index]} alt={service.title} />
                      </RevealSlideRight>
                    ) : (
                      <RevealSlideLeft delay={0.2}>
                        <ServiceImage src={serviceImages[index]} alt={service.title} />
                      </RevealSlideLeft>
                    )}
                  </div>
                  
                </div>
              </div>
            </div>
          );
        })}
      </section>
      
      <style>{`
        @media (max-width: 900px) {
          .service-row { flex-direction: column !important; gap: 40px !important; }
        }
      `}</style>
    </main>
  );
}

function ServiceContent({ service, index }) {
  return (
    <div>
      <div style={{ 
        fontFamily: 'var(--font-heading)', fontWeight: 700, 
        fontSize: 64, color: 'rgba(0,103,164,0.1)', lineHeight: 1, 
        letterSpacing: '-0.05em', marginBottom: -20, position: 'relative', zIndex: 0 
      }}>
        {String(index).padStart(2, '0')}
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{ 
          fontFamily: 'var(--font-heading)', fontWeight: 700, 
          fontSize: 'clamp(28px, 4vw, 40px)', color: '#000000', marginBottom: 20, lineHeight: 1.1 
        }}>
          {service.title}
        </h2>
        <p style={{ 
          fontFamily: 'var(--font-body)', fontSize: 16, color: '#666', 
          lineHeight: 1.8, marginBottom: 40, maxWidth: 500 
        }}>
          {service.description}
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px 24px', marginBottom: 48 }}>
          {service.features.map(feature => (
            <div key={feature} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <CheckCircle2 size={18} color="#0067A4" style={{ flexShrink: 0, marginTop: 2 }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: '#333', fontWeight: 500, lineHeight: 1.4 }}>
                {feature}
              </span>
            </div>
          ))}
        </div>
        
        <button className="btn btn-secondary">
          Request Consultation
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

function ServiceImage({ src, alt }) {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ 
        borderRadius: 24, overflow: 'hidden', 
        aspectRatio: '4/3', boxShadow: '0 24px 60px rgba(0,0,0,0.1)' 
      }}>
        <img 
          src={src} 
          alt={alt} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,20,38,0.2) 0%, transparent 100%)' }} />
      </div>
      {/* Decorative accent */}
      <div style={{ 
        position: 'absolute', bottom: -24, right: -24, 
        width: 140, height: 140, background: '#D9EAF5', 
        borderRadius: 24, zIndex: -1 
      }} />
    </div>
  );
}
