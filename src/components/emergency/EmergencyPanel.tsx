
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Phone,
  Shield,
  Bell,
  MapPin,
  Users,
  Camera,
  Share2,
  Flashlight,
  AlertTriangle,
  CheckCircle,
  Smartphone
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import SOSButton from '../common/SOSButton';

const EmergencyPanel = () => {
  const [isSafeMode, setIsSafeMode] = useState(false);
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Family Member', phone: '+91 98765 43210' },
    { id: 2, name: 'Local Police', phone: '100' },
    { id: 3, name: 'Ambulance', phone: '108' }
  ]);
  const { toast } = useToast();
  
  const toggleSafeMode = () => {
    setIsSafeMode(!isSafeMode);
    
    toast({
      title: isSafeMode ? "Safe Mode Disabled" : "Safe Mode Enabled",
      description: isSafeMode 
        ? "Standard emergency features are now active" 
        : "Your device will now detect and alert you about potential threats",
      variant: isSafeMode ? "default" : "default",
    });
  };
  
  const mockLocationShare = () => {
    toast({
      title: "Location Shared",
      description: "Your current location has been shared with emergency contacts",
    });
  };
  
  const toggleFlashlight = () => {
    toast({
      title: "Flashlight Toggled",
      description: "In a real app, this would turn on/off your device's flashlight",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-6">Emergency Response</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-red-50 border border-red-100 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-red-700 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                SOS Emergency
              </h3>
              <div className="bg-white h-3 w-3 rounded-full border-4 border-red-500 animate-pulse"></div>
            </div>
            
            <p className="text-red-600 mb-6">
              In an emergency, press the SOS button to alert your contacts and share your location.
            </p>
            
            <SOSButton className="w-full text-center py-4" />
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center">
                <Shield className={`h-5 w-5 mr-2 ${isSafeMode ? 'text-green-500' : 'text-gray-400'}`} />
                Safe Travel Mode
              </h3>
              <div className={`h-6 w-12 rounded-full p-1 transition-colors duration-300 ${isSafeMode ? 'bg-green-500' : 'bg-gray-300'}`}
                onClick={toggleSafeMode}
              >
                <div className={`h-4 w-4 rounded-full bg-white transform transition-transform duration-300 ${isSafeMode ? 'translate-x-6' : ''}`}></div>
              </div>
            </div>
            
            <p className="text-swasthya-text-light mb-6">
              {isSafeMode ? 
                "Safe mode is active. You'll receive alerts about potentially unsafe areas and route deviations." :
                "Enable safe mode when traveling to get safety alerts and automatic monitoring."}
            </p>
            
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" onClick={mockLocationShare} className="flex items-center justify-center">
                <Share2 className="h-4 w-4 mr-2" />
                Share Location
              </Button>
              
              <Button variant="outline" onClick={toggleFlashlight} className="flex items-center justify-center">
                <Flashlight className="h-4 w-4 mr-2" />
                Flashlight
              </Button>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Users className="h-5 w-5 mr-2 text-swasthya-primary" />
            Emergency Contacts
          </h3>
          
          <div className="space-y-4 mb-6">
            {contacts.map(contact => (
              <div key={contact.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <div className="font-medium">{contact.name}</div>
                  <div className="text-swasthya-text-light text-sm">{contact.phone}</div>
                </div>
                
                <Button size="sm" variant="ghost" className="rounded-full p-2">
                  <Phone className="h-5 w-5 text-swasthya-primary" />
                </Button>
              </div>
            ))}
          </div>
          
          <Button variant="outline" className="w-full">
            + Add New Contact
          </Button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-6 flex items-center">
          <MapPin className="h-5 w-5 mr-2 text-swasthya-primary" />
          Safe Navigation
        </h3>
        
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            placeholder="Enter destination..."
            className="pl-10"
          />
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-swasthya-success mr-2" />
            <span>Prefer well-lit routes</span>
          </div>
          
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-swasthya-success mr-2" />
            <span>Avoid areas with low footfall</span>
          </div>
          
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-swasthya-success mr-2" />
            <span>Route deviation alerts</span>
          </div>
          
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-swasthya-success mr-2" />
            <span>Automatic SOS if unusual movement detected</span>
          </div>
        </div>
        
        <Button className="btn-primary w-full">Get Safe Route</Button>
      </div>
    </div>
  );
};

export default EmergencyPanel;
