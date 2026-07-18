import { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, SlidersHorizontal, Search, Download, X } from 'lucide-react';
import { productCategories, categoryFiltersData, allProductsData } from '../data/siteData';

export default function ProductCategoryPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Determine current category or "All Products"
  let category = productCategories.find(c => c.slug === slug);
  if (slug === 'all') {
    category = {
      id: "all",
      name: "All Products",
      shortName: "All Products",
      slug: "all",
      tag: "Complete Portfolio",
      description: "Browse our entire catalogue of industrial products across all categories.",
      count: "300+",
      brands: [...new Set(productCategories.flatMap(c => c.brands || []))],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      filters: {}
    };
  }

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All Brands');
  const [sortOption, setSortOption] = useState('Sort by: Recommended');
  const [activeFilters, setActiveFilters] = useState({});
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = (key, value) => {
    setActiveFilters(prev => {
      const current = prev[key] || [];
      if (current.includes(value)) {
        return { ...prev, [key]: current.filter(v => v !== value) };
      } else {
        return { ...prev, [key]: [...current, value] };
      }
    });
  };

  const handleReset = () => {
    setSearchQuery('');
    setSelectedBrand('All Brands');
    setActiveFilters({});
    setIsFilterOpen(false);
    navigate('/products/all', { replace: true });
  };

  // Compute filtered products based on state
  const products = useMemo(() => {
    let result = allProductsData;

    if (slug !== 'all') {
      result = result.filter(p => p.categorySlug === slug);
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }

    if (selectedBrand !== 'All Brands') {
      result = result.filter(p => p.brand === selectedBrand);
    }

    Object.keys(activeFilters).forEach(key => {
      const selectedValues = activeFilters[key];
      if (selectedValues.length > 0) {
        result = result.filter(p => p.specs[key] && selectedValues.includes(p.specs[key]));
      }
    });

    if (sortOption === 'Name (A-Z)') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'Name (Z-A)') {
      result = [...result].sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOption === 'Power (High to Low)') {
      const getPower = (specs) => {
        // Handle various new power fields in official data
        if (specs.HP) return parseFloat(specs.HP) || 0;
        if (specs.KW) return parseFloat(specs.KW) || 0;
        return 0;
      };
      result = [...result].sort((a, b) => getPower(b.specs) - getPower(a.specs));
    }

    return result;
  }, [slug, searchQuery, selectedBrand, sortOption, activeFilters]);

  if (!category) {
    return (
      <main style={{ padding: '200px 0', textAlign: 'center' }}>
        <h2>Category Not Found</h2>
        <Link to="/products" className="btn btn-primary" style={{ marginTop: 24 }}>Back to Products</Link>
      </main>
    );
  }

  return (
    <main style={{ background: '#F5F5F5', minHeight: '100vh', paddingBottom: 120 }}>
      {/* 1. Category Hero (Unchanged) */}
      <section style={{ 
        background: '#001426', 
        paddingTop: 140, paddingBottom: 80, 
        position: 'relative', overflow: 'hidden' 
      }}>
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '40%', opacity: 0.3 }}>
          <img src={category.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #001426 0%, transparent 100%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
            <Link to="/products" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12, color: '#4F8FBF', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Products</Link>
            <ChevronRight size={14} color="#4F8FBF" />
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12, color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{category.shortName}</span>
          </div>
          <div style={{ maxWidth: 700 }}>
            <div style={{ display: 'inline-block', background: '#D71B32', color: '#fff', padding: '4px 12px', borderRadius: 4, fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
              {category.tag}
            </div>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(36px, 5vw, 64px)', color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 24 }}>
              {category.name}
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: 40 }}>
              {category.description}
            </p>
            <div style={{ display: 'flex', gap: 24 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 24, color: '#fff' }}>{category.count}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Models Available</span>
              </div>
              <div style={{ width: 1, background: 'rgba(255,255,255,0.2)' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 24, color: '#fff' }}>Official</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Distributor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Layout with Sidebar Filter and Product Grid */}
      <section style={{ paddingTop: 40, paddingBottom: 64, background: '#FFFFFF', minHeight: '100vh' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 32, alignItems: 'start' }}>
          
          {/* Left Sidebar: Sticky Filter */}
          <div style={{ position: 'sticky', top: 24, maxHeight: 'calc(100vh - 48px)', overflowY: 'auto' }} className="scrollbar-hide filter-sidebar">
            <div className="drawer-header" style={{ padding: '0 0 24px 0', borderBottom: 'none' }}>
              <div className="drawer-title">
                <SlidersHorizontal size={20} />
                <h2>Filters</h2>
              </div>
            </div>

            <div className="scrollbar-hide" style={{ padding: 0 }}>
              
              <div className="filter-group">
                <h3>Search Models</h3>
                <div className="drawer-search">
                  <Search size={16} className="search-icon" />
                  <input 
                    type="text" 
                    placeholder="Search Products..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Categories Vertical List */}
              <div className="filter-group">
                <h3>Categories</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {productCategories.map(cat => (
                    <Link 
                      key={cat.slug} 
                      to={`/products/${cat.slug}`} 
                      onClick={() => { setSearchQuery(''); setActiveFilters({}); }} 
                      style={{
                        padding: '10px 16px', borderRadius: 8, fontSize: 15, fontFamily: 'var(--font-body)',
                        background: slug === cat.slug ? '#0067A4' : '#F8F9FA',
                        color: slug === cat.slug ? '#FFF' : '#333',
                        textDecoration: 'none', fontWeight: slug === cat.slug ? 700 : 400
                      }}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>

              {slug !== 'all' && categoryFiltersData[slug] && Object.keys(categoryFiltersData[slug]).map((filterKey) => (
                <div key={filterKey} className="filter-group">
                  <h3>{filterKey}</h3>
                  <div className="checkbox-list">
                    {categoryFiltersData[slug][filterKey].map(val => (
                      <label key={val} className="checkbox-label">
                        <input 
                          type="checkbox" 
                          checked={activeFilters[filterKey]?.includes(val) || false}
                          onChange={() => toggleFilter(filterKey, val)}
                        />
                        <span>{val}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              
              {slug === 'all' && (
                <div style={{ padding: '24px 0', color: '#666', fontSize: '15px' }}>
                  Please select a specific category to view its detailed filters.
                </div>
              )}

              <button className="btn btn-outline" onClick={handleReset} style={{ width: '100%', borderColor: '#E5E7EB', color: '#666', marginTop: 16 }}>
                Reset Filters
              </button>
            </div>
          </div>

          {/* Right Area: Product Grid */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, paddingBottom: 16, borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
              <div className="product-count">
                Showing <span>{products.length} Products</span>
              </div>
            </div>

            <div className="product-grid">
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  onClick={() => navigate(`/products/${product.categorySlug}/${product.slug}`)}
                  className="premium-product-card"
                  whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(0,0,0,0.08)' }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="card-image-wrapper">
                    <motion.img 
                      src={product.image} 
                      alt={product.name} 
                      className="card-image"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.7 }}
                    />
                    <div className="card-brand-badge">{product.brand}</div>
                  </div>
                  
                  <div className="card-content">
                    <h3 className="card-title">{product.name}</h3>
                    <div className="card-specs">
                      {Object.entries(product.specs).slice(0, 2).map(([k, v]) => (
                        <div key={k} className="spec-item">
                          <div className="spec-label">{k}</div>
                          <div className="spec-value">{v}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="card-actions">
                      <Link 
                        to={`/products/${product.categorySlug}/${product.slug}`}
                        onClick={(e) => e.stopPropagation()}
                        className="btn-quick-view"
                        style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        View Product
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Global hide scrollbar for horizontal containers and drawer */
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

        /* Toolbar Styles */
        .product-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          padding-bottom: 24px;
        }
        .toolbar-left, .toolbar-right {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        
        .toolbar-search {
          position: relative;
        }
        .toolbar-search .search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #999;
        }
        .toolbar-search input {
          padding: 12px 16px 12px 40px;
          background: #F8F9FA;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          font-family: var(--font-body);
          font-size: 14px;
          width: 260px;
          transition: border-color 0.3s;
          outline: none;
        }
        .toolbar-search input:focus { border-color: #0067A4; }

        .toolbar-select {
          padding: 12px 36px 12px 16px;
          background: #F8F9FA;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          font-family: var(--font-body);
          font-size: 14px;
          color: #333;
          appearance: none;
          background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
          background-repeat: no-repeat;
          background-position: right 14px top 50%;
          background-size: 10px auto;
          outline: none;
        }

        .product-count {
          font-family: var(--font-body);
          font-size: 14px;
          color: #666;
        }
        .product-count span {
          font-weight: 700;
          color: #001426;
        }

        .btn-filter {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #001426;
          color: #FFF;
          padding: 12px 24px;
          border: none;
          border-radius: 12px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: background 0.3s;
        }
        .btn-filter:hover { background: #0067A4; }

        /* Category Pills */
        .category-pills-container {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          padding: 16px 0;
          border-top: 1px solid rgba(0,0,0,0.05);
        }
        .category-pill {
          padding: 10px 20px;
          background: #F8F9FA;
          border: 1px solid #E5E7EB;
          border-radius: 99px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 13px;
          color: #555;
          white-space: nowrap;
          transition: all 0.3s ease;
        }
        .category-pill:hover {
          background: #EAF3F9;
          border-color: #0067A4;
          color: #0067A4;
        }
        .category-pill.active {
          background: #0067A4;
          border-color: #0067A4;
          color: #FFF;
        }

        /* Product Grid Redesign */
        .product-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        @media (min-width: 1440px) {
          .product-grid { grid-template-columns: repeat(3, 1fr); gap: 40px; }
        }

        .premium-product-card {
          background: #FFFFFF;
          border-radius: 16px;
          border: 1px solid rgba(0,0,0,0.06);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%; /* Important for alignment */
        }
        .card-image-wrapper {
          padding: 24px;
          background: #F8F9FA;
          position: relative;
          overflow: hidden;
          height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          mix-blend-mode: multiply;
        }
        .card-brand-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          background: #FFFFFF;
          padding: 6px 14px;
          border-radius: 20px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 11px;
          color: #0067A4;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .card-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1; /* Pushes bottom area down */
        }
        .card-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 16px;
          color: #000000;
          margin-bottom: 20px;
          line-height: 1.4;
        }
        .card-specs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 24px;
        }
        .spec-label {
          font-family: var(--font-heading);
          font-size: 11px;
          font-weight: 700;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 4px;
        }
        .spec-value {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 700;
          color: #333;
        }

        .card-actions {
          margin-top: auto; /* Absolute perfect bottom alignment across all cards */
          display: flex;
          gap: 12px;
        }
        .btn-quick-view {
          flex: 1;
          background: #001426;
          color: #FFF;
          border: none;
          padding: 12px 0;
          border-radius: 10px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 13px;
          cursor: pointer;
          transition: background 0.3s;
        }
        .btn-quick-view:hover { background: #0067A4; }
        .btn-download {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #FFF;
          border: 1px solid #E5E7EB;
          border-radius: 10px;
          color: #666;
          cursor: pointer;
          transition: all 0.3s;
        }
        .btn-download:hover {
          border-color: #0067A4;
          color: #0067A4;
        }

        /* Filter Drawer */
        .drawer-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 20, 38, 0.6);
          backdrop-filter: blur(4px);
          z-index: 9998;
        }
        .filter-drawer {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          width: 400px;
          max-width: 100vw;
          background: #FFFFFF;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          box-shadow: 20px 0 60px rgba(0,0,0,0.1);
        }
        .drawer-header {
          padding: 32px;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .drawer-title {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #000000;
        }
        .drawer-title h2 {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 20px;
        }
        .drawer-close {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          background: #F5F5F5;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #666;
          transition: all 0.3s;
        }
        .drawer-close:hover { background: #E5E7EB; color: #001426; }
        
        .drawer-content {
          padding: 32px;
          overflow-y: auto;
          flex-grow: 1;
        }
        .filter-group {
          margin-bottom: 32px;
        }
        .filter-group h3 {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 14px;
          color: #000000;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 16px;
        }
        .drawer-search {
          position: relative;
        }
        .drawer-search .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #999;
        }
        .drawer-search input {
          width: 100%;
          padding: 14px 16px 14px 44px;
          background: #F8F9FA;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          font-family: var(--font-body);
          font-size: 15px;
          outline: none;
        }
        .drawer-search input:focus { border-color: #0067A4; }
        
        .checkbox-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }
        .checkbox-label input {
          width: 20px;
          height: 20px;
          accent-color: #0067A4;
          cursor: pointer;
        }
        .checkbox-label span {
          font-family: var(--font-body);
          font-size: 15px;
          color: #444;
        }

        .drawer-footer {
          padding: 24px 32px;
          border-top: 1px solid rgba(0,0,0,0.05);
          display: flex;
          gap: 16px;
          background: #FFF;
        }

        /* Responsive Grid Adjustments */
        @media (max-width: 1200px) {
          .product-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 900px) {
          .product-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
          .toolbar-left, .toolbar-right { width: 100%; justify-content: space-between; }
          .toolbar-search input { width: 100%; }
        }
        @media (max-width: 600px) {
          .product-grid { grid-template-columns: 1fr; }
          .toolbar-left, .toolbar-right { flex-direction: column; align-items: stretch; }
          .filter-drawer { width: 100%; }
        }
      `}</style>
    </main>
  );
}
