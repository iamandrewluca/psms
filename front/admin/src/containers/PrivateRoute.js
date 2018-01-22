import React from 'react'
import {Redirect, Route} from "react-router"

const PrivateRoute = ({isAuthenticated, component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated ? (
      <Component isAuthenticated={isAuthenticated} {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )} />
)

export default PrivateRoute
