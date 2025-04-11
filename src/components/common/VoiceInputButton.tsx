
import React, { useState } from 'react';
import { Mic, MicOff, Loader } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VoiceInputButtonProps {
  onVoiceInput: (text: string) => void;
  className?: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
}

const VoiceInputButton = ({ 
  onVoiceInput, 
  className,
  variant = 'outline' 
}: VoiceInputButtonProps) => {
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const startListening = () => {
    setIsListening(true);
    
    // Mock voice recognition implementation
    // In a real app, we would use the Web Speech API
    setTimeout(() => {
      setIsListening(false);
      setIsProcessing(true);
      
      setTimeout(() => {
        setIsProcessing(false);
        // Simulate receiving voice input
        onVoiceInput("I have a fever and body ache since yesterday");
      }, 1500);
    }, 3000);
  };

  const stopListening = () => {
    setIsListening(false);
  };

  return (
    <Button
      variant={variant}
      className={`relative ${className}`}
      onClick={isListening ? stopListening : startListening}
      disabled={isProcessing}
    >
      {isProcessing ? (
        <Loader className="h-5 w-5 animate-spin" />
      ) : isListening ? (
        <>
          <MicOff className="h-5 w-5 mr-2" />
          <span>Stop Listening</span>
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse"></span>
        </>
      ) : (
        <>
          <Mic className="h-5 w-5 mr-2" />
          <span>Speak Now</span>
        </>
      )}
    </Button>
  );
};

export default VoiceInputButton;
