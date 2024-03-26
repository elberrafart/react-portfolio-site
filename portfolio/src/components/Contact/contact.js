import React from 'react'
import './contact.css'
import LinkedIn from '../../assets/linkedinlogo.png'
import GitHub from '../../assets/gitlogo.png'
import Instagram from '../../assets/instagramlogo.png'


const Contact = () => {
    return (
        <section>
            <h2 className='contactMe'>Contact Me</h2>
            <form id="contactForm">
                <input type="text" id="name" name="name" placeholder="Your name" required />

                <input type="email" id="email" name="email" placeholder="Your email" required />

                <textarea id="comment" name="comment" placeholder="Your comment" rows="4" required></textarea>

                <button type="submit">Submit</button>
            </form>
            <div className='links'>
                <a href="https://www.linkedin.com/in/raz-rafart/" target="_blank" rel="noopener noreferrer">
                    <img className='linksImg' alt='LinkedIn' src={LinkedIn} />
                </a>
                <a href="https://www.instagram.com/elbz_raz/" target="_blank" rel="noopener noreferrer">
                    <img className='linksImg' alt='Instagram' src={Instagram} />
                </a>
                <a href="https://github.com/elberrafart" target="_blank" rel="noopener noreferrer">
                    <img className='linksImg' alt='GitHub' src={GitHub} />
                </a>
            </div>
        </section>
    )
}

export default Contact