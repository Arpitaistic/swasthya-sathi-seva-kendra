
import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, ShieldAlert, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SOSButton from '../common/SOSButton';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-swasthya-primary/5 to-swasthya-accent/5 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-swasthya-text mb-4 animate-fade-in">
              <span className="text-swasthya-primary">स्वास्थ्य</span>साथी
              <span className="block text-xl md:text-2xl font-normal mt-2">
                Your Rural Life & Health Companion
              </span>
            </h1>
            
            <p className="text-swasthya-text-light text-lg mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              AI-powered health assistant, emergency responder, and welfare guide - 
              all in one app that works even without constant internet.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button asChild className="btn-primary w-full sm:w-auto">
                <Link to="/health">Get Health Guidance</Link>
              </Button>
              
              <SOSButton className="w-full sm:w-auto" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="bg-white rounded-lg shadow-lg p-6 border border-swasthya-primary/10 hover:border-swasthya-primary/30 transition-all duration-300 transform hover:-translate-y-1">
              <Activity className="h-12 w-12 text-swasthya-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Health Assistant</h3>
              <p className="text-swasthya-text-light">Get AI-powered health guidance based on your symptoms, even offline.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 border border-swasthya-secondary/10 hover:border-swasthya-secondary/30 transition-all duration-300 transform hover:-translate-y-1">
              <ShieldAlert className="h-12 w-12 text-swasthya-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Emergency SOS</h3>
              <p className="text-swasthya-text-light">One-tap emergency alerts to trusted contacts with your location.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 border border-swasthya-accent/10 hover:border-swasthya-accent/30 transition-all duration-300 transform hover:-translate-y-1 md:col-span-2">
              <FileText className="h-12 w-12 text-swasthya-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Welfare Schemes</h3>
              <p className="text-swasthya-text-light">Find and apply for government schemes you're eligible for with ease.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
