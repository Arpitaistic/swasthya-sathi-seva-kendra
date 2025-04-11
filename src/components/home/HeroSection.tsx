
import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, ShieldAlert, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SOSButton from '../common/SOSButton';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-swasthya-primary/5 to-swasthya-accent/10"></div>
      
      {/* Animated background circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-swasthya-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-swasthya-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center lg:text-left">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              variants={childVariants}
            >
              <div className="inline-block relative">
                <span className="bg-gradient-to-r from-swasthya-primary to-swasthya-accent bg-clip-text text-transparent">स्वास्थ्य</span>
                <span className="text-swasthya-text">साथी</span>
                <motion.div 
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-swasthya-primary to-swasthya-accent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                ></motion.div>
              </div>
              <span className="block text-xl md:text-2xl font-normal mt-4 text-swasthya-text">
                Your Rural Life & Health Companion
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-swasthya-text-light text-lg mb-10 max-w-lg mx-auto lg:mx-0"
              variants={childVariants}
            >
              AI-powered health assistant, emergency responder, and welfare guide - 
              all in one app that works even without constant internet.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              variants={childVariants}
            >
              <Button asChild className="bg-gradient-to-r from-swasthya-primary to-swasthya-primary-dark text-white hover:opacity-90 px-6 py-6 h-auto rounded-xl shadow-lg shadow-swasthya-primary/20 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                <Link to="/health">
                  <Activity className="mr-2 h-5 w-5" />
                  Get Health Guidance
                </Link>
              </Button>
              
              <SOSButton className="w-full sm:w-auto shadow-lg shadow-swasthya-danger/20 transition-all duration-300 hover:scale-105" />
            </motion.div>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-6 gap-6"
            variants={containerVariants}
          >
            <motion.div 
              className="md:col-span-3 bg-gradient-to-br from-white to-swasthya-primary/10 rounded-2xl shadow-xl p-6 border border-white backdrop-blur-sm hover:shadow-swasthya-primary/20 transition-all duration-300 hover:scale-105"
              variants={childVariants}
              whileHover={{ y: -5 }}
            >
              <Activity className="h-12 w-12 text-swasthya-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Health Assistant</h3>
              <p className="text-swasthya-text-light">Get AI-powered health guidance based on your symptoms, even offline.</p>
            </motion.div>
            
            <motion.div 
              className="md:col-span-3 bg-gradient-to-br from-white to-swasthya-secondary/10 rounded-2xl shadow-xl p-6 border border-white backdrop-blur-sm hover:shadow-swasthya-secondary/20 transition-all duration-300 hover:scale-105"
              variants={childVariants}
              whileHover={{ y: -5 }}
            >
              <ShieldAlert className="h-12 w-12 text-swasthya-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Emergency SOS</h3>
              <p className="text-swasthya-text-light">One-tap emergency alerts to trusted contacts with your location.</p>
            </motion.div>
            
            <motion.div 
              className="md:col-span-6 bg-gradient-to-br from-white to-swasthya-accent/10 rounded-2xl shadow-xl p-6 border border-white backdrop-blur-sm hover:shadow-swasthya-accent/20 transition-all duration-300 hover:scale-105"
              variants={childVariants}
              whileHover={{ y: -5 }}
            >
              <FileText className="h-12 w-12 text-swasthya-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Welfare Schemes</h3>
              <p className="text-swasthya-text-light">Find and apply for government schemes you're eligible for with ease.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
