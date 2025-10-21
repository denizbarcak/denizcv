'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/locales/translations';
import AnimatedBackground from '@/components/layout/AnimatedBackground';
import PortfolioHero from '../../../components/sections/PortfolioHero';

export default function PortfolioSoftware() {
  const { language } = useLanguage();

  return (
    <main className="bg-primary relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <PortfolioHero />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 font-mono">
            {/* Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white text-2xl md:text-3xl font-medium"
            >
              {getTranslation(language, 'portfolio_categories.under_construction.status')}
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
