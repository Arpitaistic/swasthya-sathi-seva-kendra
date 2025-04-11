
import React, { useState } from 'react';
import { 
  Activity, 
  Heart, 
  Thermometer, 
  Droplets, 
  Scale, 
  TrendingUp, 
  TrendingDown, 
  Minus 
} from 'lucide-react';
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { cn } from '@/lib/utils';

interface HealthMetric {
  id: string;
  name: string;
  value: string | number;
  unit: string;
  icon: React.ElementType;
  status: 'normal' | 'high' | 'low' | 'none';
  timestamp: string;
}

const HealthMetrics = () => {
  const [metrics, setMetrics] = useState<HealthMetric[]>([
    {
      id: 'bp',
      name: 'Blood Pressure',
      value: '120/80',
      unit: 'mmHg',
      icon: Activity,
      status: 'normal',
      timestamp: '2 days ago'
    },
    {
      id: 'pulse',
      name: 'Pulse',
      value: 72,
      unit: 'bpm',
      icon: Heart,
      status: 'normal',
      timestamp: '2 days ago'
    },
    {
      id: 'temp',
      name: 'Temperature',
      value: 98.6,
      unit: '°F',
      icon: Thermometer,
      status: 'normal',
      timestamp: '2 days ago'
    },
    {
      id: 'glucose',
      name: 'Blood Glucose',
      value: 110,
      unit: 'mg/dL',
      icon: Droplets,
      status: 'high',
      timestamp: '1 week ago'
    },
    {
      id: 'weight',
      name: 'Weight',
      value: 68,
      unit: 'kg',
      icon: Scale,
      status: 'none',
      timestamp: '1 month ago'
    }
  ]);
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'high':
        return <TrendingUp className="h-4 w-4 text-swasthya-danger" />;
      case 'low':
        return <TrendingDown className="h-4 w-4 text-swasthya-warning" />;
      case 'normal':
        return <Minus className="h-4 w-4 text-swasthya-success" />;
      default:
        return null;
    }
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'high':
        return 'text-swasthya-danger border-swasthya-danger/20 bg-swasthya-danger/5';
      case 'low':
        return 'text-swasthya-warning border-swasthya-warning/20 bg-swasthya-warning/5';
      case 'normal':
        return 'text-swasthya-success border-swasthya-success/20 bg-swasthya-success/5';
      default:
        return 'text-swasthya-text-light border-gray-200 bg-gray-50';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Your Health Metrics</h2>
        <button className="text-swasthya-primary hover:text-swasthya-primary-dark transition-colors text-sm font-medium">
          + Add New Measurement
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <Card 
              key={metric.id}
              className={cn(
                "border transition-all duration-300 hover:shadow-md",
                metric.status !== 'none' && getStatusColor(metric.status)
              )}
            >
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-swasthya-primary/10 mr-3">
                      <Icon className="h-5 w-5 text-swasthya-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{metric.name}</h3>
                      <p className="text-2xl font-semibold">
                        {metric.value} <span className="text-sm font-normal text-swasthya-text-light">{metric.unit}</span>
                      </p>
                    </div>
                  </div>
                  
                  {metric.status !== 'none' && (
                    <div className="flex items-center">
                      {getStatusIcon(metric.status)}
                    </div>
                  )}
                </div>
                
                <div className="mt-2 text-xs text-swasthya-text-light">
                  Last updated: {metric.timestamp}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default HealthMetrics;
