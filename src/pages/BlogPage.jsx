import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { RevealText } from '../components/ui/RevealText';
import { blogPosts } from '../data/siteData';

const categories = ['All', 'Energy & Automation', 'Technical Guides', 'Industry 4.0', 'Application Engineering', 'Panel Engineering', 'Case Analysis'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const featured = blogPosts.find(p => p.featured);
  const filtered = blogPosts.filter(p => !p.featured && (activeCategory === 'All' || p.category === activeCategory));

  return (
    <main>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: 84 }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1400&h=900&fit=crop&q=85" alt="Engineering Insights" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,10,26,0.9) 50%, rgba(0,10,26,0.3) 100%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: 80, paddingBottom: 80 }}>
          <RevealText>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#D71B32' }} />
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>Insights & Blog</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(36px, 5.5vw, 72px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: '#FFFFFF', marginBottom: 20, maxWidth: 700 }}>
              Engineering Insights<br />
              <span style={{ color: '#FFFFFF' }}>From the Field</span>
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.4vw, 19px)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, maxWidth: 600, marginBottom: 36 }}>
              Technical guides, application engineering articles, and industry analysis — written by our engineers, for industrial professionals.
            </p>
          </RevealText>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section style={{ padding: '80px 0', background: '#fff' }}>
          <div className="container">
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, letterSpacing: '0.14em', color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: 32 }}>FEATURED ARTICLE</div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'center', background: '#F8F9FA', borderRadius: 32, overflow: 'hidden' }}
              className="featured-grid"
            >
              <div style={{ height: 440, overflow: 'hidden' }}>
                <img src={featured.image} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
              </div>
              <div style={{ padding: '48px 48px 48px 0' }} className="featured-content">
                <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#0067A4', background: '#EEF4F8', borderRadius: 20, padding: '4px 12px' }}>{featured.category}</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#888', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Clock size={12} />{featured.readTime}
                  </span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(22px, 2.5vw, 32px)', color: '#000', lineHeight: 1.2, marginBottom: 16 }}>{featured.title}</h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: '#555', lineHeight: 1.8, marginBottom: 28 }}>{featured.excerpt}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                  {featured.tags.map(t => (
                    <span key={t} style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: '#666', background: '#eee', borderRadius: 20, padding: '3px 10px' }}>{t}</span>
                  ))}
                </div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14, color: '#00446F' }}>
                  Read Article <ArrowRight size={14} />
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section style={{ padding: '60px 0 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 48 }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13,
                  color: activeCategory === cat ? '#fff' : '#444',
                  background: activeCategory === cat ? '#0067A4' : '#F0F2F5',
                  border: 'none', borderRadius: 40, padding: '8px 18px', cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section style={{ paddingBottom: 100, background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="blog-grid">
            {filtered.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(0,0,0,0.08)' }}
                style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.06)', cursor: 'pointer' }}
              >
                <div style={{ height: 200, overflow: 'hidden' }}>
                  <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} />
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: '#0067A4', background: '#EEF4F8', borderRadius: 20, padding: '3px 10px' }}>{post.category}</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: '#999', display: 'flex', alignItems: 'center', gap: 3 }}><Clock size={11} />{post.readTime}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 17, color: '#000', lineHeight: 1.3, marginBottom: 12 }}>{post.title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#666', lineHeight: 1.7, marginBottom: 16 }}>{post.excerpt.slice(0, 100)}...</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {post.tags.slice(0, 2).map(t => (
                        <span key={t} style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: '#888', background: '#F0F0F0', borderRadius: 20, padding: '2px 8px', display: 'flex', alignItems: 'center', gap: 3 }}>
                          <Tag size={10} />{t}
                        </span>
                      ))}
                    </div>
                    <ArrowRight size={16} style={{ color: '#0067A4' }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#888', fontFamily: 'var(--font-body)', fontSize: 16 }}>
              No articles in this category yet. More coming soon.
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section style={{ padding: '80px 0', background: '#001426', textAlign: 'center' }}>
        <div className="container">
          <RevealText>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 36, color: '#fff', marginBottom: 16 }}>
              Get Engineering Insights in Your Inbox
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'rgba(255,255,255,0.7)', marginBottom: 40, maxWidth: 500, marginInline: 'auto' }}>
              Subscribe for new technical articles, application guides, and product updates from the Techno Products engineering team.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '14px 36px', fontSize: 14 }}>
              Contact Our Engineering Team <ArrowRight size={16} />
            </Link>
          </RevealText>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .featured-grid { grid-template-columns: 1fr !important; }
          .featured-content { padding: 32px !important; }
          .blog-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) { .blog-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </main>
  );
}
