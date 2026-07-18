import { motion } from 'framer-motion';

import SectionTag, { RevealText, StaggerContainer, StaggerItem, RevealSlideLeft, RevealSlideRight } from '../components/ui/RevealText';
import FullOurStory from '../components/about/FullOurStory';
import LeadershipStory from '../components/about/LeadershipStory';
import MissionVision from '../components/about/MissionVision';
import MeetOurTeam from '../components/about/MeetOurTeam';
import AboutHero from '../components/about/AboutHero';
import CTASection from '../components/home/CTASection';


const HERO_IMG = 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1920&h=1080&fit=crop&q=80';

export default function AboutPage() {
  return (
    <main>
      {/* 1. Cinematic Scroll Hero & Story */}
      <AboutHero />

      {/* 2. Full Our Story Section */}
      <FullOurStory />

      {/* 3. Mission & Vision */}
      <MissionVision />

      {/* 4. Meet Our Leadership (Pinned GSAP Section) */}
      <LeadershipStory />

      {/* 5. Meet Our Team */}
      <MeetOurTeam />

      {/* 6. CTA Section */}
      <CTASection 
        label="LET'S BUILD TOGETHER"
        heading="Partner With Techno Products"
        gradientHeading="For Your Next Engineering Project"
        description={null}
        primaryBtnText="Explore Products"
        primaryBtnLink="/products"
        secondaryBtnText="Contact Our Experts"
        secondaryBtnLink="/contact"
      />
    </main>
  );
}
