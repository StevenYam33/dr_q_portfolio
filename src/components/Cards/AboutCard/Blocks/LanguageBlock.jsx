import React from 'react';
import data from '../../../../Data/data.json'
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export const LanguageBlock = () => {
    const maxRating = 5;
    const stars = Array.from({ length: maxRating }, (_, index) => index + 1);

  return (
    <div className="block">
        <motion.ul >
            {data.languages.map((language, index) => (
                <motion.li
                    key={index} 
                    initial={{ opacity: 0, x: -100}} 
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45 + 0.25 * index }}
                >
                    {language.id}:
                    <div 
                        className='empty-stars-container'
                        style={{display:"flex", gap: "0.5rem", position: "absolute"}}
                    >
                        {stars.map((star) => (
                            <div key={star}>
                                <Icon
                                    style={{width: "25px", height: "25px"}}
                                    icon={"ph:star-bold"}
                                    className="empty-star"
                                />
                            </div>
                        ))}
                    </div>
                    <div 
                        className='stars-container'
                        style={{display:"flex", gap: "0.5rem"}}
                    >
                        {stars.map((star) => (
                            <motion.div
                                    key={star}
                                    initial={{ scale: 0.1, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.25 * (star + index)}}
                                >
                                    <Icon
                                        style={{width: "25px", height: "25px"}}
                                        icon={star <= language.rating ? "ph:star-fill" : "ph:star-bold"}
                                        className="star"
                                    />
                            </motion.div>
                        ))}
                    </div>
                </motion.li>
            ))}
        </motion.ul>
    </div>
  )
}
