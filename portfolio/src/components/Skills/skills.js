import React from "react";
import './skills.css'
import AppDesign from '../../assets/appdesign.png'
import WebDesign from'../../assets/webdesign.png'
import GraphicDesign from'../../assets/graphicdesign.png'
import App from "../../App";


const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I Do</span>
            <span className="skillDesc">I am a skilled Web Developer</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                        <p>Websites tailored for your needs</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign"className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>Create applications with real-world use</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={GraphicDesign} alt="GraphicDesign" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>Graphic Design</h2>
                        <p>High Quality Image Designs</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills