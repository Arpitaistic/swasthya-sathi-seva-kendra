
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  Stethoscope, 
  Zap, 
  CheckCircle, 
  FileText, 
  ThumbsUp 
} from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Describe Your Symptoms",
      description: "Use text or voice to tell us how you're feeling in your language"
    },
    {
      icon: Stethoscope,
      title: "Get AI Guidance",
      description: "Receive personalized health suggestions and next steps"
    },
    {
      icon: Zap,
      title: "Emergency Help",
      description: "Tap SOS for immediate alerts to your emergency contacts"
    },
    {
      icon: CheckCircle,
      title: "Track Your Health",
      description: "Keep all your health information in one secure place"
    },
    {
      icon: FileText,
      title: "Find Welfare Schemes",
      description: "Discover government programs you qualify for"
    },
    {
      icon: ThumbsUp,
      title: "Works Offline",
      description: "Access critical features even without internet connectivity"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <section className="py-20 bg-swasthya-primary/5 dark:bg-swasthya-primary/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-swasthya-primary/10 dark:bg-swasthya-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-swasthya-accent/10 dark:bg-swasthya-accent/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">How SwasthyaSaarthi Works</h2>
          <p className="text-swasthya-text-light dark:text-gray-300 max-w-2xl mx-auto">
            Simple, powerful, and designed for everyone - even without constant internet access
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={index}
                className="glass-card p-6 hover:shadow-lg transition-all duration-500 group"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-center mb-4">
                  <motion.div 
                    className="flex items-center justify-center h-12 w-12 rounded-full bg-swasthya-primary/20 dark:bg-swasthya-primary/30 text-swasthya-primary mr-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>
                  <h3 className="text-xl font-semibold dark:text-white">{step.title}</h3>
                </div>
                <p className="text-swasthya-text-light dark:text-gray-300">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <Button asChild className="btn-primary scale-105 shadow-lg shadow-swasthya-primary/20 dark:shadow-swasthya-primary/30">
            <Link to="/health">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Try the Health Assistant
              </motion.span>
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HowItWorksSection;
