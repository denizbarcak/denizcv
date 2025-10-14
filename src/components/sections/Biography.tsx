'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

const Biography = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  
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
          {/* Left Column - Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">Personal Information</h2>
            <div className="space-y-4">
              {/* Location */}
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

              {/* Languages */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium">Languages</h3>
                  <p className="text-gray-400">English, Turkish</p>
                </div>
              </div>

              {/* Birth Date */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium">Birth Date</h3>
                  <p className="text-gray-400">26.08.1996</p>
                </div>
              </div>

              {/* Military Service */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium">Military Service</h3>
                  <p className="text-gray-400">Completed</p>
                </div>
              </div>

              {/* Driver's License */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium">Driver's License</h3>
                  <p className="text-gray-400">Class A and B</p>
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
          style={{ opacity }}
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