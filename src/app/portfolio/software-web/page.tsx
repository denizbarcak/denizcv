'use client';

import { motion, AnimatePresence } from 'framer-motion';
import AnimatedBackground from '@/components/layout/AnimatedBackground';
import PortfolioHero from '../../../components/sections/PortfolioHero';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
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
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showSecurityDialog, setShowSecurityDialog] = useState(false);
  const [securityCode, setSecurityCode] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 'planvia',
      technologies: ['Next.js 14', 'Go Fiber', 'MongoDB', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Big Calendar', 'Headless UI', 'Tremor'],
      image: 'planvia-logo',
      links: {}
    },
    {
      id: 'this-website',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Headless UI'],
      image: '/images/Others/favicon.ico',
      links: {
        github: 'https://github.com/denizbarcak/denizcv',
        live: '/'
      }
    }
  ];

  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  const handlePreviousImage = () => {
    if (selectedImage !== null && selectedImage > 1) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImage !== null && selectedImage < 8) {
      setSelectedImage(selectedImage + 1);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;

      // Show left arrow if not at start
      setShowLeftArrow(scrollLeft > 10);

      // Show right arrow if not at end
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
    };

    // Initial check
    handleScroll();

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [expandedProject]);

  return (
    <main className="bg-primary relative min-h-screen overflow-hidden">
      <AnimatedBackground />

      {/* Security Code Dialog */}
      <AnimatePresence>
        {showSecurityDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
            onClick={() => setShowSecurityDialog(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#323b53] rounded-2xl p-8 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white text-center mb-2">
                🔐 {language === 'en' ? 'Security Code Entry' : 'Güvenlik Kodu Girişi'}
              </h3>

              {/* Description */}
              <div className="text-gray-300 text-center space-y-2 mb-6">
                <p>{language === 'en' ? 'This content is a confidential presentation.' : 'Bu içerik gizli bir sunumdur.'}</p>
                <p>{language === 'en' ? 'Please enter a valid security code.' : 'Lütfen geçerli bir güvenlik kodu giriniz.'}</p>
                <p className="text-sm text-gray-400">
                  {language === 'en'
                    ? 'For code request, please contact the site owner.'
                    : 'Kod talebi için site sahibiyle iletişime geçebilirsiniz.'}
                </p>
              </div>

              {/* Input */}
              <input
                type="password"
                value={securityCode}
                onChange={(e) => setSecurityCode(e.target.value)}
                placeholder={language === 'en' ? 'Enter security code' : 'Güvenlik kodunu girin'}
                className="w-full px-4 py-3 bg-secondary/50 border border-accent/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors mb-6"
              />

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowSecurityDialog(false);
                    setSecurityCode('');
                  }}
                  className="flex-1 px-6 py-3 bg-secondary hover:bg-secondary/80 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  {language === 'en' ? 'Cancel' : 'İptal'}
                </button>
                <button
                  onClick={() => {
                    // Backend entegrasyonu buraya gelecek
                    alert(language === 'en' ? 'Code verification will be added' : 'Kod doğrulama eklenecek');
                  }}
                  className="flex-1 px-6 py-3 bg-accent hover:bg-accent/90 text-primary font-semibold rounded-lg transition-all duration-300"
                >
                  {language === 'en' ? 'OK' : 'Tamam'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-accent p-2 transition-colors z-10"
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous Arrow */}
            {selectedImage > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePreviousImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-accent/90 hover:bg-accent text-primary p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Next Arrow */}
            {selectedImage < 8 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-accent/90 hover:bg-accent text-primary p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full max-w-6xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={`/images/planvia/p${selectedImage}.webp`}
                alt={`PlanVia Screenshot ${selectedImage}`}
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
              {selectedImage} / 8
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
                  <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 bg-secondary/50 rounded-xl overflow-hidden flex items-center justify-center">
                    {project.image === 'planvia-logo' ? (
                      <div className="text-3xl md:text-4xl font-bold" style={{
                        background: 'linear-gradient(135deg, #9333ea 0%, #e879f9 50%, #7c3aed 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
                      }}>
                        PlanVia
                      </div>
                    ) : (
                      <Image
                        src={project.image}
                        alt={getTranslation(language, `portfolio.software.projects.${project.id.replace('-', '_')}.title`)}
                        fill
                        className="object-contain p-4"
                      />
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                        {getTranslation(language, `portfolio.software.projects.${project.id.replace('-', '_')}.title`)}
                      </h2>

                      {/* Tags - Desktop */}
                      <div className="hidden md:flex items-center gap-2">
                        <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium border border-accent/30">
                          {project.id === 'planvia' ? 'Full-Stack' : 'Frontend'}
                        </span>
                        {project.id === 'planvia' && (
                          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium border border-yellow-500/30">
                            {language === 'en' ? 'In Development' : 'Geliştirme Aşamasında'}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-300 text-base md:text-lg mb-4 whitespace-pre-line">
                      {getTranslation(language, `portfolio.software.projects.${project.id.replace('-', '_')}.short_description`)}
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
                        {/* Image Gallery - Only for PlanVia */}
                        {project.id === 'planvia' && (
                          <div className="mt-6 mb-8 relative">
                            {/* Left Arrow */}
                            {showLeftArrow && (
                              <button
                                onClick={handleScrollLeft}
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-accent/90 hover:bg-accent text-primary p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                                aria-label="Previous"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                              </button>
                            )}

                            {/* Right Arrow */}
                            {showRightArrow && (
                              <button
                                onClick={handleScrollRight}
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-accent/90 hover:bg-accent text-primary p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                                aria-label="Next"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                              </button>
                            )}

                            {/* Image Container */}
                            <div
                              ref={scrollContainerRef}
                              className="flex gap-4 overflow-x-auto pb-4"
                              style={{
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none'
                              }}
                            >
                              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                <div
                                  key={num}
                                  onClick={() => setSelectedImage(num)}
                                  className="flex-shrink-0 w-64 h-40 md:w-80 md:h-48 relative rounded-lg overflow-hidden shadow-xl cursor-pointer"
                                >
                                  <Image
                                    src={`/images/planvia/p${num}.webp`}
                                    alt={`PlanVia Screenshot ${num}`}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="grid md:grid-cols-2 gap-8 mt-6">
                          {/* Explanation Section */}
                          <div>
                            <h3 className="text-xl font-bold text-white mb-4">
                              {language === 'en' ? 'Explanation' : 'Açıklama'}
                            </h3>
                            <div className="space-y-3 text-gray-300">
                              <p>{getTranslation(language, `portfolio.software.projects.${project.id.replace('-', '_')}.explanation.intro`)}</p>
                              <p>{getTranslation(language, `portfolio.software.projects.${project.id.replace('-', '_')}.explanation.showcase`)}</p>
                              <p>{getTranslation(language, `portfolio.software.projects.${project.id.replace('-', '_')}.explanation.fullstack`)}</p>
                              <p>{getTranslation(language, `portfolio.software.projects.${project.id.replace('-', '_')}.explanation.responsive`)}</p>
                            </div>
                          </div>

                          {/* Exploration Section */}
                          <div>
                            <h3 className="text-xl font-bold text-white mb-4">
                              {language === 'en' ? 'Exploration' : 'Keşif'}
                            </h3>
                            <div className="space-y-3 text-gray-300">
                              <p>{getTranslation(language, `portfolio.software.projects.${project.id.replace('-', '_')}.exploration.architecture`)}</p>
                              <p>{getTranslation(language, `portfolio.software.projects.${project.id.replace('-', '_')}.exploration.styling`)}</p>
                              <p>{getTranslation(language, `portfolio.software.projects.${project.id.replace('-', '_')}.exploration.animations`)}</p>
                              <p>{getTranslation(language, `portfolio.software.projects.${project.id.replace('-', '_')}.exploration.performance`)}</p>
                              <p>{getTranslation(language, `portfolio.software.projects.${project.id.replace('-', '_')}.exploration.accessibility`)}</p>
                              {project.id === 'planvia' && (
                                <p>{getTranslation(language, `portfolio.software.projects.${project.id.replace('-', '_')}.exploration.scalability`)}</p>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 mt-8">
                          {/* PlanVia Project Presentation Button */}
                          {project.id === 'planvia' && (
                            <button
                              onClick={() => setShowSecurityDialog(true)}
                              className="flex items-center gap-2 px-6 py-3 bg-purple-600/90 hover:bg-purple-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                              {language === 'en' ? 'Project Presentation' : 'Proje Sunumu'}
                            </button>
                          )}

                          {/* Other Project Buttons */}
                          {project.links?.live && (
                            <a
                              href={project.links.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-primary font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              Visit
                            </a>
                          )}
                          {project.links?.github && (
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                              </svg>
                              Source
                            </a>
                          )}
                        </div>

                        {/* Tags - Mobile */}
                        <div className="flex md:hidden items-center gap-2 mt-6 flex-wrap">
                          <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium border border-accent/30">
                            {project.id === 'planvia' ? 'Full-Stack' : 'Frontend'}
                          </span>
                          {project.id === 'planvia' && (
                            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium border border-yellow-500/30">
                              {language === 'en' ? 'In Development' : 'Geliştirme Aşamasında'}
                            </span>
                          )}
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
