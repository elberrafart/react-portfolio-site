import React from "react";
import './intro.css'
import bg from '../../assets/razcartoon.png'
import {Link} from 'react-scroll'
import btnImg from '../../assets/hireme.png'


const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">What's up!</span>
                <span className="introText">I'm <span className="introName">Raz</span> <br /> Software Engineer</span>
                <p className="introPara">I am a versatile Software Engineer with experience <br></br> in many realms of technology</p>
                <Link><button className="btn"> <img src={btnImg} alt="Hire Me" className="btnImg"/>Hire Me</button></Link>
            </div>
            <img src={bg} alt='Profile' className="bg" />
        </section>
    )
}

export default Intro