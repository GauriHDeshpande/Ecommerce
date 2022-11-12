import React, { useState } from 'react';
import './auth.css';
import Navbar from "../../components/Navbar/Navbar";

const Auth = () => {
  const [showSignup, setSignup] = useState(false);
  const toggleHandler = () => {
    setSignup(!showSignup);
  }
    const renderComponents = () => {
        return(
            <>
            <Navbar/>
            <div className='login'>
              <div className="container">
                <div className="row">
                  <h2 className='home-title'>Welcome to Instashop</h2>
                  <div className="login-wrapper">
                    <h4 className='text-center'>{showSignup ? "Sign Up" : "Sign In"}</h4>
                    <div className="input-group">
                      <input type="text" className='form-control' placeholder='User Name' autoFocus autoComplete = 'off' />
                    </div>
                    <div className="input-group">
                      <input type="password" className='form-control' placeholder='Password' autoComplete = 'off' />
                    </div>
                    { showSignup && <div className="input-group">
                      <input type="email" className='form-control' placeholder='Email' autoComplete = 'off' />
                    </div>}
                    <div className="input-group">
                      <input type="submit" className='form-control btn btn-primary' value={showSignup ? "Sign Up" : "Sign In"} />
                    </div>
                    <div className='auth-msg' onClick={toggleHandler}>
                      {showSignup ? "Already have an Account? Sign In" : "Don't have an Account Sign Up"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </>
        )
    }
  return (
    renderComponents()
  )
}

export default Auth
