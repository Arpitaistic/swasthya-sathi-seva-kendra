
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

  return (
    <section className="py-16 bg-swasthya-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How SwasthyaSaarthi Works</h2>
          <p className="text-swasthya-text-light max-w-2xl mx-auto">
            Simple, powerful, and designed for everyone - even without constant internet access
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-swasthya-primary/10 text-swasthya-primary mr-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-swasthya-text-light">{step.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button asChild className="btn-primary">
            <Link to="/health">Try the Health Assistant</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
