
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bell, User, HelpCircle, MicIcon, HomeIcon, HeartPulse, Shield, FileTextIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { motion } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if current route is active
  const isActive = (path: string) => location.pathname === path;

  const NavItem = ({ to, children }: { to: string, children: React.ReactNode }) => (
    <Link 
      to={to} 
      className={`relative px-3 py-2 transition-all duration-300 ${isActive(to) 
        ? 'text-swasthya-primary font-medium' 
        : 'text-gray-700 hover:text-swasthya-primary'}`}
    >
      <span className="relative z-10">{children}</span>
      {isActive(to) && (
        <motion.span 
          className="absolute inset-0 bg-swasthya-primary/10 rounded-full -z-0"
          layoutId="navIndicator"
          transition={{ type: 'spring', duration: 0.5 }}
        />
      )}
    </Link>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' 
          : 'bg-white py-3'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-swasthya-primary to-swasthya-accent bg-clip-text text-transparent animate-pulse-gentle">स्वास्थ्य</span>
            <span className="text-xl font-semibold text-swasthya-text">साथी</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavItem to="/health">
                    <div className="flex items-center space-x-1">
                      <HeartPulse className="h-4 w-4" />
                      <span>Health</span>
                    </div>
                  </NavItem>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavItem to="/emergency">
                    <div className="flex items-center space-x-1">
                      <Shield className="h-4 w-4" />
                      <span>Emergency</span>
                    </div>
                  </NavItem>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavItem to="/welfare">
                    <div className="flex items-center space-x-1">
                      <FileTextIcon className="h-4 w-4" />
                      <span>Welfare</span>
                    </div>
                  </NavItem>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavItem to="/profile">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>Profile</span>
                    </div>
                  </NavItem>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="flex items-center space-x-2 ml-4">
              <LanguageSwitcher />
              
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="icon" className="rounded-full bg-swasthya-primary/10 text-swasthya-primary" aria-label="Voice command">
                  <MicIcon className="h-4 w-4" />
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="icon" className="rounded-full" aria-label="Notifications">
                  <Bell className="h-4 w-4 text-swasthya-text-light" />
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="icon" className="rounded-full" aria-label="Help">
                  <HelpCircle className="h-4 w-4 text-swasthya-text-light" />
                </Button>
              </motion.div>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="rounded-full bg-swasthya-primary/10 text-swasthya-primary" aria-label="Voice command">
              <MicIcon className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="rounded-full"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-swasthya-text" />
              ) : (
                <Menu className="h-5 w-5 text-swasthya-text" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white border-t border-gray-100 py-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link 
              to="/health" 
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-swasthya-primary/5"
              onClick={() => setIsMenuOpen(false)}
            >
              <HeartPulse className="h-5 w-5 text-swasthya-primary" />
              <span>Health Assistant</span>
            </Link>
            <Link 
              to="/emergency" 
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-swasthya-primary/5"
              onClick={() => setIsMenuOpen(false)}
            >
              <Shield className="h-5 w-5 text-swasthya-secondary" />
              <span>Emergency</span>
            </Link>
            <Link 
              to="/welfare" 
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-swasthya-primary/5"
              onClick={() => setIsMenuOpen(false)}
            >
              <FileTextIcon className="h-5 w-5 text-swasthya-accent" />
              <span>Welfare Schemes</span>
            </Link>
            <Link 
              to="/profile" 
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-swasthya-primary/5"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="h-5 w-5 text-swasthya-text" />
              <span>Profile</span>
            </Link>
            
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <LanguageSwitcher />
              
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="rounded-full" aria-label="Notifications">
                  <Bell className="h-5 w-5 text-swasthya-text-light" />
                </Button>
                
                <Button variant="ghost" size="icon" className="rounded-full" aria-label="Help">
                  <HelpCircle className="h-5 w-5 text-swasthya-text-light" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
