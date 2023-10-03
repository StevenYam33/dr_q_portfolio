import React from 'react'
import "./Contact.css"
import data from "../../Data/data.json"
import Pic from "../../Assets/Images/Placements/Toowoomba/Toowoomba_1.jpeg";

import Heading from "../../components/Heading/Heading";
import { SocialButtons } from '../../components/Buttons/SocialButtons';
import ContactForm from '../../components/Forms/ContactForm';

import AnimatedRoute from "../../AnimatedRoute";

export const Contact = () => {
  const getHeading = data.headings.find(item => item.id === "contact");

  return(
      <section id={getHeading.id}>
        <Heading title={getHeading.title} subtitle={getHeading.subtitle}/>
        <div className="contact-container">
          <div className="contact-card">
            <img src={Pic} alt='Profile Pic' className="contact-img"></img>
            <SocialButtons />
          </div>
          <ContactForm />
        </div>
      </section>
  );
}

export default AnimatedRoute(Contact);