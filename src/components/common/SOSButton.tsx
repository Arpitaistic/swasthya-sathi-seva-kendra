
import React, { useState } from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface SOSButtonProps {
  className?: string;
}

const SOSButton = ({ className }: SOSButtonProps) => {
  const [isActivated, setIsActivated] = useState(false);
  const [activationTimer, setActivationTimer] = useState<number | null>(null);
  const { toast } = useToast();

  const handleSOS = () => {
    if (isActivated) {
      // Cancel SOS
      if (activationTimer) {
        clearTimeout(activationTimer);
        setActivationTimer(null);
      }
      setIsActivated(false);
      toast({
        title: "Emergency alert canceled",
        description: "Your emergency alert has been canceled",
        variant: "default",
      });
    } else {
      // Activate SOS with confirmation countdown
      setIsActivated(true);
      toast({
        title: "Emergency mode activating",
        description: "Sending alert in 5 seconds. Tap again to cancel.",
        variant: "destructive",
      });
      
      const timer = window.setTimeout(() => {
        toast({
          title: "Emergency alert sent",
          description: "Your emergency contacts have been notified of your location",
          variant: "destructive",
        });
        // In a real app, we would send the actual emergency alert here
        console.log("Emergency alert sent!");
      }, 5000);
      
      setActivationTimer(timer);
    }
  };

  return (
    <Button
      variant="destructive"
      size="lg"
      onClick={handleSOS}
      className={cn(
        "transition-all duration-300 font-bold text-lg",
        isActivated 
          ? "bg-green-600 hover:bg-green-700 animate-pulse-gentle" 
          : "bg-red-600 hover:bg-red-700",
        className
      )}
    >
      {isActivated ? (
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
