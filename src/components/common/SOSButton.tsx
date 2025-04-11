
import React, { useState, useEffect } from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useEmergency } from '@/contexts/EmergencyContext';

interface SOSButtonProps {
  className?: string;
}

const SOSButton = ({ className }: SOSButtonProps) => {
  const { isSOSActive, triggerSOS, cancelSOS } = useEmergency();
  const [activationTimer, setActivationTimer] = useState<number | null>(null);

  const handleSOS = () => {
    if (isSOSActive) {
      // Cancel SOS
      if (activationTimer) {
        clearTimeout(activationTimer);
        setActivationTimer(null);
      }
      cancelSOS();
    } else {
      // Activate SOS with confirmation countdown
      const timer = window.setTimeout(() => {
        triggerSOS();
        setActivationTimer(null);
      }, 5000);
      
      setActivationTimer(timer);
    }
  };

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      if (activationTimer) {
        clearTimeout(activationTimer);
      }
    };
  }, [activationTimer]);

  return (
    <Button
      variant="destructive"
      size="lg"
      onClick={handleSOS}
      className={cn(
        "transition-all duration-300 font-bold text-lg",
        isSOSActive 
          ? "bg-green-600 hover:bg-green-700 animate-pulse-gentle" 
          : "bg-red-600 hover:bg-red-700",
        className
      )}
    >
      {isSOSActive ? (
        <>
          <CheckCircle className="mr-2 h-5 w-5" />
          <span>CANCEL SOS</span>
        </>
      ) : (
        <>
          <AlertTriangle className="mr-2 h-5 w-5" />
          <span>SOS EMERGENCY</span>
        </>
      )}
    </Button>
  );
};

export default SOSButton;
