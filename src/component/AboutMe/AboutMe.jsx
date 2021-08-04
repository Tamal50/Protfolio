import React from 'react';
import "./AboutMe.scss"
import IconList from '../../Icon';

const AboutMe = () => {
    return (
        <div className="AboutMe">
            <h1>About Me</h1>
            <div className="contactButoon">
                {
                    IconList.map((icon)=>(
                        <div className="button">
                        <a target="_blank" rel="noreferrer" href={icon.link}><img src={icon.icon} alt="" /></a>
                        </div>
                    ))
                }
            </div>
                <div className="buttonwraper">
                    <button className="CVbutton">Download CV</button>
                </div>
        </div>
    );
};

export default AboutMe;