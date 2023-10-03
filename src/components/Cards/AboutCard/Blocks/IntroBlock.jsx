import React from 'react'
import data from '../../../../Data/data.json'

import { motion } from 'framer-motion';

export const IntroBlock = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 , transition:{delay: 0.25} }}
      className='block'
    >
      {data.introduction.profile}
    </motion.div>
  )
}
