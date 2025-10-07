'use client';

import { motion } from 'framer-motion';

const ResumeHero = () => {
  return (
    <section className="min-h-[30vh] relative flex items-center pt-24">
      <div className="container mx-auto px-4 py-12">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Professional Journey
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-300 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A timeline of my experience and achievements in design and architecture
        </motion.p>
      </div>
    </section>
  );
};

export default ResumeHero;