import Hero from '../components/home/Hero';
// import CinematicStory from '../components/home/CinematicStory';
import TrustStats from '../components/home/TrustStats';
import AboutPreview from '../components/home/AboutPreview';
import ProductCategories from '../components/home/ProductCategories';
import ServicesOverview from '../components/home/ServicesOverview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import PartnersSection from '../components/home/PartnersSection';
import ClientsSection from '../components/home/ClientsSection';
import CertificationsSection from '../components/home/CertificationsSection';
import MostViewedProducts from '../components/home/MostViewedProducts';
import HomeCaseStories from '../components/home/HomeCaseStories';
import CTASection from '../components/home/CTASection';

export default function HomePage() {
  return (
    <main>
      {/* 1. Premium Hero */}
      <Hero />
      {/* 1.5 Cinematic Storytelling (Temporarily Disabled) */}
      {/* <CinematicStory /> */}
      {/* 1.6 Trust Stats / Proven Track Record */}
      <TrustStats />
      {/* 2. About Techno Products */}
      <AboutPreview />
      {/* 3. Our Services */}
      <ServicesOverview />
      {/* 4. Most Viewed Products (Moved immediately below Our Services) */}
      <MostViewedProducts />
      {/* 5. Why Choose Us */}
      <WhyChooseUs />
      {/* 6. Case Stories (Moved immediately below Why Choose Us) */}
      <HomeCaseStories />
      {/* 7. Product Categories (Product Portfolio) - HIDDEN per user request */}
      {/* <ProductCategories /> */}
      {/* 8. Infinite Scrolling Marquee */}
      <PartnersSection />
      {/* 9. Museum Exhibition Certifications Gallery */}
      <CertificationsSection />
      {/* 10. Vertical Scrolling Projects Showcase */}
      <ClientsSection />
      {/* 11. Premium Contact CTA */}
      <CTASection />
    </main>
  );
}
