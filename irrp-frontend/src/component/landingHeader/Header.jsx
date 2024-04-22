// Header.js
import React from 'react';
import './Header.css'; 
import IGDTUW from '../images/IGDTUW.jpeg';


function Header() {
    return (
        <header className="Header">
            <div className="header-content">
                {/* <h1>
                    <span>Indira Gandhi Delhi</span>  <br />Technical <br /> University for <br /> Women
                </h1> */}
                <h1>
                    <span >Indira Gandhi Delhi</span>  <br />Technical <br /> <span class="greenText">University</span> for <br /> <span class="greenText">Women</span>
                </h1>

                <p>Established by Govt. of Delhi vide Act 9 of 2012<br />ISO 9001:2015 Certified University</p>
                <button className="login-button">Login</button>
            </div>
            <div className="igdtuw-container">
                <img src={IGDTUW} alt="IGDTUW" className="igdtuw" />
            </div>

        </header>
    );
}

export default Header;
