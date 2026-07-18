import { motion } from 'framer-motion';
import SectionTag, { RevealText, StaggerContainer, StaggerItem } from '../ui/RevealText';
import { industries } from '../../data/siteData';
import { Factory, Car, Package, FileText, Layers, FlaskConical, Droplets, Building2 } from 'lucide-react';

const iconMap = {
  mountain: Factory,
  car: Car,
  package: Package,
  'file-text': FileText,
  layers: Layers,
  'flask-conical': FlaskConical,
  droplets: Droplets,
  'building-2': Building2,
};

const industryImages = [
  'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&h=400&fit=crop&q=75',
  'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&h=400&fit=crop&q=75',
  'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&h=400&fit=crop&q=75',
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop&q=75',
  'https://images.unsplash.com/photo-1565608438257-fac3c27bdbdf?w=600&h=400&fit=crop&q=75',
  'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&h=400&fit=crop&q=75',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&q=75',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&q=75',
];

export default function IndustriesGrid() {
  return (
    <section style={{ padding: '120px 0', background: '#fff' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'end', marginBottom: 64 }}>
          <RevealText>
            <SectionTag>Industries We Serve</SectionTag>
            <h2 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 700,
              fontSize: 'clamp(28px,3.5vw,52px)', lineHeight: 1.05,
              letterSpacing: '-0.02em', color: '#000000',
            }}>
              Powering Every<br />
              <span style={{ color: '#00446F' }}>Sector of India</span>
            </h2>
          </RevealText>
          <RevealText delay={0.1}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: '#666', lineHeight: 1.75 }}>
              From cement plants to automotive lines, from water treatment to textile mills — TECHNO delivers precision engineering solutions across the full spectrum of Indian industry.
            </p>
          </RevealText>
        </div>

        {/* Industry grid */}
        <StaggerContainer className="">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
            {industries.map(({ name, icon }, i) => {
              const Icon = iconMap[icon] || Factory;
              return (
                <StaggerItem key={name}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: 'relative',
                      borderRadius: 16,
                      overflow: 'hidden',
                      aspectRatio: '4/3',
                      cursor: 'pointer',
                    }}
                  >
                    <img
                      src={industryImages[i % industryImages.length]}
                      alt={name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      loading="lazy"
                    />
                    {/* Gradient overlay */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(0,20,38,0.85) 0%, rgba(0,68,111,0.30) 50%, transparent 80%)',
                      transition: 'opacity 0.3s',
                    }} />
                    {/* Content */}
                    <div style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0,
                      padding: '24px 20px',
                    }}>
                      <div style={{
                        width: 36, height: 36, borderRadius: 8,
                        border: '1px solid rgba(255,255,255,0.25)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#fff', marginBottom: 10,
                      }}>
                        <Icon size={16} />
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-heading)', fontWeight: 700,
                        fontSize: 14, color: '#fff', lineHeight: 1.3,
                      }}>
                        {name}
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
