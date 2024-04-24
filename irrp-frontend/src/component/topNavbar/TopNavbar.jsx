import React from 'react';
import './TopNavbar.css';
// import logoW from '../images/logoW.png';
import homeIcon from '../images/homePage.png';
import userIcon from '../images/user.png';

function TopNavbar() {
  return (
    <div className="TopNavbar">
      {/* <img src={logoW} alt="Logo" className="logo" /> */}
      <img src={homeIcon} alt="Home" className="icon" />
      <img src={userIcon} alt="User" className="icon" />
    </div>
  );
}

export default TopNavbar;
