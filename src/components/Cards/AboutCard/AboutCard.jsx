import React, { useState, useRef, useEffect } from 'react'
import './AboutCard.css'

import ProfilePic from '../../../Assets/Images/Profile/profile_pic_trans.png';
import Background from '../../../Assets/Images/Profile/profile_background.jpg'

import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';

import { IntroBlock } from './Blocks/IntroBlock'
import { LanguageBlock } from './Blocks/LanguageBlock';
import { DentalSkillsBlock } from './Blocks/DentalSkillsBlock'
import { PersonalityBlock } from './Blocks/PersonalityBlock';

export const AboutCard = () => {
  const [isContentOpen, setisContentOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [selectedHeader, setSelectedHeader] = useState(null);
  const contentRef = useRef(null);

  const openContent = (content) => {
    setSelectedContent(content);
    setisContentOpen(true);
  }

  const closeContent = () => {
    setSelectedContent(null);
    setisContentOpen(false);
  } 
  
  const openBlock = (content) =>{
    if (!isContentOpen && selectedContent === null ){
      openContent(content);
    } else if (isContentOpen){
      if (selectedContent.type.name === content().type.name){
        closeContent();
      } else {
        closeContent();
        setTimeout(() =>{
          openContent(content);
        },150)
      }
    }
  }

  useEffect (() =>{
    if (isContentOpen){
      window.addEventListener('resize', closeContent);
      document.querySelector(".card-outside").classList.remove("no-interact");
    }
  },[isContentOpen])

  const isSmallScreen = window.innerWidth <= 650;
  const backIcon = isSmallScreen ? "iconoir:undo" : "iconoir:arrow-left";
  
  const outsideInital = isSmallScreen ? { y: -300, opacity: 0 } :  { x: -300, opacity: 0 };
  const outsideAnimate = isSmallScreen ? { y: isContentOpen? 125 : 0, opacity: 1, transition:{duration: 0.5}} :  { x: 0, opacity: 1, transition:{duration: 0.5}};

  const insideInital = isSmallScreen ? { y: -300 , opacity: 0 } :  { x: -340 , opacity: 0 };
  const insideAnimate = isSmallScreen ? { y: 0, opacity: 1, transition:{delay: 0.25, duration: 0.2}} :  { x: 0, opacity: 1, transition:{delay: 0.25, duration: 0.2} };
  const insideExit = isSmallScreen ?   {y: -300, opacity: 0, transition:{duration: 0.2}} :   {x: -340, opacity: 0, transition:{duration: 0.2}};

  return (
    <div className={`card-container ${isContentOpen ? 'opened' : 'closed'}`}>
      <AnimatePresence>
        <motion.div
            initial={outsideInital}
            animate={outsideAnimate}
            className="card-outside no-interact"
            layout
        >
          <div className="pic-container">
            <div className="person-container" onClick={closeContent}>
              <img className='hexagon' src={Background} alt="Profile Pic Background" />
              <img className='profile-pic' src={ProfilePic} alt="Profile Pic" />
            </div>
          </div>
          <div className="title-container">
            <h1>Xuan Hui Khiu</h1>
            <p>Final Year Dental Student</p>
          </div>
          <div className="about">
            <motion.div
              whileHover={{ translateY: -10 }}
            >
              <Icon 
                className='about-icon icon' 
                icon="iconoir:user-circle" 
                onClick={ () => {
                  openBlock(() => <IntroBlock />);
                  setSelectedHeader('Intro');
                }} 
                />
            </motion.div>
            <motion.div
              whileHover={{ translateY: -10 }}
            >
            <Icon 
              className='about-icon icon'
              icon="ph:tooth" onClick={ () => {
                openBlock(() => <DentalSkillsBlock />);
                setSelectedHeader('Dental Skills');
              }}
              />
            </motion.div>
            <motion.div
              whileHover={{ translateY: -10 }}
            >
            <Icon 
              className='about-icon icon' 
              icon="iconoir:chat-bubble-translate" 
              onClick={() => {
                openBlock(() => <LanguageBlock />);
                setSelectedHeader('Language');
              }} 
              />
            </motion.div>
            <motion.div
              whileHover={{ translateY: -10 }}
            >
              <Icon 
                className='about-icon icon' 
                icon="iconoir:learning" 
                onClick={() =>{
                  openBlock(() => <PersonalityBlock />);
                  setSelectedHeader('Personality');
                }}
              />
            </motion.div>
          </div>

        </motion.div>

        {isContentOpen && (
          <motion.div
            key="inside"
            initial={insideInital}
            animate={insideAnimate}
            exit={insideExit}
            ref={contentRef}
            className="card-inside"
            layout
          >
            <div className='inside-heading'>
             <div className='header'>{selectedHeader}</div>                    
             <Icon className="toggle" icon={backIcon}  onClick={closeContent} />
            </div>
            <div className="inside-content">
              {selectedContent}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
