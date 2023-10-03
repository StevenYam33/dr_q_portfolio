import React from 'react'
import "./ContactForm.css"

import { useForm } from '@formspree/react';
import { motion } from 'framer-motion';

function Form() {
    const [state, handleSubmit] = useForm("mgejplkw");
    if (state.succeeded) {
        return <motion.p
            initial={{x: -500}}
            animate={{x: 0}}
            exit={{x: 500}}
            className='formSucess'>
                Thanks for contacting!
            </motion.p>
    }
    return (
        <form className='contact-form' onSubmit={handleSubmit}>
            <input className='form-input' type="text" name='name' id='full-name' placeholder='Name' required />
            <input className='form-input' type="email" name="email" id="email-address" placeholder="Email" required />
            <textarea className='form-input' name="message" id="message" cols="30" rows="3" placeholder="Leave your message here..." required ></textarea>
            <button className='form-button' type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    );
}

function ContactForm(){
    return (
        <div className="form-container">
            <Form />
        </div>
    ) 
}

export default ContactForm;