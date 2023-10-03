import React from 'react'
import './IntroSection.css'
import data from '../../../../Data/data.json'

import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

const IntroSection = () => {
  const text = data.introduction.short;
  const words = text.split(' ');

  return (
    <div id='intro'>
        <div className="introContainer">
          <h2>
            {words.map((word, index) => (
              <span key={index} className='spanContainer'>
                <motion.span
                  initial={{ y:`100%` }}
                  whileInView={{ y: `0%` }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1
                  }}
                >
                  {word} 
                </motion.span>
              </span>
            ))}
          </h2>
        </div>
        <Link to='/About'>
          <motion.div 
          className="button"
          whileHover={{ 
            y: [-5, 5, -5],
            transition: {
              duration: 3,
              repeat: Infinity,
           },
          }}
          whileTap={{scale: 0.95}}
          >About Me</motion.div>
        </Link>
    </div>
  )
}

export default IntroSection