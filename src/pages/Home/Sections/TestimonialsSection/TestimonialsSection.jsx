import React, {useRef} from "react";
import './TestimonialsSection.css'
import data from "../../../../Data/data.json"

import Heading from "../../../../components/Heading/Heading";
import GoogleForm from "../../../../components/Cards/ReviewCard/GoogleForm";

import { motion, useScroll, useTransform } from 'framer-motion';

function Testimonials() {
    const getHeading = data.headings.find(item => item.id === "testimonials");

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    });

    const opacity = useTransform(scrollYProgress, [0.3, 0.75], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 0.75], [`50%`, `0%`]);

    return(
        <section id={getHeading.id} 
        ref={ref}
        >
            <Heading  title={getHeading.title} subtitle={getHeading.subtitle}/>
            <motion.div
            style={{
                opacity: opacity,
                y: y,
            }}
            >
                <GoogleForm />
            </motion.div>
        </section>
    );
}

export default Testimonials;