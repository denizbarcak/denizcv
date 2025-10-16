'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/locales/translations';

const AboutHero = () => {
  const { language } = useLanguage();

  return (
    <section className="min-h-[40vh] relative flex items-center">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {getTranslation(language, 'about.title')}
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-300 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {getTranslation(language, 'about.subtitle')}
        </motion.p>
      </div>
    </section>
  );
};

export default AboutHero;