import React, { useRef } from 'react';
import data from '../../../../Data/data.json'

import Heading from '../../../../components/Heading/Heading';
import Exp  from './Exp'

import { motion, useScroll, useTransform } from 'framer-motion';

export default function ExperiencesSection() {
    const getHeading = data.headings.find(item => item.id === "experiences");

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
    });

    const opacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.35], [`0%`, `-100%`]);


  return (
    <section 
        ref={ref}
    >
        <motion.div
        className="ExpHeader"
        style={{
            opacity: opacity,
            y: y,
        }}
        >
            <Heading title={getHeading.title} subtitle={getHeading.subtitle}/>
        </motion.div>

        <div className='expContainer'>
            {data.experiences.map((exp, index) => (
                <div className="sticky-wrapper">
                    <Exp key={index} {...exp} />
                </div>
            ))}
        </div>
    </section>
  )
}