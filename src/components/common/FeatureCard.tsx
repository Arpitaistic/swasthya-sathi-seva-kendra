
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
  onClick?: () => void;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  className,
  iconClassName,
  onClick,
}: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "feature-card flex flex-col items-center text-center cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <div className={cn(
        "p-3 rounded-full bg-swasthya-primary/10 text-swasthya-primary mb-4",
        iconClassName
      )}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-swasthya-text-light">{description}</p>
    </div>
  );
};

export default FeatureCard;
