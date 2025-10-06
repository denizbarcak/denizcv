'use client';

import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section className="min-h-[30vh] relative flex items-center bg-primary overflow-hidden pt-24">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent z-10"></div>
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-96 h-96 bg-accent/5 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                delay: i * 2,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 py-12">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h1>
      </div>
    </section>
  );
};

export default ContactHero;