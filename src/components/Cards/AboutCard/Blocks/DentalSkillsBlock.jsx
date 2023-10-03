import React from 'react'
import data from '../../../../Data/data.json'
import { motion } from 'framer-motion';

export const DentalSkillsBlock = () => {
  const list = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.25,
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  }

  return (
    <div className="block">
      <motion.ul variants={list} initial="hidden" animate="show">
          {data['dental-skills'].map((skills, index) =>(
            <motion.li key={index} variants={item}>
              {[skills]}
            </motion.li>
          ))}
      </motion.ul>
    </div>
  )
}