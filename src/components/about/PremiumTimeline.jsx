import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Building2, TrendingUp, Truck, ShieldCheck, Globe } from 'lucide-react';
import SectionTag, { RevealText } from '../ui/RevealText';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    year: '1999',
    title: 'Company Founded',
    description: 'Techno Products Development Pvt. Ltd. was established with a vision to provide trusted industrial engineering and transmission solutions.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80'
  },
  {
    year: '2005',
    title: 'Business Expansion',
    description: 'Expanded partnerships and strengthened product offerings across industrial automation and engineering sectors.',
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80'
  },
  {
    year: '2015',
    title: 'Operational Excellence',
    description: 'Developed advanced logistics infrastructure and enhanced technical support across multiple locations.',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&q=80'
  },
  {
    year: '2020',
    title: 'TECHNO Brand',
    description: 'Introduced the TECHNO brand, reinforcing engineering expertise and customer-focused innovation.',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80'
  },
  {
    year: 'Today',
    title: 'Future Ready',
    description: 'Continuing to deliver world-class engineering solutions while expanding across India and international markets.',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80'
  },
];

export default function PremiumTimeline() {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useGSAP(() => {
    const scroller = scrollerRef.current;
    const items = gsap.utils.toArray('.timeline-item');
    
    // Total horizontal distance to scroll
    const getScrollAmount = () => -(scroller.scrollWidth - window.innerWidth);
    
    // Pin and scroll horizontally
    const tween = gsap.to(scroller, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        start: "top top",
        end: () => `+=${scroller.scrollWidth}`, // Scroll duration proportional to width
        scrub: 1,
        invalidateOnRefresh: true,
      }
    });

    // Progress Line Animation
    gsap.to('.timeline-progress-line', {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${scroller.scrollWidth}`,
        scrub: 1,
        invalidateOnRefresh: true,
      }
    });

    // Animate each card when in center
    items.forEach((item) => {
      const card = item.querySelector('.premium-card');
      const yearBadge = item.querySelector('.year-badge');
      const nodeOuter = item.querySelector('.node-outer');
      const nodeInner = item.querySelector('.node-inner');
      const image = item.querySelector('.card-image');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          containerAnimation: tween,
          start: "center 85%", // Starts animating IN when center reaches 85% of viewport width
          end: "center 15%",   // Finishes animating OUT when center reaches 15% of viewport width
          scrub: true,
        }
      });

      // IN (0 to 1 duration) -> Peak in the center (around 50% viewport width)
      tl.to(card, { scale: 1, opacity: 1, boxShadow: '0 30px 60px -15px rgba(0, 103, 164, 0.15)', duration: 1, ease: "power1.inOut" }, 0)
        .to(yearBadge, { color: '#0067A4', scale: 1.05, duration: 1, ease: "power1.inOut" }, 0)
        .to(nodeOuter, { borderColor: '#0067A4', scale: 1.2, duration: 1, ease: "power1.inOut" }, 0)
        .to(nodeInner, { scale: 1, opacity: 1, duration: 1, ease: "power1.inOut" }, 0)
        .to(image, { scale: 1.05, duration: 2, ease: "none" }, 0) // Slow zoom across the whole timeline
        
      // OUT (1 to 2 duration) -> Fade back out as it moves to the left
      tl.to(card, { scale: 0.85, opacity: 0.4, boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.05)', duration: 1, ease: "power1.inOut" }, 1)
        .to(yearBadge, { color: 'rgba(0,103,164,0.15)', scale: 1, duration: 1, ease: "power1.inOut" }, 1)
        .to(nodeOuter, { borderColor: 'rgba(0,103,164,0.2)', scale: 1, duration: 1, ease: "power1.inOut" }, 1)
        .to(nodeInner, { scale: 0, opacity: 0, duration: 1, ease: "power1.inOut" }, 1);
    });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      style={{ 
        height: '100vh', 
        background: '#fff',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Background with subtle texture/gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(0,103,164,0.03) 0%, transparent 80%)',
        opacity: 0.8,
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230067a4\' fill-opacity=\'0.02\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        zIndex: 0
      }} />

      {/* Header (Absolute positioned at top) */}
      <div style={{ position: 'absolute', top: '15vh', left: 0, right: 0, zIndex: 10, textAlign: 'center', padding: '0 20px' }}>
        <RevealText>
          <SectionTag>OUR JOURNEY</SectionTag>
          <h2 style={{
            fontFamily: 'var(--font-heading)', fontWeight: 700,
            fontSize: 'clamp(28px,4vw,42px)', lineHeight: 1.1,
            letterSpacing: '-0.02em', color: '#000000', marginBottom: 0,
          }}>
            The Evolution of <span style={{ color: '#00446F' }}>Techno Products</span>
          </h2>
        </RevealText>
      </div>

      {/* Scroller Track */}
      <div 
        ref={scrollerRef} 
        style={{ 
          display: 'flex', 
          height: '100%', 
          width: 'max-content', 
          padding: '0 15vw', // Starts first card perfectly centered
          alignItems: 'center',
          position: 'relative',
          zIndex: 2
        }}
      >
        {/* Horizontal Line Background spanning the whole track length minus padding */}
        <div style={{
          position: 'absolute',
          top: '38vh',
          left: '15vw',
          right: '15vw',
          height: '3px',
        }}>
          <div style={{ width: '100%', height: '100%', background: 'rgba(0,103,164,0.1)' }} />
          {/* Animated Progress Line */}
          <div className="timeline-progress-line" style={{
            position: 'absolute', top: 0, left: 0, bottom: 0, width: '100%',
            background: 'linear-gradient(90deg, #0067A4, #4F8FBF)',
            transformOrigin: 'left center',
            transform: 'scaleX(0)'
          }} />
        </div>

        {/* Timeline Items */}
        {timelineData.map((item, index) => (
          <div className="timeline-item" key={item.year} style={{
            width: '70vw',
            maxWidth: '900px',
            marginRight: index === timelineData.length - 1 ? '0' : '10vw', // Gap between cards
            position: 'relative',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            {/* Node centered horizontally above the card */}
            <div style={{
              position: 'absolute',
              top: '38vh',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10
            }}>
              <div className="node-outer" style={{
                width: '32px', height: '32px',
                borderRadius: '50%',
                border: '2px solid rgba(0,103,164,0.2)',
                background: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.3s'
              }}>
                <div className="node-inner" style={{
                  width: '12px', height: '12px',
                  borderRadius: '50%',
                  background: '#0067A4',
                  opacity: 0,
                  transform: 'scale(0)'
                }} />
              </div>
            </div>

            {/* Connecting Vertical Line (Subtle) */}
            <div style={{
              position: 'absolute',
              top: '38vh',
              left: '50%',
              transform: 'translateX(-50%)',
              height: '8vh', // Extends down towards the card
              width: '2px',
              background: 'linear-gradient(180deg, rgba(0,103,164,0.2) 0%, transparent 100%)',
              zIndex: 1
            }} />

            {/* Card */}
            <div className="premium-card" style={{
              marginTop: '12vh', // Pushes the card down to create comfortable breathing room from the line
              background: '#fff',
              borderRadius: '24px',
              border: '1px solid rgba(0,103,164,0.06)',
              padding: '40px',
              display: 'flex',
              gap: '40px',
              alignItems: 'center',
              boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
              opacity: 0.4,
              transform: 'scale(0.85)',
              willChange: 'transform, opacity, box-shadow',
              position: 'relative',
              zIndex: 5
            }}>
              <div className="card-content" style={{ flex: '1.2' }}>
                <div className="year-badge" style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(48px, 6vw, 72px)',
                  fontWeight: 700,
                  color: 'rgba(0,103,164,0.15)',
                  lineHeight: 1,
                  marginBottom: '20px',
                  letterSpacing: '-0.03em',
                  transformOrigin: 'left center'
                }}>
                  {item.year}
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <div style={{ color: '#0067A4', background: 'rgba(0,103,164,0.05)', padding: '10px', borderRadius: '12px' }}>
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)', fontWeight: 700,
                    fontSize: 'clamp(22px, 2.5vw, 32px)', color: '#000000', margin: 0,
                    letterSpacing: '-0.02em'
                  }}>
                    {item.title}
                  </h3>
                </div>
                
                <p style={{ 
                  fontFamily: 'var(--font-body)', fontSize: 'clamp(15px, 1.5vw, 18px)', 
                  color: '#555', lineHeight: 1.7, margin: 0 
                }}>
                  {item.description}
                </p>
              </div>

              <div className="card-image-wrapper" style={{
                flex: '1',
                height: '320px',
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <div className="card-image" style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  willChange: 'transform'
                }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(90deg, rgba(255,255,255,0.2) 0%, transparent 100%)',
                  mixBlendMode: 'overlay'
                }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .timeline-item { width: 80vw !important; }
        }
        @media (max-width: 768px) {
          .timeline-item { 
            width: 85vw !important; 
            margin-right: 5vw !important;
          }
          .premium-card {
            flex-direction: column !important;
            gap: 24px !important;
            padding: 24px !important;
          }
          .card-image-wrapper {
            height: 220px !important;
            width: 100% !important;
          }
          .year-badge {
            font-size: 42px !important;
            margin-bottom: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
