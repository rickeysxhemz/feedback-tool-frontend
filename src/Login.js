import React from 'react';
import logo from './assets/images/logo.png';
// import './App.css';

function  Login() {
  return (
    <div className="home-page bg-one">
      <div className="main-wrapper">
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3" style={{ backgroundColor: '#FFEECD',paddingTop: '20px',paddingBottom: '20px', paddingLeft: '50px', paddingRight: '50px', borderRadius: '30px' }}>
                <div className="account-content">
                  <div className="align-items-center justify-content-center">
                    <div className="login-right">
                      <div className="login-header text-center">
                        <a href="/">
                          <img src="/assets/images/logo.png" alt="logo" className="img-fluid" />
                        </a>
                        <h2>Login</h2>
                      </div>
                      <form action="#">
                        <div className="form-group">
                          <label htmlFor="username"><b>Username</b></label>
                          <input
                            type="text"
                            className="form-control floating"
                            id="username"
                            placeholder="Username"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="password"><b>Password</b></label>
                          <input
                            type="password"
                            className="form-control floating"
                            id="password"
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-group">
                          <label className="custom_check">
                            <input type="checkbox" name="rem_password" />
                            <span className="checkmark"></span> Remember password
                          </label>
                        </div>
                        <div className="btn-box text-center">
                          <button
                            className="btn btn-primary text-dark"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                        <div className="btn-box text-center">
                          <div>&nbsp;</div>
                          <button
                            className="btn btn-primary text-dark"
                            type="submit"
                          >
                            Forgotten your Username
                          </button>
                        </div>
                        <div className="btn-box text-center">
                          <div>&nbsp;</div>
                          <button
                            className="btn btn-primary text-dark"
                            type="submit"
                          >
                            Forgotten your Password
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
