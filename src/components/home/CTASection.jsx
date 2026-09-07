import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { RevealText } from '../ui/RevealText';

const BG_IMG = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=900&fit=crop&q=80';

export default function CTASection({
  label = "Engineering Your Success",
  heading = "Ready to Elevate Your",
  gradientHeading = "Industrial Operations?",
  description = "Speak with our engineering team today. We'll help you identify the right products, design the optimal system, and deliver a complete solution — fast.",
  primaryBtnText = "Request a Consultation",
  primaryBtnLink = "/contact",
  secondaryBtnText = "",
  secondaryBtnLink = "/contact"
}) {
  return (
    <section style={{
      position: 'relative',
      background: '#00101F',
      overflow: 'hidden',
    }}>
      {/* Background image */}
      <div style={{
        position: 'absolute', inset: 0,
        zIndex: 0,
      }}>
        <img
          src={BG_IMG}
          alt="Industrial engineering"
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            filter: 'brightness(0.2) contrast(1.1) saturate(0.7)',
          }}
        />
      </div>

      {/* Gradient overlays */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: `
          linear-gradient(135deg, rgba(0,16,31,0.95) 0%, rgba(0,68,111,0.7) 50%, rgba(0,16,31,0.9) 100%)
        `,
      }} />

      {/* Ambient orbs */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '-20%', right: '-10%',
            width: 600, height: 600, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,103,164,0.3) 0%, transparent 65%)',
            filter: 'blur(60px)',
          }}
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.06, 0.15, 0.06] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{
            position: 'absolute', bottom: '-15%', left: '-5%',
            width: 500, height: 500, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(215,27,50,0.2) 0%, transparent 65%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          className="cta-mobile-padding"
          style={{
            padding: '140px 0',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', textAlign: 'center',
          }}
        >
          {/* Eyebrow */}
          <RevealText>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 28,
            }}>
              <div style={{ width: 32, height: 1, background: 'rgba(255,255,255,0.2)' }} />
              <span style={{
                fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.45)',
              }}>
                {label}
              </span>
              <div style={{ width: 32, height: 1, background: 'rgba(255,255,255,0.2)' }} />
            </div>

            <h2 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 700,
              fontSize: 'clamp(32px, 4.5vw, 72px)',
              lineHeight: 1.05, letterSpacing: '-0.025em',
              color: '#fff', marginBottom: description ? 24 : 56, maxWidth: 960,
            }}>
              {heading} {heading && <br />}
              <span style={{
                background: 'linear-gradient(135deg, #4F8FBF 0%, #D71B32 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {gradientHeading}
              </span>
            </h2>

            {description && (
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(16px, 1.4vw, 20px)',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.75, marginBottom: 56,
                maxWidth: 700,
              }}>
                {description}
              </p>
            )}
          </RevealText>

          {/* CTA + contact strip */}
          <RevealText delay={0.2}>
            <div className="cta-btn-group" style={{
              display: 'flex', flexDirection: 'row',
              alignItems: 'center', gap: 24, flexWrap: 'wrap', justifyContent: 'center'
            }}>
              <Link to={primaryBtnLink} className="btn btn-primary" style={{
                padding: '16px 36px', fontSize: 14, letterSpacing: '0.1em',
              }}>
                {primaryBtnText}
                <ArrowRight size={18} />
              </Link>

              {secondaryBtnText && (
                <Link to={secondaryBtnLink} className="btn-secondary" style={{
                  padding: '14px 32px',
                  fontSize: 14,
                  letterSpacing: '0.1em',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  border: '2px solid rgba(255,255,255,0.2)',
                  borderRadius: 100,
                  transition: 'all 0.3s',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                }}
                >
                  {secondaryBtnText}
                </Link>
              )}
            </div>
          </RevealText>
        </div>
      </div>

      <style>{`
        .cta-contact-link:hover { color: #fff !important; }
        
        @media (max-width: 768px) {
          /* Reduce CTA section padding significantly on mobile */
          .cta-mobile-padding {
            padding: 72px 0 !important;
          }
        }
        @media (max-width: 480px) {
          .cta-mobile-padding {
            padding: 56px 0 !important;
          }
        }
      `}</style>
      <style>{`
        @media (max-width: 768px) {
          .cta-mobile-padding {
            padding: 80px 16px !important;
          }
          .cta-mobile-padding h2 {
            font-size: clamp(28px, 6vw, 40px) !important;
            margin-bottom: 32px !important;
          }
          .cta-mobile-padding p {
            font-size: 15px !important;
            margin-bottom: 32px !important;
          }
          .cta-btn-group {
            flex-direction: column !important;
            gap: 16px !important;
            width: 100%;
            align-items: center;
          }
          .cta-btn-group .btn-primary, .cta-btn-group .btn-secondary {
            padding: 16px 12px !important;
            font-size: clamp(12px, 3.8vw, 14px) !important;
            width: 100% !important;
            max-width: 340px !important;
            text-align: center;
            justify-content: center;
            white-space: nowrap !important;
          }
        }
      `}</style>
    </section>
  );
}
