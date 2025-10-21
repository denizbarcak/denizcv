'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/locales/translations';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import AnimatedBackground from '@/components/layout/AnimatedBackground';
import PortfolioHero from '../../../components/sections/PortfolioHero';

export default function PortfolioDesign() {
  const { language } = useLanguage();
  const [selectedDifcImage, setSelectedDifcImage] = useState(0);
  const [selectedVillaImage, setSelectedVillaImage] = useState(0);
  const [selectedVideoImage, setSelectedVideoImage] = useState(0);
  const [selectedJetkentImage, setSelectedJetkentImage] = useState(0);
  const [difcScrollProgress, setDifcScrollProgress] = useState(0);
  const [villaScrollProgress, setVillaScrollProgress] = useState(0);
  const [videoScrollProgress, setVideoScrollProgress] = useState(0);
  const [jetkentScrollProgress, setJetkentScrollProgress] = useState(0);

  // Color mapping for buttons
  const colorMap: { [key: string]: string } = {
    '6crimson': 'bg-[#B11B15]',
    '5RetroSiyah': 'bg-[#584D47]',
    '4BebekMavi': 'bg-[#AEC0D3]',
    '3AntikPembe': 'bg-[#D66264]',
    '2Basak': 'bg-[#E3DB38]',
    '1kesekagidi': 'bg-[#C3B497]'
  };

  // Scroll to selected image in thumbnail carousel
  const scrollToSelectedDifcImage = (index: number) => {
    const container = document.querySelector('.difc-thumbnails');
    if (!container) return;
    
    const thumbnailWidth = 192; // w-48 = 12rem = 192px
    const gap = 16; // gap-4 = 1rem = 16px
    const scrollPosition = index * (thumbnailWidth + gap) - (container.clientWidth - thumbnailWidth) / 2;
    
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  };

  const handleDifcScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollWidth = container.scrollWidth - container.clientWidth;
    const progress = (container.scrollLeft / scrollWidth) * 100;
    const adjustedProgress = Math.min(Math.max(progress, 0), 100);
    setDifcScrollProgress(adjustedProgress);
  };

  const scrollToSelectedVillaImage = (index: number) => {
    const container = document.querySelector('.villa-thumbnails');
    if (!container) return;
    
    const thumbnailWidth = 192; // w-48 = 12rem = 192px
    const gap = 16; // gap-4 = 1rem = 16px
    const scrollPosition = index * (thumbnailWidth + gap) - (container.clientWidth - thumbnailWidth) / 2;
    
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  };

  const handleVillaScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollWidth = container.scrollWidth - container.clientWidth;
    const progress = (container.scrollLeft / scrollWidth) * 100;
    const adjustedProgress = Math.min(Math.max(progress, 0), 100);
    setVillaScrollProgress(adjustedProgress);
  };

  const handleJetkentScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollWidth = container.scrollWidth - container.clientWidth;
    const progress = (container.scrollLeft / scrollWidth) * 100;
    const adjustedProgress = Math.min(Math.max(progress, 0), 100);
    setJetkentScrollProgress(adjustedProgress);
  };

  // Project Images
  interface GalleryImage {
    src: string;
    title: string;
    description: string;
  }

  const difcGallery = getTranslation(language, 'portfolio.design.projects.difc.gallery') as unknown as GalleryImage[];
  const villaGallery = getTranslation(language, 'portfolio.design.projects.silivri_villa.gallery') as unknown as GalleryImage[];
  const videoGallery = getTranslation(language, 'portfolio.design.projects.video_project.gallery') as unknown as GalleryImage[];
  const jetkentGallery = getTranslation(language, 'portfolio.design.projects.jetkent.gallery') as unknown as GalleryImage[];

  return (
    <main className="bg-primary relative min-h-screen overflow-hidden">
      <AnimatedBackground />

      {/* Content */}
      <div className="relative z-10">
        <PortfolioHero />

        {/* DIFC Project Section */}
        <section className="py-8 px-4">
          <div className="max-w-[1100px] mx-auto bg-secondary/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-secondary/40 transition-all duration-500">
            <div className="max-w-4xl mx-auto">
              {/* Project Header */}
              <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {getTranslation(language, 'portfolio.design.projects.difc.title')}
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl">
                {getTranslation(language, 'portfolio.design.projects.difc.description')}
              </p>
            </motion.div>

            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8 group"
            >
              <Image
              src={difcGallery[selectedDifcImage].src}
              alt={difcGallery[selectedDifcImage].title}
                fill
                className="object-contain bg-secondary/30"
              />

              {/* Navigation Arrows for Main Image */}
              <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                    onClick={() => {
                      const newIndex = selectedDifcImage > 0 ? selectedDifcImage - 1 : difcGallery.length - 1;
                      setSelectedDifcImage(newIndex);
                      scrollToSelectedDifcImage(newIndex);
                    }}
                  className="w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm transform hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                    onClick={() => {
                      const newIndex = selectedDifcImage < difcGallery.length - 1 ? selectedDifcImage + 1 : 0;
                      setSelectedDifcImage(newIndex);
                      scrollToSelectedDifcImage(newIndex);
                    }}
                  className="w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm transform hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {selectedDifcImage + 1} / {difcGallery.length}
              </div>
            </motion.div>

            {/* Thumbnail Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative mt-12"
            >
              <div className="bg-secondary/40 backdrop-blur-sm rounded-2xl p-6 relative">
                {/* Scroll Indicator */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-1 bg-accent/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-accent rounded-full transition-all duration-300"
                    style={{ 
                      width: '25%',
                      transform: `translateX(${Math.min(difcScrollProgress * 3, 300)}%)`
                    }}
                  />
                </div>
                  <div 
                    className="overflow-x-auto pb-2 hide-scrollbar difc-thumbnails"
                    onScroll={handleDifcScroll}
                >
                  <div className="absolute -left-5 -right-5 top-0 bottom-0 pointer-events-none">
                    <button
                      onClick={() => {
                        const container = document.querySelector('.overflow-x-auto');
                        if (container) container.scrollBy({ left: -300, behavior: 'smooth' });
                      }}
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-accent/10 hover:bg-accent/20 text-accent rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm pointer-events-auto"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => {
                        const container = document.querySelector('.overflow-x-auto');
                        if (container) container.scrollBy({ left: 300, behavior: 'smooth' });
                      }}
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-accent/10 hover:bg-accent/20 text-accent rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm pointer-events-auto"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex gap-4 min-w-max px-12">
                    {difcGallery.map((image: any, index: number) => (
                      <button
                        key={index}
                          onClick={() => {
                            setSelectedDifcImage(index);
                            scrollToSelectedDifcImage(index);
                          }}
                        className={`relative w-48 aspect-[16/9] rounded-lg overflow-hidden flex-shrink-0 transition-all duration-300 ${
                          selectedDifcImage === index ? 'ring-2 ring-accent scale-[0.98]' : 'hover:scale-[0.98]'
                        }`}
                      >
                        <Image
                          src={image.src}
                          alt={image.title}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            </div>
          </div>
        </section>

        {/* Silivri Villa Project Section */}
        <section className="py-8 px-4">
          <div className="max-w-[1100px] mx-auto bg-secondary/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-secondary/40 transition-all duration-500">
            <div className="max-w-4xl mx-auto">
              {/* Project Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {getTranslation(language, 'portfolio.design.projects.silivri_villa.title')}
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl">
                  {getTranslation(language, 'portfolio.design.projects.silivri_villa.description')}
                </p>
              </motion.div>

              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8 group"
              >
                <Image
                  src={villaGallery[selectedVillaImage].src}
                  alt={villaGallery[selectedVillaImage].title}
                  fill
                  className={`${
                    villaGallery[selectedVillaImage].src.includes('MİMARİ PROJESl.png')
                      ? 'object-contain scale-150 bg-secondary/30'
                      : villaGallery[selectedVillaImage].src.includes('Plan-1.png')
                      ? 'object-contain bg-secondary/30 rotate-90 scale-[1.35]'
                      : 'object-contain bg-secondary/30'
                  }`}
                />

                {/* Navigation Arrows for Main Image */}
                <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => {
                      const newIndex = selectedVillaImage > 0 ? selectedVillaImage - 1 : villaGallery.length - 1;
                      setSelectedVillaImage(newIndex);
                      scrollToSelectedVillaImage(newIndex);
                    }}
                    className="w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm transform hover:scale-110"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => {
                      const newIndex = selectedVillaImage < villaGallery.length - 1 ? selectedVillaImage + 1 : 0;
                      setSelectedVillaImage(newIndex);
                      scrollToSelectedVillaImage(newIndex);
                    }}
                    className="w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm transform hover:scale-110"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>

              {/* Thumbnail Carousel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative mt-12"
              >
                <div className="bg-secondary/40 backdrop-blur-sm rounded-2xl p-6 relative">
                  {/* Scroll Indicator */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-1 bg-accent/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-accent rounded-full transition-all duration-300"
                      style={{ 
                        width: '25%',
                        transform: `translateX(${Math.min(villaScrollProgress * 3, 300)}%)`
                      }}
                    />
                  </div>
                  <div 
                    className="overflow-x-auto pb-2 hide-scrollbar villa-thumbnails"
                    onScroll={handleVillaScroll}
                  >
                    <div className="absolute -left-5 -right-5 top-0 bottom-0 pointer-events-none">
                      <button
                        onClick={() => {
                          const container = document.querySelector('.villa-thumbnails');
                          if (container) container.scrollBy({ left: -300, behavior: 'smooth' });
                        }}
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-accent/10 hover:bg-accent/20 text-accent rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm pointer-events-auto"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => {
                          const container = document.querySelector('.villa-thumbnails');
                          if (container) container.scrollBy({ left: 300, behavior: 'smooth' });
                        }}
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-accent/10 hover:bg-accent/20 text-accent rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm pointer-events-auto"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex gap-4 min-w-max px-12">
                      {villaGallery.map((image: any, index: number) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSelectedVillaImage(index);
                            scrollToSelectedVillaImage(index);
                          }}
                          className={`relative w-48 aspect-[16/9] rounded-lg overflow-hidden flex-shrink-0 transition-all duration-300 ${
                            selectedVillaImage === index ? 'ring-2 ring-accent scale-[0.98]' : 'hover:scale-[0.98]'
                          }`}
                        >
                          <Image
                            src={image.src}
                            alt={image.title}
                            fill
                            className={`object-cover ${
                              image.src.includes('Plan-1.png') ? 'scale-90 object-contain p-2' : ''
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Video Project Section */}
        <section className="py-8 px-4">
          <div className="max-w-[1100px] mx-auto bg-secondary/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-secondary/40 transition-all duration-500">
            <div className="max-w-4xl mx-auto">
              {/* Project Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {getTranslation(language, 'portfolio.design.projects.video_project.title')}
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl">
                  {getTranslation(language, 'portfolio.design.projects.video_project.description')}
                </p>
              </motion.div>

              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8 group"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedVideoImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={videoGallery[selectedVideoImage].src}
                      alt={videoGallery[selectedVideoImage].title}
                      fill
                      className="object-cover bg-secondary/30"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Color Selection Buttons */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/20 backdrop-blur-sm px-4 py-3 rounded-full">
                  {videoGallery.map((image, index) => {
                    console.log('Image title:', image.title);
                    // Extract color name from file path instead of title
                    const colorName = image.src.split('/').pop()?.split('.')[0] || '';
                    console.log('Color name:', colorName, 'Color class:', colorMap[colorName]);
                    return (
                      <button
                        key={index}
                        onClick={() => setSelectedVideoImage(index)}
                        className={`w-6 h-6 rounded-full transition-all duration-300 ${colorMap[colorName]} 
                          ${selectedVideoImage === index 
                            ? 'scale-125 ring-2 ring-white ring-offset-2 ring-offset-black/20 border border-white/30' 
                            : 'hover:scale-110 border border-white/20'}
                          shadow-lg hover:shadow-xl`}
                        title={image.title}
                      />
                    );
                  })}
                </div>

              </motion.div>
            </div>
          </div>
        </section>

        {/* Jetkent Project Section */}
        <section className="py-8 px-4">
          <div className="max-w-[1100px] mx-auto bg-secondary/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-secondary/40 transition-all duration-500">
            <div className="max-w-4xl mx-auto">
              {/* Project Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {getTranslation(language, 'portfolio.design.projects.jetkent.title')}
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl">
                  {getTranslation(language, 'portfolio.design.projects.jetkent.description')}
                </p>
              </motion.div>

              {/* Main Image with Dots Navigation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative aspect-[16/9] rounded-xl overflow-hidden group"
              >
                <Image
                  src={jetkentGallery[selectedJetkentImage].src}
                  alt={jetkentGallery[selectedJetkentImage].title}
                  fill
                  className="object-contain bg-secondary/30"
                />

                {/* Navigation Arrows */}
                <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => setSelectedJetkentImage((prev) => (prev > 0 ? prev - 1 : jetkentGallery.length - 1))}
                    className="w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm transform hover:scale-110"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setSelectedJetkentImage((prev) => (prev < jetkentGallery.length - 1 ? prev + 1 : 0))}
                    className="w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm transform hover:scale-110"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Dots Navigation */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
                  {jetkentGallery.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedJetkentImage(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        selectedJetkentImage === index 
                          ? 'bg-accent w-6'
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}