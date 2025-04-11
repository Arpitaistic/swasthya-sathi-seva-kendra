
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  MapPin, 
  FileText, 
  Shield, 
  Save, 
  Camera 
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();
  
  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile information has been saved successfully",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-swasthya-text mb-2">My Profile</h1>
              <p className="text-swasthya-text-light">
                Manage your personal information and settings
              </p>
            </div>
            
            <div className="mt-4 lg:mt-0">
              {isEditing ? (
                <div className="flex space-x-4">
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    Cancel
                  </Button>
                  <Button className="btn-primary" onClick={handleSave}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              ) : (
                <Button className="btn-primary" onClick={() => setIsEditing(true)}>
                  Edit Profile
                </Button>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
                <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
                
                <div className="flex flex-col md:flex-row items-start md:items-center mb-8">
                  <div className="relative mb-4 md:mb-0 md:mr-6">
                    <div className="h-24 w-24 rounded-full bg-swasthya-primary/10 flex items-center justify-center">
                      <User className="h-12 w-12 text-swasthya-primary" />
                    </div>
                    {isEditing && (
                      <button className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-swasthya-primary flex items-center justify-center shadow-md">
                        <Camera className="h-4 w-4 text-white" />
                      </button>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold">Ramesh Kumar</h3>
                    <p className="text-swasthya-text-light">Male, 45 years</p>
                    <div className="flex items-center mt-2">
                      <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm text-green-600">Profile Complete</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-swasthya-text-light mb-1">
                      Full Name
                    </label>
                    {isEditing ? (
                      <Input defaultValue="Ramesh Kumar" />
                    ) : (
                      <div className="flex items-center py-2">
                        <User className="h-4 w-4 text-swasthya-text-light mr-2" />
                        <span>Ramesh Kumar</span>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-swasthya-text-light mb-1">
                      Email Address
                    </label>
                    {isEditing ? (
                      <Input defaultValue="ramesh.kumar@example.com" />
                    ) : (
                      <div className="flex items-center py-2">
                        <Mail className="h-4 w-4 text-swasthya-text-light mr-2" />
                        <span>ramesh.kumar@example.com</span>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-swasthya-text-light mb-1">
                      Phone Number
                    </label>
                    {isEditing ? (
                      <Input defaultValue="+91 98765 43210" />
                    ) : (
                      <div className="flex items-center py-2">
                        <Phone className="h-4 w-4 text-swasthya-text-light mr-2" />
                        <span>+91 98765 43210</span>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-swasthya-text-light mb-1">
                      Date of Birth
                    </label>
                    {isEditing ? (
                      <Input defaultValue="1978-05-15" type="date" />
                    ) : (
                      <div className="flex items-center py-2">
                        <Calendar className="h-4 w-4 text-swasthya-text-light mr-2" />
                        <span>15 May 1978</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-swasthya-text-light mb-1">
                      Home Address
                    </label>
                    {isEditing ? (
                      <Textarea defaultValue="123 Village Road, Udaipur District, Rajasthan - 313001" />
                    ) : (
                      <div className="flex items-start py-2">
                        <MapPin className="h-4 w-4 text-swasthya-text-light mr-2 mt-0.5" />
                        <span>123 Village Road, Udaipur District, Rajasthan - 313001</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
                <h2 className="text-2xl font-semibold mb-6">Health Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-swasthya-text-light mb-1">
                      Blood Group
                    </label>
                    {isEditing ? (
                      <select className="input-field w-full">
                        <option>O+</option>
                        <option>O-</option>
                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                      </select>
                    ) : (
                      <div className="py-2">O+</div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-swasthya-text-light mb-1">
                      Height
                    </label>
                    {isEditing ? (
                      <div className="flex items-center space-x-2">
                        <Input defaultValue="165" />
                        <span>cm</span>
                      </div>
                    ) : (
                      <div className="py-2">165 cm</div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-swasthya-text-light mb-1">
                      Weight
                    </label>
                    {isEditing ? (
                      <div className="flex items-center space-x-2">
                        <Input defaultValue="72" />
                        <span>kg</span>
                      </div>
                    ) : (
                      <div className="py-2">72 kg</div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-swasthya-text-light mb-1">
                      Allergies
                    </label>
                    {isEditing ? (
                      <Input defaultValue="Peanuts, Penicillin" />
                    ) : (
                      <div className="py-2">Peanuts, Penicillin</div>
                    )}
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-swasthya-text-light mb-1">
                      Current Medications
                    </label>
                    {isEditing ? (
                      <Textarea defaultValue="Metformin 500mg (Twice daily), Atorvastatin 10mg (Once daily)" />
                    ) : (
                      <div className="py-2">Metformin 500mg (Twice daily), Atorvastatin 10mg (Once daily)</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
                <h2 className="text-xl font-semibold mb-4">Documents</h2>
                
                <div className="space-y-4">
                  <div className="p-3 border rounded-lg flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-swasthya-primary mr-3" />
                      <div>
                        <div className="font-medium">Aadhaar Card</div>
                        <div className="text-xs text-swasthya-text-light">Uploaded 3 months ago</div>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">View</Button>
                  </div>
                  
                  <div className="p-3 border rounded-lg flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-swasthya-primary mr-3" />
                      <div>
                        <div className="font-medium">Health Card</div>
                        <div className="text-xs text-swasthya-text-light">Uploaded 2 months ago</div>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">View</Button>
                  </div>
                  
                  <div className="p-3 border rounded-lg flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-swasthya-primary mr-3" />
                      <div>
                        <div className="font-medium">Recent Medical Report</div>
                        <div className="text-xs text-swasthya-text-light">Uploaded 2 weeks ago</div>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">View</Button>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-4">
                  + Upload New Document
                </Button>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
                <h2 className="text-xl font-semibold mb-4">Privacy & Security</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-swasthya-primary mr-3" />
                      <span>Two-Factor Authentication</span>
                    </div>
                    <div className="h-6 w-12 rounded-full p-1 bg-gray-300"
                      onClick={() => {
                        toast({
                          title: "Coming Soon",
                          description: "This feature will be available in future updates",
                        });
                      }}
                    >
                      <div className="h-4 w-4 rounded-full bg-white"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-swasthya-primary mr-3" />
                      <span>Data Sharing Consent</span>
                    </div>
                    <div className="h-6 w-12 rounded-full p-1 bg-swasthya-primary"
                      onClick={() => {
                        toast({
                          title: "Data Sharing Updated",
                          description: "Your data sharing preferences have been updated",
                        });
                      }}
                    >
                      <div className="h-4 w-4 rounded-full bg-white transform translate-x-6"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-swasthya-primary mr-3" />
                      <span>Offline Access</span>
                    </div>
                    <div className="h-6 w-12 rounded-full p-1 bg-swasthya-primary"
                      onClick={() => {
                        toast({
                          title: "Offline Access Updated",
                          description: "Your offline access preferences have been updated",
                        });
                      }}
                    >
                      <div className="h-4 w-4 rounded-full bg-white transform translate-x-6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
