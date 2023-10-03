import React from "react";
import './About.css'
import data from "../../Data/data.json"
import AnimatedRoute from "../../AnimatedRoute";

import Heading from "../../components/Heading/Heading";
import { AboutCard } from '../../components/Cards/AboutCard/AboutCard'

function About() {
    const getHeading = data.headings.find(item => item.id === "about");

    return(
        <section id={getHeading.id}>
            <Heading title={getHeading.title} subtitle={getHeading.subtitle}/>
            <AboutCard />
        </section>
    );
}

export default AnimatedRoute(About);