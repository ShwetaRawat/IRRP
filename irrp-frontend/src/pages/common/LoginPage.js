import React from 'react';
import Navbar from '../../component/landingNavbar/Navbar';
import LoginPage  from '../../component/loginPage/LoginPage';

function LoginPage() {
    return (
      <div className="LoginPage">
        <Navbar />
        <LoginPage />
      </div>
    );
  }
  
  export default LoginPage;