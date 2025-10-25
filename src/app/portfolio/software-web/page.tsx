'use client';

import { motion, AnimatePresence } from 'framer-motion';
import AnimatedBackground from '@/components/layout/AnimatedBackground';
import PortfolioHero from '../../../components/sections/PortfolioHero';
import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/locales/translations';

interface Project {
  id: string;
  technologies: string[];
  image: string;
  links?: {
    github?: string;
    live?: string;
  };
}

export default function PortfolioSoftware() {
  const { language } = useLanguage();
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 'this-website',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Headless UI'],
      image: '/images/others/favicon_final.ico',
      links: {
        github: 'https://github.com/denizbarcak/denizcv',
        live: '/'
      }
    }
  ];

  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <main className="bg-primary relative min-h-screen overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10">
        <PortfolioHero type="software" />

        {/* Projects Section */}
        <section className="pt-4 pb-8 md:py-8 px-2">
          <div className="max-w-[1200px] mx-auto space-y-4 md:space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#323b53] backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-[#3a4461] transition-all duration-500"
              >
                {/* Card Header - Always Visible */}
                <button
                  onClick={() => toggleProject(project.id)}
                  className="w-full p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 text-left group"
                >
                  {/* Project Image */}
                  <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 bg-secondary/50 rounded-xl overflow-hidden">
                    <Image
                      src={project.image}
                      alt={getTranslation(language, 'portfolio.software.projects.this_website.title')}
                      fill
                      className="object-contain p-4"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                        {getTranslation(language, 'portfolio.software.projects.this_website.title')}
                      </h2>

                      {/* Tags - Desktop */}
                      <div className="hidden md:flex items-center gap-2">
                        <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium border border-accent/30">
                          Frontend
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 text-base md:text-lg mb-4 whitespace-pre-line">
                      {getTranslation(language, 'portfolio.software.projects.this_website.short_description')}
                    </p>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-accent text-primary text-sm font-medium rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expand Icon */}
                  <div className="absolute top-6 right-6 md:relative md:top-0 md:right-0">
                    <motion.div
                      animate={{ rotate: expandedProject === project.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 flex items-center justify-center text-accent"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </div>
                </button>

                {/* Expandable Content */}
                <AnimatePresence>
                  {expandedProject === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 border-t border-accent/20 bg-[#323b53]/50">
                        <div className="grid md:grid-cols-2 gap-8 mt-6">
                          {/* Explanation Section */}
                          <div>
                            <h3 className="text-xl font-bold text-white mb-4">
                              {language === 'en' ? 'Explanation' : 'Açıklama'}
                            </h3>
                            <div className="space-y-3 text-gray-300">
                              <p>{getTranslation(language, 'portfolio.software.projects.this_website.explanation.intro')}</p>
                              <p>{getTranslation(language, 'portfolio.software.projects.this_website.explanation.showcase')}</p>
                              <p>{getTranslation(language, 'portfolio.software.projects.this_website.explanation.fullstack')}</p>
                              <p>{getTranslation(language, 'portfolio.software.projects.this_website.explanation.responsive')}</p>
                            </div>
                          </div>

                          {/* Exploration Section */}
                          <div>
                            <h3 className="text-xl font-bold text-white mb-4">
                              {language === 'en' ? 'Exploration' : 'Keşif'}
                            </h3>
                            <div className="space-y-3 text-gray-300">
                              <p>{getTranslation(language, 'portfolio.software.projects.this_website.exploration.architecture')}</p>
                              <p>{getTranslation(language, 'portfolio.software.projects.this_website.exploration.styling')}</p>
                              <p>{getTranslation(language, 'portfolio.software.projects.this_website.exploration.animations')}</p>
                              <p>{getTranslation(language, 'portfolio.software.projects.this_website.exploration.performance')}</p>
                              <p>{getTranslation(language, 'portfolio.software.projects.this_website.exploration.accessibility')}</p>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 mt-8">
                          <a
                            href={project.links?.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-primary font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Visit
                          </a>
                          <a
                            href={project.links?.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            Source
                          </a>
                        </div>

                        {/* Tags - Mobile */}
                        <div className="flex md:hidden items-center gap-2 mt-6">
                          <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium border border-accent/30">
                            Frontend
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
