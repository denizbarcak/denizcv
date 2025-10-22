'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/locales/translations';

const ContactHero = () => {
  const { language } = useLanguage();

  return (
    <section className="min-h-[20vh] md:min-h-[24vh] relative flex items-center pt-16 md:pt-20">
      <div className="container mx-auto px-4 relative z-10 pt-6 pb-1 md:py-8">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {getTranslation(language, 'contact.title')}
        </motion.h1>
      </div>
    </section>
  );
};

export default ContactHero;
