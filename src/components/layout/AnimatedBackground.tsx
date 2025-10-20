'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

const AnimatedBackground = () => {
  // Memoize the random positions so they don't change on re-renders
  const circles = useMemo(() => 
    [...Array(8)].map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: i * 2,
    })), []
  );

  return (
    <div className="fixed inset-0 opacity-20 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent z-10"></div>
      <div className="absolute inset-0">
        {circles.map((circle, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 bg-accent/5 rounded-full"
            style={{
              left: circle.left,
              top: circle.top,
            }}
            initial={{
              scale: 1,
              rotate: 0,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              delay: circle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
