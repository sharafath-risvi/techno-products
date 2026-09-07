import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Loader2 } from 'lucide-react';
import SectionTag, { RevealText, StaggerContainer, StaggerItem } from '../components/ui/RevealText';
import { brandPartners } from '../data/siteData';
import { useApi } from '../hooks/useApi';

export default function ProductsPage() {
  const { data: apiCategories, loading, error } = useApi('https://technoproducts.in/wp-json/api/v1/product-categories');
  const categories = apiCategories?.data || [];

  return (
    <main>
      {/* 1. Page Hero */}
      <section className="page-hero">
        <div className="page-hero__grid" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <RevealText>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff' }}>
                Product Portfolio
              </span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 700,
              fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 1.05,
              letterSpacing: '-0.02em', color: '#000000', marginBottom: 24,
            }}>
              Engineered For<br />
              <span style={{ color: '#00446F' }}>Performance</span>
            </h1>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.5vw, 20px)',
              color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: 640,
            }}>
              Explore our comprehensive catalogue of industrial products sourced from the world's most trusted engineering brands.
            </p>
          </RevealText>
        </div>
      </section>

      {/* 2. Authorized Brands Strip */}
      <section style={{ background: '#000810', padding: '32px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 48, overflowX: 'auto', paddingBottom: 8 }} className="scrollbar-hide">
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, color: '#4F8FBF', letterSpacing: '0.1em', textTransform: 'uppercase', flexShrink: 0 }}>
              Authorized Partners
            </span>
            {brandPartners.map((b) => (
              <span key={b.name} style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18, color: 'rgba(255,255,255,0.5)', flexShrink: 0 }}>
                {b.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Category Catalog */}
      <section style={{ padding: '120px 0', background: '#F5F5F5' }}>
        <div className="container">
          <div style={{ marginBottom: 64 }}>
            <RevealText>
              <SectionTag>Browse by Category</SectionTag>
              <h2 style={{
                fontFamily: 'var(--font-heading)', fontWeight: 700,
                fontSize: 36, color: '#000000', letterSpacing: '-0.02em',
              }}>
                Complete <span style={{ color: '#00446F' }}>Industrial Solutions</span>
              </h2>
            </RevealText>
          </div>

          <StaggerContainer className="">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
              {loading ? (
                <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'center', padding: '64px 0' }}>
                  <Loader2 size={48} color="#0067A4" className="animate-spin" />
                </div>
              ) : error ? (
                <div style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#D71B32', padding: '64px 0', fontFamily: 'var(--font-body)' }}>
                  Failed to load categories. Please try again later.
                </div>
              ) : categories.length === 0 ? (
                <div style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#666', padding: '64px 0', fontFamily: 'var(--font-body)' }}>
                  No categories found.
                </div>
              ) : (
                categories.map((cat) => (
                  <StaggerItem key={cat.id}>
                    <Link to={`/products/${cat.slug}`} style={{ display: 'block', height: '100%' }}>
                      <motion.div
                        whileHover={{ y: -8, boxShadow: '0 32px 64px rgba(0,0,0,0.1)' }}
                        style={{
                          background: '#fff',
                          borderRadius: 16,
                          overflow: 'hidden',
                          height: '100%',
                          border: '1px solid rgba(0,0,0,0.06)',
                          display: 'flex', flexDirection: 'column',
                        }}
                      >
                        <div style={{ aspectRatio: '4/3', position: 'relative', overflow: 'hidden', background: '#F5F5F5' }}>
                          {cat.image ? (
                            <img 
                              src={cat.image} 
                              alt={cat.name} 
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                            />
                          ) : (
                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', fontFamily: 'var(--font-heading)' }}>
                              No Image
                            </div>
                          )}
                          <div style={{ 
                            position: 'absolute', top: 16, right: 16, 
                            background: '#fff', color: '#0067A4', 
                            padding: '6px 14px', borderRadius: 20, 
                            fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12 
                          }}>
                            {cat.count} Products
                          </div>
                        </div>
                        <div style={{ padding: '32px 28px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                          {cat.tag && (
                            <div style={{ 
                              fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, 
                              color: '#D71B32', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 
                            }}>
                              {cat.tag}
                            </div>
                          )}
                          <h3 style={{ 
                            fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 22, 
                            color: '#001426', marginBottom: 16, lineHeight: 1.2 
                          }}>
                            {cat.name}
                          </h3>
                          <p style={{ 
                            fontFamily: 'var(--font-body)', fontSize: 14, color: '#666', 
                            lineHeight: 1.7, marginBottom: 24, flexGrow: 1 
                          }}>
                            {cat.description || "View products in this category."}
                          </p>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: 20 }}>
                            <div style={{ display: 'flex', gap: 8 }}>
                              {cat.brands && cat.brands.slice(0, 2).map((b) => (
                                <span key={b} style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#888', background: '#F5F5F5', padding: '4px 10px', borderRadius: 4 }}>
                                  {b}
                                </span>
                              ))}
                            </div>
                            <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#F5F5F5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0067A4' }}>
                              <ArrowRight size={16} />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </StaggerItem>
                ))
              )}
            </div>
          </StaggerContainer>
        </div>
      </section>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin { animation: spin 1s linear infinite; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        @media (max-width: 1024px) {
          main section .container > div.grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          main section .container > div.grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
