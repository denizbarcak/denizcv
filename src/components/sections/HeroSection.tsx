'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex items-center gap-12 justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Hello, I'm
            </motion.h1>
            <motion.h2 
              className="text-5xl md:text-7xl font-bold mb-6 text-accent inline-flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Deniz Barçak.
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I combine creative thinking and technical skills to develop productive solutions in both 3D modeling 
              and software development. With a design-thinking approach, I bring projects together aesthetically, 
              functionally, and technically as a whole. I am passionate about exploring new technologies and 
              pushing boundaries in every project.
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
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-[480px] h-[480px]"
          >
            <Image
              src="/images/photo/profilerenkli.png"
              alt="Deniz Barçak"
              fill
              className="rounded-full object-cover border-4 border-accent"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;