'use client';

import { motion } from 'framer-motion';

const Biography = () => {
  const education = [
    {
      school: 'Üçüncü Binyıl Academy',
      program: 'Software Development',
      period: 'Sep 2023 - Dec 2024',
    },
    {
      school: 'Halic University',
      program: 'Interior Design',
      period: '2018 - 2020',
    },
    {
      school: 'Ata College',
      program: 'High School',
      period: '2011 - 2014',
    },
  ];

  return (
    <section className="pt-12 pb-24">
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">Biography</h2>
            <div className="prose prose-invert">
              <p className="text-gray-300">
                Currently working as an Industrial Designer at Teampack, Istanbul. 
                Combining my passion for design with web development skills to create 
                innovative solutions.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium">Location</h3>
                  <p className="text-gray-400">Istanbul, Turkey</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Education</h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.school}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-5 bg-secondary rounded-lg hover:bg-secondary/70 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-white font-medium text-lg">{edu.school}</h3>
                      <span className="text-accent text-sm whitespace-nowrap">{edu.period}</span>
                    </div>
                    <p className="text-gray-400">{edu.program}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute left-1/4 transform -translate-x-1/2 -bottom-14 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg 
              className="w-6 h-6 text-accent"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Biography;