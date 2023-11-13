import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({ element, roles }) => {
  const storedRoles = JSON.parse(localStorage.getItem('role')) || [];

  // Check if the user has at least one of the required roles
  const hasRequiredRole = roles.some(role => storedRoles.includes(role));

  if (!hasRequiredRole) {
    // Redirect to the desired route for users without the required role
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    return <Navigate to="/login" />;
  }

  return <>{element}</>; // Wraping the element in a fragment
};

export default PrivateRoute;
