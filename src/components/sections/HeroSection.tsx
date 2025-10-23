'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/locales/translations';
import { useState, useEffect, useRef } from 'react';

const HeroSection = () => {
  const { language } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section className="min-h-[110vh] md:min-h-screen flex items-center">
      <div className="container mx-auto px-4 pt-16 pb-24 md:pt-2 md:pb-14 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-8">
          {/* Profile Image - Shows at top on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:hidden w-48 h-48 md:w-60 md:h-60 relative mb-4 md:mb-2"
          >
            <div className="w-full h-full rounded-full border-4 border-accent overflow-hidden relative">
              <Image
                src="/images/photo/PRF_0450.webp"
                alt="Deniz Barçak"
                fill
                className="object-cover"
                priority
                loading="eager"
                sizes="(max-width: 768px) 192px, (max-width: 1024px) 240px, 0px"
                quality={90}
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl text-center lg:text-left lg:ml-24 w-full"
          >
            <motion.h1 
              className="text-4xl md:text-7xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {getTranslation(language, 'hero.greeting')}
            </motion.h1>
            <motion.h2 
              className="text-4xl md:text-7xl font-bold mb-6 text-accent inline-flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {getTranslation(language, 'hero.name')}
            </motion.h2>
            <motion.p 
              className="text-lg md:text-2xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {getTranslation(language, 'hero.description')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex gap-4 justify-center lg:justify-start w-full">
                <Link
                  href="/cv.pdf"
                  download
                  className="inline-block text-base md:text-xl bg-accent text-primary px-4 md:px-8 py-2 md:py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all duration-300 uppercase tracking-wide"
                >
                  {getTranslation(language, 'hero.download_cv')}
                </Link>
                <div 
                  ref={dropdownRef} 
                  className="relative"
                  style={{ minWidth: '180px' }}
                  onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
                  onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
                >
                  <button
                    onClick={() => isMobile && setIsDropdownOpen(!isDropdownOpen)}
                    className={`w-full text-base md:text-xl bg-[#2A2A2A] text-white px-4 md:px-8 py-2 md:py-3 font-semibold transition-all duration-300 uppercase tracking-wide flex items-center justify-center ${isDropdownOpen ? 'rounded-t-md' : 'rounded-md'} hover:bg-accent`}
                  >
                    {getTranslation(language, 'nav.portfolio')}
                    <span className={`ml-2 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  <div 
                    className={`absolute top-full left-0 w-full transition-all duration-300 z-[100] ${isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                    style={{ transform: 'translateY(0)' }}
                  >
                    <Link
                      href="/portfolio/3d-design"
                      className="block px-4 md:px-8 py-2 md:py-3 text-white bg-[#2A2A2A] hover:bg-accent transition-all duration-300 whitespace-nowrap text-center border-b border-accent/20 text-base md:text-xl"
                    >
                      {getTranslation(language, 'portfolio_categories.design')}
                    </Link>
                    <Link
                      href="/portfolio/software-web"
                      className="block px-4 md:px-8 py-2 md:py-3 text-white bg-[#2A2A2A] hover:bg-accent transition-all duration-300 whitespace-nowrap text-center rounded-b-md text-base md:text-xl"
                    >
                      {getTranslation(language, 'portfolio_categories.software')}
                    </Link>
                  </div>
                  
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Profile Image - Shows on desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block relative w-[620px] h-[620px] lg:ml-20"
          >
              <Image
                src="/images/photo/PRF_0450.webp"
                alt="Deniz Barçak"
                fill
                className="object-cover object-[center_30%] rounded-full border-4 border-accent scale-[0.9]"
                priority
                loading="eager"
                sizes="(max-width: 768px) 100vw, 620px"
                quality={90}
              />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
