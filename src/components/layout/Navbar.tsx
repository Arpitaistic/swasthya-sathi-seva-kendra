
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bell, User, HelpCircle, MicIcon, HomeIcon, HeartPulse, Shield, FileTextIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import ThemeToggle from '../common/ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';
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
        : 'text-gray-700 hover:text-swasthya-primary dark:text-gray-300 dark:hover:text-swasthya-primary'}`}
    >
      <span className="relative z-10">{children}</span>
      {isActive(to) && (
        <motion.span 
          className="absolute inset-0 bg-swasthya-primary/10 dark:bg-swasthya-primary/20 rounded-full -z-0"
          layoutId="navIndicator"
          transition={{ type: 'spring', duration: 0.5 }}
        />
      )}
    </Link>
  );

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0, overflow: 'hidden' },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { 
        duration: 0.3,
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 } 
    },
    exit: { 
      opacity: 0, 
      x: -20,
      transition: { duration: 0.2 } 
    }
  };

  return (
    <motion.nav
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 shadow-sm py-2' 
          : 'bg-white dark:bg-gray-900 py-3'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <motion.span 
              className="text-2xl font-bold bg-gradient-to-r from-swasthya-primary to-swasthya-accent bg-clip-text text-transparent"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                repeatType: "reverse", 
                ease: "easeInOut" 
              }}
            >
              स्वास्थ्य
            </motion.span>
            <span className="text-xl font-semibold text-swasthya-text dark:text-white">साथी</span>
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
            
            <div className="flex items-center space-x-3 ml-4">
              <LanguageSwitcher />
              
              <ThemeToggle />
              
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="icon" className="rounded-full bg-swasthya-primary/10 text-swasthya-primary dark:bg-swasthya-primary/20" aria-label="Voice command">
                  <MicIcon className="h-4 w-4" />
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="icon" className="rounded-full dark:text-gray-400" aria-label="Notifications">
                  <Bell className="h-4 w-4 text-swasthya-text-light" />
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="icon" className="rounded-full dark:text-gray-400" aria-label="Help">
                  <HelpCircle className="h-4 w-4 text-swasthya-text-light" />
                </Button>
              </motion.div>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            
            <Button variant="ghost" size="icon" className="rounded-full bg-swasthya-primary/10 text-swasthya-primary dark:bg-swasthya-primary/20" aria-label="Voice command">
              <MicIcon className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="rounded-full dark:text-white"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-4"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <motion.div variants={itemVariants}>
                <Link 
                  to="/health" 
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-swasthya-primary/5 dark:hover:bg-swasthya-primary/10 text-swasthya-text dark:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <HeartPulse className="h-5 w-5 text-swasthya-primary" />
                  <span>Health Assistant</span>
                </Link>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Link 
                  to="/emergency" 
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-swasthya-primary/5 dark:hover:bg-swasthya-primary/10 text-swasthya-text dark:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Shield className="h-5 w-5 text-swasthya-secondary" />
                  <span>Emergency</span>
                </Link>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Link 
                  to="/welfare" 
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-swasthya-primary/5 dark:hover:bg-swasthya-primary/10 text-swasthya-text dark:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FileTextIcon className="h-5 w-5 text-swasthya-accent" />
                  <span>Welfare Schemes</span>
                </Link>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Link 
                  to="/profile" 
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-swasthya-primary/5 dark:hover:bg-swasthya-primary/10 text-swasthya-text dark:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-5 w-5 text-swasthya-text dark:text-white" />
                  <span>Profile</span>
                </Link>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                  <LanguageSwitcher />
                  
                  <div className="flex space-x-4">
                    <Button variant="ghost" size="icon" className="rounded-full dark:text-gray-400" aria-label="Notifications">
                      <Bell className="h-5 w-5 text-swasthya-text-light" />
                    </Button>
                    
                    <Button variant="ghost" size="icon" className="rounded-full dark:text-gray-400" aria-label="Help">
                      <HelpCircle className="h-5 w-5 text-swasthya-text-light" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
