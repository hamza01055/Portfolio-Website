import React from 'react';
import { motion } from 'framer-motion';

// Shared Framer Motion primitives for the /projects/:id case-study pages
// only. Kept separate from `Reveal` in components/shared.jsx, which is a
// stripped no-op left over from an earlier CSS-only simplification pass —
// case-study components should never import that one.

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const VIEWPORT = { once: true, margin: '-100px' };

/** Generic fade-up-on-scroll wrapper for a whole section. */
export const RevealOnScroll = ({ children, className = '', delay = 0, as = 'div', ...rest }) => {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={fadeUpVariants}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

/** Stagger-children container — pair with plain motion.div children using fadeUpVariants, or StaggerItem below. */
export const StaggerGrid = ({ children, className = '' }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={VIEWPORT}
    variants={staggerContainer}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className = '' }) => (
  <motion.div className={className} variants={fadeUpVariants}>
    {children}
  </motion.div>
);

/** Hover-zoom wrapper for hero/architecture/gallery images. */
export const ZoomImage = ({ children, className = '' }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={VIEWPORT}
    variants={scaleInVariants}
    whileHover="hover"
  >
    <motion.div
      variants={{ hover: { scale: 1.03 } }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  </motion.div>
);

/** Page-level enter/exit wrapper, animated by <AnimatePresence> in App.jsx. */
export const PageTransition = ({ children, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);
