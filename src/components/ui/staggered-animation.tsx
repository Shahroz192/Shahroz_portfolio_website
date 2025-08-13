'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, ReactNode } from 'react';

interface StaggeredAnimationProps {
  children: ReactNode;
  className?: string;
}

const StaggeredAnimation = ({ children, className }: StaggeredAnimationProps) => {
  const ref = useRef(null);
  // Trigger the animation when the element is 25% into the viewport
  const isInView = useInView(ref, { once: true, amount: 0.25 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  // Variants for the container to orchestrate the staggering effect
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // A slightly faster stagger for a snappier feel
      },
    },
  };

  // Variants for the child elements
  const childVariants = {
    hidden: { opacity: 0, y: 20 }, // Start slightly lower
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // A bit quicker for responsiveness
        ease: "easeOut", // A standard easing function for a clean exit
      },
    },
  };

  // Check if children is a valid array before mapping
  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={mainControls}
    >
      {childrenArray.map((child, index) => (
        <motion.div key={index} variants={childVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggeredAnimation;
