'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center bg-primary text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hello!
          </motion.h1>
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I Am Deniz Barcak
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I&apos;m a Web Developer with extensive experience. My expertise is to
            create and design Websites, graphic design and many more...
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
              Download CV
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;