import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes,Switch, useLocation} from 'react-router-dom';
import './index.css';
import App from './App';
// import Navbar from './Navbar';
import reportWebVitals from './reportWebVitals';
// import Checkout from './Checkout';
// import Login from './Login';
// import Dashboard1 from './components/Dashboard1';
// import Dashboard2 from './components/Dashboard2';
// import Dashboard3 from './components/Dashboard3';
// import Dashboard4 from './components/Dashboard4';
// import Dashboard5 from './components/Dashboard5';
// import Masterdashboard1 from './components/Masterdashboard1';
// import Masterdashboard2 from './components/Masterdashboard2';
// import Recyclerdetaildashboard from './components/Recyclerdetaildashboard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
 </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
