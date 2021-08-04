import React from 'react';
import "../../Style/Protfolio.scss"
import skills from "../../Api/skill"
import AboutMe from '../AboutMe/AboutMe';


const Protfolio = () => {
    return (
        <div className="protfolio" id="protfolio">
            <div className="skill">
                <h1>My Skills</h1>
                <div className="skilldiv">
                    
                
                    {
                
                        skills.map((skill)=>(
                        <div className="skillwraper">
                            <div className="skillimg">
                                <img src={skill?.icon} alt="" />
                            </div>
                        </div>
                        ))
                        
                    }
                    </div>
            </div>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Protfolio;