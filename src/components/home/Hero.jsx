import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const storyContent = [
  {
    subtitle: "ESTABLISHED 1999",
    title: "Engineering With A Higher Purpose",
    desc: "Delivering world-class industrial automation and mechanical solutions across India."
  },
  {
    subtitle: "AUTHORISED CHANNEL PARTNER",
    title: "Global Industrial Brands",
    desc: "Strategic alliances with Danfoss, Innomotics, Schneider Electric, and Motovario."
  },
  {
    subtitle: "END-TO-END CAPABILITY",
    title: "Mechanical, Electrical & Control",
    desc: "From concept design to commissioning and lifecycle maintenance support."
  }
];

export default function Hero() {
  const containerRef = useRef();
  const videoRef = useRef();
  const videoBgWrapperRef = useRef();
  
  const [activeText, setActiveText] = useState(null);
  const zoomProgressRef = useRef(0);

  // Effect to automatically scroll to the next section when the video finishes,
  // but ONLY if the user has already manually zoomed in (zoomProgress > 0.5).
  // We no longer lock the DOM siblings.
  // Removed unused effect

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=1500', // Scroll distance for the zoom
        pin: true,
        scrub: 1.2, // Smooth scrub
        anticipatePin: 1,
        onUpdate: (self) => {
          zoomProgressRef.current = self.progress;
        }
      }
    });

    // 0. Cinematic background zoom: video scales subtly from 1 → 1.25 over the full scroll
    //    This runs in parallel with the TECHNO text reveal, giving a premium depth effect.
    tl.fromTo(videoBgWrapperRef.current,
      { scale: 1 },
      { scale: 1.25, ease: 'none', duration: 1 },
      0 // starts at the very beginning of the timeline
    );

  }, { scope: containerRef });

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const { currentTime, duration } = videoRef.current;
    if (!duration) return;
    
    const progress = currentTime / duration;
    
    // Text logic synced to video timeline
    let newActiveText = null;
    if (progress > 0.10 && progress < 0.35) {
      newActiveText = 0;
    } else if (progress > 0.40 && progress < 0.65) {
      newActiveText = 1;
    } else if (progress > 0.70 && progress < 0.95) { 
      newActiveText = 2;
    }
    
    if (activeText !== newActiveText) {
      setActiveText(newActiveText);
    }
  };

  return (
    <section ref={containerRef} style={{
      position: 'relative',
      height: '100svh',
      width: '100%',
      overflow: 'hidden',
      background: '#FFFFFF', // Solid white base
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Background Video — wrapped in a zoom container for the scroll-driven scale effect */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden'
      }}>
        <div
          ref={videoBgWrapperRef}
          style={{
            position: 'absolute',
            inset: 0,
            willChange: 'transform',
            transformOrigin: 'center center',
          }}
        >
          <video 
            ref={videoRef}
            onTimeUpdate={handleTimeUpdate}
            src="/videos/download.mp4"
            autoPlay 
            loop
            muted 
            playsInline
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover'
            }}
          />
        </div>
      </div>

      {/* Storytelling Text Overlay (Z-index 1 places it inside the video world) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none'
      }}>
        <AnimatePresence mode="wait">
          {activeText !== null && (
            <motion.div
              key={activeText}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.1 } }, // Fast base entry so children can animate
                exit: { opacity: 0, transition: { duration: 0.8, delay: 0.4 } } // Ensure parent waits for longest child (0.6s + 0.2s delay)
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                maxWidth: '960px',
                padding: '0 24px',
                position: 'absolute', // Ensures strict stacking
              }}
            >
              {/* Premium Eyebrow */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 } },
                  exit: { opacity: 0, y: -10, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 } }
                }}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(11px, 1.2vw, 13px)',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: '#E2E8F0',
                  marginBottom: '24px',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  textShadow: '0 4px 12px rgba(0,0,0,0.5)',
                }}
              >
                <div style={{ width: 32, height: 2, background: '#D71B32' }} /> {/* Brand Accent Red */}
                {storyContent[activeText].subtitle}
                <div style={{ width: 32, height: 2, background: '#D71B32' }} />
              </motion.div>
              
              {/* Strong Large Headline (Masked Reveal) */}
              <div style={{ overflow: 'hidden', paddingBottom: '8px', marginBottom: '24px' }}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: '100%' },
                    visible: { opacity: 1, y: '0%', transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.25 } },
                    exit: { opacity: 0, y: '-30%', transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 } }
                  }}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(36px, 5vw, 76px)',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    lineHeight: 1.08,
                    letterSpacing: '-0.025em',
                    textShadow: '0 12px 40px rgba(0,0,0,0.8), 0 4px 12px rgba(0,0,0,0.4)',
                  }}
                >
                  {storyContent[activeText].title}
                </motion.div>
              </div>

              {/* Short Supporting Copy */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 } },
                  exit: { opacity: 0, y: 15, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0 } }
                }}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(16px, 1.4vw, 20px)',
                  color: 'rgba(255,255,255,0.75)',
                  lineHeight: 1.6,
                  maxWidth: '640px',
                  fontWeight: 400,
                  textShadow: '0 4px 20px rgba(0,0,0,0.6)',
                }}
              >
                {storyContent[activeText].desc}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
}
