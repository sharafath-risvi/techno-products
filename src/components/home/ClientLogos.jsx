import { motion } from 'framer-motion';
import { clients } from '../../data/siteData';
import SectionTag, { RevealText } from '../ui/RevealText';
import { Building2 } from 'lucide-react';

// Duplicate for seamless infinite loop (3× for smooth 33% position)
const CLIENTS_LOOP = [...clients, ...clients, ...clients];

const CLIENT_ACCENT = {
  'TNPL': '#0067A4',
  'Larsen & Toubro': '#D71B32',
  'Chettinad Cement': '#12703C',
  'Schwing Stetter': '#00446F',
};

const CLIENT_BG = {
  'TNPL': '#D9EAF5',
  'Larsen & Toubro': '#FAD9DD',
  'Chettinad Cement': '#D8EDE1',
  'Schwing Stetter': '#D9EAF5',
};

export default function ClientLogos() {
  return (
    <section style={{
      padding: '120px 0',
      background: '#F5F5F5',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <div className="container" style={{ marginBottom: 64 }}>
        <div style={{ textAlign: 'center' }}>
          <RevealText>
            <SectionTag>Our Clients</SectionTag>
            <h2 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 700,
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              lineHeight: 1.05, letterSpacing: '-0.025em',
              color: '#00101F', marginBottom: 16,
            }}>
              Trusted by Industry Leaders
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 17,
              color: '#666', lineHeight: 1.7,
              maxWidth: 480, marginInline: 'auto',
            }}>
              From India's most respected conglomerates to global engineering firms — TECHNO is the trusted partner for industrial excellence.
            </p>
          </RevealText>
        </div>
      </div>

      {/* Row 1 — forward marquee */}
      <div style={{ position: 'relative', overflow: 'hidden', marginBottom: 16 }}>
        {/* Edge fades */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 100,
          background: 'linear-gradient(to right, #F5F5F5, transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: 100,
          background: 'linear-gradient(to left, #F5F5F5, transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} />

        <div className="clients-marquee-track" style={{
          display: 'flex', width: 'max-content', gap: 16, padding: '6px 0',
        }}>
          {CLIENTS_LOOP.map((client, i) => {
            const accent = CLIENT_ACCENT[client.name] || '#0067A4';
            const bg = CLIENT_BG[client.name] || '#D9EAF5';
            return (
              <div
                key={`${client.name}-${i}`}
                className="client-card-item"
                style={{
                  flexShrink: 0,
                  padding: '22px 28px',
                  background: '#fff',
                  border: `1px solid ${accent}18`,
                  borderRadius: 14,
                  display: 'flex', flexDirection: 'column',
                  gap: 10,
                  minWidth: 220,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                }}
              >
                {/* Left accent bar */}
                <div style={{
                  position: 'absolute', top: 0, left: 0,
                  width: 3, height: '100%',
                  background: accent, borderRadius: '2px 0 0 2px',
                }} />

                <div style={{
                  width: 36, height: 36, borderRadius: 9,
                  background: bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Building2 size={16} color={accent} />
                </div>

                <div style={{
                  fontFamily: 'var(--font-heading)', fontWeight: 700,
                  fontSize: 15, color: '#00101F', letterSpacing: '-0.01em',
                }}>
                  {client.name}
                </div>

                <div style={{
                  fontFamily: 'var(--font-body)', fontSize: 11,
                  color: '#999', lineHeight: 1.4,
                }}>
                  {client.fullName}
                </div>

                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  fontFamily: 'var(--font-heading)', fontWeight: 700,
                  fontSize: 10, color: accent,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                }}>
                  <div style={{ width: 4, height: 4, borderRadius: '50%', background: accent }} />
                  {client.industry}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Row 2 — reverse marquee */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 100,
          background: 'linear-gradient(to right, #F5F5F5, transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: 100,
          background: 'linear-gradient(to left, #F5F5F5, transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} />

        <div className="clients-marquee-track clients-marquee-reverse" style={{
          display: 'flex', width: 'max-content', gap: 16, padding: '6px 0',
        }}>
          {[...CLIENTS_LOOP].reverse().map((client, i) => {
            const accent = CLIENT_ACCENT[client.name] || '#0067A4';
            const bg = CLIENT_BG[client.name] || '#D9EAF5';
            return (
              <div
                key={`r-${client.name}-${i}`}
                className="client-card-item"
                style={{
                  flexShrink: 0,
                  padding: '16px 24px',
                  background: bg,
                  border: `1px solid ${accent}20`,
                  borderRadius: 12,
                  display: 'flex', alignItems: 'center', gap: 12,
                  minWidth: 200,
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: accent, flexShrink: 0,
                }} />
                <div>
                  <div style={{
                    fontFamily: 'var(--font-heading)', fontWeight: 700,
                    fontSize: 13, color: '#00101F',
                  }}>
                    {client.name}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-body)', fontSize: 11,
                    color: '#777',
                  }}>
                    {client.industry}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .clients-marquee-track {
          animation: clients-scroll 30s linear infinite;
          will-change: transform;
        }
        .clients-marquee-reverse {
          animation: clients-scroll-reverse 44s linear infinite;
        }
        @keyframes clients-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        @keyframes clients-scroll-reverse {
          from { transform: translateX(-33.333%); }
          to   { transform: translateX(0); }
        }
        .clients-marquee-track:hover { animation-play-state: paused; }
        .client-card-item:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.1) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
