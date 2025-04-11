
import React, { createContext, useContext, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface EmergencyContact {
  id: number;
  name: string;
  phone: string;
  relationship?: string;
}

interface EmergencyContextType {
  contacts: EmergencyContact[];
  addContact: (contact: Omit<EmergencyContact, 'id'>) => void;
  removeContact: (id: number) => void;
  isSafeMode: boolean;
  toggleSafeMode: () => void;
  triggerSOS: () => void;
  cancelSOS: () => void;
  isSOSActive: boolean;
  shareLocation: () => void;
  getSafeRoute: (destination: string) => void;
}

const EmergencyContext = createContext<EmergencyContextType | undefined>(undefined);

export const EmergencyProvider = ({ children }: { children: React.ReactNode }) => {
  const { toast } = useToast();
  const [contacts, setContacts] = useState<EmergencyContact[]>([
    { id: 1, name: 'Family Member', phone: '+91 98765 43210', relationship: 'Brother' },
    { id: 2, name: 'Local Police', phone: '100' },
    { id: 3, name: 'Ambulance', phone: '108' }
  ]);
  
  const [isSafeMode, setIsSafeMode] = useState(false);
  const [isSOSActive, setIsSOSActive] = useState(false);
  
  const addContact = (contact: Omit<EmergencyContact, 'id'>) => {
    const newId = contacts.length > 0 ? Math.max(...contacts.map(c => c.id)) + 1 : 1;
    setContacts(prev => [...prev, { ...contact, id: newId }]);
    
    toast({
      title: "Contact added",
      description: `${contact.name} has been added to your emergency contacts`,
    });
  };
  
  const removeContact = (id: number) => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
    
    toast({
      title: "Contact removed",
      description: "Emergency contact has been removed",
    });
  };
  
  const toggleSafeMode = () => {
    setIsSafeMode(prev => !prev);
    
    toast({
      title: isSafeMode ? "Safe Mode Disabled" : "Safe Mode Enabled",
      description: isSafeMode 
        ? "Standard emergency features are now active" 
        : "Your device will now detect and alert you about potential threats",
    });
  };
  
  const triggerSOS = () => {
    setIsSOSActive(true);
    
    toast({
      title: "SOS Activated",
      description: "Emergency contacts have been notified of your situation",
      variant: "destructive",
    });
    
    // In a real app, this would send notifications to emergency contacts
    console.log("SOS triggered, notifying contacts:", contacts);
  };
  
  const cancelSOS = () => {
    setIsSOSActive(false);
    
    toast({
      title: "SOS Cancelled",
      description: "Emergency alert has been cancelled",
    });
  };
  
  const shareLocation = () => {
    // In a real app, this would get the user's location and share it
    toast({
      title: "Location Shared",
      description: "Your current location has been shared with emergency contacts",
    });
  };
  
  const getSafeRoute = (destination: string) => {
    // In a real app, this would calculate a safe route to the destination
    toast({
      title: "Safe Route Generated",
      description: `A safe route to ${destination} has been calculated`,
    });
  };

  return (
    <EmergencyContext.Provider
      value={{
        contacts,
        addContact,
        removeContact,
        isSafeMode,
        toggleSafeMode,
        triggerSOS,
        cancelSOS,
        isSOSActive,
        shareLocation,
        getSafeRoute
      }}
    >
      {children}
    </EmergencyContext.Provider>
  );
};

export const useEmergency = (): EmergencyContextType => {
  const context = useContext(EmergencyContext);
  if (context === undefined) {
    throw new Error('useEmergency must be used within an EmergencyProvider');
  }
  return context;
};
