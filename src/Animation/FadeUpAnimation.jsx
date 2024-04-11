import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeUpAnimation = ({ children }) => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  // Use the `useInView` hook to determine when the component is in view
  const [ref, inView] = useInView();

  // Use the `useAnimation` hook to control the animation
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeUpVariants}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUpAnimation;
