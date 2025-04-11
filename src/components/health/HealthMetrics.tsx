
import React from 'react';
import { 
  Activity, 
  Heart, 
  Thermometer, 
  Droplets, 
  Scale, 
  TrendingUp, 
  TrendingDown, 
  Minus,
  PlusCircle
} from 'lucide-react';
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from '@/lib/utils';
import { useHealth, HealthMetric } from '@/contexts/HealthContext';

const HealthMetrics = () => {
  const { metrics, updateMetric, addMetric } = useHealth();
  const [newMetricName, setNewMetricName] = React.useState('');
  const [newMetricValue, setNewMetricValue] = React.useState('');
  const [newMetricUnit, setNewMetricUnit] = React.useState('');
  
  const getIcon = (metricId: string) => {
    switch (metricId) {
      case 'bp':
        return Activity;
      case 'pulse':
        return Heart;
      case 'temp':
        return Thermometer;
      case 'glucose':
        return Droplets;
      case 'weight':
        return Scale;
      default:
        return Activity;
    }
  };
  
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

  const handleSubmitNewMetric = () => {
    if (newMetricName && newMetricValue && newMetricUnit) {
      addMetric({
        name: newMetricName,
        value: isNaN(Number(newMetricValue)) ? newMetricValue : Number(newMetricValue),
        unit: newMetricUnit,
        icon: Activity,
        status: 'normal'
      });
      
      // Reset form
      setNewMetricName('');
      setNewMetricValue('');
      setNewMetricUnit('');
    }
  };

  const MetricUpdateDialog = ({ metric }: { metric: HealthMetric }) => {
    const [value, setValue] = React.useState(String(metric.value));
    
    const handleUpdate = () => {
      updateMetric(metric.id, isNaN(Number(value)) ? value : Number(value));
    };
    
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" size="sm" className="absolute top-2 right-2 h-8 w-8 p-0">
            <PlusCircle className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update {metric.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="metricValue">New Value</Label>
              <Input
                id="metricValue"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <p className="text-sm text-muted-foreground">Current value: {metric.value} {metric.unit}</p>
            </div>
            <Button onClick={handleUpdate} className="w-full">Save Changes</Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Your Health Metrics</h2>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="text-swasthya-primary hover:text-swasthya-primary-dark transition-colors text-sm font-medium">
              + Add New Measurement
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Health Metric</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="metricName">Metric Name</Label>
                <Input
                  id="metricName"
                  value={newMetricName}
                  onChange={(e) => setNewMetricName(e.target.value)}
                  placeholder="e.g., Blood Oxygen"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="metricValue">Value</Label>
                <Input
                  id="metricValue"
                  value={newMetricValue}
                  onChange={(e) => setNewMetricValue(e.target.value)}
                  placeholder="e.g., 98"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="metricUnit">Unit</Label>
                <Input
                  id="metricUnit"
                  value={newMetricUnit}
                  onChange={(e) => setNewMetricUnit(e.target.value)}
                  placeholder="e.g., %"
                />
              </div>
              <Button onClick={handleSubmitNewMetric} className="w-full">Add Metric</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map((metric) => {
          const Icon = getIcon(metric.id);
          return (
            <Card 
              key={metric.id}
              className={cn(
                "border transition-all duration-300 hover:shadow-md relative",
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
                
                <MetricUpdateDialog metric={metric} />
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default HealthMetrics;
