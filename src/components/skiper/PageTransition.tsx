import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{
        duration: 0.35,
        ease: [0.25, 1, 0.5, 1], // Smooth right-to-left slide easing
      }}
      className="w-full overflow-hidden"
    >
      {children}
    </motion.div>
  );
};
