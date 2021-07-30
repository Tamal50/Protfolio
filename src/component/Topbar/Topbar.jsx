import React from 'react';
import "./Topbar.scss"
import {Person , Mail} from "@material-ui/icons"


const Topbar = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={"topbar " + (menuOpen && "active")} id="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#header" className="logo">Tamal.</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+8801781482988</span>
                    </div>
                    <div className="itemContainer">
                        <Mail  className="icon"  />
                        <span>tamal7971@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="threeline" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;