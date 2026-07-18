import React from 'react';
import { motion } from 'framer-motion';

const MISSION_IMG = 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=1200&q=80';
const VISION_IMG = 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80';

export default function MissionVision() {
  return (
    <section className="mission-vision-redesigned">
      <div className="container">
        
        {/* ROW 1: MISSION */}
        <motion.div 
          className="split-panel"
          initial={{ scale: 0.93, opacity: 0, y: 30 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Left Panel - Image */}
          <div className="panel-image mission-image">
            <div className="panel-overlay" />
            <h2 className="panel-large-heading">OUR MISSION</h2>
          </div>
          
          {/* Right Panel - Content */}
          <div className="panel-content mission-content">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <h3 className="content-title">Our <span style={{ color: '#00446F' }}>Mission</span></h3>
              <p className="content-text">
                At Techno Products, we integrate technology, engineering expertise, and customer-focused solutions to deliver measurable success. Through innovation, quality, and reliability, we build lasting partnerships and create long-term value for our customers.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* ROW 2: VISION */}
        <motion.div 
          className="split-panel vision-panel"
          initial={{ scale: 0.93, opacity: 0, y: 30 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Left Panel - Content */}
          <div className="panel-content vision-content">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <h3 className="content-title">Our <span style={{ color: '#00446F' }}>Vision</span></h3>
              <p className="content-text">
                Our vision is to empower industries through innovative engineering solutions, trusted expertise, and reliable execution. By fostering collaboration, creativity, and long-term partnerships, we help our customers achieve sustainable growth and operational excellence.
              </p>
            </motion.div>
          </div>
          
          {/* Right Panel - Image */}
          <div className="panel-image vision-image">
            <div className="panel-overlay" />
            <h2 className="panel-large-heading">OUR VISION</h2>
          </div>
        </motion.div>

      </div>

      <style>{`
        .mission-vision-redesigned {
          padding: 120px 0;
          background-color: #FAFAFA;
        }
        
        .split-panel {
          display: flex;
          background: #FFFFFF;
          border-radius: 28px;
          border: 1px solid rgba(0, 103, 164, 0.08);
          box-shadow: 0 24px 60px -15px rgba(0, 16, 31, 0.08);
          overflow: hidden; /* Ensures image and content respect the rounded corners */
          margin-bottom: 60px;
          min-height: 460px;
          will-change: transform, opacity;
        }

        .split-panel:last-child {
          margin-bottom: 0;
        }

        .panel-image {
          flex: 0 0 35%;
          position: relative;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .mission-image {
          background-image: url('${MISSION_IMG}');
        }
        
        .vision-image {
          background-image: url('${VISION_IMG}');
        }

        .panel-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 16, 31, 0.6);
          transition: background 0.5s ease;
        }
        
        .split-panel:hover .panel-overlay {
          background: rgba(0, 16, 31, 0.5); /* Subtle brightness bump on hover */
        }

        .panel-large-heading {
          position: relative;
          z-index: 2;
          color: #FFFFFF;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: clamp(32px, 3.5vw, 48px);
          letter-spacing: 0.1em;
          margin: 0;
          text-align: center;
          padding: 20px;
        }

        .panel-content {
          flex: 0 0 65%;
          padding: 80px 100px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #FFFFFF;
        }

        .content-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 32px;
          color: #000000;
          margin-bottom: 24px;
          position: relative;
          display: inline-block;
        }

        /* Small decorative underline for premium feel */
        .content-title::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -10px;
          width: 40px;
          height: 3px;
          background: #0067A4;
          border-radius: 2px;
        }

        .content-text {
          font-family: var(--font-body);
          font-size: 18px;
          line-height: 1.8;
          color: #555;
          max-width: 650px;
          margin: 0;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .panel-content { padding: 60px 80px; }
        }

        @media (max-width: 1024px) {
          .panel-image { flex: 0 0 40%; }
          .panel-content { flex: 0 0 60%; padding: 60px; }
        }

        @media (max-width: 768px) {
          /* Stack layout for mobile */
          .split-panel, .vision-panel {
            flex-direction: column;
            min-height: auto;
          }
          
          /* Force image to top on mobile for both Mission and Vision */
          .vision-panel {
            flex-direction: column-reverse;
          }
          
          .panel-image {
            width: 100%;
            height: 250px;
            flex: none;
          }
          
          .panel-content {
            width: 100%;
            flex: none;
            padding: 40px 30px;
          }
        }
      `}</style>
    </section>
  );
}
