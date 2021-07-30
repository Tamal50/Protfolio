import React from 'react';
import "./Menu.scss"

const Menu = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={"menu " + (menuOpen && "active")} id="menu">
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Intro</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#protfolio">Protfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#work">Work</a>
                </li>
            </ul>
            
        </div>
    );
};

export default Menu;