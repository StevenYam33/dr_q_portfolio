import React from "react";
import { motion } from "framer-motion";

const AnimatedRoute = (Component) => {
  const AnimatedComponent = (props) => {
    const pageVariants = {
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
        transition: {
          duration: 1,
        },
      },
      exit: {
        opacity: 0,
      },
    };

    return (
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <Component {...props} />
      </motion.div>
    );
  };

  return AnimatedComponent;
};

export default AnimatedRoute;