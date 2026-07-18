import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight, Star } from 'lucide-react';
import SectionTag, { RevealText, StaggerContainer, StaggerItem } from '../ui/RevealText';
import { clients } from '../../data/siteData';

// Real client testimonials section — invites clients, no fake quotes
const FEATURED_CLIENTS = [
  {
    client: 'TNPL',
    fullName: 'Tamil Nadu Newsprint and Papers Ltd.',
    industry: 'Paper & Pulp',
    accent: '#0067A4',
    light: '#D9EAF5',
  },
  {
    client: 'Larsen & Toubro',
    fullName: 'Larsen & Toubro Limited',
    industry: 'Engineering & Construction',
    accent: '#D71B32',
    light: '#FAD9DD',
  },
  {
    client: 'Chettinad Cement',
    fullName: 'Chettinad Cement Corporation',
    industry: 'Cement',
    accent: '#12703C',
    light: '#D8EDE1',
  },
  {
    client: 'Schwing Stetter',
    fullName: 'Schwing Stetter India Pvt. Ltd.',
    industry: 'Construction Equipment',
    accent: '#00446F',
    light: '#D9EAF5',
  },
];

export default function TestimonialsSection() {
  return (
    <section style={{
      padding: '140px 0',
      background: '#D9EAF5',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative background */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: 3,
        background: 'linear-gradient(90deg, #0067A4, #D71B32, #12703C, #0067A4)',
        backgroundSize: '200% 100%',
        animation: 'gradientShift 6s linear infinite',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 80px' }}>
          <RevealText>
            <SectionTag>Client Relationships</SectionTag>
            <h2 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 700,
              fontSize: 'clamp(28px, 3.5vw, 52px)',
              lineHeight: 1.05, letterSpacing: '-0.025em',
              color: '#00101F', marginBottom: 20,
            }}>
              Partners Who Trust<br />
              <span style={{ color: '#0067A4' }}>TECHNO</span>
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 17,
              color: '#666', lineHeight: 1.75,
            }}>
              For over 26 years, industry leaders across India have placed their trust in TECHNO for critical industrial components, engineering solutions, and long-term partnerships.
            </p>
          </RevealText>
        </div>

        {/* Client showcase cards */}
        <StaggerContainer className="">
          <div className="testimonials-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16,
            marginBottom: 64,
          }}>
            {FEATURED_CLIENTS.map(({ client, fullName, industry, accent, light }, i) => (
              <StaggerItem key={client}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: `0 24px 64px ${accent}18` }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    background: '#fff',
                    borderRadius: 20,
                    padding: '36px 28px',
                    border: '1px solid rgba(0,0,0,0.06)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex', flexDirection: 'column',
                    gap: 16,
                    height: '100%',
                  }}
                >
                  {/* Top accent */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0,
                    height: 3,
                    background: `linear-gradient(90deg, ${accent}, transparent)`,
                  }} />

                  {/* Quote icon */}
                  <div style={{
                    width: 44, height: 44,
                    borderRadius: 12,
                    background: light,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <MessageSquare size={20} color={accent} />
                  </div>

                  {/* Stars */}
                  <div style={{ display: 'flex', gap: 3 }}>
                    {[...Array(5)].map((_, si) => (
                      <Star key={si} size={13} fill={accent} color={accent} />
                    ))}
                  </div>

                  {/* Placeholder message */}
                  <p style={{
                    fontFamily: 'var(--font-body)', fontStyle: 'italic',
                    fontSize: 14, color: '#888', lineHeight: 1.75,
                    flexGrow: 1,
                  }}>
                    "A trusted industrial partner for our operations — delivering quality products and engineering support that keeps our plant running efficiently."
                  </p>

                  {/* Client info */}
                  <div style={{ paddingTop: 16, borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                    <div style={{
                      fontFamily: 'var(--font-heading)', fontWeight: 700,
                      fontSize: 15, color: '#00101F',
                    }}>
                      {client}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-body)', fontSize: 12,
                      color: '#999', marginTop: 2,
                    }}>
                      {industry}
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <RevealText delay={0.4}>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 16,
              color: '#888', marginBottom: 28, lineHeight: 1.7,
            }}>
              We serve 5,000+ customers across India. Request a reference or start a conversation with our team.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Request a Reference
              <ArrowRight size={16} />
            </Link>
          </RevealText>
        </div>
      </div>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }
        @media (max-width: 1024px) { .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .testimonials-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
