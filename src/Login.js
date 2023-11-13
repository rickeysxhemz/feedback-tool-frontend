import {React, useState} from 'react';
import logo from './assets/images/logo.png';
import axios from 'axios';
import { baseUrl } from './BaseUrl'
import AlertMessage from './components/alerts';
import { useNavigate } from "react-router-dom";
// import { Navigate } from 'react-ionicons';
import RegisterModal from './RegisterModal';

// import './App.css';

function  Login() {

  const [showRegister, setShowRegister] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const navigate = useNavigate();


  const handleSubmit = (e) => {
      e.preventDefault();

      if (!email) {
          AlertMessage("error", "Email should not be empty");
          return;
      }
      if (!password) {
          AlertMessage("error", "Password should not be empty");
          return;
      }
      const body = {
          email,
          password
      }
      setSubmitted(true);
      axios.post(`${baseUrl}/api/auth/login`, body)
          .then(res => {
              console.log(res.data.records)
              if (res.data.errors.length) {
                  AlertMessage('error', res.data.errors);
                  setSubmitted(false);
                  setEmail('')
                  setPassword('')
              }
              else {
                  if(res.data.records.roles[0] === "admin"){
                  navigate("/dashboard1");
                  setSubmitted(false);
                  setEmail('')
                  setPassword('')
                  localStorage.setItem('user', JSON.stringify(res.data.records.user))
                  localStorage.setItem('role', JSON.stringify(res.data.records.roles))
                  localStorage.setItem('token', res.data.records.access_token)
                  AlertMessage("success", res.data._metadata.message)
                  }else{
                    navigate("/dashboard4");
                    setSubmitted(false);
                    setEmail('')
                    setPassword('')
                    localStorage.setItem('user', JSON.stringify(res.data.records.user))
                    localStorage.setItem('role', JSON.stringify(res.data.records.roles))
                    localStorage.setItem('token', res.data.records.access_token)
                    AlertMessage("success", res.data._metadata.message)
                  }
                  
              }

          })
        }

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
                        <h2>Login</h2>
                      </div>
                      <form action="#">
                        <div className="form-group">
                          <label htmlFor="username"><b>Email</b></label>
                          <input
                             onChange={(e) => setEmail(e.target.value)}
                             type="email"
                             name="email"
                             value={email}
                            className="form-control floating"
                            id="username"
                            placeholder="Email"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="password"><b>Password</b></label>
                          <input
                            onChange={(e) => setPassword(e.target.value)} 
                            type="password"
                            name="password" 
                            value={password}
                            className="form-control floating"
                            id="password"
                            placeholder="Password"
                          />
                        </div>
                        <div className="btn-box text-center">
                          <button
                            onClick={handleSubmit}
                            className="btn btn-primary text-dark"
                            type="submit"
                          >
                            {submitted ? 'loading' : "Login"}
                          </button>
                        </div>
                          
                      </form>
                      <RegisterModal 
                            show={showRegister}
                            onHide={() => setShowRegister(false)}  
                          />
                            <div className="btn-box text-left">
                          <button  className="btn btn-primary text-dark" onClick={() => setShowRegister(true)}>
                                    Register
                                  </button>
                                  </div>
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
