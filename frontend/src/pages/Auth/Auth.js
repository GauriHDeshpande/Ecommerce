import React, { useState } from 'react';
import './auth.css';
import Navbar from "../../components/Navbar/Navbar";
import { signIn, signUp } from '../../api/auth';

const Auth = () => {
  const [showSignup, setSignup] = useState(false); // Whenever user add these values it gets reflected in the state variable as we are using useState here.
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [signupSuccess, setSignupSuccess] = useState(false);
  const [authResponse, setAuthResponse] = useState('');

  const toggleHandler = () => {
    clearState();
    setSignup(!showSignup);
  }
  const signinHandler = async () => {
    // Capture username and password & submit to the API server.

    const user = { userName, password };
    if(!userName || !password){
      setAuthResponse('Username and Password are required');
      setSignupSuccess(false);
      return;
    }    
    try {
      const response = await signIn(user);
      console.log(response);
      alert("user signin successfully...!")
    } catch (error) {
      console.log(error);
    }
  }
  const clearState = () => {
    setUserName('');
    setPassword('');
    setEmail('');
    setSignup(false);
    setSignupSuccess(false);
    setAuthResponse('');
  }
  const signupHandler = async () => {
    // Capture username and password & submit to the API server.

    const user = { userName, password, email };

    if(!userName || !password || !email){
      setAuthResponse('Username, Password and Email are required');
      setSignupSuccess(false);
      return;
    }    
    try {
      const {data} = await signUp(user);
      console.log(data);

      clearState();

      setSignupSuccess(true);
      setAuthResponse(data.message);

    } catch (error) {
      console.log(error);
      setSignupSuccess(false);
      setAuthResponse(error.data.message)
    }
  }
  const renderComponents = () => {
    return (
      <>
        <Navbar />
        <div className='login'>
          <div className="container">
            <div className="row">
              <h2 className='home-title'>Welcome to Instashop</h2>
              <div className="login-wrapper">
                <h4 className='text-center'>{showSignup ? "Sign Up" : "Sign In"}</h4>
                <div className="input-group">
                  <input type="text" className='form-control' placeholder='User Name' autoFocus autoComplete='off' value={userName} onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className="input-group">
                  <input type="password" className='form-control' placeholder='Password' autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {showSignup && <div className="input-group">
                  <input type="email" className='form-control' placeholder='Email' autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>}
                <div className="input-group">
                  <input type="submit" className='form-control btn btn-primary' value={showSignup ? "Sign Up" : "Sign In"} onClick={showSignup ? signupHandler : signinHandler} />
                </div>
                <div className='auth-msg' onClick={toggleHandler}>
                  {showSignup ? "Already have an Account? Sign In" : "Don't have an Account Sign Up"}
                </div>
                {authResponse && <div className={signupSuccess ? "auth-response text-info text-center" : "auth-response text-danger text-center"}>
                  {authResponse}
                </div>
                }                
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
