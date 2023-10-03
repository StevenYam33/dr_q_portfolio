import React from "react";
import './Home.css'

import { SocialButtons } from "../../components/Buttons/SocialButtons";
import WelcomeSection from './Sections/WelcomeSection/WelcomeSection'
import IntroSection from "./Sections/IntroSection/IntroSection";
import TestimonialsSection from "./Sections/TestimonialsSection/TestimonialsSection";
import ExperiencesSection from './Sections/ExperiencesSection/ExperiencesSection'
import ContactSection from "./Sections/ContactSection/ContactSection";

import AnimatedRoute from "../../AnimatedRoute";

function Home() {
    return(
        <section id='home'>
            <SocialButtons />

            <WelcomeSection />
            <IntroSection />
            <TestimonialsSection />
            <ExperiencesSection />
            <ContactSection />
        </section>
    );
}

export default AnimatedRoute(Home);