import React from 'react'
import './SocialButtons.css';
import data from '../../Data/data.json'
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const SocialButton = ({ icon, url }) => {
    const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
    }
    return (
      <motion.a
        whileHover={{ y: -5, scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        variants={item}
        href={url}
        target='_blank'
        rel="noopener noreferrer"
      >
        <Icon className='social-icon icon' icon={icon} />
      </motion.a>
    );
};

export const SocialButtons = () => {
  return (
    <motion.div 
        initial="hidden"
        animate="visible"
        transition={
            {staggerChildren: 0.25}
        }
        className="social-buttons"
    >
        <SocialButton icon="iconoir:instagram" url={data.urls.instagram} />
        <SocialButton icon="iconoir:facebook-tag" url={data.urls.facebook} />
        <SocialButton icon="iconoir:linkedin" url={data.urls.linkedin} />
        <SocialButton icon="iconoir:mail" url={`mailto:${data.urls.email}`} />
  </motion.div>
  )
}
