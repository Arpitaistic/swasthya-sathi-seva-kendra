import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full overflow-hidden"
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: theme === 'dark' ? 45 : 0,
          scale: theme === 'dark' ? 0 : 1 
        }}
        transition={{ duration: 0.5, ease: "anticipate" }}
        className={`absolute inset-0 flex items-center justify-center ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}
      >
        <Sun className="h-5 w-5 text-amber-500" />
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{ 
          rotate: theme === 'light' ? -45 : 0,
          scale: theme === 'light' ? 0 : 1 
        }}
        transition={{ duration: 0.5, ease: "anticipate" }}
        className={`absolute inset-0 flex items-center justify-center ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
      >
        <Moon className="h-5 w-5 text-indigo-300" />
      </motion.div>
      
      <div className="w-5 h-5 opacity-0">
        {/* This keeps the button size consistent */}
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
