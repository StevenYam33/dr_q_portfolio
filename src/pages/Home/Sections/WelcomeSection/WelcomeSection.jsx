import React from 'react'
import './WelcomeSection.css'
import ProfilePic from '../../../../Assets/Images/Profile/profile_pic_trans.png';

import { motion } from 'framer-motion';

export default function WelcomeSection() {
  return (
    <section id='welcome'>
        <div className="welcomeContainer">
            <motion.div 
            className='welcomePicContainer fancyBG'
            initial={{ x : -500, opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            >
                <div 
                className='welcomePic fancyBG' 
                style={{
                    backgroundImage: `url(${ProfilePic})`
                }}
                ></div>
            </motion.div>
            <motion.div 
            className='welcomeTitle'
            initial={{ x : 500, opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            >
                <h1>Hello!</h1>
                <h2>Welcome to my website</h2>
            </motion.div>
        </div>
    </section>
  )
}
