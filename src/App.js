// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes,Switch, useLocation} from 'react-router-dom';
import Home from './Landing';
import Login from './Login';
import Dashboard1 from './components/Dashboard1';
import Dashboard3 from './components/Dashboard3';
import Dashboard4 from './components/Dashboard4';
import User from './components/User';
import PrivateRoute from './PrivateRoute';


function App() {
  return (
    <Router>
      <MainApp/>
    </Router>
  );
}

function MainApp() {
  const location = useLocation();
   
  return (

      <div>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />

        {/* Use PrivateRoute for protected routes */}
        <Route
          path="/dashboard1"
          element={<PrivateRoute element={<Dashboard1 />} roles={['admin']} />}
        />
        <Route
          path="/user"
          element={<PrivateRoute element={<User />} roles={['admin']} />}
        />
        <Route path="/feedback-details/:id" 
        element={<PrivateRoute element={<Dashboard3 />} roles={['user']} />}
        />
        <Route
          path="/dashboard4"
          element={<PrivateRoute element={<Dashboard4 />} roles={['user']} />}
        />
      </Routes>
      </div>
  );
}





export default App;



