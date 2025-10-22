'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/locales/translations';

const PortfolioHero = () => {
  const { language } = useLanguage();

  return (
    <section className="min-h-[20vh] md:min-h-[26vh] relative flex items-center mb-0">
      <div className="container mx-auto px-4 pt-16 md:pt-16 md:pb-4 relative z-10 pb-0">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {getTranslation(language, 'portfolio.design.title')}
        </motion.h1>
      </div>
    </section>
  );
};

export default PortfolioHero;
