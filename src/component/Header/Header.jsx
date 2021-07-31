import React, { useEffect, useRef } from 'react';
import "./Header.scss"
import { init } from 'ityped'

const Header = () => {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer", "Designer"],
    });
  }, []);

    return (
        <div className="header" id="header">
          <div className="left">
            <div className="imageContainer">
              <img src="image/profile3.jpg" alt="" />
            </div>
          </div>
          <div className="right">
            <div className="wrapper">
              <h2>Hi There, I'm</h2>
              <h1>Tamal Datta</h1>
              <h3>Freelance <span ref={textRef}></span></h3>
            </div>
            <a href="#intro">
              <img src="image/down.png" alt="" />
            </a>
          </div>
        </div>
    );
};

export default Header;