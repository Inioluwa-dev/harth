import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-150px 0px", // Earlier trigger for slower animations
    amount: 0.2, // Trigger when 20% of element is visible
    ...options
  });

  return { ref, isInView };
};

export const useScrollAnimationWithDelay = (delay = 0, options = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px 0px",
    ...options
  });

  return { ref, isInView, delay };
};
