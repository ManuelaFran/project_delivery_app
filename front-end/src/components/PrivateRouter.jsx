import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { object } from 'prop-types';
import UserContext from '../contexts/UserContext/UserContext';

function PrivateRoute({ children }) {
  const { client } = useContext(UserContext);
  if (!client.user.token) {
    return <Navigate to="/login" />;
  }

  return children;
}

PrivateRoute.propTypes = {
  children: object,
}.isrequired;

export default PrivateRoute;
