// Header.js
import React from 'react';
import './Header.css'; // Make sure to create a corresponding CSS file
import IGDTUW from '../images/IGDTUW.jpeg';


function Header() {
    return (
        <header className="Header">
            <div className="igdtuw-container">
                <img src={IGDTUW} alt="IGDTUW" className="igdtuw" />
            </div>
            <div className="header-content">
                <h1>
                    <span>Indira Gandhi Delhi</span>  <br />Technical <br /> University for <br /> Women
                </h1>
                <p>Established by Govt. of Delhi vide Act 9 of 2012<br />ISO 9001:2015 Certified University</p>
                <button className="login-button">Login</button>
            </div>
        </header>
    );
}

export default Header;
