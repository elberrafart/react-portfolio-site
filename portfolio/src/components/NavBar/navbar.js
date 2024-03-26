import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import contactImg from '../../assets/messenger.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt='logo' className='logo'/>
            <div className='desktopMenu'>
                <Link to="intro" className='desktopMenuListItem' smooth={true} duration={1000}>Home</Link>
                <Link to="skills" className='desktopMenuListItem' smooth={true} duration={1000}>About</Link> {/* Assuming 'About' links to 'Skills' */}
                <Link to="works" className='desktopMenuListItem' smooth={true} duration={1000}>Portfolio</Link>
                {/* Include any other links as needed */}
            </div>
            <Link to="contact" className='desktopMenuBtn' smooth={true} duration={1000}>
                <img src={contactImg} alt='' className="desktopMenuImg" /> Contact Me
            </Link>
        </nav>
    );
};

export default Navbar;
