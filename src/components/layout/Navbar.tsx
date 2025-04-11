
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Bell, User, HelpCircle, MicIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '../common/LanguageSwitcher';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-3 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-swasthya-primary animate-pulse-gentle">स्वास्थ्य</span>
          <span className="text-xl font-semibold text-swasthya-accent">साथी</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/health" className="nav-link">Health Assistant</Link>
          <Link to="/emergency" className="nav-link">Emergency</Link>
          <Link to="/welfare" className="nav-link">Welfare Schemes</Link>
          <Link to="/profile" className="nav-link">Profile</Link>
          <LanguageSwitcher />
          
          <Button variant="ghost" className="p-2" aria-label="Voice command">
            <MicIcon className="h-5 w-5 text-swasthya-primary" />
          </Button>
          
          <Button variant="ghost" className="p-2" aria-label="Notifications">
            <Bell className="h-5 w-5 text-swasthya-text-light" />
          </Button>
          
          <Button variant="ghost" className="p-2" aria-label="Profile">
            <User className="h-5 w-5 text-swasthya-text-light" />
          </Button>
          
          <Button variant="ghost" className="p-2" aria-label="Help">
            <HelpCircle className="h-5 w-5 text-swasthya-text-light" />
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <Button variant="ghost" className="p-2" aria-label="Voice command">
            <MicIcon className="h-5 w-5 text-swasthya-primary" />
          </Button>
          
          <Button 
            variant="ghost" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-swasthya-text" />
            ) : (
              <Menu className="h-6 w-6 text-swasthya-text" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link 
              to="/health" 
              className="nav-link p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Health Assistant
            </Link>
            <Link 
              to="/emergency" 
              className="nav-link p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Emergency
            </Link>
            <Link 
              to="/welfare" 
              className="nav-link p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Welfare Schemes
            </Link>
            <Link 
              to="/profile" 
              className="nav-link p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Profile
            </Link>
            
            <div className="flex items-center justify-between pt-2 border-t border-gray-100">
              <LanguageSwitcher />
              
              <div className="flex space-x-4">
                <Button variant="ghost" className="p-2" aria-label="Notifications">
                  <Bell className="h-5 w-5 text-swasthya-text-light" />
                </Button>
                
                <Button variant="ghost" className="p-2" aria-label="Profile">
                  <User className="h-5 w-5 text-swasthya-text-light" />
                </Button>
                
                <Button variant="ghost" className="p-2" aria-label="Help">
                  <HelpCircle className="h-5 w-5 text-swasthya-text-light" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
