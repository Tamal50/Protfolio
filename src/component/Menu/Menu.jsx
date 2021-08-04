import React from 'react';
import "../../Style/Menu.scss"

const Menu = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={"menu " + (menuOpen && "active")} id="menu">
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#header">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#protfolio">Protfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#project">Project</a>
                </li>
            </ul>
        </div>
    );
};

export default Menu;