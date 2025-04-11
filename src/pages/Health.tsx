
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SymptomChecker from '../components/health/SymptomChecker';
import HealthMetrics from '../components/health/HealthMetrics';

const Health = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-swasthya-text mb-2">Health Assistant</h1>
              <p className="text-swasthya-text-light">
                Get AI-powered health guidance based on your symptoms
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <SymptomChecker />
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
                <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 rounded-lg bg-swasthya-primary/5 hover:bg-swasthya-primary/10 transition-colors flex items-center">
                    <div className="h-10 w-10 rounded-full bg-swasthya-primary/10 text-swasthya-primary flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Health Records</h3>
                      <p className="text-sm text-swasthya-text-light">View your health history</p>
                    </div>
                  </button>
                  
                  <button className="w-full text-left p-3 rounded-lg bg-swasthya-secondary/5 hover:bg-swasthya-secondary/10 transition-colors flex items-center">
                    <div className="h-10 w-10 rounded-full bg-swasthya-secondary/10 text-swasthya-secondary flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m8 2 2 5h4l2-5"></path>
                        <path d="M18.6 13a9 9 0 1 1-13.4-.2"></path>
                        <path d="M11 8v6h7"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Medicine Reminders</h3>
                      <p className="text-sm text-swasthya-text-light">Set up medication schedules</p>
                    </div>
                  </button>
                  
                  <button className="w-full text-left p-3 rounded-lg bg-swasthya-accent/5 hover:bg-swasthya-accent/10 transition-colors flex items-center">
                    <div className="h-10 w-10 rounded-full bg-swasthya-accent/10 text-swasthya-accent flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 7h-9"></path>
                        <path d="M14 17H5"></path>
                        <circle cx="17" cy="17" r="3"></circle>
                        <circle cx="7" cy="7" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Mental Wellness</h3>
                      <p className="text-sm text-swasthya-text-light">Check your mental health</p>
                    </div>
                  </button>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-swasthya-primary to-swasthya-primary-dark text-white rounded-lg shadow-md p-6 animate-fade-in">
                <h2 className="text-xl font-semibold mb-4">Health Tip of the Day</h2>
                <p className="mb-4">
                  "Regular physical activity can help prevent heart disease, stroke, diabetes, and many cancers. Aim for at least 30 minutes of moderate exercise daily."
                </p>
                <div className="text-sm text-white/70">
                  Source: World Health Organization
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <HealthMetrics />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Health;
