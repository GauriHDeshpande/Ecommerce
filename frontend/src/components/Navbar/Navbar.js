import React from 'react';
import "./Navbar.css"

const Navbar = () => {
  const renderComponents = () => {
    return (
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="header-wrapper">
              <div className="logo">
                <a href="/">ECommerce</a>
              </div>
              <div className="user-actions">
                <a href="/cart">Cart</a>
                <div className="user-intro">Guest</div>
                <div className="login-btn">
                  <a href="/login">Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    renderComponents()
  )
}

export default Navbar
