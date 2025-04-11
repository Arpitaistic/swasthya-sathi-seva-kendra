
import React from 'react';
import { Button } from '@/components/ui/button';
import { Smartphone, Wifi, MessageCircle, Download } from 'lucide-react';

const DownloadSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-swasthya-primary to-swasthya-accent text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4">Download SwasthyaSaarthi Today</h2>
            <p className="text-white/80 mb-8 max-w-lg">
              Access health guidance, emergency support, and welfare schemes - all in one app.
              Works offline and in multiple languages.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Wifi className="h-6 w-6 text-white" />
                <span>Works with limited or no internet connection</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-6 w-6 text-white" />
                <span>Available in multiple regional languages</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Smartphone className="h-6 w-6 text-white" />
                <span>Optimized for all Android devices</span>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-white text-swasthya-primary hover:bg-white/90 transition-colors">
                <Download className="h-5 w-5 mr-2" />
                Download App
              </Button>
              
              <Button variant="outline" className="border-white text-white hover:bg-white/10 transition-colors">
                Learn How to Use
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-[32rem] rounded-3xl bg-black border-8 border-white/20 shadow-2xl overflow-hidden animate-fade-in">
              <div className="absolute top-0 w-1/2 h-8 bg-black left-1/4 rounded-b-lg"></div>
              
              {/* Mock App Screen */}
              <div className="bg-white h-full">
                <div className="bg-swasthya-primary p-4 text-white text-center font-bold">
                  स्वास्थ्यसाथी
                </div>
                
                <div className="p-4">
                  <div className="bg-swasthya-primary/10 p-3 rounded-lg mb-4">
                    <h3 className="font-bold text-center text-swasthya-primary">Health Assistant</h3>
                  </div>
                  
                  <div className="bg-gray-100 p-3 rounded-lg mb-2">
                    <div className="h-3 w-3/4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-3 w-1/2 bg-gray-300 rounded"></div>
                  </div>
                  
                  <div className="bg-gray-100 p-3 rounded-lg mb-4">
                    <div className="h-3 w-2/3 bg-gray-300 rounded mb-2"></div>
                    <div className="h-3 w-3/4 bg-gray-300 rounded"></div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="bg-swasthya-primary text-white text-xs font-bold py-2 px-4 rounded-lg">
                      Get Help
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-red-500 text-white text-center p-3 rounded-lg font-bold">
                    SOS EMERGENCY
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
