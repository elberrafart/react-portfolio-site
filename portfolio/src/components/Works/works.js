import React from "react";
import './works.css';
import Portfolio1 from '../../assets/superplumberhangman.png';
import Portfolio2 from '../../assets/anirate.png';
import Portfolio3 from '../../assets/gainzlog.png';

const Works = () => {
    return (
        <section id='works'>
            <h2 className='worksTitle'>My Portfolio</h2> 
            <span id='worksDesc'>I take pride in creating unique ideas</span>
            <div className="worksImgs">
                <a href="https://github.com/elberrafart/hang-man" target="_blank" rel="noopener noreferrer">
                    <img src={Portfolio1} className="worksImg" alt='Project 1' />
                </a>
                <a href="https://github.com/nickkucway/anirate" target="_blank" rel="noopener noreferrer">
                    <img src={Portfolio2} className="worksImg" alt='Project 2' />
                </a>
                <a href="https://github.com/elberrafart/fitness-tracker" target="_blank" rel="noopener noreferrer">
                    <img src={Portfolio3} className="worksImg" alt='Project 3' />
                </a>
            </div>
        </section>
    );
};

export default Works;
