
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  FileText, 
  Search, 
  Filter, 
  CheckCircle, 
  AlertCircle,
  Calendar,
  Users
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Scheme {
  id: string;
  title: string;
  description: string;
  category: 'health' | 'education' | 'housing' | 'agriculture' | 'employment';
  eligibility: string[];
  deadline: string | null;
  status: 'eligible' | 'pending' | 'applied';
  documentRequired: string[];
}

const SchemesList = () => {
  const [searchQuery, setSearchQuery] = useState('');
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
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'health':
        return 'bg-green-100 text-green-800';
      case 'education':
        return 'bg-blue-100 text-blue-800';
      case 'housing':
        return 'bg-purple-100 text-purple-800';
      case 'agriculture':
        return 'bg-yellow-100 text-yellow-800';
      case 'employment':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'eligible':
        return <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">Eligible</Badge>;
      case 'pending':
        return <Badge variant="outline" className="bg-yellow-50 text-yellow-600 border-yellow-200">Check Eligibility</Badge>;
      case 'applied':
        return <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">Applied</Badge>;
      default:
        return null;
    }
  };
  
  const filteredSchemes = schemes.filter(scheme => 
    scheme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    scheme.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    scheme.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-6">Government Welfare Schemes</h2>
      
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            placeholder="Search schemes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Button variant="outline" className="flex items-center">
          <Filter className="h-5 w-5 mr-2" />
          Filter Schemes
        </Button>
      </div>
      
      <div className="space-y-6">
        {filteredSchemes.length > 0 ? (
          filteredSchemes.map(scheme => (
            <div 
              key={scheme.id} 
              className="border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-center justify-between bg-gray-50 px-4 py-3 border-b">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-swasthya-primary mr-2" />
                  <h3 className="font-semibold">{scheme.title}</h3>
                </div>
                {getStatusBadge(scheme.status)}
              </div>
              
              <div className="p-4">
                <p className="text-swasthya-text-light mb-4">{scheme.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className={getCategoryColor(scheme.category)}>
                    {scheme.category.charAt(0).toUpperCase() + scheme.category.slice(1)}
                  </Badge>
                  
                  {scheme.deadline && (
                    <div className="flex items-center text-xs text-swasthya-text-light">
                      <Calendar className="h-3 w-3 mr-1" />
                      Deadline: {new Date(scheme.deadline).toLocaleDateString()}
                    </div>
                  )}
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="h-4 w-4 text-swasthya-primary mr-2" />
                    <span className="text-sm font-medium">Eligibility Criteria</span>
                  </div>
                  <ul className="pl-6 list-disc text-sm text-swasthya-text-light space-y-1">
                    {scheme.eligibility.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <AlertCircle className="h-4 w-4 text-swasthya-primary mr-2" />
                    <span className="text-sm font-medium">Documents Required</span>
                  </div>
                  <ul className="pl-6 list-disc text-sm text-swasthya-text-light space-y-1">
                    {scheme.documentRequired.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-4 flex justify-end">
                  {scheme.status === 'eligible' && (
                    <Button className="btn-primary">Apply Now</Button>
                  )}
                  {scheme.status === 'pending' && (
                    <Button variant="outline">Check Eligibility</Button>
                  )}
                  {scheme.status === 'applied' && (
                    <Button variant="outline">View Application Status</Button>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <FileText className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium mb-2">No schemes found</h3>
            <p className="text-swasthya-text-light">Try different search terms or check all available schemes.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SchemesList;
