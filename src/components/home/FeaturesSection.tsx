
import React from 'react';
import { 
  Activity, 
  Stethoscope, 
  Pill, 
  FileText, 
  Heart, 
  ShieldAlert, 
  MapPin, 
  Mic, 
  Smartphone, 
  Languages 
} from 'lucide-react';
import { motion } from 'framer-motion';
import FeatureCard from '../common/FeatureCard';
import { useNavigate } from 'react-router-dom';

const FeaturesSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Activity,
      title: "Symptom Checker",
      description: "Enter symptoms to get AI-powered health guidance and next steps",
      path: "/health"
    },
    {
      icon: Stethoscope,
      title: "Digital Health Record",
      description: "Keep your health history in one secure, accessible place",
      path: "/health/records"
    },
    {
      icon: Heart,
      title: "Mental Wellness",
      description: "Simple mood tracking and mental health resources",
      path: "/health/mental"
    },
    {
      icon: Pill,
      title: "Medicine Reminders",
      description: "Never miss a dose with customizable reminders",
      path: "/health/medicines"
    },
    {
      icon: ShieldAlert,
      title: "Emergency SOS",
      description: "One-tap emergency alerts to trusted contacts",
      path: "/emergency"
    },
    {
      icon: MapPin,
      title: "Safe Navigation",
      description: "Get routes based on safety, especially at night",
      path: "/emergency/safety"
    },
    {
      icon: FileText,
      title: "Welfare Schemes",
      description: "Find government schemes you're eligible for",
      path: "/welfare"
    },
    {
      icon: Smartphone,
      title: "Offline Access",
      description: "Access critical features even without internet",
      path: "/settings"
    },
    {
      icon: Languages,
      title: "Multilingual Support",
      description: "Use the app in your preferred language",
      path: "/settings"
    },
    {
      icon: Mic,
      title: "Voice Commands",
      description: "Speak to navigate and use the app hands-free",
      path: "/settings"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-swasthya-primary to-swasthya-accent">
            Comprehensive Features
          </h2>
          <p className="text-swasthya-text-light max-w-2xl mx-auto text-lg">
            SwasthyaSaarthi combines health, emergency, and welfare services in one accessible platform
            designed specifically for rural communities.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`${index === 0 || index === 1 ? 'xl:col-span-2' : 'xl:col-span-1'}`}
              variants={itemVariants}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                onClick={() => navigate(feature.path)}
                className={index % 2 === 0 ? "bg-gradient-to-br from-white to-swasthya-primary/5" : "bg-gradient-to-br from-white to-swasthya-accent/5"}
                iconClassName={index % 2 === 0 ? "bg-swasthya-primary/10 text-swasthya-primary" : "bg-swasthya-accent/10 text-swasthya-accent"}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
