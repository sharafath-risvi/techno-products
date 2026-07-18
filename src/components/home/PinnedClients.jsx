import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const clients = [
  {
    name: 'TNPL',
    logo: 'TNPL',
    industry: 'Pulp & Paper',
    desc: 'Comprehensive geared motor and VFD solutions for high-capacity paper manufacturing.',
    image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=800&q=80',
    link: '#'
  },
  {
    name: 'Larsen & Toubro',
    logo: 'L&T',
    industry: 'Construction & Engineering',
    desc: 'Heavy-duty industrial transmission systems for critical infrastructure projects.',
    image: 'https://images.unsplash.com/photo-1541888086913-df81a4b7f2b1?w=800&q=80',
    link: '#'
  },
  {
    name: 'Chettinad Cement',
    logo: 'Chettinad',
    industry: 'Cement Manufacturing',
    desc: 'Robust gearbox and motor solutions optimized for high-dust, heavy-load environments.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
    link: '#'
  },
  {
    name: 'Schwing Stetter',
    logo: 'Schwing',
    industry: 'Construction Equipment',
    desc: 'Precision automation and motion control panels for advanced mixing equipment.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80',
    link: '#'
  }
];

export default function PinnedClients() {
  const containerRef = useRef();
  const trackRef = useRef();
  const cardsRef = useRef([]);

  useGSAP(() => {
    const cards = cardsRef.current;
    
    // Initial Setup
    // Card 0 is center. Card 1 is right. Cards 2+ are hidden on the right.
    gsap.set(cards, {
      position: 'absolute',
      left: '50%',
      top: '50%',
      xPercent: -50,
      yPercent: -50,
      transformOrigin: 'center center',
    });

    cards.forEach((card, i) => {
      if (i === 0) {
        gsap.set(card, { x: 0, scale: 1, opacity: 1, zIndex: 10, filter: 'blur(0px)' });
      } else {
        gsap.set(card, { x: '60%', scale: 0.85, opacity: 0.5, zIndex: 5 - i, filter: 'blur(4px)' });
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${clients.length * 800}`, // 800px scroll per card transition
        pin: true,
        scrub: 1,
        anticipatePin: 1
      }
    });

    // Animate through each transition step
    for (let i = 0; i < clients.length - 1; i++) {
      const stepTl = gsap.timeline();
      
      // Current card moves left and fades/blurs
      stepTl.to(cards[i], {
        x: '-60%',
        scale: 0.85,
        opacity: 0.5,
        filter: 'blur(4px)',
        zIndex: 4,
        ease: 'power2.inOut',
        duration: 1
      }, 0);

      // Next card moves to center and focuses
      stepTl.to(cards[i + 1], {
        x: '0%',
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)',
        zIndex: 10,
        ease: 'power2.inOut',
        duration: 1
      }, 0);

      // Subsequent cards stay ready on the right
      for (let j = i + 2; j < clients.length; j++) {
        stepTl.to(cards[j], {
          x: '60%',
          scale: 0.85,
          opacity: 0.5,
          filter: 'blur(4px)',
          zIndex: 5 - (j - i),
          ease: 'power2.inOut',
          duration: 1
        }, 0);
      }

      // Previous cards (before i) move further back to hidden
      for (let k = 0; k < i; k++) {
        stepTl.to(cards[k], {
          x: '-80%',
          scale: 0.7,
          opacity: 0,
          zIndex: 1,
          ease: 'power2.inOut',
          duration: 1
        }, 0);
      }

      tl.add(stepTl);
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="pinned-clients-section">
      <div className="pinned-bg" />
      
      {/* Fixed Header */}
      <div className="pinned-header">
        <div className="container">
          <div className="header-tag">Trusted by Industry Leaders</div>
          <h2 className="pinned-heading">
            Leading manufacturers and industrial brands trust Techno Products for reliable engineering solutions, industrial automation, and transmission systems.
          </h2>
        </div>
      </div>

      {/* Stacked Carousel Stage */}
      <div className="stacked-carousel-container" ref={trackRef}>
        {clients.map((client, i) => (
          <div 
            key={client.name} 
            ref={el => cardsRef.current[i] = el}
            className="client-card"
          >
            {/* Top Half: Image */}
            <div className="client-image-wrap">
              <img src={client.image} alt={client.name} className="client-image" loading="lazy" />
              <div className="client-logo-overlay">
                {client.logo}
              </div>
            </div>
            
            {/* Bottom Half: Content */}
            <div className="client-content">
              <span className="client-industry">{client.industry}</span>
              <h3 className="client-name">{client.name}</h3>
              <p className="client-desc">{client.desc}</p>
              
              <Link to={client.link} className="client-link">
                View Case Study <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .pinned-clients-section {
          position: relative;
          height: 100vh;
          overflow: hidden;
          background: #F8F9FA;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pinned-bg {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(#D0D5DA 1px, transparent 1px);
          background-size: 40px 40px;
          background-position: 0% 50%;
          opacity: 0.3;
          z-index: 0;
        }

        .pinned-header {
          position: absolute;
          top: max(80px, 10vh);
          left: 0;
          width: 100%;
          z-index: 20;
          pointer-events: none;
        }

        .header-tag {
          font-family: var(--font-heading);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: #0067A4;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .pinned-heading {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: clamp(20px, 2.5vw, 32px);
          line-height: 1.4;
          color: #00101F;
          max-width: 900px;
          margin: 0;
        }

        .stacked-carousel-container {
          position: relative;
          width: 100%;
          height: 100%;
          max-width: 1200px;
          z-index: 10;
        }

        .client-card {
          width: 480px;
          height: 640px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 32px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 32px 64px -12px rgba(0, 16, 31, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.6);
          will-change: transform, opacity, filter;
        }

        .client-image-wrap {
          width: 100%;
          height: 55%;
          position: relative;
        }

        .client-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .client-logo-overlay {
          position: absolute;
          bottom: -32px;
          right: 32px;
          width: 80px;
          height: 80px;
          background: #FFFFFF;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 14px;
          color: #00101F;
          text-align: center;
          border: 1px solid rgba(0,0,0,0.05);
          z-index: 2;
        }

        .client-content {
          flex: 1;
          padding: 40px 32px 32px;
          display: flex;
          flex-direction: column;
        }

        .client-industry {
          font-family: var(--font-heading);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #0067A4;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .client-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 28px;
          color: #00101F;
          margin: 0 0 16px 0;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .client-desc {
          font-family: var(--font-body);
          font-size: 15px;
          line-height: 1.6;
          color: #555;
          margin: 0 0 24px 0;
          flex: 1;
        }

        .client-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 700;
          color: #00101F;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .client-link:hover {
          color: #0067A4;
        }

        @media (max-width: 1024px) {
          .client-card {
            width: 400px;
            height: 560px;
          }
          .pinned-heading {
            max-width: 600px;
          }
        }

        @media (max-width: 768px) {
          .client-card {
            width: 320px;
            height: 500px;
          }
          .client-name {
            font-size: 24px;
          }
          .client-content {
            padding: 32px 24px 24px;
          }
          .client-logo-overlay {
            width: 60px;
            height: 60px;
            bottom: -24px;
            right: 24px;
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
}
