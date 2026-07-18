import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Quote, Play, ChevronLeft, ChevronRight, X, Film } from 'lucide-react';
import { RevealText } from '../components/ui/RevealText';
import TrustStats from '../components/home/TrustStats';
import { testimonials } from '../data/siteData';

function StarRating({ rating }) {
  return (
    <div style={{ display: 'flex', gap: 4 }}>
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={15} style={{ color: i < rating ? '#F5A623' : '#DDD', fill: i < rating ? '#F5A623' : 'none' }} />
      ))}
    </div>
  );
}

const videoTestimonialsData = [
  {
    id: 'vt-1',
    name: 'S. Ramanathan',
    title: 'AVP Electrical & Automation',
    company: 'UltraTech Cement Ltd.',
    shortTitle: 'Kiln Drive Overhaul & 24/7 Commissioning',
    duration: '2:45',
    thumbnail: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=500&fit=crop&q=85',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'vt-2',
    name: 'Vikramaditya Rao',
    title: 'Head of Plant Engineering',
    company: 'Mahindra & Mahindra',
    shortTitle: 'Automotive Press Line Harmonic Mitigation',
    duration: '3:12',
    thumbnail: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=500&fit=crop&q=85',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'vt-3',
    name: 'Anand K. Verma',
    title: 'Chief Operations Officer',
    company: 'ITC Paperboards & Specialty',
    shortTitle: 'High-Speed Paper Machine Drive Upgrade',
    duration: '2:18',
    thumbnail: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&h=500&fit=crop&q=85',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'vt-4',
    name: 'Dr. Meenakshi Sundaram',
    title: 'Director of Utilities & Infrastructure',
    company: 'Sun Pharmaceutical Industries',
    shortTitle: 'Cleanroom HVAC Drive Reliability Project',
    duration: '3:05',
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&q=85',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'vt-5',
    name: 'Devendra Patel',
    title: 'General Manager Mechanical',
    company: 'JSW Steel Ltd.',
    shortTitle: 'Heavy Duty Planetary Gearbox Modernization',
    duration: '2:50',
    thumbnail: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&h=500&fit=crop&q=85',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
];

function VideoTestimonialsSection() {
  const [activeModalVideo, setActiveModalVideo] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);

  // Auto-scroll logic
  useEffect(() => {
    let interval;
    if (!isHovered && !activeModalVideo) {
      interval = setInterval(() => {
        if (carouselRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            carouselRef.current.scrollBy({ left: 420, behavior: 'smooth' });
          }
        }
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isHovered, activeModalVideo]);

  const scrollManual = (dir) => {
    if (carouselRef.current) {
      const scrollAmount = dir === 'left' ? -420 : 420;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section style={{ padding: '110px 0', background: '#FFFFFF', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="container">
        <RevealText>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 56 }}>
            <div>
              <div style={{
                fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11,
                letterSpacing: '0.14em', color: '#0067A4', textTransform: 'uppercase', marginBottom: 14,
                display: 'flex', alignItems: 'center', gap: 8
              }}>
                <Film size={14} /> VIDEO TESTIMONIALS
              </div>
              <h2 style={{
                fontFamily: 'var(--font-heading)', fontWeight: 700,
                fontSize: 'clamp(28px, 4vw, 48px)', color: '#001426', letterSpacing: '-0.02em', lineHeight: 1.15
              }}>
                Hear Directly From Our Valued Clients
              </h2>
            </div>
            
            {/* Carousel Navigation Buttons */}
            <div style={{ display: 'flex', gap: 12 }}>
              <button
                onClick={() => scrollManual('left')}
                aria-label="Previous videos"
                style={{
                  width: 48, height: 48, borderRadius: '50%', background: '#F5F7FA', border: '1px solid #CBD5E1',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s color 0.2s', color: '#001426'
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#0067A4'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#F5F7FA'; e.currentTarget.style.color = '#001426'; }}
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={() => scrollManual('right')}
                aria-label="Next videos"
                style={{
                  width: 48, height: 48, borderRadius: '50%', background: '#F5F7FA', border: '1px solid #CBD5E1',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s color 0.2s', color: '#001426'
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#0067A4'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#F5F7FA'; e.currentTarget.style.color = '#001426'; }}
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </RevealText>

        {/* Horizontal Scrollable Carousel */}
        <div
          ref={carouselRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            display: 'flex', gap: 32, overflowX: 'auto', scrollSnapType: 'x mandatory',
            paddingBottom: 24, msOverflowStyle: 'none', scrollbarWidth: 'none'
          }}
        >
          {videoTestimonialsData.map((vt) => (
            <div
              key={vt.id}
              style={{
                flex: '0 0 390px', scrollSnapAlign: 'start',
                background: '#FFFFFF', borderRadius: 22, border: '1px solid #E5E7EB',
                boxShadow: '0 8px 30px rgba(0,0,0,0.04)', overflow: 'hidden', display: 'flex', flexDirection: 'column'
              }}
            >
              {/* Thumbnail with Play Button */}
              <div
                onClick={() => setActiveModalVideo(vt)}
                style={{
                  position: 'relative', height: 230, background: '#001426', cursor: 'pointer', overflow: 'hidden'
                }}
              >
                <img
                  src={vt.thumbnail}
                  alt={vt.shortTitle}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', filter: 'brightness(0.85)' }}
                />
                
                {/* Duration Badge */}
                <div style={{
                  position: 'absolute', bottom: 12, right: 12, background: 'rgba(0, 20, 38, 0.85)', backdropFilter: 'blur(4px)',
                  color: '#fff', fontSize: 12, fontFamily: 'var(--font-body)', fontWeight: 600, padding: '4px 10px', borderRadius: 6
                }}>
                  {vt.duration}
                </div>

                {/* Play Overlay Button */}
                <div style={{
                  position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(0,0,0,0.15)', transition: 'background 0.3s'
                }}>
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    style={{
                      width: 64, height: 64, borderRadius: '50%', background: '#0067A4', color: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(0, 103, 164, 0.45)'
                    }}
                  >
                    <Play size={26} fill="#fff" style={{ marginLeft: 3 }} />
                  </motion.div>
                </div>
              </div>

              {/* Card Content */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13, color: '#0067A4', marginBottom: 6 }}>
                  {vt.company}
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18, color: '#001426', lineHeight: 1.35, marginBottom: 16 }}>
                  "{vt.shortTitle}"
                </h3>
                <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: '1px solid #F0F2F5', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#EEF4F8', color: '#0067A4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 15 }}>
                    {vt.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 15, color: '#001426' }}>{vt.name}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#666' }}>{vt.title}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Popup */}
      <AnimatePresence>
        {activeModalVideo && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0, 20, 38, 0.88)', backdropFilter: 'blur(10px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px'
            }}
            onClick={() => setActiveModalVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              style={{
                width: '100%', maxWidth: 860, background: '#001426', borderRadius: 24, overflow: 'hidden',
                boxShadow: '0 30px 100px rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.1)'
              }}
              onClick={e => e.stopPropagation()}
            >
              <div style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18, color: '#fff' }}>
                    {activeModalVideo.company} — {activeModalVideo.name}
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
                    {activeModalVideo.shortTitle}
                  </div>
                </div>
                <button
                  onClick={() => setActiveModalVideo(null)}
                  style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                >
                  <X size={20} />
                </button>
              </div>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  src={`${activeModalVideo.videoUrl}?autoplay=1`}
                  title={activeModalVideo.shortTitle}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default function TestimonialsPage() {
  return (
    <main>

      {/* ─── HERO ─── */}
      <section style={{
        position: 'relative',
        background: '#000E1C',
        overflow: 'hidden',
        padding: '0',
      }}>
        {/* Background image with strong overlay */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1000&fit=crop&q=85"
            alt="Industrial background"
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.18) saturate(0.6)' }}
          />
        </div>

        {/* Gradient layering */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(135deg, rgba(0,14,28,0.98) 0%, rgba(0,68,111,0.6) 55%, rgba(0,14,28,0.95) 100%)',
        }} />

        {/* Animated ambient orbs */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }}>
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.12, 0.28, 0.12] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute', top: '-15%', right: '-8%',
              width: 700, height: 700, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,103,164,0.35) 0%, transparent 65%)',
              filter: 'blur(80px)',
            }}
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.08, 0.20, 0.08] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            style={{
              position: 'absolute', bottom: '-10%', left: '-5%',
              width: 550, height: 550, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(215,27,50,0.22) 0%, transparent 65%)',
              filter: 'blur(70px)',
            }}
          />
        </div>

        {/* Subtle grid overlay */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 3, padding: '160px var(--container-pad) 140px' }}>
          <RevealText>
            {/* Eyebrow */}
            <div style={{ display: 'inline-flex', alignItems: 'center', marginBottom: 28 }}>
              <span style={{
                fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.55)',
              }}>
                Customer Testimonials
              </span>
            </div>

            {/* Heading */}
            <h1 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 700,
              fontSize: 'clamp(44px, 6.5vw, 88px)', lineHeight: 1.02,
              letterSpacing: '-0.03em', color: '#FFFFFF', marginBottom: 28, maxWidth: 900,
            }}>
              Trusted by India's<br />
              <span style={{
                background: 'linear-gradient(135deg, #4F8FBF 0%, #fff 60%, #D9EAF5 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                Leading Industries
              </span>
            </h1>

            {/* Subtext */}
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.5vw, 20px)',
              color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, maxWidth: 600, marginBottom: 48,
            }}>
              Don't just take our word for it. Here's what our customers — from cement plant managers to automotive engineering heads — say about working with Techno Products.
            </p>

            {/* CTA strip */}
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: 14 }}>
                Get in Touch <ArrowRight size={16} />
              </Link>
            </div>
          </RevealText>
        </div>
      </section>

      {/* ─── PROVEN TRACK RECORD ─── */}
      <TrustStats />

      {/* ─── VIDEO TESTIMONIALS SECTION (NEW ABOVE WRITTEN TESTIMONIALS) ─── */}
      <VideoTestimonialsSection />

      {/* ─── TESTIMONIAL CARDS (WRITTEN - KEEP EXACTLY AS THEY ARE) ─── */}
      <section style={{ padding: '100px 0', background: '#F8F9FA' }}>
        <div className="container">
          <RevealText>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{
                fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11,
                letterSpacing: '0.14em', color: 'var(--color-primary)',
                textTransform: 'uppercase', marginBottom: 16,
              }}>
                TESTIMONIALS
              </div>
              <h2 style={{
                fontFamily: 'var(--font-heading)', fontWeight: 700,
                fontSize: 'clamp(28px, 4vw, 48px)', color: '#000',
                letterSpacing: '-0.02em',
              }}>
                In Their Own Words
              </h2>
            </div>
          </RevealText>

          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}
            className="testimonials-grid"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: '#fff', borderRadius: 24, padding: '40px 40px 36px',
                  border: '1px solid rgba(0,0,0,0.06)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
                  position: 'relative', display: 'flex', flexDirection: 'column',
                }}
              >
                {/* Decorative quote icon */}
                <Quote
                  size={36}
                  style={{ color: '#D9EAF5', position: 'absolute', top: 28, right: 32, flexShrink: 0 }}
                />

                {/* Rating */}
                <StarRating rating={t.rating} />

                {/* Quote */}
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: 15, color: '#333',
                  lineHeight: 1.85, margin: '20px 0 32px', fontStyle: 'italic', flex: 1,
                }}>
                  "{t.quote}"
                </p>

                {/* Author info — clean editorial layout, no image */}
                <div style={{
                  display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                  gap: 16, flexWrap: 'wrap',
                }}>
                  <div>
                    {/* Name */}
                    <div style={{
                      fontFamily: 'var(--font-heading)', fontWeight: 700,
                      fontSize: 16, color: '#001426', marginBottom: 3,
                    }}>
                      {t.name}
                    </div>
                    {/* Designation */}
                    <div style={{
                      fontFamily: 'var(--font-body)', fontSize: 13, color: '#666', marginBottom: 2,
                    }}>
                      {t.title}
                    </div>
                    {/* Company */}
                    <div style={{
                      fontFamily: 'var(--font-heading)', fontWeight: 700,
                      fontSize: 13, color: '#0067A4',
                    }}>
                      {t.company}
                    </div>
                  </div>

                  {/* Result pill */}
                  <div style={{
                    background: 'var(--color-green-xlight)', borderRadius: 40, padding: '6px 14px',
                    flexShrink: 0, alignSelf: 'flex-end',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-heading)', fontWeight: 700,
                      fontSize: 11, color: 'var(--color-green)', letterSpacing: '0.04em',
                    }}>
                      {t.result}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 0', background: '#001426', textAlign: 'center' }}>
        <div className="container">
          <RevealText>
            <h2 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 700,
              fontSize: 'clamp(28px, 4vw, 48px)', color: '#fff', marginBottom: 20,
            }}>
              Join 5,000+ Satisfied Customers
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 18,
              color: 'rgba(255,255,255,0.7)', marginBottom: 40,
              maxWidth: 560, marginInline: 'auto',
            }}>
              Experience the Techno Products difference. Talk to our engineers today about your requirements.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: 15 }}>
                Get Started Today <ArrowRight size={18} />
              </Link>
              <Link
                to="/case-stories"
                className="btn btn-secondary"
                style={{ padding: '16px 40px', fontSize: 15, color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}
              >
                Read Case Stories
              </Link>
            </div>
          </RevealText>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .track-record-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .track-record-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
