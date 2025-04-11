
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
];

export const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
    // Here you would implement the actual language change logic
    console.log(`Language changed to ${language.name}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center space-x-1">
          <Globe className="h-5 w-5 text-swasthya-text-light" />
          <span className="text-sm font-medium">{currentLanguage.nativeName}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-white">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language)}
            className={`${
              currentLanguage.code === language.code ? 'bg-swasthya-primary/10 text-swasthya-primary' : ''
            } cursor-pointer`}
          >
            <div className="flex items-center">
              <span className="ml-2">
                {language.nativeName} {language.name !== language.nativeName && `(${language.name})`}
              </span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
