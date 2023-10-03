import React from 'react'
import { motion } from 'framer-motion'

const drawVariant = (i) => {
  const delay = i * .75;

  return {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      }
    }
  };
};

export const Logo = () => {
  return (
    <motion.svg 
      width="50" 
      height="50"
      viewBox="0 0 100 100"
      animate={{x: 0, y: 0, opacity: 1, transition: {duration: 0.5}}}
    >
        <g 
            strokeWidth={"5px"}
            strokeLinecap='round'
            strokeLinejoin='round'
            fill="none" 
            stroke="currentColor"
        >
            <motion.path 
                variants={drawVariant(0)}
                initial="hidden"
                animate="visible"
                d="m 5 13 c 25 170 15 0 80 70"
            />

            <motion.path 
                variants={drawVariant(1)}
                initial="hidden"
                animate="visible"
                d="m 25 13 c 35 35 75 -50 55 35"
            />
        </g>
    </motion.svg>
  )
}
