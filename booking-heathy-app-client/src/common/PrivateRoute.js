import React from 'react';
import {
    Route,
    Redirect
  } from "react-router-dom";
  
  
const PrivateRoute = ({ component: Component, authenticated, onchangerLoadHeard, ...rest }) => (
    <Route
      {...rest}
      render={
        props =>
          authenticated ? (
            <Component onchangerLoadHeard = {onchangerLoadHeard}  {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          )
      }
    />
);
  
export default PrivateRoute