'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/locales/translations';

const Experience = () => {
  const { language } = useLanguage();

  const experiences = [
    {
      company: 'Kartelam',
      position: 'Jr. Full Stack Developer',
      location: 'Istanbul',
      period: 'Oct 2024 – Apr 2025',
      achievements: getTranslation(language, 'resume.achievements.kartelam'),
    },
    {
      company: 'Teampack Packaging',
      position: 'Industrial Designer',
      location: 'Atasehir, Istanbul',
      period: 'Jul 2022 – May 2023',
      achievements: getTranslation(language, 'resume.achievements.teampack'),
    },
    {
      company: 'Atlas 34 Construction',
      position: 'Interior Architect',
      location: 'Istanbul',
      period: 'Jul 2021 – Jun 2022',
      achievements: getTranslation(language, 'resume.achievements.atlas34'),
    },
    {
      company: 'Tabanlioglu Architects',
      position: 'Interior Architecture Internship',
      location: 'Istanbul',
      period: 'Jun 2019 – Aug 2019',
      achievements: getTranslation(language, 'resume.achievements.tabanlioglu'),
    },
    {
      company: 'Kavram Independent Audit',
      position: 'Internship',
      location: 'Istanbul',
      period: 'Jan 2016 – Feb 2017',
      achievements: getTranslation(language, 'resume.achievements.kavram'),
    },
    {
      company: 'Doka Formwork Technologies',
      position: 'Summer Internship',
      location: 'Istanbul',
      period: '2015',
      achievements: [],
    },
    {
      company: 'Consulta Independent Audit',
      position: 'Summer Internship',
      location: 'Istanbul',
      period: '2013',
      achievements: [],
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative space-y-8">
            <div className="absolute left-8 top-3 bottom-3 w-px bg-accent/20" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-5 w-16 flex items-center">
                  <div className={`w-4 h-4 rounded-full ${index === 0 ? 'bg-accent' : 'bg-secondary'}`} />
                  <div className="flex-1 h-px bg-accent/20" />
                </div>

                <div className="p-6 bg-secondary rounded-lg hover:bg-secondary/70 transition-colors duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                      <div className="flex items-center gap-2 text-gray-300 mt-1">
                        <span className="text-lg font-medium">{exp.position}</span>
                        <span className="text-sm">•</span>
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                    <span className="text-accent whitespace-nowrap">{exp.period}</span>
                  </div>
                  
                  {exp.achievements.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {exp.achievements.map((achievement: string, i: number) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <span className="text-accent mr-2 mt-1.5">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Download CV Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <a
              href={`/file/denizbarcak-cv-${language}.pdf`}
              download={`denizbarcak-cv-${language}.pdf`}
              className="inline-flex items-center px-8 py-3 bg-accent text-primary rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-300"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              {getTranslation(language, 'resume.download_cv')}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;