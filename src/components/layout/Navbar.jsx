import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { productCategories as staticProductCategories, solutions, industriesData } from '../../data/siteData';
import { useApi } from '../../hooks/useApi';
import { useProducts } from '../../context/ProductsContext';

const textColor = '#000000';
const logoBlue = '#0067A4';
const activeBlue = '#00446F';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoveredIndustry, setHoveredIndustry] = useState(industriesData[0]);
  const [hoveredSolution, setHoveredSolution] = useState(solutions[0]);
  const [hoveredInsight, setHoveredInsight] = useState({ label: 'Testimonials', desc: 'Hear what our valued clients across India say about our supply & support', href: '/insights/testimonials', image: '/industries images/testimonal.webp' });
  const location = useLocation();
  const dropdownTimers = useRef({});

  const { products } = useProducts();

  // Fetch real product categories
  const { data: apiCategoriesData } = useApi('https://technoproducts.in/wp-json/api/v1/product-categories');
  const apiCategories = apiCategoriesData?.data || [];

  const allProductsItem = {
    label: 'All Products',
    desc: 'Browse our complete industrial catalogue',
    href: '/products/all',
    image: '/industries images/allproducts.webp',
  };

  const dynamicProductChildren = apiCategories.length > 0 
    ? [allProductsItem, ...apiCategories.map((cat) => {
        // Use an ORIGINAL REAL PRODUCT IMAGE from that category's actual products
        const realProductForCat = products.find(p => p.category_slug === cat.slug);
        const catImage = realProductForCat?.image || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop';
        
        return {
          label: cat.name,
          desc: cat.description || `Explore ${cat.name}`,
          href: `/products/${cat.slug}`,
          image: catImage,
        };
      })]
    : [allProductsItem, ...staticProductCategories.map((cat) => ({
        label: cat.shortName,
        desc: cat.tag,
        href: `/products/${cat.slug}`,
        image: cat.image,
      }))];

  const navItems = [
    {
      label: 'About',
      href: null,
      dropdown: [
        { label: 'Our Company', desc: 'History, values & philosophy', href: '/about/company' },
        { label: 'Leadership', desc: 'Meet our founders & team', href: '/about/leadership' },
        { label: 'Careers', desc: 'Join our growing team', href: '/careers' },
      ],
    },
    {
      label: 'Products',
      href: null,
      mega: true,
      children: dynamicProductChildren,
    },
    {
      label: 'Solutions',
      href: null,
      solutionsMega: true,
    },
    {
      label: 'Industries',
      href: null,
      industries: true,
    },
    {
      label: 'Insights',
      href: null,
      insightsMega: true,
      insightsItems: [
        { label: 'Testimonials', desc: 'Hear what our valued clients across India say about our supply & support', href: '/insights/testimonials', image: '/industries images/testimonal.webp' },
        { label: 'Case Stories', desc: 'Real engineering results from successful process turnarounds', href: '/case-stories', image: '/industries images/case_stories.webp' },
      ],
    },
    { label: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 40) { setScrolled(false); setShowNavbar(true); }
      else {
        setScrolled(true);
        setShowNavbar(currentScrollY <= lastScrollY || currentScrollY <= 100);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => { setMobileOpen(false); setOpenDropdown(null); }, [location]);

  function openDrop(key) {
    clearTimeout(dropdownTimers.current[key]);
    setOpenDropdown(key);
  }
  function closeDrop(key) {
    dropdownTimers.current[key] = setTimeout(() => setOpenDropdown(prev => prev === key ? null : prev), 120);
  }

  const dropdownVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
    exit: { opacity: 0, y: 6, scale: 0.98, transition: { duration: 0.15 } },
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          background: scrolled ? 'rgba(255,255,255,0.97)' : '#FFFFFF',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
          boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.04)' : 'none',
          transform: showNavbar ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease',
          zIndex: 1000,
        }}
        role="navigation" aria-label="Main navigation"
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', height: 112 }}>

          {/* Logo */}
          <div style={{ flex: '0 0 auto', paddingLeft: 8, paddingRight: 24 }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/Logo/logo1.png" alt="Techno Products" style={{ height: 100, width: 'auto', objectFit: 'contain' }} />
              </div>
            </Link>
          </div>

          {/* Center Nav */}
          <div className="hidden md:flex" style={{ display: 'flex', alignItems: 'center', gap: 40, flex: 1, paddingLeft: 16 }}>
            {navItems.map((item) => {
              const hasDropdown = item.dropdown || item.mega || item.industries || item.solutionsMega || item.insightsMega;
              const isOpen = openDropdown === item.label;

              return (
                <div
                  key={item.label}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => openDrop(item.label)}
                  onMouseLeave={() => closeDrop(item.label)}
                >
                  {/* Nav Link — renders as NavLink when href exists, plain div when null (dropdown-only trigger) */}
                  {item.href ? (
                    <NavLink to={item.href} style={{ textDecoration: 'none' }} end={item.href === '/'}>
                      {({ isActive }) => (
                        <div style={{
                          display: 'flex', alignItems: 'center', gap: 4,
                          fontFamily: 'var(--font-heading)', fontWeight: 500, fontSize: 16,
                          color: isActive || isOpen ? activeBlue : textColor,
                          padding: '8px 0', position: 'relative',
                          transition: 'color 0.2s ease', cursor: 'pointer',
                        }}>
                          {item.label}
                          {hasDropdown && <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'none' }} />}
                          <motion.div
                            initial={false}
                            animate={{ scaleX: isActive || isOpen ? 1 : 0 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: activeBlue, transformOrigin: 'center' }}
                          />
                        </div>
                      )}
                    </NavLink>
                  ) : (
                    /* Dropdown-only trigger — no href, no navigation on click */
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 4,
                      fontFamily: 'var(--font-heading)', fontWeight: 500, fontSize: 16,
                      color: isOpen ? activeBlue : textColor,
                      padding: '8px 0', position: 'relative',
                      transition: 'color 0.2s ease', cursor: 'default',
                      userSelect: 'none',
                    }}>
                      {item.label}
                      {hasDropdown && <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'none' }} />}
                      <motion.div
                        initial={false}
                        animate={{ scaleX: isOpen ? 1 : 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: activeBlue, transformOrigin: 'center' }}
                      />
                    </div>
                  )}

                  {/* Standard Dropdown (About) */}
                  <AnimatePresence>
                    {isOpen && item.dropdown && (
                      <motion.div
                        key="dropdown"
                        variants={dropdownVariants}
                        initial="hidden" animate="visible" exit="exit"
                        onMouseEnter={() => openDrop(item.label)}
                        onMouseLeave={() => closeDrop(item.label)}
                        style={{
                          position: 'absolute', top: 'calc(100% + 16px)', left: '50%',
                          transform: 'translateX(-50%)',
                          background: '#fff', borderRadius: 16,
                          boxShadow: '0 20px 60px -10px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)',
                          border: '1px solid rgba(0,0,0,0.06)',
                          padding: '12px', minWidth: 280, zIndex: 200,
                        }}
                      >
                        {item.dropdown.map((child) => (
                          <Link
                            key={child.href} to={child.href}
                            style={{ display: 'block', padding: '10px 14px', borderRadius: 10, textDecoration: 'none', transition: 'background 0.15s' }}
                            onMouseEnter={e => e.currentTarget.style.background = '#F8F9FA'}
                            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                          >
                            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14, color: '#001426', marginBottom: 2 }}>{child.label}</div>
                            <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#888' }}>{child.desc}</div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Solutions Mega Menu — 3 panel (exact same interaction as Industries) */}
                  <AnimatePresence>
                    {isOpen && item.solutionsMega && (
                      <motion.div
                        key="solutions-mega"
                        variants={dropdownVariants}
                        initial="hidden" animate="visible" exit="exit"
                        onMouseEnter={() => openDrop(item.label)}
                        onMouseLeave={() => closeDrop(item.label)}
                        style={{
                          position: 'fixed', top: 84, left: 0, right: 0,
                          background: '#fff',
                          boxShadow: '0 40px 80px -20px rgba(0,0,0,0.12)',
                          borderBottom: '1px solid rgba(0,0,0,0.06)',
                          zIndex: 200, padding: '40px 0',
                        }}
                      >
                        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr 1fr', gap: 48, alignItems: 'start' }}>
                          {/* Left Panel */}
                          <div>
                            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: activeBlue, marginBottom: 16 }}>Specialist Solutions</div>
                            <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 28, lineHeight: 1.2, color: '#001426', marginBottom: 16 }}>End-to-End Systems</h3>
                            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#666', lineHeight: 1.7, marginBottom: 24 }}>
                              Integrated electro-mechanical & automation architectures engineered specifically for demanding industrial applications.
                            </p>
                          </div>

                          {/* Center Panel — Solutions list */}
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                            {solutions.map((sol) => (
                              <Link
                                key={sol.slug} to={`/solutions/${sol.slug}`}
                                onMouseEnter={() => setHoveredSolution(sol)}
                                style={{
                                  display: 'block', padding: '12px 14px', borderRadius: 10,
                                  fontFamily: 'var(--font-body)', fontSize: 14, color: hoveredSolution?.slug === sol.slug ? activeBlue : '#333',
                                  fontWeight: hoveredSolution?.slug === sol.slug ? 600 : 400,
                                  background: hoveredSolution?.slug === sol.slug ? '#EEF4F8' : 'transparent',
                                  transition: 'all 0.15s', textDecoration: 'none',
                                }}
                              >
                                <div style={{ fontWeight: 700, marginBottom: 2 }}>{sol.title}</div>
                                <div style={{ fontSize: 12, color: hoveredSolution?.slug === sol.slug ? activeBlue : '#777' }}>{sol.tagline}</div>
                              </Link>
                            ))}
                          </div>

                          {/* Right Panel — Dynamic preview */}
                          <AnimatePresence mode="wait">
                            {hoveredSolution && (
                              <motion.div
                                key={hoveredSolution.slug}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.2, ease: 'easeOut' }}
                                style={{ borderRadius: 16, overflow: 'hidden', background: '#F5F5F5' }}
                              >
                                <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                                  <img 
                                    src={{
                                      'electrical-systems': '/industries images/electricalImages.webp',
                                      'maintenance-support': '/industries images/maintanence_support.webp',
                                      'control-panel-solutions': '/industries images/control_panel.webp'
                                    }[hoveredSolution.slug] || hoveredSolution.image} 
                                    alt={hoveredSolution.title} 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                  />
                                </div>
                                <div style={{ padding: '16px' }}>
                                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, color: '#001426', marginBottom: 6 }}>{hoveredSolution.title}</div>
                                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#666', lineHeight: 1.6, marginBottom: 12 }}>{hoveredSolution.description}</div>
                                  <Link to={`/solutions/${hoveredSolution.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 12, color: activeBlue, textDecoration: 'none' }}>
                                    View Solution Details <ArrowRight size={12} />
                                  </Link>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Insights Mega Menu — 3 panel (exact same interaction as Industries) */}
                  <AnimatePresence>
                    {isOpen && item.insightsMega && (
                      <motion.div
                        key="insights-mega"
                        variants={dropdownVariants}
                        initial="hidden" animate="visible" exit="exit"
                        onMouseEnter={() => openDrop(item.label)}
                        onMouseLeave={() => closeDrop(item.label)}
                        style={{
                          position: 'fixed', top: 84, left: 0, right: 0,
                          background: '#fff',
                          boxShadow: '0 40px 80px -20px rgba(0,0,0,0.12)',
                          borderBottom: '1px solid rgba(0,0,0,0.06)',
                          zIndex: 200, padding: '40px 0',
                        }}
                      >
                        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr 1fr', gap: 48, alignItems: 'start' }}>
                          {/* Left Panel */}
                          <div>
                            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: activeBlue, marginBottom: 16 }}>Knowledge & Proof</div>
                            <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 28, lineHeight: 1.2, color: '#001426', marginBottom: 16 }}>Technical Insights</h3>
                            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#666', lineHeight: 1.7, marginBottom: 24 }}>
                              Discover in-depth engineering articles, verified client testimonials, and proven field case stories.
                            </p>
                          </div>

                          {/* Center Panel — Insights items list */}
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            {item.insightsItems.map((ins) => (
                              <Link
                                key={ins.href} to={ins.href}
                                onMouseEnter={() => setHoveredInsight(ins)}
                                style={{
                                  display: 'block', padding: '14px 16px', borderRadius: 12,
                                  fontFamily: 'var(--font-body)', color: hoveredInsight?.href === ins.href ? activeBlue : '#333',
                                  background: hoveredInsight?.href === ins.href ? '#EEF4F8' : 'transparent',
                                  transition: 'all 0.15s', textDecoration: 'none', border: '1px solid transparent',
                                  borderColor: hoveredInsight?.href === ins.href ? 'rgba(0,103,164,0.15)' : 'transparent',
                                }}
                              >
                                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{ins.label}</div>
                                <div style={{ fontSize: 13, color: hoveredInsight?.href === ins.href ? activeBlue : '#666' }}>{ins.desc}</div>
                              </Link>
                            ))}
                          </div>

                          {/* Right Panel — Dynamic preview */}
                          <AnimatePresence mode="wait">
                            {hoveredInsight && (
                              <motion.div
                                key={hoveredInsight.href}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.2, ease: 'easeOut' }}
                                style={{ borderRadius: 16, overflow: 'hidden', background: '#F5F5F5' }}
                              >
                                <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                                  <img src={hoveredInsight.image} alt={hoveredInsight.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ padding: '16px' }}>
                                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, color: '#001426', marginBottom: 6 }}>{hoveredInsight.label}</div>
                                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#666', lineHeight: 1.6, marginBottom: 12 }}>{hoveredInsight.desc}</div>
                                  <Link to={hoveredInsight.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 12, color: activeBlue, textDecoration: 'none' }}>
                                    View Section <ArrowRight size={12} />
                                  </Link>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Products Mega Menu */}
                  <AnimatePresence>
                    {isOpen && item.mega && (
                      <motion.div
                        key="mega"
                        variants={dropdownVariants}
                        initial="hidden" animate="visible" exit="exit"
                        onMouseEnter={() => openDrop(item.label)}
                        onMouseLeave={() => closeDrop(item.label)}
                        style={{
                          position: 'absolute', top: 'calc(100% + 16px)', left: '50%',
                          transform: 'translateX(-25%)',
                          background: '#fff', borderRadius: 20,
                          boxShadow: '0 40px 100px -20px rgba(0,0,0,0.1), 0 10px 30px rgba(0,0,0,0.05)',
                          border: '1px solid rgba(0,0,0,0.05)',
                          padding: '28px', width: 620, zIndex: 200,
                        }}
                      >
                        <div style={{ marginBottom: 20, paddingBottom: 14, borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: activeBlue }}>Product Categories</span>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
                          {item.children.map((child) => (
                            <Link key={child.href} to={child.href}
                              style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '10px', borderRadius: 12, border: '1px solid transparent', textDecoration: 'none', transition: 'all 0.2s' }}
                              onMouseEnter={e => { e.currentTarget.style.background = '#F8F9FA'; e.currentTarget.style.borderColor = 'rgba(0,68,111,0.08)'; }}
                              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'transparent'; }}
                            >
                              {child.image && (
                                <div style={{ width: 48, height: 48, borderRadius: 10, overflow: 'hidden', background: '#F0F2F5', flexShrink: 0 }}>
                                  <img src={child.image} alt={child.label} style={{ width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'multiply' }} />
                                </div>
                              )}
                              <div>
                                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14, color: '#001426', marginBottom: 2 }}>{child.label}</div>
                                <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#888' }}>{child.desc}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Industries Mega Menu — 3 panel */}
                  <AnimatePresence>
                    {isOpen && item.industries && (
                      <motion.div
                        key="industries-mega"
                        variants={dropdownVariants}
                        initial="hidden" animate="visible" exit="exit"
                        onMouseEnter={() => openDrop(item.label)}
                        onMouseLeave={() => { closeDrop(item.label); }}
                        style={{
                          position: 'fixed', top: 84, left: 0, right: 0,
                          background: '#fff',
                          boxShadow: '0 40px 80px -20px rgba(0,0,0,0.12)',
                          borderBottom: '1px solid rgba(0,0,0,0.06)',
                          zIndex: 200, padding: '40px 0',
                        }}
                      >
                        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr 1fr', gap: 48, alignItems: 'start' }}>
                          {/* Left Panel */}
                          <div>
                            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: activeBlue, marginBottom: 16 }}>Industries We Serve</div>
                            <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 28, lineHeight: 1.2, color: '#001426', marginBottom: 16 }}>Engineered for Every Sector</h3>
                            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#666', lineHeight: 1.7, marginBottom: 24 }}>
                              From cement to pharmaceuticals, our solutions are purpose-built for the unique demands of each industrial sector.
                            </p>
                          </div>

                          {/* Center Panel — Industry list */}
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
                            {industriesData.map((ind) => (
                              <Link
                                key={ind.slug} to={`/industries/${ind.slug}`}
                                onMouseEnter={() => setHoveredIndustry(ind)}
                                style={{
                                  display: 'block', padding: '10px 12px', borderRadius: 10,
                                  fontFamily: 'var(--font-body)', fontSize: 14, color: hoveredIndustry?.slug === ind.slug ? activeBlue : '#333',
                                  fontWeight: hoveredIndustry?.slug === ind.slug ? 600 : 400,
                                  background: hoveredIndustry?.slug === ind.slug ? '#EEF4F8' : 'transparent',
                                  transition: 'all 0.15s', textDecoration: 'none',
                                }}
                              >
                                {ind.name}
                              </Link>
                            ))}
                          </div>

                          {/* Right Panel — Dynamic preview */}
                          <AnimatePresence mode="wait">
                            {hoveredIndustry && (
                              <motion.div
                                key={hoveredIndustry.slug}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.2, ease: 'easeOut' }}
                                style={{ borderRadius: 16, overflow: 'hidden', background: '#F5F5F5' }}
                              >
                                <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                                  <img 
                                    src={{
                                      'cement-mining': '/industries images/cement_mining.webp',
                                      'automotive': '/industries images/automative.webp',
                                      'hvac': '/industries images/HVAC.webp',
                                      'textile': '/industries images/Textile.webp',
                                      'infrastructure': '/industries images/infracture.webp',
                                      'water-treatment': '/industries images/waterTreatment.webp',
                                      'food-beverage': '/industries images/food_beverage.webp',
                                      'paper-pulp': '/industries images/paper_pulp.webp'
                                    }[hoveredIndustry.slug] || hoveredIndustry.image} 
                                    alt={hoveredIndustry.name} 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                  />
                                </div>
                                <div style={{ padding: '16px' }}>
                                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, color: '#001426', marginBottom: 6 }}>{hoveredIndustry.name}</div>
                                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#666', lineHeight: 1.6, marginBottom: 12 }}>{hoveredIndustry.shortDesc}</div>
                                  <Link to={`/industries/${hoveredIndustry.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 12, color: activeBlue, textDecoration: 'none' }}>
                                    View Industry <ArrowRight size={12} />
                                  </Link>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="block md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: textColor, padding: 8, zIndex: 1000, background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Right: Phone + CTA — absolutely pinned to right edge, outside container */}
        <div className="hidden md:flex" style={{
          position: 'absolute', top: 0, right: 24, height: 112,
          display: 'flex', alignItems: 'center', gap: 4,
        }}>
          <a
            href="tel:+914448555333"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              height: 44, padding: '0 20px', borderRadius: 40,
              background: '#FFFFFF', border: '1px solid #E5E7EB',
              fontFamily: 'var(--font-heading)', fontSize: 14, fontWeight: 600,
              color: '#001426', textDecoration: 'none', letterSpacing: '0.02em',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#0067A4';
              e.currentTarget.style.background = '#F5F8FA';
              e.currentTarget.style.color = '#0067A4';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#E5E7EB';
              e.currentTarget.style.background = '#FFFFFF';
              e.currentTarget.style.color = '#001426';
            }}
          >
            <Phone size={14} style={{ color: 'inherit' }} />
            +91 44 4855 5333
          </a>
          <Link
            to="/contact"
            style={{ display: 'inline-flex', alignItems: 'center', height: 44, padding: '0 24px', fontSize: 14, fontWeight: 600, borderRadius: 40, background: activeBlue, color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-heading)', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#003355'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = activeBlue; e.currentTarget.style.transform = 'none'; }}
          >
            Speak to an Expert
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'fixed', inset: 0, background: '#001426', zIndex: 999, display: 'flex', flexDirection: 'column', paddingTop: 80, paddingInline: 32, overflowY: 'auto' }}
          >
            <button onClick={() => setMobileOpen(false)} style={{ position: 'absolute', top: 20, right: 24, color: '#fff', padding: 8, background: 'none', border: 'none', cursor: 'pointer' }}>
              <X size={28} />
            </button>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.35 }}
                >
                  <Link to={item.href} onClick={() => setMobileOpen(false)}
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 22, color: '#fff', display: 'block', paddingBlock: 12, borderBottom: '1px solid rgba(255,255,255,0.08)', textDecoration: 'none' }}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div style={{ paddingLeft: 16, paddingBottom: 8 }}>
                      {item.dropdown.map(child => (
                        <Link key={child.href} to={child.href} onClick={() => setMobileOpen(false)}
                          style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.6)', display: 'block', paddingBlock: 6, textDecoration: 'none' }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                  {item.industries && (
                    <div style={{ paddingLeft: 16, paddingBottom: 8 }}>
                      {industriesData.map(ind => (
                        <Link key={ind.slug} to={`/industries/${ind.slug}`} onClick={() => setMobileOpen(false)}
                          style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.6)', display: 'block', paddingBlock: 6, textDecoration: 'none' }}
                        >
                          {ind.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>
            <div style={{ marginTop: 'auto', paddingBottom: 48, paddingTop: 32 }}>
              <a href="tel:+914448555333" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.5)', fontSize: 14, display: 'block', marginBottom: 8, textDecoration: 'none' }}>+91 44 4855 5333</a>
              <a href="mailto:info@technoproducts.in" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.5)', fontSize: 14, textDecoration: 'none' }}>info@technoproducts.in</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
