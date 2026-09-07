import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Phone, CalendarCheck } from 'lucide-react';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import TrustStrip from './components/layout/TrustStrip';

// Pages – Existing (DO NOT MODIFY)
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductCategoryPage from './pages/ProductCategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';

// Pages – Phase 2 New
import OurCompanyPage from './pages/OurCompanyPage';
import LeadershipPage from './pages/LeadershipPage';
import SolutionsPage from './pages/SolutionsPage';
import SolutionDetailPage from './pages/SolutionDetailPage';
import IndustriesPage from './pages/IndustriesPage';
import IndustryDetailPage from './pages/IndustryDetailPage';
import BlogPage from './pages/BlogPage';
import TestimonialsPage from './pages/TestimonialsPage';
import CaseStoriesPage from './pages/CaseStoriesPage';
import CaseStoryDetailPage from './pages/CaseStoryDetailPage';
import CareersPage from './pages/CareersPage';

import { ProductsProvider } from './context/ProductsContext';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = { duration: 0.4, ease: [0.16, 1, 0.3, 1] };

function LoadingScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      style={{
        position: 'fixed', inset: 0, zIndex: 99999, background: '#F8FAFC',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
      }}
    >
      <div style={{ position: 'relative', overflow: 'hidden', padding: 20 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <img src="/Logo/logo1.png" alt="Techno Products" style={{ height: 200, width: 'auto', objectFit: 'contain' }} />
        </motion.div>
      </div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 200 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
        style={{ height: 2, background: '#0067A4', marginTop: 24, borderRadius: 2 }}
      />
    </motion.div>
  );
}

function NotFound() {
  return (
    <main style={{ padding: '160px 0', textAlign: 'center', background: '#F5F5F5', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container">
        <h1 style={{
          fontFamily: 'var(--font-heading)', fontWeight: 700,
          fontSize: 120, color: '#D9EAF5', lineHeight: 1, letterSpacing: '-0.05em',
        }}>404</h1>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 32, color: '#000000', marginTop: 16, marginBottom: 16 }}>
          Page Not Found
        </h2>
        <p style={{ color: '#666', marginBottom: 40, fontFamily: 'var(--font-body)', fontSize: 16, maxWidth: 400, marginInline: 'auto' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a href="/" className="btn-primary" style={{ display: 'inline-block' }}>Return to Homepage</a>
      </div>
    </main>
  );
}

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  return (
    <ProductsProvider>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollToTop />
          <TrustStrip />
          <Navbar />

          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              className="page-wrapper"
            >
              <Routes location={location} key={location.pathname}>
                {/* Existing pages – untouched */}
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/products" element={<ProductCategoryPage key="all" />} />
                <Route path="/products/:categorySlug" element={<ProductCategoryPage />} />
                <Route path="/products/:categorySlug/:productId" element={<ProductDetailPage />} />
                <Route path="/contact" element={<ContactPage />} />

                {/* Phase 2 – About sub-pages */}
                <Route path="/about/company" element={<OurCompanyPage />} />
                <Route path="/about/leadership" element={<LeadershipPage />} />

                {/* Phase 2 – Solutions */}
                <Route path="/solutions/:slug" element={<SolutionDetailPage />} />

                {/* Phase 2 – Industries */}
                <Route path="/industries/:slug" element={<IndustryDetailPage />} />

                {/* Phase 2 – Insights */}
                <Route path="/insights/blog" element={<BlogPage />} />
                <Route path="/insights/testimonials" element={<TestimonialsPage />} />
                <Route path="/case-stories" element={<CaseStoriesPage />} />
                <Route path="/case-stories/:postId" element={<CaseStoryDetailPage />} />

                {/* Phase 2 – Careers */}
                <Route path="/careers" element={<CareersPage />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </motion.div>
          </AnimatePresence>

          <Footer />

          {/* WhatsApp Floating Button */}
          <a
            href="https://wa.me/919840062220?text=Hello! I'm interested in Techno Products. Please help me."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Chat with us on WhatsApp"
            title="Chat on WhatsApp"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.76-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>

          {/* Phone Floating Button */}
          <a
            href="tel:+919840062220"
            className="phone-float"
            aria-label="Call Techno Products"
          >
            <Phone size={22} color="white" strokeWidth={2} />
          </a>

          {/* Schedule a Consultation Floating Button */}
          <Link
            to="/contact"
            className="schedule-float"
            aria-label="Schedule a Consultation"
          >
            <span className="schedule-float__icon">
              <CalendarCheck size={24} color="white" strokeWidth={2} />
            </span>
            <span className="schedule-float__label">Schedule a Consultation</span>
          </Link>
        </>
      )}
    </ProductsProvider>
  );
}
