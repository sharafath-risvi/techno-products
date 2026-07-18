import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Mountain, Car, Package, FileText, Layers,
  FlaskConical, Droplets, Building2
} from 'lucide-react';
import { industries } from '../../data/siteData';

const iconMap = {
  mountain: Mountain,
  car: Car,
  package: Package,
  'file-text': FileText,
  layers: Layers,
  'flask-conical': FlaskConical,
  droplets: Droplets,
  'building-2': Building2,
};

export default function IndustriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="industries-section" aria-labelledby="industries-heading" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}
        >
          <div className="section-tag" style={{ justifyContent: 'center' }}>Industries We Serve</div>
          <h2 className="section-title" id="industries-heading">
            Powering Every Sector of<br />Indian Industry
          </h2>
          <p className="section-subtitle" style={{ margin: '16px auto 0', textAlign: 'center' }}>
            Our industrial products and engineering solutions serve a wide spectrum of industries, each with unique requirements that our technical team is equipped to address.
          </p>
        </motion.div>

        <div className="industries-grid" role="list">
          {industries.map((industry, i) => {
            const Icon = iconMap[industry.icon] || Package;
            return (
              <motion.div
                key={industry.name}
                className="industry-card"
                role="listitem"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              >
                <div className="industry-icon-wrap" aria-hidden="true">
                  <Icon size={28} />
                </div>
                <div className="industry-title">{industry.name}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
