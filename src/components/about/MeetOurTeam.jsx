import React from 'react';
import { motion } from 'framer-motion';
import SectionTag, { RevealText } from '../ui/RevealText';

const teamMembers = [
  { name: 'Abdul Rahman', role: 'Managing Director', image: '/AboutTechno_images/team_images/abdul_rahman.png' },
  { name: 'Balaji', role: 'Head of Operations', image: '/AboutTechno_images/team_images/balaji.png' },
  { name: 'Nishanth', role: 'Technical Director', image: '/AboutTechno_images/team_images/nishanth.png' },
  { name: 'Saravanan', role: 'Client Relations', image: '/AboutTechno_images/team_images/saravanan.png' },
  { name: 'Sivaraman', role: 'Lead Engineer', image: '/AboutTechno_images/team_images/sivaraman.png' },
  { name: 'Veerabhatran', role: 'Supply Chain Head', image: '/AboutTechno_images/team_images/veerabhatran.png' },
  { name: 'Vigneshwaran', role: 'Sales Director', image: '/AboutTechno_images/team_images/vigneshwaran.png' },
  { name: 'Aarthi', role: 'Finance Controller', image: '/AboutTechno_images/team_images/Aarthi.png' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function MeetOurTeam() {
  return (
    <section className="meet-our-team-section">
      <div className="section-background-glow" />
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <RevealText>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <SectionTag>OUR TEAM</SectionTag>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 700,
              fontSize: 'clamp(32px,4vw,48px)', lineHeight: 1.1,
              letterSpacing: '-0.02em', color: '#000000', marginBottom: 20,
            }}>
              Meet the People Behind <span style={{ color: '#00446F' }}>Techno Products</span>
            </h2>
          </RevealText>
          
          <RevealText delay={0.2}>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.5vw, 18px)',
              color: '#666', lineHeight: 1.7, maxWidth: 700, margin: '0 auto'
            }}>
              Our experienced professionals work together to deliver trusted industrial engineering solutions with innovation, technical expertise, and customer-first service.
            </p>
          </RevealText>
        </div>

        <motion.div 
          className="team-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={cardVariants} className="team-card">
              <div className="team-card-image-wrapper">
                <img src={member.image} alt={member.name} className="team-card-image" />
              </div>
              <div className="team-card-content">
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .meet-our-team-section {
          padding: 20px 0 120px 0;
          background-color: #FFFFFF;
          position: relative;
          overflow: hidden;
        }

        .section-background-glow {
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 50%, rgba(0, 103, 164, 0.025) 0%, transparent 60%);
          pointer-events: none;
          z-index: 1;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }

        .team-card {
          background: #FFFFFF;
          border-radius: 24px;
          border: 1px solid rgba(0, 103, 164, 0.05);
          padding: 16px;
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.03);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .team-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -10px rgba(0, 103, 164, 0.12);
        }

        .team-card-image-wrapper {
          width: 100%;
          aspect-ratio: 4/5;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 24px;
          background: #F3F4F6;
        }

        .team-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }

        .team-card:hover .team-card-image {
          transform: scale(1.05);
        }

        .team-member-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 20px;
          color: #000000;
          margin: 0 0 8px 0;
          letter-spacing: -0.01em;
        }

        .team-member-role {
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 13px;
          color: #0067A4; /* Techno Blue accent for role */
          margin: 0 0 8px 0;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        @media (max-width: 1024px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
          .meet-our-team-section {
            padding-top: 64px;
          }
        }

        @media (max-width: 640px) {
          .team-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          
          .team-card-image-wrapper {
            aspect-ratio: 1/1; /* Square on mobile for better visibility */
          }
        }
      `}</style>
    </section>
  );
}
