'use client';

import AboutHero from '@/components/sections/AboutHero';
import Biography from '@/components/sections/Biography';
import Skills from '@/components/sections/Skills';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <main className="bg-primary relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent z-10"></div>
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
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
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <AboutHero />
        <Biography />
        <Skills />
      </div>
    </main>
  );
}