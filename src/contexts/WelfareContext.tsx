
import React, { createContext, useContext, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export interface Scheme {
  id: string;
  title: string;
  description: string;
  category: 'health' | 'education' | 'housing' | 'agriculture' | 'employment';
  eligibility: string[];
  deadline: string | null;
  status: 'eligible' | 'pending' | 'applied';
  documentRequired: string[];
}

interface WelfareContextType {
  schemes: Scheme[];
  appliedSchemes: string[];
  applyForScheme: (schemeId: string) => void;
  checkEligibility: (schemeId: string) => void;
  searchSchemes: (query: string) => Scheme[];
  filterSchemesByCategory: (category: string) => Scheme[];
}

const WelfareContext = createContext<WelfareContextType | undefined>(undefined);

export const WelfareProvider = ({ children }: { children: React.ReactNode }) => {
  const { toast } = useToast();
  const [schemes, setSchemes] = useState<Scheme[]>([
    {
      id: 'pm-kisan',
      title: 'PM-KISAN',
      description: 'Direct income support of ₹6,000 per year to farmer families',
      category: 'agriculture',
      eligibility: ['Small and marginal farmers', 'Family with landholding up to 2 hectares'],
      deadline: '2023-12-31',
      status: 'eligible',
      documentRequired: ['Aadhaar Card', 'Land Records', 'Bank Account Details']
    },
    {
      id: 'ayushman-bharat',
      title: 'Ayushman Bharat',
      description: 'Health insurance coverage of ₹5 lakh per family per year',
      category: 'health',
      eligibility: ['Low income families', 'Based on SECC database'],
      deadline: null,
      status: 'applied',
      documentRequired: ['Aadhaar Card', 'Income Certificate', 'Family ID']
    },
    {
      id: 'pmay-g',
      title: 'Pradhan Mantri Awaas Yojana - Gramin',
      description: 'Financial assistance for construction of pucca house',
      category: 'housing',
      eligibility: ['Rural homeless', 'Those living in kutcha/dilapidated houses'],
      deadline: '2023-10-15',
      status: 'pending',
      documentRequired: ['Aadhaar Card', 'Land Documents', 'BPL Certificate']
    },
    {
      id: 'sukanya-samriddhi',
      title: 'Sukanya Samriddhi Yojana',
      description: 'Savings scheme for girl child education and marriage expenses',
      category: 'education',
      eligibility: ['Girl child below 10 years'],
      deadline: null,
      status: 'eligible',
      documentRequired: ['Girl\'s Birth Certificate', 'Guardian\'s ID Proof', 'Guardian\'s Address Proof']
    },
    {
      id: 'pmkvy',
      title: 'Pradhan Mantri Kaushal Vikas Yojana',
      description: 'Skill development training and certification',
      category: 'employment',
      eligibility: ['Age between 15-45 years', 'Minimum education: Class 5'],
      deadline: '2023-11-30',
      status: 'eligible',
      documentRequired: ['Aadhaar Card', 'Education Certificate', 'Bank Account Details']
    }
  ]);
  
  const [appliedSchemes, setAppliedSchemes] = useState<string[]>(['ayushman-bharat']);
  
  const applyForScheme = (schemeId: string) => {
    setAppliedSchemes(prev => [...prev, schemeId]);
    
    setSchemes(prev => prev.map(scheme => 
      scheme.id === schemeId ? { ...scheme, status: 'applied' } : scheme
    ));
    
    toast({
      title: "Application Submitted",
      description: "Your application has been submitted successfully",
    });
  };
  
  const checkEligibility = (schemeId: string) => {
    // In a real app, this would check eligibility based on user profile
    setSchemes(prev => prev.map(scheme => 
      scheme.id === schemeId 
        ? { ...scheme, status: Math.random() > 0.3 ? 'eligible' : 'pending' } 
        : scheme
    ));
    
    toast({
      title: "Eligibility Checked",
      description: "Your eligibility status has been updated",
    });
  };
  
  const searchSchemes = (query: string): Scheme[] => {
    if (!query.trim()) return schemes;
    
    return schemes.filter(scheme => 
      scheme.title.toLowerCase().includes(query.toLowerCase()) ||
      scheme.description.toLowerCase().includes(query.toLowerCase()) ||
      scheme.category.toLowerCase().includes(query.toLowerCase())
    );
  };
  
  const filterSchemesByCategory = (category: string): Scheme[] => {
    if (!category || category === 'all') return schemes;
    
    return schemes.filter(scheme => scheme.category === category);
  };

  return (
    <WelfareContext.Provider
      value={{
        schemes,
        appliedSchemes,
        applyForScheme,
        checkEligibility,
        searchSchemes,
        filterSchemesByCategory
      }}
    >
      {children}
    </WelfareContext.Provider>
  );
};

export const useWelfare = (): WelfareContextType => {
  const context = useContext(WelfareContext);
  if (context === undefined) {
    throw new Error('useWelfare must be used within a WelfareProvider');
  }
  return context;
};
