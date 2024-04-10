
import React from 'react';
// import Navbar from './Navbar'; Don't do this
import Navbar from '../../component/landingNavbar/Navbar';
import Header from '../../component/landingHeader/Header';
function LandingPage() {
    return (
      
      <div className="LandingPage">
        {/* LandingPage */}
        <Navbar />
            {/* <h1>Welcome to My Website!</h1> */}
            {/* Other content of your landing page */}
        <Header/>
      </div>
    );
  }
  
  export default LandingPage;


