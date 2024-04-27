import React from 'react';
import './menuBar.css';
import homeicon from '../images/homeicon.png';
import irrpLogo from '../images/irrpLogo.png';
import complaintIcon from '../images/complaints.png';
import register from '../images/register.png';
import homeColored from '../images/homeColored.png';
import userColored from '../images/userColored.png';

function MenuBar(){
    return(
        <div className="MenuBar">
            <menu>
                {/* left panel */}
                <div id="left-panel">
                    <img src={irrpLogo} className="irrpLogo" alt-text="irrp-logo" />
                    <ul>
                        <li><img src={homeicon} className="left-panelIcons" alt-text="homeicon" />Dashboard</li>
                        <li><img src={register} className="left-panelIcons" alt-text="register" />Register</li>
                        <li><img src={complaintIcon} className="left-panelIcons" alt-text="complaintIcon" />Complaints</li>
                        <li><img src={complaintIcon} className="left-panelIcons" alt-text="" />Feedback</li>
                    </ul>
                </div>

                {/* top panel */}
                <div id="top-menu">
                   <img src={homeColored} className='top-panelIcons'id="homeicon"  alt-text="home" />
                   <img src={userColored} className='top-panelIcons' id="userprofile" alt-text="userprofile" />

                </div>
            </menu>

        </div>
    )
}
export default MenuBar;