
import React from 'react';
// import Navbar from './Navbar'; Don't do this
import Navbar from '../../component/landingNavbar/Navbar';
import Header from '../../component/landingHeader/Header';
import Body from '../../component/landingBody/Body';
import Steps from '../../component/landingSteps/Steps';
function LandingPage() {
    return (
      
      <div className="LandingPage">
        {/* LandingPage */}
        <Navbar />
            {/* <h1>Welcome to My Website!</h1> */}
            {/* Other content of your landing page */}
        <Header/>
        <Body/>
        <Steps/>
        
      </div>
    );
  }
  
  export default LandingPage;


