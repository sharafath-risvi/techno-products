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
            src="/industries images/testimonal.jpg"
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
