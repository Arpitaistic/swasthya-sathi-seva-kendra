
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

export interface HealthMetric {
  id: string;
  name: string;
  value: string | number;
  unit: string;
  icon: React.ElementType;
  status: 'normal' | 'high' | 'low' | 'none';
  timestamp: string;
}

interface HealthContextType {
  metrics: HealthMetric[];
  updateMetric: (id: string, value: string | number) => void;
  addMetric: (metric: Omit<HealthMetric, 'id' | 'timestamp'>) => void;
  lastCheckupDate: Date | null;
  medicalHistory: string[];
  addMedicalRecord: (record: string) => void;
  symptoms: string;
  setSymptoms: (symptoms: string) => void;
  healthAdvice: any | null;
  analyzeSymptoms: () => void;
}

const HealthContext = createContext<HealthContextType | undefined>(undefined);

export const HealthProvider = ({ children }: { children: React.ReactNode }) => {
  const { toast } = useToast();
  const [metrics, setMetrics] = useState<HealthMetric[]>([
    {
      id: 'bp',
      name: 'Blood Pressure',
      value: '120/80',
      unit: 'mmHg',
      icon: () => null,
      status: 'normal',
      timestamp: '2 days ago'
    },
    {
      id: 'pulse',
      name: 'Pulse',
      value: 72,
      unit: 'bpm',
      icon: () => null,
      status: 'normal',
      timestamp: '2 days ago'
    },
    {
      id: 'temp',
      name: 'Temperature',
      value: 98.6,
      unit: '°F',
      icon: () => null,
      status: 'normal',
      timestamp: '2 days ago'
    },
    {
      id: 'glucose',
      name: 'Blood Glucose',
      value: 110,
      unit: 'mg/dL',
      icon: () => null,
      status: 'high',
      timestamp: '1 week ago'
    },
    {
      id: 'weight',
      name: 'Weight',
      value: 68,
      unit: 'kg',
      icon: () => null,
      status: 'none',
      timestamp: '1 month ago'
    }
  ]);
  
  const [lastCheckupDate, setLastCheckupDate] = useState<Date | null>(new Date(2023, 9, 15));
  const [medicalHistory, setMedicalHistory] = useState<string[]>([
    'Influenza - Oct 2023',
    'Annual checkup - May 2023',
    'Vitamin D deficiency - Jan 2023'
  ]);
  
  const [symptoms, setSymptoms] = useState('');
  const [healthAdvice, setHealthAdvice] = useState<any | null>(null);
  
  const updateMetric = (id: string, value: string | number) => {
    setMetrics(prev => prev.map(metric => 
      metric.id === id ? { ...metric, value, timestamp: 'Just now' } : metric
    ));
    
    toast({
      title: "Health metric updated",
      description: "Your health data has been saved",
    });
  };
  
  const addMetric = (metric: Omit<HealthMetric, 'id' | 'timestamp'>) => {
    const newId = `metric-${Date.now()}`;
    setMetrics(prev => [...prev, { 
      ...metric, 
      id: newId, 
      timestamp: 'Just now' 
    }]);
    
    toast({
      title: "New health metric added",
      description: `${metric.name} has been added to your health records`,
    });
  };
  
  const addMedicalRecord = (record: string) => {
    setMedicalHistory(prev => [record, ...prev]);
    toast({
      title: "Medical record added",
      description: "Your medical history has been updated",
    });
  };
  
  const analyzeSymptoms = () => {
    if (!symptoms.trim()) {
      toast({
        title: "Input required",
        description: "Please describe your symptoms first",
        variant: "destructive",
      });
      return;
    }
    
    // Mock API call to analyze symptoms
    setTimeout(() => {
      // This is a mock response - in a real app, this would come from an AI model
      const mockResponse = {
        title: "Possible Flu or Common Cold",
        description: "Your symptoms suggest you may have a viral infection like the flu or a common cold.",
        severity: "medium",
        recommendations: [
          "Rest and stay hydrated",
          "Take over-the-counter pain relievers for fever and aches",
          "Monitor your temperature",
          "Use a humidifier if available"
        ],
        seekMedicalHelp: true,
        timeframe: "If symptoms persist beyond 3 days or worsen"
      };
      
      setHealthAdvice(mockResponse);
      
      toast({
        title: "Symptoms analyzed",
        description: "Health recommendations are ready",
      });
    }, 2000);
  };

  return (
    <HealthContext.Provider 
      value={{ 
        metrics, 
        updateMetric, 
        addMetric,
        lastCheckupDate,
        medicalHistory,
        addMedicalRecord,
        symptoms,
        setSymptoms,
        healthAdvice,
        analyzeSymptoms
      }}
    >
      {children}
    </HealthContext.Provider>
  );
};

export const useHealth = (): HealthContextType => {
  const context = useContext(HealthContext);
  if (context === undefined) {
    throw new Error('useHealth must be used within a HealthProvider');
  }
  return context;
};
