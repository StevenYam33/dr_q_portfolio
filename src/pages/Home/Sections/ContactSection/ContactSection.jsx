import React, { useRef } from 'react'
import './ContactSection.css'
import Footer from '../../../../components/Footer/Footer'

import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from 'framer-motion'

const ContactSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "1 1"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [`-100%`, `0%`]);

  return (
    <div id='footer'>
        <div className="contactContainer">
            <div className="heading">
                <span>Let's Talk</span>
            </div>
            <div className="buttonContainer">
                <Link to='/Contact'>
                    <motion.div
                    ref={ref}
                    style={{
                        x: x,
                    }}
                    className="button"
                    whileHover={{
                        y: [-5, 5, -5],
                        transition: {
                        duration: 3,
                        repeat: Infinity,
                    },
                    }}
                    whileTap={{scale: 0.95}}
                    >
                        Get in touch
                    </motion.div>
                </Link>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default ContactSection