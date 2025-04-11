
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import DownloadSection from '../components/home/DownloadSection';
import { motion, useScroll, useSpring } from 'framer-motion';

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-swasthya-primary via-swasthya-secondary to-swasthya-accent z-50 origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <main className="flex-grow overflow-hidden">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
