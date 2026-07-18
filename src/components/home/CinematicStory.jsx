import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

// Custom Text Splitter Component for letter-by-letter animation
function SplitText({ text, className }) {
  return (
    <span className={className} style={{ display: 'inline-block' }}>
      {text.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} className="split-word" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.split('').map((char, charIndex) => (
            <span key={charIndex} className="split-char" style={{ display: 'inline-block', willChange: 'transform, opacity, filter' }}>
              {char}
            </span>
          ))}
          <span style={{ display: 'inline-block', width: '0.3em' }}>&nbsp;</span>
        </span>
      ))}
    </span>
  );
}

const CHAPTERS = [
  {
    id: 'ch1',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=2000&q=85',
    title: 'ENGINEERING',
    subtitle: 'EXCELLENCE',
    text: 'Driving precision and industrial innovation since 1999.',
  },
  {
    id: 'ch2',
    image: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=2000&q=85',
    title: 'TRUSTED BY',
    subtitle: 'INDUSTRY',
    text: '26+ years of manufacturing excellence, reliability, and long-term partnerships.',
  }
];

export default function CinematicStory() {
  const sectionRef = useRef(null);
  const cameraRigRef = useRef(null);
  
  const bgLayersRef = useRef([]);
  const textLayersRef = useRef([]);
  const blueprintRef = useRef(null);
  const particlesRef = useRef(null);

  useGSAP(() => {
    // Basic setup for hidden chapters
    gsap.set(bgLayersRef.current[1], { opacity: 0, scale: 0.8 });
    
    gsap.set(textLayersRef.current[1], { opacity: 0, z: -200 });

    // Hide characters for Chapter 1
    const ch1Chars = textLayersRef.current[0].querySelectorAll('.split-char');
    gsap.set(ch1Chars, { opacity: 0, y: 80, rotateX: -90, scale: 0.5, filter: 'blur(10px)' });
    gsap.set(textLayersRef.current[0].querySelector('.cine-desc'), { opacity: 0, y: 40 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=300%', // Reduced scroll distance for compressed Chapter 2
        scrub: 1.5, // Super smooth, heavy scrub
        pin: true,
      }
    });

    // --- GLOBAL CAMERA MOVEMENT ---
    // Simulate moving through a 3D space by shifting the entire rig
    tl.to(cameraRigRef.current, {
      rotateX: 4,
      rotateY: -3,
      z: 300,
      ease: 'none',
      duration: 7.5,
    }, 0);

    // Parallax atmospheric elements
    tl.to(particlesRef.current, { z: 400, y: -200, opacity: 0.5, duration: 7.5, ease: 'none' }, 0);
    tl.to(blueprintRef.current, { z: -100, rotateZ: 5, opacity: 0.05, duration: 7.5, ease: 'none' }, 0);

    // --- CHAPTER 1 ---
    // Cinematic Text Assembly
    tl.to(ch1Chars, {
      opacity: 1, y: 0, rotateX: 0, scale: 1, filter: 'blur(0px)',
      stagger: 0.05, duration: 1, ease: 'power3.out'
    }, 0);
    tl.to(textLayersRef.current[0].querySelector('.cine-desc'), { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, 0.5);

    // Background push forward
    tl.to(bgLayersRef.current[0], { scale: 1.2, filter: 'blur(6px)', duration: 3, ease: 'none' }, 0);

    // Exit Text 1 (drifts past camera)
    tl.to(ch1Chars, { opacity: 0, z: 300, filter: 'blur(10px)', stagger: 0.02, duration: 1, ease: 'power2.in' }, 2.5);
    tl.to(textLayersRef.current[0].querySelector('.cine-desc'), { opacity: 0, duration: 0.8 }, 2.5);


    // --- CHAPTER 2 ---
    const ch2Chars = textLayersRef.current[1].querySelectorAll('.split-char');
    gsap.set(ch2Chars, { opacity: 0, y: 80, rotateX: -90, scale: 0.5, filter: 'blur(10px)' });
    gsap.set(textLayersRef.current[1].querySelector('.cine-desc'), { opacity: 0, y: 40 });

    // Enter Bg 2
    tl.to(bgLayersRef.current[1], { opacity: 1, scale: 1, duration: 1.5, ease: 'power2.inOut' }, 2.8);
    tl.to(bgLayersRef.current[1], { scale: 1.2, duration: 3.2, ease: 'none' }, 4.3);
    
    // Enter Text 2
    tl.to(textLayersRef.current[1], { opacity: 1, z: 0, duration: 0.1 }, 3.1); 
    tl.to(ch2Chars, {
      opacity: 1, y: 0, rotateX: 0, scale: 1, filter: 'blur(0px)',
      stagger: 0.05, duration: 0.8, ease: 'power3.out'
    }, 3.3);
    tl.to(textLayersRef.current[1].querySelector('.cine-desc'), { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 3.7);


    // --- INVISIBLE HANDOFF TO PROVEN TRACK RECORD ---
    // The background visually dissolves away into pure black/darkness
    tl.to(bgLayersRef.current[1], { opacity: 0, filter: 'blur(20px)', duration: 1.5, ease: 'power2.inOut' }, 6);
    tl.to(blueprintRef.current, { opacity: 0, duration: 1 }, 6);
    
    // The Text layer physical shifts up, so when pinning ends, it flows seamlessly into the TrustStats section below.
    tl.to(textLayersRef.current[1], { y: -200, duration: 1.5, ease: 'none' }, 6);

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="cine-section">
      {/* Simulated 3D Camera Rig */}
      <div ref={cameraRigRef} className="cine-camera-rig">
        
        {/* Very Background - Blueprint Texture */}
        <div ref={blueprintRef} className="cine-layer cine-blueprint" />
        
        {/* Deep Background Images */}
        <div className="cine-layer cine-bgs">
          {CHAPTERS.map((ch, i) => (
            <div 
              key={`bg-${ch.id}`} 
              ref={el => bgLayersRef.current[i] = el}
              className="cine-bg-item"
            >
              <img src={ch.image} alt="" className="cine-img" />
              {/* Heavy cinematic vignette & industrial gradient */}
              <div className="cine-vignette" />
            </div>
          ))}
        </div>

        {/* Middle Layer - Typography */}
        <div className="cine-layer cine-text-layer">
          {CHAPTERS.map((ch, i) => (
            <div 
              key={`txt-${ch.id}`}
              ref={el => textLayersRef.current[i] = el}
              className="cine-text-content"
            >
              <h2 className="cine-heading">
                <SplitText text={ch.title} className="cine-heading-line1" />
                <br />
                <SplitText text={ch.subtitle} className="cine-heading-line2" />
              </h2>
              <p className="cine-desc">{ch.text}</p>
            </div>
          ))}
        </div>

        {/* Foreground Layer - Atmospheric Particles/Haze */}
        <div ref={particlesRef} className="cine-layer cine-particles" />

      </div>

      <style>{`
        .cine-section {
          width: 100%;
          height: 100vh;
          background: #00101F; /* Techno Products deep industrial blue baseline */
          overflow: hidden;
          position: relative;
          perspective: 1500px; 
        }

        .cine-camera-rig {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .cine-layer {
          position: absolute;
          /* Oversize layers slightly so camera panning doesn't reveal edges */
          inset: -15%; 
          width: 130%;
          height: 130%;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
        }

        /* Background Images */
        .cine-bgs {
          z-index: 1;
        }
        .cine-bg-item {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          will-change: transform, opacity, filter;
          transform-origin: center center;
        }
        .cine-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .cine-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 30%, rgba(0,16,31,0.95) 100%),
                      linear-gradient(to bottom, rgba(0,16,31,0.3) 0%, rgba(0,16,31,0.7) 60%, #00101F 100%);
          z-index: 2;
        }

        /* Blueprint Background */
        .cine-blueprint {
          z-index: 0;
          background-image: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: 0.15;
          transform: translateZ(-300px);
        }

        /* Text Layer */
        .cine-text-layer {
          z-index: 10;
        }
        .cine-text-content {
          position: absolute;
          text-align: center;
          width: 100vw;
          max-width: 1400px;
          display: flex;
          flex-direction: column;
          align-items: center;
          will-change: transform, opacity;
        }

        .cine-heading {
          font-family: var(--font-heading);
          font-weight: 800;
          margin: 0 0 30px 0;
          line-height: 0.9;
          text-transform: uppercase;
          transform-style: preserve-3d;
        }
        
        .cine-heading-line1 {
          font-size: clamp(60px, 9vw, 150px);
          color: #FFFFFF;
          letter-spacing: -0.02em;
          text-shadow: 0 10px 40px rgba(0,0,0,0.6);
        }
        
        .cine-heading-line2 {
          font-size: clamp(40px, 6vw, 110px);
          color: rgba(255,255,255,0.6);
          letter-spacing: -0.01em;
          display: block;
          text-shadow: 0 10px 30px rgba(0,0,0,0.4);
        }

        .cine-desc {
          font-family: var(--font-body);
          font-size: clamp(18px, 2.2vw, 26px);
          color: rgba(255,255,255,0.85);
          max-width: 700px;
          line-height: 1.6;
          margin: 0;
          font-weight: 300;
          will-change: transform, opacity;
        }

        /* Foreground Atmospheric Dust/Rays */
        .cine-particles {
          z-index: 20;
          background-image: radial-gradient(ellipse at 40% 60%, rgba(255,255,255,0.03) 0%, transparent 45%),
                            radial-gradient(circle at 70% 30%, rgba(0, 103, 164, 0.05) 0%, transparent 60%);
          mix-blend-mode: screen;
          pointer-events: none;
          transform: translateZ(300px);
          will-change: transform;
        }

        @media (max-width: 768px) {
          .cine-heading-line1 {
            font-size: clamp(48px, 12vw, 80px);
          }
          .cine-heading-line2 {
            font-size: clamp(36px, 10vw, 60px);
          }
          .cine-desc {
            padding: 0 24px;
          }
        }
      `}</style>
    </section>
  );
}
