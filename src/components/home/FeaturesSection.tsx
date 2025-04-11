
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

// Mock implementation of framer-motion for this example
const motion = {
  div: ({ children, ...props }: any) => (
    <div {...props}>
      {children}
    </div>
  )
};

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

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Comprehensive Features</h2>
          <p className="text-swasthya-text-light max-w-2xl mx-auto">
            SwasthyaSaarthi combines health, emergency, and welfare services in one accessible platform
            designed specifically for rural communities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`${index === 0 || index === 1 ? 'xl:col-span-2' : 'xl:col-span-1'} animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                onClick={() => navigate(feature.path)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
