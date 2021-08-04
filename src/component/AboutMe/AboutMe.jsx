import React from 'react';
import "../../Style/AboutMe.scss"
import IconList from '../../Api/Icon';

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
                    <a target="_blank" rel="noreferrer" href="https://drive.google.com/u/0/uc?id=1dWxNwR_UfSiLeyf3CElh-fpXaMR4iKsu&export=download"><button className="CVbutton">Download CV</button></a>
                </div>
        </div>
    );
};

export default AboutMe;