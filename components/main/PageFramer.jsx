import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Framer({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  const variants = {
    hidden: { opacity: 0, x: 0, y: -200 },
    enter: { opacity: 1, x: 0, y: 0 },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("enter");
    }
  }, [isInView]);
  return (
    <div ref={ref}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={{
          opacity: 1,
          y: 0,
          rotate: 0,
          transition: {
            type: "spring",
            stiffness: 150,
            delay: Math.random(),
            duration: 2,
          },
        }}
        transition={{ duration: 1, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
