import React from 'react';
import './menuBar.css';

function MenuBar(){
    return(
        <div className="MenuBar">
            <menu>
                {/* left panel */}
                <div id="left-panel">
                    <ul>
                        <li>Dashboard</li>
                        <li>Register</li>
                        <li>Complaints</li>
                        <li>Feedback</li>
                    </ul>
                </div>

                {/* top panel */}
                <div id="top-menu">
                    {/* <a id="home-link" href="#">Home</a> home logo
                    <a id="profile-link" href="#">User Profile</a> user profile logo */}
                </div>
            </menu>

        </div>
    )
}
export default MenuBar;