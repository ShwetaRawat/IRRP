

import React from 'react';
import './NavigationPanel.css'; 

import logoW from '../images/logoW.png';
import dashboardIcon from '../images/dashboard.png';
import paperReqIcon from '../images/paperReq.png';
import complaintsIcon from '../images/complaints.png';
import downloadsIcon from '../images/download.png';

function NavigationPanel() {
  return (
    <div className="navigationPanel">
      <img src={logoW} alt="irrp" className="irrp" />
      <img src={dashboardIcon} alt="Dashboard" className="icon" />
      <img src={paperReqIcon} alt="Paper Requests" className="icon" />
      <img src={complaintsIcon} alt="Complaints" className="icon" />
      <img src={downloadsIcon} alt="Downloads" className="icon" />
    </div>
  );
}

export default NavigationPanel;
