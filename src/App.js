// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes,Switch, useLocation} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Landing';
import Manufacturer from './Manufacturer';
import Devices from './Devices';
import Checkout from './Checkout';
import Login from './Login';
import Dashboard1 from './components/Dashboard1';
import Dashboard2 from './components/Dashboard2';
import Dashboard3 from './components/Dashboard3';
import Dashboard4 from './components/Dashboard4';
import Dashboard5 from './components/Dashboard5';
import Masterdashboard1 from './components/Masterdashboard1';
import Masterdashboard2 from './components/Masterdashboard2';
import Recyclerdetaildashboard from './components/Recyclerdetaildashboard';

function App() {
  return (
    <Router>
      <MainApp/>
    </Router>
  );
}

function MainApp() {
  const location = useLocation();
  const showNavbar = location.pathname === '/' || location.pathname === '/manufacturer' || location.pathname === '/devices' || location.pathname === '/checkout';
    
  return (

      <div>
        {showNavbar && <Navbar />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/manufacturer" element={<Manufacturer />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/dashboard1" element={<Dashboard1 />} />
          <Route path="/dashboard2" element={<Dashboard2 />} />
          <Route path="/dashboard3" element={<Dashboard3 />} />
          <Route path="/dashboard4" element={<Dashboard4 />} />
          <Route path="/dashboard5" element={<Dashboard5 />} />
          <Route path="/masterdashboard1" element={<Masterdashboard1 />} />
          <Route path="/masterdashboard2" element={<Masterdashboard1 />} />
          <Route path="/recycler" element={<Recyclerdetaildashboard />} />
        </Routes>
      </div>
  );
}





export default App;



