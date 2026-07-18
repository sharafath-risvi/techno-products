import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Cog, Zap, Cpu, LayoutDashboard, Headphones, ShieldCheck } from 'lucide-react';
import { services } from '../../data/siteData';

const iconMap = {
  cog: Cog,
  zap: Zap,
  cpu: Cpu,
  'layout-dashboard': LayoutDashboard,
  headphones: Headphones,
  'shield-check': ShieldCheck,
};

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="services-section" aria-labelledby="services-heading" ref={ref}>
      <div className="services-bg-pattern" aria-hidden="true" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 30, flexWrap: 'wrap' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="section-tag">Our Services</div>
            <h2 className="section-title section-title-light" id="services-heading">
              End-to-End Engineering<br />Solutions for Industry
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.7, maxWidth: 380 }}>
              From product supply to full project commissioning, our engineering teams deliver comprehensive industrial solutions tailored to your operational needs.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="services-grid" role="list">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Cog;
            return (
              <motion.div
                key={service.id}
                className="service-card"
                role="listitem"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              >
                <div className="service-icon" aria-hidden="true">
                  <Icon size={24} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-text">{service.description}</p>
                <ul className="service-features" role="list">
                  {service.features.map((feat) => (
                    <li key={feat}>{feat}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          style={{ textAlign: 'center', marginTop: 60 }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link to="/services" className="btn-primary">
            View All Services <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
