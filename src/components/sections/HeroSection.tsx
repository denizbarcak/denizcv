'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/locales/translations';

const HeroSection = () => {
  const { language } = useLanguage();

  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12 justify-between">
          {/* Profile Image - Shows at top on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:hidden w-48 h-48 relative mb-4"
          >
            <div className="w-full h-full rounded-full border-4 border-accent overflow-hidden relative">
              <Image
                src="/images/photo/profilerenkli.png"
                alt="Deniz Barçak"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl text-center md:text-left"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {getTranslation(language, 'hero.greeting')}
            </motion.h1>
            <motion.h2 
              className="text-5xl md:text-7xl font-bold mb-6 text-accent inline-flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {getTranslation(language, 'hero.name')}
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8"
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
              <Link
                href="/cv.pdf"
                download
                className="inline-block text-lg md:text-xl bg-accent text-primary px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all duration-300 uppercase tracking-wide"
              >
                {getTranslation(language, 'hero.download_cv')}
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Profile Image - Shows on desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:block relative w-[480px] h-[480px]"
          >
            <Image
              src="/images/photo/profilerenkli.png"
              alt="Deniz Barçak"
              fill
              className="object-cover rounded-full border-4 border-accent"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;