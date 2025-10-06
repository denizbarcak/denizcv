'use client';

import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="min-h-[40vh] relative flex items-center bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent z-10"></div>
        <div className="grid grid-cols-8 grid-rows-8 gap-4 h-full w-full">
          {[...Array(64)].map((_, i) => (
            <div
              key={i}
              className="bg-accent/10 rounded-full"
              style={{
                transform: `scale(${Math.random() * 0.5 + 0.5})`,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-300 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Industrial Designer & Web Developer
        </motion.p>
      </div>
    </section>
  );
};

export default AboutHero;