'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/locales/translations';
import Image from 'next/image';

interface ProjectCardProps {
  project: string; // project identifier (e.g., 'difc')
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative bg-secondary/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-secondary/80 transition-all duration-500"
    >
      {/* Project Image */}
      <div className="aspect-[16/9] relative overflow-hidden rounded-t-xl">
        <Image
          src={`/3D/DİFC/Kapak.jpg`}
          alt={getTranslation(language, `portfolio.design.projects.${project}.title`)}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="space-y-4">
          {/* Category and Year */}
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
              {getTranslation(language, `portfolio.design.projects.${project}.category`)}
            </span>
            <span className="text-gray-400 text-sm">
              {getTranslation(language, `portfolio.design.projects.${project}.year`)}
            </span>
          </div>
          
          {/* Title */}
          <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
            {getTranslation(language, `portfolio.design.projects.${project}.title`)}
          </h3>
          
          {/* Description */}
          <p className="text-gray-400 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
            {getTranslation(language, `portfolio.design.projects.${project}.description`)}
          </p>

          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{getTranslation(language, `portfolio.design.projects.${project}.location`)}</span>
          </div>

          {/* View Project Button */}
          <div className="pt-4">
            <a 
              href={`/portfolio/3d-design/${project}`}
              className="w-full px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>{getTranslation(language, 'portfolio.design.view_project')}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
