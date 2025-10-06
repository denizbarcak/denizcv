'use client';

import { motion } from 'framer-motion';

const Skills = () => {
  const designSkills = [
    {
      name: '3ds Max',
      detail: 'Corona & V-Ray',
    },
    {
      name: 'Fusion 360',
      detail: null,
    },
    {
      name: 'Rhino',
      detail: null,
    },
    {
      name: 'KeyShot',
      detail: null,
    },
    {
      name: 'Photoshop',
      detail: null,
    },
    {
      name: 'SketchUp',
      detail: null,
    },
    {
      name: 'AutoCAD',
      detail: null,
    },
  ];

  const devSkills = [
    'HTML',
    'CSS',
    'React',
    'GoLang',
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute transform rotate-45 -right-1/4 -top-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full"></div>
        <div className="absolute transform -rotate-45 -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Combining design and development skills to create comprehensive solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* 3D & Design Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8">3D & Design</h3>
            <div className="grid grid-cols-2 gap-4">
              {designSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  className="p-4 bg-secondary rounded-lg group hover:bg-accent/20 transition-colors duration-300"
                >
                  <p className="text-gray-300 group-hover:text-white font-medium">
                    {skill.name}
                    {skill.detail && (
                      <span className="block text-sm text-gray-400 group-hover:text-gray-300 mt-1">
                        {skill.detail}
                      </span>
                    )}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Software & Web Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Software & Web</h3>
            <div className="grid grid-cols-2 gap-4">
              {devSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  className="p-4 bg-secondary rounded-lg group hover:bg-accent/20 transition-colors duration-300"
                >
                  <p className="text-gray-300 group-hover:text-white font-medium">{skill}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;