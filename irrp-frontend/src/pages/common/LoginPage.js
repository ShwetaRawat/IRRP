import React from 'react';
import Navbar from '../../component/landingNavbar/Navbar';
import Login  from '../../component/loginPage/login';

function LoginPage() {
    return (
      <div className="LoginPage"> 
        <Navbar /> 
        <Login />
      </div>
    );
  }
  
  export default LoginPage;