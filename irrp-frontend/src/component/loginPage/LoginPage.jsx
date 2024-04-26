import './LoginPage.css';

function LoginPage() {
    return (
      <div className="LoginPage"> 
        <LoginPage>
          <div className="login-div container"> 
            <div className="profile-div row ">
              <div className="profile-admin col-sm"><p>Admin</p></div>
              < hr className="custom-hr" />
              <div className="profile-faculty col-sm"><p>Faculty</p></div>
            </div>
            <div className="login-details">
              <div className="google-login">
                <div className="google-head"><h3>Welcome Back</h3></div>
                <div className=" btn google-login-button btn-container ">
                <img src="../../../public/google-logo.png" className="google-logo" alt="google-logo" />
                  <h4 className="" >Continue with Google</h4>
                </div>
                <div className="line-container">
                <hr className="horizontal-line" />
                <span className="or-text">OR</span>
                <hr className="horizontal-line" />
              </div>
              </div>
             
              <div className="details-login">
                <div className="details-email">
                  <input type="email" id="email" name="email" placeholder="Email" required />
                </div>
                <div className="details-password">
                  <input type="password" id="password" name="password" placeholder="Password" required />
                </div>
                <p className="forgot-password">Forgot Password?</p>
                <button className="btn continue-button" > Continue</button>
                <div className="sign-up row">
                <p className="account-text">Don't have an account?</p>
                <p className="sign-up-text">Sign up</p>
                </div>
                {/*  */}
              </div>            
            </div>
          </div>
        </LoginPage>
      </div>
    );
  }
 
export default LoginPage;