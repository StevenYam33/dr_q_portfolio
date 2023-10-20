import React from 'react';

import { motion } from 'framer-motion';

const ScrollSlide = ({ initial, delay, imageSrc, title, id, intro, onClick }) => {
  return (
  <div className='gallery-slide'>
    <motion.div 
      initial={{ y: initial , opacity: 0 }}
      animate={{ y: 0 , opacity: 1 }}
      transition={{ duration: 1, delay: delay }}
      className='scrollSlideImg'
      onClick={onClick}
    >
      <img src={imageSrc} alt={title} />
    </motion.div>
    <div className="description">
      <div className="heading">
        <div className="title">{title}</div>
        <div className="id">{id}</div>
      </div>
      <div className="intro">{intro}</div>
      <div 
        onClick={onClick}
        className="open"
      >
        See More
      </div>
    </div>
  </div>
  );
}

export default ScrollSlide;