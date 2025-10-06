'use client';

import { useState } from 'react';

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('ENG');

  const languages = [
    { code: 'ENG', label: 'English' },
    { code: 'TR', label: 'Türkçe' },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
      >
        <span>{currentLang}</span>
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-secondary ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="language-menu"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setCurrentLang(lang.code);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  currentLang === lang.code
                    ? 'text-accent bg-primary/50'
                    : 'text-gray-300 hover:text-white hover:bg-primary/30'
                }`}
                role="menuitem"
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
