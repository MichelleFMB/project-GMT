import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component }) => {
  const user = useSelector((state) => state.auth.user);
  const params = new URLSearchParams(window.location.search);
  const speedParam = params.get('speed');

  if (user || (speedParam && window.location.pathname === '/tracking')) {
    return <Component />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;