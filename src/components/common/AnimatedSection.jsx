import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const AnimatedSection = ({ 
  children, 
  animation = "fadeUp", 
  delay = 0, 
  duration = 0.6,
  className = "",
  ...props 
}) => {
  const { ref, isInView } = useScrollAnimation();

  const animations = {
    fadeUp: {
      initial: { opacity: 0, y: 80, scale: 0.95 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: { 
        duration: duration * 1.5, // Slower duration
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 60, // Softer spring
        damping: 20 // More damping for smoother feel
      }
    },
    fadeDown: {
      initial: { opacity: 0, y: -80, scale: 0.95 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: { 
        duration: duration * 1.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 60,
        damping: 20
      }
    },
    fadeLeft: {
      initial: { opacity: 0, x: 80, scale: 0.95 },
      animate: { opacity: 1, x: 0, scale: 1 },
      transition: { 
        duration: duration * 1.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 60,
        damping: 20
      }
    },
    fadeRight: {
      initial: { opacity: 0, x: -80, scale: 0.95 },
      animate: { opacity: 1, x: 0, scale: 1 },
      transition: { 
        duration: duration * 1.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 60,
        damping: 20
      }
    },
    scale: {
      initial: { opacity: 0, scale: 0.7, y: 20 },
      animate: { opacity: 1, scale: 1, y: 0 },
      transition: { 
        duration: duration * 1.5,
        delay,
        ease: [0.34, 1.56, 0.64, 1],
        type: "spring",
        stiffness: 80,
        damping: 18
      }
    },
    slideUp: {
      initial: { opacity: 0, y: 120, scale: 0.9 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: { 
        duration: duration * 1.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 50,
        damping: 25
      }
    },
    bounce: {
      initial: { opacity: 0, y: 60, scale: 0.8 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: { 
        duration: duration * 1.5,
        delay,
        ease: [0.68, -0.55, 0.265, 1.55],
        type: "spring",
        stiffness: 120,
        damping: 15
      }
    },
    float: {
      initial: { opacity: 0, y: 40, scale: 0.9, rotateX: -15 },
      animate: { opacity: 1, y: 0, scale: 1, rotateX: 0 },
      transition: { 
        duration: duration * 1.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 60,
        damping: 20
      }
    }
  };

  const selectedAnimation = animations[animation] || animations.fadeUp;

  return (
    <motion.div
      ref={ref}
      initial={selectedAnimation.initial}
      animate={isInView ? selectedAnimation.animate : selectedAnimation.initial}
      transition={selectedAnimation.transition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
