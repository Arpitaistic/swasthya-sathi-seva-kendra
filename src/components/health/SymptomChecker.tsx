
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { 
  Search, 
  Clock, 
  Activity, 
  ArrowRight, 
  AlertCircle, 
  CheckCircle,
  Loader
} from 'lucide-react';
import VoiceInputButton from '../common/VoiceInputButton';
import { useHealth } from '@/contexts/HealthContext';

type Severity = 'low' | 'medium' | 'high' | null;

const SymptomChecker = () => {
  const { symptoms, setSymptoms, healthAdvice, analyzeSymptoms } = useHealth();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  const handleVoiceInput = (text: string) => {
    setSymptoms(text);
  };
  
  const handleAnalyzeSymptoms = () => {
    setIsAnalyzing(true);
    analyzeSymptoms();
    setTimeout(() => setIsAnalyzing(false), 2000);
  };
  
  const getSeverityColor = (severity: Severity) => {
    switch (severity) {
      case 'low': return 'text-swasthya-success';
      case 'medium': return 'text-swasthya-warning';
      case 'high': return 'text-swasthya-danger';
      default: return '';
    }
  };
  
  const getSeverityBg = (severity: Severity) => {
    switch (severity) {
      case 'low': return 'bg-swasthya-success/10';
      case 'medium': return 'bg-swasthya-warning/10';
      case 'high': return 'bg-swasthya-danger/10';
      default: return '';
    }
  };
  
  const resetChecker = () => {
    setSymptoms('');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-4">Health Symptom Checker</h2>
      
      {!healthAdvice ? (
        <>
          <p className="text-swasthya-text-light mb-6">
            Describe your symptoms in detail to get personalized health guidance.
            Include when they started and any relevant health history.
          </p>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="symptoms" className="block text-sm font-medium mb-1">
                Your Symptoms
              </label>
              <Textarea
                id="symptoms"
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                placeholder="Describe how you're feeling (e.g., I've had a headache and fever since yesterday)"
                className="w-full h-32"
              />
            </div>
            
            <div className="flex space-x-4">
              <VoiceInputButton onVoiceInput={handleVoiceInput} className="flex-grow md:flex-grow-0" />
              
              <Button 
                onClick={handleAnalyzeSymptoms} 
                disabled={isAnalyzing}
                className="btn-primary flex-grow md:flex-grow-0"
              >
                {isAnalyzing ? (
                  <>
                    <Loader className="h-5 w-5 mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Search className="h-5 w-5 mr-2" />
                    Check Symptoms
                  </>
                )}
              </Button>
            </div>
            
            <div className="mt-4 p-4 bg-swasthya-primary/5 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-6 w-6 text-swasthya-primary mt-0.5" />
                <p className="text-sm text-swasthya-text-light">
                  <span className="font-semibold block text-swasthya-text">Important Note:</span>
                  This tool provides general guidance only and is not a substitute for professional 
                  medical advice. Always consult a healthcare provider for serious symptoms.
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="space-y-6 animate-fade-in">
          <div className={`p-4 rounded-lg ${getSeverityBg(healthAdvice.severity)}`}>
            <h3 className={`text-xl font-semibold mb-2 ${getSeverityColor(healthAdvice.severity)}`}>
              {healthAdvice.title}
            </h3>
            <p className="text-swasthya-text-light">{healthAdvice.description}</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2 flex items-center">
              <CheckCircle className="h-5 w-5 text-swasthya-success mr-2" />
              Recommendations
            </h4>
            <ul className="space-y-2 pl-7 list-disc">
              {healthAdvice.recommendations.map((rec, index) => (
                <li key={index} className="text-swasthya-text-light">{rec}</li>
              ))}
            </ul>
          </div>
          
          {healthAdvice.seekMedicalHelp && (
            <div className="p-4 bg-swasthya-primary/5 rounded-lg">
              <h4 className="font-semibold mb-1 flex items-center">
                <AlertCircle className="h-5 w-5 text-swasthya-primary mr-2" />
                Seek Medical Help
              </h4>
              {healthAdvice.timeframe && (
                <p className="text-swasthya-text-light flex items-center">
                  <Clock className="h-4 w-4 text-swasthya-text-light mr-2" />
                  {healthAdvice.timeframe}
                </p>
              )}
            </div>
          )}
          
          <div className="flex space-x-4">
            <Button onClick={resetChecker} variant="outline">
              Check New Symptoms
            </Button>
            
            <Button className="btn-primary">
              Save to Health Record
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SymptomChecker;
